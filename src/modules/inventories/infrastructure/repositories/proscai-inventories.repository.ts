import { RowDataPacket } from "mysql2";
import { MySqlClient } from "../../../../db/mysql";
import {
  InventoryAuxiliarEntity,
  InventoryAuxiliarLegacyRow,
  InventoryClientSaleEntity,
  InventoryClientSaleLegacyRow,
  InventoryClientOrderEntity,
  InventoryClientOrderLegacyRow,
  InventoryDetailEntity,
  InventoryDetailLegacyRow,
  InventoryEntity,
  InventoryLegacyRow,
  InventoryWarehouseEntity,
  InventoryWarehouseLegacyRow
} from "../../domain/entities";
import {
  FindInventoryAuxiliarParams,
  FindInventoriesParams,
  IInventoriesRepository,
  InventorySearchBy
} from "../../domain/repositories/inventories.repository.interface";

type InventoryRow = RowDataPacket & InventoryLegacyRow;
type InventoryDetailRow = RowDataPacket & InventoryDetailLegacyRow;
type InventoryWarehouseRow = RowDataPacket & InventoryWarehouseLegacyRow;
type InventoryAuxiliarRow = RowDataPacket & InventoryAuxiliarLegacyRow;
type InventoryClientSaleRow = RowDataPacket & InventoryClientSaleLegacyRow;
type InventoryClientOrderRow = RowDataPacket & InventoryClientOrderLegacyRow;
type CountRow = RowDataPacket & { total: number };
type QuantityRow = RowDataPacket & { QUANTITY: number | string | null };
type SumRow = RowDataPacket & { TOTAL: number | string | null };

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

  public async findAuxiliarByCode({
    code,
    warehouse,
    destination,
    multiCompany
  }: FindInventoryAuxiliarParams): Promise<InventoryAuxiliarEntity[]> {
    const normalizedWarehouse = warehouse?.trim();
    const filterByWarehouseSql = normalizedWarehouse
      ? "AND LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') = ?"
      : "";
    const filterByCompanySql =
      destination !== undefined && multiCompany !== undefined
        ? "AND COALESCE(d.DEST, 0) = ? AND COALESCE(d.DMULTICIA, 0) = ?"
        : "";

    const sql = `
      SELECT
        COALESCE(d.DFECHA, '1900-12-31') AS FECHA,
        COALESCE(CAST(d.DNUM AS CHAR), '') AS DOCUMENTO,
        COALESCE(CAST(ai.AITIPMV AS CHAR), '') AS TM,
        CASE
          WHEN COALESCE(c.CIANOCOSTOS, 0) = 0 THEN COALESCE(ai.AICOSTO, 0)
          ELSE 0
        END AS COSTO,
        CASE
          WHEN COALESCE(ai.AICANT, 0) > 0 THEN COALESCE(ai.AICANT, 0)
          ELSE 0
        END AS ENTRADAS,
        CASE
          WHEN COALESCE(ai.AICANT, 0) < 0 THEN ABS(COALESCE(ai.AICANT, 0))
          ELSE 0
        END AS SALIDAS,
        SUM(COALESCE(ai.AICANT, 0)) OVER (
          PARTITION BY ai.AIALMACEN
          ORDER BY COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC, ai.DSEQ ASC
          ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS STOCK,
        LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') AS ALM,
        COALESCE(ai.AIPZAS, 0) AS PZAS,
        CAST(COALESCE(d.DRUTA, 0) AS UNSIGNED) AS RUTA,
        CASE
          WHEN COALESCE(d.DIUSEQ, 0) > 0 THEN COALESCE(ai.AIUSEQ, 0)
          ELSE COALESCE(d.DIUSEQ, 0)
        END AS USR,
        COALESCE(ai.AIREVAL, 0) AS REVAL,
        COALESCE(d.DREFERELLOS, '') AS REFERENCIA
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      LEFT JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN (SELECT CIANOCOSTOS FROM fcia LIMIT 1) c ON 1 = 1
      WHERE i.ICOD = ?
        AND COALESCE(ai.AIMES, 0) = 1
        ${filterByCompanySql}
      ${filterByWarehouseSql}
      ORDER BY COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC, ai.DSEQ ASC
      LIMIT 1500
    `;

    const params: unknown[] = [code];
    if (destination !== undefined && multiCompany !== undefined) {
      params.push(destination, multiCompany);
    }
    if (normalizedWarehouse) {
      params.push(normalizedWarehouse);
    }
    const rows = await MySqlClient.queryReadOnly<InventoryAuxiliarRow[]>(sql, params);
    return rows.map((row) => InventoryAuxiliarEntity.fromLegacyRow(row));
  }

  public async sumAuxiliarQuantityByCode(
    code: string,
    warehouse: string,
    destination?: number,
    multiCompany?: number
  ): Promise<number> {
    const normalizedWarehouse = warehouse.trim();
    if (!normalizedWarehouse) {
      return 0;
    }

    const joinCompanySql =
      destination !== undefined && multiCompany !== undefined
        ? "INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ"
        : "";

    const filterByCompanySql =
      destination !== undefined && multiCompany !== undefined
        ? "AND COALESCE(d.DEST, 0) = ? AND COALESCE(d.DMULTICIA, 0) = ?"
        : "";

    const sql = `
      SELECT
        COALESCE(SUM(COALESCE(ai.AICANT, 0)), 0) AS TOTAL
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      ${joinCompanySql}
      WHERE i.ICOD = ?
        AND COALESCE(ai.AIMES, 0) = 1
      ${filterByCompanySql}
      AND LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') = ?
    `;

    const params: unknown[] = [code];
    if (destination !== undefined && multiCompany !== undefined) {
      params.push(destination, multiCompany);
    }
    params.push(normalizedWarehouse);

    const rows = await MySqlClient.queryReadOnly<SumRow[]>(sql, params);
    const total = rows[0]?.TOTAL;
    const numericTotal = Number(total ?? 0);

    return Number.isFinite(numericTotal) ? numericTotal : 0;
  }

  public async findWarehouseQuantityByCode(code: string, warehouse: string): Promise<number | null> {
    const normalizedWarehouse = warehouse.trim();
    if (!normalizedWarehouse) {
      return null;
    }

    const numericWarehouse = Number(normalizedWarehouse);
    const isNumericWarehouse = Number.isFinite(numericWarehouse);

    if (isNumericWarehouse) {
      const legacySql = `
        SELECT
          fa.ALMCANT AS QUANTITY
        FROM falm fa
        WHERE fa.ALMKEY = CONCAT(RPAD(TRIM(?), 13, ' '), CAST(? AS CHAR))
        LIMIT 1
      `;

      const legacyRows = await MySqlClient.queryReadOnly<QuantityRow[]>(legacySql, [
        code,
        Math.trunc(numericWarehouse)
      ]);
      const legacyQuantity = legacyRows[0]?.QUANTITY;

      if (legacyQuantity !== null && legacyQuantity !== undefined) {
        const numericLegacyQuantity = Number(legacyQuantity);
        if (Number.isFinite(numericLegacyQuantity)) {
          return numericLegacyQuantity;
        }
      }
    }

    const sql = `
      SELECT
        fa.ALMCANT AS QUANTITY
      FROM finv i
      INNER JOIN falm fa ON fa.ISEQ = i.ISEQ
      WHERE i.ICOD = ?
        AND (
          UPPER(TRIM(fa.ALMNUM)) = UPPER(TRIM(?))
          OR LPAD(CAST(COALESCE(fa.ALMCDNUM, 0) AS CHAR), 2, '0') = ?
        )
      ORDER BY (UPPER(TRIM(fa.ALMNUM)) = UPPER(TRIM(?))) DESC, fa.ALMNUM ASC
      LIMIT 1
    `;

    const rows = await MySqlClient.queryReadOnly<QuantityRow[]>(sql, [
      code,
      normalizedWarehouse,
      normalizedWarehouse,
      normalizedWarehouse
    ]);
    const quantity = rows[0]?.QUANTITY;

    if (quantity === null || quantity === undefined) {
      return null;
    }

    const numericQuantity = Number(quantity);
    return Number.isFinite(numericQuantity) ? numericQuantity : null;
  }

  public async findClientSalesByCode(code: string): Promise<InventoryClientSaleEntity[]> {
    const sql = `
      SELECT
        COALESCE(cli.CLICOD, '') AS CODIGO,
        COALESCE(cli.CLINOM, '') AS CLIENTE,
        ROUND(SUM(COALESCE(ai.AICANTF, 0)), 2) AS CANTIDAD,
        ROUND(SUM(COALESCE(ai.AICANTF, 0) * COALESCE(ai.AIPRECIO, 0)), 2) AS IMPORTE
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      INNER JOIN fcli cli ON cli.CLISEQ = ai.CLISEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.CLISEQ, 0) <> 0
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 1
        AND COALESCE(d.DOTROSTXT, '') <> 'POS'
        AND COALESCE(d.DCONTROLPOS, 0) = 0
      GROUP BY cli.CLICOD, cli.CLINOM
      ORDER BY cli.CLICOD ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryClientSaleRow[]>(sql, [code]);
    return rows.map((row) => InventoryClientSaleEntity.fromLegacyRow(row));
  }

  public async findClientOrdersByCode(code: string): Promise<InventoryClientOrderEntity[]> {
    const sql = `
      SELECT
        COALESCE(c.CLICOD, '') AS CODIGO,
        COALESCE(c.CLINOM, '') AS DESCRIPCION,
        COALESCE(p.PEDESDE, '1900-12-31') AS FECHA_E,
        COALESCE(p.PEVENCE, '1900-12-31') AS VENCE,
        COALESCE(p.PENUM, 0) AS NUM,
        COALESCE(pl.PLCANT, 0) AS PEDIDO,
        COALESCE(pl.PLSURT, 0) AS SURTIDO,
        (COALESCE(pl.PLCANT, 0) - COALESCE(pl.PLSURT, 0)) AS RESTA,
        COALESCE(pl.PLASIGNADO, 0) AS ASIGNADO,
        COALESCE(pl.PLPRECI, 0) AS PRECIO,
        COALESCE(p.PENUMELLOS, '') AS NUM_ELLOS,
        COALESCE(pl.PLASIGNPZAS, 0) AS PZAS,
        COALESCE(
          (
            SELECT fa.ALMNUM
            FROM falm fa
            WHERE fa.ISEQ = i.ISEQ
              AND (
                fa.ALMCDNUM = COALESCE(pl.PLSUC, -1)
                OR CAST(fa.ALMNUM AS UNSIGNED) = COALESCE(pl.PLSUC, -1)
              )
            ORDER BY (fa.ALMCDNUM = COALESCE(pl.PLSUC, -1)) DESC, fa.ALMNUM ASC
            LIMIT 1
          ),
          ''
        ) AS ALM,
        COALESCE(pl.PLFACTOR, 0) AS WMS
      FROM finv i
      INNER JOIN fplin pl ON pl.ISEQ = i.ISEQ
      LEFT JOIN fpenc p ON p.PESEQ = pl.PESEQ
      LEFT JOIN fcli c ON c.CLISEQ = pl.CLISEQ
      WHERE i.ICOD = ?
        AND (p.PENUM IS NULL OR UPPER(p.PENUM) NOT LIKE 'O%')
      ORDER BY COALESCE(p.PEDESDE, '1900-12-31') DESC, COALESCE(p.PENUM, 0) DESC, pl.PLSEQ DESC
      LIMIT 1500
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryClientOrderRow[]>(sql, [code]);
    return rows.map((row) => InventoryClientOrderEntity.fromLegacyRow(row));
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
