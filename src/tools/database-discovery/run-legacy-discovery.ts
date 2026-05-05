import fs from "node:fs/promises";
import path from "node:path";
import { RowDataPacket } from "mysql2/promise";
import { Env } from "../../config/env";
import { MySqlClient } from "../../db/mysql";

type TableRow = RowDataPacket & {
  TABLE_NAME: string;
  ENGINE: string | null;
  TABLE_ROWS: number | null;
  TABLE_COMMENT: string | null;
};

type ColumnRow = RowDataPacket & {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  COLUMN_TYPE: string;
  IS_NULLABLE: "YES" | "NO";
  COLUMN_DEFAULT: string | null;
  COLUMN_KEY: string;
  EXTRA: string;
};

type IndexRow = RowDataPacket & {
  TABLE_NAME: string;
  INDEX_NAME: string;
  NON_UNIQUE: number;
  SEQ_IN_INDEX: number;
  COLUMN_NAME: string;
};

type ColumnInfo = {
  name: string;
  type: string;
  nullable: boolean;
  defaultValue: string | null;
  key: string;
  extra: string;
};

type IndexInfo = {
  indexName: string;
  nonUnique: number;
  seqInIndex: number;
  columnName: string;
};

type TableInfo = {
  tableName: string;
  engine: string | null;
  estimatedRows: number;
  comment: string | null;
  columns: ColumnInfo[];
  indexes: IndexInfo[];
};

type RelationCandidate = {
  fromTable: string;
  fromColumn: string;
  toTable: string;
  toColumn: string;
  reason: string;
};

class LegacyDbDiscoveryRunner {
  private readonly schema = Env.values.DB_NAME;

  public async run(): Promise<void> {
    const baseDocsDir = path.resolve(process.cwd(), "docs/database/discovery");
    const modulesDir = path.join(baseDocsDir, "modules");

    await fs.mkdir(modulesDir, { recursive: true });

    const tables = await this.getTables();
    const columns = await this.getColumns();
    const indexes = await this.getIndexes();

    const tableInfoMap = this.buildTableInfoMap(tables, columns, indexes);
    const relations = this.inferRelations(tableInfoMap);

    const moduleMap = this.buildModuleMap(tableInfoMap);
    const samplesByModule = await this.getSamplesByModule(moduleMap);

    await this.writeTableDictionary(baseDocsDir, tableInfoMap);
    await this.writeRelationsDoc(baseDocsDir, relations);
    await this.writeModuleDocs(modulesDir, moduleMap, samplesByModule);

    await this.writeIndexDoc(baseDocsDir, moduleMap, tableInfoMap);
  }

  private async getTables(): Promise<TableRow[]> {
    const sql = `
      SELECT
        TABLE_NAME,
        ENGINE,
        TABLE_ROWS,
        TABLE_COMMENT
      FROM information_schema.TABLES
      WHERE TABLE_SCHEMA = ?
      ORDER BY TABLE_NAME ASC
    `;

    return MySqlClient.queryReadOnly<TableRow[]>(sql, [this.schema]);
  }

  private async getColumns(): Promise<ColumnRow[]> {
    const sql = `
      SELECT
        TABLE_NAME,
        COLUMN_NAME,
        COLUMN_TYPE,
        IS_NULLABLE,
        COLUMN_DEFAULT,
        COLUMN_KEY,
        EXTRA
      FROM information_schema.COLUMNS
      WHERE TABLE_SCHEMA = ?
      ORDER BY TABLE_NAME ASC, ORDINAL_POSITION ASC
    `;

    return MySqlClient.queryReadOnly<ColumnRow[]>(sql, [this.schema]);
  }

  private async getIndexes(): Promise<IndexRow[]> {
    const sql = `
      SELECT
        TABLE_NAME,
        INDEX_NAME,
        NON_UNIQUE,
        SEQ_IN_INDEX,
        COLUMN_NAME
      FROM information_schema.STATISTICS
      WHERE TABLE_SCHEMA = ?
      ORDER BY TABLE_NAME ASC, INDEX_NAME ASC, SEQ_IN_INDEX ASC
    `;

    return MySqlClient.queryReadOnly<IndexRow[]>(sql, [this.schema]);
  }

  private buildTableInfoMap(
    tables: TableRow[],
    columns: ColumnRow[],
    indexes: IndexRow[]
  ): Map<string, TableInfo> {
    const tableInfoMap = new Map<string, TableInfo>();

    for (const table of tables) {
      tableInfoMap.set(table.TABLE_NAME, {
        tableName: table.TABLE_NAME,
        engine: table.ENGINE,
        estimatedRows: Number(table.TABLE_ROWS ?? 0),
        comment: table.TABLE_COMMENT,
        columns: [],
        indexes: []
      });
    }

    for (const column of columns) {
      const table = tableInfoMap.get(column.TABLE_NAME);
      if (!table) continue;

      table.columns.push({
        name: column.COLUMN_NAME,
        type: column.COLUMN_TYPE,
        nullable: column.IS_NULLABLE === "YES",
        defaultValue: column.COLUMN_DEFAULT,
        key: column.COLUMN_KEY,
        extra: column.EXTRA
      });
    }

    for (const index of indexes) {
      const table = tableInfoMap.get(index.TABLE_NAME);
      if (!table) continue;

      table.indexes.push({
        indexName: index.INDEX_NAME,
        nonUnique: index.NON_UNIQUE,
        seqInIndex: index.SEQ_IN_INDEX,
        columnName: index.COLUMN_NAME
      });
    }

    return tableInfoMap;
  }

  private inferRelations(tableInfoMap: Map<string, TableInfo>): RelationCandidate[] {
    const relations: RelationCandidate[] = [];

    const columnToTables = new Map<string, string[]>();
    const primaryOrUniqueColumnsByTable = new Map<string, Set<string>>();

    for (const [tableName, tableInfo] of tableInfoMap.entries()) {
      const primaryOrUniqueColumns = new Set<string>(
        tableInfo.columns
          .filter((column) => column.key === "PRI" || column.key === "UNI")
          .map((column) => column.name)
      );
      primaryOrUniqueColumnsByTable.set(tableName, primaryOrUniqueColumns);

      for (const column of tableInfo.columns) {
        const existing = columnToTables.get(column.name) ?? [];
        existing.push(tableName);
        columnToTables.set(column.name, existing);
      }
    }

    for (const [tableName, tableInfo] of tableInfoMap.entries()) {
      for (const column of tableInfo.columns) {
        if (column.name === "ISEQ") continue;
        if (!column.name.endsWith("SEQ")) continue;

        const candidateTables = columnToTables.get(column.name) ?? [];

        for (const candidateTable of candidateTables) {
          if (candidateTable === tableName) continue;

          const primaryOrUniqueColumns =
            primaryOrUniqueColumnsByTable.get(candidateTable) ?? new Set<string>();
          if (!primaryOrUniqueColumns.has(column.name)) continue;

          relations.push({
            fromTable: tableName,
            fromColumn: column.name,
            toTable: candidateTable,
            toColumn: column.name,
            reason: "Columna *SEQ compartida y primaria en tabla destino"
          });
        }
      }

      for (const column of tableInfo.columns) {
        const columnName = column.name;
        const candidateTables = columnToTables.get(columnName) ?? [];
        if (candidateTables.length === 0) continue;

        for (const candidateTable of candidateTables) {
          if (candidateTable === tableName) continue;
          const primaryOrUniqueColumns =
            primaryOrUniqueColumnsByTable.get(candidateTable) ?? new Set<string>();

          if (!primaryOrUniqueColumns.has(columnName)) continue;
          if (column.key === "PRI" || column.key === "UNI") continue;

          relations.push({
            fromTable: tableName,
            fromColumn: columnName,
            toTable: candidateTable,
            toColumn: columnName,
            reason: "Columna idéntica, clave primaria/única en tabla destino"
          });
        }
      }
    }

    relations.push(...this.getManualLegacyRelations(tableInfoMap));

    const uniqueRelations = new Map<string, RelationCandidate>();
    for (const relation of relations) {
      const key = `${relation.fromTable}.${relation.fromColumn}->${relation.toTable}.${relation.toColumn}`;
      if (!uniqueRelations.has(key)) {
        uniqueRelations.set(key, relation);
      }
    }

    return Array.from(uniqueRelations.values()).sort((a, b) =>
      `${a.fromTable}.${a.fromColumn}`.localeCompare(`${b.fromTable}.${b.fromColumn}`)
    );
  }

  private getManualLegacyRelations(tableInfoMap: Map<string, TableInfo>): RelationCandidate[] {
    const manualRules: Array<{
      fromTable: string;
      fromColumn: string;
      toTable: string;
      toColumn: string;
      reason: string;
    }> = [
      {
        fromTable: "finv",
        fromColumn: "IUM",
        toTable: "funidad",
        toColumn: "UCOD",
        reason: "Regla funcional Omnis: unidad por código"
      },
      {
        fromTable: "finv",
        fromColumn: "ICODPRV",
        toTable: "fprv",
        toColumn: "PRVCOD",
        reason: "Regla funcional Omnis: proveedor por código"
      },
      {
        fromTable: "falm",
        fromColumn: "ISEQ",
        toTable: "finv",
        toColumn: "ISEQ",
        reason: "Regla funcional Omnis: almacén por inventario ISEQ"
      },
      {
        fromTable: "falm",
        fromColumn: "ALMNUM",
        toTable: "falmcat",
        toColumn: "CATALM",
        reason: "Regla funcional Omnis: catálogo de almacenes por número"
      }
    ];

    return manualRules.filter((rule) => {
      const fromTable = tableInfoMap.get(rule.fromTable);
      const toTable = tableInfoMap.get(rule.toTable);
      if (!fromTable || !toTable) return false;

      const hasFromColumn = fromTable.columns.some((column) => column.name === rule.fromColumn);
      const hasToColumn = toTable.columns.some((column) => column.name === rule.toColumn);

      return hasFromColumn && hasToColumn;
    });
  }

  private buildModuleMap(tableInfoMap: Map<string, TableInfo>): Map<string, string[]> {
    const modulePatterns: Record<string, RegExp[]> = {
      inventories: [/^finv/i, /^falm/i, /^funidad/i, /^ffam/i, /^fskus/i, /^flotes/i, /^fdimensiones/i],
      sales: [/^fdoc/i, /^fax/i, /^faxinv/i, /^faxk/i, /^ftipmv/i, /^fcli/i, /^fpenc/i, /^fplin/i],
      purchasing: [/^fprv/i, /^fpedimento/i, /^fprecompra/i, /^fnecpro/i],
      accounting: [/^fcuentas/i, /^fbanmov/i, /^fpoliza/i],
      security: [/^fusers/i, /^fusl/i, /^fhelp/i]
    };

    const tableNames = Array.from(tableInfoMap.keys());
    const moduleMap = new Map<string, string[]>();

    for (const [moduleName, patterns] of Object.entries(modulePatterns)) {
      const matches = tableNames.filter((tableName) =>
        patterns.some((pattern) => pattern.test(tableName))
      );
      moduleMap.set(moduleName, matches.sort((a, b) => a.localeCompare(b)));
    }

    const used = new Set<string>(Array.from(moduleMap.values()).flat());
    const uncategorized = tableNames.filter((name) => !used.has(name)).sort((a, b) => a.localeCompare(b));
    moduleMap.set("uncategorized", uncategorized);

    return moduleMap;
  }

  private async getSamplesByModule(
    moduleMap: Map<string, string[]>
  ): Promise<Map<string, Map<string, Record<string, unknown>[]>>> {
    const result = new Map<string, Map<string, Record<string, unknown>[]>>();

    for (const [moduleName, tables] of moduleMap.entries()) {
      const moduleSamples = new Map<string, Record<string, unknown>[]>();

      for (const tableName of tables) {
        const sample = await this.getTableSample(tableName, 10);
        moduleSamples.set(tableName, sample);
      }

      result.set(moduleName, moduleSamples);
    }

    return result;
  }

  private async getTableSample(
    tableName: string,
    limit: number
  ): Promise<Record<string, unknown>[]> {
    const safeTable = tableName.replace(/`/g, "");
    const sql = `SELECT * FROM \`${safeTable}\` LIMIT ${limit}`;

    try {
      const rows = await MySqlClient.queryReadOnly<RowDataPacket[]>(sql);
      return rows.map((row) => JSON.parse(JSON.stringify(row)) as Record<string, unknown>);
    } catch {
      return [];
    }
  }

  private async writeTableDictionary(
    baseDocsDir: string,
    tableInfoMap: Map<string, TableInfo>
  ): Promise<void> {
    const now = new Date().toISOString();
    const lines: string[] = [];

    lines.push("# Legacy Table Dictionary");
    lines.push("");
    lines.push(`- Generated at: ${now}`);
    lines.push(`- Schema: \`${this.schema}\``);
    lines.push(`- Total tables: ${tableInfoMap.size}`);
    lines.push("");

    for (const tableInfo of Array.from(tableInfoMap.values()).sort((a, b) =>
      a.tableName.localeCompare(b.tableName)
    )) {
      lines.push(`## ${tableInfo.tableName}`);
      lines.push("");
      lines.push(`- Engine: ${tableInfo.engine ?? "N/A"}`);
      lines.push(`- Estimated rows: ${tableInfo.estimatedRows}`);
      lines.push(`- Comment: ${tableInfo.comment?.trim() || "N/A"}`);
      lines.push("");
      lines.push("| Column | Type | Null | Key | Default | Extra |");
      lines.push("|---|---|---|---|---|---|");

      for (const column of tableInfo.columns) {
        lines.push(
          `| ${column.name} | ${column.type} | ${column.nullable ? "YES" : "NO"} | ${column.key || ""} | ${
            column.defaultValue ?? ""
          } | ${column.extra || ""} |`
        );
      }

      lines.push("");
      lines.push("| Index | Unique | Seq | Column |");
      lines.push("|---|---|---|---|");
      for (const index of tableInfo.indexes) {
        lines.push(
          `| ${index.indexName} | ${index.nonUnique === 0 ? "YES" : "NO"} | ${index.seqInIndex} | ${index.columnName} |`
        );
      }
      lines.push("");
    }

    await fs.writeFile(path.join(baseDocsDir, "table-dictionary.md"), lines.join("\n"), "utf8");
  }

  private async writeRelationsDoc(
    baseDocsDir: string,
    relations: RelationCandidate[]
  ): Promise<void> {
    const lines: string[] = [];
    lines.push("# Candidate Relations Map (No FK)");
    lines.push("");
    lines.push(`- Schema: \`${this.schema}\``);
    lines.push(`- Total candidate relations: ${relations.length}`);
    lines.push("");
    lines.push("| From | To | Reason |");
    lines.push("|---|---|---|");

    for (const relation of relations) {
      lines.push(
        `| ${relation.fromTable}.${relation.fromColumn} | ${relation.toTable}.${relation.toColumn} | ${relation.reason} |`
      );
    }

    lines.push("");
    lines.push("## Notes");
    lines.push("- Estas relaciones son inferidas, no validadas por FK.");
    lines.push("- Validar cada relación con SQL funcional antes de usar en endpoints.");
    lines.push("");

    await fs.writeFile(path.join(baseDocsDir, "relations-candidate-map.md"), lines.join("\n"), "utf8");
  }

  private async writeModuleDocs(
    modulesDir: string,
    moduleMap: Map<string, string[]>,
    samplesByModule: Map<string, Map<string, Record<string, unknown>[]>>
  ): Promise<void> {
    const now = new Date().toISOString();

    for (const [moduleName, tables] of moduleMap.entries()) {
      const lines: string[] = [];
      lines.push(`# ${moduleName.toUpperCase()} Discovery`);
      lines.push("");
      lines.push(`- Generated at: ${now}`);
      lines.push(`- Tables in module: ${tables.length}`);
      lines.push("");
      lines.push("## Tables");
      lines.push("");
      for (const tableName of tables) {
        lines.push(`- ${tableName}`);
      }
      lines.push("");
      lines.push("## Samples (LIMIT 10)");
      lines.push("");

      const tableSamples = samplesByModule.get(moduleName) ?? new Map<string, Record<string, unknown>[]>();
      for (const tableName of tables) {
        lines.push(`### ${tableName}`);
        lines.push("");
        const rows = tableSamples.get(tableName) ?? [];
        if (rows.length === 0) {
          lines.push("_No sample rows returned._");
          lines.push("");
          continue;
        }
        lines.push("```json");
        lines.push(JSON.stringify(rows, null, 2));
        lines.push("```");
        lines.push("");
      }

      await fs.writeFile(path.join(modulesDir, `${moduleName}.md`), lines.join("\n"), "utf8");
    }
  }

  private async writeIndexDoc(
    baseDocsDir: string,
    moduleMap: Map<string, string[]>,
    tableInfoMap: Map<string, TableInfo>
  ): Promise<void> {
    const lines: string[] = [];
    lines.push("# Discovery Index");
    lines.push("");
    lines.push("- Este índice se genera automáticamente por script interno.");
    lines.push("- Ejecutar: `npm run analyze:legacy-db`");
    lines.push("");
    lines.push("## Files");
    lines.push("");
    lines.push("- `table-dictionary.md`");
    lines.push("- `relations-candidate-map.md`");
    lines.push("- `modules/<module>.md`");
    lines.push("");
    lines.push("## Module Summary");
    lines.push("");
    lines.push("| Module | Tables |");
    lines.push("|---|---:|");
    for (const [moduleName, tables] of moduleMap.entries()) {
      lines.push(`| ${moduleName} | ${tables.length} |`);
    }
    lines.push("");
    lines.push("## Largest Tables (estimated rows)");
    lines.push("");
    lines.push("| Table | Estimated rows |");
    lines.push("|---|---:|");
    const largest = Array.from(tableInfoMap.values())
      .sort((a, b) => b.estimatedRows - a.estimatedRows)
      .slice(0, 30);
    for (const table of largest) {
      lines.push(`| ${table.tableName} | ${table.estimatedRows} |`);
    }
    lines.push("");

    await fs.writeFile(path.join(baseDocsDir, "README.md"), lines.join("\n"), "utf8");
  }
}

async function main(): Promise<void> {
  const runner = new LegacyDbDiscoveryRunner();
  try {
    await runner.run();
    // eslint-disable-next-line no-console
    console.log("Legacy DB discovery completed.");
  } finally {
    await MySqlClient.close();
  }
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("Legacy DB discovery failed:", error);
  process.exit(1);
});
