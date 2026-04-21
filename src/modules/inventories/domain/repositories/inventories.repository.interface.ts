import { InventoryDetailEntity, InventoryEntity, InventoryWarehouseEntity } from "../entities";

export type InventorySearchBy = "auto" | "code" | "description";

export type FindInventoriesParams = {
  search?: string;
  searchBy?: InventorySearchBy;
  limit: number;
  offset: number;
};

export interface IInventoriesRepository {
  findAll(params: FindInventoriesParams): Promise<InventoryEntity[]>;
  countAll(search?: string, searchBy?: InventorySearchBy): Promise<number>;
  findByCode(code: string): Promise<InventoryDetailEntity | null>;
  findWarehousesByCode(code: string): Promise<InventoryWarehouseEntity[]>;
  findNextCode(currentCode: string): Promise<string | null>;
  findPreviousCode(currentCode: string): Promise<string | null>;
}
