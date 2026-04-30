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

type GetInventoryAuxiliarQuery = {
  alm?: string;
  dest?: string;
  multicia?: string;
};

type GetInventorySalesBreakdownQuery = {
  dest?: string;
  multicia?: string;
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
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventoryAuxiliarQuery;
    }>,
    reply: FastifyReply
  ) => {
    const destinationParsed =
      request.query.dest === undefined ? undefined : Number(request.query.dest);
    const multiCompanyParsed =
      request.query.multicia === undefined ? undefined : Number(request.query.multicia);

    const destination = Number.isFinite(destinationParsed) ? destinationParsed : undefined;
    const multiCompany = Number.isFinite(multiCompanyParsed) ? multiCompanyParsed : undefined;

    const auxiliar = await this.inventoriesService.getInventoryAuxiliarByCode(
      request.params.code,
      request.query.alm,
      destination,
      multiCompany
    );

    return reply.send({
      data: auxiliar.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: auxiliar.rows.length,
        warehouse: request.query.alm ?? null,
        destination: destination ?? null,
        multiCompany: multiCompany ?? null,
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

  public getInventoryClientSalesByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const sales = await this.inventoriesService.getInventoryClientSalesByCode(request.params.code);

    return reply.send({
      data: sales.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: sales.rows.length,
        totalQuantity: sales.totalQuantity,
        totalAmount: sales.totalAmount
      }
    });
  };

  public getInventorySalesBreakdownByCode = async (
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventorySalesBreakdownQuery;
    }>,
    reply: FastifyReply
  ) => {
    const destinationParsed =
      request.query.dest === undefined ? undefined : Number(request.query.dest);
    const multiCompanyParsed =
      request.query.multicia === undefined ? undefined : Number(request.query.multicia);

    const destination = Number.isFinite(destinationParsed) ? destinationParsed : undefined;
    const multiCompany = Number.isFinite(multiCompanyParsed) ? multiCompanyParsed : undefined;

    const breakdown = await this.inventoriesService.getInventorySalesBreakdownByCode(
      request.params.code,
      destination,
      multiCompany
    );

    return reply.send({
      data: breakdown.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: breakdown.rows.length,
        totalQuantity: breakdown.totalQuantity,
        totalPrice: breakdown.totalPrice,
        destination: destination ?? null,
        multiCompany: multiCompany ?? null
      }
    });
  };
}
