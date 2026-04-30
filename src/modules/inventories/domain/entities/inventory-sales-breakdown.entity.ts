export type InventorySalesBreakdownLegacyRow = {
  CODIGO: string | null;
  NOMBRE: string | null;
  CANTIDAD: number | string | null;
  PRECIO: number | string | null;
  DOC: string | null;
  FECHA: string | Date | null;
  PRECIO_US: number | string | null;
  TC_DOLAR: number | string | null;
  DESC_PORC: number | string | null;
  OC: string | null;
  SUCURSAL: string | null;
  PZAS: number | string | null;
};

type InventorySalesBreakdownProps = {
  code: string;
  name: string;
  quantity: number | null;
  price: number | null;
  document: string;
  date: string | null;
  unitPrice: number | null;
  dollarExchangeRate: number | null;
  discountPercent: number | null;
  purchaseOrder: string;
  branch: string;
  pieces: number | null;
};

export class InventorySalesBreakdownEntity {
  public readonly code: string;
  public readonly name: string;
  public readonly quantity: number | null;
  public readonly price: number | null;
  public readonly document: string;
  public readonly date: string | null;
  public readonly unitPrice: number | null;
  public readonly dollarExchangeRate: number | null;
  public readonly discountPercent: number | null;
  public readonly purchaseOrder: string;
  public readonly branch: string;
  public readonly pieces: number | null;

  private constructor(props: InventorySalesBreakdownProps) {
    this.code = props.code;
    this.name = props.name;
    this.quantity = props.quantity;
    this.price = props.price;
    this.document = props.document;
    this.date = props.date;
    this.unitPrice = props.unitPrice;
    this.dollarExchangeRate = props.dollarExchangeRate;
    this.discountPercent = props.discountPercent;
    this.purchaseOrder = props.purchaseOrder;
    this.branch = props.branch;
    this.pieces = props.pieces;
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

  public static fromLegacyRow(row: InventorySalesBreakdownLegacyRow): InventorySalesBreakdownEntity {
    return new InventorySalesBreakdownEntity({
      code: InventorySalesBreakdownEntity.asString(row.CODIGO),
      name: InventorySalesBreakdownEntity.asString(row.NOMBRE),
      quantity: InventorySalesBreakdownEntity.asNumber(row.CANTIDAD),
      price: InventorySalesBreakdownEntity.asNumber(row.PRECIO),
      document: InventorySalesBreakdownEntity.asString(row.DOC),
      date: InventorySalesBreakdownEntity.normalizeLegacyDate(row.FECHA),
      unitPrice: InventorySalesBreakdownEntity.asNumber(row.PRECIO_US),
      dollarExchangeRate: InventorySalesBreakdownEntity.asNumber(row.TC_DOLAR),
      discountPercent: InventorySalesBreakdownEntity.asNumber(row.DESC_PORC),
      purchaseOrder: InventorySalesBreakdownEntity.asString(row.OC),
      branch: InventorySalesBreakdownEntity.asString(row.SUCURSAL),
      pieces: InventorySalesBreakdownEntity.asNumber(row.PZAS)
    });
  }
}

