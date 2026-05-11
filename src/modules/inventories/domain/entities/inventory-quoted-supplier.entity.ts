export type InventoryQuotedSupplierLegacyRow = {
  CODIGO: string | null;
  DESCRIPCION: string | null;
  OC: string | null;
  UM: string | null;
  PEDIDO: number | string | null;
  SURTIDO: number | string | null;
  RESTA: number | string | null;
  FECHA: string | Date | null;
  FECHA_E: string | Date | null;
  OBS: string | null;
  FECHA_2: string | Date | null;
};

type InventoryQuotedSupplierProps = {
  code: string;
  description: string;
  oc: string;
  um: string;
  ordered: number | null;
  supplied: number | null;
  remaining: number | null;
  date: string | null;
  expectedDate: string | null;
  observations: string;
  date2: string | null;
};

export class InventoryQuotedSupplierEntity {
  public readonly code: string;
  public readonly description: string;
  public readonly oc: string;
  public readonly um: string;
  public readonly ordered: number | null;
  public readonly supplied: number | null;
  public readonly remaining: number | null;
  public readonly date: string | null;
  public readonly expectedDate: string | null;
  public readonly observations: string;
  public readonly date2: string | null;

  private constructor(props: InventoryQuotedSupplierProps) {
    this.code = props.code;
    this.description = props.description;
    this.oc = props.oc;
    this.um = props.um;
    this.ordered = props.ordered;
    this.supplied = props.supplied;
    this.remaining = props.remaining;
    this.date = props.date;
    this.expectedDate = props.expectedDate;
    this.observations = props.observations;
    this.date2 = props.date2;
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

  public static fromLegacyRow(row: InventoryQuotedSupplierLegacyRow): InventoryQuotedSupplierEntity {
    return new InventoryQuotedSupplierEntity({
      code: InventoryQuotedSupplierEntity.asString(row.CODIGO),
      description: InventoryQuotedSupplierEntity.asString(row.DESCRIPCION),
      oc: InventoryQuotedSupplierEntity.asString(row.OC),
      um: InventoryQuotedSupplierEntity.asString(row.UM),
      ordered: InventoryQuotedSupplierEntity.asNumber(row.PEDIDO),
      supplied: InventoryQuotedSupplierEntity.asNumber(row.SURTIDO),
      remaining: InventoryQuotedSupplierEntity.asNumber(row.RESTA),
      date: InventoryQuotedSupplierEntity.normalizeLegacyDate(row.FECHA),
      expectedDate: InventoryQuotedSupplierEntity.normalizeLegacyDate(row.FECHA_E),
      observations: InventoryQuotedSupplierEntity.asString(row.OBS),
      date2: InventoryQuotedSupplierEntity.normalizeLegacyDate(row.FECHA_2)
    });
  }
}
