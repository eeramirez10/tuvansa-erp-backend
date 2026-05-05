export type InventoryPurchaseBreakdownLegacyRow = {
  CODIGO: string | null;
  PROVEEDOR: string | null;
  CANTIDAD: number | string | null;
  PRECIO: number | string | null;
  DOC: string | null;
  FECHA: string | Date | null;
  PZAS: number | string | null;
  TC_DOLAR: number | string | null;
  IMPORTE_DLLS: number | string | null;
};

type InventoryPurchaseBreakdownProps = {
  code: string;
  supplier: string;
  quantity: number | null;
  price: number | null;
  document: string;
  date: string | null;
  pieces: number | null;
  dollarExchangeRate: number | null;
  amountDollars: number | null;
};

export class InventoryPurchaseBreakdownEntity {
  public readonly code: string;
  public readonly supplier: string;
  public readonly quantity: number | null;
  public readonly price: number | null;
  public readonly document: string;
  public readonly date: string | null;
  public readonly pieces: number | null;
  public readonly dollarExchangeRate: number | null;
  public readonly amountDollars: number | null;

  private constructor(props: InventoryPurchaseBreakdownProps) {
    this.code = props.code;
    this.supplier = props.supplier;
    this.quantity = props.quantity;
    this.price = props.price;
    this.document = props.document;
    this.date = props.date;
    this.pieces = props.pieces;
    this.dollarExchangeRate = props.dollarExchangeRate;
    this.amountDollars = props.amountDollars;
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

  public static fromLegacyRow(
    row: InventoryPurchaseBreakdownLegacyRow
  ): InventoryPurchaseBreakdownEntity {
    return new InventoryPurchaseBreakdownEntity({
      code: InventoryPurchaseBreakdownEntity.asString(row.CODIGO),
      supplier: InventoryPurchaseBreakdownEntity.asString(row.PROVEEDOR),
      quantity: InventoryPurchaseBreakdownEntity.asNumber(row.CANTIDAD),
      price: InventoryPurchaseBreakdownEntity.asNumber(row.PRECIO),
      document: InventoryPurchaseBreakdownEntity.asString(row.DOC),
      date: InventoryPurchaseBreakdownEntity.normalizeLegacyDate(row.FECHA),
      pieces: InventoryPurchaseBreakdownEntity.asNumber(row.PZAS),
      dollarExchangeRate: InventoryPurchaseBreakdownEntity.asNumber(row.TC_DOLAR),
      amountDollars: InventoryPurchaseBreakdownEntity.asNumber(row.IMPORTE_DLLS)
    });
  }
}
