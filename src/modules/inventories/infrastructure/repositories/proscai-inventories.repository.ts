import { RowDataPacket } from "mysql2";
import { MySqlClient } from "../../../../db/mysql";
import {
  InventoryDetailEntity,
  InventoryDetailLegacyRow,
  InventoryEntity,
  InventoryLegacyRow,
  InventoryWarehouseEntity,
  InventoryWarehouseLegacyRow
} from "../../domain/entities";
import {
  FindInventoriesParams,
  IInventoriesRepository,
  InventorySearchBy
} from "../../domain/repositories/inventories.repository.interface";

type InventoryRow = RowDataPacket & InventoryLegacyRow;
type InventoryDetailRow = RowDataPacket & InventoryDetailLegacyRow;
type InventoryWarehouseRow = RowDataPacket & InventoryWarehouseLegacyRow;
type CountRow = RowDataPacket & { total: number };

type CodeRow = RowDataPacket & { ICOD: string };

export class ProscaiInventoriesRepository implements IInventoriesRepository {
  private buildWhere(
    search?: string,
    searchBy: InventorySearchBy = "auto"
  ): { whereSql: string; params: unknown[]; normalizedSearch?: string } {
    const normalizedSearch = search?.trim();

    if (!normalizedSearch) {
      return { whereSql: "", params: [] };
    }

    const prefixQuery = `${normalizedSearch}%`;

    if (searchBy === "code") {
      return {
        whereSql: "WHERE f.ICOD LIKE ?",
        params: [prefixQuery],
        normalizedSearch
      };
    }

    if (searchBy === "description") {
      return {
        whereSql: "WHERE f.IDESCR LIKE ?",
        params: [prefixQuery],
        normalizedSearch
      };
    }

    return {
      whereSql: "WHERE (f.ICOD LIKE ? OR f.IDESCR LIKE ?)",
      params: [prefixQuery, prefixQuery],
      normalizedSearch
    };
  }

  public async findAll({ search, searchBy = "auto", limit, offset }: FindInventoriesParams): Promise<InventoryEntity[]> {
    const { whereSql, params, normalizedSearch } = this.buildWhere(search, searchBy);
    const orderBySql = searchBy === "code" && normalizedSearch
      ? "ORDER BY (f.ICOD = ?) DESC, f.ICOD ASC"
      : "ORDER BY f.ICOD ASC";
    const orderByParams = searchBy === "code" && normalizedSearch ? [normalizedSearch] : [];

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
      ${orderBySql}
      LIMIT ? OFFSET ?
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryRow[]>(
      sql,
      [...params, ...orderByParams, limit, offset]
    );
    return rows.map((row) => InventoryEntity.fromLegacyRow(row));
  }

  public async countAll(search?: string, searchBy: InventorySearchBy = "auto"): Promise<number> {
    const { whereSql, params } = this.buildWhere(search, searchBy);

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

    f.IPEDIMENTO,
    f.IFECHAIMPORT,
    f.IADUANA,
    f.IARANCEL,
    f.IARANCELEXP,
    f.IPORCARANC,
    f.INOCAPAS,
    f.ITIPOTIEMPO,
    f.ILOTE,
    f.INECPRO,
    f.IFECHAENSAMBLE,
    f.IENSABLES,
    f.ISEGUNDAS,
    f.ITERCERAS,
    f.IREBAJAMINIMO,
    f.INOPRODUCTIVO,
    f.IPORCIEPES,
    f.IPORCRETIVA,
    f.IPORCRETISR,
    f.IPORCIVA,
    f.IRETIVA,
    f.IFISCAL,
    f.IDONATIVO,
    f.INOIVAENIEPS,
    f.ITMVTS,
    f.ITMREC,
    f.ICOMPOS,
    f.ITVP,
    f.ICONTROLPZAS,
    f.IFRACCIONABLE,
    f.IUSEQ,
    f.IBODEGA,
    f.IPROXRECEP,
    f.ITRANSITO,
    f.IFISICOINICIAL,
    f.IFECHACAMBIO,
    f.IFECHACAMBIOPR,
    f.IWEBPEDIDOS,
    f.IPRIMERVTAPOS,
    f.INVFIS,
    f.IRENGLON,
    f.IRAIZ,
    f.ICOLOREXT,
    f.ICOLOR,
    f.IPORCOMISION,
    f.IFIJOIEPS,
    f.IOFERDESDE,
    f.IOFERHASTA,
    f.IMINIMOHASTA,
    f.IDESCTOMON,
    f.IDESCTOPOS,
    f.ILISTA7,
    f.ILISTA8,
    f.ILISTA9,
    f.ILISTA10,
    f.ILISTA11,
    f.ILISTA12,
    f.ILISTA13,
    f.ILISTA14,
    f.ILISTA15,
    f.ILISTA16,
    f.ILISTA17,
    f.ILISTA18,
    f.IMONEDA4,
    f.IMONEDA5,
    f.IMONEDA6,
    f.IMONEDA7,
    f.IMONEDA8,
    f.IMONEDA9,
    f.IMONEDA10,
    f.IMONEDA11,
    f.IMONEDA12,
    f.IMONEDA13,
    f.IMONEDA14,
    f.IMONEDA15,
    f.IMONEDA16,
    f.IMONEDA17,
    f.IMONEDA18,
    f.ICCPMPTIPO,
    f.ICCPMPCLAVE,
    f.ICCPMPEMBALAJE,
    f.IFACTORCCE,
    f.IVARIOS1,
    f.IVARIOS2,
    f.IVARIOS3,
    f.IVARIOS4,
    f.IVARIOS5,
    f.IVARIOS6,
    f.IVARIOS7,
    f.IVARIOS8,
    f.IVARIOS9,
    f.IVARIOS10,
    f.IVARIOS11,
    f.IVARIOS12,
    f.IVARIOS13,
    f.IVARIOS14,
    f.IVARIOS15,
    f.IVARIOS16,
    f.IVARIOS17,
    f.IVARIOS18,
    f.IVARIOS19,
    f.IVARIOS20,
    f.IVARIOS21,
    f.IVARIOS22,

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

  public async findWarehousesByCode(code: string): Promise<InventoryWarehouseEntity[]> {
    const sql = `
      SELECT
        COALESCE(fa.ALMCDNUM, 0) AS CD,
        fa.ALMNUM AS ALM,
        COALESCE(fc.CATDESCR, '') AS DESCRIPCION,
        fa.ALMCANT AS CANT,
        fa.ALMMINIMO AS MINIMO,
        fa.ALMMAXIMO AS MAXIMO,
        fa.ALMVTAEOL AS VEOL,
        fa.ALMMINIMOENTDA AS MIN_TDA,
        fa.ALMVTA AS VTA_6S,
        fa.ALMPEDIDO AS PEDIDO,
        fa.ALMASIGNADO AS ASIGNADO,
        fa.ALMINVFIS AS FISICO,
        fa.ALMFISICOINICIAL AS I_CONTEO,
        fa.ALMDETDAS AS DE_TDS,
        fa.ALMACTIVO AS A,
        fa.ALMTRANSITO AS TRANSITO,
        fa.ALMALTA AS ALTA,
        fa.ALMULTIMAVTA AS ULT_VTA,
        fa.ALMPRVOC AS ORD_PRV,
        fa.ALMLOCALIZ AS LOCALIZACION,
        fa.ALMTOTVTA AS VTA_ACUM,
        fa.ALMVAFUTS1 AS S1,
        fa.ALMVAFUTS2 AS S2,
        fa.ALMVAFUTS3 AS S3,
        fa.ALMVAFUTS4 AS S4,
        fa.ALMVAFUTS5 AS S5,
        fa.ALMVTAFUT6 AS S6,
        fa.ALMPRECIO AS PRECIO,
        fa.ALMTOTRECS AS TOT_RECS,
        fa.ALMCURVA AS CURVA
      FROM finv f
      INNER JOIN falm fa ON fa.ISEQ = f.ISEQ
      LEFT JOIN falmcat fc ON fc.CATALM = fa.ALMNUM AND fc.CATTIPO = ''
      WHERE f.ICOD = ?
      ORDER BY fa.ALMNUM ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryWarehouseRow[]>(sql, [code]);
    return rows.map((row) => InventoryWarehouseEntity.fromLegacyRow(row));
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
