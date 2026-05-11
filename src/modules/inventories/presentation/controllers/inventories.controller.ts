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

type GetInventoryDocumentDetailParams = {
  code: string;
  dseq: string;
};

type GetInventoryDocumentDetailQuery = {
  tm?: string;
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

type GetInventoryPurchasesBreakdownQuery = {
  dest?: string;
  multicia?: string;
};

type GetInventoryQuotedSuppliersQuery = {
  pending?: string;
};

type GetInventoryDocumentsSearchQuery = {
  code?: string;
  tipmv?: string;
  document?: string;
  date?: string;
  ref?: string;
  ref2?: string;
  warehouse?: string;
  provider?: string;
  client?: string;
  limit?: string;
};

type GetInventoryDocumentDetailGlobalParams = {
  dseq: string;
};

type GetInventoryClientOrdersQuery = {
  kind?: "orders" | "quotes";
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
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventoryClientOrdersQuery;
    }>,
    reply: FastifyReply
  ) => {
    const kind = request.query.kind === "quotes" ? "quotes" : "orders";
    const orders = await this.inventoriesService.getInventoryClientOrdersByCode(
      request.params.code,
      kind
    );

    return reply.send({
      data: orders,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: orders.length,
        kind
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

  public getInventoryClassificationByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const classification = await this.inventoriesService.getInventoryClassificationByCode(
      request.params.code
    );

    return reply.send({
      data: classification,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code
      }
    });
  };

  public getInventoryLotesByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const lotes = await this.inventoriesService.getInventoryLotesByCode(request.params.code);

    return reply.send({
      data: lotes,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: lotes.length
      }
    });
  };

  public getInventoryUepsPepsByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const rows = await this.inventoriesService.getInventoryUepsPepsByCode(request.params.code);

    return reply.send({
      data: rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: rows.length
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

  public getInventorySalesByBranchByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventorySalesByBranchByCode(
      request.params.code
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        totalQuantity: response.totalQuantity,
        totalAmount: response.totalAmount
      }
    });
  };

  public getInventoryAnnualSalesByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventoryAnnualSalesByCode(
      request.params.code
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        totals: response.totals
      }
    });
  };

  public getInventoryOrderedSuppliersByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventoryOrderedSuppliersByCode(
      request.params.code
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        stock: response.stock,
        pending: response.pending,
        total: response.total
      }
    });
  };

  public getInventoryPurchasesBySupplierByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventoryPurchasesBySupplierByCode(
      request.params.code
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        totalQuantity: response.totalQuantity,
        totalAmount: response.totalAmount
      }
    });
  };

  public getInventoryQuotedSuppliersByCode = async (
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventoryQuotedSuppliersQuery;
    }>,
    reply: FastifyReply
  ) => {
    const pendingRaw = request.query.pending?.trim();
    const pendingOnly = pendingRaw === "1" || pendingRaw?.toLowerCase() === "true";

    const response = await this.inventoriesService.getInventoryQuotedSuppliersByCode(
      request.params.code,
      pendingOnly
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        stock: response.stock,
        pending: response.pending,
        total: response.total,
        pendingOnly
      }
    });
  };

  public getInventoryDocumentsSearchByCode = async (
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventoryDocumentsSearchQuery;
    }>,
    reply: FastifyReply
  ) => {
    const parsedLimit = request.query.limit === undefined ? undefined : Number(request.query.limit);
    const limit = Number.isFinite(parsedLimit) ? parsedLimit : undefined;

    const rows = await this.inventoriesService.getInventoryDocumentsSearchByCode({
      code: request.params.code,
      tipmv: request.query.tipmv,
      document: request.query.document,
      date: request.query.date,
      ref: request.query.ref,
      ref2: request.query.ref2,
      warehouse: request.query.warehouse,
      provider: request.query.provider,
      client: request.query.client,
      limit
    });

    return reply.send({
      data: rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: rows.length
      }
    });
  };

  public getInventoryDocumentsSearch = async (
    request: FastifyRequest<{
      Querystring: GetInventoryDocumentsSearchQuery;
    }>,
    reply: FastifyReply
  ) => {
    const parsedLimit = request.query.limit === undefined ? undefined : Number(request.query.limit);
    const limit = Number.isFinite(parsedLimit) ? parsedLimit : undefined;

    const rows = await this.inventoriesService.getInventoryDocumentsSearchByCode({
      code: request.query.code,
      tipmv: request.query.tipmv,
      document: request.query.document,
      date: request.query.date,
      ref: request.query.ref,
      ref2: request.query.ref2,
      warehouse: request.query.warehouse,
      provider: request.query.provider,
      client: request.query.client,
      limit
    });

    return reply.send({
      data: rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.query.code ?? null,
        count: rows.length
      }
    });
  };

  public getInventoryDocumentDetailByDseq = async (
    request: FastifyRequest<{
      Params: GetInventoryDocumentDetailParams;
      Querystring: GetInventoryDocumentDetailQuery;
    }>,
    reply: FastifyReply
  ) => {
    const parsedDseq = Number(request.params.dseq);
    const dseq = Number.isFinite(parsedDseq) ? Math.trunc(parsedDseq) : NaN;

    if (!Number.isFinite(dseq) || dseq <= 0) {
      return reply.status(400).send({
        error: {
          message: "Invalid dseq parameter",
          statusCode: 400
        }
      });
    }

    const response = await this.inventoriesService.getInventoryDocumentDetailByDseq({
      dseq,
      tm: request.query.tm
    });

    return reply.send({
      data: response,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        dseq,
        tm: request.query.tm ?? null,
        count: response.lines.length
      }
    });
  };

  public getInventoryDocumentDetailByDseqGlobal = async (
    request: FastifyRequest<{
      Params: GetInventoryDocumentDetailGlobalParams;
      Querystring: GetInventoryDocumentDetailQuery;
    }>,
    reply: FastifyReply
  ) => {
    const parsedDseq = Number(request.params.dseq);
    const dseq = Number.isFinite(parsedDseq) ? Math.trunc(parsedDseq) : NaN;

    if (!Number.isFinite(dseq) || dseq <= 0) {
      return reply.status(400).send({
        error: {
          message: "Invalid dseq parameter",
          statusCode: 400
        }
      });
    }

    const response = await this.inventoriesService.getInventoryDocumentDetailByDseq({
      dseq,
      tm: request.query.tm
    });

    return reply.send({
      data: response,
      meta: {
        module: "inventories",
        source: "repository",
        dseq,
        tm: request.query.tm ?? null,
        count: response.lines.length
      }
    });
  };

  public getInventoryPurchasesBreakdownByCode = async (
    request: FastifyRequest<{
      Params: GetInventoryByCodeParams;
      Querystring: GetInventoryPurchasesBreakdownQuery;
    }>,
    reply: FastifyReply
  ) => {
    const destinationParsed =
      request.query.dest === undefined ? undefined : Number(request.query.dest);
    const multiCompanyParsed =
      request.query.multicia === undefined ? undefined : Number(request.query.multicia);

    const destination = Number.isFinite(destinationParsed) ? destinationParsed : undefined;
    const multiCompany = Number.isFinite(multiCompanyParsed) ? multiCompanyParsed : undefined;

    const response = await this.inventoriesService.getInventoryPurchasesBreakdownByCode(
      request.params.code,
      destination,
      multiCompany
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        destination: destination ?? null,
        multiCompany: multiCompany ?? null
      }
    });
  };

  public getInventoryAnnualPurchasesByCode = async (
    request: FastifyRequest<{ Params: GetInventoryByCodeParams }>,
    reply: FastifyReply
  ) => {
    const response = await this.inventoriesService.getInventoryAnnualPurchasesByCode(
      request.params.code
    );

    return reply.send({
      data: response.rows,
      meta: {
        module: "inventories",
        source: "repository",
        code: request.params.code,
        count: response.rows.length,
        totals: response.totals
      }
    });
  };
}
