# Endpoint Playbook

## Checklist de implementacion
1. Definir columnas exactas UI y reglas de negocio.
2. Escribir SQL y validarlo en IDE (cuando aplique).
3. Crear/actualizar entity en `domain/entities`.
4. Agregar firma en `IInventoriesRepository`.
5. Implementar metodo en `ProscaiInventoriesRepository`.
6. Agregar metodo en `InventoriesService`.
7. Exponer handler en `InventoriesController`.
8. Registrar ruta en `InventoriesRoutes`.
9. Typecheck backend.
10. Conectar frontend y validar build.
11. Actualizar docs (`docs/ai` + `legacy-logical-model`).

## Ejemplo reciente
- Endpoint: `GET /api/inventories/:code/sales-breakdown`
- Flujo completo aplicado con entity + meta (`totalPrice`).
