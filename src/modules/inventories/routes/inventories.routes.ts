import { FastifyInstance } from "fastify";
import { InventoriesController } from "../controllers/inventories.controller";
import { InventoriesService } from "../services/inventories.service";
import { InventoriesRepository } from "../repositories/inventories.repository";

export class InventoriesRoutes {


  static async routes(app: FastifyInstance) {
    const repository = new InventoriesRepository()
    const service = new InventoriesService(repository)
    const controller = new InventoriesController(service)

    app.get("/inventories", controller.getInventories)
    app.get("/inventories/:code/next", controller.getNextInventoryByCode)
    app.get("/inventories/:code/previous", controller.getPreviousInventoryByCode)
    app.get("/inventories/:code", controller.getInventoryByCode)


  }


}
