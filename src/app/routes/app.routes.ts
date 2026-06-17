import { FastifyInstance } from "fastify";
import { InventoriesRoutes } from "../../modules/inventories/presentation/routes/inventories.routes";


export class AppRoutes {


  static async routes(app: FastifyInstance) {

    app.get("/health", async () => {
      return {
        status: "ok",
        service: "tuvansa-erp-backend",
        timestamp: new Date().toISOString()
      };
    });

    await InventoriesRoutes.routes(app)
  }
}
