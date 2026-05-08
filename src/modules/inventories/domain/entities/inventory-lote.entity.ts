export type InventoryLoteMovementLegacyRow = {
  LOSEQ: number | string | null;
  FECHA: string | Date | null;
  DOC: string | null;
  ENTRADAS: number | string | null;
  SALIDAS: number | string | null;
  ALM: string | null;
};

export type InventoryLoteLegacyRow = {
  LOSEQ: number | string | null;
  FECHA: string | Date | null;
  CADUCIDAD: string | Date | null;
  PEDIMENTO: string | null;
  ADUANA: string | null;
  LOTE: string | null;
  DISPONIBLE: number | string | null;
  ALM: string | null;
  LOCALIZACION: string | null;
  SECUENCIA: number | string | null;
  COSTO: number | string | null;
  ADVALOREM: number | string | null;
};

type InventoryLoteMovementProps = {
  sequence: number | null;
  date: string | null;
  document: string;
  entries: number | null;
  exits: number | null;
  warehouse: string;
};

export class InventoryLoteMovementEntity {
  public readonly sequence: number | null;
  public readonly date: string | null;
  public readonly document: string;
  public readonly entries: number | null;
  public readonly exits: number | null;
  public readonly warehouse: string;

  private constructor(props: InventoryLoteMovementProps) {
    this.sequence = props.sequence;
    this.date = props.date;
    this.document = props.document;
    this.entries = props.entries;
    this.exits = props.exits;
    this.warehouse = props.warehouse;
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
    row: InventoryLoteMovementLegacyRow
  ): InventoryLoteMovementEntity {
    return new InventoryLoteMovementEntity({
      sequence: InventoryLoteMovementEntity.asNumber(row.LOSEQ),
      date: InventoryLoteMovementEntity.normalizeLegacyDate(row.FECHA),
      document: InventoryLoteMovementEntity.asString(row.DOC),
      entries: InventoryLoteMovementEntity.asNumber(row.ENTRADAS),
      exits: InventoryLoteMovementEntity.asNumber(row.SALIDAS),
      warehouse: InventoryLoteMovementEntity.asString(row.ALM)
    });
  }
}

type InventoryLoteProps = {
  sequence: number | null;
  date: string | null;
  expirationAt: string | null;
  pedimento: string;
  customsOffice: string;
  lot: string;
  available: number | null;
  warehouse: string;
  location: string;
  cost: number | null;
  adValorem: number | null;
  movements: InventoryLoteMovementEntity[];
};

export class InventoryLoteEntity {
  public readonly sequence: number | null;
  public readonly date: string | null;
  public readonly expirationAt: string | null;
  public readonly pedimento: string;
  public readonly customsOffice: string;
  public readonly lot: string;
  public readonly available: number | null;
  public readonly warehouse: string;
  public readonly location: string;
  public readonly cost: number | null;
  public readonly adValorem: number | null;
  public readonly movements: InventoryLoteMovementEntity[];

  private constructor(props: InventoryLoteProps) {
    this.sequence = props.sequence;
    this.date = props.date;
    this.expirationAt = props.expirationAt;
    this.pedimento = props.pedimento;
    this.customsOffice = props.customsOffice;
    this.lot = props.lot;
    this.available = props.available;
    this.warehouse = props.warehouse;
    this.location = props.location;
    this.cost = props.cost;
    this.adValorem = props.adValorem;
    this.movements = props.movements;
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
    row: InventoryLoteLegacyRow,
    movements: InventoryLoteMovementEntity[]
  ): InventoryLoteEntity {
    return new InventoryLoteEntity({
      sequence: InventoryLoteEntity.asNumber(row.LOSEQ ?? row.SECUENCIA),
      date: InventoryLoteEntity.normalizeLegacyDate(row.FECHA),
      expirationAt: InventoryLoteEntity.normalizeLegacyDate(row.CADUCIDAD),
      pedimento: InventoryLoteEntity.asString(row.PEDIMENTO),
      customsOffice: InventoryLoteEntity.asString(row.ADUANA),
      lot: InventoryLoteEntity.asString(row.LOTE),
      available: InventoryLoteEntity.asNumber(row.DISPONIBLE),
      warehouse: InventoryLoteEntity.asString(row.ALM),
      location: InventoryLoteEntity.asString(row.LOCALIZACION),
      cost: InventoryLoteEntity.asNumber(row.COSTO),
      adValorem: InventoryLoteEntity.asNumber(row.ADVALOREM),
      movements
    });
  }
}

