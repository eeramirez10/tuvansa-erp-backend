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
  - Importación: `IPEDIMENTO`, `IFECHAIMPORT`, `IADUANA`, `IARANCEL`, `IARANCELEXP`, `IPORCARANC`, `INOCAPAS`
  - Producción: `ILOTE`, `ITIEMPO`, `INECPRO`, `ITIPOTIEMPO`, `IFECHAENSAMBLE`, `IENSABLES`, `ISEGUNDAS`, `ITERCERAS`, `IREBAJAMINIMO`, `INOPRODUCTIVO`
  - Impuestos: `ITMVTS`, `ITMREC`, `IPORCIEPES`, `IPORCRETIVA`, `IPORCRETISR`, `IPORCIVA`, `IRETIVA`, `INOIVAENIEPS`, `IDONATIVO`
  - Modal Otros:
    - Opciones: `ICOMPOS`, `ITVP`, `ICONTROLPZAS`, `IFRACCIONABLE`, `IUSEQ`, `IBODEGA`, `IPROXRECEP`, `ITRANSITO`, `IFISICOINICIAL`, `IFECHACAMBIO`, `IFECHACAMBIOPR`, `IWEBPEDIDOS`, `IPRIMERVTAPOS`, `INVFIS`, `IRENGLON`, `IRAIZ`, `ICOLOREXT`, `ICOLOR`
    - Precios extendidos: `IPORCOMISION`, `IFIJOIEPS`, `IOFERDESDE`, `IOFERHASTA`, `IMINIMOHASTA`, `IDESCTOMON`, `IDESCTOPOS`, `ILISTA7..ILISTA18`, `IMONEDA4..IMONEDA18`
    - Exportación/CCP: `IARANCELEXP`, `IFACTORCCE`, `ICCPMPTIPO`, `ICCPMPCLAVE`, `ICCPMPEMBALAJE`
    - Varios: `IVARIOS1..IVARIOS22`

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

### 3.4 FALM (Inventario por almacén)
- PK técnica: `ALMSEQ`
- Llave lógica principal por producto: `ISEQ` (referencia a `FINV.ISEQ`)
- Llaves operativas:
  - `ALMNUM` (almacén)
  - `ALMKEY` (legacy compuesto; no usar como join principal en API nueva)
- Campos clave usados en modal Almacenes:
  - `ALMCANT`, `ALMMINIMO`, `ALMMAXIMO`, `ALMVTAEOL`, `ALMMINIMOENTDA`
  - `ALMVTA`, `ALMPEDIDO`, `ALMASIGNADO`, `ALMINVFIS`, `ALMFISICOINICIAL`
  - `ALMDETDAS`, `ALMACTIVO`, `ALMTRANSITO`, `ALMALTA`, `ALMULTIMAVTA`
  - `ALMPRVOC`, `ALMLOCALIZ`, `ALMTOTVTA`
  - `ALMVAFUTS1..ALMVAFUTS5`, `ALMVTAFUT6`
  - `ALMPRECIO`, `ALMTOTRECS`, `ALMCURVA`, `ALMCDNUM`

### 3.5 FALMCAT (Catálogo de almacenes)
- PK técnica: `CATSEQ`
- Llave de negocio principal: `CATALM`
- Campo de filtro funcional: `CATTIPO` (Omnis usa `CATTIPO=''` para lista base de almacenes)
- Campos clave:
  - `CATALM`
  - `CATDESCR`
  - `CATTIPO`

### 3.6 FPLIN (Líneas de pedidos/cotizaciones)
- PK técnica: `PLSEQ`
- Llaves lógicas relevantes:
  - `ISEQ` (producto, referencia a `FINV.ISEQ`)
  - `PESEQ` (encabezado de pedido, referencia a `FPENC.PESEQ`)
  - `CLISEQ` (cliente, referencia a `FCLI.CLISEQ`)
- Campos clave usados en modal Pedidos por cliente:
  - `PLCANT`, `PLSURT`, `PLASIGNADO`, `PLASIGNPZAS`, `PLPRECI`, `PLSUC`, `PLFACTOR`

### 3.7 FPENC (Encabezado de pedidos)
- PK técnica: `PESEQ`
- Campos clave usados en modal Pedidos por cliente:
  - `PENUM`, `PENUMELLOS`, `PEDESDE`

### 3.8 FCLI (Catálogo de clientes)
- PK técnica: `CLISEQ`
- Llave de negocio principal: `CLICOD`
- Campos clave usados en modal Pedidos por cliente:
  - `CLICOD`, `CLINOM`

### 3.9 FAXINV (Afectación de inventario por documento)
- PK técnica: `AISEQ`
- Llaves lógicas relevantes:
  - `ISEQ` (producto, referencia a `FINV.ISEQ`)
  - `DSEQ` (documento, referencia a `FDOC.DSEQ`)
  - `CLISEQ` (cliente, referencia a `FCLI.CLISEQ`)
- Campos clave usados en modal Ventas por cliente:
  - `AICANTF`, `AIPRECIO`, `AIMES`

### 3.10 FDOC (Documentos)
- PK técnica: `DSEQ`
- Campos clave usados en modal Ventas por cliente:
  - `DESFACT`, `DOTROSTXT`, `DCONTROLPOS`

### 3.11 FCIA (Configuración de compañía)
- Uso en Inventarios:
  - `CIANOCOSTOS` (regla de costo para modal Auxiliar)

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

### R-003 (CONFIRMADA)
- `FINV.ISEQ` -> `FALM.ISEQ`
- Tipo: inventario por almacén del producto, join recomendado `INNER JOIN` para detalle de almacenes.

Ejemplo base:
```sql
SELECT f.ICOD, fa.ALMNUM, fa.ALMCANT
FROM finv f
INNER JOIN falm fa ON fa.ISEQ = f.ISEQ
WHERE f.ICOD = ?;
```

### R-004 (CONFIRMADA)
- `FALM.ALMNUM` -> `FALMCAT.CATALM`
- Tipo: catálogo descriptivo del almacén, join recomendado `LEFT JOIN`.
- Filtro funcional legado recomendado: `FALMCAT.CATTIPO = ''`.

Ejemplo base:
```sql
SELECT fa.ALMNUM, fc.CATDESCR
FROM falm fa
LEFT JOIN falmcat fc ON fc.CATALM = fa.ALMNUM AND fc.CATTIPO = '';
```

### R-005 (CONFIRMADA)
- `FINV.ISEQ` -> `FPLIN.ISEQ`
- Tipo: líneas del documento por producto, join recomendado `INNER JOIN`.

Ejemplo base:
```sql
SELECT i.ICOD, pl.PLSEQ, pl.PLCANT
FROM finv i
INNER JOIN fplin pl ON pl.ISEQ = i.ISEQ
WHERE i.ICOD = ?;
```

### R-006 (CONFIRMADA)
- `FPLIN.PESEQ` -> `FPENC.PESEQ`
- Tipo: relación de línea a encabezado de pedido, join recomendado `LEFT JOIN`.

Ejemplo base:
```sql
SELECT pl.PLSEQ, p.PENUM, p.PEDESDE
FROM fplin pl
LEFT JOIN fpenc p ON p.PESEQ = pl.PESEQ;
```

### R-007 (CONFIRMADA)
- `FPLIN.CLISEQ` -> `FCLI.CLISEQ`
- Tipo: relación de línea a cliente, join recomendado `LEFT JOIN`.

Ejemplo base:
```sql
SELECT pl.PLSEQ, c.CLICOD, c.CLINOM
FROM fplin pl
LEFT JOIN fcli c ON c.CLISEQ = pl.CLISEQ;
```

### R-008 (CONFIRMADA)
- `FINV.ISEQ` -> `FAXINV.ISEQ`
- Tipo: movimientos de inventario por producto, join recomendado `INNER JOIN`.

Ejemplo base:
```sql
SELECT i.ICOD, ai.AISEQ, ai.AICANTF
FROM finv i
INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
WHERE i.ICOD = ?;
```

### R-009 (CONFIRMADA)
- `FAXINV.DSEQ` -> `FDOC.DSEQ`
- Tipo: documento origen del movimiento, join recomendado `INNER JOIN` en análisis de ventas.

Ejemplo base:
```sql
SELECT ai.AISEQ, d.DSEQ, d.DESFACT
FROM faxinv ai
INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ;
```

### R-010 (CONFIRMADA)
- `FAXINV.CLISEQ` -> `FCLI.CLISEQ`
- Tipo: cliente asociado al movimiento, join recomendado `INNER JOIN` para reportes por cliente.

Ejemplo base:
```sql
SELECT ai.AISEQ, c.CLICOD, c.CLINOM
FROM faxinv ai
INNER JOIN fcli c ON c.CLISEQ = ai.CLISEQ;
```

## 5) Reglas de normalización de datos

### Fechas sentinel
- Si campo fecha = `1900-12-31`, tratar como `null` en API.

Campos conocidos:
- `FINV.IBAJA`
- `FINV.IALTA`
- `FINV.IULTVTA`
- `FINV.IULTCPR`
- `FALM.ALMALTA`
- `FALM.ALMULTIMAVTA`

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

### INV-007 (OK - Almacenes)
Propósito: mapear grid del modal **Almacenes** por `ICOD` desde `FINV + FALM + FALMCAT`.
```sql
SELECT
  COALESCE(fa.ALMCDNUM, 0) AS CD,
  fa.ALMNUM AS ALM,
  COALESCE(fc.CATDESCR, '') AS DESCRIPCION,
  fa.ALMCANT AS CANT,
  fa.ALMMINIMO AS MINIMO,
  fa.ALMMAXIMO AS MAXIMO,
  fa.ALMVTAEOL AS VEOL,
  fa.ALMMINIMOENTDA AS MIN_TDA,
  fa.ALMVTA AS VTA_6S,
  fa.ALMPEDIDO AS PEDIDO,
  fa.ALMASIGNADO AS ASIGNADO,
  fa.ALMINVFIS AS FISICO,
  fa.ALMFISICOINICIAL AS I_CONTEO,
  fa.ALMDETDAS AS DE_TDS,
  fa.ALMACTIVO AS A,
  fa.ALMTRANSITO AS TRANSITO,
  fa.ALMALTA AS ALTA,
  fa.ALMULTIMAVTA AS ULT_VTA,
  fa.ALMPRVOC AS ORD_PRV,
  fa.ALMLOCALIZ AS LOCALIZACION,
  fa.ALMTOTVTA AS VTA_ACUM,
  fa.ALMVAFUTS1 AS S1,
  fa.ALMVAFUTS2 AS S2,
  fa.ALMVAFUTS3 AS S3,
  fa.ALMVAFUTS4 AS S4,
  fa.ALMVAFUTS5 AS S5,
  fa.ALMVTAFUT6 AS S6,
  fa.ALMPRECIO AS PRECIO,
  fa.ALMTOTRECS AS TOT_RECS,
  fa.ALMCURVA AS CURVA
FROM finv f
INNER JOIN falm fa ON fa.ISEQ = f.ISEQ
LEFT JOIN falmcat fc ON fc.CATALM = fa.ALMNUM AND fc.CATTIPO = ''
WHERE f.ICOD = ?
ORDER BY fa.ALMNUM ASC;
```

### INV-008 (OK - Modal Otros)
Propósito: mapear datos del modal **Otros** desde el mismo detalle de inventario (`FINV`) para evitar endpoint duplicado.
```sql
SELECT
  f.ICOD,
  f.ICOMPOS, f.ITVP, f.ICONTROLPZAS, f.IFRACCIONABLE, f.IUSEQ, f.IBODEGA,
  f.IPROXRECEP, f.ITRANSITO, f.IFISICOINICIAL, f.IFECHACAMBIO, f.IFECHACAMBIOPR,
  f.IWEBPEDIDOS, f.IPRIMERVTAPOS, f.INVFIS, f.IRENGLON, f.IRAIZ, f.ICOLOREXT, f.ICOLOR,
  f.IPORCOMISION, f.IPORCIEPES, f.IFIJOIEPS, f.IOFERDESDE, f.IOFERHASTA, f.IMINIMOHASTA,
  f.IDESCTOMON, f.IDESCTOPOS,
  f.ILISTA7, f.ILISTA8, f.ILISTA9, f.ILISTA10, f.ILISTA11, f.ILISTA12, f.ILISTA13,
  f.ILISTA14, f.ILISTA15, f.ILISTA16, f.ILISTA17, f.ILISTA18,
  f.IMONEDA4, f.IMONEDA5, f.IMONEDA6, f.IMONEDA7, f.IMONEDA8, f.IMONEDA9,
  f.IMONEDA10, f.IMONEDA11, f.IMONEDA12, f.IMONEDA13, f.IMONEDA14, f.IMONEDA15,
  f.IMONEDA16, f.IMONEDA17, f.IMONEDA18,
  f.IARANCELEXP, f.IFACTORCCE, f.ICCPMPTIPO, f.ICCPMPCLAVE, f.ICCPMPEMBALAJE,
  f.IVARIOS1, f.IVARIOS2, f.IVARIOS3, f.IVARIOS4, f.IVARIOS5, f.IVARIOS6, f.IVARIOS7,
  f.IVARIOS8, f.IVARIOS9, f.IVARIOS10, f.IVARIOS11, f.IVARIOS12, f.IVARIOS13, f.IVARIOS14,
  f.IVARIOS15, f.IVARIOS16, f.IVARIOS17, f.IVARIOS18, f.IVARIOS19, f.IVARIOS20, f.IVARIOS21, f.IVARIOS22
FROM finv f
WHERE f.ICOD = ?
LIMIT 1;
```
Parámetro recomendado:
- `[code]`

### INV-009 (OK - Auxiliar / Kardex inventario)
Propósito: mapear movimientos del modal **Auxiliar** por `ICOD` desde `FINV + FAXINV + FDOC`, siguiendo el layout real validado en Omnis.
```sql
SELECT
  COALESCE(d.DFECHA, '1900-12-31') AS FECHA,
  COALESCE(d.DNUM, 0) AS DOCUMENTO,
  COALESCE(ai.AITIPMV, '') AS TM,
  CASE
    WHEN COALESCE(c.CIANOCOSTOS, 0) = 0 THEN COALESCE(ai.AICOSTO, 0)
    ELSE 0
  END AS COSTO,
  CASE
    WHEN COALESCE(ai.AICANT, 0) >= 0 THEN ABS(COALESCE(ai.AICANT, 0))
    ELSE 0
  END AS ENTRADAS,
  CASE
    WHEN COALESCE(ai.AICANT, 0) < 0 THEN ABS(COALESCE(ai.AICANT, 0))
    ELSE 0
  END AS SALIDAS,
  SUM(COALESCE(ai.AICANT, 0)) OVER (
    PARTITION BY ai.AIALMACEN
    ORDER BY COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS STOCK_ALM,
  LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') AS ALM,
  COALESCE(ai.AIPZAS, 0) AS PZAS,
  CAST(COALESCE(d.DRUTA, 0) AS UNSIGNED) AS RUTA,
  CASE
    WHEN COALESCE(d.DIUSEQ, 0) > 0 THEN COALESCE(ai.AIUSEQ, 0)
    ELSE COALESCE(d.DIUSEQ, 0)
  END AS USR,
  COALESCE(ai.AIREVAL, 0) AS REVAL,
  COALESCE(d.DREFERELLOS, '') AS DREFERELLOS
FROM finv i
INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
LEFT JOIN fdoc d ON d.DSEQ = ai.DSEQ
LEFT JOIN (SELECT CIANOCOSTOS FROM fcia LIMIT 1) c ON 1 = 1
WHERE i.ICOD = ?
  AND COALESCE(ai.AIMES, 0) = 1
  AND COALESCE(d.DEST, 0) = ?
  AND COALESCE(d.DMULTICIA, 0) = ?
ORDER BY COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC, ai.DSEQ ASC
LIMIT 1500;
```
Parámetro recomendado:
- `[code, dest, multicia]`

Filtro opcional por almacén (botón **Filtrar almacén** en modal Auxiliar):
```sql
... -- mismo SELECT de INV-009
WHERE i.ICOD = ?
  AND COALESCE(ai.AIMES, 0) = 1
  AND COALESCE(d.DEST, 0) = ?
  AND COALESCE(d.DMULTICIA, 0) = ?
  AND LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') = ?
ORDER BY COALESCE(d.DFECHA, '1900-12-31') ASC, ai.AISEQ ASC, ai.DSEQ ASC
LIMIT 1500;
```
Parámetros recomendados:
- `[code, dest, multicia, alm]` donde `alm` viene del valor visible en columna `Alm.` (ej. `01`).

Regla Omnis para **stock anterior** cuando se filtra por almacén:
```sql
SELECT fa.ALMCANT
FROM falm fa
WHERE fa.ALMKEY = CONCAT(RPAD(TRIM(?), 13, ' '), CAST(? AS CHAR))
LIMIT 1;
```
Con ese `ALMCANT`, el backend calcula:
- `stockAnterior = ALMCANT - SUM(AICANT)` sobre los renglones filtrados del auxiliar.
```sql
SELECT COALESCE(SUM(COALESCE(ai.AICANT, 0)), 0) AS TOTAL
FROM finv i
INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
WHERE i.ICOD = ?
  AND COALESCE(ai.AIMES, 0) = 1
  AND COALESCE(d.DEST, 0) = ?
  AND COALESCE(d.DMULTICIA, 0) = ?
  AND LPAD(CAST(COALESCE(ai.AIALMACEN, 0) AS CHAR), 2, '0') = ?;
```
Notas de implementación:
- Defaults operativos para Auxiliar: `DEST=0` y `DMULTICIA=1`.
- Si con ese contexto no hay filas, se aplica fallback sin filtro de compañía para no dejar el modal vacío.

### INV-010 (OK - Pedidos por cliente)
Propósito: poblar el modal **Pedidos por cliente** por `ICOD` usando `FINV + FPLIN + FPENC + FCLI` y omitir órdenes de compra (`PENUM` que inicia con `O`).
```sql
SELECT
  COALESCE(c.CLICOD, '') AS CODIGO,
  COALESCE(c.CLINOM, '') AS DESCRIPCION,
  COALESCE(p.PEDESDE, '1900-12-31') AS FECHA_E,
  COALESCE(p.PEVENCE, '1900-12-31') AS VENCE,
  COALESCE(p.PENUM, 0) AS NUM,
  COALESCE(pl.PLCANT, 0) AS PEDIDO,
  COALESCE(pl.PLSURT, 0) AS SURTIDO,
  (COALESCE(pl.PLCANT, 0) - COALESCE(pl.PLSURT, 0)) AS RESTA,
  COALESCE(pl.PLASIGNADO, 0) AS ASIGNADO,
  COALESCE(pl.PLPRECI, 0) AS PRECIO,
  COALESCE(p.PENUMELLOS, '') AS NUM_ELLOS,
  COALESCE(pl.PLASIGNPZAS, 0) AS PZAS,
  COALESCE(
    (
      SELECT fa.ALMNUM
      FROM falm fa
      WHERE fa.ISEQ = i.ISEQ
        AND (
          fa.ALMCDNUM = COALESCE(pl.PLSUC, -1)
          OR CAST(fa.ALMNUM AS UNSIGNED) = COALESCE(pl.PLSUC, -1)
        )
      ORDER BY (fa.ALMCDNUM = COALESCE(pl.PLSUC, -1)) DESC, fa.ALMNUM ASC
      LIMIT 1
    ),
    ''
  ) AS ALM,
  COALESCE(pl.PLFACTOR, 0) AS WMS
FROM finv i
INNER JOIN fplin pl ON pl.ISEQ = i.ISEQ
LEFT JOIN fpenc p ON p.PESEQ = pl.PESEQ
LEFT JOIN fcli c ON c.CLISEQ = pl.CLISEQ
WHERE i.ICOD = ?
  AND (p.PENUM IS NULL OR UPPER(p.PENUM) NOT LIKE 'O%')
ORDER BY COALESCE(p.PEDESDE, '1900-12-31') DESC, COALESCE(p.PENUM, 0) DESC, pl.PLSEQ DESC
LIMIT 1500;
```
Parámetro recomendado:
- `[code]`

### INV-011 (OK - Importación, Producción e Impuestos)
Propósito: mapear tabs **Importación**, **Producción** e **Impuestos** desde `FINV` en el detalle por código.
```sql
SELECT
  f.ICOD,
  f.IPEDIMENTO,
  f.IFECHAIMPORT,
  f.IADUANA,
  f.IARANCEL,
  f.IARANCELEXP,
  f.IPORCARANC,
  f.INOCAPAS,
  f.ILOTE,
  f.ITIEMPO,
  f.INECPRO,
  f.ITIPOTIEMPO,
  f.IFECHAENSAMBLE,
  f.IENSABLES,
  f.ISEGUNDAS,
  f.ITERCERAS,
  f.IREBAJAMINIMO,
  f.INOPRODUCTIVO,
  f.ITMVTS,
  f.ITMREC,
  f.IPORCIEPES,
  f.IPORCRETIVA,
  f.IPORCRETISR,
  f.IPORCIVA,
  f.IRETIVA,
  f.INOIVAENIEPS,
  f.IDONATIVO
FROM finv f
WHERE f.ICOD = ?
LIMIT 1;
```
Parámetro recomendado:
- `[code]`

### INV-012 (OK - Ventas por cliente)
Propósito: poblar el modal **Ventas por cliente** por `ICOD` agregando por cliente desde `FINV + FAXINV + FDOC + FCLI`.
```sql
SELECT
  COALESCE(cli.CLICOD, '') AS CODIGO,
  COALESCE(cli.CLINOM, '') AS CLIENTE,
  ROUND(SUM(COALESCE(ai.AICANTF, 0)), 2) AS CANTIDAD,
  ROUND(SUM(COALESCE(ai.AICANTF, 0) * COALESCE(ai.AIPRECIO, 0)), 2) AS IMPORTE
FROM finv i
INNER JOIN faxinv ai ON ai.ISEQ = i.ISEQ
INNER JOIN fdoc d ON d.DSEQ = ai.DSEQ
INNER JOIN fcli cli ON cli.CLISEQ = ai.CLISEQ
WHERE i.ICOD = ?
  AND COALESCE(ai.CLISEQ, 0) <> 0
  AND COALESCE(ai.AIMES, 0) = 1
  AND COALESCE(d.DESFACT, 0) = 1
  AND COALESCE(d.DOTROSTXT, '') <> 'POS'
  AND COALESCE(d.DCONTROLPOS, 0) = 0
GROUP BY cli.CLICOD, cli.CLINOM
ORDER BY cli.CLICOD ASC;
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

### 7.5 Mapeo modal Almacenes
- `CD` -> `FALM.ALMCDNUM`
- `Alm.` -> `FALM.ALMNUM`
- `Descripción` -> `FALMCAT.CATDESCR` (`LEFT JOIN` con `CATTIPO=''`)
- `Cant.` -> `FALM.ALMCANT`
- `Mín.` -> `FALM.ALMMINIMO`
- `Máx.` -> `FALM.ALMMAXIMO`
- `VEOL` -> `FALM.ALMVTAEOL`
- `Min tda` -> `FALM.ALMMINIMOENTDA`
- `Vta 6 s` -> `FALM.ALMVTA`
- `Pedido` -> `FALM.ALMPEDIDO`
- `Asign.` -> `FALM.ALMASIGNADO`
- `Físico` -> `FALM.ALMINVFIS`
- `I Conteo` -> `FALM.ALMFISICOINICIAL`
- `De tds` -> `FALM.ALMDETDAS`
- `A` -> `FALM.ALMACTIVO`
- `Tránsito` -> `FALM.ALMTRANSITO`
- `Alta` -> `FALM.ALMALTA`
- `Ult vta` -> `FALM.ALMULTIMAVTA`
- `Ord. Prv.` -> `FALM.ALMPRVOC`
- `Localización` -> `FALM.ALMLOCALIZ`
- `Vta. acum` -> `FALM.ALMTOTVTA`
- `S1..S5` -> `FALM.ALMVAFUTS1..ALMVAFUTS5`
- `S6` -> `FALM.ALMVTAFUT6`
- `Precio` -> `FALM.ALMPRECIO`
- `Tot Recs` -> `FALM.ALMTOTRECS`
- `Curva` -> `FALM.ALMCURVA`

## 8) SQLs con error / lecciones

### ERR-001
- Error: usar `FINV.UCOD` en lugar de `FINV.IUM`.
- Causa: asumir nombre por Omnis UI.
- Corrección: relación correcta es `FINV.IUM -> FUNIDAD.UCOD`.

### ERR-002
- Error: usar `FALM.ALMKEY` como join principal para API de almacenes.
- Causa: herencia del patrón Omnis por key compuesta.
- Corrección: en API nueva usar `FINV.ISEQ -> FALM.ISEQ` como relación principal; `ALMKEY` sólo como fallback legacy.

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
- 2026-04-20: agregados FALM/FALMCAT, relaciones R-003/R-004, INV-007 (modal Almacenes) y mapeo de columnas de Almacenes.
- 2026-04-21: ajustado INV-009 (Auxiliar) al layout real validado: `DOCUMENTO=DNUM`, `TM=AITIPMV`, costo condicionado por `FCIA.CIANOCOSTOS`, `DREFERELLOS` y orden descendente.
- 2026-04-21: agregadas tablas FPLIN/FPENC/FCLI, relaciones R-005/R-006/R-007 e INV-010 para modal Pedidos por cliente (incluye filtro para excluir `PENUM` que inicia con `O`).
- 2026-04-21: INV-010 ajustado para resolver `ALM` desde `FALM.ALMNUM` (priorizando match por `ALMCDNUM` y fallback por `ALMNUM` numérico).
- 2026-04-21: INV-010 ampliado con campo `VENCE` desde `FPENC.PEVENCE` para reutilizar endpoint en modal CT.
- 2026-04-21: renumerado SQL de Importación/Producción/Impuestos a INV-011 para evitar colisión de IDs.
- 2026-04-21: agregadas tablas FAXINV/FDOC/FCIA, relaciones R-008/R-009/R-010 e INV-012 para modal Ventas por cliente.
- 2026-04-29: INV-009 ampliado con filtro opcional por almacén (`alm`) y regla Omnis para `stock anterior` (`ALMCANT - SUM(AICANT)`).
- 2026-04-29: INV-009 refinado al comportamiento real validado: orden ascendente por fecha, `ALMCANT` por `ALMKEY`, suma con `JOIN FDOC`, defaults `DEST=0/DMULTICIA=1` y fallback sin compañía.
