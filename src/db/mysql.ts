import mysql, { Pool, RowDataPacket } from "mysql2/promise";
import { Env } from "../config/env";

export class MySqlClient {
  private static pool: Pool | null = null;

  private static readonly RETRYABLE_ERROR_CODES = new Set([
    "PROTOCOL_CONNECTION_LOST",
    "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE"
  ]);

  private static isReadOnlyQuery(sql: string): boolean {
    const normalized = sql.trim().toLowerCase();
    return (
      normalized.startsWith("select") ||
      normalized.startsWith("show") ||
      normalized.startsWith("describe")
    );
  }

  private static createPool(): Pool {
    return mysql.createPool({
      host: Env.values.DB_HOST,
      port: Env.values.DB_PORT,
      database: Env.values.DB_NAME,
      user: Env.values.DB_USER,
      password: Env.values.DB_PASSWORD,
      connectionLimit: Env.values.DB_CONNECTION_LIMIT,
      waitForConnections: true,
      queueLimit: Env.values.DB_QUEUE_LIMIT,
      enableKeepAlive: Env.values.DB_ENABLE_KEEP_ALIVE,
      keepAliveInitialDelay: Env.values.DB_KEEP_ALIVE_INITIAL_DELAY_MS,
      connectTimeout: Env.values.DB_QUERY_TIMEOUT_MS,
      timezone: "Z"
    });
  }

  private static getPool(): Pool {
    if (!MySqlClient.pool) {
      MySqlClient.pool = MySqlClient.createPool();
    }

    return MySqlClient.pool;
  }

  private static isRetryableError(error: unknown): boolean {
    const code =
      typeof error === "object" && error !== null && "code" in error
        ? String((error as { code?: string }).code ?? "")
        : "";

    if (MySqlClient.RETRYABLE_ERROR_CODES.has(code)) {
      return true;
    }

    const message =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: string }).message ?? "")
        : "";

    return message.includes("Pool is closed") || message.includes("closed state");
  }

  private static async resetPool(): Promise<void> {
    if (!MySqlClient.pool) {
      return;
    }

    try {
      await MySqlClient.pool.end();
    } catch {
      // ignore close errors while rebuilding pool
    } finally {
      MySqlClient.pool = null;
    }
  }

  public static async queryReadOnly<T extends RowDataPacket[]>(
    sql: string,
    params: unknown[] = []
  ): Promise<T> {
    if (Env.values.DB_READONLY && !MySqlClient.isReadOnlyQuery(sql)) {
      throw new Error("Only read-only queries are allowed");
    }

    const maxAttempts = 2;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        const [rows] = await MySqlClient.getPool().query<T>(
          {
            sql,
            timeout: Env.values.DB_QUERY_TIMEOUT_MS
          },
          params
        );

        return rows;
      } catch (error) {
        const shouldRetry = MySqlClient.isRetryableError(error) && attempt < maxAttempts;

        if (!shouldRetry) {
          throw error;
        }

        await MySqlClient.resetPool();
      }
    }

    throw new Error("Read-only query failed after retry");
  }

  public static async close(): Promise<void> {
    await MySqlClient.resetPool();
  }
}
