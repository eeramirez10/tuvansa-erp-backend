# Candidate Relations Map (No FK)

- Schema: `tuvansa`
- Total candidate relations: 86

| From | To | Reason |
|---|---|---|
| facuse.AVISEQ | favisos.AVISEQ | Columna *SEQ compartida y primaria en tabla destino |
| falm.ALMNUM | falmcat.CATALM | Regla funcional Omnis: catálogo de almacenes por número |
| falm.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fax.BASEQ | fbanmov.BASEQ | Columna *SEQ compartida y primaria en tabla destino |
| fax.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fax.DSEQ | fdoc.DSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fax.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxinv.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxinv.DSEQ | fdoc.DSEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxinv.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| faxinv.LOSEQ | flotes.LOSEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxinv.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxrem.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| faxrem.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| faxwms.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fbanmov.BSEQ | fbenc.BSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fbanmov.POSEQ | fpoliza.POSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fbanmov.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fbinfor.BINSEQ | fbines.BINSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fbinfor.PROMSEQ | fpromos.PROMSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcajas.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fcalidad.PRSEQ | fpruebas.PRSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcampos.CUBSEQ | fcubos.CUBSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcanu.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fcanu.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcanu2.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fcanu2.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fccbenc.BSEQ | fbenc.BSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcenso.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcitas.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcitas.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcuentas.BSEQ | fbenc.BSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fcupones.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fdoc.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fdoc.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fdopag.BASEQ | fbanmov.BASEQ | Columna *SEQ compartida y primaria en tabla destino |
| fdopag.BSEQ | fbenc.BSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fdopag.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fdopag.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fedi.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fedocta.BSEQ | fbenc.BSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fempaque.AISEQ | faxinv.AISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fempaque.DSEQ | fdoc.DSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fempaque.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| feventos.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| feventos.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| ffpagos.PROMSEQ | fpromos.PROMSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fhdcasos.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fhdinteracciones.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fhdinteracciones.HDCSEQ | fhdcasos.HDCSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fhdinteracciones.HDLSEQ | fhdllamadas.HDLSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fhdllamadas.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| finv.ICODPRV | fprv.PRVCOD | Regla funcional Omnis: proveedor por código |
| finv.IUM | funidad.UCOD | Regla funcional Omnis: unidad por código |
| finv.USEQ | funidad.USEQ | Columna *SEQ compartida y primaria en tabla destino |
| finvc.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| flotes.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fmarbetes.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fmonedero.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fnegados.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fnegados.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fpenc.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fpenc.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fplin.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fplin.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fplin.PESEQ | fpenc.PESEQ | Columna *SEQ compartida y primaria en tabla destino |
| fplin.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fprecompra.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fpruebas.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fpuntos.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fsiscomp.FORSEQ | fforecast.FORSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fsiscomp.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fskus.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fsucmes.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fsucmes.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fsucursales.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fsucursales.PRVSEQ | fprv.PRVSEQ | Columna *SEQ compartida y primaria en tabla destino |
| ftarjetas.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| ftraspasos.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fvanu.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fvanu.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fvanu2.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fvanu2.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |
| fvsucursal.CLISEQ | fcli.CLISEQ | Columna *SEQ compartida y primaria en tabla destino |
| fvsucursal.EDSEQ | fedi.EDSEQ | Columna *SEQ compartida y primaria en tabla destino |
| fvsucursal.ISEQ | finv.ISEQ | Columna idéntica, clave primaria/única en tabla destino |

## Notes
- Estas relaciones son inferidas, no validadas por FK.
- Validar cada relación con SQL funcional antes de usar en endpoints.
