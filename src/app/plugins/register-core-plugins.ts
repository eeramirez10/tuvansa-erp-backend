import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import sensible from "@fastify/sensible";
import { FastifyInstance } from "fastify";
import { Env } from "../../config/env";

export class CorePlugins {
  static async register(app: FastifyInstance): Promise<void> {
    await app.register(sensible);

    await app.register(cors, {
      origin: Env.values.CORS_ORIGIN.split(",").map((origin) => origin.trim())
    });

    await app.register(helmet);

    await app.register(rateLimit, {
      max: Env.values.RATE_LIMIT_MAX,
      timeWindow: Env.values.RATE_LIMIT_WINDOW_MS
    });
  }
}
