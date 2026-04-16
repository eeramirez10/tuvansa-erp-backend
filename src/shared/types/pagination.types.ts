export type PaginationQuery = {
  limit?: string | number;
  offset?: string | number;
};

export class PaginationDto {
  public readonly limit: number;
  public readonly offset: number;

  private constructor(limit: number, offset: number) {
    this.limit = limit;
    this.offset = offset;
  }

  public static fromQuery(
    query: PaginationQuery,
    options?: { defaultLimit?: number; maxLimit?: number }
  ): PaginationDto {
    const defaultLimit = options?.defaultLimit ?? 50;
    const maxLimit = options?.maxLimit ?? 200;

    const parsedLimit = Number(query.limit);
    const parsedOffset = Number(query.offset);

    const safeLimit = Number.isFinite(parsedLimit) ? Math.floor(parsedLimit) : defaultLimit;
    const safeOffset = Number.isFinite(parsedOffset) ? Math.floor(parsedOffset) : 0;

    const limit = Math.min(Math.max(safeLimit, 1), maxLimit);
    const offset = Math.max(safeOffset, 0);

    return new PaginationDto(limit, offset);
  }
}

type PaginationMetaBase = {
  limit: number;
  offset: number;
  count: number;
  total?: number;
};

export class PaginatedResponseDto<
  T,
  M extends Record<string, unknown> = Record<string, unknown>
> {
  public readonly data: T[];
  public readonly meta: PaginationMetaBase & M;

  constructor(data: T[], pagination: PaginationDto, total?: number, extraMeta?: M) {
    this.data = data;
    this.meta = {
      limit: pagination.limit,
      offset: pagination.offset,
      count: data.length,
      total,
      ...(extraMeta ?? ({} as M))
    };
  }
}
