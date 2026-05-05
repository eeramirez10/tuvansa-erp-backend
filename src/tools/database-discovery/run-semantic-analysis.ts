import fs from "node:fs/promises";
import path from "node:path";
import { RowDataPacket } from "mysql2/promise";
import { Env } from "../../config/env";
import { MySqlClient } from "../../db/mysql";

type CoverageRow = RowDataPacket & {
  total: number;
  with_key: number;
  matched: number;
};

type KeyInfoRow = RowDataPacket & {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  COLUMN_KEY: string;
  COLUMN_TYPE: string;
};

type RelationCheck = {
  name: string;
  from: string;
  fromColumn: string;
  to: string;
  toColumn: string;
  note: string;
  sampleLimit?: number;
};

type RelationResult = RelationCheck & {
  total: number;
  withKey: number;
  matched: number;
  matchPctOnWithKey: number;
};

type PrefixSemanticRow = RowDataPacket & {
  PREF: string;
  TOTAL: number;
  CON_CLI: number;
  CON_PRV: number;
};

type ModuleUsageRow = RowDataPacket & {
  TIMODULO: number;
  CNT: number;
};

type ModuleTypeRow = RowDataPacket & {
  AITIPMV: string;
  TIMODULO: number;
  TIDESCR: string;
  CNT: number;
};

class LegacySemanticAnalyzer {
  private readonly schema = Env.values.DB_NAME;

  private readonly relationChecks: RelationCheck[] = [
    { name: "Inventario -> Unidad", from: "finv", fromColumn: "IUM", to: "funidad", toColumn: "UCOD", note: "Unidad del producto", sampleLimit: 50000 },
    { name: "Inventario -> Proveedor por código", from: "finv", fromColumn: "ICODPRV", to: "fprv", toColumn: "PRVCOD", note: "Proveedor principal por código", sampleLimit: 50000 },
    { name: "Inventario -> Proveedor por secuencia", from: "finv", fromColumn: "IPRV", to: "fprv", toColumn: "PRVCOD", note: "Proveedor alterno por código corto", sampleLimit: 50000 },
    { name: "Almacén inventario -> Inventario", from: "falm", fromColumn: "ISEQ", to: "finv", toColumn: "ISEQ", note: "Stock por producto y almacén", sampleLimit: 50000 },
    { name: "Almacén inventario -> Catálogo almacenes", from: "falm", fromColumn: "ALMNUM", to: "falmcat", toColumn: "CATALM", note: "Nombre/descripción de almacén", sampleLimit: 50000 },
    { name: "Movimientos inv (faxinv) -> Inventario", from: "faxinv", fromColumn: "ISEQ", to: "finv", toColumn: "ISEQ", note: "Movimiento de producto", sampleLimit: 50000 },
    { name: "Movimientos inv (faxinv) -> Documento", from: "faxinv", fromColumn: "DSEQ", to: "fdoc", toColumn: "DSEQ", note: "Cabecera del movimiento", sampleLimit: 50000 },
    { name: "Movimientos inv (faxinv) -> Cliente", from: "faxinv", fromColumn: "CLISEQ", to: "fcli", toColumn: "CLISEQ", note: "Cliente relacionado al movimiento", sampleLimit: 50000 },
    { name: "Movimientos inv (faxinv) -> Proveedor", from: "faxinv", fromColumn: "PRVSEQ", to: "fprv", toColumn: "PRVSEQ", note: "Proveedor relacionado al movimiento", sampleLimit: 50000 },
    { name: "Pedido línea (fplin) -> Pedido encabezado", from: "fplin", fromColumn: "PESEQ", to: "fpenc", toColumn: "PESEQ", note: "Línea pertenece a pedido", sampleLimit: 50000 },
    { name: "Pedido línea (fplin) -> Inventario", from: "fplin", fromColumn: "ISEQ", to: "finv", toColumn: "ISEQ", note: "Producto de la línea", sampleLimit: 50000 },
    { name: "Pedido línea (fplin) -> Cliente", from: "fplin", fromColumn: "CLISEQ", to: "fcli", toColumn: "CLISEQ", note: "Cliente de la línea", sampleLimit: 50000 },
    { name: "Pedido línea (fplin) -> Proveedor", from: "fplin", fromColumn: "PRVSEQ", to: "fprv", toColumn: "PRVSEQ", note: "Proveedor de la línea", sampleLimit: 50000 },
    { name: "Documento (fdoc) -> Cliente", from: "fdoc", fromColumn: "CLISEQ", to: "fcli", toColumn: "CLISEQ", note: "Documento de cliente", sampleLimit: 50000 },
    { name: "Documento (fdoc) -> Proveedor", from: "fdoc", fromColumn: "PRVSEQ", to: "fprv", toColumn: "PRVSEQ", note: "Documento de proveedor", sampleLimit: 50000 },
    { name: "Movimientos (fax) -> Documento", from: "fax", fromColumn: "DSEQ", to: "fdoc", toColumn: "DSEQ", note: "Movimiento apunta a documento", sampleLimit: 50000 },
    { name: "Movimientos (fax) -> Cliente", from: "fax", fromColumn: "CLISEQ", to: "fcli", toColumn: "CLISEQ", note: "Movimiento apunta a cliente", sampleLimit: 50000 },
    { name: "Movimientos (fax) -> Proveedor", from: "fax", fromColumn: "PRVSEQ", to: "fprv", toColumn: "PRVSEQ", note: "Movimiento apunta a proveedor", sampleLimit: 50000 }
  ];

  public async run(): Promise<void> {
    const baseDir = path.resolve(process.cwd(), "docs/database/discovery");
    await fs.mkdir(baseDir, { recursive: true });

    const tableCounts = await this.getFocusedTableCounts();
    const keyInfo = await this.getFocusedKeyInfo();
    const relationResults = await this.runRelationChecks();
    const businessSamples = await this.getBusinessSamples();
    const prefixSemantics = await this.getPrefixSemantics();
    const movementModuleUsage = await this.getMovementModuleUsage();

    await this.writeSemanticDoc(
      baseDir,
      tableCounts,
      keyInfo,
      relationResults,
      businessSamples,
      prefixSemantics,
      movementModuleUsage
    );
  }

  private async getFocusedTableCounts(): Promise<Array<{ table: string; total: number }>> {
    const tables = [
      "finv","falm","falmcat","funidad","fprv","fcli","fdoc","fax","faxinv",
      "fpenc","fplin","ftipmv","flotes","fbanmov","fbenc","fcuentas"
    ];

    const placeholders = tables.map(() => "?").join(",");
    const sql = `
      SELECT TABLE_NAME, TABLE_ROWS
      FROM information_schema.TABLES
      WHERE TABLE_SCHEMA = ?
        AND TABLE_NAME IN (${placeholders})
      ORDER BY TABLE_NAME ASC
    `;

    const rows = await MySqlClient.queryReadOnly<Array<RowDataPacket & { TABLE_NAME: string; TABLE_ROWS: number }>>(
      sql,
      [this.schema, ...tables]
    );

    return rows.map((row) => ({ table: row.TABLE_NAME, total: Number(row.TABLE_ROWS ?? 0) }));
  }

  private async getFocusedKeyInfo(): Promise<KeyInfoRow[]> {
    const sql = `
      SELECT
        TABLE_NAME,
        COLUMN_NAME,
        COLUMN_KEY,
        COLUMN_TYPE
      FROM information_schema.COLUMNS
      WHERE TABLE_SCHEMA = ?
        AND TABLE_NAME IN (
          'finv','falm','falmcat','funidad','fprv','fcli','fdoc','fax','faxinv',
          'fpenc','fplin','ftipmv','flotes','fbanmov','fbenc','fcuentas'
        )
        AND (
          COLUMN_KEY IN ('PRI','UNI')
          OR COLUMN_NAME LIKE '%SEQ'
          OR COLUMN_NAME IN ('ICOD','IUM','ICODPRV','IPRV','PRVCOD','CLICOD','ALMNUM','CATALM')
        )
      ORDER BY TABLE_NAME, COLUMN_NAME
    `;

    return MySqlClient.queryReadOnly<KeyInfoRow[]>(sql, [this.schema]);
  }

  private async runRelationChecks(): Promise<RelationResult[]> {
    const results: RelationResult[] = [];

    for (const check of this.relationChecks) {
      const fromDataset = check.sampleLimit
        ? `
          (
            SELECT \`${check.fromColumn}\`
            FROM \`${check.from}\`
            WHERE \`${check.fromColumn}\` IS NOT NULL
            LIMIT ${check.sampleLimit}
          ) a
        `
        : `\`${check.from}\` a`;

      const sql = `
        SELECT
          COUNT(*) AS total,
          SUM(
            CASE
              WHEN a.\`${check.fromColumn}\` IS NULL THEN 0
              WHEN CAST(a.\`${check.fromColumn}\` AS CHAR) = '' THEN 0
              WHEN CAST(a.\`${check.fromColumn}\` AS CHAR) = '0' THEN 0
              ELSE 1
            END
          ) AS with_key,
          SUM(
            CASE
              WHEN (
                a.\`${check.fromColumn}\` IS NOT NULL
                AND CAST(a.\`${check.fromColumn}\` AS CHAR) <> ''
                AND CAST(a.\`${check.fromColumn}\` AS CHAR) <> '0'
                AND EXISTS (
                  SELECT 1
                  FROM \`${check.to}\` b
                  WHERE b.\`${check.toColumn}\` = a.\`${check.fromColumn}\`
                  LIMIT 1
                )
              ) THEN 1
              ELSE 0
            END
          ) AS matched
        FROM ${fromDataset}
      `;

      // eslint-disable-next-line no-console
      console.log(`Checking relation: ${check.from}.${check.fromColumn} -> ${check.to}.${check.toColumn}`);
      const [row] = await MySqlClient.queryReadOnly<CoverageRow[]>(sql);

      const total = Number(row?.total ?? 0);
      const withKey = Number(row?.with_key ?? 0);
      const matched = Number(row?.matched ?? 0);
      const matchPctOnWithKey = withKey > 0 ? (matched / withKey) * 100 : 0;

      results.push({ ...check, total, withKey, matched, matchPctOnWithKey });
    }

    return results;
  }

  private async getBusinessSamples(): Promise<Record<string, RowDataPacket[]>> {
    const samples: Record<string, RowDataPacket[]> = {};

    const sampleQueries: Record<string, string> = {
      inventories_core: `
        SELECT
          i.ISEQ, i.ICOD, i.IDESCR, i.IUM, u.UDESCR AS UNIDAD,
          i.ICODPRV, i.IPRV, p.PRVCOD, p.PRVNOM
        FROM finv i
        LEFT JOIN funidad u ON u.UCOD = i.IUM
        LEFT JOIN fprv p ON p.PRVCOD = i.IPRV
        ORDER BY i.ISEQ DESC
        LIMIT 10
      `,
      inventories_warehouse: `
        SELECT
          i.ICOD,
          a.ALMNUM,
          c.CATDESCR AS ALM_DESC,
          a.ALMCANT,
          a.ALMPEDIDO
        FROM falm a
        INNER JOIN finv i ON i.ISEQ = a.ISEQ
        LEFT JOIN falmcat c ON c.CATALM = a.ALMNUM
        ORDER BY a.ALMSEQ DESC
        LIMIT 10
      `,
      sales_documents: `
        SELECT
          d.DSEQ, d.DNUM, d.DFECHA, d.DVENCE, d.DTIPOC2, d.DEST,
          c.CLICOD, c.CLINOM,
          p.PRVCOD, p.PRVNOM
        FROM fdoc d
        LEFT JOIN fcli c ON c.CLISEQ = d.CLISEQ
        LEFT JOIN fprv p ON p.PRVSEQ = d.PRVSEQ
        ORDER BY d.DSEQ DESC
        LIMIT 10
      `,
      sales_movements: `
        SELECT
          ai.AISEQ, ai.DSEQ, ai.ISEQ, ai.AITIPMV, ai.AICANT, ai.AICANTF, ai.AIPRECIO, ai.AICOSTO,
          d.DNUM, d.DFECHA,
          i.ICOD, i.IDESCR
        FROM faxinv ai
        LEFT JOIN fdoc d ON d.DSEQ = ai.DSEQ
        LEFT JOIN finv i ON i.ISEQ = ai.ISEQ
        ORDER BY ai.AISEQ DESC
        LIMIT 10
      `,
      orders_lines: `
        SELECT
          l.PLSEQ, l.PESEQ, l.PLTIPMV, l.ISEQ, l.PLCANT, l.PLSURT, l.PLASIGNADO,
          e.PENUM, e.PEDESDE, e.PEVENCE,
          i.ICOD, i.IDESCR
        FROM fplin l
        LEFT JOIN fpenc e ON e.PESEQ = l.PESEQ
        LEFT JOIN finv i ON i.ISEQ = l.ISEQ
        ORDER BY l.PLSEQ DESC
        LIMIT 10
      `,
      accounting_bank: `
        SELECT
          m.BASEQ, m.BSEQ, m.POSEQ, m.PRVSEQ,
          b.BCOD, b.BNOMBRE, b.BALTA,
          p.PRVNOM
        FROM fbanmov m
        LEFT JOIN fbenc b ON b.BSEQ = m.BSEQ
        LEFT JOIN fprv p ON p.PRVSEQ = m.PRVSEQ
        ORDER BY m.BASEQ DESC
        LIMIT 10
      `
    };

    for (const [name, sql] of Object.entries(sampleQueries)) {
      // eslint-disable-next-line no-console
      console.log(`Sampling dataset: ${name}`);
      const rows = await MySqlClient.queryReadOnly<RowDataPacket[]>(sql);
      samples[name] = rows.map((row) => JSON.parse(JSON.stringify(row)) as RowDataPacket);
    }

    return samples;
  }

  private async getPrefixSemantics(): Promise<{
    fpenc: PrefixSemanticRow[];
    fplin: PrefixSemanticRow[];
    fdoc: PrefixSemanticRow[];
  }> {
    const fpenc = await MySqlClient.queryReadOnly<PrefixSemanticRow[]>(`
      SELECT
        LEFT(PENUM,1) AS PREF,
        COUNT(*) AS TOTAL,
        SUM(CLISEQ > 0) AS CON_CLI,
        SUM(PRVSEQ > 0) AS CON_PRV
      FROM fpenc
      GROUP BY LEFT(PENUM,1)
      ORDER BY TOTAL DESC
      LIMIT 20
    `);

    const fplin = await MySqlClient.queryReadOnly<PrefixSemanticRow[]>(`
      SELECT
        LEFT(PLTIPMV,1) AS PREF,
        COUNT(*) AS TOTAL,
        SUM(CLISEQ > 0) AS CON_CLI,
        SUM(PRVSEQ > 0) AS CON_PRV
      FROM fplin
      GROUP BY LEFT(PLTIPMV,1)
      ORDER BY TOTAL DESC
      LIMIT 20
    `);

    const fdoc = await MySqlClient.queryReadOnly<PrefixSemanticRow[]>(`
      SELECT
        LEFT(DNUM,1) AS PREF,
        COUNT(*) AS TOTAL,
        SUM(CLISEQ > 0) AS CON_CLI,
        SUM(PRVSEQ > 0) AS CON_PRV
      FROM fdoc
      GROUP BY LEFT(DNUM,1)
      ORDER BY TOTAL DESC
      LIMIT 25
    `);

    return { fpenc, fplin, fdoc };
  }

  private async getMovementModuleUsage(): Promise<{
    byModule: ModuleUsageRow[];
    byType: ModuleTypeRow[];
  }> {
    const byModule = await MySqlClient.queryReadOnly<ModuleUsageRow[]>(`
      SELECT
        COALESCE(tm.TIMODULO, -1) AS TIMODULO,
        COUNT(*) AS CNT
      FROM faxinv ai
      LEFT JOIN ftipmv tm ON tm.TICLA = ai.AITIPMV
      GROUP BY tm.TIMODULO
      ORDER BY CNT DESC
    `);

    const byType = await MySqlClient.queryReadOnly<ModuleTypeRow[]>(`
      SELECT
        ai.AITIPMV,
        COALESCE(tm.TIMODULO, -1) AS TIMODULO,
        COALESCE(tm.TIDESCR, '(sin match)') AS TIDESCR,
        COUNT(*) AS CNT
      FROM faxinv ai
      LEFT JOIN ftipmv tm ON tm.TICLA = ai.AITIPMV
      GROUP BY ai.AITIPMV, tm.TIMODULO, tm.TIDESCR
      ORDER BY CNT DESC
      LIMIT 80
    `);

    return { byModule, byType };
  }

  private async writeSemanticDoc(
    baseDir: string,
    tableCounts: Array<{ table: string; total: number }>,
    keyInfo: KeyInfoRow[],
    relationResults: RelationResult[],
    businessSamples: Record<string, RowDataPacket[]>,
    prefixSemantics: {
      fpenc: PrefixSemanticRow[];
      fplin: PrefixSemanticRow[];
      fdoc: PrefixSemanticRow[];
    },
    movementModuleUsage: {
      byModule: ModuleUsageRow[];
      byType: ModuleTypeRow[];
    }
  ): Promise<void> {
    const lines: string[] = [];
    const now = new Date().toISOString();

    lines.push("# Legacy Semantic Analysis (Manual SQL + IA interpretación)");
    lines.push("");
    lines.push(`- Generated at: ${now}`);
    lines.push(`- Schema: \`${this.schema}\``);
    lines.push("- Objetivo: comprender entidades, relaciones funcionales y semántica por módulo.");
    lines.push("");

    lines.push("## 1) Mapa de módulos (interpretación actual)");
    lines.push("");
    lines.push("- `Inventarios`: `finv`, `falm`, `falmcat`, `funidad`, `flotes`, `fskus`.");
    lines.push("- `Ventas / Movimientos`: `fdoc`, `fax`, `faxinv`, `ftipmv`, `fpenc`, `fplin`.");
    lines.push("- `Compras`: `fprv`, `fpenc` (cuando es compras), `fplin` (líneas), `fdoc` (algunos tipos).");
    lines.push("- `Contabilidad / Bancos`: `fbanmov`, `fbenc`, `fcuentas`, `fpoliza`.");
    lines.push("- `Catálogos`: `fcli` clientes, `fprv` proveedores, `funidad` unidades, `falmcat` almacenes.");
    lines.push("");

    lines.push("## 2) Tamaño de tablas clave");
    lines.push("");
    lines.push("| Table | Rows |");
    lines.push("|---|---:|");
    for (const row of tableCounts) {
      lines.push(`| ${row.table} | ${row.total} |`);
    }
    lines.push("");

    lines.push("## 3) Claves y columnas estructurales (tabla enfocada)");
    lines.push("");
    lines.push("| Table | Column | Key | Type |");
    lines.push("|---|---|---|---|");
    for (const row of keyInfo) {
      lines.push(`| ${row.TABLE_NAME} | ${row.COLUMN_NAME} | ${row.COLUMN_KEY || ""} | ${row.COLUMN_TYPE} |`);
    }
    lines.push("");

    lines.push("## 4) Relaciones verificadas por cobertura");
    lines.push("");
    lines.push("| Relación | With key | Matched | Match % (sobre with key) | Nota |");
    lines.push("|---|---:|---:|---:|---|");
    for (const relation of relationResults) {
      lines.push(
        `| ${relation.from}.${relation.fromColumn} -> ${relation.to}.${relation.toColumn} | ${relation.withKey} | ${relation.matched} | ${relation.matchPctOnWithKey.toFixed(2)}% | ${relation.note} |`
      );
    }
    lines.push("");

    lines.push("## 5) Reglas prácticas para deducir SQL en este proyecto");
    lines.push("");
    lines.push("- `ISEQ` es el pivote más estable para producto (`finv`).");
    lines.push("- `DSEQ` conecta cabecera de documento (`fdoc`) con movimientos (`fax`, `faxinv`).");
    lines.push("- `PESEQ` conecta pedido encabezado (`fpenc`) con líneas (`fplin`).");
    lines.push("- `CLISEQ` y `PRVSEQ` suelen ser llaves de cliente/proveedor por secuencia.");
    lines.push("- En inventarios, para etiqueta de almacén usar `falm.ALMNUM -> falmcat.CATALM`.");
    lines.push("- Para unidad legible de producto usar `finv.IUM -> funidad.UCOD`.");
    lines.push("- Para proveedor operativo en inventarios usar preferentemente `finv.IPRV -> fprv.PRVCOD`.");
    lines.push("");

    lines.push("## 6) Muestras SQL reales (LIMIT 10)");
    lines.push("");
    for (const [sampleName, rows] of Object.entries(businessSamples)) {
      lines.push(`### ${sampleName}`);
      lines.push("");
      lines.push("```json");
      lines.push(JSON.stringify(rows, null, 2));
      lines.push("```");
      lines.push("");
    }

    lines.push("## 7) Inferencia de prefijos (ventas/compras)");
    lines.push("");
    lines.push("### FPENC (encabezado pedido)");
    lines.push("| Prefijo PENUM | Total | Con cliente | Con proveedor |");
    lines.push("|---|---:|---:|---:|");
    for (const row of prefixSemantics.fpenc) {
      lines.push(`| ${row.PREF || "(vacío)"} | ${row.TOTAL} | ${row.CON_CLI} | ${row.CON_PRV} |`);
    }
    lines.push("");
    lines.push("### FPLIN (líneas)");
    lines.push("| Prefijo PLTIPMV | Total | Con cliente | Con proveedor |");
    lines.push("|---|---:|---:|---:|");
    for (const row of prefixSemantics.fplin) {
      lines.push(`| ${row.PREF || "(vacío)"} | ${row.TOTAL} | ${row.CON_CLI} | ${row.CON_PRV} |`);
    }
    lines.push("");
    lines.push("### FDOC (documentos)");
    lines.push("| Prefijo DNUM | Total | Con cliente | Con proveedor |");
    lines.push("|---|---:|---:|---:|");
    for (const row of prefixSemantics.fdoc) {
      lines.push(`| ${row.PREF || "(vacío)"} | ${row.TOTAL} | ${row.CON_CLI} | ${row.CON_PRV} |`);
    }
    lines.push("");
    lines.push("Interpretación base: `P/X` tienden a cliente; `O*` tienden a compras/proveedor.");
    lines.push("");

    lines.push("## 8) Uso real por módulo de movimiento (`faxinv` + `ftipmv`)");
    lines.push("");
    lines.push("| TIMODULO | Registros |");
    lines.push("|---|---:|");
    for (const row of movementModuleUsage.byModule) {
      lines.push(`| ${row.TIMODULO} | ${row.CNT} |`);
    }
    lines.push("");

    lines.push("### Top tipos");
    lines.push("| AITIPMV | TIMODULO | Descripción | Registros |");
    lines.push("|---|---:|---|---:|");
    for (const row of movementModuleUsage.byType) {
      lines.push(`| ${row.AITIPMV || "(vacío)"} | ${row.TIMODULO} | ${row.TIDESCR} | ${row.CNT} |`);
    }
    lines.push("");

    lines.push("## 9) Próximos pasos sugeridos");
    lines.push("");
    lines.push("- Validar tipologías de documento (`fdoc.DEST`, `fdoc.DTIPOC2`, `faxinv.AITIPMV`) para separar ventas vs compras por endpoint.");
    lines.push("- Mapear columnas `PAR*`, `VARIOS*`, `OTROS*` por módulo desde Omnis para semántica fina.");
    lines.push("- Construir un catálogo de vistas lógicas (DTO read-model) por pantalla.");
    lines.push("");

    await fs.writeFile(path.join(baseDir, "semantic-analysis.md"), lines.join("\n"), "utf8");
  }
}

async function main(): Promise<void> {
  const analyzer = new LegacySemanticAnalyzer();
  try {
    await analyzer.run();
    // eslint-disable-next-line no-console
    console.log("Legacy semantic analysis completed.");
  } finally {
    await MySqlClient.close();
  }
}

main().catch(async (error) => {
  // eslint-disable-next-line no-console
  console.error("Legacy semantic analysis failed:", error);
  await MySqlClient.close();
  process.exit(1);
});
