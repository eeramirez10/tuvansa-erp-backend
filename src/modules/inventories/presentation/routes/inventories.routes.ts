import { FastifyInstance } from "fastify";
import { InventoriesController } from "../controllers/inventories.controller";
import { InventoriesService } from "../../application/services/inventories.service";
import { ProscaiInventoriesRepository } from "../../infrastructure/repositories/proscai-inventories.repository";

export class InventoriesRoutes {


  static async routes(app: FastifyInstance) {
    const repository = new ProscaiInventoriesRepository()
    const service = new InventoriesService(repository)
    const controller = new InventoriesController(service)

    app.get("/inventories", controller.getInventories)
    app.get("/inventories/:code/next", controller.getNextInventoryByCode)
    app.get("/inventories/:code/previous", controller.getPreviousInventoryByCode)
    app.get("/inventories/:code/warehouses", controller.getInventoryWarehousesByCode)
    app.get("/inventories/:code/auxiliar", controller.getInventoryAuxiliarByCode)
    app.get("/inventories/:code/sales-by-client", controller.getInventoryClientSalesByCode)
    app.get("/inventories/:code/orders-by-client", controller.getInventoryClientOrdersByCode)
    app.get("/inventories/:code", controller.getInventoryByCode)


  }


}
