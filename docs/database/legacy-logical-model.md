# Legacy Logical Model (ERP Tuvansa)

## 1) Objetivo
Documentar las relaciones lógicas de la base legacy (aunque no tenga llaves foráneas) para:
- evitar errores en SQL,
- estandarizar joins,
- preparar migración futura con FKs reales.

## 2) Convenciones importantes (legacy)
- Motor: MySQL
- Charset/collation dominante: `macroman` / `macroman_bin`
- Muchas fechas usan `1900-12-31` como valor "vacío/no aplica".
- No confiar en FKs físicas: usar relaciones lógicas documentadas aquí.

## 3) Tablas documentadas

### 3.1 FINV (Inventarios)
- PK técnica: `ISEQ`
- Llave de negocio principal: `ICOD`
- Campos clave usados en Inventarios UI:
  - Identidad: `ICOD`, `IDESCR`, `ITIPO`, `IFAM`, `ICT`
  - Unidad: `IUM`
  - Precios: `ILISTA1..ILISTA6`, `IMONEDA1..IMONEDA3`, `IADVALOREM`
  - Stock/acumulados: `ISTKACT`, `ISTKANT`, `ISTKACU`, `IPEDCLI`, `IPEDPRV`, `IPEDCOTIZ`, `IORDCOTIZ`, `ICONFIRMADO`, `IASIGNADO`, `ISTKPZS`
  - Cuentas/ubicación: `ICTA`, `ICTADEV`, `ILOCALIZ`, `IEAN`, `IUPC`
  - Fechas: `IALTA`, `IBAJA`, `IULTVTA`, `IULTCPR`

### 3.2 FUNIDAD (Catálogo de unidades)
- PK técnica: `USEQ`
- Llave de negocio principal: `UCOD`
- Campos clave:
  - `UCOD`
  - `UDESCR`
  - `UINACTIVO`

### 3.3 FPRV (Catálogo de proveedores)
- PK técnica: `PRVSEQ`
- Llave de negocio principal: `PRVCOD`
- Campos clave:
  - `PRVCOD`
  - `PRVNOM`
  - `PRVBAJA`

## 4) Relaciones lógicas confirmadas

### R-001 (CONFIRMADA)
- `FINV.IUM` -> `FUNIDAD.UCOD`
- Tipo: 1 unidad por producto (lógico), join recomendado `LEFT JOIN`.

Ejemplo base:
```sql
SELECT f.ICOD, f.IDESCR, f.IUM, u.UDESCR
FROM finv f
LEFT JOIN funidad u ON u.UCOD = f.IUM;
```

### R-002 (CONFIRMADA)
- `FINV.IPRV` -> `FPRV.PRVCOD`
- Tipo: proveedor lógico del producto, join recomendado `LEFT JOIN`.
- Uso actual en tab Compras:
  - `Proveedor` = `FINV.IPRV + " " + FPRV.PRVNOM`
  - `Código` = `FINV.ICODPRV` (código del proveedor para ese producto)

Ejemplo base:
```sql
SELECT
  f.ICOD,
  f.IPRV,
  p.PRVNOM,
  f.ICODPRV
FROM finv f
LEFT JOIN fprv p ON p.PRVCOD = f.IPRV
WHERE f.ICOD = ?;
```

## 5) Reglas de normalización de datos

### Fechas sentinel
- Si campo fecha = `1900-12-31`, tratar como `null` en API.

Campos conocidos:
- `FINV.IBAJA`
- `FINV.IALTA`
- `FINV.IULTVTA`
- `FINV.IULTCPR`

## 6) SQLs validados

### INV-001 (OK)
Propósito: listado básico inventarios para API.
```sql
SELECT
  f.ICOD,
  f.IDESCR,
  f.IUM,
  f.IFAM,
  f.IBAJA,
  u.UDESCR
FROM finv f
LEFT JOIN funidad u ON u.UCOD = f.IUM
ORDER BY f.ICOD ASC
LIMIT 50;
```

### INV-002 (OK)
Propósito: búsqueda por código o descripción para API de inventarios.
```sql
SELECT
  f.ICOD,
  f.IDESCR,
  f.IUM,
  f.IFAM,
  f.IBAJA,
  u.UDESCR
FROM finv f
LEFT JOIN funidad u ON u.UCOD = f.IUM
WHERE (f.ICOD LIKE ? OR f.IDESCR LIKE ?)
ORDER BY f.ICOD ASC
LIMIT 50;
```
Parámetros recomendados:
- `["%texto%", "%texto%"]`

### INV-003 (OK)
Propósito: búsqueda paginada por código o descripción para API de inventarios.
```sql
SELECT
  f.ICOD,
  f.IDESCR,
  f.IUM,
  f.IFAM,
  f.IBAJA,
  u.UDESCR
FROM finv f
LEFT JOIN funidad u ON u.UCOD = f.IUM
WHERE (f.ICOD LIKE ? OR f.IDESCR LIKE ?)
ORDER BY f.ICOD ASC
LIMIT ? OFFSET ?;
```
Parámetros recomendados:
- `["%texto%", "%texto%", limit, offset]`
- Sin búsqueda: `[limit, offset]`

### INV-004 (OK)
Propósito: detalle completo de inventario por código (`ICOD`) para `InventoriesPage`.
```sql
SELECT
  f.ICOD,
  f.IDESCR,
  f.IUM,
  f.ITIPO,
  f.ICT,
  f.IFAM,
  f.IALTA,
  f.IBAJA,
  f.ILISTA1, f.ILISTA2, f.ILISTA3, f.ILISTA4, f.ILISTA5, f.ILISTA6,
  f.IMONEDA1, f.IMONEDA2, f.IMONEDA3,
  f.IADVALOREM,
  f.IULTCPR, f.IULTVTA,
  f.IASIGNADO, f.ICONFIRMADO,
  f.IPEDCLI, f.IPEDCOTIZ, f.IPEDPRV, f.IORDCOTIZ,
  f.ISTKANT, f.ISTKACU, f.ICANTAN, f.ICANTAC, f.ISTKPZS,
  f.IMINIMO, f.IMAXIMO, f.IMAXIMOINI,
  f.ILOCALIZ, f.IEAN, f.IUPC,
  f.ICTA, f.ICTADEV, f.ICTA3, f.ICTADESV,
  f.IVTA, f.IDIASSTK, f.IVTAEOL,
  u.UDESCR
FROM finv f
LEFT JOIN funidad u ON u.UCOD = f.IUM
WHERE f.ICOD = ?
LIMIT 1;
```
Parámetro recomendado:
- `[code]`

### INV-005 (OK - Dimensiones)
Propósito: mapear datos del tab **Dimensiones** desde `FINV` en el detalle por código.
```sql
SELECT
  f.ICOD,
  f.IVOLUMEN,
  f.IPESO,
  f.ICANTCAJA,
  f.IEMPAQUE,
  f.ILARGO,
  f.IALTO,
  f.IANCHO,
  f.IDENSIDAD,
  f.IPESOMTRO,
  f.IPESOSPARAPUNTO,
  f.IEDIEMP,
  f.IEDIEMPC,
  f.IZONAPICK,
  f.ILOCALIZ2,
  f.IDLXUNTPAK,
  f.IDLXUNTCAS,
  f.IDLXUNTPAL,
  f.IDLXPAKUOM,
  f.IDLXCASUOM,
  f.IDLXPALUOM,
  f.IVOLUMEN2,
  f.ICANTCAJA2
FROM finv f
WHERE f.ICOD = ?
LIMIT 1;
```
Parámetro recomendado:
- `[code]`

### INV-006 (OK - Compras Proveedor)
Propósito: mapear proveedor del tab **Compras** desde `FINV` + `FPRV`.
```sql
SELECT
  f.ICOD,
  f.IPRV,
  p.PRVNOM,
  f.ICODPRV,
  f.ILUGAR,
  f.IUM2,
  f.IUM2FACTOR,
  f.IUM2PRECIO
FROM finv f
LEFT JOIN fprv p ON p.PRVCOD = f.IPRV
WHERE f.ICOD = ?
LIMIT 1;
```
Parámetro recomendado:
- `[code]`

## 7) Mapeo tab Dimensiones (Omnis -> API)

### 7.1 Confirmado por notas Omnis (EINV#1)
Los siguientes campos aparecen explícitamente en `codigo de inventarios.pdf` (bloques `Define list` / controles de ventana):
- `Volumen` -> `FINV.IVOLUMEN`
- `Caja genérica` -> `FINV.ICANTCAJA`
- `Empaque` -> `FINV.IEMPAQUE`
- `Empaque EDI` -> `FINV.IEDIEMP`
- `Cantidad EDI` -> `FINV.IEDIEMPC`
- `Localización` -> `FINV.ILOCALIZ`
- `Puntos por pulg` -> `FINV.IPESOSPARAPUNTO`

### 7.2 Inferido con alta confianza (esquema FINV + UI legacy)
- `Peso` -> `FINV.IPESO`
- `Largo` -> `FINV.ILARGO`
- `Alto` -> `FINV.IALTO`
- `Ancho` -> `FINV.IANCHO`
- `Densidad K/L` -> `FINV.IDENSIDAD`
- `Peso K/M - K/PZ` -> `FINV.IPESOMTRO`
- `Zona` -> `FINV.IZONAPICK`
- `Localización Pp` -> `FINV.ILOCALIZ2`

### 7.3 Bloque derecho (pendiente validación funcional fina)
Para `Picking / Caja / Pallet / Volumen / Inner / Outer` se usa mapeo preliminar:
- `Picking` -> `FINV.IDLXUNTPAK`
- `Caja` -> `FINV.IDLXUNTCAS`
- `Pallet` -> `FINV.IDLXUNTPAL`
- `Volumen (derecha)` -> `FINV.IVOLUMEN2`
- `Caja secundaria` -> `FINV.ICANTCAJA2`
- `Inner` -> `FINV.IDLXPAKUOM`
- `Outer` -> `FINV.IDLXCASUOM`
- `Pallet UOM` -> `FINV.IDLXPALUOM`

Nota:
- Este bloque no trae llaves foráneas ni catálogos explícitos en legacy. Validar contra comportamiento real en Omnis antes de cerrar contrato final.

### 7.4 Mapeo tab Compras (Proveedor)
- `Proveedor` -> `FINV.IPRV + " " + FPRV.PRVNOM`
- `Código` -> `FINV.ICODPRV`
- `Lugar de origen` -> `FINV.ILUGAR`
- `Equivale a (unidad)` -> `FINV.IUM2`
- `Equivale a (factor)` -> `FINV.IUM2FACTOR`
- `Precio` -> `FINV.IUM2PRECIO`

## 8) SQLs con error / lecciones

### ERR-001
- Error: usar `FINV.UCOD` en lugar de `FINV.IUM`.
- Causa: asumir nombre por Omnis UI.
- Corrección: relación correcta es `FINV.IUM -> FUNIDAD.UCOD`.

## 9) Reglas para migración futura (objetivo)
Cuando se diseñe la nueva DB:
- Crear FK real `inventory.unit_code -> unit.code`.
- Separar PK técnica de llaves de negocio.
- Reemplazar fechas sentinel por `NULL`.
- Definir catálogos y enums para campos de estado.

## 10) Bitácora de cambios del documento
- 2026-04-15: versión inicial creada con FINV/FUNIDAD y relación R-001.
- 2026-04-15: agregado INV-002 para búsqueda (`ICOD` / `IDESCR`) con `LIKE`.
- 2026-04-15: agregado INV-003 para paginación (`LIMIT/OFFSET`) en inventarios.
- 2026-04-15: agregado INV-004 para detalle por código (`ICOD`).
- 2026-04-16: INV-004 ampliado con campos completos para pantalla de Inventarios.
- 2026-04-17: agregado INV-005 y mapeo técnico del tab Dimensiones (confirmado + inferido + pendientes).
- 2026-04-20: agregados FPRV, relación R-002 (`FINV.IPRV -> FPRV.PRVCOD`) e INV-006 para tab Compras (Proveedor/Código).
