import { FastifyPluginAsync } from "fastify";

export const appRoutes: FastifyPluginAsync = async (app) => {
  app.get("/health", async () => {
    return {
      status: "ok",
      service: "tuvansa-erp-backend",
      timestamp: new Date().toISOString()
    };
  });
};
