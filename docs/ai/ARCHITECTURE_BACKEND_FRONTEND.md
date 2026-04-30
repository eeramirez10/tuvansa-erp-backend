# Architecture Backend-Frontend

## Backend
- `presentation`: routes + controller (sin logica pesada).
- `application`: service (reglas de negocio y agregados).
- `domain`: entities + repository interfaces.
- `infrastructure`: repositorio Proscai (SQL + mapeo entidad).

## Frontend
- `types`: contratos del endpoint.
- `api`: cliente HTTP.
- `hooks`: estado, fetch, cancelacion, transformaciones.
- `components`: UI legacy (modales/tablas/paneles).
- `store`: estado global (zustand).

## Patron acordado
SQL validado -> repository -> service -> controller -> route -> frontend types -> api -> hook -> modal/page.
