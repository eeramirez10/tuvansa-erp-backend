export type InventoryAnnualSaleLegacyRow = {
  CODIGO: string | null;
  CLIENTE: string | null;
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

type InventoryAnnualSaleProps = {
  code: string;
  client: string;
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

export class InventoryAnnualSaleEntity {
  public readonly code: string;
  public readonly client: string;
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

  private constructor(props: InventoryAnnualSaleProps) {
    this.code = props.code;
    this.client = props.client;
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

  public static fromLegacyRow(row: InventoryAnnualSaleLegacyRow): InventoryAnnualSaleEntity {
    return new InventoryAnnualSaleEntity({
      code: InventoryAnnualSaleEntity.asString(row.CODIGO),
      client: InventoryAnnualSaleEntity.asString(row.CLIENTE),
      year: InventoryAnnualSaleEntity.asNumber(row.ANIO),
      ene: InventoryAnnualSaleEntity.asNumber(row.ENE),
      feb: InventoryAnnualSaleEntity.asNumber(row.FEB),
      mar: InventoryAnnualSaleEntity.asNumber(row.MAR),
      abr: InventoryAnnualSaleEntity.asNumber(row.ABR),
      may: InventoryAnnualSaleEntity.asNumber(row.MAY),
      jun: InventoryAnnualSaleEntity.asNumber(row.JUN),
      jul: InventoryAnnualSaleEntity.asNumber(row.JUL),
      ago: InventoryAnnualSaleEntity.asNumber(row.AGO),
      sep: InventoryAnnualSaleEntity.asNumber(row.SEP),
      oct: InventoryAnnualSaleEntity.asNumber(row.OCT),
      nov: InventoryAnnualSaleEntity.asNumber(row.NOV),
      dic: InventoryAnnualSaleEntity.asNumber(row.DIC),
      total: InventoryAnnualSaleEntity.asNumber(row.TOTAL)
    });
  }
}
