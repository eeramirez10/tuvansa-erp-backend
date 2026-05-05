export type InventoryClassificationSelectedLegacyRow = {
  IFAM1: string | null;
  IFAM2: string | null;
  IFAM3: string | null;
  IFAM4: string | null;
  IFAM5: string | null;
  IFAM6: string | null;
  IFAM7: string | null;
  IFAM8: string | null;
  IFAM9: string | null;
  IFAML: string | null;
  IFAMM: string | null;
  IFAMN: string | null;
  IFAMO: string | null;
  IFAMP: string | null;
  IFAMQ: string | null;
  IFAMR: string | null;

  DESCR1: string | null;
  DESCR2: string | null;
  DESCR3: string | null;
  DESCR4: string | null;
  DESCR5: string | null;
  DESCR6: string | null;
  DESCR7: string | null;
  DESCR8: string | null;
  DESCR9: string | null;
  DESCRL: string | null;
  DESCRM: string | null;
  DESCRN: string | null;
  DESCRO: string | null;
  DESCRP: string | null;
  DESCRQ: string | null;
  DESCRR: string | null;
};

type InventoryClassificationSelectedProps = {
  supplier: { code: string; description: string };
  product: { code: string; description: string };
  type: { code: string; description: string };
  material: { code: string; description: string };
  ends: { code: string; description: string };
  pressureClass: { code: string; description: string };
  cedula: { code: string; description: string };
  measure: { code: string; description: string };
  others: { code: string; description: string };
  origin: { code: string; description: string };
  sativ: { code: string; description: string };
  coating: { code: string; description: string };
  branch: { code: string; description: string };
  brand: { code: string; description: string };
  inv: { code: string; description: string };
  family: { code: string; description: string };
};

export class InventoryClassificationSelectedEntity {
  public readonly supplier: { code: string; description: string };
  public readonly product: { code: string; description: string };
  public readonly type: { code: string; description: string };
  public readonly material: { code: string; description: string };
  public readonly ends: { code: string; description: string };
  public readonly pressureClass: { code: string; description: string };
  public readonly cedula: { code: string; description: string };
  public readonly measure: { code: string; description: string };
  public readonly others: { code: string; description: string };
  public readonly origin: { code: string; description: string };
  public readonly sativ: { code: string; description: string };
  public readonly coating: { code: string; description: string };
  public readonly branch: { code: string; description: string };
  public readonly brand: { code: string; description: string };
  public readonly inv: { code: string; description: string };
  public readonly family: { code: string; description: string };

  private constructor(props: InventoryClassificationSelectedProps) {
    this.supplier = props.supplier;
    this.product = props.product;
    this.type = props.type;
    this.material = props.material;
    this.ends = props.ends;
    this.pressureClass = props.pressureClass;
    this.cedula = props.cedula;
    this.measure = props.measure;
    this.others = props.others;
    this.origin = props.origin;
    this.sativ = props.sativ;
    this.coating = props.coating;
    this.branch = props.branch;
    this.brand = props.brand;
    this.inv = props.inv;
    this.family = props.family;
  }

  private static asString(value: string | null | undefined): string {
    return value === null || value === undefined ? "" : String(value).trim();
  }

  public static fromLegacyRow(
    row: InventoryClassificationSelectedLegacyRow
  ): InventoryClassificationSelectedEntity {
    return new InventoryClassificationSelectedEntity({
      supplier: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM1),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR1),
      },
      product: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM2),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR2),
      },
      type: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM3),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR3),
      },
      material: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM4),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR4),
      },
      ends: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM5),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR5),
      },
      pressureClass: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM6),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR6),
      },
      cedula: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM7),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR7),
      },
      measure: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM8),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR8),
      },
      others: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAM9),
        description: InventoryClassificationSelectedEntity.asString(row.DESCR9),
      },
      origin: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAML),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRL),
      },
      sativ: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMM),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRM),
      },
      coating: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMN),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRN),
      },
      branch: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMO),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRO),
      },
      brand: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMP),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRP),
      },
      inv: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMQ),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRQ),
      },
      family: {
        code: InventoryClassificationSelectedEntity.asString(row.IFAMR),
        description: InventoryClassificationSelectedEntity.asString(row.DESCRR),
      },
    });
  }
}

