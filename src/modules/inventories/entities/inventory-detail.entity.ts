export type InventoryDetailLegacyRow = {
  ICOD: string;
  IDESCR: string;
  IUM: string;
  UDESCR: string | null;
  IFAM: string;
  ITIPO: number | string;
  ICT: number | string;
  IBAJA: string | Date;
  IALTA: string | Date;

  ILISTA1: number | string;
  ILISTA2: number | string;
  ILISTA3: number | string;
  ILISTA4: number | string;
  ILISTA5: number | string;
  ILISTA6: number | string;
  IMONEDA1: number | string;
  IMONEDA2: number | string;
  IMONEDA3: number | string;
  IADVALOREM: number | string;

  IULTCPR: string | Date;
  IULTVTA: string | Date;
  IASIGNADO: number | string;
  ICONFIRMADO: number | string;
  IPEDCLI: number | string;
  IPEDCOTIZ: number | string;
  IPEDPRV: number | string;
  IORDCOTIZ: number | string;
  ISTKACT: number | string;
  ISTKANT: number | string;
  ISTKACU: number | string;
  ICANTAN: number | string;
  ICANTAC: number | string;
  ISTKPZS: number | string;

  IMINIMO: number | string;
  IMAXIMO: number | string;
  IMAXIMOINI: number | string;
  ILOCALIZ: string;
  IEAN: string;
  IUPC: string;

  ICTA: string;
  ICTADEV: string;
  ICTA3: string;
  ICTADESV: string;

  IVTA: number | string;
  IDIASSTK: number | string;
  IVTAEOL: number | string;
};

type InventoryDate = string | null;
type InventoryDetailProps = {
  identity: {
    code: string;
    description: string;
    unitCode: string;
    unitDescription: string | null;
    family: string;
    type: number | null;
    colorAndSize: number | null;
    createdAt: InventoryDate;
    inactiveAt: InventoryDate;
  };
  pricing: {
    price1: number | null;
    price2: number | null;
    price3: number | null;
    price4: number | null;
    price5: number | null;
    price6: number | null;
    currency1: number | null;
    currency2: number | null;
    currency3: number | null;
    adValorem: number | null;
  };
  accumulators: {
    lastPurchase: InventoryDate;
    lastSale: InventoryDate;
    assigned: number | null;
    confirmed: number | null;
    customerOrders: number | null;
    customerQuotes: number | null;
    supplierOrders: number | null;
    supplierQuotes: number | null;
    stockCurrent: number | null;
    stockPrevious: number | null;
    stockAccumulated: number | null;
    quantityPrevious: number | null;
    quantityAccumulated: number | null;
    stockPieces: number | null;
  };
  storage: {
    minStock: number | null;
    maxStock: number | null;
    maxInitial: number | null;
    location: string;
    ean: string;
    upc: string;
  };
  accounts: {
    primary: string;
    secondary: string;
    costSales: string;
    deviation: string;
  };
  indicators: {
    sales6Months: number | null;
    inventoryDays: number | null;
    salesEol: number | null;
  };
};

export class InventoryDetailEntity {
  public readonly identity: {
    code: string;
    description: string;
    unitCode: string;
    unitDescription: string | null;
    family: string;
    type: number | null;
    colorAndSize: number | null;
    createdAt: InventoryDate;
    inactiveAt: InventoryDate;
  };

  public readonly pricing: {
    price1: number | null;
    price2: number | null;
    price3: number | null;
    price4: number | null;
    price5: number | null;
    price6: number | null;
    currency1: number | null;
    currency2: number | null;
    currency3: number | null;
    adValorem: number | null;
  };

  public readonly accumulators: {
    lastPurchase: InventoryDate;
    lastSale: InventoryDate;
    assigned: number | null;
    confirmed: number | null;
    customerOrders: number | null;
    customerQuotes: number | null;
    supplierOrders: number | null;
    supplierQuotes: number | null;
    stockCurrent: number | null;
    stockPrevious: number | null;
    stockAccumulated: number | null;
    quantityPrevious: number | null;
    quantityAccumulated: number | null;
    stockPieces: number | null;
  };

  public readonly storage: {
    minStock: number | null;
    maxStock: number | null;
    maxInitial: number | null;
    location: string;
    ean: string;
    upc: string;
  };

  public readonly accounts: {
    primary: string;
    secondary: string;
    costSales: string;
    deviation: string;
  };

  public readonly indicators: {
    sales6Months: number | null;
    inventoryDays: number | null;
    salesEol: number | null;
  };

  private constructor(props: InventoryDetailProps) {
    this.identity = props.identity;
    this.pricing = props.pricing;
    this.accumulators = props.accumulators;
    this.storage = props.storage;
    this.accounts = props.accounts;
    this.indicators = props.indicators;
  }

  private static normalizeLegacyDate(value: string | Date | null | undefined): InventoryDate {
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

  public static fromLegacyRow(row: InventoryDetailLegacyRow): InventoryDetailEntity {
    return new InventoryDetailEntity({
      identity: {
        code: row.ICOD,
        description: row.IDESCR,
        unitCode: row.IUM,
        unitDescription: row.UDESCR,
        family: row.IFAM,
        type: InventoryDetailEntity.asNumber(row.ITIPO),
        colorAndSize: InventoryDetailEntity.asNumber(row.ICT),
        createdAt: InventoryDetailEntity.normalizeLegacyDate(row.IALTA),
        inactiveAt: InventoryDetailEntity.normalizeLegacyDate(row.IBAJA)
      },
      pricing: {
        price1: InventoryDetailEntity.asNumber(row.ILISTA1),
        price2: InventoryDetailEntity.asNumber(row.ILISTA2),
        price3: InventoryDetailEntity.asNumber(row.ILISTA3),
        price4: InventoryDetailEntity.asNumber(row.ILISTA4),
        price5: InventoryDetailEntity.asNumber(row.ILISTA5),
        price6: InventoryDetailEntity.asNumber(row.ILISTA6),
        currency1: InventoryDetailEntity.asNumber(row.IMONEDA1),
        currency2: InventoryDetailEntity.asNumber(row.IMONEDA2),
        currency3: InventoryDetailEntity.asNumber(row.IMONEDA3),
        adValorem: InventoryDetailEntity.asNumber(row.IADVALOREM)
      },
      accumulators: {
        lastPurchase: InventoryDetailEntity.normalizeLegacyDate(row.IULTCPR),
        lastSale: InventoryDetailEntity.normalizeLegacyDate(row.IULTVTA),
        assigned: InventoryDetailEntity.asNumber(row.IASIGNADO),
        confirmed: InventoryDetailEntity.asNumber(row.ICONFIRMADO),
        customerOrders: InventoryDetailEntity.asNumber(row.IPEDCLI),
        customerQuotes: InventoryDetailEntity.asNumber(row.IPEDCOTIZ),
        supplierOrders: InventoryDetailEntity.asNumber(row.IPEDPRV),
        supplierQuotes: InventoryDetailEntity.asNumber(row.IORDCOTIZ),
        stockCurrent: InventoryDetailEntity.asNumber(row.ISTKACT),
        stockPrevious: InventoryDetailEntity.asNumber(row.ISTKANT),
        stockAccumulated: InventoryDetailEntity.asNumber(row.ISTKACU),
        quantityPrevious: InventoryDetailEntity.asNumber(row.ICANTAN),
        quantityAccumulated: InventoryDetailEntity.asNumber(row.ICANTAC),
        stockPieces: InventoryDetailEntity.asNumber(row.ISTKPZS)
      },
      storage: {
        minStock: InventoryDetailEntity.asNumber(row.IMINIMO),
        maxStock: InventoryDetailEntity.asNumber(row.IMAXIMO),
        maxInitial: InventoryDetailEntity.asNumber(row.IMAXIMOINI),
        location: row.ILOCALIZ,
        ean: row.IEAN,
        upc: row.IUPC
      },
      accounts: {
        primary: row.ICTA,
        secondary: row.ICTADEV,
        costSales: row.ICTA3,
        deviation: row.ICTADESV
      },
      indicators: {
        sales6Months: InventoryDetailEntity.asNumber(row.IVTA),
        inventoryDays: InventoryDetailEntity.asNumber(row.IDIASSTK),
        salesEol: InventoryDetailEntity.asNumber(row.IVTAEOL)
      }
    });
  }
}
