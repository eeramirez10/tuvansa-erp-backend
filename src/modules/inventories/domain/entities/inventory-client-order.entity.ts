export type InventoryClientOrderLegacyRow = {
  CODIGO: string | null;
  DESCRIPCION: string | null;
  FECHA_E: string | Date | null;
  VENCE: string | Date | null;
  NUM: string | number | null;
  PEDIDO: number | string | null;
  SURTIDO: number | string | null;
  RESTA: number | string | null;
  ASIGNADO: number | string | null;
  PRECIO: number | string | null;
  NUM_ELLOS: string | null;
  PZAS: number | string | null;
  ALM: string | null;
  WMS: number | string | null;
};

type InventoryClientOrderProps = {
  code: string;
  description: string;
  expectedDate: string | null;
  expiresAt: string | null;
  number: string;
  ordered: number | null;
  supplied: number | null;
  remaining: number | null;
  assigned: number | null;
  price: number | null;
  externalNumber: string;
  pieces: number | null;
  warehouse: string;
  wms: number | null;
};

export class InventoryClientOrderEntity {
  public readonly code: string;
  public readonly description: string;
  public readonly expectedDate: string | null;
  public readonly expiresAt: string | null;
  public readonly number: string;
  public readonly ordered: number | null;
  public readonly supplied: number | null;
  public readonly remaining: number | null;
  public readonly assigned: number | null;
  public readonly price: number | null;
  public readonly externalNumber: string;
  public readonly pieces: number | null;
  public readonly warehouse: string;
  public readonly wms: number | null;

  private constructor(props: InventoryClientOrderProps) {
    this.code = props.code;
    this.description = props.description;
    this.expectedDate = props.expectedDate;
    this.expiresAt = props.expiresAt;
    this.number = props.number;
    this.ordered = props.ordered;
    this.supplied = props.supplied;
    this.remaining = props.remaining;
    this.assigned = props.assigned;
    this.price = props.price;
    this.externalNumber = props.externalNumber;
    this.pieces = props.pieces;
    this.warehouse = props.warehouse;
    this.wms = props.wms;
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

  private static asString(value: string | number | null | undefined): string {
    return value === null || value === undefined ? "" : String(value);
  }

  public static fromLegacyRow(row: InventoryClientOrderLegacyRow): InventoryClientOrderEntity {
    return new InventoryClientOrderEntity({
      code: InventoryClientOrderEntity.asString(row.CODIGO),
      description: InventoryClientOrderEntity.asString(row.DESCRIPCION),
      expectedDate: InventoryClientOrderEntity.normalizeLegacyDate(row.FECHA_E),
      expiresAt: InventoryClientOrderEntity.normalizeLegacyDate(row.VENCE),
      number: InventoryClientOrderEntity.asString(row.NUM),
      ordered: InventoryClientOrderEntity.asNumber(row.PEDIDO),
      supplied: InventoryClientOrderEntity.asNumber(row.SURTIDO),
      remaining: InventoryClientOrderEntity.asNumber(row.RESTA),
      assigned: InventoryClientOrderEntity.asNumber(row.ASIGNADO),
      price: InventoryClientOrderEntity.asNumber(row.PRECIO),
      externalNumber: InventoryClientOrderEntity.asString(row.NUM_ELLOS),
      pieces: InventoryClientOrderEntity.asNumber(row.PZAS),
      warehouse: InventoryClientOrderEntity.asString(row.ALM),
      wms: InventoryClientOrderEntity.asNumber(row.WMS)
    });
  }
}
