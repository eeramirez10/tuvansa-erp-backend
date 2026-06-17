export type InventoryAuxiliarLegacyRow = {
  FECHA: string | Date | null;
  DOCUMENTO: string | null;
  TM: string | null;
  COSTO: number | string | null;
  ENTRADAS: number | string | null;
  SALIDAS: number | string | null;
  STOCK: number | string | null;
  ALM: string | null;
  PZAS: number | string | null;
  RUTA: string | null;
  USR: number | string | null;
  REVAL: number | string | null;
  REFERENCIA: string | null;
};

type InventoryAuxiliarProps = {
  date: string | null;
  document: string;
  tm: string;
  cost: number | null;
  entries: number | null;
  exits: number | null;
  stock: number | null;
  warehouse: string;
  pieces: number | null;
  route: string;
  user: number | null;
  revaluation: number | null;
  reference: string;
};

export class InventoryAuxiliarEntity {
  public readonly date: string | null;
  public readonly document: string;
  public readonly tm: string;
  public readonly cost: number | null;
  public readonly entries: number | null;
  public readonly exits: number | null;
  public readonly stock: number | null;
  public readonly warehouse: string;
  public readonly pieces: number | null;
  public readonly route: string;
  public readonly user: number | null;
  public readonly revaluation: number | null;
  public readonly reference: string;

  private constructor(props: InventoryAuxiliarProps) {
    this.date = props.date;
    this.document = props.document;
    this.tm = props.tm;
    this.cost = props.cost;
    this.entries = props.entries;
    this.exits = props.exits;
    this.stock = props.stock;
    this.warehouse = props.warehouse;
    this.pieces = props.pieces;
    this.route = props.route;
    this.user = props.user;
    this.revaluation = props.revaluation;
    this.reference = props.reference;
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

  private static asNumber(value: number | string | null | undefined): number | null {
    if (value === null || value === undefined || value === "") {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  private static asString(value: string | null | undefined): string {
    return value ?? "";
  }

  public static fromLegacyRow(row: InventoryAuxiliarLegacyRow): InventoryAuxiliarEntity {
    return new InventoryAuxiliarEntity({
      date: InventoryAuxiliarEntity.normalizeLegacyDate(row.FECHA),
      document: InventoryAuxiliarEntity.asString(row.DOCUMENTO),
      tm: InventoryAuxiliarEntity.asString(row.TM),
      cost: InventoryAuxiliarEntity.asNumber(row.COSTO),
      entries: InventoryAuxiliarEntity.asNumber(row.ENTRADAS),
      exits: InventoryAuxiliarEntity.asNumber(row.SALIDAS),
      stock: InventoryAuxiliarEntity.asNumber(row.STOCK),
      warehouse: InventoryAuxiliarEntity.asString(row.ALM),
      pieces: InventoryAuxiliarEntity.asNumber(row.PZAS),
      route: InventoryAuxiliarEntity.asString(row.RUTA),
      user: InventoryAuxiliarEntity.asNumber(row.USR),
      revaluation: InventoryAuxiliarEntity.asNumber(row.REVAL),
      reference: InventoryAuxiliarEntity.asString(row.REFERENCIA)
    });
  }
}

