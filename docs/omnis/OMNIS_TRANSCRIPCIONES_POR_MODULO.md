# Omnis - Transcripciones Por Módulo

Documento maestro para asistentes de IA y developers.

## Cómo usar este archivo
1. Buscar módulo.
2. Revisar resumen funcional.
3. Ir al bloque de transcripción o al `.txt` raw.

## Módulos
- Inventarios
- Ventas (pendiente de PDFs específicos)
- Compras (pendiente de PDFs específicos)
- Bancos (pendiente de PDFs específicos)
- Contabilidad (pendiente de PDFs específicos)

---

## Módulo: Inventarios

### Inventarios - Código base de ventana (EINV#1)
- Fuente PDF: `/Users/erick/Downloads/codigo de inventarios.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_codigo_omnis.txt`
- Uso: flujo base, INIT, visibilidad de campos por alias de compañía, lógica de controles principales.

### Inventarios - Panel de Consultas (EINV#8)
- Fuente PDF: `/Users/erick/Downloads/Consultas.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_consultas_omnis.txt`
- Uso: mapeo de botones y ventanas destino (`Auxiliar`, `Pedidos`, `Ventas`, `Ventas desglosadas`, etc.).

### Inventarios - Auxiliar / Kardex (EINV#10)
- Fuente PDF: `/Users/erick/Downloads/auxiliares.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_auxiliares_omnis.txt`
- Uso: sorts, carga de doctos, lista de columnas y lógica del modal auxiliar.

### Inventarios - Filtrar almacén (EINV#10)
- Fuente PDF: `/Users/erick/Downloads/FILTRA ALMACEN.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_filtra_almacen_omnis.txt`
- Uso: procedimiento de filtrado, ordenamientos y recalculo de saldo/stock.

### Inventarios - Ventas por cliente (EINV#6)
- Fuente PDF: `/Users/erick/Downloads/VENTAS POR CLIENTE.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_ventas_por_cliente_omnis.txt`
- Uso: define list, carga de doctos y agregación por cliente (cantidad/importe).

---

## Transcripción Consolidada

> Nota: se conserva texto extraído por `pdftotext -layout` para mantener cercanía al formato original.

### [Inventarios] EINV#1 - código de inventarios

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

0 INIT
---------
Call procedure MBASE/310 {POCISIONA VENTANA}
Set window control procedure 100 {EDWC}
If CIANOCOSTOS
   Calculate $root.$winds.EINV#1.$objs.1046.$visible as 0
   Calculate $root.$winds.EINV#1.$objs.1047.$visible as 0
   Calculate $root.$winds.EINV#1.$objs.1048.$visible as 0
   ; Calculate $root.$winds.EINV#1.$objs.ISTKACU.$visible as 0
   ; Calculate $root.$winds.EINV#1.$objs.ICANTAN.$visible as 0
   If CIAALIAS='TECSIN'
       Calculate $root.$winds.EINV#1.$objs.IADVALOREM.$visible as 0
   End If
End If
If CIAALIAS='OPERA'
   Calculate $root.$winds.EINV#1.$objs.1062.$visible as 0
End If

If (CIAALIAS='MISAC')|(CIAALIAS='ELSOL')
    Calculate $root.$winds.EINV#1.$objs.1262.$active as 0
End If

; If CIAALIAS='ACUARIO'
; Calculate $root.$winds.EINV#1.$objs.1047.$active as 0
; End If
If (CIAALIAS='CAPPINI')&(#UL<>8)
    Calculate $root.$winds.EINV#1.$objs.1043.$active as 0
End If
If (CIAALIAS='BABY')&(CIAGRUPO<>1)
    Calculate $root.$winds.EINV#1.$objs.ICUENTA.$active as 0
    Calculate $root.$winds.EINV#1.$objs.ICUENTADEV.$active as 0
End If
Call procedure 240 {LOAD LISTA}
Call procedure 239 {SEARCH LISTA}
;
; If CIAALIAS='PFEIFER'
; Open window (Use v1 coordinates) EINV#20
; End If
If CIAALIAS='ITT'
    Open window (Use v1 coordinates) EINV#20//450
End If

If CIAALIAS='MASKOTA'
   Calculate $root.$winds.EINV#1.$objs.1127.$unqindex as 1
End If

If CIAALIAS='KURSON' ;; iva
   Calculate $root.$winds.EINV#1.$objs.1292.$visible as 1                          ;; !+0067
   Calculate $root.$winds.EINV#1.$objs.1293.$visible as 1                          ;; !+0067
   Calculate $root.$winds.EINV#1.$objs.1294.$visible as 1                          ;; !+0067
End If

1 ICOD
-----------

2 IDESCR
---------------

3 UCOD
------------
Call procedure MBASE/130 ('FUNIDAD',UCOD) {AUTOFIND UNIVERSAL 'FILE'_FIELD}

4 LISTAA
--------------
If #EDATA&(#EM=4)&(#EN='LIBLISTA')
   Begin reversible block
       Set current list LIBLISTA
   End reversible block
   Calculate IUM as lst(LIBLISTA,UCOD)
   Call procedure MSQL/251 ('FUNIDAD',UCOD,lst(LIBLISTA,UCOD),kTrue) {SINGLE_FILE_FIND File,Field,Value Exact}
   Redraw windows
End If

5 IFAM
-----------

6 Color y talla
-------------------

7 MP
--------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

8 PT
-------

9 JGO
----------

10 Ensamble
-------------------

11 Servicio
----------------

12 ILISTA1
----------------

13 ILISTA2
----------------

14 ILISTA3
----------------

15 ILISTA4
----------------

16 ILISTA5
----------------

17 ILISTA6
----------------

18 IADVALOREM
-------------------------

19 IMINIMO
-----------------

20 IMAXIMO
------------------

21 ILOCALIZ
-------------------

22 IEAN
------------

23 IUPC
------------

24 ICUENTA
------------------

25 ICUENTADEV
-------------------------

26 ICUENTADEV
-------------------------

27 IULTCPR
------------------

28 IULTVTA
------------------

29 IASIGNADO
----------------------

30 ICAMINO
------------------

31 IPEDCLI
-----------------

32 IPEDCOTIZ
---------------------

33 IPEDPRV
-------------------

34 IORDCOTIZ
----------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 3
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
35 STOCK
----------------

36 ISTKANT
------------------

37 ISTKACU
------------------

38 ICANTAN
------------------

39 ICANTAC
------------------

40 ISTKPZS
------------------

41 IALTA
--------------

42 IBAJA
--------------

43 IPORCIVA
--------------------

44 IPORCIVA
--------------------

45 IPORCIVA
--------------------

46 IMONEDA1
---------------------

47 IMONEDA2
---------------------

48 IMONEDA3
---------------------

49 ^^TITULO1
--------------------

50 ~ALMACENES
--------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/43'
   Call procedure INICIO/30 {Accesos}
   If (CIAALIAS='MOVIS')&(len(ICOD)=CIARAIZ)
       Open window (Use v1 coordinates) EINV#20A                         ;; !MES       MOVIS SUMA TODOS LOS HIJOS CUANDO ESTA EN LA RAIZ (PODRIA SER PARA TODOS)
   Else
       Open window (Use v1 coordinates) EINV#20
   End If
End If

51 ~ALTA CT
-------------------
If #CLICK


   If (CIAALIAS='ADVANCE')&(ITIPO=4)
       Call procedure 300 {ALTA INV SERVICIOS}
       Quit procedure
   End If

   If #SHIFT&#CTRL
      If CIAALIAS='FERRIONI'
         Calculate #S3 as 'EINV#1/49SF'
         Call procedure INICIO/30 {Accesos}
         Call procedure 205 {Update CyT SOLO PRECIOS}
         Redraw windows (All windows)
      Else
         Calculate #S3 as 'EINV#1/49CS'
         Call procedure INICIO/30 {Accesos}
         Open window EIMPNEWART13
      End If
   Else If #SHIFT
      Calculate #S3 as 'EINV#1/49S'
      Call procedure INICIO/30 {Accesos}
      Call procedure EINV#1/201 (#COMMAND) {Update CyT}                                ;; !+0025
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 4
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       Redraw windows (All windows)
   Else If #CTRL
       Calculate #S3 as 'EINV#1/49C'
       Call procedure INICIO/30 {Accesos}
       Call procedure EINV#1/202 {Update CyT SOLO ESE PRODUCTO} ;; !+0025
       Redraw windows (All windows)
   Else
       If mid(CIAPLUGS,24,1)<>'X'
           OK message (High position,Large size) {Esta versión no contiene el módulo de COLOR Y TALLA}
           Quit procedure
       End If
       Calculate #S3 as 'EINV#1-49'
       Call procedure INICIO/30 {Accesos}
       If len(ICOD)<>CIARAIZ
           Quit procedure
       End If
       Open window EINVCYTALTAINV
   End If
End If

52 ~bloquear
-------------------
If #CLICK
   Calculate #S3 as 'EINV#1/64'
   Call procedure INICIO/30 {Accesos}
   Call procedure MBASE/100 ('Esta rutina bloquea/desbloquea el producto actual') {AVISO USO RUTINA YES}
   If (CIAALIAS='MASKOTA')&(ISTKACT>0) ;; NO BLOQUEAR PRODUCTOS CON INV
       OK message (High position) {NO SE PUEDE BLOQUEAR UN PRODUCTO CON EXISTENCIAS}
       Quit procedure
   End If
   Calculate LVOTROS as ''
   Call procedure MBASE/67 (LVOTROS,IBAJA,pick(IBAJA=ZSD00,ZSD00,#D)) {Arma LVOTROS}
   Call procedure MBASE/67 (LVOTROS,IUSEQ,CIAUSRSEQ) {Arma LVOTROS}
   Call procedure MBASE/67 (LVOTROS,IFECHACAMBIO,#D) {Arma LVOTROS}
   Call procedure MBASE/69 ('FINV',LVOTROS) {EDITA UN FILE FILE_UOTROS}
   Redraw windows
End If

53 ~Clasificar
-------------------
If #CLICK
   Calculate #S3 as 'EINV#1/51'
   Call procedure INICIO/30 {Accesos}
   Call procedure MINV/30 {CLOSE ALL INV}


   If (CIAALIAS='ZOY')&(#SHIFT)
       Calculate #S3 as 'EINV#1/51A'
       Call procedure INICIO/30 {Accesos}
       ; Open window EINVCYTALTA2 ;; VERSION PARA ENRIQUE LANIADO
       Open window EINVCYTALTA2A
       Quit procedure
   End If


   If CIAALIAS='TELYBOR'
      Open window EINV#25A
      Quit procedure
   End If




   Open window (Use v1 coordinates) EINV#25C                          ;; ESTO SELECCIONA DE LISTAS Y RESPETA LA JERARQUIA DE FAMPADRE


  ; If #SHIFT&#CTRL
  ; Open window (Use v1 coordinates) EINV#25C
  ; Else If #SHIFT|(CIAALIAS='MISAC')|(CIAALIAS='ELSOL')
  ; Open window (Use v1 coordinates) EINV#25A
  ; Else
  ; Open window (Use v1 coordinates) EINV#25
  ; End If
End If

54 ~Descripcion extendida
-------------------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/40'
   Call procedure INICIO/30 {Accesos}
   If (CIAALIAS='MASKOTA')&#SHIFT                       ;; PARA DLX
       Quit procedure
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 5
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   End If


  Open window (Use v1 coordinates) EINV2#3
End If

55 ~DESCTOSCLIS
----------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/62'
   Call procedure INICIO/30 {Accesos}
   If (CIAALIAS='MISAC')|(CIAALIAS='ELSOL')
       Open window (Use v1 coordinates) EINV#6AM
   Else
       Open window (Use v1 coordinates) EINV#6A
   End If
End If

56 ~DESCTOSPRVS
------------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/66'
   Call procedure INICIO/30 {Accesos}
   Open window (Use v1 coordinates) EINV#6B
End If

57 ~Otros
--------------
If #CLICK
   Calculate #S3 as 'MINV27'
   Call procedure INICIO/30 {Accesos}
   If #SHIFT&(CIAALIAS='DETALLES')
       Open window EINV#800
       Quit procedure
   End If
   If #SHIFT&(CIAALIAS='ACUARIO')
       Open window EINV2#1A
       Quit procedure
   End If

  Open window EINV2#1
End If

58 ~Especificaciones
------------------------------
If #CLICK
   Calculate #S3 as 'MINV27'
   Call procedure INICIO/30 {Accesos}

  Open window EINV2#3B
End If

59 ~Foto
-------------
If #CLICK
   If mid(CIAPLUGS,29,1)<>'X'
       OK message (High position,Large size) {Esta versión no contiene el módulo de FOTOS}
       Quit procedure
   End If

   Calculate #S3 as 'EINV#1/46'
   Call procedure INICIO/30 {Accesos}

   If (ITIPO=0)
       Open window EINV#36 (ICOD,#SHIFT,2) ;; MATERIA PRIMA A NIVEL COLOR Y TALLA
   Else
       Open window EINV#36 (ICOD,#SHIFT) ;; P.T. A NIVEL PAPA
   End If
   Local variable VHIJO (Short integer (0 to 255))

End If

60 ~INV CT
-----------------
If #CLICK
   Calculate #S3 as 'EINV#1-48'
   Call procedure INICIO/30 {Accesos}
   Local variable VICOD (Character 10000000)
   Calculate VICOD as ICOD
   Calculate #F as 1
   If len(ICOD)>CIARAIZ
       Call procedure MSQL/261 ('FINV',ICOD,mid(ICOD,1,CIARAIZ),kTrue,kFalse,1) {FIND File,Field,Value, Exact,Search,Limit}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 6
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   End If
   If flag true
       Open window EINVCYTINVCONSULTA
   Else
       Call procedure MSQL/261 ('FINV',ICOD,VICOD,kTrue,kFalse,1) {FIND File,Field,Value, Exact,Search,Limit}
   End If
   Redraw windows (All windows)
End If

61 ~Precios
-----------------
If #CLICK
   Calculate #S3 as 'MINV60'
   Call procedure INICIO/30 {Accesos}
   If CIAALIAS='FERREKUPER'
       Open window (Use v1 coordinates) EINV#43B
   Else
       Open window (Use v1 coordinates) EINV#43
   End If
End If

62 ~[pick(CIAALIAS='TELYBOR','SKUs','Costos')]
--------------------------------------------------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/64N'
   Call procedure INICIO/30 {Accesos}
   If CIAALIAS='BORDTEX'
       Call procedure MUTILBORRA4/6 {FUSIONA PRODUCTOS}
       Quit procedure
   End If

  If (CIAALIAS='TELYBOR')
      If (CIAGRUPO=0)
          Open window ECOSTOS3
      Else
          Open window ECOSTOS3/0/0/570
      End If
  Else
      Call procedure EINVSKUS/100 {Show}
  End If
End If

; !+0027

63 ~Prepacks
--------------------
If #CLICK
   Calculate #S3 as 'MINV93'
   Call procedure INICIO/30 {Accesos}
   Open window EINV#58
End If

64 ^^TITULO1
--------------------

65 ~Alternos
------------------
If #CLICK
   Calculate #S3 as 'EINV#1-45'
   Call procedure INICIO/30 {Accesos}
   Call procedure MINV/30 {CLOSE ALL INV}

  Open window (Use v1 coordinates) EINV#37
End If

66 ~componentes
-------------------------
If #CLICK
   Calculate #S3 as 'EINV#1/48'
   Call procedure INICIO/30 {Accesos}
   Call procedure MINV/30 {CLOSE ALL INV}
   If CIAALIAS='BABY'
       If #CTRL&#SHIFT
          Call procedure WXML/100 {Show} ;; !+0124
          Quit procedure
       End If
   End If
   If #CTRL
       Open window (Use v1 coordinates) EINV#56
       Quit procedure
   End If
   If #SHIFT
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 7
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       Open window EINV#2A ;; PrePacks
       Quit procedure
   End If
   Open window (Use v1 coordinates) EINV#2
End If


; !+0108

67 ~Calidad
-----------------
; OMNIS 7 converter inserted if statement
If #CLICK
   If (CIAALIAS='MASKOTA')&(#CTRL) ;; TEMPORAL HASTA 2-2-9
       Call procedure MBASE/74 ('FINV',ISTKACT,0) {EDITA UN FIELD}
       Redraw windows
       Quit procedure
   End If
   If CIAALIAS='PISOS'
       Open window EINV2#3A
       Quit procedure
   End If
   If CIAALIAS='PISOS'
       Open window EINV2#3B
       Quit procedure
   End If

  If (CIAHELP=0)
      Calculate #S3 as 'EINV#1/42'
      Call procedure INICIO/30 {Accesos}
      Open window (Use v1 coordinates) EINV#127
  Else
      OK message (Large size) {Este boton nos da la ventana para poder consultar en pantalla el Saldo, Auxilir, Ventas o Pedidos dlie cliente}
  End If
End If

68 ~implosion
--------------------
If #CLICK
   Calculate #S3 as 'EINV#1/50'
   Call procedure INICIO/30 {Accesos}
   Call procedure MINV/30 {CLOSE ALL INV}
   If #SHIFT
       Open window (Use v1 coordinates) EINV#11A
       Quit procedure
   End If
   Open window (Use v1 coordinates) EINV#11
End If

69 ~LOTES
-----------------
If #CLICK
   If (CIAALIAS='BABY')&(#CTRL)
       Calculate #S3 as 'EINV#1/47X'
       Call procedure INICIO/30 {Accesos}
       Open window (Use v1 coordinates) EINVLOTESXXX
       Quit procedure
   End If

  If mid(CIAPLUGS,23,1)<>'X'
     OK message (High position,Large size) {Esta versión no contiene el módulo de LOTES}
     Quit procedure
  End If
  Calculate #S3 as 'EINV#1/47'
  Call procedure INICIO/30 {Accesos}
  If mid(CIACOMPORTA,119,1)
     Open window (Use v1 coordinates) EINV#28L
  Else
     Open window (Use v1 coordinates) EINVLOTES
  End If
End If

70 ~ueps peps
---------------------
If #CLICK
   If mid(CIAPLUGS,23,1)<>'X'
       OK message (High position,Large size) {Esta versión no contiene el módulo de LOTES}
       Quit procedure
   End If
   Calculate #S3 as 'EINV#1/52'
   Call procedure INICIO/30 {Accesos}
   Open window (Use v1 coordinates) EINV#32
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 8
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
End If

71 ^oferta
--------------

72 OK
----------

73 Cancelar
-----------------

74 IMONEDA6
---------------------

75 ^TITULO
-----------------

76 ^FAM1
---------------

77 ^CODPRV
-------------------

78 ^VALMACEN0
-------------------------

79 ^SEGUNDAS
------------------------

80 ^SEGUNDAS
------------------------

81 ^FAM1
---------------

82 ^FAM1
---------------

83 Foto
-----------

84 ^SEGUNDAS
------------------------

85 ^^TITULO1
--------------------

86 ^^TITULO1
--------------------

87 ^^TITULO1
--------------------

88 ^^TITULO1
--------------------

89 ^^TITULO1
--------------------

90 ^^TITULO1
--------------------

91 ^^TITULO1
--------------------

92 IADVALOREMSEVIMEX
---------------------------------------

93 IVTA
------------

94 IDIASSTK
-------------------

100 EDWC
----------------
If #EDATA&#WCLICK
   SNA remain on current field
End If

201 Update CyT
-----------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026 17:40:22)                                   PAGE 9
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Parameter PDES (Boolean)                 ;; Copiar la descripción (más color y talla)

Local variable VRN (Long integer) = 0
Local variable VPN (Long integer) = 0
Local variable VCOD (Character 10000000) = '¡¡¡!!!¡¡¡!!!¡¡¡'
Local variable VL (List)
Local variable VDES (Character 10000000)
Local variable VFAM6 (Character 10000000)
Local variable VLISTA5 (Number 4 dp)

No/Yes message (High position,Sound bell) {¿Actualizar color y talla[pick(PDES,'',' (con descripción)')]?}
If flag false
    Quit procedure
End If

Begin reversible block
  Disable cancel test at loops
  Set main file {FINV}
  Set current list VL
End reversible block

; ??? OJO: La familia debe ser filtrada.
Define list (Store long data) {ITIPO..ILISTA5,ILISTA6,IFAM,IVOLUMEN,ICANTCAJA,ILISTA7..ILISTA9,IUM,IEMPAQUE,ILISTA10,IEDIEMP,IEDIEMPC,ICTA,I
CTADEV,IMONEDA1..IMONEDA10,IDESCR,IFAM1..IFAM7,IFAM8,IFAM9,ILOCALIZ,ISEGUNDAS,IREBAJAMINIMO,IPESOSPARAPUNTO,IDESCGR

Add line to list


Call procedure MSQL/266 ('FINV',ICOD,kFalse,kFalse,50) {FIND_FIRST File,Field, Search,Sort,Limit} ;; !+0127
While flag true
  Working message (Cancel box,Repeat count) {Actualizando color y talla...}
  If canceled
      Break to end of loop
  End If
  If ICT=1
      If len(ICOD)=CIARAIZ
          Calculate VCOD as ICOD
          Replace line in list {1}
          Calculate VRN as VRN+1
      Else
          OK message (High position,Large size,Sound bell) {El producto "[ICOD]" tiene la marca de color y talla, pero su código no es raiz.}
      End If
  Else If mid(ICOD,1,CIARAIZ)=VCOD

      Calculate LVOTROS as ''
      Calculate VDES as IDESCR
      Calculate VFAM6 as IFAM6
      Calculate VLISTA5 as ILISTA5
      Load from list {1}
      Call procedure MBASE/149 ('FINV',LVOTROS,VL) {BUILD VOTROS BASE LISTA} ;; !+0106
      Call procedure MBASE/67 (LVOTROS,IUSEQ,CIAUSRSEQ) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,IFECHACAMBIO,#D) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,IFAM6,VFAM6,CIAALIAS='VANITY') {Arma LVOTROS} ;; VANITY SE QUEDA CON EL QUE TENIA
      Call procedure MBASE/67 (LVOTROS,ILISTA5,VLISTA5,CIAALIAS='MEXIJEANS') {Arma LVOTROS} ;; PARA QUE A MEXIJEANS SE QUEDE EL QUE
      TENIA Y NO EL DEL PAPA

      If (CIAALIAS='CADER')|(CIAALIAS='KARELE')
          ; DEJAR EL DEL PAPA
      Else If PDES
          Calculate IDESCR as con(IDESCR,' ',mid(ICOD,CIARAIZ+1,CIATALLA),' ',mid(ICOD,CIARAIZ+CIATALLA+1,99))
          Call procedure MCPAU1/43 (IDESCR) {Str Trailing Spaces-}
          Call procedure MBASE/67 (LVOTROS,IDESCR,IDESCR) {Arma LVOTROS}
      Else If CIAALIAS='COLORIE'
          Call procedure MBASE/67 (LVOTROS,IDESCR,con(IDESCR,' ',ICOLOREXT,' ',mid(ICOD,CIARAIZ+CIATALLA+1,99))) {Arma LVOTROS}
      Else
          Call procedure MBASE/67 (LVOTROS,IDESCR,VDES) {Arma LVOTROS}
      End If

      ; Single file find on UCOD (Exact match) {IUM} ;; Con MBASE no se necesita.
      Call procedure MBASE/69 ('FINV',LVOTROS) {EDITA UN FILE FILE_UOTROS}

    Calculate VPN as VPN+1
  End If
  Call procedure MSQL/271 ('FINV','ICOD',kFalse,kFalse) {NEXT File FieldN,Exact,Search}                                            ;; !+0127
End While
Close working message

OK message (High position,Large size) {Productos raiz: [VRN]//Productos actualizados: [VPN]}

Call procedure MINV/500 {INICIALIZA EL MODULO}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026PAGE                                         17:40:22)
                                                                                                                                10
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

; !+0025 !+0008 !+0124

202 Update CyT SOLO ESE PRODUCTO
----------------------------------------------------------


Local variable VRN (Long integer) = 0
Local variable VPN (Long integer) = 0
Local variable VCOD (Character 10000000) = ICOD
Local variable VL (List)
Local variable VDES (Character 10000000)
Local variable VEAN (Boolean)
Local variable VFAM6 (Character 10000000)
Local variable VLISTA5 (Number 4 dp)
Local variable VUCOD (Character 10000000)
Local variable VDIGITO (Character 10000000)
Local variable VDATO (Character 10000000)

If (CIAALIAS='PARLAY')&(IEAN='X')
    Call procedure MSQL/251 ('FTIPMV',TICLA,'EA',kTrue) {SINGLE_FILE_FIND File,Field,Value Exact}
    Calculate VEAN as #F
End If

Calculate VCOD as ICOD
Calculate MEMIDEL as ICOD
Calculate MEMIAL as con(ICOD,'zzz')
Begin reversible block
  Disable cancel test at loops
  Set main file {FINV}
  Set current list VL
End reversible block

Call procedure MSQL/51 (sys(85),'FINV') {Push CRB}

; ??? OJO: La familia debe ser filtrada.
Call procedure MSQL/281 ("(ICOD>=MEMIDEL)&(ICOD<=MEMIAL)&(MEMIDEL>'')") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
Call procedure MSQL/261 ('FINV',ICOD,VCOD,kFalse,kTrue,50) {FIND File,Field,Value, Exact,Search,Limit}
If flag false
    Quit procedure
End If
If (CIAALIAS='UMBRO')|(CIAALIAS='ANFIS')
    Define list (Store long data) {ITIPO..ILISTA3,ILISTA6,IFAM,IVOLUMEN,ICANTCAJA,ILISTA7..ILISTA9,IUM,IEMPAQUE,ILISTA10,IEDIEMP,IEDIEMPC,ICTA,I
    CTADEV,IMONEDA1..IMONEDA10,IDESCR,IFAM1..IFAM7,IFAM8,IFAM9,ILOCALIZ,ISEGUNDAS,IREBAJAMINIMO,IPESOSPARAPUNTO,IDESCGR
Else If CIAALIAS='ALDO'
    Define list (Store long data) {ITIPO..ILISTA5,ILISTA6,IFAM,IVOLUMEN,ICANTCAJA,ILISTA7..ILISTA9,IUM,IEMPAQUE,ILISTA10,IEDIEMP,IEDIEMPC,ICTA,I
    CTADEV,IMONEDA1..IMONEDA10,IDESCR,IFAM1..IFAM7,IFAM8,IFAM9,ILOCALIZ,ISEGUNDAS,IREBAJAMINIMO,IPESOSPARAPUNTO,IDESCGR
Else
    Define list (Store long data) {ITIPO..ILISTA5,ILISTA6,IFAM,IVOLUMEN,ICANTCAJA,ILISTA7..ILISTA9,IUM,IEMPAQUE,ILISTA10,IEDIEMP,IEDIEMPC,ICTA,I
    CTADEV,IMONEDA1..IMONEDA10,IDESCR,IFAM1..IFAM7,IFAM8,IFAM9,ILOCALIZ,ISEGUNDAS,IREBAJAMINIMO,IPESOSPARAPUNTO,IDESCGR
End If

Add line to list

Repeat
  Working message (Cancel box,Repeat count) {Actualizando color y talla...}
  If canceled
      Break to end of loop
  End If
  If ICT=1
      If len(ICOD)=CIARAIZ
          Calculate VCOD as ICOD
          Replace line in list {1}
          Calculate VRN as VRN+1
      Else
          OK message (High position,Large size,Sound bell) {El producto "[ICOD]" tiene la marca de color y talla, pero su código no es raiz.}
      End If
  Else If mid(ICOD,1,CIARAIZ)=VCOD

      Calculate LVOTROS as ''
      Calculate VFAM6 as IFAM6
      Calculate VDES as IDESCR
      Calculate VLISTA5 as ILISTA5
      Load from list {1}
      Call procedure MBASE/149 ('FINV',LVOTROS,VL) {BUILD VOTROS BASE LISTA}

      If (CIAALIAS='CADER')|(CIAALIAS='KARELE')
          ; OK message {[ICOD] [IDESCR]}
      Else If CIAALIAS='COLORIE'
          Calculate IDESCR as con(IDESCR,' ',ICOLOREXT,' ',mid(ICOD,CIARAIZ+CIATALLA+1,99))
      Else
          Calculate IDESCR as con(IDESCR,' ',mid(ICOD,CIARAIZ+1,CIATALLA),' ',mid(ICOD,CIARAIZ+CIATALLA+1,99))
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026PAGE                                         17:40:22)
                                                                                                                                11
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       End If

      Call procedure MCPAU1/43 (IDESCR) {Str Trailing Spaces-}
      Call procedure MBASE/67 (LVOTROS,IDESCR,IDESCR) {Arma LVOTROS}

      Call procedure MBASE/67 (LVOTROS,IUSEQ,CIAUSRSEQ) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,IFECHACAMBIO,#D) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,IFAM6,pick(CIAALIAS='VANITY',IFAM6,VFAM6)) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,ILISTA5,pick(CIAALIAS='MEXIJEANS',ILISTA5,VLISTA5)) {Arma LVOTROS}
      Call procedure MBASE/67 (LVOTROS,IDESCR,IDESCR) {Arma LVOTROS}

      Call procedure MSQL/251 ('FUNIDAD',UCOD,IUM,kTrue) {SINGLE_FILE_FIND File,Field,Value Exact}
      Call procedure MBASE/67 (LVOTROS,USEQ,USEQ,1,'C') {Arma LVOTROS}

      Call procedure MBASE/69 ('FINV',LVOTROS) {EDITA UN FILE FILE_UOTROS}
      If VEAN&(IEAN='')
         Call procedure MBASE/29 {AUMENTA EN 1 TINUM}
         Calculate LVOTROS as ''
         Calculate VDATO as jst(TIDESCR,7,TINUM,'-5P0') ;; EL TIDESCR ES EL FIJO Y ASUMO QUE SON 7 DIGITOS
         Calculate VDIGITO as VDATO
         Calculate VDIGITO as 10-mid(1000+(mid(VDIGITO,1,1)+mid(VDIGITO,3,1)+mid(VDIGITO,5,1)+mid(VDIGITO,7,1)+mid(VDIGITO,9,1)+mid(VDIGITO
         ,11,1))*1+((mid(VDIGITO,2,1)+mid(VDIGITO,4,1)+mid(VDIGITO,6,1)+mid(VDIGITO,8,1)+mid(VDIGITO,10,1)+mid(VDIGITO,12,1))*3),4,1)
         Calculate VDIGITO as pick(VDIGITO=10,VDIGITO,0)

        Call procedure MBASE/67 (LVOTROS,IEAN,con(VDATO,VDIGITO)) {Arma LVOTROS}
        Call procedure MBASE/69 ('FINV',LVOTROS) {EDITA UN FILE FILE_UOTROS}
      End If

      Calculate VPN as VPN+1
  End If
  Call procedure MSQL/271 ('FINV','ICOD',kFalse,kTrue) {NEXT File FieldN,Exact,Search}
Until flag false
Close working message

Call procedure MSQL/52 (sys(85)) {Pop CRB}
Call procedure MSQL/256 ('FINV') {LOAD_CONNECTED_RECORDS File}                                            ;; POR SI CAMBIO LA U.M.
Clear selected files {FTIPMV}

OK message (High position,Large size) {Productos raiz: [VRN]//Productos actualizados: [VPN]}


; !+0025 !+0008 !+0124

205 Update CyT SOLO PRECIOS
-----------------------------------------------

; PARA QUE SOLO SE COPIEN PRECIOS DE PAPAS A HIJOS VALIDANDO FECHAS PARA ARCHIVO DE TRANSFER

Local variable VRN (Long integer) = 0
Local variable VPN (Long integer) = 0
Local variable VCOD (Character 10000000) = '¡¡¡!!!¡¡¡!!!¡¡¡'
Local variable VL (List)
Local variable VDES (Character 10000000)
Local variable VFAM6 (Character 10000000)
Local variable VPRECIO1 (Number 4 dp)
Local variable VPRECIO7 (Number 4 dp)
Local variable VPRECIO8 (Number 4 dp)
Local variable VPRECIO10 (Number 4 dp)

No/Yes message (High position,Sound bell) {¿Actualizar precios de color y talla?}
If flag false
    Quit procedure
End If

Begin reversible block
  Disable cancel test at loops
  Set main file {FINV}
  Set current list VL
End reversible block

; ??? OJO: La familia debe ser filtrada.
Define list (Store long data) {ITIPO..ILISTA5,ILISTA6,IFAM,IVOLUMEN,ICANTCAJA,ILISTA7..ILISTA9,IUM,IEMPAQUE,ILISTA10,IEDIEMP,IEDIEMPC,ICTA,I
CTADEV,IMONEDA1..IMONEDA10,IDESCR,IFAM1..IFAM7,IFAM8,IFAM9,ILOCALIZ,ISEGUNDAS,IREBAJAMINIMO,IPESOSPARAPUNTO,IDESCGR

Add line to list

Call procedure MSQL/266 ('FINV',ICOD,kFalse,kFalse,50) {FIND_FIRST File,Field, Search,Sort,Limit}                                               ;; !+0127
While flag true
  Working message (Cancel box,Repeat count) {Actualizando color y talla...}
  If canceled
      Break to end of loop
  End If
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026PAGE                                         17:40:22)
                                                                                                                                12
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   If ICT=1
       If len(ICOD)=CIARAIZ
           Calculate VPRECIO1 as ILISTA1
           Calculate VPRECIO7 as ILISTA7
           Calculate VPRECIO8 as ILISTA8
           Calculate VPRECIO10 as ILISTA10
           Calculate VCOD as ICOD
           Replace line in list {1}
           Calculate VRN as VRN+1
       Else
           OK message (High position,Large size,Sound bell) {El producto "[ICOD]" tiene la marca de color y talla, pero su código no es raiz.}
       End If
   Else If mid(ICOD,1,CIARAIZ)=VCOD
       If (ILISTA1<>VPRECIO1)|(ILISTA7<>VPRECIO7)|(ILISTA8<>VPRECIO8)|(ILISTA10<>VPRECIO10)
           Calculate LVOTROS as ''
           Call procedure MBASE/67 (LVOTROS,ILISTA1,VPRECIO1) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,ILISTA7,VPRECIO7) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,ILISTA8,VPRECIO8) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,ILISTA10,VPRECIO10) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,IUSEQ,CIAUSRSEQ) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,IFECHACAMBIO,#D) {Arma LVOTROS}
           Call procedure MBASE/67 (LVOTROS,IFECHACAMBIOPR,#D) {Arma LVOTROS}
           Call procedure MBASE/69 ('FINV',LVOTROS) {EDITA UN FILE FILE_UOTROS}
           Calculate VPN as VPN+1
       End If
   End If
   Call procedure MSQL/271 ('FINV','ICOD',kFalse,kFalse) {NEXT File FieldN,Exact,Search} ;; !+0127
End While
Close working message

OK message (High position,Large size) {Productos raiz: [VRN]//Productos actualizados: [VPN]}

Call procedure MINV/500 {INICIALIZA EL MODULO}


; !+0025 !+0008 !+0124

239 SEARCH LISTA
-----------------------------

Call procedure MCPAV01/162 ('EINV#1','FINV') {SHOW BUTTONS Win File}                                          ;; !+0121

Begin reversible block
    Set current list LIBLISTA
    Clear search format
    Call procedure MSQL/281 ("UCOD=IUM") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
End reversible block
Search list (From start)
If flag false
    Calculate #L as 0
End If
Redraw windows

240 LOAD LISTA
------------------------
Begin reversible block
   Set current list LIBLISTA
   Set main file {FUNIDAD}
   ; Set search as calculation {(DEST=CIAKYT)&(DESCXC=1)}
End reversible block
; If flag false
; Clear list
; Quit procedure
; End If
Define list {UCOD,UDESCR}
Clear list
Call procedure MSQL/276 ('FUNIDAD',UCOD,kFalse,kFalse,0) {BUILD_LIST_FROM_FILE File,Field, Exact,Search,Limit}
Calculate #L as 1

245 LOAD ALM 01
--------------------------
If (CIAALIAS<>'CORAL')&(CIAALIAS<>'PISOS')
    Quit procedure
End If
Format variable VALMACEN0 (Short number 2 dp)
Call procedure MSQL/251 ('FALM',ALMKEY,jst(ICOD,13,'01',0),kTrue) {SINGLE_FILE_FIND File,Field,Value Exact}
Calculate VALMACEN0 as ALMCANT ;; #F
Redraw windows (All windows)
Clear selected files {FALM}

300 ALTA INV SERVICIOS
--------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN - PRUEBAS.EINV#1 as at 14/04/2026 (14/04/2026PAGE                                         17:40:22)
                                                                                                                                13
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Begin reversible block
   Set main file {FALMCAT}
   Define list {CATALM}
   Clear search format
   Call procedure MSQL/281 ("CATTIPO=''") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
End reversible block
Call procedure MSQL/276 ('FALMCAT',CATALM,kFalse,kTrue,0) {BUILD_LIST_FROM_FILE File,Field, Exact,Search,Limit}
Set main file {FALM}
For each line in list from 1 to #LN step 1
   Load from list
   Calculate MEMALM as CATALM
   Call procedure MBASE/52 {VALIDA ALM MEMALM DE ICOD}
   Call procedure MBASE/74 ('FALM',ALMCANT,10000) {EDITA UN FIELD} ;; PARA QUE SE PUEDA ASIGNAR, ELLOS SABEN QUE ESTE MOVIMIENTO NO
   GENER UNA TRANSACCION
   Call procedure MBASE/74 ('FINV',ISTKACT,ALMCANT,1,'+') {EDITA UN FIELD}
   Clear selected files {FALM,FALMCAT}
End For
Redraw windows (All windows)

Local variable VLISTA (List)

No procedure errors found
```

### [Inventarios] EINV#8 - consultas

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 14/04/2026 (14/04/2026 17:56:19)                                           PAGE 1

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
0         INIT
       Call procedure MBASE/310 {POCISIONA VENTANA}

1        Pushbutton              User defined         22     22    N                                                                                               Center
     Text: Auxiliar
      If #CLICK
         Calculate #S3 as 'EINV#8/1'
         Call procedure INICIO/30 {Accesos}
         If ((CIAALIAS='CADER')|(CIAALIAS='KARELE'))&(len(ICOD)=CIARAIZ)
             ; PRUEBA PARA VER ROTACION
             Open window EINV#10B
         Else
             Call procedure MSTUDIO/21 ('EINV#10') {OPEN WINDOW}
         End If
      End If

2        Pushbutton              User defined      44     22                                       N                                                               Center
     Text: Pedidos por cliente
      If #CLICK
         Calculate #S3 as 'EINV#8/2'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#7') {OPEN WINDOW}
      End If

3        Pushbutton              User defined      44     121                                      N                                                               Center
     Text: *
      If #CLICK
         Calculate #S3 as 'EINV#8/3'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#7A') {OPEN WINDOW}
      End If

4        Pushbutton              User defined        44     143  N                                                                                                 Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/4'
         Call procedure INICIO/30 {Accesos}
         If CIAALIAS<>'LETICIA'
            Call procedure MSTUDIO/21 ('EINV#7AA') {OPEN WINDOW}
         Else
            Call procedure MSTUDIO/21 ('EINV#7AALET') {OPEN WINDOW}
         End If
      End If

5        Pushbutton              User defined       66    22                                       N                                                               Center
     Text: Cotizaciones por cliente
      If #CLICK
         Calculate #S3 as 'EINV#8/5'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#47
         Call procedure MSTUDIO/21 ('EINV#47') {OPEN WINDOW}
      End If

6        Pushbutton              User defined      88     22                                       N                                                               Center
     Text: Ventas por cliente
      If #CLICK
         Calculate #S3 as 'EINV#854'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#6
         Call procedure MSTUDIO/21 ('EINV#6') {OPEN WINDOW}
      End If

7        Pushbutton              User defined      88     121                                      N                                                               Center
     Text: *
      If #CLICK
         Calculate #S3 as 'EINV#8/6'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#6BA
         Call procedure MSTUDIO/21 ('EINV#6BA') {OPEN WINDOW}
      End If

8        Pushbutton              User defined        88     143     N                                                                                              Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/7'
         Call procedure INICIO/30 {Accesos}
         If #SHIFT
            ; Open window (Use v1 coordinates) EINV#6AAA ;; leticia
            Call procedure MSTUDIO/21 ('EINV#6AAA') {OPEN WINDOW}
         Else
            ; Open window (Use v1 coordinates) EINV#6AA
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 14/04/2026 (14/04/2026 17:56:19)                                           PAGE 2

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
             Call procedure MSTUDIO/21 ('EINV#6AA') {OPEN WINDOW}
          End If
       End If

9        Pushbutton              User defined       110   22                                       N                                                               Center
     Text: Ventas desglozadas
      If #CLICK
         Calculate #S3 as 'EINV#8/8'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#38
         Call procedure MSTUDIO/21 ('EINV#38') {OPEN WINDOW}
      End If

10       Pushbutton              User defined       132   22                                       N                                                               Center
     Text: Ventas por sucursal
      If #CLICK
         Calculate #S3 as 'EINV#8/9'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#30
         Call procedure MSTUDIO/21 ('EINV#30') {OPEN WINDOW}
      End If

11       Pushbutton              User defined       154   22                                       N                                                               Center
     Text: Ventas anuales
      If #CLICK
         Calculate #S3 as 'EINV#8/10'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#2
         Call procedure MSTUDIO/21 ('EINV2#2') {OPEN WINDOW}
      End If

12       Pushbutton              User defined      176    22                                       N                                                               Center
     Text: Ventas anuales resumen
      If #CLICK
         Calculate #S3 as 'EINV#8/12A'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV2#20') {OPEN WINDOW}
      End If

13       Pushbutton              User defined       198   22                                       N                                                               Center
     Text: Ordenado a proveedores
      If #CLICK
         Calculate #S3 as 'EINV#8/11'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12
         Call procedure MSTUDIO/21 ('EINV#12') {OPEN WINDOW}
      End If

14       Pushbutton              User defined       198   143                                      N                                                               Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/13'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12A
         Call procedure MSTUDIO/21 ('EINV#12A') {OPEN WINDOW}
      End If

15       Pushbutton              User defined       220   22                                       N                                                               Center
     Text: Cotizado a proveedores
      If #CLICK
         Calculate #S3 as 'EINV#8/14'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12B
         Call procedure MSTUDIO/21 ('EINV#12B') {OPEN WINDOW}
      End If

16       Pushbutton              User defined      242    22                                       N                                                               Center
     Text: Compras por proveedor
      If #CLICK
         Calculate #S3 as 'EINV#8/12'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#5
         Call procedure MSTUDIO/21 ('EINV#5') {OPEN WINDOW}
      End If

17       Pushbutton              User defined       242                                143         N                                                               Center
     Text: DT
      If #CLICK
         Calculate #S3 as 'EINV#8/13'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12A
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 14/04/2026 (14/04/2026 17:56:19)                                           PAGE 3

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          Call procedure MSTUDIO/21 ('EINV#50') {OPEN WINDOW}
       End If

18       Pushbutton              User defined       264   22                                       N                                                               Center
     Text: Compras desglozadas
      If #CLICK
         Calculate #S3 as 'EINV#8/16'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#39
         Call procedure MSTUDIO/21 ('EINV#39') {OPEN WINDOW}
      End If

19       Pushbutton              User defined       286   22                                       N                                                               Center
     Text: Compras anuales
      If #CLICK
         Calculate #S3 as 'EINV#8/19'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#4
         Call procedure MSTUDIO/21 ('EINV2#4') {OPEN WINDOW}
      End If

20       Pushbutton              User defined           330       22       N                         Center
     Text: Piezas
      If #CLICK
         Calculate #S3 as 'EINV#8/15'
         Call procedure INICIO/30 {Accesos}
         If (ICOD='A@A')|(ICOD='A@B')|(ICOD='A@C') ;; A@A=MONEDERO A@B=VALES DE CXC DE EMPRESAS A@C=HISTORICO DE A@A PARA QUE EN
         A@A SE VEAN SOLO LOS VIGENTES
             Call procedure MSTUDIO/21 ('EINV#28MO') {OPEN WINDOW}
         Else
             If mid(CIAPLUGS,25,1)<>'X'
                OK message (High position,Large size) {Esta versión no contiene el módulo de PIEZAS}
                Quit procedure
             End If
             Call procedure MSTUDIO/21 ('EINV#28') {OPEN WINDOW}
         End If
      End If

21       Pushbutton              User defined       352   22                                       N                                                               Center
     Text: Piezas surtidas
      If #CLICK
         Calculate #S3 as 'EINV#8/19'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#28A
         Call procedure MSTUDIO/21 ('EINV#28A') {OPEN WINDOW}
      End If

22       Pushbutton              User defined       374   22                                       N                                                               Center
     Text: W.I.P.
      If #CLICK
         Calculate #S3 as 'EINV#8/17'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#42
         Call procedure MSTUDIO/21 ('EINV#42') {OPEN WINDOW}
      End If

23       Pushbutton              User defined       374   143                                      N                                                               Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/21'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#42A
         Call procedure MSTUDIO/21 ('EINV#42A') {OPEN WINDOW}
      End If

24       Pushbutton              User defined       396   22                                       N                                                               Center
     Text: E.D.I.
      If #CLICK
         Calculate #S3 as 'EINV#8/22'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#44
         Call procedure MSTUDIO/21 ('EINV#44') {OPEN WINDOW}
      End If

25       Pushbutton              User defined      418    22                                       N                                                               Center
     Text: Habilitaciones pendientes
      If #CLICK
         Calculate #S3 as 'EINV#8/22'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#51') {OPEN WINDOW}
      End If
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 14/04/2026 (14/04/2026 17:56:19)                                           PAGE 4

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

26       Pushbutton              User defined                             440          22          N                                                               Center
     Text: Documentos
      If #CLICK
         Calculate #S3 as 'EINV#8/24'
         Call procedure INICIO/30 {Accesos}
         Open window EINV#24
      End If

27       Pushbutton              User defined       308   22                                       N                                                               Center
     Text: Compras anuales resumen
      If #CLICK
         Calculate #S3 as 'EINV#8/27'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#21
         Call procedure MSTUDIO/21 ('EINV2#21') {OPEN WINDOW}
      End If



List of attribute codes:
         I      Invisible                                                            A        Show nulls
         U      Upper case                                                           -        Negatives allowed
         E      Zero shown empty                                                     L        Local
         J      Unique index check                                                   F        Automatic find
         S      Do not scale                                                         X        Do not flash
         H      Horizontal scroll bar                                                V        Vertical scroll bar
         M      Multiple select                                                      G        Do not gray
         Y      Enterable                                                            Q        Tabbable
         T      Table header                                                         C        Column header
         Z      Autoextend                                                           D        Pushbutton active during enter data
         N      Pushbutton active when no procedures running                         R        Pushbutton inactive if no current record
         K      Input mask                                                           P        Drag and drop
         B      Autotab                                                              n        Numeric format
         2      Boolean format                                                       d        Date/Time format
         x      Not active
         y      Disabled


No procedure errors found
```

### [Inventarios] EINV#10 - auxiliares

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 21/04/2026 (21/04/2026 11:10:45)                                           PAGE 1

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
0         INIT
       Call procedure MBASE/310 {POCISIONA VENTANA}

1        Pushbutton              User defined         22     22    N                                                                                               Center
     Text: Auxiliar
      If #CLICK
         Calculate #S3 as 'EINV#8/1'
         Call procedure INICIO/30 {Accesos}
         If ((CIAALIAS='CADER')|(CIAALIAS='KARELE'))&(len(ICOD)=CIARAIZ)
             ; PRUEBA PARA VER ROTACION
             Open window EINV#10B
         Else
             Call procedure MSTUDIO/21 ('EINV#10') {OPEN WINDOW}
         End If
      End If

2        Pushbutton              User defined      44     22                                       N                                                               Center
     Text: Pedidos por cliente
      If #CLICK
         Calculate #S3 as 'EINV#8/2'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#7') {OPEN WINDOW}
      End If

3        Pushbutton              User defined      44     121                                      N                                                               Center
     Text: *
      If #CLICK
         Calculate #S3 as 'EINV#8/3'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#7A') {OPEN WINDOW}
      End If

4        Pushbutton              User defined        44     143  N                                                                                                 Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/4'
         Call procedure INICIO/30 {Accesos}
         If CIAALIAS<>'LETICIA'
            Call procedure MSTUDIO/21 ('EINV#7AA') {OPEN WINDOW}
         Else
            Call procedure MSTUDIO/21 ('EINV#7AALET') {OPEN WINDOW}
         End If
      End If

5        Pushbutton              User defined       66    22                                       N                                                               Center
     Text: Cotizaciones por cliente
      If #CLICK
         Calculate #S3 as 'EINV#8/5'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#47
         Call procedure MSTUDIO/21 ('EINV#47') {OPEN WINDOW}
      End If

6        Pushbutton              User defined      88     22                                       N                                                               Center
     Text: Ventas por cliente
      If #CLICK
         Calculate #S3 as 'EINV#854'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#6
         Call procedure MSTUDIO/21 ('EINV#6') {OPEN WINDOW}
      End If

7        Pushbutton              User defined      88     121                                      N                                                               Center
     Text: *
      If #CLICK
         Calculate #S3 as 'EINV#8/6'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#6BA
         Call procedure MSTUDIO/21 ('EINV#6BA') {OPEN WINDOW}
      End If

8        Pushbutton              User defined        88     143     N                                                                                              Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/7'
         Call procedure INICIO/30 {Accesos}
         If #SHIFT
            ; Open window (Use v1 coordinates) EINV#6AAA ;; leticia
            Call procedure MSTUDIO/21 ('EINV#6AAA') {OPEN WINDOW}
         Else
            ; Open window (Use v1 coordinates) EINV#6AA
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 21/04/2026 (21/04/2026 11:10:45)                                           PAGE 2

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
             Call procedure MSTUDIO/21 ('EINV#6AA') {OPEN WINDOW}
          End If
       End If

9        Pushbutton              User defined       110   22                                       N                                                               Center
     Text: Ventas desglozadas
      If #CLICK
         Calculate #S3 as 'EINV#8/8'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#38
         Call procedure MSTUDIO/21 ('EINV#38') {OPEN WINDOW}
      End If

10       Pushbutton              User defined       132   22                                       N                                                               Center
     Text: Ventas por sucursal
      If #CLICK
         Calculate #S3 as 'EINV#8/9'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#30
         Call procedure MSTUDIO/21 ('EINV#30') {OPEN WINDOW}
      End If

11       Pushbutton              User defined       154   22                                       N                                                               Center
     Text: Ventas anuales
      If #CLICK
         Calculate #S3 as 'EINV#8/10'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#2
         Call procedure MSTUDIO/21 ('EINV2#2') {OPEN WINDOW}
      End If

12       Pushbutton              User defined      176    22                                       N                                                               Center
     Text: Ventas anuales resumen
      If #CLICK
         Calculate #S3 as 'EINV#8/12A'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV2#20') {OPEN WINDOW}
      End If

13       Pushbutton              User defined       198   22                                       N                                                               Center
     Text: Ordenado a proveedores
      If #CLICK
         Calculate #S3 as 'EINV#8/11'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12
         Call procedure MSTUDIO/21 ('EINV#12') {OPEN WINDOW}
      End If

14       Pushbutton              User defined       198   143                                      N                                                               Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/13'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12A
         Call procedure MSTUDIO/21 ('EINV#12A') {OPEN WINDOW}
      End If

15       Pushbutton              User defined       220   22                                       N                                                               Center
     Text: Cotizado a proveedores
      If #CLICK
         Calculate #S3 as 'EINV#8/14'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12B
         Call procedure MSTUDIO/21 ('EINV#12B') {OPEN WINDOW}
      End If

16       Pushbutton              User defined      242    22                                       N                                                               Center
     Text: Compras por proveedor
      If #CLICK
         Calculate #S3 as 'EINV#8/12'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#5
         Call procedure MSTUDIO/21 ('EINV#5') {OPEN WINDOW}
      End If

17       Pushbutton              User defined       242                                143         N                                                               Center
     Text: DT
      If #CLICK
         Calculate #S3 as 'EINV#8/13'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#12A
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 21/04/2026 (21/04/2026 11:10:45)                                           PAGE 3

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          Call procedure MSTUDIO/21 ('EINV#50') {OPEN WINDOW}
       End If

18       Pushbutton              User defined       264   22                                       N                                                               Center
     Text: Compras desglozadas
      If #CLICK
         Calculate #S3 as 'EINV#8/16'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#39
         Call procedure MSTUDIO/21 ('EINV#39') {OPEN WINDOW}
      End If

19       Pushbutton              User defined       286   22                                       N                                                               Center
     Text: Compras anuales
      If #CLICK
         Calculate #S3 as 'EINV#8/19'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#4
         Call procedure MSTUDIO/21 ('EINV2#4') {OPEN WINDOW}
      End If

20       Pushbutton              User defined           330       22       N                         Center
     Text: Piezas
      If #CLICK
         Calculate #S3 as 'EINV#8/15'
         Call procedure INICIO/30 {Accesos}
         If (ICOD='A@A')|(ICOD='A@B')|(ICOD='A@C') ;; A@A=MONEDERO A@B=VALES DE CXC DE EMPRESAS A@C=HISTORICO DE A@A PARA QUE EN
         A@A SE VEAN SOLO LOS VIGENTES
             Call procedure MSTUDIO/21 ('EINV#28MO') {OPEN WINDOW}
         Else
             If mid(CIAPLUGS,25,1)<>'X'
                OK message (High position,Large size) {Esta versión no contiene el módulo de PIEZAS}
                Quit procedure
             End If
             Call procedure MSTUDIO/21 ('EINV#28') {OPEN WINDOW}
         End If
      End If

21       Pushbutton              User defined       352   22                                       N                                                               Center
     Text: Piezas surtidas
      If #CLICK
         Calculate #S3 as 'EINV#8/19'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#28A
         Call procedure MSTUDIO/21 ('EINV#28A') {OPEN WINDOW}
      End If

22       Pushbutton              User defined       374   22                                       N                                                               Center
     Text: W.I.P.
      If #CLICK
         Calculate #S3 as 'EINV#8/17'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#42
         Call procedure MSTUDIO/21 ('EINV#42') {OPEN WINDOW}
      End If

23       Pushbutton              User defined       374   143                                      N                                                               Center
     Text: CT
      If #CLICK
         Calculate #S3 as 'EINV#8/21'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#42A
         Call procedure MSTUDIO/21 ('EINV#42A') {OPEN WINDOW}
      End If

24       Pushbutton              User defined       396   22                                       N                                                               Center
     Text: E.D.I.
      If #CLICK
         Calculate #S3 as 'EINV#8/22'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV#44
         Call procedure MSTUDIO/21 ('EINV#44') {OPEN WINDOW}
      End If

25       Pushbutton              User defined      418    22                                       N                                                               Center
     Text: Habilitaciones pendientes
      If #CLICK
         Calculate #S3 as 'EINV#8/22'
         Call procedure INICIO/30 {Accesos}
         Call procedure MSTUDIO/21 ('EINV#51') {OPEN WINDOW}
      End If
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#8 as at 21/04/2026 (21/04/2026 11:10:45)                                           PAGE 4

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

26       Pushbutton              User defined                             440          22          N                                                               Center
     Text: Documentos
      If #CLICK
         Calculate #S3 as 'EINV#8/24'
         Call procedure INICIO/30 {Accesos}
         Open window EINV#24
      End If

27       Pushbutton              User defined       308   22                                       N                                                               Center
     Text: Compras anuales resumen
      If #CLICK
         Calculate #S3 as 'EINV#8/27'
         Call procedure INICIO/30 {Accesos}
         ; Open window (Use v1 coordinates) EINV2#21
         Call procedure MSTUDIO/21 ('EINV2#21') {OPEN WINDOW}
      End If



List of attribute codes:
         I      Invisible                                                            A        Show nulls
         U      Upper case                                                           -        Negatives allowed
         E      Zero shown empty                                                     L        Local
         J      Unique index check                                                   F        Automatic find
         S      Do not scale                                                         X        Do not flash
         H      Horizontal scroll bar                                                V        Vertical scroll bar
         M      Multiple select                                                      G        Do not gray
         Y      Enterable                                                            Q        Tabbable
         T      Table header                                                         C        Column header
         Z      Autoextend                                                           D        Pushbutton active during enter data
         N      Pushbutton active when no procedures running                         R        Pushbutton inactive if no current record
         K      Input mask                                                           P        Drag and drop
         B      Autotab                                                              n        Numeric format
         2      Boolean format                                                       d        Date/Time format
         x      Not active
         y      Disabled


No procedure errors found
```

### [Inventarios] EINV#10 - filtra almacén

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#10 as at 29/04/2026 (29/04/2026 13:40:54) PAGE 1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

0 INIT
---------
Call procedure MBASE/310 {POCISIONA VENTANA}
Set current list #L3
Clear list
Calculate #1D3 as 0
If (CIAALIAS='SANTORY')&(#UL=0)
    ; ESTO ES UNA PRUEBA PARA VER QUE ES MAS RAPIDO SI USAR EL LONG DATA PERO EL CALCULO DEL STOCK LENTO O QUITAR EL LONG DATA Y EL
    CALCULO RAPIDO

   Yes/No message {NORMAL?}
   If flag true
       Define list (Store long data) {DFECHA,DNUM,AICANT,AICOSTO,AITIPMV,AISEQ,DRUTA,#1D3,AIALMACEN,DRUTA,AIUSEQ,DIUSEQ,AIREVAL,AISEQ,LOP
       EDIM,LOSEQ,DREFER,DREFERELLOS,DSEQ,AIPZAS,AISKU,AICANTF,DREFERELLOS,AIPRECIO}
   Else
       Define list {DFECHA,DNUM,AICANT,AICOSTO,AITIPMV,AISEQ,DRUTA,#1D3,AIALMACEN,DRUTA,AIUSEQ,DIUSEQ,AIREVAL,AISEQ,LOPEDIM,LOS
       EQ,DREFER,DREFERELLOS,DSEQ,AIPZAS,AISKU,AICANTF,DREFERELLOS,AIPRECIO}
   End If

Else
  Define list (Store long data) {DFECHA,DNUM,AICANT,AICOSTO,AITIPMV,AISEQ,DRUTA,#1D3,AIALMACEN,DRUTA,AIUSEQ,DIUSEQ,AIREVAL,AISEQ,LOP
  EDIM,LOSEQ,DREFER,DREFERELLOS,DSEQ,AIPZAS,AISKU,AICANTF,DREFERELLOS,AIPRECIO}
End If




Call procedure 240 {LOAD DOCTOS}
Redraw windows (All windows)

1 #4D2
-----------

2 SortByFecha
---------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field DFECHA
       Set sort field AISEQ
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

3 SortByDoc
------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field DNUM
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

4 SortByTM
-----------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AITIPMV
       Set sort field DFECHA
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

5 SortByCosto
---------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AICOSTO
       Sort list
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#10 as at 29/04/2026 (29/04/2026 13:40:54) PAGE 2
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

6 SortByEntradas
-------------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AICANT
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

7 SortByStock
--------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field #1
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

8 SortByAlm
------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AIALMACEN
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

9 SortByLote
------------------
If #CLICK
   No/Yes message (High position) {Desea recostear el lote?}
   If flag false
       Begin reversible block
          Set current list #L3
          Clear sort fields
          Set sort field DRUTA
          Sort list
          Call procedure 239 {RECALC SALDO}
          Redraw lists
       End reversible block
   End If
End If

10 SortByUsr
-------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AIUSEQ
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
   End reversible block
End If

11 SortByReval
----------------------
If #CLICK
   Begin reversible block
       Set current list #L3
       Clear sort fields
       Set sort field AIUSEQ
       Sort list
       Call procedure 239 {RECALC SALDO}
       Redraw lists
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#10 as at 29/04/2026 (29/04/2026 13:40:54) PAGE 3
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   End reversible block
End If

12 #L3
----------

13 FiltrarAlm
------------------
If #CLICK
   Local variable VALMA (Character 10000000)
   Set current list #L3
   Load from list
   Calculate VALMA as AIALMACEN
   Deselect list line(s) (All lines)
   Clear search format
   Set search as calculation {AIALMACEN=VALMA} ;; $+
   Search list (From start,Select matches (OR))
   Invert selection for line(s) (All lines)
   Delete selected lines
   Call procedure 241 (VALMA) {Calc Saldo Inicial del Almacén} ;; !+0049
   Call procedure 239 {RECALC SALDO}
   ; If #4<>0 ;; !+0049
   ; OK message (High position,Large size) {LOS SALDOS REFLEJADOS NO SON LOS REALES DEL ALMACEN SOLO UNA REFERENCIA DE MOVIMIENTOS}
   ; End If
   Redraw windows
End If

14 Filtra XXX
-------------------
If #CLICK
   Local variable VALMA (Character 10000000)
   Set current list #L3
   Load from list
   Calculate VALMA as AIALMACEN
   Deselect list line(s) (All lines)
   Clear search format
   Call procedure MSQL/281 ("AITIPMV='R'") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
   Search list (From start,Select matches (OR))
   Invert selection for line(s) (All lines)
   Delete selected lines
   Call procedure 239 {RECALC SALDO}
   Redraw windows
End If

239 RECALC SALDO
------------------------------
Calculate #L as 1
Calculate #2D3 as #4D3
Repeat
   Load from list
   Calculate #2D3 as #2+AICANT
   Calculate #1D3 as #2D3
   Replace line in list
   Calculate #L as #L+1
Until #L>#LN
Calculate #L as 1

240 LOAD DOCTOS
-----------------------------
Begin reversible block
   Set main file {FAXINV}
   Set current list #L3
   Clear search format
   If (CIAALIAS<>'BABY')&(CIAALIAS<>'OMEGA')&(CIAALIAS='SINBIOTIK')
       Call procedure MSQL/281 ("(AIMES=1)&(DEST=CIAKYT)&(DMULTICIA=LVCIA)") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
   Else
       Call procedure MSQL/281 ("(AIMES=1)&(DEST=CIAKYT)&(DMULTICIA=LVCIA)") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}                                                                                ;; TENIA QUE NO
       SALIERAN AICANT=0 PERO NO SE VEN LAS CANCELACIONES
   End If

   If (CIAOBS=99)|(#SHIFT)
       If (CIAKYT=1)|(#SHIFT)
           Clear search format
           Call procedure MSQL/281 ("(AIMES=1)") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
       Else
           Clear search format
           Call procedure MSQL/281 ("(AIMES=1)&(AIMES=0)") {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
       End If
   End If


End reversible block
Calculate #4D3 as ISTKANT
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#10 as at 29/04/2026 (29/04/2026 13:40:54) PAGE 4
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Clear list

Call procedure MSQL/276 ('FAXINV',ISEQ,kTrue,kTrue,0) {BUILD_LIST_FROM_FILE File,Field, Exact,Search,Limit}
Calculate #L as 1
Call procedure 239 {RECALC SALDO}

241 Calc Saldo Inicial del Almacén
------------------------------------------------

Parameter PALM (Character 10000000)

Call procedure MSQL/251 ('FALM',ALMKEY,jst(ICOD,13,PALM,0),kTrue) {SINGLE_FILE_FIND File,Field,Value Exact}

Calculate #4D3 as ALMCANT-tot(AICANT)

Clear selected files {FALM}
; !+0049

495 IMPRIME
--------------------
Calculate #S3 as 'EINV#10/12'
Call procedure INICIO/30 {Accesos}
Calculate #S3 as con('AUXILIAR DE PRODUCTO ',ICOD,' ',IDESCR,' STOCK ANT ',#4D2)
Calculate #S2 as "jst('Fecha',9,' ',2,chr(9),1,'Doc.',9,chr(9),1,'T.M.',3,chr(9),1,'Costo',-10,chr(9),1,'Entradas',-12,chr(9),1,'Salidas',-11,chr(9),1,'Stock',-11,chr(9),1,'
',2,'Alm',2,chr(9),1,' ',4,'Lote',8,'Referencia',10,'Pzas',10)"
Calculate #S1 as "con(jst(DFECHA,-9,chr(9),1),' ',jst(DNUM,7,chr(9),1),' ',jst(AITIPMV,2,chr(9),1),'
',jst(AICOSTO,'-11N,',chr(9),1,abs(AICANT)*(AICANT>=0),'-11N3E,',chr(9),1,abs(AICANT)*(AICANT<0),'-11N3E,',chr(9),1,#1D3,'-11N,',chr(9),1),' ',jst(AI
Call procedure INICIO/38 {IMPRIME PANTALLA}

No procedure errors found
```

### [Inventarios] EINV#6 - ventas por cliente

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#6 as at 21/04/2026 (21/04/2026 14:31:18)                                           PAGE 1

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
0         INIT
       Set current list #L2
       Clear list
       Define list (Store long data) {CLICOD,CLINOM,AICANTF,AIPRECIO,#1D2,#2D2}
       Call procedure 240 {LOAD DOCTOS}
       Redraw windows (All windows)

1       Display (border)                                                  312          239         y                                                               Right
     Calculation: tot(#1)

2       Display (border)                                                  312          327         y                                                               Right
     Calculation: tot(#2D2)

3        Pushbutton               User defined     156     78       N                                            Center
     Text: Marcar par 9
      If #CLICK
         Calculate #S3 as 'EINV#6/9'
         Call procedure INICIO/30 {Accesos}
         Begin reversible block
           Set main file {FCLI}
         End reversible block
         Calculate #L as 1
         Repeat
           Load from list
           Call procedure MSQL/261 ('FCLI',CLICOD,CLICOD,kTrue,kFalse,1) {FIND File,Field,Value, Exact,Search,Limit}
           Calculate LVOTROS as ''
           Call procedure MBASE/67 (LVOTROS,CLIPAR9,con(9,CIAALIAS)) {Arma LVOTROS}
           Call procedure MBASE/69 ('FCLI',LVOTROS) {EDITA UN FILE FILE_UOTROS}
           Calculate #L as #L+1
         Until #L>#LN
         Clear selected files {FCLI}
      End If

4         Table                            #L2                            -1           -1          VTC                                                             Left

5        Pushbutton              User defined                             3            1           N                                                               Left
     Text: Código
      If #CLICK
         Begin reversible block
           Set current list #L2
           Clear sort fields
           Set sort field CLICOD
           Sort list
           Redraw lists
         End reversible block
      End If

6        Pushbutton              User defined                             3            80          N                                                               Left
     Text: Cliente
      If #CLICK
         Begin reversible block
           Set current list #L2
           Clear sort fields
           Set sort field CLINOM
           Sort list
           Redraw lists
         End reversible block
      End If

7        Pushbutton                        User defined                   3            245         N                                                               Right
     Text: Cantidad
      If #CLICK
         Begin reversible block
           Set current list #L2
           Clear sort fields
           Set sort field #1
           Sort list
           Redraw lists
         End reversible block
      End If

8        Pushbutton                        User defined                   3            318         N                                                               Right
     Text: Importe
      If #CLICK
         Begin reversible block
           Set current list #L2
           Clear sort fields
           Set sort field #2
           Sort list
           Redraw lists
         End reversible block
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#6 as at 21/04/2026 (21/04/2026 14:31:18)                                           PAGE 2

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       End If

9         Entry field                      CLICOD                         24           3                                                                           Left

10        Entry field                      CLINOM                         24           84                                                                          Left

11        Entry field                      #1D2                           24           249         -                                                               Right

12        Entry field                      #2D2                           24           319         -                                                               Right

240     LOAD DOCTOS
      Begin reversible block
        Set main file {FAXINV}
        Set current list #L2
        Call procedure MSQL/281 ("(CLISEQ<>0)&(D
        EST=CIAKYT)&(DMULTICIA=LVCIA)&(AIMES=1)&
        (DESFACT=1)&(DOTROSTXT<>'POS')&(DCONTROL
        POS=0)&((CLICIA=0)|(CLICIA=CIACIAUSR)|(CIACIAUSR=0))&((CIASOLOUSR=0)|(mid(fld('CLIPAR',CIAUSRES),2,9)=CIAUSRPAR))") {SET_SEARC
        H_AS_CALC
      End reversible block
      Clear list
      Call procedure MSQL/276 ('FAXINV',ISEQ,kTrue,kTrue,0) {BUILD_LIST_FROM_FILE File,Field, Exact,Search,Limit}
      Set final line number {#LN+1}
      Calculate #L as #LN
      Calculate CLICOD as 'ZZZZZZZZZ'
      Replace line in list
      Clear sort fields
      Set sort field CLICOD
      Sort list
      Calculate #L as 1
      Load from list
      Calculate #S2 as CLICOD
      Calculate #3 as AICANTF
      Calculate #4 as AICANTF*AIPRECIO
      Calculate #L as #L+1
      Repeat
        Load from list
        If #S2=CLICOD
            Calculate #3 as #3+AICANTF
            Calculate #4 as #4+AICANTF*AIPRECIO
            Delete line in list
        Else
            Calculate #L as #L-1
            Load from list
            Calculate #1 as #3
            Calculate #2 as #4
            Replace line in list
            Calculate #L as #L+1
            Load from list
            Calculate #S2 as CLICOD
            Calculate #3 as AICANTF
            Calculate #4 as AICANTF*AIPRECIO
            Calculate #L as #L+1
        End If
      Until #L>#LN
      Calculate #L as #LN
      Delete line in list
      Calculate #L as 1

495     IMPRIME
      Calculate #S3 as 'EINV#6/495'
      Call procedure INICIO/30 {Accesos}
      Calculate #S1 as "con(jst(CLICOD,6),' ',jst(mid(CLINOM,1,30),30),' ',jst(#1,-9),' ',jst(#2,-11))"
      Calculate #S2 as "con(jst('Código',6),' ',jst('Cliente',30),' ',jst('Cantidad',-9),' ',jst('Importe',-11))"
      Calculate #S3 as con('VENTAS POR CLIENTE ',IDESCR)
      Call procedure INICIO/38 {IMPRIME PANTALLA}



List of attribute codes:
         I      Invisible                                                            A        Show nulls
         U      Upper case                                                           -        Negatives allowed
         E      Zero shown empty                                                     L        Local
         J      Unique index check                                                   F        Automatic find
         S      Do not scale                                                         X        Do not flash
         H      Horizontal scroll bar                                                V        Vertical scroll bar
         M      Multiple select                                                      G        Do not gray
         Y      Enterable                                                            Q        Tabbable
         T      Table header                                                         C        Column header
         Z      Autoextend                                                           D        Pushbutton active during enter data
         N      Pushbutton active when no procedures running                         R        Pushbutton inactive if no current record
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Window PROSCAI_GERMAN - PRUEBAS.EINV#6 as at 21/04/2026 (21/04/2026 14:31:18)                                           PAGE 3

          TYPE                              NAME                        ROW           COL          ATTRIBUTES                                                     JUST
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          K        Input mask                                                         P       Drag and drop
          B        Autotab                                                            n       Numeric format
          2        Boolean format                                                     d       Date/Time format
          x        Not active
          y        Disabled


No procedure errors found
```

---

## Pendientes de transcripción por módulo
- Ventas: pendiente de PDFs de ventanas/procedimientos del módulo de ventas fuera de Inventarios.
- Compras: pendiente de PDFs.
- Bancos: pendiente de PDFs.
- Contabilidad: pendiente de PDFs.

### [Inventarios] EINV#38 - ventas desglosadas
- Fuente PDF: `/Users/erick/Downloads/VENTAS DESGLOSADAS.pdf`
- Raw TXT: `/Users/erick/Documents/dev/tuvansa-erp-backend/docs/omnis/raw/inventarios_ventas_desglosadas_omnis.txt`
- Uso: `Define list` y `LOAD DOCTOS` del modal Ventas desglosadas (filtros `DEST/DMULTICIA`, `AIMES`, `DESFACT`, `POS`).

```text
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#38 as at 30/04/2026 (30/04/2026 12:41:34) PAGE 1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

0 INIT
---------
Call procedure MBASE/310 {POCISIONA VENTANA}
Format variable LISTA10 (List)
Set current list LISTA10
Clear list
Define list {CLICOD,CLINOM,AICANTF,AIPRECIO,DNUM,DFECHA,DTIPOC2,DREFERELLOS,AIDESCTO,AISEQ,AIOTROS,DSUCURSAL}
Call procedure 240 {LOAD DOCTOS}
Redraw windows (All windows)

1 TOTAICANTF
-----------------------

2 LIST CLICK
--------------------

3 SortByCodigo
----------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field CLICOD
       Set sort field AISEQ (Descending)
       Sort list
       Redraw lists
   End reversible block
End If

4 SortByNombre
-----------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field CLINOM
       Sort list
       Redraw lists
   End reversible block
End If

5 SortByCantidad
-------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field AICANTF
       Set sort field ICOD
       Sort list
       Redraw lists
   End reversible block
End If

6 SortByPrecio
---------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field AIPRECIO
       Sort list
       Redraw lists
   End reversible block
End If

7 SortByDoc
------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DNUM
       Sort list
       Redraw lists
   End reversible block
End If

8 SortByFecha
---------------------
If #CLICK
   Begin reversible block
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#38 as at 30/04/2026 (30/04/2026 12:41:34) PAGE 2
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       Set current list LISTA10
       Clear sort fields
       Set sort field DFECHA
       Sort list
       Redraw lists
   End reversible block
End If

9 SortByPrecioUS
-------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DFECHA
       Sort list
       Redraw lists
   End reversible block
End If

10 SortByTCDolar
--------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DFECHA
       Sort list
       Redraw lists
   End reversible block
End If

11 SortByDescto
------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DFECHA
       Sort list
       Redraw lists
   End reversible block
End If

12 SortByDreferellos
-----------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DREFERELLOS
       Sort list
       Redraw lists
   End reversible block
End If

13 CLICOD
-----------------

14 CLINOM
-----------------

15 AICANTF
------------------

16 AIPRECIO
--------------------

17 DNUM
--------------

18 DFECHA
------------------

19 PRECIOUS
---------------------

20 DTIPOC2
------------------

21 DESCTO
------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#38 as at 30/04/2026 (30/04/2026 12:41:34) PAGE 3
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
22 DREFERELLOS
---------------------------

23 SortByDsucursal
----------------------------
If #CLICK
   Begin reversible block
       Set current list LISTA10
       Clear sort fields
       Set sort field DSUCURSAL
       Sort list
       Redraw lists
   End reversible block
End If

24 DSUCURSAL
------------------------

25 ~Ultimo
----------------
If #CLICK
   ; !MES ;; ESTO ESTA EN 4 LUGARES COMPRAS DESGLOZADAS EN CLIS, PRV Y 2 VECES EN INV (COMPRAS Y VTAS)
   Calculate #S3 as 'ECLI#4/16'
   Call procedure INICIO/30 {Accesos}
   Calculate #L as #LN
   Repeat
       Load from list
       If pos(CLICOD,VSTRING)>0
          Delete line in list
          Calculate #L as #L-1
       Else
          Calculate VSTRING as con(VSTRING,CLICOD)
          Calculate #L as #L-1
       End If
   Until #L<=0
   Redraw windows
End If

Local variable VSTRING (Character 10000000)

240 LOAD DOCTOS
-----------------------------

Call procedure MCPAV01/162 ('EINV#38','FINV') {SHOW BUTTONS Win File}                                          ;; !+0121

Begin reversible block
  Set main file {FAXINV}
  Set current list LISTA10
  If (CIAALIAS='OMEGA')&(#SHIFT)
      Call procedure MSQL/281 ("(CLISEQ<>0)&(D
      EST=CIAKYT)&(DMULTICIA=LVCIA)&(AIMES=1)&
      ((mid(DNUM,1,1)='Z')|(mid(DNUM,1,1)='Y')|(mid(DNUM,1,2)='FZ'))&(DOTROSTXT<>'POS')&(DCONTROLPOS=0)") {SET_SEARCH_AS_CALCULATION Calc,
      SQL_IINF}
  Else
      ; Set search as calculation {(CLISEQ<>0)&(DEST=CIAKYT)&(DMULTICIA=LVCIA)&(AIMES=1)&(DESFACT=1)&(DOTROSTXT<>'POS')}
      Call procedure MSQL/281 ("(CLISEQ<>0)&(D
      EST=CIAKYT)&(DMULTICIA=LVCIA)&(AIMES=1)&
      (DESFACT=1)&(DOTROSTXT<>'POS')&(DCONTROLPOS=0)&((CIASOLOUSR=0)|(mid(fld('CLIPAR',CIAUSRES),2,9)=CIAUSRPAR))")
      {SET_SEARCH_AS_CALCULATION Calc, SQL_IINF}
  End If
End reversible block
Clear list
Call procedure MSQL/276 ('FAXINV',ISEQ,kTrue,kTrue,0) {BUILD_LIST_FROM_FILE File,Field, Exact,Search,Limit}
Calculate #L as 1

If CIAALIAS='PFEIFER'
   Clear sort fields
   Set sort field DFECHA
   Set sort field CLICOD
   Sort list
   Clear sort fields
End If

495 IMPRIME
--------------------
Calculate #S3 as 'EINV#38/495'
Call procedure INICIO/30 {Accesos}
Set current list LISTA10
Calculate #S1 as "jst(CLICOD,13,chr(9),1,mid(CLINOM,1,26),26,chr(9),1,AICANTF,-9,chr(9),1,AIPRECIO,-9,chr(9),1,' ',3,DNUM,7,chr(9),1,DFECHA,-11,' ',1,DREFER
ELLOS,15)"
Calculate #S2 as "jst('Código',13,chr(9),1,mid('Proveedor',1,26),26,chr(9),1,'Cantidad',-9,chr(9),1,'Precio',-9,chr(9),1,' Doc.',7,chr(9),1,'Fecha',-11,' ',1,'O.C.',15)"
Calculate #S3 as con('VENTAS ',ICOD,' ',IDESCR)
Call procedure INICIO/38 {IMPRIME PANTALLA}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Procedures for PROSCAI_GERMAN.EINV#38 as at 30/04/2026 (30/04/2026 12:41:34) PAGE 4
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

No procedure errors found
```
