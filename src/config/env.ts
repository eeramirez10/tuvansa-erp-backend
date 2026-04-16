import "dotenv/config";
import { z } from "zod";

export class Env {
  static readonly values = (() => {
    const schema = z.object({
      NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
      APP_NAME: z.string().default("tuvansa-erp-backend"),
      HOST: z.string().default("0.0.0.0"),
      PORT: z.coerce.number().int().positive().default(3001),
      LOG_LEVEL: z.string().default("info"),
      CORS_ORIGIN: z.string().default("http://localhost:1420"),
      API_PREFIX: z.string().default("/api"),
      RATE_LIMIT_MAX: z.coerce.number().int().positive().default(100),
      RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60000),
      ENABLE_SWAGGER: z.string().default("true").transform((v) => v === "true"),

      DB_HOST: z.string().min(1),
      DB_PORT: z.coerce.number().int().positive().default(3306),
      DB_NAME: z.string().min(1),
      DB_USER: z.string().min(1),
      DB_PASSWORD: z.string().min(1),
      DB_CONNECTION_LIMIT: z.coerce.number().int().positive().default(10),
      DB_QUERY_TIMEOUT_MS: z.coerce.number().int().positive().default(15000),
      DB_READONLY: z.string().default("true").transform((v) => v === "true")
    });

    const parsed = schema.safeParse(process.env);

    if (!parsed.success) {
      console.error("Invalid env vars", parsed.error.flatten().fieldErrors);
      process.exit(1);
    }

    return parsed.data;
  })();
}