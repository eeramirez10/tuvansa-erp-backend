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

  IVOLUMEN: number | string;
  IPESO: number | string;
  ICANTCAJA: number | string;
  IEMPAQUE: number | string;
  ILARGO: number | string;
  IALTO: number | string;
  IANCHO: number | string;
  IDENSIDAD: number | string;
  IPESOMTRO: number | string;
  IPESOSPARAPUNTO: number | string;
  IEDIEMP: string;
  IEDIEMPC: number | string;
  IZONAPICK: string;
  ILOCALIZ2: string;
  IDLXUNTPAK: number | string;
  IDLXUNTCAS: number | string;
  IDLXUNTPAL: number | string;
  IDLXPAKUOM: string;
  IDLXCASUOM: string;
  IDLXPALUOM: string;
  IVOLUMEN2: number | string;
  ICANTCAJA2: number | string;

  IMONEDA: number | string;
  ICODPRV: string;
  IPORC1: number | string;
  IFINTEMPORADA: string | Date;
  ICOMPRAMINIMA: number | string;
  ICURVATMP: number | string;
  IFACTORSEMTDAS: number | string;
  IFACTORSEMBODEGA: number | string;
  ITIEMPO: number | string;
  IPREPACK: number | string;
  IREDI: number | string;
  ISOLOCD: number | string;
  ISTATUSOTB: number | string;
  IINACTIVO: number | string;
  ICLIMAS: string;
  INUMPREPACKS: number | string;
  ILUGAR: string;
  IUM2: string;
  IUM2FACTOR: number | string;
  IUM2PRECIO: number | string;
  IPRV: string;
  PRVNOM: string | null;


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
  dimensions: {
    volume: number | null;
    weight: number | null;
    genericBox: number | null;
    pack: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    densityKl: number | null;
    weightKmKpz: number | null;
    pointsPerInch: number | null;
    ediPack: string;
    ediQuantity: number | null;
    picking: number | null;
    box: number | null;
    pallet: number | null;
    volumeSecondary: number | null;
    boxSecondary: number | null;
    innerUom: string;
    outerUom: string;
    palletUom: string;
    locationSecondary: string;
    zone: string;
  };

  purchases: {
    lastFiveCost: number | null;
    originCurrency: number | null;
    originCubicMeters: number | null;
    originBox: number | null;
    provider: string;
    providerPercent: number | null;
    code: string;
    type: number | null;
    unit: string;
    equivalentTo: number | null;
    price: number | null;
    endSeasonAt: InventoryDate;
    minimumPurchase: number | null;
    seasonCurve: number | null;
    storeWeeksFactor: number | null;
    warehouseWeeksFactor: number | null;
    supplierLeadTimeDays: number | null;
    quantityInPrepack: number | null;
    exportRedi: boolean;
    onlyDistributesCd: boolean;
    statusOtb: boolean;
    inactive: boolean;
    climates: string;
    prepackCount: number | null;
    ediPack: string;
    ediQuantity: number | null;
    originPlace: string;
    equivalentUnit: string;

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

  public readonly dimensions: {
    volume: number | null;
    weight: number | null;
    genericBox: number | null;
    pack: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    densityKl: number | null;
    weightKmKpz: number | null;
    pointsPerInch: number | null;
    ediPack: string;
    ediQuantity: number | null;
    picking: number | null;
    box: number | null;
    pallet: number | null;
    volumeSecondary: number | null;
    boxSecondary: number | null;
    innerUom: string;
    outerUom: string;
    palletUom: string;
    locationSecondary: string;
    zone: string;
  };

  public readonly purchases: {
    lastFiveCost: number | null;
    originCurrency: number | null;
    originCubicMeters: number | null;
    originBox: number | null;
    provider: string;
    providerPercent: number | null;
    code: string;
    type: number | null;
    unit: string;
    equivalentTo: number | null;
    price: number | null;
    endSeasonAt: InventoryDate;
    minimumPurchase: number | null;
    seasonCurve: number | null;
    storeWeeksFactor: number | null;
    warehouseWeeksFactor: number | null;
    supplierLeadTimeDays: number | null;
    quantityInPrepack: number | null;
    exportRedi: boolean;
    onlyDistributesCd: boolean;
    statusOtb: boolean;
    inactive: boolean;
    climates: string;
    prepackCount: number | null;
    ediPack: string;
    ediQuantity: number | null;
    originPlace: string;
    equivalentUnit: string;
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
    this.dimensions = props.dimensions;
    this.accounts = props.accounts;
    this.indicators = props.indicators;
    this.purchases = props.purchases
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

  private static asString(value: string | null | undefined): string {
    return value ?? "";
  }
  private static asBoolean(value: number | string | null | undefined): boolean {
    const parsed = InventoryDetailEntity.asNumber(value);
    return parsed !== null && parsed !== 0;
  }

  public static fromLegacyRow(row: InventoryDetailLegacyRow): InventoryDetailEntity {

    const providerCode = InventoryDetailEntity.asString(row.IPRV).trim();
    const providerName = InventoryDetailEntity.asString(row.PRVNOM).trim();
    const providerDisplay = providerName
      ? `${providerCode} ${providerName}`.trim()
      : providerCode;
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
      dimensions: {
        volume: InventoryDetailEntity.asNumber(row.IVOLUMEN),
        weight: InventoryDetailEntity.asNumber(row.IPESO),
        genericBox: InventoryDetailEntity.asNumber(row.ICANTCAJA),
        pack: InventoryDetailEntity.asNumber(row.IEMPAQUE),
        length: InventoryDetailEntity.asNumber(row.ILARGO),
        height: InventoryDetailEntity.asNumber(row.IALTO),
        width: InventoryDetailEntity.asNumber(row.IANCHO),
        densityKl: InventoryDetailEntity.asNumber(row.IDENSIDAD),
        weightKmKpz: InventoryDetailEntity.asNumber(row.IPESOMTRO),
        pointsPerInch: InventoryDetailEntity.asNumber(row.IPESOSPARAPUNTO),
        ediPack: InventoryDetailEntity.asString(row.IEDIEMP),
        ediQuantity: InventoryDetailEntity.asNumber(row.IEDIEMPC),
        picking: InventoryDetailEntity.asNumber(row.IDLXUNTPAK),
        box: InventoryDetailEntity.asNumber(row.IDLXUNTCAS),
        pallet: InventoryDetailEntity.asNumber(row.IDLXUNTPAL),
        volumeSecondary: InventoryDetailEntity.asNumber(row.IVOLUMEN2),
        boxSecondary: InventoryDetailEntity.asNumber(row.ICANTCAJA2),
        innerUom: InventoryDetailEntity.asString(row.IDLXPAKUOM),
        outerUom: InventoryDetailEntity.asString(row.IDLXCASUOM),
        palletUom: InventoryDetailEntity.asString(row.IDLXPALUOM),
        locationSecondary: InventoryDetailEntity.asString(row.ILOCALIZ2),
        zone: InventoryDetailEntity.asString(row.IZONAPICK)
      },

      purchases: {
        lastFiveCost: InventoryDetailEntity.asNumber(row.ILISTA5),
        originCurrency: InventoryDetailEntity.asNumber(row.IMONEDA),
        originCubicMeters: InventoryDetailEntity.asNumber(row.IVOLUMEN),
        originBox: InventoryDetailEntity.asNumber(row.ICANTCAJA),
        providerPercent: InventoryDetailEntity.asNumber(row.IPORC1),
        type: InventoryDetailEntity.asNumber(row.ITIPO),
        unit: row.IUM,
        originPlace: InventoryDetailEntity.asString(row.ILUGAR),
        equivalentUnit: InventoryDetailEntity.asString(row.IUM2),
        equivalentTo: InventoryDetailEntity.asNumber(row.IUM2FACTOR),
        price: InventoryDetailEntity.asNumber(row.IUM2PRECIO),
        endSeasonAt: InventoryDetailEntity.normalizeLegacyDate(row.IFINTEMPORADA),
        minimumPurchase: InventoryDetailEntity.asNumber(row.ICOMPRAMINIMA),
        seasonCurve: InventoryDetailEntity.asNumber(row.ICURVATMP),
        storeWeeksFactor: InventoryDetailEntity.asNumber(row.IFACTORSEMTDAS),
        warehouseWeeksFactor: InventoryDetailEntity.asNumber(row.IFACTORSEMBODEGA),
        supplierLeadTimeDays: InventoryDetailEntity.asNumber(row.ITIEMPO),
        quantityInPrepack: InventoryDetailEntity.asNumber(row.IPREPACK),
        exportRedi: InventoryDetailEntity.asBoolean(row.IREDI),
        onlyDistributesCd: InventoryDetailEntity.asBoolean(row.ISOLOCD),
        statusOtb: InventoryDetailEntity.asBoolean(row.ISTATUSOTB),
        inactive: InventoryDetailEntity.asBoolean(row.IINACTIVO),
        climates: InventoryDetailEntity.asString(row.ICLIMAS),
        prepackCount: InventoryDetailEntity.asNumber(row.INUMPREPACKS),
        ediPack: InventoryDetailEntity.asString(row.IEDIEMP),
        ediQuantity: InventoryDetailEntity.asNumber(row.IEDIEMPC),
        provider: providerDisplay,
        code: InventoryDetailEntity.asString(row.ICODPRV),

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
