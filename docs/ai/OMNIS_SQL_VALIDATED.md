# Omnis SQL Validated

## Convencion
- `STATUS`: DRAFT | VALIDATED | ADJUSTED
- `SOURCE`: PDF/nota Omnis + fecha

---

## INV-SALES-BREAKDOWN-001
- STATUS: ADJUSTED (alineado a `EINV#38`, pendiente validación final visual/numérica)
- Endpoint: `GET /api/inventories/:code/sales-breakdown`
- Tablas: `finv`, `faxinv`, `fdoc`, `fcli`
- Claves:
  - `finv.ISEQ = faxinv.ISEQ`
  - `faxinv.DSEQ = fdoc.DSEQ`
  - `faxinv.CLISEQ = fcli.CLISEQ`
- Filtros actuales:
  - `i.ICOD = ?`
  - `COALESCE(ai.CLISEQ,0) <> 0`
  - `COALESCE(d.DEST,0) = ?`
  - `COALESCE(d.DMULTICIA,0) = ?`
  - `COALESCE(ai.AIMES,0)=1`
  - `COALESCE(d.DESFACT,0)=1`
  - `COALESCE(d.DOTROSTXT,'') <> 'POS'`
  - `COALESCE(d.DCONTROLPOS,0)=0`
- Orden actual:
  - `AISEQ DESC`
- Campos ajustados por `Define list` Omnis:
  - `CANTIDAD = AICANTF`
  - `PRECIO = AIPRECIO`
  - `PRECIO_US = AIPRECIO / DTIPOC2` (si `DTIPOC2=0`, entonces `0`)
  - `TC_DOLAR = DTIPOC2`
  - `OC = DREFERELLOS`
  - `SUCURSAL = DSUCURSAL`

## INV-CLIENT-ORDERS-001
- STATUS: ADJUSTED
- Endpoint: `GET /api/inventories/:code/orders-by-client?kind=orders|quotes`
- Tablas: `finv`, `fplin`, `fpenc`, `fcli`
- Claves:
  - `finv.ISEQ = fplin.ISEQ`
  - `fplin.PESEQ = fpenc.PESEQ`
  - `fplin.CLISEQ = fcli.CLISEQ`
- Filtros actuales:
  - `i.ICOD = ?`
  - `COALESCE(pl.CLISEQ,0) <> 0`
  - `COALESCE(p.PESPEDIDO,0) = 1` para pedidos
  - `COALESCE(p.PESPEDIDO,0) = 4` para cotizaciones
  - `UPPER(p.PENUM) NOT LIKE 'O%'`

## INV-EXT-DESCR-001
- STATUS: ADJUSTED
- Endpoint: `GET /api/inventories/:code`
- Uso UI: modal `Descr. ext.`
- Tablas: `finv`, `finv2`
- Claves:
  - `finv.ISEQ = finv2.I2KEY`
- Regla funcional:
  - el campo esperado para descripción extendida es `FINV2.I2DESCR`
  - `FINV.IDESCR` no debe usarse como fallback funcional
  - si la instalación legacy expone `FINV.I2DESCR` directamente, puede leerse desde `FINV`; en fallback estructural se usa `FINV2`
- SQL base documentado:
```sql
SELECT
  f.ICOD,
  f.IDESCR,
  f2.I2DESCR AS I2DESCR
FROM finv f
LEFT JOIN finv2 f2 ON f2.I2KEY = f.ISEQ
WHERE f.ICOD = ?
LIMIT 1;
```
