import { RowDataPacket } from "mysql2";
import { MySqlClient } from "../../../db/mysql";
import {
  InventoryDetailEntity,
  InventoryDetailLegacyRow,
  InventoryEntity,
  InventoryLegacyRow
} from "../entities";

type InventoryRow = RowDataPacket & InventoryLegacyRow;
type InventoryDetailRow = RowDataPacket & InventoryDetailLegacyRow;
type CountRow = RowDataPacket & { total: number };

type FindAllParams = {
  search?: string;
  limit: number;
  offset: number;
};

type CodeRow = RowDataPacket & { ICOD: string };

export class InventoriesRepository {
  private buildWhere(search?: string): { whereSql: string; params: unknown[] } {
    const hasSearch = Boolean(search && search.trim().length > 0);
    if (!hasSearch) return { whereSql: "", params: [] };

    const q = `%${search!.trim()}%`;
    return {
      whereSql: "WHERE (f.ICOD LIKE ? OR f.IDESCR LIKE ?)",
      params: [q, q]
    };
  }

  public async findAll({ search, limit, offset }: FindAllParams): Promise<InventoryEntity[]> {
    const { whereSql, params } = this.buildWhere(search);

    const sql = `
      SELECT
        f.ICOD,
        f.IDESCR,
        f.IUM,
        f.IFAM,
        f.IBAJA,
        f.ISTKACT,
        u.UDESCR
      FROM finv f
      LEFT JOIN funidad u ON u.UCOD = f.IUM
      ${whereSql}
      ORDER BY f.ICOD ASC
      LIMIT ? OFFSET ?
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryRow[]>(sql, [...params, limit, offset]);
    return rows.map((row) => InventoryEntity.fromLegacyRow(row));
  }

  public async countAll(search?: string): Promise<number> {
    const { whereSql, params } = this.buildWhere(search);

    const sql = `
      SELECT COUNT(*) AS total
      FROM finv f
      ${whereSql}
    `;

    const rows = await MySqlClient.queryReadOnly<CountRow[]>(sql, params);
    return Number(rows[0]?.total ?? 0);
  }

  public async findByCode(code: string): Promise<InventoryDetailEntity | null> {
    const sql = `
      SELECT
        f.ICOD,
        f.IDESCR,
        f.IUM,
        f.ITIPO,
        f.ICT,
        f.IFAM,
        f.IALTA,
        f.IBAJA,
        f.ILISTA1,
        f.ILISTA2,
        f.ILISTA3,
        f.ILISTA4,
        f.ILISTA5,
        f.ILISTA6,
        f.IMONEDA1,
        f.IMONEDA2,
        f.IMONEDA3,
        f.IADVALOREM,
        f.IULTCPR,
        f.IULTVTA,
        f.IASIGNADO,
        f.ICONFIRMADO,
        f.IPEDCLI,
        f.IPEDCOTIZ,
        f.IPEDPRV,
        f.IORDCOTIZ,
        f.ISTKACT,
        f.ISTKANT,
        f.ISTKACU,
        f.ICANTAN,
        f.ICANTAC,
        f.ISTKPZS,
        f.IMINIMO,
        f.IMAXIMO,
        f.IMAXIMOINI,
        f.ILOCALIZ,
        f.IEAN,
        f.IUPC,
        f.ICTA,
        f.ICTADEV,
        f.ICTA3,
        f.ICTADESV,
        f.IVTA,
        f.IDIASSTK,
        f.IVTAEOL,
        u.UDESCR
      FROM finv f
      LEFT JOIN funidad u ON u.UCOD = f.IUM
      WHERE f.ICOD = ?
      LIMIT 1
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryDetailRow[]>(sql, [code]);
    const row = rows[0];

    return row ? InventoryDetailEntity.fromLegacyRow(row) : null;
  }

  public async findNextCode(currentCode: string): Promise<string | null> {
    const sql = `
      SELECT f.ICOD
      FROM finv f
      WHERE f.ICOD > ?
      ORDER BY f.ICOD ASC
      LIMIT 1
    `;

    const rows = await MySqlClient.queryReadOnly<CodeRow[]>(sql, [currentCode]);
    return rows[0]?.ICOD ?? null;
  }

  public async findPreviousCode(currentCode: string): Promise<string | null> {
    const sql = `
      SELECT f.ICOD
      FROM finv f
      WHERE f.ICOD < ?
      ORDER BY f.ICOD DESC
      LIMIT 1
    `;

    const rows = await MySqlClient.queryReadOnly<CodeRow[]>(sql, [currentCode]);
    return rows[0]?.ICOD ?? null;
  }
}
