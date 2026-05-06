# AI Handoff - tuvansa-erp-backend

## 1) Project purpose
This backend is the read-only API layer for the new Tuvansa ERP desktop app (Tauri + React).
The UI being replicated comes from a legacy ERP (Omnis) that reads directly from MySQL tables.

Current strategy:
- Keep legacy DB untouched (read-only only).
- Expose clean endpoints for the new frontend.
- Preserve legacy behavior/field meaning while modernizing API contracts.
- Keep docs always updated after each functional change (`docs/ai/*` + `docs/database/legacy-logical-model.md`).

## 2) Current scope (implemented)
- Module: `inventories`
- Health endpoint: `GET /api/health`
- Inventory endpoints:
  - `GET /api/inventories` (pagination + optional search `q`)
  - `GET /api/inventories/:code`
  - `GET /api/inventories/:code/next`
  - `GET /api/inventories/:code/previous`
  - `GET /api/inventories/:code/warehouses`
  - `GET /api/inventories/:code/auxiliar`
  - `GET /api/inventories/:code/orders-by-client?kind=orders|quotes`
  - `GET /api/inventories/:code/sales-by-client`
  - `GET /api/inventories/:code/sales-breakdown` (DRAFT tuning against Omnis)

## 3) Architecture style
- Stack: Fastify + TypeScript + mysql2 + zod.
- Style requested by project owner:
  - Class-based organization.
  - Thin routes/controllers.
  - Business logic in service layer.
  - DB access in repository layer.
  - Entities for output mapping (not raw DB primitives in API responses).
- Main paths:
  - `src/app` (bootstrapping, plugins, routes)
  - `src/modules/inventories` (controllers, services, repositories, entities)
  - `src/shared/types` (pagination DTO/types)
  - `src/db/mysql.ts` (DB access + read-only guard)

## 4) Legacy DB model notes
Important: legacy DB has logical relationships without strict foreign keys.

Documented source of truth:
- `docs/database/legacy-logical-model.md`
- `docs/ai/INDEX.md`

Confirmed relation:
- `FINV.IUM -> FUNIDAD.UCOD` (logical join)

Date sentinel rule:
- `1900-12-31` must be treated as `null` in API mapping.

## 5) Data contracts in use
- List endpoint returns `InventoryEntity[]` + pagination meta.
- Detail endpoint returns `InventoryDetailEntity`.
- Pagination helper:
  - `PaginationDto.fromQuery(...)`
  - `PaginatedResponseDto<T, M>`

Custom meta currently used by inventories includes:
- `module`
- `source`
- `search`
- `kind` in `orders-by-client`

## 6) Read-only safety constraints
`src/db/mysql.ts` enforces read-only mode:
- `queryReadOnly(...)` only allows SQL starting with:
  - `select`
  - `show`
  - `describe`
- Controlled by env: `DB_READONLY=true` (default behavior expected for this project).

## 7) Environment variables
Defined and validated in `src/config/env.ts`.
Required DB vars:
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

Key app vars:
- `HOST`, `PORT`, `API_PREFIX`
- `CORS_ORIGIN`
- `LOG_LEVEL`
- `DB_READONLY`

## 8) Local run commands
- Install deps: `npm install`
- Dev mode: `npm run dev`
- Start once: `npm run start`
- Typecheck: `npm run typecheck`

HTTP examples:
- `http/health.http`
- `http/inventories.http`

## 9) Recommended next work
1. Expand inventory search/filter behavior to match legacy Omnis UX exactly.
2. Add input validation DTOs/schemas per endpoint.
3. Add integration tests for repository + service flows (especially next/previous navigation).
4. Continue documenting new logical relations in `docs/database/legacy-logical-model.md`.
5. Add additional ERP modules following same pattern (`module -> repository -> service -> controller -> routes`).

## 10) Quick onboarding checklist for any AI assistant
1. Read this file.
2. Read `docs/ai/INDEX.md` and follow the order.
3. Read `docs/database/legacy-logical-model.md`.
4. Review `src/modules/inventories/*` before changing SQL.
5. Keep DB access read-only.
6. Preserve class-based architecture and entity mapping.
