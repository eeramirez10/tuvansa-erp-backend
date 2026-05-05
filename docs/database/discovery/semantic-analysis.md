# Legacy Semantic Analysis (Manual SQL + IA interpretación)

- Generated at: 2026-04-30T20:19:23.638Z
- Schema: `tuvansa`
- Objetivo: comprender entidades, relaciones funcionales y semántica por módulo.

## 1) Mapa de módulos (interpretación actual)

- `Inventarios`: `finv`, `falm`, `falmcat`, `funidad`, `flotes`, `fskus`.
- `Ventas / Movimientos`: `fdoc`, `fax`, `faxinv`, `ftipmv`, `fpenc`, `fplin`.
- `Compras`: `fprv`, `fpenc` (cuando es compras), `fplin` (líneas), `fdoc` (algunos tipos).
- `Contabilidad / Bancos`: `fbanmov`, `fbenc`, `fcuentas`, `fpoliza`.
- `Catálogos`: `fcli` clientes, `fprv` proveedores, `funidad` unidades, `falmcat` almacenes.

## 2) Tamaño de tablas clave

| Table | Rows |
|---|---:|
| falm | 38279 |
| falmcat | 327 |
| fax | 611842 |
| faxinv | 705495 |
| fbanmov | 1752462 |
| fbenc | 1589 |
| fcli | 8563 |
| fcuentas | 0 |
| fdoc | 351764 |
| finv | 47468 |
| flotes | 21464 |
| fpenc | 200712 |
| fplin | 761389 |
| fprv | 7619 |
| ftipmv | 257 |
| funidad | 12 |

## 3) Claves y columnas estructurales (tabla enfocada)

| Table | Column | Key | Type |
|---|---|---|---|
| falm | ALMNUM | MUL | varchar(6) |
| falm | ALMSEQ | PRI | int |
| falm | ISEQ | MUL | int |
| falmcat | CATALM | MUL | varchar(6) |
| falmcat | CATSEQ | PRI | int |
| fax | ASEQ | PRI | int |
| fax | AUSEQ |  | int |
| fax | BASEQ | MUL | int |
| fax | CLISEQ | MUL | int |
| fax | DSEQ | MUL | int |
| fax | PRVSEQ | MUL | int |
| faxinv | AISEQ | PRI | int |
| faxinv | AIUSEQ |  | int |
| faxinv | CLISEQ | MUL | int |
| faxinv | DSEQ | MUL | int |
| faxinv | ISEQ | MUL | int |
| faxinv | LOSEQ | MUL | int |
| faxinv | PRVSEQ | MUL | int |
| fbanmov | BACOPXMLSEQ |  | int |
| fbanmov | BASEQ | PRI | int |
| fbanmov | BSEQ | MUL | int |
| fbanmov | POSEQ | MUL | int |
| fbanmov | PRVSEQ | MUL | int |
| fbenc | BSEQ | PRI | int |
| fcli | CLICOD | MUL | varchar(6) |
| fcli | CLILASTDSEQ |  | int |
| fcli | CLISEQ | PRI | int |
| fcuentas | BSEQ | MUL | int |
| fcuentas | CUENSEQ | PRI | int |
| fdoc | CLISEQ | MUL | int |
| fdoc | DIUSEQ |  | int |
| fdoc | DSEQ | PRI | int |
| fdoc | PRVSEQ | MUL | int |
| finv | ICOD | MUL | varchar(13) |
| finv | ICODPRV | MUL | varchar(16) |
| finv | IPRV | MUL | varchar(6) |
| finv | ISEQ | PRI | int |
| finv | IUM |  | varchar(3) |
| finv | IUSEQ |  | int |
| finv | USEQ | MUL | int |
| flotes | ISEQ | MUL | int |
| flotes | LOSEQ | PRI | int |
| fpenc | CLISEQ | MUL | int |
| fpenc | PESEQ | PRI | int |
| fpenc | PRVSEQ | MUL | int |
| fplin | CLISEQ | MUL | int |
| fplin | ISEQ | MUL | int |
| fplin | PESEQ | MUL | int |
| fplin | PLSEQ | PRI | int |
| fplin | PRVSEQ | MUL | int |
| fprv | PRVCOD | MUL | varchar(6) |
| fprv | PRVSEQ | PRI | int |
| ftipmv | TISEQ | PRI | int |
| funidad | USEQ | PRI | int |

## 4) Relaciones verificadas por cobertura

| Relación | With key | Matched | Match % (sobre with key) | Nota |
|---|---:|---:|---:|---|
| finv.IUM -> funidad.UCOD | 49999 | 49994 | 99.99% | Unidad del producto |
| finv.ICODPRV -> fprv.PRVCOD | 15474 | 0 | 0.00% | Proveedor principal por código |
| finv.IPRV -> fprv.PRVCOD | 15218 | 14232 | 93.52% | Proveedor alterno por código corto |
| falm.ISEQ -> finv.ISEQ | 39357 | 39357 | 100.00% | Stock por producto y almacén |
| falm.ALMNUM -> falmcat.CATALM | 39360 | 37554 | 95.41% | Nombre/descripción de almacén |
| faxinv.ISEQ -> finv.ISEQ | 49997 | 49997 | 100.00% | Movimiento de producto |
| faxinv.DSEQ -> fdoc.DSEQ | 49999 | 49998 | 100.00% | Cabecera del movimiento |
| faxinv.CLISEQ -> fcli.CLISEQ | 0 | 0 | 0.00% | Cliente relacionado al movimiento |
| faxinv.PRVSEQ -> fprv.PRVSEQ | 0 | 0 | 0.00% | Proveedor relacionado al movimiento |
| fplin.PESEQ -> fpenc.PESEQ | 49925 | 49925 | 100.00% | Línea pertenece a pedido |
| fplin.ISEQ -> finv.ISEQ | 49960 | 49960 | 100.00% | Producto de la línea |
| fplin.CLISEQ -> fcli.CLISEQ | 0 | 0 | 0.00% | Cliente de la línea |
| fplin.PRVSEQ -> fprv.PRVSEQ | 0 | 0 | 0.00% | Proveedor de la línea |
| fdoc.CLISEQ -> fcli.CLISEQ | 0 | 0 | 0.00% | Documento de cliente |
| fdoc.PRVSEQ -> fprv.PRVSEQ | 0 | 0 | 0.00% | Documento de proveedor |
| fax.DSEQ -> fdoc.DSEQ | 50000 | 50000 | 100.00% | Movimiento apunta a documento |
| fax.CLISEQ -> fcli.CLISEQ | 0 | 0 | 0.00% | Movimiento apunta a cliente |
| fax.PRVSEQ -> fprv.PRVSEQ | 0 | 0 | 0.00% | Movimiento apunta a proveedor |

## 5) Reglas prácticas para deducir SQL en este proyecto

- `ISEQ` es el pivote más estable para producto (`finv`).
- `DSEQ` conecta cabecera de documento (`fdoc`) con movimientos (`fax`, `faxinv`).
- `PESEQ` conecta pedido encabezado (`fpenc`) con líneas (`fplin`).
- `CLISEQ` y `PRVSEQ` suelen ser llaves de cliente/proveedor por secuencia.
- En inventarios, para etiqueta de almacén usar `falm.ALMNUM -> falmcat.CATALM`.
- Para unidad legible de producto usar `finv.IUM -> funidad.UCOD`.
- Para proveedor operativo en inventarios usar preferentemente `finv.IPRV -> fprv.PRVCOD`.

## 6) Muestras SQL reales (LIMIT 10)

### inventories_core

```json
[
  {
    "ISEQ": 69373,
    "ICOD": "01151765",
    "IDESCR": "TEE REDUCIDA ACERO SW 420 KGS. DE 019 X 013 MM ( 3/4\" X  1/2",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69372,
    "ICOD": "01151764",
    "IDESCR": "MEDIO COPLE ROSCADO DE ACERO T304 210 KG. DE 013 MM. ( 1/2\"",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "MEDIO",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69371,
    "ICOD": "01151763",
    "IDESCR": "BRIDA DE ACERO INOX T304 CON CUELLO CARA REALZ. 10.5 K DE 35",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "BRIDA",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69370,
    "ICOD": "01151762",
    "IDESCR": "RED CONCENTRICA ACERO P/ SOLDAR  CED 160 DE 51 X 032 MM ( 2\"",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "RED",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69369,
    "ICOD": "01151761",
    "IDESCR": "TEE REDUCIDA ACERO P/ SOLDAR  CED 40 DE 076 X 032 MM ( 3\" X",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69368,
    "ICOD": "01151760",
    "IDESCR": "TEE REDUCIDA ACERO P/ SOLDAR  CED 160 DE 064 X 032 MM ( 2 1/",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69367,
    "ICOD": "01151759",
    "IDESCR": "TEE REDUCIDA ACERO P/ SOLDAR  CED 160 DE 076 X 051 MM ( 3\" X",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69366,
    "ICOD": "01151758",
    "IDESCR": "TEE REDUCIDA ACERO P/ SOLDAR  CED 160 DE 064 X 038 MM ( 2 1/",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69365,
    "ICOD": "01151757",
    "IDESCR": "TEE REDUCIDA ACERO P/ SOLDAR  ESTANDAR DE 032 X 025 MM ( 11/",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "TEE",
    "IPRV": "011",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "ISEQ": 69364,
    "ICOD": "05414014",
    "IDESCR": "VALV. ALARMA VICTAULIC FIGURA 751 DE 203 MM. CON TRIM (8\")",
    "IUM": "PZ",
    "UNIDAD": "PIEZA",
    "ICODPRV": "VALV.",
    "IPRV": "054",
    "PRVCOD": null,
    "PRVNOM": null
  }
]
```

### inventories_warehouse

```json
[
  {
    "ICOD": "03-08388105",
    "ALMNUM": "003",
    "ALM_DESC": null,
    "ALMCANT": "0.000",
    "ALMPEDIDO": "0.00"
  },
  {
    "ICOD": "05414014",
    "ALMNUM": "05",
    "ALM_DESC": "SUC. QUERETARO",
    "ALMCANT": "0.000",
    "ALMPEDIDO": "2.00"
  },
  {
    "ICOD": "06207507",
    "ALMNUM": "06",
    "ALM_DESC": "SUC. CANCUN",
    "ALMCANT": "0.000",
    "ALMPEDIDO": "1.00"
  },
  {
    "ICOD": "03-03292200",
    "ALMNUM": "003",
    "ALM_DESC": null,
    "ALMCANT": "0.000",
    "ALMPEDIDO": "0.00"
  },
  {
    "ICOD": "03-03292204",
    "ALMNUM": "003",
    "ALM_DESC": null,
    "ALMCANT": "0.000",
    "ALMPEDIDO": "0.00"
  },
  {
    "ICOD": "05511794",
    "ALMNUM": "05",
    "ALM_DESC": "SUC. QUERETARO",
    "ALMCANT": "0.000",
    "ALMPEDIDO": "3.00"
  },
  {
    "ICOD": "03-26330110",
    "ALMNUM": "003",
    "ALM_DESC": null,
    "ALMCANT": "0.000",
    "ALMPEDIDO": "0.00"
  },
  {
    "ICOD": "03-23656202",
    "ALMNUM": "03",
    "ALM_DESC": "SUC. VERACRUZ",
    "ALMCANT": "3.000",
    "ALMPEDIDO": "0.00"
  },
  {
    "ICOD": "03-20575911",
    "ALMNUM": "03",
    "ALM_DESC": "SUC. VERACRUZ",
    "ALMCANT": "0.000",
    "ALMPEDIDO": "2.00"
  },
  {
    "ICOD": "03-24646400",
    "ALMNUM": "03",
    "ALM_DESC": "SUC. VERACRUZ",
    "ALMCANT": "0.000",
    "ALMPEDIDO": "0.00"
  }
]
```

### sales_documents

```json
[
  {
    "DSEQ": 403965,
    "DNUM": "AN0004421",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "2026-04-30T00:00:00.000Z",
    "DTIPOC2": "17.49480000",
    "DEST": 0,
    "CLICOD": "000176",
    "CLINOM": "PYCSUR, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403964,
    "DNUM": "GE08491",
    "DFECHA": "2026-04-23T00:00:00.000Z",
    "DVENCE": "2026-04-23T00:00:00.000Z",
    "DTIPOC2": "17.40300000",
    "DEST": 0,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "000043",
    "PRVNOM": "ALL KOPIER DVA SA DE CV"
  },
  {
    "DSEQ": 403963,
    "DNUM": "RA10458",
    "DFECHA": "2026-04-27T00:00:00.000Z",
    "DVENCE": "2026-05-27T00:00:00.000Z",
    "DTIPOC2": "17.40520000",
    "DEST": 0,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "30007A",
    "PRVNOM": "POTENCIA FLUIDA, S.A. DE C.V."
  },
  {
    "DSEQ": 403962,
    "DNUM": "FC13770",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "2026-04-30T00:00:00.000Z",
    "DTIPOC2": "17.35930000",
    "DEST": 0,
    "CLICOD": "004371",
    "CLINOM": "GMG INGENIERIA ELECTROMECANICA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403961,
    "DNUM": "FB43759",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "2026-04-30T00:00:00.000Z",
    "DTIPOC2": "17.49480000",
    "DEST": 0,
    "CLICOD": "009193",
    "CLINOM": "CARLOS EMILIANO ZAPATA HERNANDEZ",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403960,
    "DNUM": "IZ0062722",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "1900-12-31T00:00:00.000Z",
    "DTIPOC2": "0.00000000",
    "DEST": 0,
    "CLICOD": "002632",
    "CLINOM": "CONTROL Y SUPRESION DE INCENDIO, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403959,
    "DNUM": "RA10457",
    "DFECHA": "2026-04-28T00:00:00.000Z",
    "DVENCE": "2026-05-28T00:00:00.000Z",
    "DTIPOC2": "17.40520000",
    "DEST": 0,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "30205",
    "PRVNOM": "CONTUBRI, S.A. DE C.V."
  },
  {
    "DSEQ": 403958,
    "DNUM": "2C0434",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "1900-12-31T00:00:00.000Z",
    "DTIPOC2": "0.00000000",
    "DEST": 0,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403957,
    "DNUM": "FX00495",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "2026-04-30T00:00:00.000Z",
    "DTIPOC2": "17.49480000",
    "DEST": 0,
    "CLICOD": "009005",
    "CLINOM": "FYFSO INSTALACIONES, SAS DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "DSEQ": 403956,
    "DNUM": "AF0003257",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "DVENCE": "2026-04-30T00:00:00.000Z",
    "DTIPOC2": "17.32000000",
    "DEST": 0,
    "CLICOD": "008796",
    "CLINOM": "LITRA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  }
]
```

### sales_movements

```json
[
  {
    "AISEQ": 715602,
    "DSEQ": 403965,
    "ISEQ": 17452,
    "AITIPMV": "AN",
    "AICANT": "0.000",
    "AICANTF": "-1.000",
    "AIPRECIO": "2451.81030",
    "AICOSTO": "0.00000",
    "DNUM": "AN0004421",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "ICOD": "ZANTICIPOC",
    "IDESCR": "APLICACION DE ANTICIPO"
  },
  {
    "AISEQ": 715601,
    "DSEQ": 403964,
    "ISEQ": 46797,
    "AITIPMV": "GE",
    "AICANT": "1.000",
    "AICANTF": "1.000",
    "AIPRECIO": "1129.00000",
    "AICOSTO": "1129.00000",
    "DNUM": "GE08491",
    "DFECHA": "2026-04-23T00:00:00.000Z",
    "ICOD": "6003402005",
    "IDESCR": "ARRENDAMIENTO EQPO COMPUTO"
  },
  {
    "AISEQ": 715600,
    "DSEQ": 403963,
    "ISEQ": 3632,
    "AITIPMV": "RA",
    "AICANT": "12.000",
    "AICANTF": "12.000",
    "AIPRECIO": "81.92000",
    "AICOSTO": "81.92000",
    "DNUM": "RA10458",
    "DFECHA": "2026-04-27T00:00:00.000Z",
    "ICOD": "01202684",
    "IDESCR": "CODO DE HIERRO MALEABLE 21 KGS. DE 032 MM. (1 1/4\" X 90o 300"
  },
  {
    "AISEQ": 715599,
    "DSEQ": 403962,
    "ISEQ": 22119,
    "AITIPMV": "FC",
    "AICANT": "-12.800",
    "AICANTF": "12.800",
    "AIPRECIO": "1308.55000",
    "AICOSTO": "934.39420",
    "DNUM": "FC13770",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "ICOD": "03-00852500",
    "IDESCR": "TCC840 -1- TUBO A.C C/C 8\" CED 40"
  },
  {
    "AISEQ": 715598,
    "DSEQ": 403962,
    "ISEQ": 22111,
    "AITIPMV": "FC",
    "AICANT": "-19.200",
    "AICANTF": "19.200",
    "AIPRECIO": "937.65000",
    "AICOSTO": "679.78190",
    "DNUM": "FC13770",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "ICOD": "03-00850310",
    "IDESCR": "TCC640 -1- TUBO A.C C/C 6\" CED 40"
  },
  {
    "AISEQ": 715597,
    "DSEQ": 403962,
    "ISEQ": 23965,
    "AITIPMV": "FC",
    "AICANT": "-8.000",
    "AICANTF": "8.000",
    "AIPRECIO": "708.09105",
    "AICOSTO": "507.60130",
    "DNUM": "FC13770",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "ICOD": "03-04759000",
    "IDESCR": "CSW690ORL - CODO A. P/SOLD RL 90o 6\" SW"
  },
  {
    "AISEQ": 715596,
    "DSEQ": 403961,
    "ISEQ": 34016,
    "AITIPMV": "FB",
    "AICANT": "-5.000",
    "AICANTF": "5.000",
    "AIPRECIO": "389.85237",
    "AICOSTO": "311.88490",
    "DNUM": "FB43759",
    "DFECHA": "2026-04-30T00:00:00.000Z",
    "ICOD": "02212367",
    "IDESCR": "C490OF001E -2- CODO VICT 4\"x90o F 001"
  },
  {
    "AISEQ": 715595,
    "DSEQ": 403959,
    "ISEQ": 46218,
    "AITIPMV": "RA",
    "AICANT": "2.000",
    "AICANTF": "2.000",
    "AIPRECIO": "628.15367",
    "AICOSTO": "628.15367",
    "DNUM": "RA10457",
    "DFECHA": "2026-04-28T00:00:00.000Z",
    "ICOD": "01212708",
    "IDESCR": "BRIDA DE ACERO CIEGA CARA REALZADA 10.5 K DE 203 MM. (150 LB"
  },
  {
    "AISEQ": 715594,
    "DSEQ": 403959,
    "ISEQ": 1349,
    "AITIPMV": "RA",
    "AICANT": "6.000",
    "AICANTF": "6.000",
    "AIPRECIO": "262.29636",
    "AICOSTO": "262.29636",
    "DNUM": "RA10457",
    "DFECHA": "2026-04-28T00:00:00.000Z",
    "ICOD": "01200401",
    "IDESCR": "BRIDA DE ACERO CAJA SOLDAR CARA REALZ. 10.5 K DE 051 MM. B. "
  },
  {
    "AISEQ": 715593,
    "DSEQ": 403959,
    "ISEQ": 1714,
    "AITIPMV": "RA",
    "AICANT": "6.000",
    "AICANTF": "6.000",
    "AIPRECIO": "307.54988",
    "AICOSTO": "307.54988",
    "DNUM": "RA10457",
    "DFECHA": "2026-04-28T00:00:00.000Z",
    "ICOD": "01200766",
    "IDESCR": "BRIDA DE ACERO CON CUELLO CARA REALZ. 10.5 K DE 102 MM. B. S"
  }
]
```

### orders_lines

```json
[
  {
    "PLSEQ": 821145,
    "PESEQ": 210001,
    "PLTIPMV": "PE",
    "ISEQ": 22119,
    "PLCANT": "12.800",
    "PLSURT": "12.800",
    "PLASIGNADO": "0.000",
    "PENUM": "PE13055",
    "PEDESDE": "2026-04-10T00:00:00.000Z",
    "PEVENCE": "2026-04-15T00:00:00.000Z",
    "ICOD": "03-00852500",
    "IDESCR": "TCC840 -1- TUBO A.C C/C 8\" CED 40"
  },
  {
    "PLSEQ": 821144,
    "PESEQ": 210001,
    "PLTIPMV": "PE",
    "ISEQ": 22111,
    "PLCANT": "19.200",
    "PLSURT": "19.200",
    "PLASIGNADO": "0.000",
    "PENUM": "PE13055",
    "PEDESDE": "2026-04-10T00:00:00.000Z",
    "PEVENCE": "2026-04-15T00:00:00.000Z",
    "ICOD": "03-00850310",
    "IDESCR": "TCC640 -1- TUBO A.C C/C 6\" CED 40"
  },
  {
    "PLSEQ": 821143,
    "PESEQ": 210001,
    "PLTIPMV": "PE",
    "ISEQ": 23965,
    "PLCANT": "8.000",
    "PLSURT": "8.000",
    "PLASIGNADO": "0.000",
    "PENUM": "PE13055",
    "PEDESDE": "2026-04-10T00:00:00.000Z",
    "PEVENCE": "2026-04-15T00:00:00.000Z",
    "ICOD": "03-04759000",
    "IDESCR": "CSW690ORL - CODO A. P/SOLD RL 90o 6\" SW"
  },
  {
    "PLSEQ": 821142,
    "PESEQ": 210000,
    "PLTIPMV": "PB",
    "ISEQ": 19092,
    "PLCANT": "21.000",
    "PLSURT": "0.000",
    "PLASIGNADO": "21.000",
    "PENUM": "PB35240",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "02208134",
    "IDESCR": "TAC4SW -2- TAPON CAPA A. P/SOLD 4\" SW"
  },
  {
    "PLSEQ": 821141,
    "PESEQ": 209999,
    "PLTIPMV": "XB",
    "ISEQ": 19092,
    "PLCANT": "21.000",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XB12984",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "02208134",
    "IDESCR": "TAC4SW -2- TAPON CAPA A. P/SOLD 4\" SW"
  },
  {
    "PLSEQ": 821140,
    "PESEQ": 209998,
    "PLTIPMV": "XC",
    "ISEQ": 21458,
    "PLCANT": "12.400",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "03-00009200",
    "IDESCR": "TSC440 -2- TUBO A.C. S/C 4\" CED 40"
  },
  {
    "PLSEQ": 821139,
    "PESEQ": 209998,
    "PLTIPMV": "XC",
    "ISEQ": 21485,
    "PLCANT": "6.200",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "03-00012400",
    "IDESCR": "TSC640 -2- TUBO A.C. S/C 6\" CED 40"
  },
  {
    "PLSEQ": 821138,
    "PESEQ": 209998,
    "PLTIPMV": "XC",
    "ISEQ": 23959,
    "PLCANT": "5.000",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "03-04758400",
    "IDESCR": "CSW290ORL - CODO A. P/SOLD RL 90o 2\" SW"
  },
  {
    "PLSEQ": 821137,
    "PESEQ": 209998,
    "PLTIPMV": "XC",
    "ISEQ": 23961,
    "PLCANT": "2.000",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "03-04758600",
    "IDESCR": "CSW390ORL - CODO A. P/SOLD RL 90o 3\" SW"
  },
  {
    "PLSEQ": 821136,
    "PESEQ": 209998,
    "PLTIPMV": "XC",
    "ISEQ": 23963,
    "PLCANT": "4.000",
    "PLSURT": "0.000",
    "PLASIGNADO": "0.000",
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "ICOD": "03-04758800",
    "IDESCR": "CSW490ORL - CODO A. P/SOLD RL 90o 4\" SW"
  }
]
```

### accounting_bank

```json
[
  {
    "BASEQ": 2230204,
    "BSEQ": 6657,
    "POSEQ": 572219,
    "PRVSEQ": 0,
    "BCOD": "1105001",
    "BNOMBRE": "CLIENTES NACIONALES",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230203,
    "BSEQ": 6657,
    "POSEQ": 572219,
    "PRVSEQ": 0,
    "BCOD": "1105001",
    "BNOMBRE": "CLIENTES NACIONALES",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230202,
    "BSEQ": 6647,
    "POSEQ": 572219,
    "PRVSEQ": 0,
    "BCOD": "1102400007",
    "BNOMBRE": "SANTANDER CTA82500291816( MLI )Dlls",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230201,
    "BSEQ": 6918,
    "POSEQ": 572218,
    "PRVSEQ": 0,
    "BCOD": "2007001",
    "BNOMBRE": "IVA TRASLADADO",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230200,
    "BSEQ": 6916,
    "POSEQ": 572218,
    "PRVSEQ": 0,
    "BCOD": "2006001",
    "BNOMBRE": "ANTICIPO DE CLIENTES NACIONALES",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230199,
    "BSEQ": 6657,
    "POSEQ": 572218,
    "PRVSEQ": 0,
    "BCOD": "1105001",
    "BNOMBRE": "CLIENTES NACIONALES",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230198,
    "BSEQ": 0,
    "POSEQ": 572217,
    "PRVSEQ": 0,
    "BCOD": null,
    "BNOMBRE": null,
    "BALTA": null,
    "PRVNOM": null
  },
  {
    "BASEQ": 2230197,
    "BSEQ": 7052,
    "POSEQ": 572217,
    "PRVSEQ": 0,
    "BCOD": "5001001",
    "BNOMBRE": "COSTO DE VENTA",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230196,
    "BSEQ": 6748,
    "POSEQ": 572217,
    "PRVSEQ": 0,
    "BCOD": "1115002",
    "BNOMBRE": "ALMACÉN MONTERREY",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  },
  {
    "BASEQ": 2230195,
    "BSEQ": 7032,
    "POSEQ": 572217,
    "PRVSEQ": 0,
    "BCOD": "4001001",
    "BNOMBRE": "VENTAS GRAVADAS A LA TASA 16%",
    "BALTA": "1900-12-31T00:00:00.000Z",
    "PRVNOM": null
  }
]
```

## 7) Inferencia de prefijos (ventas/compras)

### FPENC (encabezado pedido)
| Prefijo PENUM | Total | Con cliente | Con proveedor |
|---|---:|---:|---:|
| P | 93281 | 93276 | 0 |
| X | 91118 | 91077 | 0 |
| O | 22410 | 2 | 22407 |
| F | 19 | 19 | 0 |
| 1 | 14 | 14 | 0 |
| Z | 5 | 5 | 0 |
| Q | 2 | 1 | 1 |
| 2 | 2 | 0 | 2 |
| | | 1 | 1 | 0 |
| S | 1 | 1 | 0 |
| 9 | 1 | 1 | 0 |
| D | 1 | 1 | 0 |
| (vacío) | 1 | 1 | 0 |
| C | 1 | 1 | 0 |
| 4 | 1 | 1 | 0 |
| / | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 |
| Ñ | 1 | 1 | 0 |

### FPLIN (líneas)
| Prefijo PLTIPMV | Total | Con cliente | Con proveedor |
|---|---:|---:|---:|
| X | 390998 | 390994 | 0 |
| P | 308417 | 308366 | 0 |
| O | 66846 | 3 | 66841 |
| (vacío) | 5449 | 0 | 5424 |
| F | 148 | 148 | 0 |
| 1 | 24 | 24 | 0 |
| Z | 8 | 8 | 0 |
| D | 2 | 2 | 0 |
| Ñ | 2 | 2 | 0 |
| Q | 1 | 0 | 1 |

### FDOC (documentos)
| Prefijo DNUM | Total | Con cliente | Con proveedor |
|---|---:|---:|---:|
| F | 115042 | 114933 | 101 |
| G | 109368 | 0 | 109295 |
| I | 62716 | 62703 | 3 |
| R | 39895 | 0 | 39895 |
| N | 19479 | 15 | 19462 |
| A | 9308 | 7815 | 43 |
| 6 | 6909 | 8 | 3 |
| E | 5798 | 0 | 11 |
| C | 4633 | 4437 | 126 |
| S | 4221 | 2 | 303 |
| 1 | 3675 | 121 | 188 |
| 7 | 3539 | 0 | 16 |
| 2 | 3320 | 1 | 5 |
| 3 | 2801 | 0 | 32 |
| 5 | 2678 | 1 | 1 |
| D | 2348 | 2286 | 17 |
| B | 2103 | 0 | 7 |
| 8 | 1077 | 4 | 3 |
| 4 | 898 | 0 | 13 |
| H | 671 | 0 | 3 |
| M | 496 | 5 | 491 |
| P | 333 | 3 | 328 |
| 9 | 299 | 0 | 1 |
| L | 56 | 0 | 0 |
| T | 30 | 0 | 0 |

Interpretación base: `P/X` tienden a cliente; `O*` tienden a compras/proveedor.

## 8) Uso real por módulo de movimiento (`faxinv` + `ftipmv`)

| TIMODULO | Registros |
|---|---:|
| 4 | 294319 |
| 7 | 219512 |
| 2 | 109344 |
| 0 | 79783 |
| 9 | 9957 |
| 3 | 3001 |
| -1 | 1 |
| 10 | 1 |

### Top tipos
| AITIPMV | TIMODULO | Descripción | Registros |
|---|---:|---|---:|
| FB | 4 | REMISION MTY | 93900 |
| FA | 4 | REMISION MEXICO | 72093 |
| K | 0 | CANCELACION | 61783 |
| GA | 7 | GASTOS MEX | 54543 |
| FD | 4 | REMISION MLI | 45794 |
| FC | 4 | REMISION VER | 34101 |
| GB | 7 | GASTOS MTY | 23914 |
| RA | 7 | NOTA DE ENTRADA | 23909 |
| FZ | 4 | REMISION QUERETARO | 21795 |
| GC | 7 | GASTOS VER | 20889 |
| RB | 7 | RECEPCION DE MERCANCIA MTY | 15235 |
| GD | 7 | GASTOS MLI | 13302 |
| GE | 7 | GASTOS QRO | 12616 |
| FV | 4 | REMISION CANCUN | 11687 |
| CT | 0 | CARTA PORTE | 10754 |
| 3 | 9 | POLIZA DE DIARIO | 9940 |
| RD | 7 | RECEPCION DE MERCANCIA MLI | 9404 |
| 6E | 2 | TRASPASO MEX-QRO | 8413 |
| 5A | 2 | TRASPASO MEX-QRO | 8381 |
| RE | 7 | RECEPCION DE MERCANCIA QRO | 7588 |
| EI | 2 | ENTRADA DE INVENTARIO | 7524 |
| R | 7 | RECEPCION DE MERCANCIA VER | 7300 |
| RF | 7 | RECEPCION DE MERCANCIA CAN | 7214 |
| 6A | 2 | TRASPASO DE SALIDA MEX-MEX | 6503 |
| GF | 7 | GASTOS CAN | 6008 |
| GN | 7 | GASTOS NO DEDUCIBLES MEX | 5061 |
| IF | 0 | INVENTARIO FISICO | 4246 |
| 6C | 2 | TRASPASO MEX-VER | 4023 |
| 3A | 2 | TRASPASO MEX-VER | 4003 |
| AN | 4 | NOTA CREDITO ANTICIPO CLIENTES | 3996 |
| SI | 2 | SALIDA DE INVENTARIO | 3857 |
| 2M | 2 | ENTRADA POR MAQUILA MTY | 3758 |
| ED | 2 | ENTRADA DE INVENTARIO MLI | 3711 |
| EB | 2 | ENTRADA DE INVENTARIO MTY | 3613 |
| SB | 2 | SALIDA DE INVENTARIO MTY | 3533 |
| GI | 7 | GASTOS DE NOMINA | 3422 |
| BM | 2 | SALIDA POR MAQUILA MTY | 3067 |
| (vacío) | 3 | COTIZACION | 3000 |
| (vacío) | 0 |  | 3000 |
| EC | 2 | ENTRADA DE INVENTARIO VER | 2774 |
| 7A | 2 | TRASPASO MTY-MEX | 2764 |
| GO | 7 | GASTOS NO DEDUCIBLES MTY | 2664 |
| 1B | 2 | TRASPASO MTY-MEX | 2644 |
| AF | 4 | FACTURA DE ANTICIPOS | 2597 |
| 7C | 2 | TRASPASO MTY-VER | 2557 |
| 3B | 2 | TRASPASO MTY-VER | 2428 |
| SD | 2 | SALIDA DE INVENTARIO MLI | 2378 |
| DA | 4 | NOTA DE DEVOLUCION MEX | 2363 |
| 2A | 2 | TRASPASO MEX-MTY | 2221 |
| 6B | 2 | TRASPASO MEX-MTY | 2134 |
| 1M | 2 | ENTRADA POR MAQUILA MEX | 1675 |
| AM | 2 | SALIDA POR MAQUILA MEX | 1661 |
| 7D | 2 | TRASPASO MTY-MLI | 1654 |
| FX | 4 | REMISION CABOS | 1496 |
| 4B | 2 | TRASPASO MTY-MLI | 1494 |
| SC | 2 | SALIDA DE INVENTARIO VER | 1481 |
| 5B | 2 | TRASPASO MTY-QRO | 1382 |
| 7E | 2 | TRASPASO MTY-QRO | 1357 |
| GP | 7 | GASTOS NO DEDUCIBLES VER | 1280 |
| DB | 4 | NOTA DE DEVOLUCION MTY | 1233 |
| 6F | 2 | TRASPASO MEX-CAN | 1082 |
| BA | 2 | TRASPASO MEX-CAN | 1079 |
| RG | 7 | RECEPCION DE MERCANCIA CAB | 969 |
| 7B | 2 | SALIDA HACIA ALM RESGUARDO | 936 |
| 2C | 2 | TRASPASO VER-MTY | 867 |
| 8B | 2 | TRASPASO VER-MTY | 827 |
| DD | 4 | NOTA DE DEVOLUCION MLI | 786 |
| GR | 7 | GASTOS NO DEDUCIBLES QRO | 745 |
| 8A | 2 | TRASPASO VER-MEX | 721 |
| 1C | 2 | TRASPASO VER-MEX | 719 |
| HM | 2 | SALIDA POR CAM. MATERIAL MEX | 692 |
| 7M | 2 | ENTRADA POR CAM. MATERIAL MEX | 655 |
| EM | 2 | ENTRADA POR MAQUILA | 628 |
| 6D | 2 | TRASPASO MEX-MLI | 626 |
| 4A | 2 | TRASPASO MEX-MLI | 622 |
| GQ | 7 | GASTOS NO DEDUCIBLES MLI | 609 |
| SM | 2 | SALIDA POR MAQUILA MEX | 588 |
| AA | 2 | TRASPASO QRO-MEX | 571 |
| 1E | 2 | TRASPASO QRO-MEX | 556 |
| HA | 2 | TRASPASO CAN-MEX | 545 |

## 9) Próximos pasos sugeridos

- Validar tipologías de documento (`fdoc.DEST`, `fdoc.DTIPOC2`, `faxinv.AITIPMV`) para separar ventas vs compras por endpoint.
- Mapear columnas `PAR*`, `VARIOS*`, `OTROS*` por módulo desde Omnis para semántica fina.
- Construir un catálogo de vistas lógicas (DTO read-model) por pantalla.
