export type InventoryAnnualPurchaseLegacyRow = {
  CODIGO: string | null;
  PROVEEDOR: string | null;
  ANIO: number | string | null;
  ENE: number | string | null;
  FEB: number | string | null;
  MAR: number | string | null;
  ABR: number | string | null;
  MAY: number | string | null;
  JUN: number | string | null;
  JUL: number | string | null;
  AGO: number | string | null;
  SEP: number | string | null;
  OCT: number | string | null;
  NOV: number | string | null;
  DIC: number | string | null;
  TOTAL: number | string | null;
};

type InventoryAnnualPurchaseProps = {
  code: string;
  supplier: string;
  year: number | null;
  ene: number | null;
  feb: number | null;
  mar: number | null;
  abr: number | null;
  may: number | null;
  jun: number | null;
  jul: number | null;
  ago: number | null;
  sep: number | null;
  oct: number | null;
  nov: number | null;
  dic: number | null;
  total: number | null;
};

export class InventoryAnnualPurchaseEntity {
  public readonly code: string;
  public readonly supplier: string;
  public readonly year: number | null;
  public readonly ene: number | null;
  public readonly feb: number | null;
  public readonly mar: number | null;
  public readonly abr: number | null;
  public readonly may: number | null;
  public readonly jun: number | null;
  public readonly jul: number | null;
  public readonly ago: number | null;
  public readonly sep: number | null;
  public readonly oct: number | null;
  public readonly nov: number | null;
  public readonly dic: number | null;
  public readonly total: number | null;

  private constructor(props: InventoryAnnualPurchaseProps) {
    this.code = props.code;
    this.supplier = props.supplier;
    this.year = props.year;
    this.ene = props.ene;
    this.feb = props.feb;
    this.mar = props.mar;
    this.abr = props.abr;
    this.may = props.may;
    this.jun = props.jun;
    this.jul = props.jul;
    this.ago = props.ago;
    this.sep = props.sep;
    this.oct = props.oct;
    this.nov = props.nov;
    this.dic = props.dic;
    this.total = props.total;
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

  public static fromLegacyRow(row: InventoryAnnualPurchaseLegacyRow): InventoryAnnualPurchaseEntity {
    return new InventoryAnnualPurchaseEntity({
      code: InventoryAnnualPurchaseEntity.asString(row.CODIGO),
      supplier: InventoryAnnualPurchaseEntity.asString(row.PROVEEDOR),
      year: InventoryAnnualPurchaseEntity.asNumber(row.ANIO),
      ene: InventoryAnnualPurchaseEntity.asNumber(row.ENE),
      feb: InventoryAnnualPurchaseEntity.asNumber(row.FEB),
      mar: InventoryAnnualPurchaseEntity.asNumber(row.MAR),
      abr: InventoryAnnualPurchaseEntity.asNumber(row.ABR),
      may: InventoryAnnualPurchaseEntity.asNumber(row.MAY),
      jun: InventoryAnnualPurchaseEntity.asNumber(row.JUN),
      jul: InventoryAnnualPurchaseEntity.asNumber(row.JUL),
      ago: InventoryAnnualPurchaseEntity.asNumber(row.AGO),
      sep: InventoryAnnualPurchaseEntity.asNumber(row.SEP),
      oct: InventoryAnnualPurchaseEntity.asNumber(row.OCT),
      nov: InventoryAnnualPurchaseEntity.asNumber(row.NOV),
      dic: InventoryAnnualPurchaseEntity.asNumber(row.DIC),
      total: InventoryAnnualPurchaseEntity.asNumber(row.TOTAL)
    });
  }
}
