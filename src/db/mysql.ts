import mysql, { Pool, RowDataPacket } from "mysql2/promise";
import { Env } from "../config/env";

export class MySqlClient {
  private static pool: Pool | null = null;

  private static isReadOnlyQuery(sql: string): boolean {
    const normalized = sql.trim().toLowerCase();
    return (
      normalized.startsWith("select") ||
      normalized.startsWith("show") ||
      normalized.startsWith("describe")
    );
  }

  private static getPool(): Pool {
    if (!MySqlClient.pool) {
      MySqlClient.pool = mysql.createPool({
        host: Env.values.DB_HOST,
        port: Env.values.DB_PORT,
        database: Env.values.DB_NAME,
        user: Env.values.DB_USER,
        password: Env.values.DB_PASSWORD,
        connectionLimit: Env.values.DB_CONNECTION_LIMIT,
        waitForConnections: true,
        queueLimit: 0,
        connectTimeout: Env.values.DB_QUERY_TIMEOUT_MS,
        timezone: "Z"
      });
    }

    return MySqlClient.pool;
  }

  public static async queryReadOnly<T extends RowDataPacket[]>(
    sql: string,
    params: unknown[] = []
  ): Promise<T> {
    if (Env.values.DB_READONLY && !MySqlClient.isReadOnlyQuery(sql)) {
      throw new Error("Only read-only queries are allowed");
    }

    const [rows] = await MySqlClient.getPool().query<T>(sql, params);
    return rows;
  }

  public static async close(): Promise<void> {
    if (MySqlClient.pool) {
      await MySqlClient.pool.end();
      MySqlClient.pool = null;
    }
  }
}
