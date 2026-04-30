import {
  PaginatedResponseDto,
  PaginationDto,
  PaginationQuery
} from "../../../../shared/types/pagination.types";
import {
  InventoryAuxiliarEntity,
  InventoryClientSaleEntity,
  InventoryClientOrderEntity,
  InventorySalesBreakdownEntity,
  InventoryDetailEntity,
  InventoryEntity,
  InventoryWarehouseEntity
} from "../../domain/entities";
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

  public async getInventoryAuxiliarByCode(
    code: string,
    warehouse?: string,
    destination?: number,
    multiCompany?: number
  ): Promise<{ rows: InventoryAuxiliarEntity[]; stockPrevious: number }> {
    const normalizedCode = code.trim();
    const normalizedWarehouse = warehouse?.trim();

    if (!normalizedCode) {
      return {
        rows: [],
        stockPrevious: 0
      };
    }

    let effectiveDestination: number | undefined = destination ?? 0;
    let effectiveMultiCompany: number | undefined = multiCompany ?? 1;

    let rows = await this.inventoriesRepository.findAuxiliarByCode({
      code: normalizedCode,
      warehouse: normalizedWarehouse,
      destination: effectiveDestination,
      multiCompany: effectiveMultiCompany
    });

    if (!rows.length) {
      rows = await this.inventoriesRepository.findAuxiliarByCode({
        code: normalizedCode,
        warehouse: normalizedWarehouse
      });
      effectiveDestination = undefined;
      effectiveMultiCompany = undefined;
    }

    if (normalizedWarehouse) {
      const [warehouseQuantity, auxiliarMovementTotal] = await Promise.all([
        this.inventoriesRepository.findWarehouseQuantityByCode(normalizedCode, normalizedWarehouse),
        this.inventoriesRepository.sumAuxiliarQuantityByCode(
          normalizedCode,
          normalizedWarehouse,
          effectiveDestination,
          effectiveMultiCompany
        )
      ]);

      if (warehouseQuantity !== null && Number.isFinite(warehouseQuantity)) {
        return {
          rows,
          stockPrevious: warehouseQuantity - auxiliarMovementTotal
        };
      }
    }

    const detail = await this.inventoriesRepository.findByCode(normalizedCode);

    const stockPreviousFromInventory = detail?.accumulators.stockPrevious ?? null;
    if (stockPreviousFromInventory !== null && Number.isFinite(stockPreviousFromInventory)) {
      return {
        rows,
        stockPrevious: stockPreviousFromInventory
      };
    }

    const firstRow = rows[0];

    if (!firstRow) {
      return {
        rows,
        stockPrevious: 0
      };
    }

    const stock = firstRow.stock ?? 0;
    const entries = firstRow.entries ?? 0;
    const exits = firstRow.exits ?? 0;
    const stockPrevious = stock - entries + exits;

    return {
      rows,
      stockPrevious
    };
  }

  public async getInventoryClientOrdersByCode(code: string): Promise<InventoryClientOrderEntity[]> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return [];
    }

    return this.inventoriesRepository.findClientOrdersByCode(normalizedCode);
  }

  public async getInventoryClientSalesByCode(
    code: string
  ): Promise<{ rows: InventoryClientSaleEntity[]; totalQuantity: number; totalAmount: number }> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return {
        rows: [],
        totalQuantity: 0,
        totalAmount: 0
      };
    }

    const rows = await this.inventoriesRepository.findClientSalesByCode(normalizedCode);
    const totalQuantity = rows.reduce((acc, row) => acc + (row.quantity ?? 0), 0);
    const totalAmount = rows.reduce((acc, row) => acc + (row.amount ?? 0), 0);

    return {
      rows,
      totalQuantity,
      totalAmount
    };
  }

  public async getInventorySalesBreakdownByCode(
    code: string,
    destination?: number,
    multiCompany?: number
  ): Promise<{ rows: InventorySalesBreakdownEntity[]; totalQuantity: number; totalPrice: number }> {
    const normalizedCode = code.trim();

    if (!normalizedCode) {
      return {
        rows: [],
        totalQuantity: 0,
        totalPrice: 0
      };
    }

    const rows = await this.inventoriesRepository.findSalesBreakdownByCode({
      code: normalizedCode,
      destination,
      multiCompany
    });
    const totalQuantity = rows.reduce((acc, row) => acc + (row.quantity ?? 0), 0);
    const totalPrice = rows.reduce((acc, row) => acc + (row.price ?? 0), 0);

    return {
      rows,
      totalQuantity,
      totalPrice
    };
  }
}
