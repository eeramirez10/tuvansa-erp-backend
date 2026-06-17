export type InventoryDocumentLineLegacyRow = {
  PRODUCTO: string | null;
  DESCRIPCION: string | null;
  ENTRADAS: number | string | null;
  SALIDAS: number | string | null;
  UM: string | null;
  COSTO: number | string | null;
  PZAS: number | string | null;
  ALM: string | null;
  USR: number | string | null;
  TM: string | null;
};

export type InventoryDocumentHeaderLegacyRow = {
  DOCUMENTO: string | null;
  REFERENCIA: string | null;
  CLIENTE_CODIGO: string | null;
  CLIENTE_NOMBRE: string | null;
  FECHA: string | Date | null;
  ALMACEN: string | null;
  DITIPMV: string | number | null;
  DESFACT: string | number | null;
  DESINV: string | number | null;
  DALMACEN: string | number | null;
  DIUSEQ: string | number | null;
};

type InventoryDocumentLineProps = {
  product: string;
  description: string;
  entries: number | null;
  exits: number | null;
  unit: string;
  cost: number | null;
  pieces: number | null;
  warehouse: string;
  user: number | null;
  tm: string;
};

type InventoryDocumentHeaderProps = {
  document: string;
  reference: string;
  clientCode: string;
  clientName: string;
  date: string | null;
  warehouse: string;
  tipmv: string;
  desfact: string;
  desinv: string;
  dalmacen: string;
  diuseq: string;
};

export class InventoryDocumentLineEntity {
  public readonly product: string;
  public readonly description: string;
  public readonly entries: number | null;
  public readonly exits: number | null;
  public readonly unit: string;
  public readonly cost: number | null;
  public readonly pieces: number | null;
  public readonly warehouse: string;
  public readonly user: number | null;
  public readonly tm: string;

  private constructor(props: InventoryDocumentLineProps) {
    this.product = props.product;
    this.description = props.description;
    this.entries = props.entries;
    this.exits = props.exits;
    this.unit = props.unit;
    this.cost = props.cost;
    this.pieces = props.pieces;
    this.warehouse = props.warehouse;
    this.user = props.user;
    this.tm = props.tm;
  }

  private static asString(value: string | number | null | undefined): string {
    return value === null || value === undefined ? "" : String(value);
  }

  private static asNumber(value: number | string | null | undefined): number | null {
    if (value === null || value === undefined || value === "") {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  public static fromLegacyRow(row: InventoryDocumentLineLegacyRow): InventoryDocumentLineEntity {
    return new InventoryDocumentLineEntity({
      product: InventoryDocumentLineEntity.asString(row.PRODUCTO),
      description: InventoryDocumentLineEntity.asString(row.DESCRIPCION),
      entries: InventoryDocumentLineEntity.asNumber(row.ENTRADAS),
      exits: InventoryDocumentLineEntity.asNumber(row.SALIDAS),
      unit: InventoryDocumentLineEntity.asString(row.UM),
      cost: InventoryDocumentLineEntity.asNumber(row.COSTO),
      pieces: InventoryDocumentLineEntity.asNumber(row.PZAS),
      warehouse: InventoryDocumentLineEntity.asString(row.ALM),
      user: InventoryDocumentLineEntity.asNumber(row.USR),
      tm: InventoryDocumentLineEntity.asString(row.TM)
    });
  }
}

export class InventoryDocumentHeaderEntity {
  public readonly document: string;
  public readonly reference: string;
  public readonly clientCode: string;
  public readonly clientName: string;
  public readonly date: string | null;
  public readonly warehouse: string;
  public readonly tipmv: string;
  public readonly desfact: string;
  public readonly desinv: string;
  public readonly dalmacen: string;
  public readonly diuseq: string;

  private constructor(props: InventoryDocumentHeaderProps) {
    this.document = props.document;
    this.reference = props.reference;
    this.clientCode = props.clientCode;
    this.clientName = props.clientName;
    this.date = props.date;
    this.warehouse = props.warehouse;
    this.tipmv = props.tipmv;
    this.desfact = props.desfact;
    this.desinv = props.desinv;
    this.dalmacen = props.dalmacen;
    this.diuseq = props.diuseq;
  }

  private static asString(value: string | number | null | undefined): string {
    return value === null || value === undefined ? "" : String(value);
  }

  private static normalizeLegacyDate(value: string | Date | null | undefined): string | null {
    if (!value || value === "1900-12-31") {
      return null;
    }

    if (value instanceof Date) {
      const ymd = value.toISOString().slice(0, 10);
      return ymd === "1900-12-31" ? null : ymd;
    }

    const ymd = String(value).slice(0, 10);
    return ymd === "1900-12-31" ? null : ymd;
  }

  public static fromLegacyRow(
    row: InventoryDocumentHeaderLegacyRow
  ): InventoryDocumentHeaderEntity {
    return new InventoryDocumentHeaderEntity({
      document: InventoryDocumentHeaderEntity.asString(row.DOCUMENTO),
      reference: InventoryDocumentHeaderEntity.asString(row.REFERENCIA),
      clientCode: InventoryDocumentHeaderEntity.asString(row.CLIENTE_CODIGO),
      clientName: InventoryDocumentHeaderEntity.asString(row.CLIENTE_NOMBRE),
      date: InventoryDocumentHeaderEntity.normalizeLegacyDate(row.FECHA),
      warehouse: InventoryDocumentHeaderEntity.asString(row.ALMACEN),
      tipmv: InventoryDocumentHeaderEntity.asString(row.DITIPMV),
      desfact: InventoryDocumentHeaderEntity.asString(row.DESFACT),
      desinv: InventoryDocumentHeaderEntity.asString(row.DESINV),
      dalmacen: InventoryDocumentHeaderEntity.asString(row.DALMACEN),
      diuseq: InventoryDocumentHeaderEntity.asString(row.DIUSEQ)
    });
  }
}
