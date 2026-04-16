import { AppBuilder } from "./app";
import { Env } from "./config/env";


export class Server {
  static async start(): Promise<void> {
    const env = Env.values
    const app = await AppBuilder.build();

    try {
      await app.listen({ host: env.HOST, port: env.PORT });
      app.log.info(`Server listening on http://${env.HOST}:${env.PORT}${env.API_PREFIX}`);
    } catch (error) {
      app.log.error(error, "Failed to start server");
      process.exit(1);
    }

    const shutdown = async (signal: string): Promise<void> => {
      app.log.info({ signal }, "Graceful shutdown");
      await app.close();
      process.exit(0);
    };

    process.on("SIGINT", () => {
      void shutdown("SIGINT");
    });

    process.on("SIGTERM", () => {
      void shutdown("SIGTERM");
    });
  }
}

void Server.start();