# Tuvansa ERP Backend (Fastify + TypeScript)

API read-only para el frontend de Tuvansa ERP (replica de Omnis).

## Para asistentes de IA (leer antes de tocar código)

Si cambias de asistente, pídele que lea primero:

1. [`docs/ai/INDEX.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/INDEX.md)
2. [`docs/ai/AI_COLLAB_RULES.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/AI_COLLAB_RULES.md)
3. [`docs/ai/ARCHITECTURE_BACKEND_FRONTEND.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/ARCHITECTURE_BACKEND_FRONTEND.md)
4. [`docs/ai/ENDPOINT_PLAYBOOK.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/ENDPOINT_PLAYBOOK.md)
5. [`docs/ai/OMNIS_INVENTORIES_KB.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/OMNIS_INVENTORIES_KB.md)
6. [`docs/ai/OMNIS_SQL_VALIDATED.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/OMNIS_SQL_VALIDATED.md)
7. [`docs/ai/FIELD_MAPPING_INVENTORIES.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/FIELD_MAPPING_INVENTORIES.md)
8. [`docs/ai/HANDOFF_CHECKLIST.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/ai/HANDOFF_CHECKLIST.md)
9. [`docs/database/legacy-logical-model.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/legacy-logical-model.md)
10. [`AI_HANDOFF.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/AI_HANDOFF.md)
11. [`docs/omnis/OMNIS_TRANSCRIPCIONES_POR_MODULO.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/OMNIS_TRANSCRIPCIONES_POR_MODULO.md)

Regla: no modificar SQL ni endpoints sin revisar esos documentos.

## Comandos

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run start`

## Regla de documentación

Cada cambio funcional debe actualizar:

- `docs/ai/*`
- `docs/database/legacy-logical-model.md`
- `AI_HANDOFF.md` cuando cambie alcance/flujo de trabajo.
