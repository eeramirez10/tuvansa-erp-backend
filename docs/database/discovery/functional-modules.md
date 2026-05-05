# Functional Modules Discovery (SQL-driven)

- Generated at: 2026-04-30T20:28:43.045Z
- Schema: `tuvansa`
- Objetivo: inferir módulos reales por comportamiento de datos.

## 1) Reglas funcionales inferidas (actuales)

- Pedidos cliente: prefijos `P*` y `X*` (en `fpenc`/`fplin`) con `CLISEQ > 0`.
- Compras proveedor: prefijos `O*` con `PRVSEQ > 0`.
- Movimientos de ventas/facturación: `ftipmv.TIMODULO = 4`.
- Movimientos de compras/gastos: `ftipmv.TIMODULO = 7`.
- Movimientos inventario/traspasos: `ftipmv.TIMODULO = 2`.
- Contabilidad pólizas: `ftipmv.TIMODULO = 9` y joins en `fbanmov`.

## 2) Evidencia SQL

### movement_modules_distribution

```json
[
  {
    "timodulo": 4,
    "rows_count": 294320
  },
  {
    "timodulo": 7,
    "rows_count": 219512
  },
  {
    "timodulo": 2,
    "rows_count": 109344
  },
  {
    "timodulo": 0,
    "rows_count": 79783
  },
  {
    "timodulo": 9,
    "rows_count": 9957
  },
  {
    "timodulo": 3,
    "rows_count": 3001
  },
  {
    "timodulo": -1,
    "rows_count": 1
  },
  {
    "timodulo": 10,
    "rows_count": 1
  }
]
```

### movement_types_top

```json
[
  {
    "tipo": "FB",
    "timodulo": 4,
    "descripcion": "REMISION MTY",
    "rows_count": 93901
  },
  {
    "tipo": "FA",
    "timodulo": 4,
    "descripcion": "REMISION MEXICO",
    "rows_count": 72093
  },
  {
    "tipo": "K",
    "timodulo": 0,
    "descripcion": "CANCELACION",
    "rows_count": 61783
  },
  {
    "tipo": "GA",
    "timodulo": 7,
    "descripcion": "GASTOS MEX",
    "rows_count": 54543
  },
  {
    "tipo": "FD",
    "timodulo": 4,
    "descripcion": "REMISION MLI",
    "rows_count": 45794
  },
  {
    "tipo": "FC",
    "timodulo": 4,
    "descripcion": "REMISION VER",
    "rows_count": 34101
  },
  {
    "tipo": "GB",
    "timodulo": 7,
    "descripcion": "GASTOS MTY",
    "rows_count": 23914
  },
  {
    "tipo": "RA",
    "timodulo": 7,
    "descripcion": "NOTA DE ENTRADA",
    "rows_count": 23909
  },
  {
    "tipo": "FZ",
    "timodulo": 4,
    "descripcion": "REMISION QUERETARO",
    "rows_count": 21795
  },
  {
    "tipo": "GC",
    "timodulo": 7,
    "descripcion": "GASTOS VER",
    "rows_count": 20889
  },
  {
    "tipo": "RB",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA MTY",
    "rows_count": 15235
  },
  {
    "tipo": "GD",
    "timodulo": 7,
    "descripcion": "GASTOS MLI",
    "rows_count": 13302
  },
  {
    "tipo": "GE",
    "timodulo": 7,
    "descripcion": "GASTOS QRO",
    "rows_count": 12616
  },
  {
    "tipo": "FV",
    "timodulo": 4,
    "descripcion": "REMISION CANCUN",
    "rows_count": 11687
  },
  {
    "tipo": "CT",
    "timodulo": 0,
    "descripcion": "CARTA PORTE",
    "rows_count": 10754
  },
  {
    "tipo": "3",
    "timodulo": 9,
    "descripcion": "POLIZA DE DIARIO",
    "rows_count": 9940
  },
  {
    "tipo": "RD",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA MLI",
    "rows_count": 9404
  },
  {
    "tipo": "6E",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-QRO",
    "rows_count": 8413
  },
  {
    "tipo": "5A",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-QRO",
    "rows_count": 8381
  },
  {
    "tipo": "RE",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA QRO",
    "rows_count": 7588
  },
  {
    "tipo": "EI",
    "timodulo": 2,
    "descripcion": "ENTRADA DE INVENTARIO",
    "rows_count": 7524
  },
  {
    "tipo": "R",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA VER",
    "rows_count": 7300
  },
  {
    "tipo": "RF",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA CAN",
    "rows_count": 7214
  },
  {
    "tipo": "6A",
    "timodulo": 2,
    "descripcion": "TRASPASO DE SALIDA MEX-MEX",
    "rows_count": 6503
  },
  {
    "tipo": "GF",
    "timodulo": 7,
    "descripcion": "GASTOS CAN",
    "rows_count": 6008
  },
  {
    "tipo": "GN",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES MEX",
    "rows_count": 5061
  },
  {
    "tipo": "IF",
    "timodulo": 0,
    "descripcion": "INVENTARIO FISICO",
    "rows_count": 4246
  },
  {
    "tipo": "6C",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-VER",
    "rows_count": 4023
  },
  {
    "tipo": "3A",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-VER",
    "rows_count": 4003
  },
  {
    "tipo": "AN",
    "timodulo": 4,
    "descripcion": "NOTA CREDITO ANTICIPO CLIENTES",
    "rows_count": 3996
  },
  {
    "tipo": "SI",
    "timodulo": 2,
    "descripcion": "SALIDA DE INVENTARIO",
    "rows_count": 3857
  },
  {
    "tipo": "2M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA MTY",
    "rows_count": 3758
  },
  {
    "tipo": "ED",
    "timodulo": 2,
    "descripcion": "ENTRADA DE INVENTARIO MLI",
    "rows_count": 3711
  },
  {
    "tipo": "EB",
    "timodulo": 2,
    "descripcion": "ENTRADA DE INVENTARIO MTY",
    "rows_count": 3613
  },
  {
    "tipo": "SB",
    "timodulo": 2,
    "descripcion": "SALIDA DE INVENTARIO MTY",
    "rows_count": 3533
  },
  {
    "tipo": "GI",
    "timodulo": 7,
    "descripcion": "GASTOS DE NOMINA",
    "rows_count": 3422
  },
  {
    "tipo": "BM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA MTY",
    "rows_count": 3067
  },
  {
    "tipo": "",
    "timodulo": 3,
    "descripcion": "COTIZACION",
    "rows_count": 3000
  },
  {
    "tipo": "",
    "timodulo": 0,
    "descripcion": "",
    "rows_count": 3000
  },
  {
    "tipo": "EC",
    "timodulo": 2,
    "descripcion": "ENTRADA DE INVENTARIO VER",
    "rows_count": 2774
  },
  {
    "tipo": "7A",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-MEX",
    "rows_count": 2764
  },
  {
    "tipo": "GO",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES MTY",
    "rows_count": 2664
  },
  {
    "tipo": "1B",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-MEX",
    "rows_count": 2644
  },
  {
    "tipo": "AF",
    "timodulo": 4,
    "descripcion": "FACTURA DE ANTICIPOS",
    "rows_count": 2597
  },
  {
    "tipo": "7C",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-VER",
    "rows_count": 2557
  },
  {
    "tipo": "3B",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-VER",
    "rows_count": 2428
  },
  {
    "tipo": "SD",
    "timodulo": 2,
    "descripcion": "SALIDA DE INVENTARIO MLI",
    "rows_count": 2378
  },
  {
    "tipo": "DA",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION MEX",
    "rows_count": 2363
  },
  {
    "tipo": "2A",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-MTY",
    "rows_count": 2221
  },
  {
    "tipo": "6B",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-MTY",
    "rows_count": 2134
  },
  {
    "tipo": "1M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA MEX",
    "rows_count": 1675
  },
  {
    "tipo": "AM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA MEX",
    "rows_count": 1661
  },
  {
    "tipo": "7D",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-MLI",
    "rows_count": 1654
  },
  {
    "tipo": "FX",
    "timodulo": 4,
    "descripcion": "REMISION CABOS",
    "rows_count": 1496
  },
  {
    "tipo": "4B",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-MLI",
    "rows_count": 1494
  },
  {
    "tipo": "SC",
    "timodulo": 2,
    "descripcion": "SALIDA DE INVENTARIO VER",
    "rows_count": 1481
  },
  {
    "tipo": "5B",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-QRO",
    "rows_count": 1382
  },
  {
    "tipo": "7E",
    "timodulo": 2,
    "descripcion": "TRASPASO MTY-QRO",
    "rows_count": 1357
  },
  {
    "tipo": "GP",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES VER",
    "rows_count": 1280
  },
  {
    "tipo": "DB",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION MTY",
    "rows_count": 1233
  },
  {
    "tipo": "6F",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-CAN",
    "rows_count": 1082
  },
  {
    "tipo": "BA",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-CAN",
    "rows_count": 1079
  },
  {
    "tipo": "RG",
    "timodulo": 7,
    "descripcion": "RECEPCION DE MERCANCIA CAB",
    "rows_count": 969
  },
  {
    "tipo": "7B",
    "timodulo": 2,
    "descripcion": "SALIDA HACIA ALM RESGUARDO",
    "rows_count": 936
  },
  {
    "tipo": "2C",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-MTY",
    "rows_count": 867
  },
  {
    "tipo": "8B",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-MTY",
    "rows_count": 827
  },
  {
    "tipo": "DD",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION MLI",
    "rows_count": 786
  },
  {
    "tipo": "GR",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES QRO",
    "rows_count": 745
  },
  {
    "tipo": "8A",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-MEX",
    "rows_count": 721
  },
  {
    "tipo": "1C",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-MEX",
    "rows_count": 719
  },
  {
    "tipo": "HM",
    "timodulo": 2,
    "descripcion": "SALIDA POR CAM. MATERIAL MEX",
    "rows_count": 692
  },
  {
    "tipo": "7M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR CAM. MATERIAL MEX",
    "rows_count": 655
  },
  {
    "tipo": "EM",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA",
    "rows_count": 628
  },
  {
    "tipo": "6D",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-MLI",
    "rows_count": 626
  },
  {
    "tipo": "4A",
    "timodulo": 2,
    "descripcion": "TRASPASO MEX-MLI",
    "rows_count": 622
  },
  {
    "tipo": "GQ",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES MLI",
    "rows_count": 609
  },
  {
    "tipo": "SM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA MEX",
    "rows_count": 588
  },
  {
    "tipo": "AA",
    "timodulo": 2,
    "descripcion": "TRASPASO QRO-MEX",
    "rows_count": 571
  },
  {
    "tipo": "1E",
    "timodulo": 2,
    "descripcion": "TRASPASO QRO-MEX",
    "rows_count": 556
  },
  {
    "tipo": "HA",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-MEX",
    "rows_count": 545
  },
  {
    "tipo": "1F",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-MEX",
    "rows_count": 540
  },
  {
    "tipo": "NA",
    "timodulo": 7,
    "descripcion": "NOTA DE CREDITO PROV.",
    "rows_count": 519
  },
  {
    "tipo": "GG",
    "timodulo": 7,
    "descripcion": "GASTOS CAB",
    "rows_count": 516
  },
  {
    "tipo": "CA",
    "timodulo": 4,
    "descripcion": "NOTA DE CREDITO MEX",
    "rows_count": 514
  },
  {
    "tipo": "9E",
    "timodulo": 2,
    "descripcion": "TRASPASO MXL-QRO",
    "rows_count": 447
  },
  {
    "tipo": "5D",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-QRO",
    "rows_count": 442
  },
  {
    "tipo": "CB",
    "timodulo": 4,
    "descripcion": "NOTA DE CREDITO MTY",
    "rows_count": 439
  },
  {
    "tipo": "SF",
    "timodulo": 2,
    "descripcion": "SALIDA DE INVENTARIO CAN",
    "rows_count": 419
  },
  {
    "tipo": "EF",
    "timodulo": 2,
    "descripcion": "ENTRADA DE INVENTARIO CAN",
    "rows_count": 372
  },
  {
    "tipo": "MA",
    "timodulo": 7,
    "descripcion": "DEVOLUCION DE MERCANCIA PRV",
    "rows_count": 347
  },
  {
    "tipo": "GS",
    "timodulo": 7,
    "descripcion": "GASTOS NO DEDUCIBLES CAN",
    "rows_count": 347
  },
  {
    "tipo": "DF",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION CAN",
    "rows_count": 332
  },
  {
    "tipo": "NB",
    "timodulo": 7,
    "descripcion": "NOTA DE CREDITO PROV. MTY",
    "rows_count": 318
  },
  {
    "tipo": "DG",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION VER",
    "rows_count": 293
  },
  {
    "tipo": "FE",
    "timodulo": 4,
    "descripcion": "FACTURA ELECTRONIA",
    "rows_count": 288
  },
  {
    "tipo": "HG",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-CAB",
    "rows_count": 253
  },
  {
    "tipo": "LF",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-CAB",
    "rows_count": 226
  },
  {
    "tipo": "1D",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-MEX",
    "rows_count": 218
  },
  {
    "tipo": "9A",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-MEX",
    "rows_count": 218
  },
  {
    "tipo": "DH",
    "timodulo": 4,
    "descripcion": "NOTA DE DEVOLUCION QRO",
    "rows_count": 208
  },
  {
    "tipo": "3M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA VER",
    "rows_count": 194
  },
  {
    "tipo": "GM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA QRO",
    "rows_count": 185
  },
  {
    "tipo": "5M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA QRO",
    "rows_count": 184
  },
  {
    "tipo": "FJ",
    "timodulo": 4,
    "descripcion": "MAQUILAS MTY",
    "rows_count": 183
  },
  {
    "tipo": "CM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA VER",
    "rows_count": 182
  },
  {
    "tipo": "8C",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-VER",
    "rows_count": 150
  },
  {
    "tipo": "5C",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-QRO",
    "rows_count": 148
  },
  {
    "tipo": "MF",
    "timodulo": 7,
    "descripcion": "DEVOLUCION DE MERCANCIA PRV CA",
    "rows_count": 147
  },
  {
    "tipo": "8E",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-QRO",
    "rows_count": 145
  },
  {
    "tipo": "9F",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-CAN",
    "rows_count": 136
  },
  {
    "tipo": "NF",
    "timodulo": 7,
    "descripcion": "NOTA DE CREDITO PROV. CAN",
    "rows_count": 134
  },
  {
    "tipo": "HE",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-QRO",
    "rows_count": 126
  },
  {
    "tipo": "5F",
    "timodulo": 2,
    "descripcion": "TRASPASO CAN-QRO",
    "rows_count": 126
  },
  {
    "tipo": "2D",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-MTY",
    "rows_count": 120
  },
  {
    "tipo": "9B",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-MTY",
    "rows_count": 114
  },
  {
    "tipo": "BD",
    "timodulo": 2,
    "descripcion": "TRASPASO MLI-CAN",
    "rows_count": 112
  },
  {
    "tipo": "NC",
    "timodulo": 7,
    "descripcion": "NOTA DE CREDITO PROV. VER",
    "rows_count": 110
  },
  {
    "tipo": "4M",
    "timodulo": 2,
    "descripcion": "ENTRADA POR MAQUILA MLI",
    "rows_count": 102
  },
  {
    "tipo": "DM",
    "timodulo": 2,
    "descripcion": "SALIDA POR MAQUILA MLI",
    "rows_count": 101
  },
  {
    "tipo": "8D",
    "timodulo": 2,
    "descripcion": "TRASPASO VER-MLI",
    "rows_count": 97
  }
]
```

### fpenc_prefix_semantics

```json
[
  {
    "prefijo": "P",
    "total": 93282,
    "con_cliente": "93277",
    "con_proveedor": "0"
  },
  {
    "prefijo": "X",
    "total": 91118,
    "con_cliente": "91077",
    "con_proveedor": "0"
  },
  {
    "prefijo": "O",
    "total": 22410,
    "con_cliente": "2",
    "con_proveedor": "22407"
  },
  {
    "prefijo": "F",
    "total": 19,
    "con_cliente": "19",
    "con_proveedor": "0"
  },
  {
    "prefijo": "1",
    "total": 14,
    "con_cliente": "14",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Z",
    "total": 5,
    "con_cliente": "5",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Q",
    "total": 2,
    "con_cliente": "1",
    "con_proveedor": "1"
  },
  {
    "prefijo": "2",
    "total": 2,
    "con_cliente": "0",
    "con_proveedor": "2"
  },
  {
    "prefijo": "|",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "S",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "9",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "D",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "C",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "4",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "/",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "0",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Ñ",
    "total": 1,
    "con_cliente": "1",
    "con_proveedor": "0"
  }
]
```

### fplin_prefix_semantics

```json
[
  {
    "prefijo": "X",
    "total": 390998,
    "con_cliente": "390994",
    "con_proveedor": "0"
  },
  {
    "prefijo": "P",
    "total": 308421,
    "con_cliente": "308370",
    "con_proveedor": "0"
  },
  {
    "prefijo": "O",
    "total": 66846,
    "con_cliente": "3",
    "con_proveedor": "66841"
  },
  {
    "prefijo": "",
    "total": 5449,
    "con_cliente": "0",
    "con_proveedor": "5424"
  },
  {
    "prefijo": "F",
    "total": 148,
    "con_cliente": "148",
    "con_proveedor": "0"
  },
  {
    "prefijo": "1",
    "total": 24,
    "con_cliente": "24",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Z",
    "total": 8,
    "con_cliente": "8",
    "con_proveedor": "0"
  },
  {
    "prefijo": "D",
    "total": 2,
    "con_cliente": "2",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Ñ",
    "total": 2,
    "con_cliente": "2",
    "con_proveedor": "0"
  },
  {
    "prefijo": "Q",
    "total": 1,
    "con_cliente": "0",
    "con_proveedor": "1"
  }
]
```

### fdoc_prefix_semantics

```json
[
  {
    "prefijo": "F",
    "total": 115043,
    "con_cliente": "114934",
    "con_proveedor": "101"
  },
  {
    "prefijo": "G",
    "total": 109368,
    "con_cliente": "0",
    "con_proveedor": "109295"
  },
  {
    "prefijo": "I",
    "total": 62717,
    "con_cliente": "62704",
    "con_proveedor": "3"
  },
  {
    "prefijo": "R",
    "total": 39895,
    "con_cliente": "0",
    "con_proveedor": "39895"
  },
  {
    "prefijo": "N",
    "total": 19479,
    "con_cliente": "15",
    "con_proveedor": "19462"
  },
  {
    "prefijo": "A",
    "total": 9308,
    "con_cliente": "7815",
    "con_proveedor": "43"
  },
  {
    "prefijo": "6",
    "total": 6909,
    "con_cliente": "8",
    "con_proveedor": "3"
  },
  {
    "prefijo": "E",
    "total": 5798,
    "con_cliente": "0",
    "con_proveedor": "11"
  },
  {
    "prefijo": "C",
    "total": 4633,
    "con_cliente": "4437",
    "con_proveedor": "126"
  },
  {
    "prefijo": "S",
    "total": 4221,
    "con_cliente": "2",
    "con_proveedor": "303"
  },
  {
    "prefijo": "1",
    "total": 3675,
    "con_cliente": "121",
    "con_proveedor": "188"
  },
  {
    "prefijo": "7",
    "total": 3539,
    "con_cliente": "0",
    "con_proveedor": "16"
  },
  {
    "prefijo": "2",
    "total": 3320,
    "con_cliente": "1",
    "con_proveedor": "5"
  },
  {
    "prefijo": "3",
    "total": 2801,
    "con_cliente": "0",
    "con_proveedor": "32"
  },
  {
    "prefijo": "5",
    "total": 2678,
    "con_cliente": "1",
    "con_proveedor": "1"
  },
  {
    "prefijo": "D",
    "total": 2348,
    "con_cliente": "2286",
    "con_proveedor": "17"
  },
  {
    "prefijo": "B",
    "total": 2103,
    "con_cliente": "0",
    "con_proveedor": "7"
  },
  {
    "prefijo": "8",
    "total": 1077,
    "con_cliente": "4",
    "con_proveedor": "3"
  },
  {
    "prefijo": "4",
    "total": 898,
    "con_cliente": "0",
    "con_proveedor": "13"
  },
  {
    "prefijo": "H",
    "total": 671,
    "con_cliente": "0",
    "con_proveedor": "3"
  },
  {
    "prefijo": "M",
    "total": 496,
    "con_cliente": "5",
    "con_proveedor": "491"
  },
  {
    "prefijo": "P",
    "total": 333,
    "con_cliente": "3",
    "con_proveedor": "328"
  },
  {
    "prefijo": "9",
    "total": 299,
    "con_cliente": "0",
    "con_proveedor": "1"
  },
  {
    "prefijo": "L",
    "total": 56,
    "con_cliente": "0",
    "con_proveedor": "0"
  },
  {
    "prefijo": "T",
    "total": 30,
    "con_cliente": "0",
    "con_proveedor": "0"
  },
  {
    "prefijo": "0",
    "total": 15,
    "con_cliente": "5",
    "con_proveedor": "10"
  },
  {
    "prefijo": "V",
    "total": 12,
    "con_cliente": "10",
    "con_proveedor": "2"
  },
  {
    "prefijo": "O",
    "total": 11,
    "con_cliente": "0",
    "con_proveedor": "9"
  },
  {
    "prefijo": "Q",
    "total": 6,
    "con_cliente": "2",
    "con_proveedor": "4"
  },
  {
    "prefijo": "J",
    "total": 5,
    "con_cliente": "0",
    "con_proveedor": "5"
  }
]
```

### orders_prefix_examples

```json
[
  {
    "PESEQ": 210002,
    "PENUM": "PE13056",
    "PEDESDE": "2026-04-15T00:00:00.000Z",
    "PEVENCE": "2026-04-20T00:00:00.000Z",
    "CLISEQ": 19706,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "004371",
    "CLINOM": "GMG INGENIERIA ELECTROMECANICA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 210001,
    "PENUM": "PE13055",
    "PEDESDE": "2026-04-10T00:00:00.000Z",
    "PEVENCE": "2026-04-15T00:00:00.000Z",
    "CLISEQ": 19706,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "004371",
    "CLINOM": "GMG INGENIERIA ELECTROMECANICA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 210000,
    "PENUM": "PB35240",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 21445,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "006110",
    "CLINOM": "COMERCIALIZADORA DE VALVULAS Y CONEXIONES GV, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209999,
    "PENUM": "XB12984",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 21445,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "006110",
    "CLINOM": "COMERCIALIZADORA DE VALVULAS Y CONEXIONES GV, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209998,
    "PENUM": "XC42914",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 19160,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "003827",
    "CLINOM": "DUMEZ-COPISA SISTEMAS MEXICANOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209997,
    "PENUM": "PH00278",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 24413,
    "PRVSEQ": 0,
    "PEALMACEN": "07",
    "PEMULTICIA": 7,
    "CLICOD": "009005",
    "CLINOM": "FYFSO INSTALACIONES, SAS DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209996,
    "PENUM": "XG00269",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 24413,
    "PRVSEQ": 0,
    "PEALMACEN": "07",
    "PEMULTICIA": 7,
    "CLICOD": "009005",
    "CLINOM": "FYFSO INSTALACIONES, SAS DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209995,
    "PENUM": "PD19224",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 23422,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "008088",
    "CLINOM": "LEONEL MUÑOZ RANGEL",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209994,
    "PENUM": "XA28993",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 18294,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "002962",
    "CLINOM": "BONATTI SPA,",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209993,
    "PENUM": "PE13054",
    "PEDESDE": "2026-04-29T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 23190,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "007856",
    "CLINOM": "MANTENIMIENTO, FABRICACION Y SUMINISTROS INDUSTRIALES RUBEN, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209992,
    "PENUM": "PB35239",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-30T00:00:00.000Z",
    "CLISEQ": 18812,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "003479",
    "CLINOM": "PRIMETALS TECHNOLOGIES MEXICO, S DE RL DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209991,
    "PENUM": "XA28992",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 15376,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "000046",
    "CLINOM": "DE BUEN Y ASOCIADOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209990,
    "PENUM": "OC02862",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 815,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "30007",
    "PRVNOM": "POTENCIA FLUIDA, S.A. DE C.V."
  },
  {
    "PESEQ": 209989,
    "PENUM": "OC02861",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 1802,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "35196",
    "PRVNOM": "ADRIANA GONZALEZ HERNANDEZ"
  },
  {
    "PESEQ": 209988,
    "PENUM": "PD19223",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19608,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "004273",
    "CLINOM": "PEDRO ARTURO HERNANDEZ DOMINGUEZ",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209987,
    "PENUM": "XC42913",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-06T00:00:00.000Z",
    "CLISEQ": 21573,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "006239",
    "CLINOM": "INGENIO LA MARGARITA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209986,
    "PENUM": "XC42912",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 22733,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "007399",
    "CLINOM": "AGROPROCESADORA MEXICANA DE ALIMENTOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209985,
    "PENUM": "XC42911",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-06T00:00:00.000Z",
    "CLISEQ": 21573,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "006239",
    "CLINOM": "INGENIO LA MARGARITA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209984,
    "PENUM": "OC02860",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 205,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "30007A",
    "PRVNOM": "POTENCIA FLUIDA, S.A. DE C.V."
  },
  {
    "PESEQ": 209983,
    "PENUM": "XC42910",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 19305,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "003971",
    "CLINOM": "DAMPF INGENIERIA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209982,
    "PENUM": "PB35238",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 24601,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "009193",
    "CLINOM": "CARLOS EMILIANO ZAPATA HERNANDEZ",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209981,
    "PENUM": "XC42909",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-06T00:00:00.000Z",
    "CLISEQ": 21573,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "006239",
    "CLINOM": "INGENIO LA MARGARITA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209980,
    "PENUM": "OE02139",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-11T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 2337,
    "PEALMACEN": "05",
    "PEMULTICIA": 5,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "35332",
    "PRVNOM": "VICTAULIC COMPANY"
  },
  {
    "PESEQ": 209979,
    "PENUM": "PD19222",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19789,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "999904",
    "CLINOM": "CLIENTE GENERICO MEXICALI",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209978,
    "PENUM": "XC42908",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-06T00:00:00.000Z",
    "CLISEQ": 21573,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "006239",
    "CLINOM": "INGENIO LA MARGARITA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209977,
    "PENUM": "XA28991",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 15414,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "000084",
    "CLINOM": "TUBOS Y BARRAS HUECAS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209976,
    "PENUM": "PH00277",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19756,
    "PRVSEQ": 0,
    "PEALMACEN": "07",
    "PEMULTICIA": 7,
    "CLICOD": "004421",
    "CLINOM": "VENTAS MOSTRADOR MEXICO",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209975,
    "PENUM": "XC42907",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 19879,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "004544",
    "CLINOM": "VILLATUBOS,, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209974,
    "PENUM": "XC42906",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 22312,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "006978",
    "CLINOM": "ETH SOLUCIONES, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209973,
    "PENUM": "OC02859",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 4965,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "35412",
    "PRVNOM": "D-LINE PRODUCTS SA DE CV"
  },
  {
    "PESEQ": 209972,
    "PENUM": "XC42905",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-10T00:00:00.000Z",
    "CLISEQ": 19720,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "004385",
    "CLINOM": "CHET MORRISON CONTRACTORS, S DE RL DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209971,
    "PENUM": "PD19221",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19644,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "004309",
    "CLINOM": "JOSE ENRIQUE OJEDA GONZALEZ",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209970,
    "PENUM": "PD19220",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 20180,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "004845",
    "CLINOM": "IAASE, S.A. DE C.V. AL 16%",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209969,
    "PENUM": "PF04027",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 21811,
    "PRVSEQ": 0,
    "PEALMACEN": "05",
    "PEMULTICIA": 5,
    "CLICOD": "006477",
    "CLINOM": "BQ FIRE & PLUMBING, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209968,
    "PENUM": "XE04323",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 21811,
    "PRVSEQ": 0,
    "PEALMACEN": "05",
    "PEMULTICIA": 5,
    "CLICOD": "006477",
    "CLINOM": "BQ FIRE & PLUMBING, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209967,
    "PENUM": "PB35237",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 18743,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "003410",
    "CLINOM": "TUBERIA INDUSTRIAL DEL NORTE, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209966,
    "PENUM": "PD19219",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 24783,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "009375",
    "CLINOM": "SMART BAJA,",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209965,
    "PENUM": "XB12983",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 18743,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "003410",
    "CLINOM": "TUBERIA INDUSTRIAL DEL NORTE, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209964,
    "PENUM": "XG00268",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19756,
    "PRVSEQ": 0,
    "PEALMACEN": "07",
    "PEMULTICIA": 7,
    "CLICOD": "004421",
    "CLINOM": "VENTAS MOSTRADOR MEXICO",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209963,
    "PENUM": "XA28990",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-31T00:00:00.000Z",
    "CLISEQ": 16676,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001344",
    "CLINOM": "PROCESOS ESPECIALIZADOS Y PROYECTOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209962,
    "PENUM": "XA28989",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-31T00:00:00.000Z",
    "CLISEQ": 16676,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001344",
    "CLINOM": "PROCESOS ESPECIALIZADOS Y PROYECTOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209961,
    "PENUM": "XA28988",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19070,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "999901",
    "CLINOM": "CLIENTE COTIZACION",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209960,
    "PENUM": "XA28987",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-31T00:00:00.000Z",
    "CLISEQ": 16676,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001344",
    "CLINOM": "PROCESOS ESPECIALIZADOS Y PROYECTOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209959,
    "PENUM": "PB35236",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-15T00:00:00.000Z",
    "CLISEQ": 21445,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "006110",
    "CLINOM": "COMERCIALIZADORA DE VALVULAS Y CONEXIONES GV, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209958,
    "PENUM": "PB35235",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-08T00:00:00.000Z",
    "CLISEQ": 18775,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "003442",
    "CLINOM": "TECNOLOGIA PROCESOS Y MAQUINADOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209957,
    "PENUM": "OC02858",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 400,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "30205",
    "PRVNOM": "CONTUBRI, S.A. DE C.V."
  },
  {
    "PESEQ": 209956,
    "PENUM": "PB35234",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-15T00:00:00.000Z",
    "CLISEQ": 21445,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "006110",
    "CLINOM": "COMERCIALIZADORA DE VALVULAS Y CONEXIONES GV, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209955,
    "PENUM": "PD19218",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 24783,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "009375",
    "CLINOM": "SMART BAJA,",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209954,
    "PENUM": "P021349",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-10T00:00:00.000Z",
    "CLISEQ": 16637,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001305",
    "CLINOM": "NEPTUNO CINCO, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209953,
    "PENUM": "PB35233",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 21194,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "005859",
    "CLINOM": "PROYECT LIFE CASAS Y AVALUOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209952,
    "PENUM": "XA28986",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-10T00:00:00.000Z",
    "CLISEQ": 16637,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001305",
    "CLINOM": "NEPTUNO CINCO, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209951,
    "PENUM": "PD19217",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 19255,
    "PRVSEQ": 0,
    "PEALMACEN": "04",
    "PEMULTICIA": 4,
    "CLICOD": "003921",
    "CLINOM": "ARCA DEL PACIFICO, S DE RL DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209950,
    "PENUM": "XC42904",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 22397,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "007063",
    "CLINOM": "SEBASTIAN JUAREZ CONTRERAS",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209949,
    "PENUM": "XC42903",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 19161,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "003828",
    "CLINOM": "TALLERES NAVALES DEL GOLFO,",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209948,
    "PENUM": "XB12982",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-07T00:00:00.000Z",
    "CLISEQ": 18775,
    "PRVSEQ": 0,
    "PEALMACEN": "02",
    "PEMULTICIA": 2,
    "CLICOD": "003442",
    "CLINOM": "TECNOLOGIA PROCESOS Y MAQUINADOS, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209947,
    "PENUM": "XA28985",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-10T00:00:00.000Z",
    "CLISEQ": 16637,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "001305",
    "CLINOM": "NEPTUNO CINCO, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209946,
    "PENUM": "XC42902",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-05T00:00:00.000Z",
    "CLISEQ": 19161,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "003828",
    "CLINOM": "TALLERES NAVALES DEL GOLFO,",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209945,
    "PENUM": "XA28984",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 15416,
    "PRVSEQ": 0,
    "PEALMACEN": "01",
    "PEMULTICIA": 1,
    "CLICOD": "000086",
    "CLINOM": "VALVULANDIA, SA DE CV",
    "PRVCOD": null,
    "PRVNOM": null
  },
  {
    "PESEQ": 209944,
    "PENUM": "OC02857",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-04-30T00:00:00.000Z",
    "CLISEQ": 0,
    "PRVSEQ": 1935,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": null,
    "CLINOM": null,
    "PRVCOD": "35165",
    "PRVNOM": "BIRLOS DEL SUR,S.A. DE C.V."
  },
  {
    "PESEQ": 209943,
    "PENUM": "XC42901",
    "PEDESDE": "2026-04-30T00:00:00.000Z",
    "PEVENCE": "2026-05-06T00:00:00.000Z",
    "CLISEQ": 19166,
    "PRVSEQ": 0,
    "PEALMACEN": "03",
    "PEMULTICIA": 3,
    "CLICOD": "003833",
    "CLINOM": "INGENIO LA GLORIA, SA",
    "PRVCOD": null,
    "PRVNOM": null
  }
]
```

### accounting_core_usage

```json
[
  {
    "fbanmov_rows": 1778055,
    "with_bseq": "1769330",
    "with_poseq": "1778052",
    "with_prvseq": "646659"
  }
]
```

### accounting_join_coverage

```json
[
  {
    "bseq_match": "1769330",
    "prvseq_match": "646656",
    "poseq_match": "1778052"
  }
]
```

### doc_company_distribution

```json
[
  {
    "dest": 0,
    "multicia": 1,
    "total": 129587
  },
  {
    "dest": 0,
    "multicia": 2,
    "total": 115904
  },
  {
    "dest": 0,
    "multicia": 3,
    "total": 56984
  },
  {
    "dest": 0,
    "multicia": 4,
    "total": 54765
  },
  {
    "dest": 0,
    "multicia": 5,
    "total": 27569
  },
  {
    "dest": 0,
    "multicia": 6,
    "total": 15159
  },
  {
    "dest": 0,
    "multicia": 7,
    "total": 1708
  },
  {
    "dest": 1,
    "multicia": 4,
    "total": 78
  }
]
```

## 3) Reglas operativas para endpoints

- Si endpoint es de pedidos cliente, filtrar `LEFT(PENUM,1) IN ('P','X')` y `CLISEQ > 0`.
- Si endpoint es compras/proveedor, filtrar `LEFT(PENUM,1) = 'O'` y `PRVSEQ > 0`.
- Para métricas de venta por cliente/producto, combinar `faxinv` con `ftipmv.TIMODULO = 4`.
- Para métricas de compras/recepciones, usar `ftipmv.TIMODULO = 7`.
- Para inventario transaccional puro (entradas/salidas/traspasos), usar `ftipmv.TIMODULO = 2`.
- Documentar siempre `DEST` y `DMULTICIA` usados en cada consulta funcional.
