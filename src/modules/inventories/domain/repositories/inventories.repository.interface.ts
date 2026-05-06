import {
  InventoryAuxiliarEntity,
  InventoryClassificationOptionEntity,
  InventoryClassificationSelectedEntity,
  InventoryClientSaleEntity,
  InventoryClientOrderEntity,
  InventorySalesBreakdownEntity,
  InventorySalesByBranchEntity,
  InventoryAnnualSaleEntity,
  InventoryPurchaseBySupplierEntity,
  InventoryPurchaseBreakdownEntity,
  InventoryOrderedSupplierEntity,
  InventoryAnnualPurchaseEntity,
  InventoryDetailEntity,
  InventoryEntity,
  InventoryWarehouseEntity
} from "../entities";

export type InventorySearchBy = "auto" | "code" | "description";

export type FindInventoriesParams = {
  search?: string;
  searchBy?: InventorySearchBy;
  limit: number;
  offset: number;
};

export type FindInventoryAuxiliarParams = {
  code: string;
  warehouse?: string;
  destination?: number;
  multiCompany?: number;
};

export type InventoryClientOrderKind = "orders" | "quotes";

export interface IInventoriesRepository {
  findAll(params: FindInventoriesParams): Promise<InventoryEntity[]>;
  countAll(search?: string, searchBy?: InventorySearchBy): Promise<number>;
  findByCode(code: string): Promise<InventoryDetailEntity | null>;
  findWarehousesByCode(code: string): Promise<InventoryWarehouseEntity[]>;
  findAuxiliarByCode(params: FindInventoryAuxiliarParams): Promise<InventoryAuxiliarEntity[]>;
  sumAuxiliarQuantityByCode(
    code: string,
    warehouse: string,
    destination?: number,
    multiCompany?: number
  ): Promise<number>;
  findWarehouseQuantityByCode(code: string, warehouse: string): Promise<number | null>;
  findClientSalesByCode(code: string): Promise<InventoryClientSaleEntity[]>;
  findClassificationOptions(): Promise<InventoryClassificationOptionEntity[]>;
  findClassificationSelectedByCode(code: string): Promise<InventoryClassificationSelectedEntity | null>;
  findSalesBreakdownByCode(input: {
    code: string;
    destination?: number;
    multiCompany?: number;
  }): Promise<InventorySalesBreakdownEntity[]>;
  findSalesByBranchByCode(code: string): Promise<InventorySalesByBranchEntity[]>;
  findAnnualSalesByCode(code: string): Promise<InventoryAnnualSaleEntity[]>;
  findPurchasesBySupplierByCode(code: string): Promise<InventoryPurchaseBySupplierEntity[]>;
  findPurchasesBreakdownByCode(input: {
    code: string;
    destination?: number;
    multiCompany?: number;
  }): Promise<InventoryPurchaseBreakdownEntity[]>;
  findOrderedSuppliersByCode(code: string): Promise<InventoryOrderedSupplierEntity[]>;
  findAnnualPurchasesByCode(code: string): Promise<InventoryAnnualPurchaseEntity[]>;
  findClientOrdersByCode(
    code: string,
    kind: InventoryClientOrderKind
  ): Promise<InventoryClientOrderEntity[]>;
  findNextCode(currentCode: string): Promise<string | null>;
  findPreviousCode(currentCode: string): Promise<string | null>;
}
