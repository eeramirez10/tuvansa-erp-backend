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
12. [`docs/database/discovery/README.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/discovery/README.md)
13. [`docs/database/discovery/relations-candidate-map.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/discovery/relations-candidate-map.md)
14. [`docs/database/discovery/semantic-analysis.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/discovery/semantic-analysis.md)
15. [`docs/database/discovery/functional-modules.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/discovery/functional-modules.md)
16. [`docs/database/discovery/backend-proscai-query-map.md`](/Users/erick/Documents/dev/tuvansa-erp-backend/docs/database/discovery/backend-proscai-query-map.md)

Regla: no modificar SQL ni endpoints sin revisar esos documentos.

## Comandos

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run start`
- `npm run analyze:legacy-db` (genera diccionario de tablas, relaciones candidatas y muestras `LIMIT 10`)
- `npm run analyze:legacy-semantic` (valida coberturas de joins y genera interpretación por módulo)
- `npm run analyze:legacy-functional` (descubre módulos funcionales por prefijos/tipos de movimiento)

## Regla de documentación

Cada cambio funcional debe actualizar:

- `docs/ai/*`
- `docs/database/legacy-logical-model.md`
- `AI_HANDOFF.md` cuando cambie alcance/flujo de trabajo.
