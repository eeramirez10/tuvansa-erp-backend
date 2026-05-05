export type InventoryOrderedSupplierLegacyRow = {
  CODIGO: string | null;
  DESCRIPCION: string | null;
  OC: string | null;
  SUCURSAL: string | null;
  UM: string | null;
  PEDIDO: number | string | null;
  SURTIDO: number | string | null;
  RESTA: number | string | null;
  PRECIO: number | string | null;
  OC_PRV: string | null;
  FECHA_E: string | Date | null;
  FECHA: string | Date | null;
  ALM: string | null;
  OBS: string | null;
  CONFIRMADO: number | string | null;
  VENCE: string | Date | null;
  ALTA: string | Date | null;
  CONFIRMADA: string | Date | null;
};

type InventoryOrderedSupplierProps = {
  code: string;
  description: string;
  oc: string;
  branch: string;
  um: string;
  ordered: number | null;
  supplied: number | null;
  remaining: number | null;
  price: number | null;
  providerOc: string;
  expectedDate: string | null;
  date: string | null;
  warehouse: string;
  observations: string;
  confirmed: number | null;
  expiresAt: string | null;
  createdAt: string | null;
  confirmedAt: string | null;
};

export class InventoryOrderedSupplierEntity {
  public readonly code: string;
  public readonly description: string;
  public readonly oc: string;
  public readonly branch: string;
  public readonly um: string;
  public readonly ordered: number | null;
  public readonly supplied: number | null;
  public readonly remaining: number | null;
  public readonly price: number | null;
  public readonly providerOc: string;
  public readonly expectedDate: string | null;
  public readonly date: string | null;
  public readonly warehouse: string;
  public readonly observations: string;
  public readonly confirmed: number | null;
  public readonly expiresAt: string | null;
  public readonly createdAt: string | null;
  public readonly confirmedAt: string | null;

  private constructor(props: InventoryOrderedSupplierProps) {
    this.code = props.code;
    this.description = props.description;
    this.oc = props.oc;
    this.branch = props.branch;
    this.um = props.um;
    this.ordered = props.ordered;
    this.supplied = props.supplied;
    this.remaining = props.remaining;
    this.price = props.price;
    this.providerOc = props.providerOc;
    this.expectedDate = props.expectedDate;
    this.date = props.date;
    this.warehouse = props.warehouse;
    this.observations = props.observations;
    this.confirmed = props.confirmed;
    this.expiresAt = props.expiresAt;
    this.createdAt = props.createdAt;
    this.confirmedAt = props.confirmedAt;
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

  public static fromLegacyRow(row: InventoryOrderedSupplierLegacyRow): InventoryOrderedSupplierEntity {
    return new InventoryOrderedSupplierEntity({
      code: InventoryOrderedSupplierEntity.asString(row.CODIGO),
      description: InventoryOrderedSupplierEntity.asString(row.DESCRIPCION),
      oc: InventoryOrderedSupplierEntity.asString(row.OC),
      branch: InventoryOrderedSupplierEntity.asString(row.SUCURSAL),
      um: InventoryOrderedSupplierEntity.asString(row.UM),
      ordered: InventoryOrderedSupplierEntity.asNumber(row.PEDIDO),
      supplied: InventoryOrderedSupplierEntity.asNumber(row.SURTIDO),
      remaining: InventoryOrderedSupplierEntity.asNumber(row.RESTA),
      price: InventoryOrderedSupplierEntity.asNumber(row.PRECIO),
      providerOc: InventoryOrderedSupplierEntity.asString(row.OC_PRV),
      expectedDate: InventoryOrderedSupplierEntity.normalizeLegacyDate(row.FECHA_E),
      date: InventoryOrderedSupplierEntity.normalizeLegacyDate(row.FECHA),
      warehouse: InventoryOrderedSupplierEntity.asString(row.ALM),
      observations: InventoryOrderedSupplierEntity.asString(row.OBS),
      confirmed: InventoryOrderedSupplierEntity.asNumber(row.CONFIRMADO),
      expiresAt: InventoryOrderedSupplierEntity.normalizeLegacyDate(row.VENCE),
      createdAt: InventoryOrderedSupplierEntity.normalizeLegacyDate(row.ALTA),
      confirmedAt: InventoryOrderedSupplierEntity.normalizeLegacyDate(row.CONFIRMADA)
    });
  }
}
