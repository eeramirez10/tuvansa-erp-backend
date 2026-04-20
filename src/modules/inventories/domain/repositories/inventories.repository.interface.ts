import { InventoryDetailEntity, InventoryEntity } from "../entities";

export type FindInventoriesParams = {
  search?: string;
  limit: number;
  offset: number;
};

export interface IInventoriesRepository {
  findAll(params: FindInventoriesParams): Promise<InventoryEntity[]>;
  countAll(search?: string): Promise<number>;
  findByCode(code: string): Promise<InventoryDetailEntity | null>;
  findNextCode(currentCode: string): Promise<string | null>;
  findPreviousCode(currentCode: string): Promise<string | null>;
}
