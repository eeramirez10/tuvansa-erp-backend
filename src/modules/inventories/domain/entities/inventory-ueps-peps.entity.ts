export type InventoryUepsPepsLegacyRow = {
  INICIAL: number | string | null;
  CANTIDAD: number | string | null;
  COSTO: number | string | null;
  ADV: number | string | null;
  FECHA: string | Date | null;
  DOC: string | null;
  LOTE: string | null;
  CADUCIDAD: string | Date | null;
  LLAVE: string | null;
  CLAVE: string | null;
  ALM: string | null;
  PROVEEDOR: string | null;
  TC: number | string | null;
  COSTO_DLLS: number | string | null;
  ADV_DLLS: number | string | null;
  TOTAL: number | string | null;
};

type InventoryUepsPepsProps = {
  initial: number | null;
  quantity: number | null;
  cost: number | null;
  adValorem: number | null;
  date: string | null;
  document: string;
  lot: string;
  expirationAt: string | null;
  key: string;
  keySuffix: string;
  warehouse: string;
  provider: string;
  exchangeRate: number | null;
  costDollars: number | null;
  adValoremDollars: number | null;
  total: number | null;
};

export class InventoryUepsPepsEntity {
  public readonly initial: number | null;
  public readonly quantity: number | null;
  public readonly cost: number | null;
  public readonly adValorem: number | null;
  public readonly date: string | null;
  public readonly document: string;
  public readonly lot: string;
  public readonly expirationAt: string | null;
  public readonly key: string;
  public readonly keySuffix: string;
  public readonly warehouse: string;
  public readonly provider: string;
  public readonly exchangeRate: number | null;
  public readonly costDollars: number | null;
  public readonly adValoremDollars: number | null;
  public readonly total: number | null;

  private constructor(props: InventoryUepsPepsProps) {
    this.initial = props.initial;
    this.quantity = props.quantity;
    this.cost = props.cost;
    this.adValorem = props.adValorem;
    this.date = props.date;
    this.document = props.document;
    this.lot = props.lot;
    this.expirationAt = props.expirationAt;
    this.key = props.key;
    this.keySuffix = props.keySuffix;
    this.warehouse = props.warehouse;
    this.provider = props.provider;
    this.exchangeRate = props.exchangeRate;
    this.costDollars = props.costDollars;
    this.adValoremDollars = props.adValoremDollars;
    this.total = props.total;
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
    return (value ?? "").trim();
  }

  public static fromLegacyRow(row: InventoryUepsPepsLegacyRow): InventoryUepsPepsEntity {
    return new InventoryUepsPepsEntity({
      initial: InventoryUepsPepsEntity.asNumber(row.INICIAL),
      quantity: InventoryUepsPepsEntity.asNumber(row.CANTIDAD),
      cost: InventoryUepsPepsEntity.asNumber(row.COSTO),
      adValorem: InventoryUepsPepsEntity.asNumber(row.ADV),
      date: InventoryUepsPepsEntity.normalizeLegacyDate(row.FECHA),
      document: InventoryUepsPepsEntity.asString(row.DOC),
      lot: InventoryUepsPepsEntity.asString(row.LOTE),
      expirationAt: InventoryUepsPepsEntity.normalizeLegacyDate(row.CADUCIDAD),
      key: InventoryUepsPepsEntity.asString(row.LLAVE),
      keySuffix: InventoryUepsPepsEntity.asString(row.CLAVE),
      warehouse: InventoryUepsPepsEntity.asString(row.ALM),
      provider: InventoryUepsPepsEntity.asString(row.PROVEEDOR),
      exchangeRate: InventoryUepsPepsEntity.asNumber(row.TC),
      costDollars: InventoryUepsPepsEntity.asNumber(row.COSTO_DLLS),
      adValoremDollars: InventoryUepsPepsEntity.asNumber(row.ADV_DLLS),
      total: InventoryUepsPepsEntity.asNumber(row.TOTAL)
    });
  }
}
