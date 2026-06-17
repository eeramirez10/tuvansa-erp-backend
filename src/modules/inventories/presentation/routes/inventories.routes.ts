import { FastifyInstance } from "fastify";
import { InventoriesController } from "../controllers/inventories.controller";
import { InventoriesService } from "../../application/services/inventories.service";
import { ProscaiInventoriesRepository } from "../../infrastructure/repositories/proscai-inventories.repository";

export class InventoriesRoutes {
  static async routes(app: FastifyInstance) {
    const repository = new ProscaiInventoriesRepository();
    const service = new InventoriesService(repository);
    const controller = new InventoriesController(service);

    app.get("/inventories", controller.getInventories);
    app.get("/inventories/documents-search", controller.getInventoryDocumentsSearch);
    app.get("/inventories/documents/:dseq", controller.getInventoryDocumentDetailByDseqGlobal);

    app.get("/inventories/:code/next", controller.getNextInventoryByCode);
    app.get("/inventories/:code/previous", controller.getPreviousInventoryByCode);

    app.get("/inventories/:code/warehouses", controller.getInventoryWarehousesByCode);
    app.get("/inventories/:code/auxiliar", controller.getInventoryAuxiliarByCode);
    app.get("/inventories/:code/classification", controller.getInventoryClassificationByCode);
    app.get("/inventories/:code/lotes", controller.getInventoryLotesByCode);
    app.get("/inventories/:code/ueps-peps", controller.getInventoryUepsPepsByCode);

    app.get("/inventories/:code/orders-by-client", controller.getInventoryClientOrdersByCode);
    app.get("/inventories/:code/sales-by-client", controller.getInventoryClientSalesByCode);
    app.get("/inventories/:code/sales-breakdown", controller.getInventorySalesBreakdownByCode);
    app.get("/inventories/:code/sales-by-branch", controller.getInventorySalesByBranchByCode);
    app.get("/inventories/:code/annual-sales", controller.getInventoryAnnualSalesByCode);

    app.get("/inventories/:code/ordered-suppliers", controller.getInventoryOrderedSuppliersByCode);
    app.get("/inventories/:code/quoted-suppliers", controller.getInventoryQuotedSuppliersByCode);
    app.get("/inventories/:code/documents-search", controller.getInventoryDocumentsSearchByCode);
    app.get("/inventories/:code/documents/:dseq", controller.getInventoryDocumentDetailByDseq);
    app.get("/inventories/:code/purchases-by-supplier", controller.getInventoryPurchasesBySupplierByCode);
    app.get("/inventories/:code/purchases-breakdown", controller.getInventoryPurchasesBreakdownByCode);
    app.get("/inventories/:code/annual-purchases", controller.getInventoryAnnualPurchasesByCode);

    app.get("/inventories/:code", controller.getInventoryByCode);
  }
}
