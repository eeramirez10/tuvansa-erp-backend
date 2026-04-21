export type InventoryClientSaleLegacyRow = {
  CODIGO: string | null;
  CLIENTE: string | null;
  CANTIDAD: number | string | null;
  IMPORTE: number | string | null;
};

type InventoryClientSaleProps = {
  code: string;
  client: string;
  quantity: number | null;
  amount: number | null;
};

export class InventoryClientSaleEntity {
  public readonly code: string;
  public readonly client: string;
  public readonly quantity: number | null;
  public readonly amount: number | null;

  private constructor(props: InventoryClientSaleProps) {
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

  public static fromLegacyRow(row: InventoryClientSaleLegacyRow): InventoryClientSaleEntity {
    return new InventoryClientSaleEntity({
      code: InventoryClientSaleEntity.asString(row.CODIGO),
      client: InventoryClientSaleEntity.asString(row.CLIENTE),
      quantity: InventoryClientSaleEntity.asNumber(row.CANTIDAD),
      amount: InventoryClientSaleEntity.asNumber(row.IMPORTE)
    });
  }
}
