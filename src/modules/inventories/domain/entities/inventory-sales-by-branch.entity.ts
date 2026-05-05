export type InventorySalesByBranchLegacyRow = {
  SUCURSAL: string | null;
  CODIGO: string | null;
  CLIENTE: string | null;
  CANTIDAD: number | string | null;
  IMPORTE: number | string | null;
};

type InventorySalesByBranchProps = {
  branch: string;
  code: string;
  client: string;
  quantity: number | null;
  amount: number | null;
};

export class InventorySalesByBranchEntity {
  public readonly branch: string;
  public readonly code: string;
  public readonly client: string;
  public readonly quantity: number | null;
  public readonly amount: number | null;

  private constructor(props: InventorySalesByBranchProps) {
    this.branch = props.branch;
    this.code = props.code;
    this.client = props.client;
    this.quantity = props.quantity;
    this.amount = props.amount;
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

  public static fromLegacyRow(row: InventorySalesByBranchLegacyRow): InventorySalesByBranchEntity {
    return new InventorySalesByBranchEntity({
      branch: InventorySalesByBranchEntity.asString(row.SUCURSAL),
      code: InventorySalesByBranchEntity.asString(row.CODIGO),
      client: InventorySalesByBranchEntity.asString(row.CLIENTE),
      quantity: InventorySalesByBranchEntity.asNumber(row.CANTIDAD),
      amount: InventorySalesByBranchEntity.asNumber(row.IMPORTE)
    });
  }
}
