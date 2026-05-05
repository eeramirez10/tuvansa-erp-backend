# Backend Proscai Query Map (source-of-truth extraction)

## 1) Fuente analizada
- Repo: `/Users/erick/Documents/dev/tuvansa/backend-proscai`
- Stack: Express + `mysql2` + `sequelize`
- Fecha de análisis: 2026-04-30
- Objetivo: extraer relaciones y reglas funcionales desde SQL productivo (no solo inferencia por nombres).

## 2) Controladores revisados
- `controllers/inventarios.controller.js`
- `controllers/ventas.controller.js`
- `controllers/compras.js`
- `controllers/charts.js`
- `controllers/clientes.controllers.js`
- `controllers/proveedores.controller.js`
- `controllers/cxc.controller.js`
- `controllers/direccion.controller.js`
- `controllers/embarques.controller.js`

## 3) Tablas más usadas en SQL real
Conteo aproximado por apariciones `FROM/JOIN` dentro de `controllers/*.js`:
- `FINV` (21)
- `FFAM` (21)
- `FDOC` (19)
- `FINV2` (17)
- `FAXINV` (12)
- `FCLI` (11)
- `FAG` (7)
- `FPRV` (7)
- `FALM` (7)
- `FAX` (3)
- `FPLIN` (3)
- `FPENC` (3)

## 4) Relaciones operativas confirmadas por uso

### 4.1 Núcleo de ventas y movimientos
- `FAXINV.DSEQ -> FDOC.DSEQ`
- `FAXINV.ISEQ -> FINV.ISEQ`
- `FINV.ISEQ -> FINV2.I2KEY`
- `FINV.IFAMB -> FFAM.FAMTNUM`
- `FDOC.CLISEQ -> FCLI.CLISEQ`
- `FDOC.DPAR1 -> FAG.AGTNUM` (vendedor/agente en casi todos los reportes comerciales legacy)

### 4.2 Cuentas por cobrar / pagar
- `FAX.DSEQ -> FDOC.DSEQ`
- `FAX.CLISEQ -> FCLI.CLISEQ` (CXC)
- `FAX.PRVSEQ -> FPRV.PRVSEQ` (CXP)

### 4.3 Pedidos y cotizaciones
- `FPLIN.PESEQ -> FPENC.PESEQ`
- `FPLIN.ISEQ -> FINV.ISEQ`
- `FPENC.CLISEQ -> FCLI.CLISEQ`
- `FPENC.PEPAR1 -> FAG.AGTNUM` (vendedor en pedidos)
- `FCOMENT.COMSEQFACT = 1000000000 + FPENC.PESEQ` (join funcional legacy para comentarios)

### 4.4 Inventario por almacén
- `FALM.ISEQ -> FINV.ISEQ`
- `FALM.ALMNUM -> catálogo de sucursal/almacén` (con mapeos CASE en SQL legacy)

## 5) Campos/semántica de negocio repetidos

### 5.1 Documentos (FDOC)
- `DESFACT=1`: ventas
- `DESFACT=2`: compras
- `DCANCELADA=0`: documento vigente
- `DSTATUSCFD=3`: CFDI válido/emitido (filtro común de ventas)
- `DMULTICIA`: sucursal administrativa (1..6)
- `DNUM`: tipo/prefijo de movimiento documental (`F`, `D`, `C`, `R`, `G`, etc.)

### 5.2 Movimientos de inventario (FAXINV)
- Métricas principales: `AICANTF`, `AIPRECIO`, `AICOSTO`
- Almacén operativo: `AIALMACEN`
- Tipo de movimiento: `AITIPMV`

### 5.3 Catálogo de tipos de movimiento (FTIPMV)
- En backend-proscai el join observado es:
  - `FTIPMV.TICLA = FAXINV.AITIPMV`
- Esta evidencia es importante porque en otras consultas del proyecto también usamos `TINUM`; ambos pueden coexistir según contexto.

## 6) Reglas de filtrado legacy importantes
- Ventas: combinación recurrente
  - `DESFACT=1`
  - `DCANCELADA=0`
  - `DSTATUSCFD=3`
  - prefijos de `DNUM` tipo factura/remisión/devolución (`F`,`D`,`C`) y exclusiones `CT/AF/AN` según reporte.
- Compras: combinación recurrente
  - `DESFACT=2`
  - prefijos de recepción/compra (`R`,`G`,`M`,`N`) según reporte.
- Inventarios:
  - exclusión frecuente `ITIPO<>4`
  - uso intensivo de `ALMNUM` / `AIALMACEN` para segmentar por sucursal física.

## 7) Implicaciones para nuestro backend Fastify

### 7.1 Preferencias de join para ventas por vendedor
Cuando el requerimiento sea "vendedor comercial" en reportes legacy:
- Priorizar `FDOC.DPAR1 -> FAG.AGTNUM`.
- `FDOC.DIUSEQ -> FUSERS.USRSEQ` representa operador/usuario del sistema y puede ser distinto al agente vendedor.

### 7.2 Preferencias de sucursal
- Si es reporte contable/documental: usar `DMULTICIA`.
- Si es inventario físico/movimientos de almacén: usar `AIALMACEN`/`ALMNUM`.

### 7.3 Preferencias de costos/importe
- Ventas: `AICANTF * AIPRECIO`.
- Costo: `AICANTF * AICOSTO`.
- Utilidad: diferencia de ambos, igual que backend-proscai.

## 8) Diferencias detectadas vs implementación nueva
- En algunos endpoints nuevos se usó `DIUSEQ` como vendedor; backend-proscai sugiere que para muchos reportes el vendedor legacy es `DPAR1`.
- En proscai hay reportes que mezclan sucursal administrativa (`DMULTICIA`) con almacén (`AIALMACEN`); no asumir que son equivalentes.

## 9) Recomendación operativa
Antes de cerrar cualquier endpoint nuevo de reporteo:
1. Probar SQL directo en IDE con datos reales.
2. Verificar que el campo de "vendedor" esperado sea `DPAR1` (agente) o `DIUSEQ` (usuario).
3. Verificar si el filtro correcto de sucursal es `DMULTICIA` o `AIALMACEN`.
4. Documentar inmediatamente el resultado en `legacy-logical-model.md` y en este archivo.
