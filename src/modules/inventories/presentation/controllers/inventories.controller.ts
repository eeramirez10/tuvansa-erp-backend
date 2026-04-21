import { FastifyReply, FastifyRequest } from "fastify";
import { PaginationQuery } from "../../../../shared/types/pagination.types";
import { InventoriesService } from "../../application/services/inventories.service";

type GetInventoriesQuery = PaginationQuery & {
  q?: string;
  searchBy?: "auto" | "code" | "description";
};

type GetInventoryByCodeParams = {
  code: string;
};

export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  public getInventories = async (
    request: FastifyRequest<{ Querystring: GetInventoriesQuery }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventories(request.query);
    return reply.send(response);
  };

  public getInventoryByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const inventory = await this.inventoriesService.getInventoryByCode(request.params.code);

    if (!inventory) {
      return reply.status(404).send({
        error: {
          message: `Inventory not found for code "${request.params.code}"`,
          statusCode: 404
        }
      });
    }

    return reply.send({
      data: inventory,
      meta: {
        module: "inventories",
        source: "repository"
      }
    });
  };

  public getNextInventoryByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const inventory = await this.inventoriesService.getNextInventoryByCode(request.params.code);

    if (!inventory) {
      return reply.status(404).send({
        error: {
          message: `Next inventory not found for code "${request.params.code}"`,
          statusCode: 404
        }
      });
    }

    return reply.send({
      data: inventory,
      meta: {
        module: "inventories",
        source: "repository"
      }
    });
  };

  public getPreviousInventoryByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const inventory = await this.inventoriesService.getPreviousInventoryByCode(request.params.code);

    if (!inventory) {
      return reply.status(404).send({
        error: {
          message: `Previous inventory not found for code "${request.params.code}"`,
          statusCode: 404
        }
      });
    }

    return reply.send({
      data: inventory,
      meta: {
        module: "inventories",
        source: "repository"
      }
    });
  };

  public getInventoryWarehousesByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const warehouses = await this.inventoriesService.getInventoryWarehousesByCode(request.params.code);

    return reply.send({
      data: warehouses,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: warehouses.length
      }
    });
  };

  public getInventoryAuxiliarByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const auxiliar = await this.inventoriesService.getInventoryAuxiliarByCode(request.params.code);

    return reply.send({
      data: auxiliar.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: auxiliar.rows.length,
        stockPrevious: auxiliar.stockPrevious
      }
    });
  };

  public getInventoryClientOrdersByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const orders = await this.inventoriesService.getInventoryClientOrdersByCode(request.params.code);

    return reply.send({
      data: orders,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: orders.length
      }
    });
  };
}
