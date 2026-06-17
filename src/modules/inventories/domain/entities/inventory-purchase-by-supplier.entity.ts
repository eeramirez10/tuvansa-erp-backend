export type InventoryPurchaseBySupplierLegacyRow = {
  CODIGO: string | null;
  PROVEEDOR: string | null;
  CANTIDAD: number | string | null;
  IMPORTE: number | string | null;
};

type InventoryPurchaseBySupplierProps = {
  code: string;
  supplier: string;
  quantity: number | null;
  amount: number | null;
};

export class InventoryPurchaseBySupplierEntity {
  public readonly code: string;
  public readonly supplier: string;
  public readonly quantity: number | null;
  public readonly amount: number | null;

  private constructor(props: InventoryPurchaseBySupplierProps) {
    this.code = props.code;
    this.supplier = props.supplier;
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

  public static fromLegacyRow(
    row: InventoryPurchaseBySupplierLegacyRow
  ): InventoryPurchaseBySupplierEntity {
    return new InventoryPurchaseBySupplierEntity({
      code: InventoryPurchaseBySupplierEntity.asString(row.CODIGO),
      supplier: InventoryPurchaseBySupplierEntity.asString(row.PROVEEDOR),
      quantity: InventoryPurchaseBySupplierEntity.asNumber(row.CANTIDAD),
      amount: InventoryPurchaseBySupplierEntity.asNumber(row.IMPORTE)
    });
  }
}
