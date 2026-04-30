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
