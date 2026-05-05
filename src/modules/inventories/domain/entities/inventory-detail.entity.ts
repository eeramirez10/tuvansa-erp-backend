export type InventoryDetailLegacyRow = {
  ICOD: string;
  IDESCR: string;
  I2DESCR: string | null;
  IUM: string;
  UDESCR: string | null;
  IFAM: string;
  IFAM1: string;
  IFAM2: string;
  IFAM3: string;
  IFAM4: string;
  IFAM5: string;
  IFAM6: string;
  IFAM7: string;
  IFAM8: string;
  IFAM9: string;
  IFAML: string;
  IFAMM: string;
  IFAMN: string;
  IFAMO: string;
  IFAMP: string;
  IFAMQ: string;
  IFAMR: string;
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
  IPEDIMENTO: string;
  IFECHAIMPORT: string | Date;
  IADUANA: string;
  IARANCEL: string;
  IARANCELEXP: string;
  IPORCARANC: number | string;
  INOCAPAS: number | string;
  ITIPOTIEMPO: number | string;
  ILOTE: number | string;
  INECPRO: number | string;
  IFECHAENSAMBLE: string | Date;
  IENSABLES: number | string;
  ISEGUNDAS: string;
  ITERCERAS: string;
  IREBAJAMINIMO: number | string;
  INOPRODUCTIVO: number | string;
  IPORCIEPES: number | string;
  IPORCRETIVA: number | string;
  IPORCRETISR: number | string;
  IPORCIVA: number | string;
  IRETIVA: number | string;
  IFISCAL: number | string;
  IDONATIVO: number | string;
  INOIVAENIEPS: number | string;
  ITMVTS: string;
  ITMREC: string;
  ICOMPOS: string;
  ITVP: number | string;
  ICONTROLPZAS: number | string;
  IFRACCIONABLE: number | string;
  IUSEQ: number | string;
  IBODEGA: number | string;
  IPROXRECEP: string | Date;
  ITRANSITO: number | string;
  IFISICOINICIAL: number | string;
  IFECHACAMBIO: string | Date;
  IFECHACAMBIOPR: string | Date;
  IWEBPEDIDOS: number | string;
  IPRIMERVTAPOS: string | Date;
  INVFIS: number | string;
  IRENGLON: string;
  IRAIZ: string;
  ICOLOREXT: string;
  ICOLOR: string;
  IPORCOMISION: number | string;
  IFIJOIEPS: number | string;
  IOFERDESDE: string | Date;
  IOFERHASTA: string | Date;
  IMINIMOHASTA: string | Date;
  IDESCTOMON: number | string;
  IDESCTOPOS: number | string;
  ILISTA7: number | string;
  ILISTA8: number | string;
  ILISTA9: number | string;
  ILISTA10: number | string;
  ILISTA11: number | string;
  ILISTA12: number | string;
  ILISTA13: number | string;
  ILISTA14: number | string;
  ILISTA15: number | string;
  ILISTA16: number | string;
  ILISTA17: number | string;
  ILISTA18: number | string;
  IMONEDA4: number | string;
  IMONEDA5: number | string;
  IMONEDA6: number | string;
  IMONEDA7: number | string;
  IMONEDA8: number | string;
  IMONEDA9: number | string;
  IMONEDA10: number | string;
  IMONEDA11: number | string;
  IMONEDA12: number | string;
  IMONEDA13: number | string;
  IMONEDA14: number | string;
  IMONEDA15: number | string;
  IMONEDA16: number | string;
  IMONEDA17: number | string;
  IMONEDA18: number | string;
  ICCPMPTIPO: number | string;
  ICCPMPCLAVE: string;
  ICCPMPEMBALAJE: string;
  IFACTORCCE: number | string;
  IVARIOS1: number | string;
  IVARIOS2: number | string;
  IVARIOS3: number | string;
  IVARIOS4: number | string;
  IVARIOS5: number | string;
  IVARIOS6: number | string;
  IVARIOS7: number | string;
  IVARIOS8: number | string;
  IVARIOS9: number | string;
  IVARIOS10: number | string;
  IVARIOS11: number | string;
  IVARIOS12: number | string;
  IVARIOS13: number | string;
  IVARIOS14: number | string;
  IVARIOS15: number | string;
  IVARIOS16: number | string;
  IVARIOS17: number | string;
  IVARIOS18: number | string;
  IVARIOS19: number | string;
  IVARIOS20: number | string;
  IVARIOS21: number | string;
  IVARIOS22: number | string;
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
    extendedDescription: string;
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
  classification: {
    supplier: string;
    product: string;
    type: string;
    material: string;
    ends: string;
    pressureClass: string;
    cedula: string;
    measure: string;
    others: string;
    origin: string;
    sativ: string;
    coating: string;
    branch: string;
    brand: string;
    inv: string;
    family: string;
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

  imports: {
    dontHandleLayers: boolean;
    pedimento: string;
    importDate: InventoryDate;
    customsOffice: string;
    tariff: string;
    tariffOption: string;
    tariffPercent: number | null;
    tariffAmount: number | null;
  };

  production: {
    variableTime: boolean;
    lot: number | null;
    timeDays: number | null;
    capacity: number | null;
    assemblyAt: InventoryDate;
    assemblyMode: number | null;
    secondCode: string;
    thirdCode: string;
    reduceMinimumsWithOrders: boolean;
    unproductiveTimeSams: boolean;
  };

  taxes: {
    salesProfile: string;
    purchasesProfile: string;
    iepsPercent: number | null;
    retentionIvaPercent: number | null;
    retentionIsrPercent: number | null;
    ivaType: "general" | "exempt" | "zero" | "unknown";
    retentionType: "none" | "freight" | "rent" | "fee" | "unknown";
    dontChargeIvaOnIeps: boolean;
    donative: boolean;
  };

  others: {
    options: {
      composition: string;
      virtualStore: boolean;
      inactiveForPurchases: boolean;
      controlByPieces: boolean;
      fractionable: boolean;
      lastChangedBy: number | null;
      warehouse: number | null;
      nextReceptionAt: InventoryDate;
      transit: number | null;
      physicalInitial: number | null;
      lastChangedAt: InventoryDate;
      list123ChangedAt: InventoryDate;
      unsupplied: number | null;
      firstPosSaleAt: InventoryDate;
      countInventory: number | null;
      row: string;
      rootCode: string;
      color: string;
    };
    prices: {
      commissionPercent: number | null;
      iepsPercent: number | null;
      fixedIepsPercent: number | null;
      offerFrom: InventoryDate;
      offerTo: InventoryDate;
      minUntil: InventoryDate;
      walletPercent: number | null;
      lists: Array<{
        list: number;
        price: number | null;
        currency: number | null;
        percent: number | null;
      }>;
    };
    exportData: {
      tariff: string;
      factor: number | null;
    };
    ccp: {
      materialDangerousType: number | null;
      hazardousKey: string;
      packagingKey: string;
    };
    vars: {
      values: Array<number | null>;
    };
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
    extendedDescription: string;
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
  public readonly classification: {
    supplier: string;
    product: string;
    type: string;
    material: string;
    ends: string;
    pressureClass: string;
    cedula: string;
    measure: string;
    others: string;
    origin: string;
    sativ: string;
    coating: string;
    branch: string;
    brand: string;
    inv: string;
    family: string;
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

  public readonly imports: {
    dontHandleLayers: boolean;
    pedimento: string;
    importDate: InventoryDate;
    customsOffice: string;
    tariff: string;
    tariffOption: string;
    tariffPercent: number | null;
    tariffAmount: number | null;
  };

  public readonly production: {
    variableTime: boolean;
    lot: number | null;
    timeDays: number | null;
    capacity: number | null;
    assemblyAt: InventoryDate;
    assemblyMode: number | null;
    secondCode: string;
    thirdCode: string;
    reduceMinimumsWithOrders: boolean;
    unproductiveTimeSams: boolean;
  };

  public readonly taxes: {
    salesProfile: string;
    purchasesProfile: string;
    iepsPercent: number | null;
    retentionIvaPercent: number | null;
    retentionIsrPercent: number | null;
    ivaType: "general" | "exempt" | "zero" | "unknown";
    retentionType: "none" | "freight" | "rent" | "fee" | "unknown";
    dontChargeIvaOnIeps: boolean;
    donative: boolean;
  };

  public readonly others: {
    options: {
      composition: string;
      virtualStore: boolean;
      inactiveForPurchases: boolean;
      controlByPieces: boolean;
      fractionable: boolean;
      lastChangedBy: number | null;
      warehouse: number | null;
      nextReceptionAt: InventoryDate;
      transit: number | null;
      physicalInitial: number | null;
      lastChangedAt: InventoryDate;
      list123ChangedAt: InventoryDate;
      unsupplied: number | null;
      firstPosSaleAt: InventoryDate;
      countInventory: number | null;
      row: string;
      rootCode: string;
      color: string;
    };
    prices: {
      commissionPercent: number | null;
      iepsPercent: number | null;
      fixedIepsPercent: number | null;
      offerFrom: InventoryDate;
      offerTo: InventoryDate;
      minUntil: InventoryDate;
      walletPercent: number | null;
      lists: Array<{
        list: number;
        price: number | null;
        currency: number | null;
        percent: number | null;
      }>;
    };
    exportData: {
      tariff: string;
      factor: number | null;
    };
    ccp: {
      materialDangerousType: number | null;
      hazardousKey: string;
      packagingKey: string;
    };
    vars: {
      values: Array<number | null>;
    };
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
    this.classification = props.classification;
    this.accumulators = props.accumulators;
    this.storage = props.storage;
    this.dimensions = props.dimensions;
    this.imports = props.imports;
    this.production = props.production;
    this.taxes = props.taxes;
    this.others = props.others;
    this.accounts = props.accounts;
    this.indicators = props.indicators;
    this.purchases = props.purchases;
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

  private static asIvaType(
    value: number | string | null | undefined
  ): "general" | "exempt" | "zero" | "unknown" {
    const parsed = InventoryDetailEntity.asNumber(value);
    if (parsed === 0) return "general";
    if (parsed === 1) return "exempt";
    if (parsed === 2) return "zero";
    return "unknown";
  }

  private static asRetentionType(
    value: number | string | null | undefined
  ): "none" | "freight" | "rent" | "fee" | "unknown" {
    const parsed = InventoryDetailEntity.asNumber(value);
    if (parsed === 0) return "none";
    if (parsed === 1) return "freight";
    if (parsed === 2) return "rent";
    if (parsed === 3) return "fee";
    return "unknown";
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
        extendedDescription: InventoryDetailEntity.asString(row.I2DESCR),
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
      classification: {
        supplier: InventoryDetailEntity.asString(row.IFAM1).trim(),
        product: InventoryDetailEntity.asString(row.IFAM2).trim(),
        type: InventoryDetailEntity.asString(row.IFAM3).trim(),
        material: InventoryDetailEntity.asString(row.IFAM4).trim(),
        ends: InventoryDetailEntity.asString(row.IFAM5).trim(),
        pressureClass: InventoryDetailEntity.asString(row.IFAM6).trim(),
        cedula: InventoryDetailEntity.asString(row.IFAM7).trim(),
        measure: InventoryDetailEntity.asString(row.IFAM8).trim(),
        others: InventoryDetailEntity.asString(row.IFAM9).trim(),
        origin: InventoryDetailEntity.asString(row.IFAML).trim(),
        sativ: InventoryDetailEntity.asString(row.IFAMM).trim(),
        coating: InventoryDetailEntity.asString(row.IFAMN).trim(),
        branch: InventoryDetailEntity.asString(row.IFAMO).trim(),
        brand: InventoryDetailEntity.asString(row.IFAMP).trim(),
        inv: InventoryDetailEntity.asString(row.IFAMQ).trim(),
        family: InventoryDetailEntity.asString(row.IFAMR).trim()
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
      imports: {
        dontHandleLayers: InventoryDetailEntity.asBoolean(row.INOCAPAS),
        pedimento: InventoryDetailEntity.asString(row.IPEDIMENTO),
        importDate: InventoryDetailEntity.normalizeLegacyDate(row.IFECHAIMPORT),
        customsOffice: InventoryDetailEntity.asString(row.IADUANA),
        tariff: InventoryDetailEntity.asString(row.IARANCEL),
        tariffOption: InventoryDetailEntity.asString(row.IARANCELEXP),
        tariffPercent: InventoryDetailEntity.asNumber(row.IPORCARANC),
        tariffAmount: InventoryDetailEntity.asNumber(row.IADVALOREM)
      },
      production: {
        variableTime: InventoryDetailEntity.asBoolean(row.ITIPOTIEMPO),
        lot: InventoryDetailEntity.asNumber(row.ILOTE),
        timeDays: InventoryDetailEntity.asNumber(row.ITIEMPO),
        capacity: InventoryDetailEntity.asNumber(row.INECPRO),
        assemblyAt: InventoryDetailEntity.normalizeLegacyDate(row.IFECHAENSAMBLE),
        assemblyMode: InventoryDetailEntity.asNumber(row.IENSABLES),
        secondCode: InventoryDetailEntity.asString(row.ISEGUNDAS),
        thirdCode: InventoryDetailEntity.asString(row.ITERCERAS),
        reduceMinimumsWithOrders: InventoryDetailEntity.asBoolean(row.IREBAJAMINIMO),
        unproductiveTimeSams: InventoryDetailEntity.asBoolean(row.INOPRODUCTIVO)
      },
      taxes: {
        salesProfile: InventoryDetailEntity.asString(row.ITMVTS),
        purchasesProfile: InventoryDetailEntity.asString(row.ITMREC),
        iepsPercent: InventoryDetailEntity.asNumber(row.IPORCIEPES),
        retentionIvaPercent: InventoryDetailEntity.asNumber(row.IPORCRETIVA),
        retentionIsrPercent: InventoryDetailEntity.asNumber(row.IPORCRETISR),
        ivaType: InventoryDetailEntity.asIvaType(row.IPORCIVA),
        retentionType: InventoryDetailEntity.asRetentionType(row.IRETIVA),
        dontChargeIvaOnIeps: InventoryDetailEntity.asBoolean(row.INOIVAENIEPS),
        donative: InventoryDetailEntity.asBoolean(row.IDONATIVO)
      },
      others: {
        options: {
          composition: InventoryDetailEntity.asString(row.ICOMPOS),
          virtualStore: InventoryDetailEntity.asBoolean(row.ITVP),
          inactiveForPurchases: InventoryDetailEntity.asBoolean(row.IINACTIVO),
          controlByPieces: InventoryDetailEntity.asBoolean(row.ICONTROLPZAS),
          fractionable: InventoryDetailEntity.asBoolean(row.IFRACCIONABLE),
          lastChangedBy: InventoryDetailEntity.asNumber(row.IUSEQ),
          warehouse: InventoryDetailEntity.asNumber(row.IBODEGA),
          nextReceptionAt: InventoryDetailEntity.normalizeLegacyDate(row.IPROXRECEP),
          transit: InventoryDetailEntity.asNumber(row.ITRANSITO),
          physicalInitial: InventoryDetailEntity.asNumber(row.IFISICOINICIAL),
          lastChangedAt: InventoryDetailEntity.normalizeLegacyDate(row.IFECHACAMBIO),
          list123ChangedAt: InventoryDetailEntity.normalizeLegacyDate(row.IFECHACAMBIOPR),
          unsupplied: InventoryDetailEntity.asNumber(row.IWEBPEDIDOS),
          firstPosSaleAt: InventoryDetailEntity.normalizeLegacyDate(row.IPRIMERVTAPOS),
          countInventory: InventoryDetailEntity.asNumber(row.INVFIS),
          row: InventoryDetailEntity.asString(row.IRENGLON),
          rootCode: InventoryDetailEntity.asString(row.IRAIZ),
          color: InventoryDetailEntity.asString(row.ICOLOREXT || row.ICOLOR)
        },
        prices: {
          commissionPercent: InventoryDetailEntity.asNumber(row.IPORCOMISION),
          iepsPercent: InventoryDetailEntity.asNumber(row.IPORCIEPES),
          fixedIepsPercent: InventoryDetailEntity.asNumber(row.IFIJOIEPS),
          offerFrom: InventoryDetailEntity.normalizeLegacyDate(row.IOFERDESDE),
          offerTo: InventoryDetailEntity.normalizeLegacyDate(row.IOFERHASTA),
          minUntil: InventoryDetailEntity.normalizeLegacyDate(row.IMINIMOHASTA),
          walletPercent: InventoryDetailEntity.asNumber(row.IDESCTOMON),
          lists: [
            { list: 4, price: InventoryDetailEntity.asNumber(row.ILISTA4), currency: InventoryDetailEntity.asNumber(row.IMONEDA4), percent: null },
            { list: 5, price: InventoryDetailEntity.asNumber(row.ILISTA5), currency: InventoryDetailEntity.asNumber(row.IMONEDA5), percent: null },
            { list: 6, price: InventoryDetailEntity.asNumber(row.ILISTA6), currency: InventoryDetailEntity.asNumber(row.IMONEDA6), percent: null },
            { list: 7, price: InventoryDetailEntity.asNumber(row.ILISTA7), currency: InventoryDetailEntity.asNumber(row.IMONEDA7), percent: null },
            { list: 8, price: InventoryDetailEntity.asNumber(row.ILISTA8), currency: InventoryDetailEntity.asNumber(row.IMONEDA8), percent: null },
            { list: 9, price: InventoryDetailEntity.asNumber(row.ILISTA9), currency: InventoryDetailEntity.asNumber(row.IMONEDA9), percent: null },
            { list: 10, price: InventoryDetailEntity.asNumber(row.ILISTA10), currency: InventoryDetailEntity.asNumber(row.IMONEDA10), percent: null },
            { list: 11, price: InventoryDetailEntity.asNumber(row.ILISTA11), currency: InventoryDetailEntity.asNumber(row.IMONEDA11), percent: null },
            { list: 12, price: InventoryDetailEntity.asNumber(row.ILISTA12), currency: InventoryDetailEntity.asNumber(row.IMONEDA12), percent: null },
            { list: 13, price: InventoryDetailEntity.asNumber(row.ILISTA13), currency: InventoryDetailEntity.asNumber(row.IMONEDA13), percent: null },
            { list: 14, price: InventoryDetailEntity.asNumber(row.ILISTA14), currency: InventoryDetailEntity.asNumber(row.IMONEDA14), percent: null },
            { list: 15, price: InventoryDetailEntity.asNumber(row.ILISTA15), currency: InventoryDetailEntity.asNumber(row.IMONEDA15), percent: null },
            { list: 16, price: InventoryDetailEntity.asNumber(row.ILISTA16), currency: InventoryDetailEntity.asNumber(row.IMONEDA16), percent: null },
            { list: 17, price: InventoryDetailEntity.asNumber(row.ILISTA17), currency: InventoryDetailEntity.asNumber(row.IMONEDA17), percent: null },
            { list: 18, price: InventoryDetailEntity.asNumber(row.ILISTA18), currency: InventoryDetailEntity.asNumber(row.IMONEDA18), percent: null }
          ]
        },
        exportData: {
          tariff: InventoryDetailEntity.asString(row.IARANCELEXP),
          factor: InventoryDetailEntity.asNumber(row.IFACTORCCE)
        },
        ccp: {
          materialDangerousType: InventoryDetailEntity.asNumber(row.ICCPMPTIPO),
          hazardousKey: InventoryDetailEntity.asString(row.ICCPMPCLAVE),
          packagingKey: InventoryDetailEntity.asString(row.ICCPMPEMBALAJE)
        },
        vars: {
          values: [
            InventoryDetailEntity.asNumber(row.IVARIOS1),
            InventoryDetailEntity.asNumber(row.IVARIOS2),
            InventoryDetailEntity.asNumber(row.IVARIOS3),
            InventoryDetailEntity.asNumber(row.IVARIOS4),
            InventoryDetailEntity.asNumber(row.IVARIOS5),
            InventoryDetailEntity.asNumber(row.IVARIOS6),
            InventoryDetailEntity.asNumber(row.IVARIOS7),
            InventoryDetailEntity.asNumber(row.IVARIOS8),
            InventoryDetailEntity.asNumber(row.IVARIOS9),
            InventoryDetailEntity.asNumber(row.IVARIOS10),
            InventoryDetailEntity.asNumber(row.IVARIOS11),
            InventoryDetailEntity.asNumber(row.IVARIOS12),
            InventoryDetailEntity.asNumber(row.IVARIOS13),
            InventoryDetailEntity.asNumber(row.IVARIOS14),
            InventoryDetailEntity.asNumber(row.IVARIOS15),
            InventoryDetailEntity.asNumber(row.IVARIOS16),
            InventoryDetailEntity.asNumber(row.IVARIOS17),
            InventoryDetailEntity.asNumber(row.IVARIOS18),
            InventoryDetailEntity.asNumber(row.IVARIOS19),
            InventoryDetailEntity.asNumber(row.IVARIOS20),
            InventoryDetailEntity.asNumber(row.IVARIOS21),
            InventoryDetailEntity.asNumber(row.IVARIOS22)
          ]
        }
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
