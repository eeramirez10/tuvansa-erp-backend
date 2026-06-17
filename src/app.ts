import Fastify, { FastifyInstance } from "fastify";


import { AppRoutes } from "./app/routes/app.routes";
import { Env } from "./config/env";
import { CorePlugins } from "./app/plugins/register-core-plugins";

export class AppBuilder {
  static async build(): Promise<FastifyInstance> {

    const env = Env.values
    const app = Fastify({
      logger: {
        level: Env.values.LOG_LEVEL
      }
    });

    await CorePlugins.register(app);
    await app.register(async (instance) => {
      await AppRoutes.routes(instance);
    }, { prefix: env.API_PREFIX });

    app.setErrorHandler((error, _request, reply) => {
      const statusCode = (error as { statusCode?: number }).statusCode ?? 500;
      const message = error instanceof Error ? error.message : "Internal Server Error";

      app.log.error({ err: error }, "request failed");

      reply.status(statusCode).send({
        error: {
          message,
          statusCode
        }
      });
    });

    return app;
  }
}
