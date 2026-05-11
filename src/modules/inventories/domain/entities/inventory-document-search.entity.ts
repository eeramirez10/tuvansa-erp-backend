export type InventoryDocumentSearchLegacyRow = {
  DSEQ: number | string | null;
  DOCUMENTO: string | null;
  FECHA: string | Date | null;
  REF: string | null;
  REF_2: string | null;
  ALM: string | null;
  PROVEEDOR: string | null;
  CLIENTE: string | null;
  TM: string | number | null;
};

type InventoryDocumentSearchProps = {
  dseq: number | null;
  document: string;
  date: string | null;
  ref: string;
  ref2: string;
  warehouse: string;
  provider: string;
  client: string;
  tm: string;
};

export class InventoryDocumentSearchEntity {
  public readonly dseq: number | null;
  public readonly document: string;
  public readonly date: string | null;
  public readonly ref: string;
  public readonly ref2: string;
  public readonly warehouse: string;
  public readonly provider: string;
  public readonly client: string;
  public readonly tm: string;

  private constructor(props: InventoryDocumentSearchProps) {
    this.dseq = props.dseq;
    this.document = props.document;
    this.date = props.date;
    this.ref = props.ref;
    this.ref2 = props.ref2;
    this.warehouse = props.warehouse;
    this.provider = props.provider;
    this.client = props.client;
    this.tm = props.tm;
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

  public static fromLegacyRow(
    row: InventoryDocumentSearchLegacyRow
  ): InventoryDocumentSearchEntity {
    return new InventoryDocumentSearchEntity({
      dseq: InventoryDocumentSearchEntity.asNumber(row.DSEQ),
      document: InventoryDocumentSearchEntity.asString(row.DOCUMENTO),
      date: InventoryDocumentSearchEntity.normalizeLegacyDate(row.FECHA),
      ref: InventoryDocumentSearchEntity.asString(row.REF),
      ref2: InventoryDocumentSearchEntity.asString(row.REF_2),
      warehouse: InventoryDocumentSearchEntity.asString(row.ALM),
      provider: InventoryDocumentSearchEntity.asString(row.PROVEEDOR),
      client: InventoryDocumentSearchEntity.asString(row.CLIENTE),
      tm: InventoryDocumentSearchEntity.asString(row.TM)
    });
  }
}
