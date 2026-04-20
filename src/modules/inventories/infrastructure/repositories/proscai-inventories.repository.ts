import { RowDataPacket } from "mysql2";
import { MySqlClient } from "../../../../db/mysql";
import {
  InventoryDetailEntity,
  InventoryDetailLegacyRow,
  InventoryEntity,
  InventoryLegacyRow
} from "../../domain/entities";
import {
  FindInventoriesParams,
  IInventoriesRepository
} from "../../domain/repositories/inventories.repository.interface";

type InventoryRow = RowDataPacket & InventoryLegacyRow;
type InventoryDetailRow = RowDataPacket & InventoryDetailLegacyRow;
type CountRow = RowDataPacket & { total: number };

type CodeRow = RowDataPacket & { ICOD: string };

export class ProscaiInventoriesRepository implements IInventoriesRepository {
  private buildWhere(search?: string): { whereSql: string; params: unknown[] } {
    const hasSearch = Boolean(search && search.trim().length > 0);
    if (!hasSearch) return { whereSql: "", params: [] };

    const q = `%${search!.trim()}%`;
    return {
      whereSql: "WHERE (f.ICOD LIKE ? OR f.IDESCR LIKE ?)",
      params: [q, q]
    };
  }

  public async findAll({ search, limit, offset }: FindInventoriesParams): Promise<InventoryEntity[]> {
    const { whereSql, params } = this.buildWhere(search);

    const sql = `
      SELECT
        f.ICOD,
        f.IDESCR,
        f.IUM,
        f.IFAM,
        f.IBAJA,
        f.ISTKACT,
        u.UDESCR,
        f.IVOLUMEN,
        f.IPESO,
        f.ICANTCAJA,
        f.IEMPAQUE,
        f.ILARGO,
        f.IALTO,
        f.IANCHO,
        f.IDENSIDAD,
        f.IPESOMTRO,
        f.IPESOSPARAPUNTO,
        f.IEDIEMP,
        f.IEDIEMPC,
        f.IZONAPICK,
        f.ILOCALIZ,
        f.ILOCALIZ2,
        f.IDLXUNTPAK,
        f.IDLXUNTCAS,
        f.IDLXUNTPAL,
        f.IDLXPAKUOM,
        f.IDLXCASUOM,
        f.IDLXPALUOM,
        f.IVOLUMEN2,
        f.ICANTCAJA2
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
    f.IMONEDA,
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

    f.IVOLUMEN,
    f.IPESO,
    f.ICANTCAJA,
    f.IEMPAQUE,
    f.ILARGO,
    f.IALTO,
    f.IANCHO,
    f.IDENSIDAD,
    f.IPESOMTRO,
    f.IPESOSPARAPUNTO,
    f.IEDIEMP,
    f.IEDIEMPC,
    f.IZONAPICK,
    f.ILOCALIZ2,
    f.IDLXUNTPAK,
    f.IDLXUNTCAS,
    f.IDLXUNTPAL,
    f.IDLXPAKUOM,
    f.IDLXCASUOM,
    f.IDLXPALUOM,
    f.IVOLUMEN2,
    f.ICANTCAJA2,

    f.IPORC1,
    f.IFINTEMPORADA,
    f.ICOMPRAMINIMA,
    f.ICURVATMP,
    f.IFACTORSEMTDAS,
    f.IFACTORSEMBODEGA,
    f.ITIEMPO,
    f.IPREPACK,
    f.IREDI,
    f.ISOLOCD,
    f.ISTATUSOTB,
    f.IINACTIVO,
    f.ICLIMAS,
    f.INUMPREPACKS,
     f.ILUGAR,
    f.IUM2,
    f.IUM2FACTOR,
    f.IUM2PRECIO,
    f.IPRV,
    f.ICODPRV,
    p.PRVNOM,

    u.UDESCR
  FROM finv f
  LEFT JOIN funidad u ON u.UCOD = f.IUM
  LEFT JOIN fprv p ON p.PRVCOD = f.IPRV
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
