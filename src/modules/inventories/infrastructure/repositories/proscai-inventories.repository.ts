import { RowDataPacket } from "mysql2";
import { MySqlClient } from "../../../../db/mysql";
import {
  InventoryAuxiliarEntity,
  InventoryAuxiliarLegacyRow,
  InventoryClassificationOptionEntity,
  InventoryClassificationOptionLegacyRow,
  InventoryClassificationSelectedEntity,
  InventoryClassificationSelectedLegacyRow,
  InventoryLoteEntity,
  InventoryLoteLegacyRow,
  InventoryLoteMovementEntity,
  InventoryLoteMovementLegacyRow,
  InventoryUepsPepsEntity,
  InventoryUepsPepsLegacyRow,
  InventoryClientSaleEntity,
  InventoryClientSaleLegacyRow,
  InventoryClientOrderEntity,
  InventoryClientOrderLegacyRow,
  InventorySalesBreakdownEntity,
  InventorySalesBreakdownLegacyRow,
  InventorySalesByBranchEntity,
  InventorySalesByBranchLegacyRow,
  InventoryAnnualSaleEntity,
  InventoryAnnualSaleLegacyRow,
  InventoryPurchaseBySupplierEntity,
  InventoryPurchaseBySupplierLegacyRow,
  InventoryPurchaseBreakdownEntity,
  InventoryPurchaseBreakdownLegacyRow,
  InventoryOrderedSupplierEntity,
  InventoryOrderedSupplierLegacyRow,
  InventoryAnnualPurchaseEntity,
  InventoryAnnualPurchaseLegacyRow,
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
  InventoryClientOrderKind,
  InventorySearchBy
} from "../../domain/repositories/inventories.repository.interface";

type InventoryRow = RowDataPacket & InventoryLegacyRow;
type InventoryDetailRow = RowDataPacket & InventoryDetailLegacyRow;
type InventoryWarehouseRow = RowDataPacket & InventoryWarehouseLegacyRow;
type InventoryAuxiliarRow = RowDataPacket & InventoryAuxiliarLegacyRow;
type InventoryClientSaleRow = RowDataPacket & InventoryClientSaleLegacyRow;
type InventoryClientOrderRow = RowDataPacket & InventoryClientOrderLegacyRow;
type InventorySalesBreakdownRow = RowDataPacket & InventorySalesBreakdownLegacyRow;
type InventorySalesByBranchRow = RowDataPacket & InventorySalesByBranchLegacyRow;
type InventoryAnnualSaleRow = RowDataPacket & InventoryAnnualSaleLegacyRow;
type InventoryPurchaseBySupplierRow = RowDataPacket & InventoryPurchaseBySupplierLegacyRow;
type InventoryPurchaseBreakdownRow = RowDataPacket & InventoryPurchaseBreakdownLegacyRow;
type InventoryOrderedSupplierRow = RowDataPacket & InventoryOrderedSupplierLegacyRow;
type InventoryAnnualPurchaseRow = RowDataPacket & InventoryAnnualPurchaseLegacyRow;
type InventoryClassificationOptionRow = RowDataPacket & InventoryClassificationOptionLegacyRow;
type InventoryClassificationSelectedRow = RowDataPacket & InventoryClassificationSelectedLegacyRow;
type InventoryLoteRow = RowDataPacket & InventoryLoteLegacyRow;
type InventoryLoteMovementRow = RowDataPacket & InventoryLoteMovementLegacyRow;
type InventoryUepsPepsRow = RowDataPacket & InventoryUepsPepsLegacyRow;
type CountRow = RowDataPacket & { total: number };
type QuantityRow = RowDataPacket & { QUANTITY: number | string | null };
type SumRow = RowDataPacket & { TOTAL: number | string | null };

type CodeRow = RowDataPacket & { ICOD: string };
type ColumnExistsRow = RowDataPacket & { TOTAL: number | string | null };
type ColumnNameRow = RowDataPacket & { COLUMN_NAME: string };

export class ProscaiInventoriesRepository implements IInventoriesRepository {
  private extendedDescriptionConfig: {
    selectSql: string;
    joinSql: string;
  } | null = null;
  private lotesConfig:
    | {
        available: boolean;
        selectSql: string;
        lotJoinSql: string;
        hasLoseqInLots: boolean;
      }
    | null = null;

  private static readonly CLASSIFICATION_SLOT_ORDER: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "N",
    "O"
  ];

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

  private async columnExists(tableName: string, columnName: string): Promise<boolean> {
    const rows = await MySqlClient.queryReadOnly<ColumnExistsRow[]>(
      `
        SELECT COUNT(*) AS TOTAL
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = ?
          AND COLUMN_NAME = ?
      `,
      [tableName, columnName]
    );

    return Number(rows[0]?.TOTAL ?? 0) > 0;
  }

  private async resolveExtendedDescriptionConfig(): Promise<{
    selectSql: string;
    joinSql: string;
  }> {
    if (this.extendedDescriptionConfig) {
      return this.extendedDescriptionConfig;
    }

    const hasInvI2Descr = await this.columnExists("finv", "I2DESCR");
    if (hasInvI2Descr) {
      this.extendedDescriptionConfig = {
        selectSql: "f.I2DESCR AS I2DESCR,",
        joinSql: ""
      };
      return this.extendedDescriptionConfig;
    }

    const hasInv2I2Descr = await this.columnExists("finv2", "I2DESCR");
    const hasInv2I2Key = await this.columnExists("finv2", "I2KEY");
    if (hasInv2I2Descr && hasInv2I2Key) {
      this.extendedDescriptionConfig = {
        selectSql: "f2.I2DESCR AS I2DESCR,",
        joinSql: "LEFT JOIN finv2 f2 ON f2.I2KEY = f.ISEQ"
      };
      return this.extendedDescriptionConfig;
    }

    this.extendedDescriptionConfig = {
      selectSql: "'' AS I2DESCR,",
      joinSql: ""
    };
    return this.extendedDescriptionConfig;
  }

  private async getTableColumns(tableName: string): Promise<Set<string>> {
    const rows = await MySqlClient.queryReadOnly<ColumnNameRow[]>(
      `
        SELECT COLUMN_NAME
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = ?
      `,
      [tableName]
    );

    return new Set(rows.map((row) => row.COLUMN_NAME.toUpperCase()));
  }

  private pickColumn(
    availableColumns: Set<string>,
    candidates: string[]
  ): string | null {
    for (const candidate of candidates) {
      if (availableColumns.has(candidate.toUpperCase())) {
        return candidate;
      }
    }

    return null;
  }

  private async resolveLotesConfig(): Promise<{
    available: boolean;
    selectSql: string;
    lotJoinSql: string;
    hasLoseqInLots: boolean;
  }> {
    if (this.lotesConfig) {
      return this.lotesConfig;
    }

    const lotColumns = await this.getTableColumns("flotes");
    if (!lotColumns.size) {
      this.lotesConfig = {
        available: false,
        selectSql: "",
        lotJoinSql: "",
        hasLoseqInLots: false
      };
      return this.lotesConfig;
    }

    const lotSequenceColumn = this.pickColumn(lotColumns, ["LOSEQ"]);
    const lotIseqColumn = this.pickColumn(lotColumns, ["ISEQ", "LOISEQ"]);
    const lotKeyColumn = this.pickColumn(lotColumns, ["LOKEY"]);
    const lotDateColumn = this.pickColumn(lotColumns, ["LOFECHA", "LOALTA", "FECHA"]);
    const lotExpiryColumn = this.pickColumn(lotColumns, ["LOVENCE", "LOCADUCIDAD", "CADUCIDAD"]);
    const lotPedimentoColumn = this.pickColumn(lotColumns, ["LOPEDIM", "LOPEDIMENTO", "PEDIMENTO"]);
    const lotCustomsColumn = this.pickColumn(lotColumns, ["LOADUANA", "ADUANA"]);
    const lotNameColumn = this.pickColumn(lotColumns, ["LONUM", "LOLOTE", "LOTE"]);
    const lotAvailableColumn = this.pickColumn(lotColumns, ["LOCANT", "DISPONIBLE", "LODISPONIBLE"]);
    const lotWarehouseColumn = this.pickColumn(lotColumns, ["LOALM", "ALM", "ALMNUM", "LOALMACEN"]);
    const lotLocationColumn = this.pickColumn(lotColumns, ["LOLOCALIZ", "LOCALIZACION", "LOLOCALIZACION"]);
    const lotCostColumn = this.pickColumn(lotColumns, ["LOCOSTO", "COSTO", "LOPRECIO"]);
    const lotAdvaloremColumn = this.pickColumn(lotColumns, [
      "LOCOSTOADV",
      "LOADVALOREM",
      "ADVALOREM",
      "LOADVALOREM"
    ]);

    const joinByIseqCondition = lotIseqColumn ? `lo.${lotIseqColumn} = i.ISEQ` : null;
    const joinByLkeyCondition = lotKeyColumn
      ? `TRIM(SUBSTRING(lo.${lotKeyColumn}, 1, 13)) = TRIM(i.ICOD)`
      : null;
    const joinCondition = [joinByIseqCondition, joinByLkeyCondition].filter(Boolean).join(" OR ");

    if (!joinCondition) {
      this.lotesConfig = {
        available: false,
        selectSql: "",
        lotJoinSql: "",
        hasLoseqInLots: false
      };
      return this.lotesConfig;
    }

    const lotDateExpr = lotDateColumn ? `COALESCE(lo.${lotDateColumn}, '1900-12-31')` : `'1900-12-31'`;
    const lotExpiryExpr = lotExpiryColumn
      ? `COALESCE(lo.${lotExpiryColumn}, '1900-12-31')`
      : `'1900-12-31'`;
    const lotPedimentoExpr = lotPedimentoColumn ? `COALESCE(lo.${lotPedimentoColumn}, '')` : `''`;
    const lotCustomsExpr = lotCustomsColumn ? `COALESCE(CAST(lo.${lotCustomsColumn} AS CHAR), '')` : `''`;
    const lotNameExpr = lotNameColumn ? `COALESCE(lo.${lotNameColumn}, '')` : `''`;
    const lotAvailableExpr = lotAvailableColumn ? `COALESCE(lo.${lotAvailableColumn}, 0)` : `0`;
    const lotWarehouseExpr = lotWarehouseColumn
      ? `LPAD(CAST(COALESCE(lo.${lotWarehouseColumn}, 0) AS CHAR), 2, '0')`
      : lotKeyColumn
        ? `LPAD(RIGHT(TRIM(lo.${lotKeyColumn}), 2), 2, '0')`
        : `''`;
    const lotLocationExpr = lotLocationColumn ? `COALESCE(lo.${lotLocationColumn}, '')` : `''`;
    const lotSequenceExpr = lotSequenceColumn
      ? `COALESCE(lo.${lotSequenceColumn}, 0)`
      : `0`;
    const lotCostExpr = lotCostColumn ? `COALESCE(lo.${lotCostColumn}, 0)` : `0`;
    const lotAdvaloremExpr = lotAdvaloremColumn ? `COALESCE(lo.${lotAdvaloremColumn}, 0)` : `0`;

    this.lotesConfig = {
      available: true,
      hasLoseqInLots: Boolean(lotSequenceColumn),
      lotJoinSql: `INNER JOIN finv i ON ${joinCondition}`,
      selectSql: `
        ${lotSequenceExpr} AS LOSEQ,
        ${lotDateExpr} AS FECHA,
        ${lotExpiryExpr} AS CADUCIDAD,
        ${lotPedimentoExpr} AS PEDIMENTO,
        ${lotCustomsExpr} AS ADUANA,
        ${lotNameExpr} AS LOTE,
        ${lotAvailableExpr} AS DISPONIBLE,
        ${lotWarehouseExpr} AS ALM,
        ${lotLocationExpr} AS LOCALIZACION,
        ${lotSequenceExpr} AS SECUENCIA,
        ${lotCostExpr} AS COSTO,
        ${lotAdvaloremExpr} AS ADVALOREM
      `
    };

    return this.lotesConfig;
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
    const { selectSql: extendedDescriptionSelectSql, joinSql: extendedDescriptionJoinSql } =
      await this.resolveExtendedDescriptionConfig();

    const sql = `
  SELECT
    f.ICOD,
    f.IDESCR,
    ${extendedDescriptionSelectSql}
    f.IUM,
    f.ITIPO,
    f.ICT,
    f.IFAM,
    f.IFAM1,
    f.IFAM2,
    f.IFAM3,
    f.IFAM4,
    f.IFAM5,
    f.IFAM6,
    f.IFAM7,
    f.IFAM8,
    f.IFAM9,
    f.IFAML,
    f.IFAMM,
    f.IFAMN,
    f.IFAMO,
    f.IFAMP,
    f.IFAMQ,
    f.IFAMR,
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
  ${extendedDescriptionJoinSql}
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

  public async findClassificationOptions(): Promise<InventoryClassificationOptionEntity[]> {
    const sql = `
      SELECT
        f.FAMT AS SLOT,
        f.FAMNUM AS FAMILY,
        f.FAMDESCR AS DESCRIPTION,
        f.FAMPADRE AS PARENT,
        f.FAMCONSEC AS CONSEC
      FROM ffam f
      WHERE f.FAMT IN (${ProscaiInventoriesRepository.CLASSIFICATION_SLOT_ORDER.map(() => "?").join(", ")})
      ORDER BY
        FIELD(f.FAMT, ${ProscaiInventoriesRepository.CLASSIFICATION_SLOT_ORDER.map(() => "?").join(", ")}),
        f.FAMCONSEC ASC,
        f.FAMNUM ASC
    `;

    const params: string[] = [
      ...ProscaiInventoriesRepository.CLASSIFICATION_SLOT_ORDER,
      ...ProscaiInventoriesRepository.CLASSIFICATION_SLOT_ORDER
    ];
    const rows = await MySqlClient.queryReadOnly<InventoryClassificationOptionRow[]>(sql, params);
    return rows.map((row) => InventoryClassificationOptionEntity.fromLegacyRow(row));
  }

  public async findClassificationSelectedByCode(
    code: string
  ): Promise<InventoryClassificationSelectedEntity | null> {
    const sql = `
      SELECT
        f.IFAM1, f.IFAM2, f.IFAM3, f.IFAM4, f.IFAM5, f.IFAM6, f.IFAM7, f.IFAM8,
        f.IFAM9,
        COALESCE(NULLIF(f.IFAMA, ''), f.IFAML) AS IFAML,
        COALESCE(NULLIF(f.IFAMB, ''), f.IFAMM) AS IFAMM,
        COALESCE(NULLIF(f.IFAMC, ''), f.IFAMN) AS IFAMN,
        COALESCE(NULLIF(f.IFAMD, ''), f.IFAMO) AS IFAMO,
        COALESCE(NULLIF(f.IFAME, ''), f.IFAMP) AS IFAMP,
        f.IFAMQ,
        CASE
          WHEN NULLIF(f.IFAMR, '') IS NOT NULL THEN
            CASE
              WHEN LEFT(f.IFAMR, 1) = 'O' THEN f.IFAMR
              ELSE CONCAT('O', f.IFAMR)
            END
          WHEN NULLIF(f.IFAM, '') IS NOT NULL THEN CONCAT('O', f.IFAM)
          ELSE ''
        END AS IFAMR,
        COALESCE(f1.FAMDESCR, '') AS DESCR1,
        COALESCE(f2.FAMDESCR, '') AS DESCR2,
        COALESCE(f3.FAMDESCR, '') AS DESCR3,
        COALESCE(f4.FAMDESCR, '') AS DESCR4,
        COALESCE(f5.FAMDESCR, '') AS DESCR5,
        COALESCE(f6.FAMDESCR, '') AS DESCR6,
        COALESCE(f7.FAMDESCR, '') AS DESCR7,
        COALESCE(f8.FAMDESCR, '') AS DESCR8,
        COALESCE(f9.FAMDESCR, '') AS DESCR9,
        COALESCE(fl.FAMDESCR, '') AS DESCRL,
        COALESCE(fm.FAMDESCR, '') AS DESCRM,
        COALESCE(fn.FAMDESCR, '') AS DESCRN,
        COALESCE(fo.FAMDESCR, '') AS DESCRO,
        COALESCE(fp.FAMDESCR, '') AS DESCRP,
        COALESCE(fq.FAMDESCR, '') AS DESCRQ,
        COALESCE(fr.FAMDESCR, '') AS DESCRR
      FROM finv f
      LEFT JOIN ffam f1 ON f1.FAMTNUM = f.IFAM1
      LEFT JOIN ffam f2 ON f2.FAMTNUM = f.IFAM2
      LEFT JOIN ffam f3 ON f3.FAMTNUM = f.IFAM3
      LEFT JOIN ffam f4 ON f4.FAMTNUM = f.IFAM4
      LEFT JOIN ffam f5 ON f5.FAMTNUM = f.IFAM5
      LEFT JOIN ffam f6 ON f6.FAMTNUM = f.IFAM6
      LEFT JOIN ffam f7 ON f7.FAMTNUM = f.IFAM7
      LEFT JOIN ffam f8 ON f8.FAMTNUM = f.IFAM8
      LEFT JOIN ffam f9 ON f9.FAMTNUM = f.IFAM9
      LEFT JOIN ffam fl ON fl.FAMTNUM = COALESCE(NULLIF(f.IFAMA, ''), f.IFAML)
      LEFT JOIN ffam fm ON fm.FAMTNUM = COALESCE(NULLIF(f.IFAMB, ''), f.IFAMM)
      LEFT JOIN ffam fn ON fn.FAMTNUM = COALESCE(NULLIF(f.IFAMC, ''), f.IFAMN)
      LEFT JOIN ffam fo ON fo.FAMTNUM = COALESCE(NULLIF(f.IFAMD, ''), f.IFAMO)
      LEFT JOIN ffam fp ON fp.FAMTNUM = COALESCE(NULLIF(f.IFAME, ''), f.IFAMP)
      LEFT JOIN ffam fq ON fq.FAMTNUM = f.IFAMQ
      LEFT JOIN ffam fr ON fr.FAMTNUM = (
        CASE
          WHEN NULLIF(f.IFAMR, '') IS NOT NULL THEN
            CASE
              WHEN LEFT(f.IFAMR, 1) = 'O' THEN f.IFAMR
              ELSE CONCAT('O', f.IFAMR)
            END
          WHEN NULLIF(f.IFAM, '') IS NOT NULL THEN CONCAT('O', f.IFAM)
          ELSE ''
        END
      )
      WHERE f.ICOD = ?
      LIMIT 1
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryClassificationSelectedRow[]>(sql, [code]);
    const row = rows[0];

    return row ? InventoryClassificationSelectedEntity.fromLegacyRow(row) : null;
  }

  public async findLotesByCode(code: string): Promise<InventoryLoteEntity[]> {
    const config = await this.resolveLotesConfig();
    if (!config.available) {
      return [];
    }

    const lotRows = await MySqlClient.queryReadOnly<InventoryLoteRow[]>(
      `
        SELECT
          ${config.selectSql}
        FROM flotes lo
        ${config.lotJoinSql}
        WHERE i.ICOD = ?
        ORDER BY FECHA ASC, SECUENCIA ASC
        LIMIT 2000
      `,
      [code]
    );

    if (!lotRows.length || !config.hasLoseqInLots) {
      return lotRows.map((row) => InventoryLoteEntity.fromLegacyRow(row, []));
    }

    const lotKeys = Array.from(
      new Set(
        lotRows
          .map((row) => Number(row.LOSEQ))
          .filter((value) => Number.isFinite(value) && value > 0)
      )
    );

    if (!lotKeys.length) {
      return lotRows.map((row) => InventoryLoteEntity.fromLegacyRow(row, []));
    }

    const movementPlaceholders = lotKeys.map(() => "?").join(", ");
    const movementRows = await MySqlClient.queryReadOnly<InventoryLoteMovementRow[]>(
      `
        SELECT
          ai.LOSEQ AS LOSEQ,
          COALESCE(d.DFECHA, '1900-12-31') AS FECHA,
          COALESCE(CAST(d.DNUM AS CHAR), '') AS DOC,
          CASE
            WHEN COALESCE(ai.AICANT, 0) > 0 THEN COALESCE(ai.AICANT, 0)
            ELSE 0
          END AS ENTRADAS,
          CASE
            WHEN COALESCE(ai.AICANT, 0) < 0 THEN ABS(COALESCE(ai.AICANT, 0))
            ELSE 0
          END AS SALIDAS,
          LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') AS ALM
        FROM faxinv ai
        LEFT JOIN fdoc d ON d.DSEQ = ai.DSEQ
        INNER JOIN finv i ON i.ISEQ = ai.ISEQ
        WHERE i.ICOD = ?
          AND ai.LOSEQ IN (${movementPlaceholders})
        ORDER BY ai.LOSEQ ASC, COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC
      `,
      [code, ...lotKeys]
    );

    const movementMap = new Map<number, InventoryLoteMovementEntity[]>();

    for (const movementRow of movementRows) {
      const sequence = Number(movementRow.LOSEQ);
      if (!Number.isFinite(sequence) || sequence <= 0) {
        continue;
      }

      const parsed = InventoryLoteMovementEntity.fromLegacyRow(movementRow);
      const group = movementMap.get(sequence);
      if (group) {
        group.push(parsed);
      } else {
        movementMap.set(sequence, [parsed]);
      }
    }

    return lotRows.map((row) => {
      const sequence = Number(row.LOSEQ);
      const movements =
        Number.isFinite(sequence) && sequence > 0 ? movementMap.get(sequence) ?? [] : [];
      return InventoryLoteEntity.fromLegacyRow(row, movements);
    });
  }

  public async findUepsPepsByCode(code: string): Promise<InventoryUepsPepsEntity[]> {
    const companyRows = await MySqlClient.queryReadOnly<(RowDataPacket & { CIACOMPORTA: string | null })[]>(
      `
        SELECT COALESCE(CIACOMPORTA, '') AS CIACOMPORTA
        FROM fcia
        LIMIT 1
      `
    );
    const ciaComporta = companyRows[0]?.CIACOMPORTA ?? "";
    const isUeps = ciaComporta.slice(45, 46) === "1";
    const isPeps = ciaComporta.slice(50, 51) === "1";
    const orderDirection = isPeps && !isUeps ? "ASC" : "DESC";

    const sql = `
      SELECT
        COALESCE(lo.LOCANTINI, 0) AS INICIAL,
        COALESCE(lo.LOCANT, 0) AS CANTIDAD,
        COALESCE(lo.LOCOSTO, 0) AS COSTO,
        COALESCE(lo.LOCOSTOADV, 0) AS ADV,
        COALESCE(lo.LOFECHA, '1900-12-31') AS FECHA,
        COALESCE(CAST(lo.LODOC AS CHAR), '') AS DOC,
        COALESCE(CAST(lo.LONUM AS CHAR), '') AS LOTE,
        COALESCE(lo.LOCADUCIDAD, '1900-12-31') AS CADUCIDAD,
        COALESCE(NULLIF(TRIM(SUBSTRING(lo.LOKEY, 1, 13)), ''), i.ICOD) AS LLAVE,
        COALESCE(NULLIF(TRIM(SUBSTRING(lo.LOKEY, 14, 4)), ''), '') AS CLAVE,
        LPAD(CAST(COALESCE(lo.LOALM, 0) AS CHAR), 2, '0') AS ALM,
        COALESCE(CAST(lo.LOPRV AS CHAR), '') AS PROVEEDOR,
        COALESCE(lo.LOTIPOC2, 0) AS TC,
        CASE
          WHEN COALESCE(lo.LOTIPOC2, 0) = 0 THEN 1e100
          ELSE COALESCE(lo.LOCOSTO, 0) / lo.LOTIPOC2
        END AS COSTO_DLLS,
        CASE
          WHEN COALESCE(lo.LOTIPOC2, 0) = 0 THEN 1e100
          ELSE COALESCE(lo.LOCOSTOADV, 0) / lo.LOTIPOC2
        END AS ADV_DLLS,
        CASE
          WHEN COALESCE(lo.LOTIPOC2, 0) = 0 THEN 1e100
          ELSE COALESCE(lo.LOCOSTOADV, 0) / lo.LOTIPOC2
        END AS TOTAL
      FROM flotes lo
      INNER JOIN finv i ON i.ISEQ = lo.ISEQ
      WHERE i.ICOD = ?
      ORDER BY lo.LOKEY ${orderDirection}
      LIMIT 2000
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryUepsPepsRow[]>(sql, [code]);
    return rows.map((row) => InventoryUepsPepsEntity.fromLegacyRow(row));
  }

  public async findSalesBreakdownByCode(input: {
    code: string;
    destination?: number;
    multiCompany?: number;
  }): Promise<InventorySalesBreakdownEntity[]> {
    const destination = input.destination ?? 0;
    const multiCompany = input.multiCompany ?? 1;
    const sql = `
      SELECT
        COALESCE(c.CLICOD, '') AS CODIGO,
        COALESCE(c.CLINOM, '') AS NOMBRE,
        COALESCE(ai.AICANTF, 0) AS CANTIDAD,
        COALESCE(ai.AIPRECIO, 0) AS PRECIO,
        COALESCE(CAST(d.DNUM AS CHAR), '') AS DOC,
        COALESCE(d.DFECHA, '1900-12-31') AS FECHA,
        CASE
          WHEN COALESCE(d.DTIPOC2, 0) = 0 THEN 0
          ELSE COALESCE(ai.AIPRECIO, 0) / d.DTIPOC2
        END AS PRECIO_US,
        COALESCE(d.DTIPOC2, 0) AS TC_DOLAR,
        COALESCE(ai.AIDESCTO, 0) AS DESC_PORC,
        COALESCE(NULLIF(TRIM(d.DREFERELLOS), ''), '') AS OC,
        COALESCE(CAST(d.DSUCURSAL AS CHAR), '0') AS SUCURSAL,
        COALESCE(ai.AIPZAS, 0) AS PZAS,
        COALESCE(ai.AISEQ, 0) AS AISEQ_SORT
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      LEFT JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fcli c ON c.CLISEQ = ai.CLISEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.CLISEQ, 0) <> 0
        AND COALESCE(d.DEST, 0) = ?
        AND COALESCE(d.DMULTICIA, 0) = ?
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 1
        AND COALESCE(d.DOTROSTXT, '') <> 'POS'
        AND COALESCE(d.DCONTROLPOS, 0) = 0
      ORDER BY AISEQ_SORT DESC
      LIMIT 1500
    `;

    const rows = await MySqlClient.queryReadOnly<InventorySalesBreakdownRow[]>(sql, [
      input.code,
      destination,
      multiCompany
    ]);
    return rows.map((row) => InventorySalesBreakdownEntity.fromLegacyRow(row));
  }

  public async findSalesByBranchByCode(code: string): Promise<InventorySalesByBranchEntity[]> {
    const sql = `
      SELECT
        COALESCE(CAST(d.DSUCURSAL AS CHAR), '0') AS SUCURSAL,
        COALESCE(c.CLICOD, '') AS CODIGO,
        COALESCE(c.CLINOM, '') AS CLIENTE,
        ROUND(SUM(COALESCE(ai.AICANTF, 0)), 2) AS CANTIDAD,
        ROUND(SUM(COALESCE(ai.AICANTF, 0) * COALESCE(ai.AIPRECIO, 0)), 2) AS IMPORTE
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fcli c ON c.CLISEQ = ai.CLISEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.CLISEQ, 0) <> 0
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 1
        AND COALESCE(d.DOTROSTXT, '') <> 'POS'
        AND COALESCE(d.DCONTROLPOS, 0) = 0
      GROUP BY SUCURSAL, CODIGO, CLIENTE
      ORDER BY SUCURSAL ASC, CODIGO ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventorySalesByBranchRow[]>(sql, [code]);
    return rows.map((row) => InventorySalesByBranchEntity.fromLegacyRow(row));
  }

  public async findAnnualSalesByCode(code: string): Promise<InventoryAnnualSaleEntity[]> {
    const sql = `
      SELECT
        COALESCE(c.CLICOD, '') AS CODIGO,
        COALESCE(c.CLINOM, '') AS CLIENTE,
        YEAR(d.DFECHA) AS ANIO,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 1 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS ENE,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 2 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS FEB,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 3 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS MAR,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 4 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS ABR,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 5 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS MAY,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 6 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS JUN,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 7 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS JUL,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 8 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS AGO,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 9 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS SEP,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 10 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS OCT,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 11 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS NOV,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 12 THEN COALESCE(ai.AICANTF, 0) ELSE 0 END), 2) AS DIC,
        ROUND(SUM(COALESCE(ai.AICANTF, 0)), 2) AS TOTAL
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fcli c ON c.CLISEQ = ai.CLISEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.CLISEQ, 0) <> 0
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 1
        AND COALESCE(d.DOTROSTXT, '') <> 'POS'
        AND COALESCE(d.DCONTROLPOS, 0) = 0
      GROUP BY CODIGO, CLIENTE, ANIO
      ORDER BY CODIGO ASC, ANIO ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryAnnualSaleRow[]>(sql, [code]);
    return rows.map((row) => InventoryAnnualSaleEntity.fromLegacyRow(row));
  }

  public async findPurchasesBySupplierByCode(
    code: string
  ): Promise<InventoryPurchaseBySupplierEntity[]> {
    const sql = `
      SELECT
        COALESCE(p.PRVCOD, '') AS CODIGO,
        COALESCE(p.PRVNOM, '') AS PROVEEDOR,
        ROUND(SUM(COALESCE(ai.AICANTF, 0)), 2) AS CANTIDAD,
        ROUND(SUM(COALESCE(ai.AICANTF, 0) * COALESCE(ai.AIPRECIO, 0)), 2) AS IMPORTE
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fprv p ON p.PRVSEQ = ai.PRVSEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 2
        AND COALESCE(d.DCANCELADA, 0) = 0
        AND COALESCE(ai.PRVSEQ, 0) <> 0
      GROUP BY CODIGO, PROVEEDOR
      ORDER BY CODIGO ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryPurchaseBySupplierRow[]>(sql, [code]);
    return rows.map((row) => InventoryPurchaseBySupplierEntity.fromLegacyRow(row));
  }

  public async findPurchasesBreakdownByCode(input: {
    code: string;
    destination?: number;
    multiCompany?: number;
  }): Promise<InventoryPurchaseBreakdownEntity[]> {
    const destination = input.destination ?? 0;
    const multiCompany = input.multiCompany ?? 1;
    const sql = `
      SELECT
        COALESCE(p.PRVCOD, '') AS CODIGO,
        COALESCE(p.PRVNOM, '') AS PROVEEDOR,
        ABS(COALESCE(ai.AICANTF, 0)) AS CANTIDAD,
        COALESCE(ai.AIPRECIO, 0) AS PRECIO,
        COALESCE(CAST(d.DNUM AS CHAR), '') AS DOC,
        COALESCE(d.DFECHA, '1900-12-31') AS FECHA,
        COALESCE(ai.AIPZAS, 0) AS PZAS,
        COALESCE(d.DTIPOC2, 0) AS TC_DOLAR,
        CASE
          WHEN COALESCE(d.DTIPOC2, 0) = 0 THEN 0
          ELSE COALESCE(ai.AIPRECIO, 0) / COALESCE(d.DTIPOC2, 0)
        END AS IMPORTE_DLLS,
        COALESCE(ai.AISEQ, 0) AS AISEQ_SORT
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fprv p ON p.PRVSEQ = ai.PRVSEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 2
        AND COALESCE(d.DCANCELADA, 0) = 0
        AND COALESCE(ai.PRVSEQ, 0) <> 0
        AND COALESCE(d.DEST, 0) = ?
        AND COALESCE(d.DMULTICIA, 0) = ?
      ORDER BY AISEQ_SORT DESC
      LIMIT 1500
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryPurchaseBreakdownRow[]>(sql, [
      input.code,
      destination,
      multiCompany
    ]);
    return rows.map((row) => InventoryPurchaseBreakdownEntity.fromLegacyRow(row));
  }

  public async findOrderedSuppliersByCode(code: string): Promise<InventoryOrderedSupplierEntity[]> {
    const sql = `
      SELECT
        COALESCE(p.PRVCOD, '') AS CODIGO,
        COALESCE(p.PRVNOM, '') AS DESCRIPCION,
        COALESCE(pe.PENUM, '') AS OC,
        COALESCE(CAST(pe.PEMULTICIA AS CHAR), '') AS SUCURSAL,
        COALESCE(NULLIF(TRIM(pl.PLUNIDAD), ''), i.IUM, '') AS UM,
        COALESCE(pl.PLCANT, 0) AS PEDIDO,
        COALESCE(pl.PLSURT, 0) AS SURTIDO,
        COALESCE(pl.PLCANT, 0) - COALESCE(pl.PLSURT, 0) AS RESTA,
        COALESCE(pl.PLPRECI, 0) AS PRECIO,
        COALESCE(pe.PENUMELLOS, '') AS OC_PRV,
        COALESCE(pe.PEDESDE, '1900-12-31') AS FECHA_E,
        COALESCE(pe.PEFECHA, '1900-12-31') AS FECHA,
        COALESCE(CAST(pe.PEALMACEN AS CHAR), '') AS ALM,
        TRIM(CONCAT_WS(' ',
          COALESCE(cm.COML1, ''),
          COALESCE(cm.COML2, ''),
          COALESCE(cm.COML3, ''),
          COALESCE(cm.COML4, ''),
          COALESCE(cm.COML5, '')
        )) AS OBS,
        COALESCE(pl.PLASIGNADO, 0) AS CONFIRMADO,
        COALESCE(pe.PEVENCE, '1900-12-31') AS VENCE,
        COALESCE(pe.PEFECHA, '1900-12-31') AS ALTA,
        COALESCE(pe.PECHAT, '1900-12-31') AS CONFIRMADA
      FROM finv i
      INNER JOIN fplin pl ON pl.ISEQ = i.ISEQ
      INNER JOIN fpenc pe ON pe.PESEQ = pl.PESEQ
      LEFT JOIN fprv p ON p.PRVSEQ = pe.PRVSEQ
      LEFT JOIN fcoment cm ON cm.COMSEQFACT = (1000000000 + pe.PESEQ)
      WHERE i.ICOD = ?
        AND COALESCE(pe.PESPEDIDO, 0) = 2
        AND COALESCE(pe.PENUM, '') LIKE 'O%'
      ORDER BY pe.PEFECHA DESC, pe.PENUM DESC
      LIMIT 1500
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryOrderedSupplierRow[]>(sql, [code]);
    return rows.map((row) => InventoryOrderedSupplierEntity.fromLegacyRow(row));
  }

  public async findAnnualPurchasesByCode(code: string): Promise<InventoryAnnualPurchaseEntity[]> {
    const sql = `
      SELECT
        COALESCE(p.PRVCOD, '') AS CODIGO,
        COALESCE(p.PRVNOM, '') AS PROVEEDOR,
        YEAR(d.DFECHA) AS ANIO,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 1 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS ENE,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 2 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS FEB,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 3 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS MAR,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 4 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS ABR,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 5 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS MAY,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 6 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS JUN,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 7 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS JUL,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 8 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS AGO,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 9 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS SEP,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 10 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS OCT,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 11 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS NOV,
        ROUND(SUM(CASE WHEN MONTH(d.DFECHA) = 12 THEN ABS(COALESCE(ai.AICANTF, 0)) ELSE 0 END), 2) AS DIC,
        ROUND(SUM(ABS(COALESCE(ai.AICANTF, 0))), 2) AS TOTAL
      FROM finv i
      INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
      INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
      LEFT JOIN fprv p ON p.PRVSEQ = ai.PRVSEQ
      WHERE i.ICOD = ?
        AND COALESCE(ai.AIMES, 0) = 1
        AND COALESCE(d.DESFACT, 0) = 2
        AND COALESCE(d.DCANCELADA, 0) = 0
        AND COALESCE(ai.PRVSEQ, 0) <> 0
      GROUP BY CODIGO, PROVEEDOR, ANIO
      ORDER BY CODIGO ASC, ANIO ASC
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryAnnualPurchaseRow[]>(sql, [code]);
    return rows.map((row) => InventoryAnnualPurchaseEntity.fromLegacyRow(row));
  }

  public async findClientOrdersByCode(
    code: string,
    kind: InventoryClientOrderKind
  ): Promise<InventoryClientOrderEntity[]> {
    const pesPedido = kind === "quotes" ? 4 : 1;
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
        AND COALESCE(p.PESPEDIDO, 0) = ?
        AND COALESCE(pl.CLISEQ, 0) <> 0
        AND (p.PENUM IS NULL OR UPPER(p.PENUM) NOT LIKE 'O%')
      ORDER BY COALESCE(p.PEDESDE, '1900-12-31') DESC, COALESCE(p.PENUM, 0) DESC, pl.PLSEQ DESC
      LIMIT 1500
    `;

    const rows = await MySqlClient.queryReadOnly<InventoryClientOrderRow[]>(sql, [code, pesPedido]);
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
