# Field Mapping Inventories

## Ventas desglosadas (actual)
- `Codigo` -> `code` -> `FCLI.CLICOD`
- `Nombre` -> `name` -> `FCLI.CLINOM`
- `Cantidad` -> `quantity` -> `FAXINV.AICANTF` (fallback `AICANT`)
- `Precio` -> `price` -> `FAXINV.AIPRECIO`
- `Doc.` -> `document` -> `FDOC.DNUM`
- `Fecha` -> `date` -> `FDOC.DFECHA`
- `Precio US` -> `unitPrice` -> `FAXINV.AIPRECIO / FDOC.DTIPOC2` (si `DTIPOC2=0`, usar `0`)
- `TC Dolar` -> `dollarExchangeRate` -> `FDOC.DTIPOC2`
- `% Desc` -> `discountPercent` -> `FAXINV.AIDESCTO`
- `OC` -> `purchaseOrder` -> `FDOC.DREFERELLOS` fallback `FDOC.DREFER`
- `Sucursal` -> `branch` -> `FAXINV.AISUCURSAL`
- `Pzas` -> `pieces` -> `FAXINV.AIPZAS`
