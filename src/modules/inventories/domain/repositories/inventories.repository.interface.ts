import {
  InventoryAuxiliarEntity,
  InventoryClientSaleEntity,
  InventoryClientOrderEntity,
  InventorySalesBreakdownEntity,
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
  findSalesBreakdownByCode(input: {
    code: string;
    destination?: number;
    multiCompany?: number;
  }): Promise<InventorySalesBreakdownEntity[]>;
  findClientOrdersByCode(code: string): Promise<InventoryClientOrderEntity[]>;
  findNextCode(currentCode: string): Promise<string | null>;
  findPreviousCode(currentCode: string): Promise<string | null>;
}
