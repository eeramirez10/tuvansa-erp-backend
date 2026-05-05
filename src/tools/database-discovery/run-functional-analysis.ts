import fs from "node:fs/promises";
import path from "node:path";
import { RowDataPacket } from "mysql2/promise";
import { Env } from "../../config/env";
import { MySqlClient } from "../../db/mysql";

type GenericRow = RowDataPacket & Record<string, unknown>;

class LegacyFunctionalAnalyzer {
  private readonly schema = Env.values.DB_NAME;

  public async run(): Promise<void> {
    const baseDir = path.resolve(process.cwd(), "docs/database/discovery");
    await fs.mkdir(baseDir, { recursive: true });

    const findings = await this.collectFindings();
    await this.writeDoc(baseDir, findings);
  }

  private async collectFindings(): Promise<Record<string, GenericRow[]>> {
    const queries: Record<string, string> = {
      movement_modules_distribution: `
        SELECT
          COALESCE(tm.TIMODULO, -1) AS timodulo,
          COUNT(*) AS rows_count
        FROM faxinv ai
        LEFT JOIN ftipmv tm ON tm.TICLA = ai.AITIPMV
        GROUP BY tm.TIMODULO
        ORDER BY rows_count DESC
      `,
      movement_types_top: `
        SELECT
          ai.AITIPMV AS tipo,
          COALESCE(tm.TIMODULO, -1) AS timodulo,
          COALESCE(tm.TIDESCR, '(sin descripcion)') AS descripcion,
          COUNT(*) AS rows_count
        FROM faxinv ai
        LEFT JOIN ftipmv tm ON tm.TICLA = ai.AITIPMV
        GROUP BY ai.AITIPMV, tm.TIMODULO, tm.TIDESCR
        ORDER BY rows_count DESC
        LIMIT 120
      `,
      fpenc_prefix_semantics: `
        SELECT
          LEFT(PENUM, 1) AS prefijo,
          COUNT(*) AS total,
          SUM(CLISEQ > 0) AS con_cliente,
          SUM(PRVSEQ > 0) AS con_proveedor
        FROM fpenc
        GROUP BY LEFT(PENUM, 1)
        ORDER BY total DESC
        LIMIT 20
      `,
      fplin_prefix_semantics: `
        SELECT
          LEFT(PLTIPMV, 1) AS prefijo,
          COUNT(*) AS total,
          SUM(CLISEQ > 0) AS con_cliente,
          SUM(PRVSEQ > 0) AS con_proveedor
        FROM fplin
        GROUP BY LEFT(PLTIPMV, 1)
        ORDER BY total DESC
        LIMIT 20
      `,
      fdoc_prefix_semantics: `
        SELECT
          LEFT(DNUM, 1) AS prefijo,
          COUNT(*) AS total,
          SUM(CLISEQ > 0) AS con_cliente,
          SUM(PRVSEQ > 0) AS con_proveedor
        FROM fdoc
        GROUP BY LEFT(DNUM, 1)
        ORDER BY total DESC
        LIMIT 30
      `,
      orders_prefix_examples: `
        SELECT
          p.PESEQ,
          p.PENUM,
          p.PEDESDE,
          p.PEVENCE,
          p.CLISEQ,
          p.PRVSEQ,
          p.PEALMACEN,
          p.PEMULTICIA,
          c.CLICOD,
          c.CLINOM,
          v.PRVCOD,
          v.PRVNOM
        FROM fpenc p
        LEFT JOIN fcli c ON c.CLISEQ = p.CLISEQ
        LEFT JOIN fprv v ON v.PRVSEQ = p.PRVSEQ
        WHERE LEFT(p.PENUM, 1) IN ('P', 'X', 'O')
        ORDER BY p.PESEQ DESC
        LIMIT 60
      `,
      accounting_core_usage: `
        SELECT
          COUNT(*) AS fbanmov_rows,
          SUM(BSEQ > 0) AS with_bseq,
          SUM(POSEQ > 0) AS with_poseq,
          SUM(PRVSEQ > 0) AS with_prvseq
        FROM fbanmov
      `,
      accounting_join_coverage: `
        SELECT
          SUM(
            CASE
              WHEN m.BSEQ > 0
                AND EXISTS (SELECT 1 FROM fbenc b WHERE b.BSEQ = m.BSEQ LIMIT 1)
              THEN 1 ELSE 0
            END
          ) AS bseq_match,
          SUM(
            CASE
              WHEN m.PRVSEQ > 0
                AND EXISTS (SELECT 1 FROM fprv p WHERE p.PRVSEQ = m.PRVSEQ LIMIT 1)
              THEN 1 ELSE 0
            END
          ) AS prvseq_match,
          SUM(
            CASE
              WHEN m.POSEQ > 0
                AND EXISTS (SELECT 1 FROM fpoliza po WHERE po.POSEQ = m.POSEQ LIMIT 1)
              THEN 1 ELSE 0
            END
          ) AS poseq_match
        FROM fbanmov m
      `,
      doc_company_distribution: `
        SELECT
          DEST AS dest,
          DMULTICIA AS multicia,
          COUNT(*) AS total
        FROM fdoc
        GROUP BY DEST, DMULTICIA
        ORDER BY total DESC
        LIMIT 40
      `
    };

    const output: Record<string, GenericRow[]> = {};

    for (const [name, sql] of Object.entries(queries)) {
      // eslint-disable-next-line no-console
      console.log(`Running functional query: ${name}`);
      const rows = await MySqlClient.queryReadOnly<GenericRow[]>(sql);
      output[name] = rows.map((row) => JSON.parse(JSON.stringify(row)) as GenericRow);
    }

    return output;
  }

  private async writeDoc(baseDir: string, findings: Record<string, GenericRow[]>): Promise<void> {
    const docPath = path.join(baseDir, "functional-modules.md");
    const now = new Date().toISOString();
    const lines: string[] = [];

    lines.push("# Functional Modules Discovery (SQL-driven)");
    lines.push("");
    lines.push(`- Generated at: ${now}`);
    lines.push(`- Schema: \`${this.schema}\``);
    lines.push("- Objetivo: inferir módulos reales por comportamiento de datos.");
    lines.push("");

    lines.push("## 1) Reglas funcionales inferidas (actuales)");
    lines.push("");
    lines.push("- Pedidos cliente: prefijos `P*` y `X*` (en `fpenc`/`fplin`) con `CLISEQ > 0`.");
    lines.push("- Compras proveedor: prefijos `O*` con `PRVSEQ > 0`.");
    lines.push("- Movimientos de ventas/facturación: `ftipmv.TIMODULO = 4`.");
    lines.push("- Movimientos de compras/gastos: `ftipmv.TIMODULO = 7`.");
    lines.push("- Movimientos inventario/traspasos: `ftipmv.TIMODULO = 2`.");
    lines.push("- Contabilidad pólizas: `ftipmv.TIMODULO = 9` y joins en `fbanmov`.");
    lines.push("");

    lines.push("## 2) Evidencia SQL");
    lines.push("");
    for (const [sectionName, rows] of Object.entries(findings)) {
      lines.push(`### ${sectionName}`);
      lines.push("");
      lines.push("```json");
      lines.push(JSON.stringify(rows, null, 2));
      lines.push("```");
      lines.push("");
    }

    lines.push("## 3) Reglas operativas para endpoints");
    lines.push("");
    lines.push("- Si endpoint es de pedidos cliente, filtrar `LEFT(PENUM,1) IN ('P','X')` y `CLISEQ > 0`.");
    lines.push("- Si endpoint es compras/proveedor, filtrar `LEFT(PENUM,1) = 'O'` y `PRVSEQ > 0`.");
    lines.push("- Para métricas de venta por cliente/producto, combinar `faxinv` con `ftipmv.TIMODULO = 4`.");
    lines.push("- Para métricas de compras/recepciones, usar `ftipmv.TIMODULO = 7`.");
    lines.push("- Para inventario transaccional puro (entradas/salidas/traspasos), usar `ftipmv.TIMODULO = 2`.");
    lines.push("- Documentar siempre `DEST` y `DMULTICIA` usados en cada consulta funcional.");
    lines.push("");

    await fs.writeFile(docPath, lines.join("\n"), "utf8");
  }
}

async function main(): Promise<void> {
  const analyzer = new LegacyFunctionalAnalyzer();
  try {
    await analyzer.run();
    // eslint-disable-next-line no-console
    console.log("Legacy functional analysis completed.");
  } finally {
    await MySqlClient.close();
  }
}

main().catch(async (error) => {
  // eslint-disable-next-line no-console
  console.error("Legacy functional analysis failed:", error);
  await MySqlClient.close();
  process.exit(1);
});
