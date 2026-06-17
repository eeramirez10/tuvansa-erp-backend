export type InventoryLegacyRow = {
  ICOD: string;
  IDESCR: string;
  IUM: string;
  IFAM: string;
  IBAJA: string | Date;
  ISTKACT: number | string;
  UDESCR: string | null;
};

export class InventoryEntity {
  public readonly code: string;
  public readonly description: string;
  public readonly unitCode: string;
  public readonly unitDescription: string | null;
  public readonly family: string;
  public readonly inactiveAt: string | null;
  public readonly stockActual: number | null;

  private constructor(props: {
    code: string;
    description: string;
    unitCode: string;
    unitDescription: string | null;
    family: string;
    inactiveAt: string | null;
    stockActual: number | null;
  }) {
    this.code = props.code;
    this.description = props.description;
    this.unitCode = props.unitCode;
    this.unitDescription = props.unitDescription;
    this.family = props.family;
    this.inactiveAt = props.inactiveAt;
    this.stockActual = props.stockActual;
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

  public static fromLegacyRow(row: InventoryLegacyRow): InventoryEntity {
    return new InventoryEntity({
      code: row.ICOD,
      description: row.IDESCR,
      unitCode: row.IUM,
      unitDescription: row.UDESCR,
      family: row.IFAM,
      inactiveAt: InventoryEntity.normalizeLegacyDate(row.IBAJA),
      stockActual: InventoryEntity.asNumber(row.ISTKACT)
    });
  }
}
