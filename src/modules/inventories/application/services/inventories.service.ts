import {
  PaginatedResponseDto,
  PaginationDto,
  PaginationQuery
} from "../../../../shared/types/pagination.types";
import { InventoryDetailEntity, InventoryEntity, InventoryWarehouseEntity } from "../../domain/entities";
import {
  IInventoriesRepository,
  InventorySearchBy
} from "../../domain/repositories/inventories.repository.interface";

type GetInventoriesInput = PaginationQuery & {
  q?: string;
  searchBy?: string;
};

type InventoriesMeta = {
  module: "inventories";
  source: "repository";
  search: string | null;
};

export class InventoriesService {
  constructor(private readonly inventoriesRepository: IInventoriesRepository) {}

  private normalizeSearch(raw?: string): string | undefined {
    const normalized = raw?.trim();
    return normalized ? normalized : undefined;
  }

  private normalizeSearchBy(raw?: string): InventorySearchBy {
    if (raw === "code" || raw === "description" || raw === "auto") {
      return raw;
    }

    return "auto";
  }

  public async getInventories(
    input: GetInventoriesInput
  ): Promise<PaginatedResponseDto<InventoryEntity, InventoriesMeta>> {
    const pagination = PaginationDto.fromQuery(input, {
      defaultLimit: 50,
      maxLimit: 200
    });

    const search = this.normalizeSearch(input.q);
    const searchBy = this.normalizeSearchBy(input.searchBy);

    const [inventories, total] = await Promise.all([
      this.inventoriesRepository.findAll({
        search,
        searchBy,
        limit: pagination.limit,
        offset: pagination.offset
      }),
      this.inventoriesRepository.countAll(search, searchBy)
    ]);

    return new PaginatedResponseDto<InventoryEntity, InventoriesMeta>(
      inventories,
      pagination,
      total,
      {
        module: "inventories",
        source: "repository",
        search: search ?? null
      }
    );
  }

  public async getInventoryByCode(code: string): Promise<InventoryDetailEntity | null> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return null;
    }

    return this.inventoriesRepository.findByCode(normalizedCode);
  }

  public async getNextInventoryByCode(code: string): Promise<InventoryDetailEntity | null> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return null;
    }

    const nextCode = await this.inventoriesRepository.findNextCode(normalizedCode);

    if (!nextCode) {
      return null;
    }

    return this.inventoriesRepository.findByCode(nextCode);
  }

  public async getPreviousInventoryByCode(code: string): Promise<InventoryDetailEntity | null> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return null;
    }

    const previousCode = await this.inventoriesRepository.findPreviousCode(normalizedCode);

    if (!previousCode) {
      return null;
    }

    return this.inventoriesRepository.findByCode(previousCode);
  }

  public async getInventoryWarehousesByCode(code: string): Promise<InventoryWarehouseEntity[]> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return [];
    }

    return this.inventoriesRepository.findWarehousesByCode(normalizedCode);
  }
}
