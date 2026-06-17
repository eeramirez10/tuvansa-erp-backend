# Omnis Source Docs

- Maestro por módulo: `OMNIS_TRANSCRIPCIONES_POR_MODULO.md`
- Transcripciones crudas: `raw/*.txt`

## Archivos cargados actualmente
- `raw/inventarios_codigo_omnis.txt`
- `raw/inventarios_consultas_omnis.txt`
- `raw/inventarios_auxiliares_omnis.txt`
- `raw/inventarios_filtra_almacen_omnis.txt`
- `raw/inventarios_ventas_por_cliente_omnis.txt`
- `raw/inventarios_ventas_desglosadas_omnis.txt`

## Regla de actualización
Cada nuevo PDF Omnis debe:
1. Extraerse a `raw/`.
2. Incorporarse al maestro por módulo.
3. Referenciarse en `docs/ai/INDEX.md` cuando aplique.
