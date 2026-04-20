export type InventoryWarehouseLegacyRow = {
  CD: number | string | null;
  ALM: string;
  DESCRIPCION: string | null;
  CANT: number | string;
  MINIMO: number | string;
  MAXIMO: number | string;
  VEOL: number | string;
  MIN_TDA: number | string;
  VTA_6S: number | string;
  PEDIDO: number | string;
  ASIGNADO: number | string;
  FISICO: number | string;
  I_CONTEO: number | string;
  DE_TDS: number | string;
  A: string | null;
  TRANSITO: number | string;
  ALTA: string | Date;
  ULT_VTA: string | Date;
  ORD_PRV: number | string;
  LOCALIZACION: string | null;
  VTA_ACUM: number | string;
  S1: number | string;
  S2: number | string;
  S3: number | string;
  S4: number | string;
  S5: number | string;
  S6: number | string;
  PRECIO: number | string;
  TOT_RECS: number | string;
  CURVA: number | string;
};

type InventoryWarehouseProps = {
  cd: number | null;
  warehouse: string;
  description: string;
  quantity: number | null;
  minimum: number | null;
  maximum: number | null;
  veol: number | null;
  minimumStore: number | null;
  sales6: number | null;
  order: number | null;
  assigned: number | null;
  physical: number | null;
  countInventory: number | null;
  allStores: number | null;
  status: string;
  transit: number | null;
  createdAt: string | null;
  lastSaleAt: string | null;
  providerOrder: number | null;
  location: string;
  accumulatedSales: number | null;
  s1: number | null;
  s2: number | null;
  s3: number | null;
  s4: number | null;
  s5: number | null;
  s6: number | null;
  price: number | null;
  totalReceipts: number | null;
  curve: number | null;
};

export class InventoryWarehouseEntity {
  public readonly cd: number | null;
  public readonly warehouse: string;
  public readonly description: string;
  public readonly quantity: number | null;
  public readonly minimum: number | null;
  public readonly maximum: number | null;
  public readonly veol: number | null;
  public readonly minimumStore: number | null;
  public readonly sales6: number | null;
  public readonly order: number | null;
  public readonly assigned: number | null;
  public readonly physical: number | null;
  public readonly countInventory: number | null;
  public readonly allStores: number | null;
  public readonly status: string;
  public readonly transit: number | null;
  public readonly createdAt: string | null;
  public readonly lastSaleAt: string | null;
  public readonly providerOrder: number | null;
  public readonly location: string;
  public readonly accumulatedSales: number | null;
  public readonly s1: number | null;
  public readonly s2: number | null;
  public readonly s3: number | null;
  public readonly s4: number | null;
  public readonly s5: number | null;
  public readonly s6: number | null;
  public readonly price: number | null;
  public readonly totalReceipts: number | null;
  public readonly curve: number | null;

  private constructor(props: InventoryWarehouseProps) {
    this.cd = props.cd;
    this.warehouse = props.warehouse;
    this.description = props.description;
    this.quantity = props.quantity;
    this.minimum = props.minimum;
    this.maximum = props.maximum;
    this.veol = props.veol;
    this.minimumStore = props.minimumStore;
    this.sales6 = props.sales6;
    this.order = props.order;
    this.assigned = props.assigned;
    this.physical = props.physical;
    this.countInventory = props.countInventory;
    this.allStores = props.allStores;
    this.status = props.status;
    this.transit = props.transit;
    this.createdAt = props.createdAt;
    this.lastSaleAt = props.lastSaleAt;
    this.providerOrder = props.providerOrder;
    this.location = props.location;
    this.accumulatedSales = props.accumulatedSales;
    this.s1 = props.s1;
    this.s2 = props.s2;
    this.s3 = props.s3;
    this.s4 = props.s4;
    this.s5 = props.s5;
    this.s6 = props.s6;
    this.price = props.price;
    this.totalReceipts = props.totalReceipts;
    this.curve = props.curve;
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

  public static fromLegacyRow(row: InventoryWarehouseLegacyRow): InventoryWarehouseEntity {
    return new InventoryWarehouseEntity({
      cd: InventoryWarehouseEntity.asNumber(row.CD),
      warehouse: InventoryWarehouseEntity.asString(row.ALM),
      description: InventoryWarehouseEntity.asString(row.DESCRIPCION),
      quantity: InventoryWarehouseEntity.asNumber(row.CANT),
      minimum: InventoryWarehouseEntity.asNumber(row.MINIMO),
      maximum: InventoryWarehouseEntity.asNumber(row.MAXIMO),
      veol: InventoryWarehouseEntity.asNumber(row.VEOL),
      minimumStore: InventoryWarehouseEntity.asNumber(row.MIN_TDA),
      sales6: InventoryWarehouseEntity.asNumber(row.VTA_6S),
      order: InventoryWarehouseEntity.asNumber(row.PEDIDO),
      assigned: InventoryWarehouseEntity.asNumber(row.ASIGNADO),
      physical: InventoryWarehouseEntity.asNumber(row.FISICO),
      countInventory: InventoryWarehouseEntity.asNumber(row.I_CONTEO),
      allStores: InventoryWarehouseEntity.asNumber(row.DE_TDS),
      status: InventoryWarehouseEntity.asString(row.A),
      transit: InventoryWarehouseEntity.asNumber(row.TRANSITO),
      createdAt: InventoryWarehouseEntity.normalizeLegacyDate(row.ALTA),
      lastSaleAt: InventoryWarehouseEntity.normalizeLegacyDate(row.ULT_VTA),
      providerOrder: InventoryWarehouseEntity.asNumber(row.ORD_PRV),
      location: InventoryWarehouseEntity.asString(row.LOCALIZACION),
      accumulatedSales: InventoryWarehouseEntity.asNumber(row.VTA_ACUM),
      s1: InventoryWarehouseEntity.asNumber(row.S1),
      s2: InventoryWarehouseEntity.asNumber(row.S2),
      s3: InventoryWarehouseEntity.asNumber(row.S3),
      s4: InventoryWarehouseEntity.asNumber(row.S4),
      s5: InventoryWarehouseEntity.asNumber(row.S5),
      s6: InventoryWarehouseEntity.asNumber(row.S6),
      price: InventoryWarehouseEntity.asNumber(row.PRECIO),
      totalReceipts: InventoryWarehouseEntity.asNumber(row.TOT_RECS),
      curve: InventoryWarehouseEntity.asNumber(row.CURVA)
    });
  }
}
