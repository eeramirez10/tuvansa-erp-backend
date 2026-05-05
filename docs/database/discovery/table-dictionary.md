# Legacy Table Dictionary

- Generated at: 2026-04-30T19:50:11.503Z
- Schema: `tuvansa`
- Total tables: 123

## f_sqlsync

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SSOP | tinyint unsigned | NO | PRI |  |  |
| SSFILE | varchar(30) | NO | PRI |  |  |
| SSSEQ | int | NO | PRI |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | SSOP |
| PRIMARY | YES | 2 | SSFILE |
| PRIMARY | YES | 3 | SSSEQ |

## factivos

- Engine: InnoDB
- Estimated rows: 3
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ACTSEQ | int | NO | PRI |  | auto_increment |
| ACTDESCR | varchar(100) | NO |  |  |  |
| ACTFAM | varchar(13) | NO |  |  |  |
| ACTPORCDEPR | decimal(18,2) | NO |  | 0.00 |  |
| ACTFECHA | date | NO |  | 1900-12-31 |  |
| ACTFECHAINICIO | date | NO |  | 1900-12-31 |  |
| ACTMESESA | int | NO |  | 0 |  |
| ACTMESESVAN | int | NO |  | 0 |  |
| ACTDEPR | decimal(18,2) | NO |  | 0.00 |  |
| ACTCTAACT | varchar(16) | NO |  |  |  |
| ACTBAJA | date | NO |  | 1900-12-31 |  |
| ACTCENCOS | int | NO |  | 0 |  |
| ACTLOCALIZ | varchar(16) | NO |  |  |  |
| ACTIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| ACTCTADEPR | varchar(16) | NO |  |  |  |
| ACTULTIMADEPR | date | NO |  | 1900-12-31 |  |
| ACTCODIGO | varchar(16) | NO | MUL |  |  |
| ACTSERIE | varchar(20) | NO |  |  |  |
| ACTPLACAS | varchar(6) | NO |  |  |  |
| ACTVERIF | date | NO |  | 1900-12-31 |  |
| ACTMANT | date | NO |  | 1900-12-31 |  |
| ACTRESP | varchar(25) | NO |  |  |  |
| ACTDEPTO | varchar(20) | NO |  |  |  |
| ACTDEPRANO | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ACTCODIGO | NO | 1 | ACTCODIGO |
| ACTSEQ | YES | 1 | ACTSEQ |
| PRIMARY | YES | 1 | ACTSEQ |

## facuse

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ACUSEQ | int | NO | PRI |  | auto_increment |
| ACUUSRCOD | varchar(6) | NO |  |  |  |
| ACUUSRNOM | varchar(36) | NO |  |  |  |
| ACUUSRPUESTO | varchar(25) | NO |  |  |  |
| ACUDATEGEN | date | NO |  | 1900-12-31 |  |
| ACUDATEACK | date | NO |  | 1900-12-31 |  |
| ACURESPUESTA | varchar(1024) | NO |  |  |  |
| AVISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ACUSEQ | YES | 1 | ACUSEQ |
| AVISEQ | NO | 1 | AVISEQ |
| PRIMARY | YES | 1 | ACUSEQ |

## fag

- Engine: InnoDB
- Estimated rows: 235
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AGSEQ | int | NO | PRI |  | auto_increment |
| AGTNUM | varchar(5) | NO | MUL |  |  |
| AGDESCR | varchar(45) | NO | MUL |  |  |
| AGPORC1 | decimal(18,2) | NO |  | 0.00 |  |
| AGPORC2 | decimal(18,2) | NO |  | 0.00 |  |
| AGACUM | decimal(18,0) | NO |  | 0 |  |
| AGT | varchar(1) | NO | MUL |  |  |
| AGNUM | varchar(4) | NO | MUL |  |  |
| AGDIR | varchar(45) | NO |  |  |  |
| AGTEL | varchar(15) | NO |  |  |  |
| AGCD | varchar(45) | NO |  |  |  |
| AGRFC | varchar(15) | NO |  |  |  |
| AGVTA1 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA2 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA3 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA4 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA5 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA6 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA7 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA8 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA9 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA10 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA11 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTA12 | decimal(18,2) | NO |  | 0.00 |  |
| AGSALDO | decimal(18,2) | NO |  | 0.00 |  |
| AGCREDITO | decimal(18,2) | NO |  | 0.00 |  |
| AGSALDOANT | decimal(18,2) | NO |  | 0.00 |  |
| AGT1 | int | NO |  | 0 |  |
| AGT2 | int | NO |  | 0 |  |
| AGT3 | int | NO |  | 0 |  |
| AGT4 | decimal(18,0) | NO |  | 0 |  |
| AGT5 | int | NO |  | 0 |  |
| AGT6 | int | NO |  | 0 |  |
| AGCOLONIA | varchar(40) | NO |  |  |  |
| AGCOLUMNA | tinyint unsigned | NO |  | 0 |  |
| AGRETENER | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST0 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST1 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST2 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST3 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST4 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST5 | decimal(18,2) | NO |  | 0.00 |  |
| AGCAST6 | decimal(18,2) | NO |  | 0.00 |  |
| AGIVA | decimal(18,2) | NO |  | 0.00 |  |
| AGCIANAME | varchar(45) | NO |  |  |  |
| AGTIPO | tinyint unsigned | NO |  | 0 |  |
| AGOBS | varchar(200) | NO |  |  |  |
| AGPRESUP1 | decimal(18,0) | NO |  | 0 |  |
| AGPRESUP2 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP3 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP4 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP5 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP6 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP7 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP8 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP9 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP10 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP11 | decimal(18,2) | NO |  | 0.00 |  |
| AGPRESUP12 | decimal(18,2) | NO |  | 0.00 |  |
| AGPAPA | varchar(4) | NO |  |  |  |
| AGMAIL | varchar(45) | NO |  |  |  |
| AGCIA | int | NO |  | 0 |  |
| AGHORAS | tinyint unsigned | NO |  | 0 |  |
| AGVTAANT1 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT2 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT3 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT4 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT5 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT6 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT7 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT8 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT9 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT10 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT11 | decimal(18,2) | NO |  | 0.00 |  |
| AGVTAANT12 | decimal(18,2) | NO |  | 0.00 |  |
| AGALTA | date | NO |  | 1900-12-31 |  |
| AGSUELDO | decimal(18,2) | NO |  | 0.00 |  |
| AGENTRADA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| AGSALIDA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| AGPUESTO | varchar(30) | NO |  |  |  |
| AGCURP | varchar(20) | NO |  |  |  |
| AGIMSS | varchar(20) | NO |  |  |  |
| AGDEDUCCIONES | decimal(18,2) | NO |  | 0.00 |  |
| AGDIASTRAB | tinyint unsigned | NO |  | 0 |  |
| AGPORCFR1 | decimal(18,4) | NO |  | 0.0000 |  |
| AGPORCFR2 | decimal(18,4) | NO |  | 0.0000 |  |
| AGPORCFR3 | decimal(18,4) | NO |  | 0.0000 |  |
| AGPORCFR4 | decimal(18,4) | NO | MUL | 0.0000 |  |
| AGFIJOFR1 | int | NO |  | 0 |  |
| AGFIJOFR2 | int | NO |  | 0 |  |
| AGFIJOFR3 | int | NO |  | 0 |  |
| AGFIJOFR4 | int | NO |  | 0 |  |
| AGEAN | varchar(13) | NO | MUL |  |  |
| AGMD5 | varchar(32) | NO |  |  |  |
| AGBAJA | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AGDESCR | NO | 1 | AGDESCR |
| AGEAN | NO | 1 | AGEAN |
| AGNUM | NO | 1 | AGNUM |
| AGPORCFR4 | NO | 1 | AGPORCFR4 |
| AGSEQ | YES | 1 | AGSEQ |
| AGT | NO | 1 | AGT |
| AGTNUM | NO | 1 | AGTNUM |
| PRIMARY | YES | 1 | AGSEQ |

## falm

- Engine: InnoDB
- Estimated rows: 38279
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ALMSEQ | int | NO | PRI |  | auto_increment |
| ALMKEY | varchar(19) | NO | MUL |  |  |
| ALMCANT | decimal(18,3) | NO |  | 0.000 |  |
| ALMNUM | varchar(6) | NO | MUL |  |  |
| ALMASIGNADO | decimal(18,2) | NO |  | 0.00 |  |
| ALMMINIMO | int | NO |  | 0 |  |
| ALMMAXIMO | int | NO |  | 0 |  |
| ALMVTA | int | NO |  | 0 |  |
| ALMINVFIS | decimal(18,3) | NO |  | 0.000 |  |
| ALMFISICOINICIAL | decimal(18,3) | NO |  | 0.000 |  |
| ALMDETDAS | decimal(18,2) | NO |  | 0.00 |  |
| ALMACTIVO | varchar(1) | NO |  |  |  |
| ALMMOD | tinyint unsigned | NO | MUL | 0 |  |
| ALMTRANSITO | int | NO |  | 0 |  |
| ALMFACTOR | decimal(18,2) | NO |  | 0.00 |  |
| ALMALTA | date | NO |  | 1900-12-31 |  |
| ALMULTIMAVTA | date | NO |  | 1900-12-31 |  |
| ALMLOCALIZ | varchar(15) | NO |  |  |  |
| ALMVARIOS1 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS2 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS3 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS4 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS5 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS6 | decimal(18,0) | NO |  | 0 |  |
| ALMVARIOS7 | int | NO |  | 0 |  |
| ALMVARIOS8 | int | NO |  | 0 |  |
| ALMVARIOS9 | int | NO |  | 0 |  |
| ALMVARIOS10 | int | NO |  | 0 |  |
| ALMVARIOS11 | int | NO |  | 0 |  |
| ALMVARIOS12 | int | NO |  | 0 |  |
| ALMVARIOS13 | int | NO |  | 0 |  |
| ALMVARIOS14 | int | NO |  | 0 |  |
| ALMVARIOS15 | int | NO |  | 0 |  |
| ALMVARIOS16 | int | NO |  | 0 |  |
| ALMVARIOS17 | int | NO |  | 0 |  |
| ALMVARIOS18 | int | NO |  | 0 |  |
| ALMVARIOS19 | int | NO |  | 0 |  |
| ALMACTIVOOC | varchar(1) | NO |  |  |  |
| ALMTOTVTA | int | NO |  | 0 |  |
| ALMCDNUM | tinyint unsigned | NO |  | 0 |  |
| ALMZONA | varchar(2) | NO |  |  |  |
| ALMMINIMOENTDA | int | NO |  | 0 |  |
| ALMPRECIO | decimal(18,2) | NO |  | 0.00 |  |
| ALMPREPRECIO | decimal(18,2) | NO |  | 0.00 |  |
| ALMCAMBIOPRECIO | date | NO |  | 1900-12-31 |  |
| ALMVTAEOL | decimal(18,0) | NO |  | 0 |  |
| ALMRECS1 | int | NO |  | 0 |  |
| ALMRECS2 | int | NO |  | 0 |  |
| ALMRECS3 | int | NO |  | 0 |  |
| ALMRECS4 | int | NO |  | 0 |  |
| ALMRECS5 | int | NO |  | 0 |  |
| ALMRECS6 | int | NO |  | 0 |  |
| ALMVAFUTS1 | int | NO |  | 0 |  |
| ALMVAFUTS2 | int | NO |  | 0 |  |
| ALMVAFUTS3 | int | NO |  | 0 |  |
| ALMVAFUTS4 | int | NO |  | 0 |  |
| ALMVAFUTS5 | int | NO |  | 0 |  |
| ALMVTAFUT6 | int | NO |  | 0 |  |
| ALMIMPORTE6 | int | NO |  | 0 |  |
| ALMTOTRECS | int | NO |  | 0 |  |
| ALMVTALIV | int | NO |  | 0 |  |
| ALMINVLIV | int | NO |  | 0 |  |
| ALMSEMS | tinyint unsigned | NO |  | 0 |  |
| ALMSEMSTDA | tinyint unsigned | NO |  | 0 |  |
| ALMSEMSBOD | tinyint unsigned | NO |  | 0 |  |
| ALMSEMSEOL | tinyint unsigned | NO |  | 0 |  |
| ALMACTIVAR | tinyint unsigned | NO |  | 0 |  |
| ALMSEMSINV | int | NO |  | 0 |  |
| ALMSEMSMX | tinyint unsigned | NO |  | 0 |  |
| ALMMINBOD | int | NO |  | 0 |  |
| ALMCANTBOD | decimal(18,3) | NO |  | 0.000 |  |
| ALMCANTMAX | decimal(18,3) | NO |  | 0.000 |  |
| ALMPEDIDO | decimal(18,2) | NO |  | 0.00 |  |
| ALMBOD | decimal(18,3) | NO |  | 0.000 |  |
| ALMCURVA | tinyint unsigned | NO |  | 0 |  |
| ALMPRVCANT | decimal(18,3) | NO |  | 0.000 |  |
| ALMPRVOC | decimal(18,3) | NO |  | 0.000 |  |
| ALMVERIFICADO | date | NO |  | 1900-12-31 |  |
| ALMMOVS | int | NO |  | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ALMKEY | NO | 1 | ALMKEY |
| ALMMOD | NO | 1 | ALMMOD |
| ALMNUM | NO | 1 | ALMNUM |
| ALMSEQ | YES | 1 | ALMSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | ALMSEQ |

## falmcat

- Engine: InnoDB
- Estimated rows: 327
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CATSEQ | int | NO | PRI |  | auto_increment |
| CATALM | varchar(6) | NO | MUL |  |  |
| CATDESCR | varchar(120) | NO |  |  |  |
| CATTIPO | varchar(3) | NO | MUL |  |  |
| CATCOD | varchar(15) | NO | MUL |  |  |
| CATCIA | int | NO |  | 0 |  |
| CATKEY | varchar(18) | NO | MUL |  |  |
| CATDIR | varchar(45) | NO | MUL |  |  |
| CATCD | varchar(45) | NO |  |  |  |
| CATCONTACTO | varchar(45) | NO |  |  |  |
| CATUSUARIOS | varchar(1000) | NO |  |  |  |
| CATPOSSTK | int | NO |  | 0 |  |
| CATPOSCORTE | date | NO |  | 1900-12-31 |  |
| CATPOSTRABAJO | date | NO |  | 1900-12-31 |  |
| CATZONA | varchar(2) | NO |  |  |  |
| CATSYNC | tinyint unsigned | NO |  | 0 |  |
| CATTMP1 | decimal(18,2) | NO |  | 0.00 |  |
| CATVALORCORTE | decimal(18,0) | NO |  | 0 |  |
| CATTMP2 | int | NO |  | 0 |  |
| CATTMP3 | int | NO |  | 0 |  |
| CATTMP4 | int | NO |  | 0 |  |
| CATTMP5 | int | NO |  | 0 |  |
| CATTMP6 | int | NO |  | 0 |  |
| CATTMP7 | int | NO |  | 0 |  |
| CATTMP8 | int | NO |  | 0 |  |
| CATTMP9 | int | NO |  | 0 |  |
| CATTMP10 | int | NO |  | 0 |  |
| CATTMP11 | int | NO |  | 0 |  |
| CATTMP12 | int | NO |  | 0 |  |
| CATVALORVTA | decimal(18,2) | NO |  | 0.00 |  |
| CATVALORCOSTO | decimal(18,2) | NO |  | 0.00 |  |
| CATSTKFEC | decimal(18,3) | NO |  | 0.000 |  |
| CATFORMATO2 | tinyint unsigned | NO |  | 0 |  |
| CATCAJERO | varchar(6) | NO |  |  |  |
| CATCOMENTARIO | varchar(60) | NO |  |  |  |
| CATEDO | varchar(36) | NO |  |  |  |
| CATCOLONIA | varchar(60) | NO |  |  |  |
| CATCP | varchar(5) | NO |  |  |  |
| CATNUMINT | varchar(31) | NO |  |  |  |
| CATNUMEXT | varchar(31) | NO |  |  |  |
| CATDELEGACION | varchar(50) | NO |  |  |  |
| CATPAIS | varchar(3) | NO |  |  |  |
| CATUSOHORARIO | int | NO |  | 0 |  |
| CATALTA | date | NO |  | 1900-12-31 |  |
| CATCAJA | tinyint unsigned | NO |  | 0 |  |
| CATFRANQUICIA | tinyint unsigned | NO |  | 0 |  |
| CATGLN | varchar(16) | NO |  |  |  |
| CATCUOTA | decimal(18,2) | NO |  | 0.00 |  |
| CATCDNUM | tinyint unsigned | NO |  | 0 |  |
| CATESCD | tinyint unsigned | NO |  | 0 |  |
| CATPRIORIDAD | tinyint unsigned | NO |  | 0 |  |
| CATGRUPO | varchar(4) | NO |  |  |  |
| CATREFER | varchar(6) | NO |  |  |  |
| CATCONVENIO | varchar(10) | NO |  |  |  |
| CATPOINTER | int | NO |  | 0 |  |
| CATD1 | decimal(18,1) | NO |  | 0.0 |  |
| CATD2 | decimal(18,1) | NO |  | 0.0 |  |
| CATD3 | decimal(18,1) | NO |  | 0.0 |  |
| CATD4 | decimal(18,1) | NO |  | 0.0 |  |
| CATD5 | decimal(18,1) | NO |  | 0.0 |  |
| CATD6 | decimal(18,1) | NO |  | 0.0 |  |
| CATD7 | decimal(18,1) | NO |  | 0.0 |  |
| CATPAR4 | varchar(3) | NO |  |  |  |
| CATPAR5 | varchar(3) | NO |  |  |  |
| CATPAR6 | varchar(3) | NO |  |  |  |
| CATPAR7 | varchar(3) | NO |  |  |  |
| CATPAR8 | varchar(3) | NO |  |  |  |
| CATPAR9 | varchar(3) | NO |  |  |  |
| CATFACTOR | decimal(18,2) | NO |  | 0.00 |  |
| CATCAPACIDAD | int | NO |  | 0 |  |
| CATENTRASEM | varchar(5) | NO |  |  |  |
| CATENTRASAB | varchar(5) | NO |  |  |  |
| CATENTRADOM | varchar(5) | NO |  |  |  |
| CATSALESEM | varchar(5) | NO |  |  |  |
| CATSALESAB | varchar(5) | NO |  |  |  |
| CATSALEDOM | varchar(5) | NO |  |  |  |
| CATMULTICIA | tinyint unsigned | NO |  | 0 |  |
| CATFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| CATFACTORMAX | decimal(18,2) | NO |  | 0.00 |  |
| CATLISTA | tinyint unsigned | NO |  | 0 |  |
| CATPRORRA1 | decimal(18,0) | NO |  | 0 |  |
| CATPRORRA2 | decimal(18,0) | NO |  | 0 |  |
| CATPRORRA3 | decimal(18,0) | NO |  | 0 |  |
| CATPRORRA4 | decimal(18,0) | NO |  | 0 |  |
| CATNUMSURT | int | NO |  | 0 |  |
| CATMCIACLI | varchar(6) | NO |  |  |  |
| CATMCIAALM | varchar(5) | NO |  |  |  |
| CATMCIALCOSTO | tinyint unsigned | NO |  | 0 |  |
| CATMCIATMR | varchar(2) | NO |  |  |  |
| CATMCIATMDR | varchar(2) | NO |  |  |  |
| CATMCIATMP | varchar(2) | NO |  |  |  |
| CATRFC | varchar(13) | NO |  |  |  |
| CATREGIMENES | varchar(255) | NO |  |  |  |
| CATVENCEAPART | date | NO |  | 1900-12-31 |  |
| CATSINCHORA | varchar(4) | NO |  |  |  |
| CATRENTA | int | NO |  | 0 |  |
| CATM2 | int | NO |  | 0 |  |
| CATULTIMAFACT | date | NO |  | 1900-12-31 |  |
| CATNODLLS | tinyint unsigned | NO |  | 0 |  |
| CATCTA | varchar(16) | NO |  |  |  |
| CATNOENCUESTA | tinyint unsigned | NO |  | 0 |  |
| CATNOFOTO | tinyint unsigned | NO |  | 0 |  |
| CATOUTLET | tinyint unsigned | NO |  | 0 |  |
| CATPROMODESDE | date | NO |  | 1900-12-31 |  |
| CATPROMOHASTA | date | NO |  | 1900-12-31 |  |
| CATPROMOFAM | varchar(4) | NO |  |  |  |
| CATPROMOMONTO | int | NO |  | 0 |  |
| CATPROMOPZAS | int | NO |  | 0 |  |
| CATPROMOPRODUCTO | varchar(13) | NO |  |  |  |
| CATNOVTASSININV | tinyint unsigned | NO |  | 0 |  |
| CATNOVTASENNEG | tinyint unsigned | NO |  | 0 |  |
| CATREGALONFAMS | varchar(30) | NO |  |  |  |
| CATMERCHTIPO | varchar(5) | NO |  |  |  |
| CATTEL | varchar(20) | NO |  |  |  |
| CATTEL2 | varchar(20) | NO |  |  |  |
| CATPRORRN1 | tinyint unsigned | NO |  | 0 |  |
| CATPRORRN2 | tinyint unsigned | NO |  | 0 |  |
| CATPRORRN3 | tinyint unsigned | NO |  | 0 |  |
| CATPRORRTIPO | tinyint unsigned | NO |  | 0 |  |
| CATSCRIPT | varchar(3500) | NO |  |  |  |
| CATPROMOCOBRAR | decimal(18,2) | NO |  | 0.00 |  |
| CATMCIALCOSTO6 | tinyint unsigned | NO |  | 0 |  |
| CATMCIALCOSTO4 | tinyint unsigned | NO |  | 0 |  |
| CATMCIALCOSTO7 | tinyint unsigned | NO |  | 0 |  |
| CATRANK | int | NO |  | 0 |  |
| CATSINCCLI | int | NO |  | 0 |  |
| CATSINCINV | int | NO |  | 0 |  |
| CATSINCALM | int | NO |  | 0 |  |
| CATSINCUSR | int | NO |  | 0 |  |
| CATSINCDATEALM | date | NO |  | 1900-12-31 |  |
| CATSINCDATECEN | date | NO |  | 1900-12-31 |  |
| CATSINCTKT | int | NO |  | 0 |  |
| CATSINCAGT | int | NO |  | 0 |  |
| CATQUERY | varchar(1000) | NO |  |  |  |
| CATSINCFAM | int | NO |  | 0 |  |
| CATSINCOFE | int | NO |  | 0 |  |
| CATSINCSKU | int | NO |  | 0 |  |
| CATSINCPRM | int | NO |  | 0 |  |
| CATSINCPAG | int | NO |  | 0 |  |
| CATSINCBIN | int | NO |  | 0 |  |
| CATPORCFRIDMIN | decimal(18,0) | NO |  | 0 |  |
| CATPORCFRIDMET | decimal(18,0) | NO |  | 0 |  |
| CATPIEZAS | int | NO |  | 0 |  |
| CATPINPAD | varchar(254) | NO |  |  |  |
| CATWMSUSO | double | NO |  | 0 |  |
| CATPRV | varchar(6) | NO |  |  |  |
| CATDEDUCE | varchar(6) | NO |  |  |  |
| CATDOCTO | varchar(8) | NO |  |  |  |
| CATTOKENMP | varchar(85) | NO |  |  |  |
| CATTKREFRESHMP | varchar(85) | NO |  |  |  |
| CATTOKENAP | varchar(45) | NO |  |  |  |
| CATDIASREPARTO | varchar(7) | NO |  |  |  |
| CATMULTIPLO | decimal(18,2) | NO |  | 0.00 |  |
| CATAPARADOR | varchar(10) | NO |  |  |  |
| CATTODAY | date | NO |  | 1900-12-31 |  |
| CATUSAPINPAD | tinyint unsigned | NO |  | 0 |  |
| CATHUELLAS | int | NO |  | 0 |  |
| CATTDANVA | tinyint unsigned | NO |  | 0 |  |
| CATITVP | tinyint unsigned | NO |  | 0 |  |
| CATFRANNUM | varchar(3) | NO |  |  |  |
| CATCORTESEM | varchar(5) | NO |  |  |  |
| CATCORTESAB | varchar(5) | NO |  |  |  |
| CATCORTEDOM | varchar(5) | NO |  |  |  |
| CATNOCAPAS | tinyint unsigned | NO |  | 0 |  |
| CATZONACFDI | varchar(2) | NO |  |  |  |
| CATPROMOFAM2 | varchar(4) | NO |  |  |  |
| CATPROMOPROD2 | varchar(13) | NO |  |  |  |
| CATPROMOFAM3 | varchar(4) | NO |  |  |  |
| CATPROMOPROD3 | varchar(13) | NO |  |  |  |
| CATCAPSURT | int | NO |  | 0 |  |
| CATRUTA | varchar(15) | NO |  |  |  |
| CATFILVTAPOS | varchar(50) | NO |  |  |  |
| CATDEVINACT | varchar(6) | NO |  |  |  |
| CATPROMOPZAS2 | int | NO |  | 0 |  |
| CATPROMOMONTO2 | int | NO |  | 0 |  |
| CATPROMOPZAS3 | int | NO |  | 0 |  |
| CATPROMOMONTO3 | int | NO |  | 0 |  |
| CATUSUARIOSPUSH | varchar(1000) | NO |  |  |  |
| CATPROMOPZAS4 | int | NO |  | 0 |  |
| CATPROMOMONTO4 | int | NO |  | 0 |  |
| CATPROMOFAM4 | varchar(4) | NO |  |  |  |
| CATPROMOPROD4 | varchar(13) | NO |  |  |  |
| CATPROMOPZAS5 | int | NO |  | 0 |  |
| CATPROMOMONTO5 | int | NO |  | 0 |  |
| CATPROMOFAM5 | varchar(4) | NO |  |  |  |
| CATPROMOPROD5 | varchar(13) | NO |  |  |  |
| CATNOTIF | int | NO |  | 0 |  |
| CATBAJA | date | NO |  | 1900-12-31 |  |
| CATPTIDTERM | varchar(10) | NO |  |  |  |
| CATPTSERPOS | varchar(11) | NO |  |  |  |
| CATPTPSW | varchar(10) | NO |  |  |  |
| CATPTCL3D | varchar(60) | NO |  |  |  |
| CATPTCLHASH | varchar(60) | NO |  |  |  |
| CATLONGITUD | double | NO |  | 0 |  |
| CATLATITUD | double | NO |  | 0 |  |
| CATSUPERVISOR | varchar(8) | NO |  |  |  |
| CATREGIONAL | varchar(8) | NO |  |  |  |
| CATREBAJAALM | varchar(6) | NO |  |  |  |
| CATFACTPUNTOS | decimal(18,2) | NO |  | 0.00 |  |
| CATNOREDPUN | tinyint unsigned | NO |  | 0 |  |
| CATCANAL | varchar(2) | NO |  |  |  |
| CATOMNICOM | varchar(13) | NO |  |  |  |
| CATOMNIENVIO | varchar(13) | NO |  |  |  |
| CATOMNIOTROS | varchar(13) | NO |  |  |  |
| CATPARA | varchar(3) | NO |  |  |  |
| CATTDAESPEJO | varchar(3) | NO |  |  |  |
| CATAGNUM | varchar(3) | NO |  |  |  |
| CATGOOGLEID | varchar(350) | NO |  |  |  |
| CATMELIID | varchar(10) | NO |  |  |  |
| CATPARB | varchar(4) | NO |  |  |  |
| CATMARCA | varchar(15) | NO |  |  |  |
| CATOMNIPICK | tinyint unsigned | NO |  | 0 |  |
| CATOMNISURTE | tinyint unsigned | NO |  | 0 |  |
| CATMAXVTASM | int | NO |  | 0 |  |
| CATOMNICORNER | tinyint unsigned | NO |  | 0 |  |
| CATOMNIUBER | tinyint unsigned | NO |  | 0 |  |
| CATOMNIDIDI | tinyint unsigned | NO |  | 0 |  |
| CATOMNIRAPPI | tinyint unsigned | NO |  | 0 |  |
| CATURL | varchar(150) | NO |  |  |  |
| CATAPLAZOID | int | NO |  | 0 |  |
| CATMAXVTASD | int | NO |  | 0 |  |
| CATMAXVTASS | int | NO |  | 0 |  |
| CATPICK | int | NO |  | 0 |  |
| CATCARRTOKEN | varchar(100) | NO |  |  |  |
| CATCARRTIPSER | varchar(20) | NO |  |  |  |
| CATCARRTIPOPAQ | varchar(20) | NO |  |  |  |
| CATDIASAPART | tinyint unsigned | NO |  | 0 |  |
| CATPORCAPART | tinyint unsigned | NO |  | 0 |  |
| CATKUESKIID | varchar(20) | NO |  |  |  |
| CATKUESKIKEY | varchar(60) | NO |  |  |  |
| CATTDAFORMATO | varchar(2) | NO |  |  |  |
| CATTDACLIMA | varchar(2) | NO |  |  |  |
| CATTDANIVEL | varchar(2) | NO |  |  |  |
| CATFILFAM1 | varchar(30) | NO |  |  |  |
| CATFILFAM2 | varchar(30) | NO |  |  |  |
| CATFILFAMI | varchar(30) | NO |  |  |  |
| CATFILSIS | varchar(30) | NO |  |  |  |
| CATFILNOS | varchar(40) | NO |  |  |  |
| CATCLIMAS | varchar(12) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CATALM | NO | 1 | CATALM |
| CATCOD | NO | 1 | CATCOD |
| CATDIR | NO | 1 | CATDIR |
| CATKEY | NO | 1 | CATKEY |
| CATSEQ | YES | 1 | CATSEQ |
| CATTIPO | NO | 1 | CATTIPO |
| PRIMARY | YES | 1 | CATSEQ |

## falternos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ALTSEQ | int | NO | PRI |  | auto_increment |
| ALTPROD | varchar(13) | NO | MUL |  |  |
| ALTART | varchar(13) | NO | MUL |  |  |
| ALTVTA | int | NO |  | 0 |  |
| ALTIGUALES | int | NO |  | 0 |  |
| ALTPORCENT | tinyint unsigned | NO |  | 0 |  |
| ALTTIPO | varchar(6) | NO | MUL |  |  |
| ALTVALOR | varchar(30) | NO |  |  |  |
| ALTGEN | tinyint unsigned | NO |  | 0 |  |
| ALTKEY | varchar(26) | NO | MUL |  |  |
| ALTCAMBIO | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ALTART | NO | 1 | ALTART |
| ALTKEY | NO | 1 | ALTKEY |
| ALTPROD | NO | 1 | ALTPROD |
| ALTSEQ | YES | 1 | ALTSEQ |
| ALTTIPO | NO | 1 | ALTTIPO |
| PRIMARY | YES | 1 | ALTSEQ |

## farcos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ARCSEQ | int | NO | PRI |  | auto_increment |
| ARCKEY | varchar(12) | NO | MUL |  |  |
| ARCCURVA | int | NO |  | 0 |  |
| ARCSEMPAS | tinyint unsigned | NO |  | 0 |  |
| ARCSEMHOY | tinyint unsigned | NO |  | 0 |  |
| ARCSEMFUT | tinyint unsigned | NO |  | 0 |  |
| ARCFACTOR | double | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ARCKEY | NO | 1 | ARCKEY |
| ARCSEQ | YES | 1 | ARCSEQ |
| PRIMARY | YES | 1 | ARCSEQ |

## favisos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AVISEQ | int | NO | PRI |  | auto_increment |
| AVICOD | varchar(6) | NO | MUL |  |  |
| AVIMENSAGE | varchar(1024) | NO |  |  |  |
| AVIPUESTOS | varchar(26) | NO |  |  |  |
| AVITIPO1 | varchar(4) | NO |  |  |  |
| AVICIARFC | varchar(13) | NO | MUL |  |  |
| AVIREQRES | decimal(18,0) | NO |  | 0 |  |
| AVIDATE | date | NO |  | 1900-12-31 |  |
| AVIDATEACK | date | NO |  | 1900-12-31 |  |
| AVICIANAME | varchar(50) | NO |  |  |  |
| AVITITULO | varchar(40) | NO |  |  |  |
| AVIDESPR | decimal(18,0) | NO |  | 0 |  |
| AVIKEY | decimal(18,0) | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AVICIARFC | NO | 1 | AVICIARFC |
| AVICOD | NO | 1 | AVICOD |
| AVIKEY | NO | 1 | AVIKEY |
| AVISEQ | YES | 1 | AVISEQ |
| PRIMARY | YES | 1 | AVISEQ |

## fax

- Engine: InnoDB
- Estimated rows: 611842
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ASEQ | int | NO | PRI |  | auto_increment |
| ACANT | decimal(18,2) | NO |  | 0.00 |  |
| ATIPMV | varchar(2) | NO |  |  |  |
| AFECHA | date | NO | MUL | 1900-12-31 |  |
| AREFPAG | varchar(15) | NO |  |  |  |
| AMES | tinyint unsigned | NO |  | 0 |  |
| AUSEQ | int | NO |  | 0 |  |
| ADIFCAMBIAR | decimal(18,2) | NO |  | 0.00 |  |
| ATIPOC | decimal(18,8) | NO |  | 0.00000000 |  |
| ABCOD | varchar(13) | NO |  |  |  |
| APOLIZA | varchar(11) | NO |  |  |  |
| ARECIBO | int | NO | MUL | 0 |  |
| AIVA | decimal(18,2) | NO |  | 0.00 |  |
| ANUMPAGO | int | NO |  | 0 |  |
| ATDA | int | NO |  | 0 |  |
| ADESCTONC | decimal(18,2) | NO |  | 0.00 |  |
| ANETPAY | varchar(3) | NO |  |  |  |
| AHANDHELD | int | NO |  | 0 |  |
| BASEQ | int | NO | MUL | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| DSEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AFECHA | NO | 1 | AFECHA |
| ARECIBO | NO | 1 | ARECIBO |
| ASEQ | YES | 1 | ASEQ |
| BASEQ | NO | 1 | BASEQ |
| CLISEQ | NO | 1 | CLISEQ |
| DSEQ | NO | 1 | DSEQ |
| PRIMARY | YES | 1 | ASEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## faxinv

- Engine: InnoDB
- Estimated rows: 705495
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AISEQ | int | NO | PRI |  | auto_increment |
| AITIPMV | varchar(2) | NO |  |  |  |
| AICANT | decimal(18,3) | NO |  | 0.000 |  |
| AIPRECIO | decimal(18,5) | NO |  | 0.00000 |  |
| AICOSTO | decimal(18,5) | NO |  | 0.00000 |  |
| AIPREBR | decimal(18,5) | NO |  | 0.00000 |  |
| AIPZAS | varchar(24000) | NO |  |  |  |
| AIDESCTO | decimal(18,6) | NO |  | 0.000000 |  |
| AICANTF | decimal(18,3) | NO |  | 0.000 |  |
| AIMES | tinyint unsigned | NO |  | 0 |  |
| AIALMACEN | varchar(6) | NO |  |  |  |
| AIPED | int | NO |  | 0 |  |
| AIUSEQ | int | NO |  | 0 |  |
| AISUCURSAL | int | NO |  | 0 |  |
| AIREVAL | decimal(18,2) | NO |  | 0.00 |  |
| AISKU | varchar(14) | NO |  |  |  |
| AIAGENTE | varchar(3) | NO |  |  |  |
| AIPAGINA | tinyint unsigned | NO |  | 0 |  |
| AICOM | decimal(18,2) | NO |  | 0.00 |  |
| AIOTROS | varchar(13) | NO |  |  |  |
| AIUNIDAD | varchar(3) | NO |  |  |  |
| AIFACTOR | double | NO |  | 0 |  |
| AIDEMOSTRA | varchar(3) | NO |  |  |  |
| AIFAM1 | varchar(4) | NO |  |  |  |
| AIFAM2 | varchar(4) | NO |  |  |  |
| CLISEQ | int | NO | MUL | 0 |  |
| DSEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |
| LOSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AISEQ | YES | 1 | AISEQ |
| CLISEQ | NO | 1 | CLISEQ |
| DSEQ | NO | 1 | DSEQ |
| ISEQ | NO | 1 | ISEQ |
| LOSEQ | NO | 1 | LOSEQ |
| PRIMARY | YES | 1 | AISEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## faxk

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AKSEQ | int | NO | PRI |  | auto_increment |
| AKTIPO | tinyint unsigned | NO |  | 0 |  |
| AKDATE | date | NO |  | 1900-12-31 |  |
| AKTIKET | varchar(36) | NO | MUL |  |  |
| AKTDA | varchar(8) | NO |  |  |  |
| AKCAJA | varchar(5) | NO |  |  |  |
| AKIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| AKIN | varchar(150) | NO |  |  |  |
| AKOUT | varchar(250) | NO |  |  |  |
| AKID | varchar(42) | NO |  |  |  |
| AKTIME | datetime | NO |  | 1900-12-31 00:00:00 |  |
| AKOPERADOR | varchar(20) | NO |  |  |  |
| AKDSEQ | int | NO | MUL | 0 |  |
| AKVOUCHER | varchar(2048) | NO |  |  |  |
| AKKEY | varchar(12) | NO | MUL |  |  |
| AKTERMINAL | varchar(10) | NO |  |  |  |
| AKIDELLOS | varchar(15) | NO |  |  |  |
| AKHASH | varchar(42) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AKDSEQ | NO | 1 | AKDSEQ |
| AKKEY | NO | 1 | AKKEY |
| AKSEQ | YES | 1 | AKSEQ |
| AKTIKET | NO | 1 | AKTIKET |
| PRIMARY | YES | 1 | AKSEQ |

## faxrem

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AREMSEQ | int | NO | PRI |  | auto_increment |
| AREMTIPO | tinyint unsigned | NO |  | 0 |  |
| AREMCALIF | tinyint unsigned | NO |  | 0 |  |
| AREMTITULO | varchar(20) | NO |  |  |  |
| AREMCRITICA | varchar(512) | NO |  |  |  |
| AREMFECHA | date | NO | MUL | 1900-12-31 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AREMFECHA | NO | 1 | AREMFECHA |
| AREMSEQ | YES | 1 | AREMSEQ |
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | AREMSEQ |

## faxwms

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| AWSEQ | int | NO | PRI |  | auto_increment |
| AWDOC | varchar(13) | NO | MUL |  |  |
| AWFECHA | date | NO | MUL | 1900-12-31 |  |
| AWLOCALIZ | varchar(16) | NO |  |  |  |
| AWCANT | decimal(18,2) | NO |  | 0.00 |  |
| AWVOLUMEN | decimal(18,2) | NO |  | 0.00 |  |
| AWALMACEN | varchar(6) | NO |  |  |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AWDOC | NO | 1 | AWDOC |
| AWFECHA | NO | 1 | AWFECHA |
| AWSEQ | YES | 1 | AWSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | AWSEQ |

## fbanmov

- Engine: InnoDB
- Estimated rows: 1752462
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BASEQ | int | NO | PRI |  | auto_increment |
| BATIP | varchar(2) | NO | MUL |  |  |
| BANUM | varchar(10) | NO | MUL |  |  |
| BAFECHA | date | NO |  | 1900-12-31 |  |
| BAIMPOR | decimal(18,2) | NO | MUL | 0.00 |  |
| BABENEF | varchar(45) | NO |  |  |  |
| BACONCE | varchar(70) | NO |  |  |  |
| BAOK | varchar(1) | NO | MUL |  |  |
| BAOKTRANSITO | varchar(1) | NO |  |  |  |
| BAMES | varchar(1) | NO | MUL |  |  |
| BATIPOC | decimal(18,8) | NO |  | 0.00000000 |  |
| BAIMPORNEG | decimal(18,2) | NO |  | 0.00 |  |
| BAAUTORIZADO | varchar(1) | NO |  |  |  |
| BACENCOS | int | NO |  | 0 |  |
| BAMISCELANEA | varchar(1) | NO | MUL |  |  |
| BAFECHARECIBO | date | NO | MUL | 1900-12-31 |  |
| BADNUM | varchar(13) | NO |  |  |  |
| BASATBANCO | varchar(3) | NO |  |  |  |
| BASATCUENTA | varchar(18) | NO |  |  |  |
| BASATBANCOEXT | varchar(60) | NO |  |  |  |
| BACOPXMLSEQ | int | NO |  | 0 |  |
| BSEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |
| POSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BAFECHARECIBO | NO | 1 | BAFECHARECIBO |
| BAIMPOR | NO | 1 | BAIMPOR |
| BAMES | NO | 1 | BAMES |
| BAMISCELANEA | NO | 1 | BAMISCELANEA |
| BANUM | NO | 1 | BANUM |
| BAOK | NO | 1 | BAOK |
| BASEQ | YES | 1 | BASEQ |
| BATIP | NO | 1 | BATIP |
| BSEQ | NO | 1 | BSEQ |
| POSEQ | NO | 1 | POSEQ |
| PRIMARY | YES | 1 | BASEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fbenc

- Engine: InnoDB
- Estimated rows: 1589
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BSEQ | int | NO | PRI |  | auto_increment |
| BCOD | varchar(16) | NO | MUL |  |  |
| BCTA | varchar(25) | NO | MUL |  |  |
| BNOMBRE | varchar(40) | NO | MUL |  |  |
| BSALDOR1 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOB1 | decimal(18,2) | NO |  | 0.00 |  |
| BS100 | decimal(18,2) | NO |  | 0.00 |  |
| BGERENTE | varchar(30) | NO |  |  |  |
| BTELEFONO | varchar(20) | NO | MUL |  |  |
| BCHEQNUM | decimal(18,0) | NO |  | 0 |  |
| BDEPNUM | decimal(18,0) | NO |  | 0 |  |
| BSALDOTR1 | decimal(18,2) | NO |  | 0.00 |  |
| BTIPO | tinyint unsigned | NO |  | 0 |  |
| BTEMP | decimal(18,2) | NO |  | 0.00 |  |
| BREPORTE | varchar(15) | NO |  |  |  |
| BMONEDA | tinyint unsigned | NO |  | 0 |  |
| BSUBCTAS | tinyint unsigned | NO |  | 0 |  |
| BMOVS | tinyint unsigned | NO |  | 0 |  |
| BS101 | decimal(18,2) | NO |  | 0.00 |  |
| BS102 | decimal(18,2) | NO |  | 0.00 |  |
| BS103 | decimal(18,2) | NO |  | 0.00 |  |
| BS104 | decimal(18,2) | NO |  | 0.00 |  |
| BS105 | decimal(18,2) | NO |  | 0.00 |  |
| BS106 | decimal(18,2) | NO |  | 0.00 |  |
| BS107 | decimal(18,2) | NO |  | 0.00 |  |
| BS108 | decimal(18,2) | NO |  | 0.00 |  |
| BS109 | decimal(18,2) | NO |  | 0.00 |  |
| BS110 | decimal(18,2) | NO |  | 0.00 |  |
| BS111 | decimal(18,2) | NO |  | 0.00 |  |
| BS112 | decimal(18,2) | NO |  | 0.00 |  |
| BSP01 | decimal(18,0) | NO |  | 0 |  |
| BSP02 | decimal(18,0) | NO |  | 0 |  |
| BSP03 | decimal(18,0) | NO |  | 0 |  |
| BSP04 | decimal(18,0) | NO |  | 0 |  |
| BSP05 | decimal(18,0) | NO |  | 0 |  |
| BSP06 | decimal(18,0) | NO |  | 0 |  |
| BSP07 | decimal(18,0) | NO |  | 0 |  |
| BSP08 | decimal(18,0) | NO |  | 0 |  |
| BSP09 | decimal(18,0) | NO |  | 0 |  |
| BSP10 | decimal(18,0) | NO |  | 0 |  |
| BSP11 | decimal(18,0) | NO |  | 0 |  |
| BSP12 | decimal(18,0) | NO |  | 0 |  |
| BFAM | varchar(13) | NO |  |  |  |
| BNATUR | decimal(18,0) | NO |  | 0 |  |
| BNOPOLIZA | tinyint unsigned | NO |  | 0 |  |
| BTIPOC | decimal(18,4) | NO |  | 0.0000 |  |
| BSC101 | decimal(18,2) | NO |  | 0.00 |  |
| BSC102 | decimal(18,2) | NO |  | 0.00 |  |
| BSC103 | decimal(18,2) | NO |  | 0.00 |  |
| BSC104 | decimal(18,2) | NO |  | 0.00 |  |
| BSC105 | decimal(18,2) | NO |  | 0.00 |  |
| BSC106 | decimal(18,2) | NO |  | 0.00 |  |
| BSC107 | decimal(18,2) | NO |  | 0.00 |  |
| BSC108 | decimal(18,2) | NO |  | 0.00 |  |
| BSC109 | decimal(18,2) | NO |  | 0.00 |  |
| BSC110 | decimal(18,2) | NO |  | 0.00 |  |
| BSC111 | decimal(18,2) | NO |  | 0.00 |  |
| BSC112 | decimal(18,2) | NO |  | 0.00 |  |
| BSA101 | decimal(18,2) | NO |  | 0.00 |  |
| BSA102 | decimal(18,2) | NO |  | 0.00 |  |
| BSA103 | decimal(18,2) | NO |  | 0.00 |  |
| BSA104 | decimal(18,2) | NO |  | 0.00 |  |
| BSA105 | decimal(18,2) | NO |  | 0.00 |  |
| BSA106 | decimal(18,2) | NO |  | 0.00 |  |
| BSA107 | decimal(18,2) | NO |  | 0.00 |  |
| BSA108 | decimal(18,2) | NO |  | 0.00 |  |
| BSA109 | decimal(18,2) | NO |  | 0.00 |  |
| BSA110 | decimal(18,2) | NO |  | 0.00 |  |
| BSA111 | decimal(18,2) | NO |  | 0.00 |  |
| BSA112 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOMONEDA1 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOANTMONEDA1 | decimal(18,4) | NO |  | 0.0000 |  |
| BPRESUP | tinyint unsigned | NO |  | 0 |  |
| BS113 | decimal(18,2) | NO |  | 0.00 |  |
| BSC113 | decimal(18,2) | NO |  | 0.00 |  |
| BSA113 | decimal(18,2) | NO |  | 0.00 |  |
| BS114 | decimal(18,2) | NO |  | 0.00 |  |
| BSC114 | decimal(18,2) | NO |  | 0.00 |  |
| BSA114 | decimal(18,2) | NO |  | 0.00 |  |
| BS115 | decimal(18,2) | NO |  | 0.00 |  |
| BSC115 | decimal(18,2) | NO |  | 0.00 |  |
| BSA115 | decimal(18,2) | NO |  | 0.00 |  |
| BS201 | decimal(18,2) | NO |  | 0.00 |  |
| BS202 | decimal(18,2) | NO |  | 0.00 |  |
| BS203 | decimal(18,2) | NO |  | 0.00 |  |
| BS204 | decimal(18,2) | NO |  | 0.00 |  |
| BS205 | decimal(18,2) | NO |  | 0.00 |  |
| BS206 | decimal(18,2) | NO |  | 0.00 |  |
| BS207 | decimal(18,2) | NO |  | 0.00 |  |
| BS208 | decimal(18,2) | NO |  | 0.00 |  |
| BS209 | decimal(18,2) | NO |  | 0.00 |  |
| BS210 | decimal(18,2) | NO |  | 0.00 |  |
| BS211 | decimal(18,2) | NO |  | 0.00 |  |
| BS212 | decimal(18,2) | NO |  | 0.00 |  |
| BS213 | decimal(18,2) | NO |  | 0.00 |  |
| BS214 | decimal(18,2) | NO |  | 0.00 |  |
| BS215 | decimal(18,2) | NO |  | 0.00 |  |
| BSC201 | decimal(18,2) | NO |  | 0.00 |  |
| BSC202 | decimal(18,2) | NO |  | 0.00 |  |
| BSC203 | decimal(18,2) | NO |  | 0.00 |  |
| BSC204 | decimal(18,2) | NO |  | 0.00 |  |
| BSC205 | decimal(18,2) | NO |  | 0.00 |  |
| BSC206 | decimal(18,2) | NO |  | 0.00 |  |
| BSC207 | decimal(18,2) | NO |  | 0.00 |  |
| BSC208 | decimal(18,2) | NO |  | 0.00 |  |
| BSC209 | decimal(18,2) | NO |  | 0.00 |  |
| BSC210 | decimal(18,2) | NO |  | 0.00 |  |
| BSC211 | decimal(18,2) | NO |  | 0.00 |  |
| BSC212 | decimal(18,2) | NO |  | 0.00 |  |
| BSC213 | decimal(18,2) | NO |  | 0.00 |  |
| BSC214 | decimal(18,2) | NO |  | 0.00 |  |
| BSC215 | decimal(18,2) | NO |  | 0.00 |  |
| BSA201 | decimal(18,2) | NO |  | 0.00 |  |
| BSA202 | decimal(18,2) | NO |  | 0.00 |  |
| BSA203 | decimal(18,2) | NO |  | 0.00 |  |
| BSA204 | decimal(18,2) | NO |  | 0.00 |  |
| BSA205 | decimal(18,2) | NO |  | 0.00 |  |
| BSA206 | decimal(18,2) | NO |  | 0.00 |  |
| BSA207 | decimal(18,2) | NO |  | 0.00 |  |
| BSA208 | decimal(18,2) | NO |  | 0.00 |  |
| BSA209 | decimal(18,2) | NO |  | 0.00 |  |
| BSA210 | decimal(18,2) | NO |  | 0.00 |  |
| BSA211 | decimal(18,2) | NO |  | 0.00 |  |
| BSA212 | decimal(18,2) | NO | MUL | 0.00 |  |
| BSA213 | decimal(18,2) | NO |  | 0.00 |  |
| BSA214 | decimal(18,2) | NO |  | 0.00 |  |
| BSA215 | decimal(18,2) | NO |  | 0.00 |  |
| BS200 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOMONEDA2 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOANTMONEDA2 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOR2 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOB2 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOTR2 | decimal(18,2) | NO |  | 0.00 |  |
| BS116 | decimal(18,2) | NO |  | 0.00 |  |
| BSC116 | decimal(18,2) | NO |  | 0.00 |  |
| BSA116 | decimal(18,2) | NO |  | 0.00 |  |
| BS216 | decimal(18,2) | NO |  | 0.00 |  |
| BSC216 | decimal(18,2) | NO |  | 0.00 |  |
| BSA216 | decimal(18,2) | NO |  | 0.00 |  |
| BS117 | decimal(18,2) | NO |  | 0.00 |  |
| BSC117 | decimal(18,2) | NO |  | 0.00 |  |
| BSA117 | decimal(18,2) | NO |  | 0.00 |  |
| BS217 | decimal(18,2) | NO |  | 0.00 |  |
| BSC217 | decimal(18,2) | NO |  | 0.00 |  |
| BSA217 | decimal(18,2) | NO |  | 0.00 |  |
| BS118 | decimal(18,2) | NO |  | 0.00 |  |
| BSC118 | decimal(18,2) | NO |  | 0.00 |  |
| BSA118 | decimal(18,2) | NO |  | 0.00 |  |
| BS218 | decimal(18,2) | NO |  | 0.00 |  |
| BSC218 | decimal(18,2) | NO |  | 0.00 |  |
| BSA218 | decimal(18,2) | NO |  | 0.00 |  |
| BS119 | decimal(18,2) | NO |  | 0.00 |  |
| BSC119 | decimal(18,2) | NO |  | 0.00 |  |
| BSA119 | decimal(18,2) | NO |  | 0.00 |  |
| BS219 | decimal(18,2) | NO |  | 0.00 |  |
| BSC219 | decimal(18,2) | NO |  | 0.00 |  |
| BSA219 | decimal(18,2) | NO |  | 0.00 |  |
| BS120 | decimal(18,2) | NO |  | 0.00 |  |
| BSC120 | decimal(18,2) | NO |  | 0.00 |  |
| BSA120 | decimal(18,2) | NO |  | 0.00 |  |
| BS220 | decimal(18,2) | NO |  | 0.00 |  |
| BSC220 | decimal(18,2) | NO |  | 0.00 |  |
| BSA220 | decimal(18,2) | NO |  | 0.00 |  |
| BS121 | decimal(18,2) | NO |  | 0.00 |  |
| BSC121 | decimal(18,2) | NO |  | 0.00 |  |
| BSA121 | decimal(18,2) | NO |  | 0.00 |  |
| BS221 | decimal(18,2) | NO |  | 0.00 |  |
| BSC221 | decimal(18,2) | NO |  | 0.00 |  |
| BSA221 | decimal(18,2) | NO |  | 0.00 |  |
| BS122 | decimal(18,2) | NO |  | 0.00 |  |
| BSC122 | decimal(18,2) | NO |  | 0.00 |  |
| BSA122 | decimal(18,2) | NO |  | 0.00 |  |
| BS222 | decimal(18,2) | NO |  | 0.00 |  |
| BSC222 | decimal(18,2) | NO |  | 0.00 |  |
| BSA222 | decimal(18,2) | NO |  | 0.00 |  |
| BS123 | decimal(18,2) | NO |  | 0.00 |  |
| BSC123 | decimal(18,2) | NO |  | 0.00 |  |
| BSA123 | decimal(18,2) | NO |  | 0.00 |  |
| BS223 | decimal(18,2) | NO |  | 0.00 |  |
| BSC223 | decimal(18,2) | NO |  | 0.00 |  |
| BSA223 | decimal(18,2) | NO |  | 0.00 |  |
| BS124 | decimal(18,2) | NO |  | 0.00 |  |
| BSC124 | decimal(18,2) | NO |  | 0.00 |  |
| BSA124 | decimal(18,2) | NO |  | 0.00 |  |
| BS224 | decimal(18,2) | NO |  | 0.00 |  |
| BSC224 | decimal(18,2) | NO |  | 0.00 |  |
| BSA224 | decimal(18,2) | NO |  | 0.00 |  |
| BDEPOS | tinyint unsigned | NO |  | 0 |  |
| BPAGOS | tinyint unsigned | NO |  | 0 |  |
| BNUMCLI | decimal(18,0) | NO |  | 0 |  |
| BSUCURSAL | varchar(4) | NO |  |  |  |
| BCIA | tinyint unsigned | NO |  | 0 |  |
| BCONTROL | tinyint unsigned | NO | MUL | 0 |  |
| BALTA | date | NO |  | 1900-12-31 |  |
| BSALDOMONEDA1MS12 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOMONEDA2MS12 | decimal(18,2) | NO |  | 0.00 |  |
| BFISCALINFLA | tinyint unsigned | NO |  | 0 |  |
| BCN1 | varchar(13) | NO |  |  |  |
| BCN2 | varchar(13) | NO |  |  |  |
| BCN3 | varchar(13) | NO |  |  |  |
| BCN4 | varchar(13) | NO |  |  |  |
| BPAR1 | varchar(5) | NO |  |  |  |
| BPAR2 | varchar(4) | NO |  |  |  |
| BPAR3 | varchar(4) | NO |  |  |  |
| BPAR4 | varchar(4) | NO |  |  |  |
| BPAR5 | varchar(4) | NO |  |  |  |
| BPAR6 | varchar(4) | NO |  |  |  |
| BPAR7 | varchar(4) | NO |  |  |  |
| BPAR8 | varchar(4) | NO |  |  |  |
| BPAR9 | varchar(4) | NO |  |  |  |
| BDEDUCIETU | tinyint unsigned | NO |  | 0 |  |
| BMULTICIA | tinyint unsigned | NO |  | 0 |  |
| BTRANSFNUM | int | NO |  | 0 |  |
| BSP13 | decimal(18,0) | NO |  | 0 |  |
| BSP14 | decimal(18,0) | NO |  | 0 |  |
| BSP15 | decimal(18,0) | NO |  | 0 |  |
| BSP16 | decimal(18,0) | NO |  | 0 |  |
| BSP17 | decimal(18,0) | NO |  | 0 |  |
| BSP18 | decimal(18,0) | NO |  | 0 |  |
| BSP19 | decimal(18,0) | NO |  | 0 |  |
| BSP20 | decimal(18,0) | NO |  | 0 |  |
| BSP21 | decimal(18,0) | NO |  | 0 |  |
| BSP22 | decimal(18,0) | NO |  | 0 |  |
| BSP23 | decimal(18,0) | NO |  | 0 |  |
| BSP24 | decimal(18,0) | NO |  | 0 |  |
| BNODEDUCIIVA | tinyint unsigned | NO |  | 0 |  |
| BPRORRA1 | tinyint unsigned | NO |  | 0 |  |
| BPRORRA2 | tinyint unsigned | NO |  | 0 |  |
| BPRORRA3 | tinyint unsigned | NO |  | 0 |  |
| BPRORRA4 | tinyint unsigned | NO |  | 0 |  |
| BMAYOR | varchar(16) | NO |  |  |  |
| BMAYORDESCR | varchar(40) | NO |  |  |  |
| BSATGRUPO | varchar(6) | NO |  |  |  |
| BSATBCO | varchar(3) | NO |  |  |  |
| BSATBCOEXT | varchar(60) | NO |  |  |  |
| BSATMETPAG | varchar(2) | NO |  |  |  |
| BSATMONEDA | varchar(3) | NO |  |  |  |
| BRFC | varchar(13) | NO |  |  |  |
| BS100ANT | decimal(18,2) | NO |  | 0.00 |  |
| BSACANTMONEDA1 | decimal(18,2) | NO |  | 0.00 |  |
| BSALDOR1ANT | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BCOD | NO | 1 | BCOD |
| BCONTROL | NO | 1 | BCONTROL |
| BCTA | NO | 1 | BCTA |
| BNOMBRE | NO | 1 | BNOMBRE |
| BSA212 | NO | 1 | BSA212 |
| BSEQ | YES | 1 | BSEQ |
| BTELEFONO | NO | 1 | BTELEFONO |
| PRIMARY | YES | 1 | BSEQ |

## fbines

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BINSEQ | int | NO | PRI |  | auto_increment |
| BINCOD | varchar(6) | NO | MUL |  |  |
| BINBANCO | varchar(45) | NO |  |  |  |
| BINTIPO | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BINCOD | NO | 1 | BINCOD |
| BINSEQ | YES | 1 | BINSEQ |
| PRIMARY | YES | 1 | BINSEQ |

## fbinfor

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BINFORSEQ | int | NO | PRI |  | auto_increment |
| BINFORBIN | varchar(6) | NO | MUL |  |  |
| BINSEQ | int | NO | MUL | 0 |  |
| PROMSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BINFORBIN | NO | 1 | BINFORBIN |
| BINFORSEQ | YES | 1 | BINFORSEQ |
| BINSEQ | NO | 1 | BINSEQ |
| PRIMARY | YES | 1 | BINFORSEQ |
| PROMSEQ | NO | 1 | PROMSEQ |

## fbitacora

- Engine: InnoDB
- Estimated rows: 40
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BITSEQ | int | NO | PRI |  | auto_increment |
| BITUSER | int | NO | MUL | 0 |  |
| BITFECHA | datetime | NO | MUL | 1900-12-31 00:00:00 |  |
| BITCODIGO | varchar(15) | NO |  |  |  |
| BITDATA | varchar(8192) | NO |  |  |  |
| BITTIPO | varchar(1) | NO | MUL |  |  |
| BITHORA1 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITHORA2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITHORA3 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITHORA4 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITTDA | varchar(4) | NO |  |  |  |
| BITKEY | varchar(18) | NO | MUL |  |  |
| BITPANTALLA | tinyint unsigned | NO |  | 0 |  |
| BITUSRCOD | varchar(13) | NO |  |  |  |
| BITALIAS | varchar(13) | NO |  |  |  |
| BITVERSION | varchar(20) | NO |  |  |  |
| BITCDT | varchar(3) | NO |  |  |  |
| BITHORA5 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITHORA6 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| BITNUMNOMINA | varchar(8) | NO |  |  |  |
| BITMCIA | tinyint unsigned | NO |  | 0 |  |
| BITPAR4 | varchar(3) | NO |  |  |  |
| BITPART | varchar(4) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BITFECHA | NO | 1 | BITFECHA |
| BITKEY | NO | 1 | BITKEY |
| BITSEQ | YES | 1 | BITSEQ |
| BITTIPO | NO | 1 | BITTIPO |
| BITUSER | NO | 1 | BITUSER |
| PRIMARY | YES | 1 | BITSEQ |

## fbooks

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BOOKSEQ | int | NO | PRI |  | auto_increment |
| BOOKCOD | varchar(6) | NO | MUL |  |  |
| BOOKNAME | varchar(25) | NO |  |  |  |
| BOOKBOARD | varchar(6) | NO |  |  |  |
| BOOKPG | int | NO |  | 0 |  |
| BOOKUSER | varchar(6) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BOOKCOD | NO | 1 | BOOKCOD |
| BOOKSEQ | YES | 1 | BOOKSEQ |
| PRIMARY | YES | 1 | BOOKSEQ |

## fbords

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BORSEQ | int | NO | PRI |  | auto_increment |
| BORCOD | varchar(6) | NO | MUL |  |  |
| BORDESCR | varchar(30) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BORCOD | NO | 1 | BORCOD |
| BORSEQ | YES | 1 | BORSEQ |
| PRIMARY | YES | 1 | BORSEQ |

## fcajas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CAJSEQ | int | NO | PRI |  | auto_increment |
| CAJPZAS | decimal(18,0) | NO |  | 0 |  |
| CAJCANT | decimal(18,3) | NO |  | 0.000 |  |
| CAJSERIE | varchar(30) | NO | MUL |  |  |
| CAJINV | tinyint unsigned | NO |  | 0 |  |
| CAJPEDIDO | varchar(9) | NO | MUL |  |  |
| CAJFACTURA | varchar(13) | NO | MUL |  |  |
| CAJHIJOS | int | NO |  | 0 |  |
| CAJALM | varchar(6) | NO |  |  |  |
| CAJREFER | varchar(15) | NO | MUL |  |  |
| CAJFECHA | date | NO |  | 1900-12-31 |  |
| CAJRECEPCION | varchar(13) | NO | MUL |  |  |
| CAJMERMA | decimal(18,2) | NO |  | 0.00 |  |
| CAJTKSEQ | decimal(18,0) | NO |  | 0 |  |
| CAJFACTOR | double | NO |  | 0 |  |
| CAJPEDIMENTO | varchar(15) | NO |  |  |  |
| CAJFECHAIMPORT | date | NO |  | 1900-12-31 |  |
| CAJADUANA | varchar(25) | NO |  |  |  |
| CAJOBS | varchar(200) | NO |  |  |  |
| CAJMTS | decimal(18,2) | NO |  | 0.00 |  |
| CAJMAQUINA | varchar(6) | NO |  |  |  |
| CAJTEJEDOR | varchar(6) | NO |  |  |  |
| CAJTURNO | tinyint unsigned | NO |  | 0 |  |
| CAJLOTE | varchar(15) | NO | MUL |  |  |
| CAJCADUCIDAD | date | NO |  | 1900-12-31 |  |
| CAJSEL | varchar(1) | NO | MUL |  |  |
| CAJTEXTO1 | varchar(35) | NO |  |  |  |
| CAJTEXTO2 | varchar(35) | NO |  |  |  |
| CAJTEXTO3 | varchar(35) | NO |  |  |  |
| CAJTEXTO4 | varchar(35) | NO |  |  |  |
| CAJTEXTO5 | varchar(35) | NO |  |  |  |
| CAJTEXTO6 | varchar(35) | NO |  |  |  |
| CAJLOCALIZ | varchar(10) | NO | MUL |  |  |
| CAJASIGNWMS | decimal(18,2) | NO |  | 0.00 |  |
| CAJCOSTO | decimal(18,2) | NO |  | 0.00 |  |
| CAJPAR1 | varchar(5) | NO |  |  |  |
| CAJPAR2 | varchar(4) | NO |  |  |  |
| CAJPAR3 | varchar(4) | NO |  |  |  |
| CAJPAR4 | varchar(4) | NO |  |  |  |
| CAJPAR5 | varchar(4) | NO |  |  |  |
| CAJPAR6 | varchar(4) | NO |  |  |  |
| CAJPAR7 | varchar(4) | NO |  |  |  |
| CAJPAR8 | varchar(4) | NO |  |  |  |
| CAJPAR9 | varchar(4) | NO |  |  |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CAJFACTURA | NO | 1 | CAJFACTURA |
| CAJLOCALIZ | NO | 1 | CAJLOCALIZ |
| CAJLOTE | NO | 1 | CAJLOTE |
| CAJPEDIDO | NO | 1 | CAJPEDIDO |
| CAJRECEPCION | NO | 1 | CAJRECEPCION |
| CAJREFER | NO | 1 | CAJREFER |
| CAJSEL | NO | 1 | CAJSEL |
| CAJSEQ | YES | 1 | CAJSEQ |
| CAJSERIE | NO | 1 | CAJSERIE |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | CAJSEQ |

## fcalidad

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CALSEQ | int | NO | PRI |  | auto_increment |
| CALRESULT1 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT2 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT3 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT4 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT5 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT6 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT7 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESDAT1 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESDAT2 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESDAT3 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESDAT4 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT8 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT9 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT10 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESDAT5 | decimal(18,4) | NO |  | 0.0000 |  |
| CALVACIO | varchar(0) | NO |  |  |  |
| CALUSER | int | NO |  | 0 |  |
| CALRECHAZO | varchar(5) | NO |  |  |  |
| CALFECHA | date | NO | MUL | 1900-12-31 |  |
| CALKEY | varchar(13) | NO | MUL |  |  |
| CALRESULT11 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT12 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT13 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT14 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT15 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT201 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT202 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT203 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT204 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT205 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT206 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT207 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT208 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT209 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT210 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT211 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT212 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT213 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT214 | decimal(18,4) | NO |  | 0.0000 |  |
| CALRESULT215 | decimal(18,4) | NO |  | 0.0000 |  |
| PRSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CALFECHA | NO | 1 | CALFECHA |
| CALKEY | NO | 1 | CALKEY |
| CALSEQ | YES | 1 | CALSEQ |
| PRIMARY | YES | 1 | CALSEQ |
| PRSEQ | NO | 1 | PRSEQ |

## fcampos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CAMSEQ | int | NO | PRI |  | auto_increment |
| CAMTITULO | varchar(20) | NO |  |  |  |
| CAMDATO | varchar(100) | NO |  |  |  |
| CAMFILE | varchar(10) | NO |  |  |  |
| CAMFILTRO | varchar(30) | NO |  |  |  |
| CAMTIPO | varchar(1) | NO |  |  |  |
| CUBSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CAMSEQ | YES | 1 | CAMSEQ |
| CUBSEQ | NO | 1 | CUBSEQ |
| PRIMARY | YES | 1 | CAMSEQ |

## fcanu

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CSEQ | int | NO | PRI |  | auto_increment |
| C1 | decimal(18,0) | NO |  | 0 |  |
| C2 | decimal(18,0) | NO |  | 0 |  |
| C3 | decimal(18,0) | NO |  | 0 |  |
| C4 | decimal(18,0) | NO |  | 0 |  |
| C5 | decimal(18,0) | NO |  | 0 |  |
| C6 | decimal(18,0) | NO |  | 0 |  |
| C7 | decimal(18,0) | NO |  | 0 |  |
| C8 | decimal(18,0) | NO |  | 0 |  |
| C9 | decimal(18,0) | NO |  | 0 |  |
| C10 | decimal(18,0) | NO |  | 0 |  |
| C11 | decimal(18,0) | NO |  | 0 |  |
| C12 | decimal(18,0) | NO |  | 0 |  |
| CKEY | decimal(18,0) | NO | MUL | 0 |  |
| CI1 | decimal(18,2) | NO |  | 0.00 |  |
| CI2 | decimal(18,2) | NO |  | 0.00 |  |
| CI3 | decimal(18,2) | NO |  | 0.00 |  |
| CI4 | decimal(18,2) | NO |  | 0.00 |  |
| CI5 | decimal(18,2) | NO |  | 0.00 |  |
| CI6 | decimal(18,2) | NO |  | 0.00 |  |
| CI7 | decimal(18,2) | NO |  | 0.00 |  |
| CI8 | decimal(18,2) | NO |  | 0.00 |  |
| CI9 | decimal(18,2) | NO |  | 0.00 |  |
| CI10 | decimal(18,2) | NO |  | 0.00 |  |
| CI11 | decimal(18,2) | NO |  | 0.00 |  |
| CI12 | decimal(18,2) | NO |  | 0.00 |  |
| CKOT | decimal(18,0) | NO |  | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CKEY | NO | 1 | CKEY |
| CSEQ | YES | 1 | CSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | CSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fcanu2

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CASEQ | int | NO | PRI |  | auto_increment |
| CAKEY | decimal(18,0) | NO | MUL | 0 |  |
| CAMES | decimal(18,0) | NO |  | 0 |  |
| CAKT | decimal(18,0) | NO |  | 0 |  |
| CACANT | decimal(18,2) | NO |  | 0.00 |  |
| CACOSTO | decimal(18,2) | NO |  | 0.00 |  |
| CAIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| ISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CAKEY | NO | 1 | CAKEY |
| CASEQ | YES | 1 | CASEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | CASEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fccbenc

- Engine: InnoDB
- Estimated rows: 10808
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| BCCSEQ | int | NO | PRI |  | auto_increment |
| BCCCOD | varchar(16) | NO |  |  |  |
| BCCKEY | varchar(25) | NO | MUL |  |  |
| BCCCENCOS | int | NO |  | 0 |  |
| BCCSALDOR1 | decimal(18,2) | NO |  | 0.00 |  |
| BCCCIA | tinyint unsigned | NO |  | 0 |  |
| BCCS100 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS101 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS102 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS103 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS104 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS105 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS106 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS107 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS108 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS109 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS110 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS111 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS112 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSP01 | decimal(18,0) | NO |  | 0 |  |
| BCCSP02 | decimal(18,0) | NO |  | 0 |  |
| BCCSP03 | decimal(18,0) | NO |  | 0 |  |
| BCCSP04 | decimal(18,0) | NO |  | 0 |  |
| BCCSP05 | decimal(18,0) | NO |  | 0 |  |
| BCCSP06 | decimal(18,0) | NO |  | 0 |  |
| BCCSP07 | decimal(18,0) | NO |  | 0 |  |
| BCCSP08 | decimal(18,0) | NO |  | 0 |  |
| BCCSP09 | decimal(18,0) | NO |  | 0 |  |
| BCCSP10 | decimal(18,0) | NO |  | 0 |  |
| BCCSP11 | decimal(18,0) | NO |  | 0 |  |
| BCCSP12 | decimal(18,0) | NO |  | 0 |  |
| BCCSC101 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC102 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC103 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC104 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC105 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC106 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC107 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC108 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC109 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC110 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC111 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC112 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA101 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA102 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA103 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA104 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA105 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA106 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA107 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA108 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA109 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA110 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA111 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA112 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOMONEDA1 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOANTMONEDA1 | decimal(18,4) | NO |  | 0.0000 |  |
| BCCPRESUP | tinyint unsigned | NO |  | 0 |  |
| BCCS113 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC113 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA113 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS114 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC114 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA114 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS115 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC115 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA115 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS201 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS202 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS203 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS204 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS205 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS206 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS207 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS208 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS209 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS210 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS211 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS212 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS213 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS214 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS215 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC201 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC202 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC203 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC204 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC205 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC206 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC207 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC208 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC209 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC210 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC211 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC212 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC213 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC214 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC215 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA201 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA202 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA203 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA204 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA205 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA206 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA207 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA208 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA209 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA210 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA211 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA212 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA213 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA214 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA215 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS200 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOMONEDA2 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOANTMONEDA2 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOR2 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOB2 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOTR2 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS116 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC116 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA116 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS216 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC216 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA216 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS117 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC117 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA117 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS217 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC217 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA217 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS118 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC118 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA118 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS218 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC218 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA218 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS119 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC119 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA119 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS219 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC219 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA219 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS120 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC120 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA120 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS220 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC220 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA220 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS121 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC121 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA121 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS221 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC221 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA221 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS122 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC122 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA122 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS222 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC222 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA222 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS123 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC123 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA123 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS223 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC223 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA223 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS124 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC124 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA124 | decimal(18,2) | NO |  | 0.00 |  |
| BCCS224 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSC224 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSA224 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOMONEDA1MS12 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOMONEDA2MS12 | decimal(18,2) | NO |  | 0.00 |  |
| BCCMOVSA | int | NO |  | 0 |  |
| BCCPG101 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG102 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG103 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG104 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG105 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG106 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG107 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG108 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG109 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG110 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG111 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG112 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG113 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG114 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG115 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG116 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG117 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG118 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG119 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG120 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG121 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG122 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG123 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG124 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG201 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG202 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG203 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG204 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG205 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG206 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG207 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG208 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG209 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG210 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG211 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG212 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG213 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG214 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG215 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG216 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG217 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG218 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG219 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG220 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG221 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG222 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG223 | decimal(18,2) | NO |  | 0.00 |  |
| BCCPG224 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSP13 | decimal(18,0) | NO |  | 0 |  |
| BCCSP14 | decimal(18,0) | NO |  | 0 |  |
| BCCSP15 | decimal(18,0) | NO |  | 0 |  |
| BCCSP16 | decimal(18,0) | NO |  | 0 |  |
| BCCSP17 | decimal(18,0) | NO |  | 0 |  |
| BCCSP18 | decimal(18,0) | NO |  | 0 |  |
| BCCSP19 | decimal(18,0) | NO |  | 0 |  |
| BCCSP20 | decimal(18,0) | NO |  | 0 |  |
| BCCSP21 | decimal(18,0) | NO |  | 0 |  |
| BCCSP22 | decimal(18,0) | NO |  | 0 |  |
| BCCSP23 | decimal(18,0) | NO |  | 0 |  |
| BCCSP24 | decimal(18,0) | NO |  | 0 |  |
| BCCS100ANT | decimal(18,2) | NO |  | 0.00 |  |
| BCCSACANTMON1 | decimal(18,2) | NO |  | 0.00 |  |
| BCCSALDOR1ANT | decimal(18,2) | NO |  | 0.00 |  |
| BSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BCCKEY | NO | 1 | BCCKEY |
| BCCSEQ | YES | 1 | BCCSEQ |
| BSEQ | NO | 1 | BSEQ |
| PRIMARY | YES | 1 | BCCSEQ |

## fcenso

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CENSEQ | int | NO | PRI |  | auto_increment |
| CENNOMBRE | varchar(44) | NO | MUL |  |  |
| CENPAPA | varchar(15) | NO | MUL |  |  |
| CENMAMA | varchar(15) | NO | MUL |  |  |
| CENESPOSO | varchar(15) | NO | MUL |  |  |
| CENFAMILIA | varchar(6) | NO |  |  |  |
| CENNOM | varchar(20) | NO |  |  |  |
| CENPATERNO | varchar(20) | NO |  |  |  |
| CENMATERNO | varchar(20) | NO |  |  |  |
| CENNOMBREMAIL | varchar(44) | NO |  |  |  |
| CENNACIMIENTO | date | NO |  | 1900-12-31 |  |
| CENFMATRIMONIO | date | NO |  | 1900-12-31 |  |
| CENSEXO | varchar(1) | NO |  |  |  |
| CENSANGRE | varchar(3) | NO |  |  |  |
| CENDONAR | varchar(1) | NO |  |  |  |
| CENEDOCIVIL | varchar(10) | NO |  |  |  |
| CENCASADO | varchar(1) | NO |  |  |  |
| CENLUGARNAC | varchar(24) | NO |  |  |  |
| CENNACIONALID | varchar(18) | NO |  |  |  |
| CENTEMPLO | varchar(32) | NO |  |  |  |
| CENNIVELREL | tinyint unsigned | NO |  | 0 |  |
| CENCOMUNIDADANT | varchar(22) | NO |  |  |  |
| CENFOTO | varchar(21) | NO |  |  |  |
| CENOBS | varchar(90) | NO |  |  |  |
| CENFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| CENBAJA | date | NO |  | 1900-12-31 |  |
| CENAUTORIZO | varchar(10) | NO |  |  |  |
| CENTRABAJA | tinyint unsigned | NO |  | 0 |  |
| CENPROPIETARIO | tinyint unsigned | NO |  | 0 |  |
| CENWEB | tinyint unsigned | NO |  | 0 |  |
| CENMAIL | varchar(40) | NO |  |  |  |
| CENTEL | varchar(40) | NO |  |  |  |
| CENCEL | varchar(40) | NO |  |  |  |
| CENDEFUNCION | date | NO |  | 1900-12-31 |  |
| CENNUMERO | varchar(9) | NO | MUL |  |  |
| CENKINDER | varchar(30) | NO |  |  |  |
| CENKINDERCD | varchar(10) | NO |  |  |  |
| CENPRIM | varchar(30) | NO |  |  |  |
| CENPRIMCD | varchar(10) | NO |  |  |  |
| CENSEC | varchar(30) | NO |  |  |  |
| CENSECCD | varchar(10) | NO |  |  |  |
| CENPREP | varchar(30) | NO |  |  |  |
| CENPREPCD | varchar(10) | NO |  |  |  |
| CENUNIV | varchar(30) | NO |  |  |  |
| CENUNICD | varchar(10) | NO |  |  |  |
| CENCARRERA | varchar(30) | NO |  |  |  |
| CENPOSGRADO | varchar(30) | NO |  |  |  |
| CENPOSGRADOCD | varchar(10) | NO |  |  |  |
| CENPOSGRADOTIT | varchar(30) | NO |  |  |  |
| CENMOVJUV | varchar(30) | NO |  |  |  |
| CENOCUPACION | varchar(30) | NO |  |  |  |
| CENTFRABAJA | tinyint unsigned | NO |  | 0 |  |
| CENEJERCE | tinyint unsigned | NO |  | 0 |  |
| CENTITULADO | tinyint unsigned | NO |  | 0 |  |
| CENACTIVO | tinyint unsigned | NO |  | 0 |  |
| CENDIROF | varchar(50) | NO |  |  |  |
| CENCOLOF | varchar(45) | NO |  |  |  |
| CENCDOF | varchar(30) | NO |  |  |  |
| CENEDOOF | varchar(30) | NO |  |  |  |
| CENCPOF | varchar(6) | NO |  |  |  |
| CENTELOF | varchar(20) | NO |  |  |  |
| CENTELOF2 | varchar(20) | NO |  |  |  |
| CENCOMUNIDAD | varchar(12) | NO |  |  |  |
| CENNUMEROCDI | varchar(10) | NO |  |  |  |
| CENNACIMIENTOCD | varchar(18) | NO |  |  |  |
| CENNACIMIENTOEDO | varchar(15) | NO |  |  |  |
| CENNACIMIENTOPAIS | varchar(11) | NO |  |  |  |
| CENESTPROF | varchar(2) | NO |  |  |  |
| CENESTCARRERA | varchar(35) | NO |  |  |  |
| CENESTPOSGRADO | varchar(2) | NO |  |  |  |
| CENESTPOSGUNIV | varchar(25) | NO |  |  |  |
| CENESTUDIOSOTROS | varchar(2) | NO |  |  |  |
| ENESTOTROSCUAL | varchar(26) | NO |  |  |  |
| CENESTOTROSUNIV | varchar(26) | NO |  |  |  |
| CENPROFESION | varchar(44) | NO |  |  |  |
| CENGADOESTUDIO | varchar(25) | NO |  |  |  |
| CENESPECIALIDAD | varchar(46) | NO |  |  |  |
| CENSEDEDICA | varchar(30) | NO |  |  |  |
| CENMOVJUVENIL | varchar(22) | NO |  |  |  |
| CENTRABAJOTIPO | varchar(30) | NO |  |  |  |
| CENTRABAJOCARGO | varchar(44) | NO |  |  |  |
| CENMATRIMDIVORCIO | varchar(10) | NO |  |  |  |
| CENCASAES | varchar(19) | NO |  |  |  |
| CENCASAFINDESEMANA | varchar(15) | NO |  |  |  |
| CENSINAGOGOGAOTRA | varchar(33) | NO |  |  |  |
| CENSINAOGAFREC | varchar(27) | NO |  |  |  |
| CENIDIOMAINGLES | varchar(8) | NO |  |  |  |
| CENIDIOMAHEBREO | varchar(8) | NO |  |  |  |
| CENIDIOMAARABE | varchar(8) | NO |  |  |  |
| CENIDIOMAFRANCES | varchar(8) | NO |  |  |  |
| CENIDIOMAOTRO | varchar(9) | NO |  |  |  |
| CENVOLUNTTRABAJO | varchar(15) | NO |  |  |  |
| CENVOLUNTOTRACOM | varchar(10) | NO |  |  |  |
| CENVOLUNTDESEA | varchar(26) | NO |  |  |  |
| CENHIJOSCASADOS | varchar(2) | NO |  |  |  |
| CENRELIGIOSIDAD | tinyint unsigned | NO |  | 0 |  |
| CENTRABNOMBRE | varchar(50) | NO |  |  |  |
| CENTRABGIRO | varchar(50) | NO |  |  |  |
| CENTRABENTRECALLE1 | varchar(24) | NO |  |  |  |
| CENTRABENTRECALLE2 | varchar(32) | NO |  |  |  |
| CENTRABFAX | varchar(11) | NO |  |  |  |
| CENTRABNUMEROEXT | varchar(9) | NO |  |  |  |
| CENTRABNUMEROINT | varchar(15) | NO |  |  |  |
| CENTRABOMAIL | varchar(0) | NO |  |  |  |
| CENENCUESTADOR | varchar(24) | NO |  |  |  |
| CENESCUELAACTUAL | varchar(43) | NO |  |  |  |
| CENPARA | varchar(4) | NO |  |  |  |
| CENPARB | varchar(4) | NO |  |  |  |
| CENPARC | varchar(4) | NO |  |  |  |
| CENPARD | varchar(4) | NO |  |  |  |
| CENPARE | varchar(4) | NO |  |  |  |
| CENPARF | varchar(4) | NO |  |  |  |
| CENPARG | varchar(4) | NO |  |  |  |
| CENPARH | varchar(4) | NO |  |  |  |
| CENPARI | varchar(4) | NO |  |  |  |
| CENPARJ | varchar(4) | NO |  |  |  |
| CENPARK | varchar(4) | NO |  |  |  |
| CENPARL | varchar(4) | NO |  |  |  |
| CENPARM | varchar(4) | NO |  |  |  |
| CENPARN | varchar(4) | NO |  |  |  |
| CENPARO | varchar(4) | NO |  |  |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CENESPOSO | NO | 1 | CENESPOSO |
| CENMAMA | NO | 1 | CENMAMA |
| CENNOMBRE | NO | 1 | CENNOMBRE |
| CENNUMERO | NO | 1 | CENNUMERO |
| CENPAPA | NO | 1 | CENPAPA |
| CENSEQ | YES | 1 | CENSEQ |
| CLISEQ | NO | 1 | CLISEQ |
| PRIMARY | YES | 1 | CENSEQ |

## fcenso2

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CEN2SEQ | int | NO | PRI |  | auto_increment |
| CEN2NUMERO | varchar(8) | NO | MUL |  |  |
| CEN2PATERNO | varchar(16) | NO |  |  |  |
| CEN2MATERNO | varchar(16) | NO |  |  |  |
| CEN2NOMBRE | varchar(16) | NO |  |  |  |
| CEN2CASADA | varchar(16) | NO |  |  |  |
| CEN2ESPOSONOMBRE | varchar(16) | NO |  |  |  |
| CEN2EDOCIVIL | varchar(3) | NO |  |  |  |
| CEN2PAPANUMERO | varchar(8) | NO | MUL |  |  |
| CEN2PAPAPATERNO | varchar(16) | NO |  |  |  |
| CEN2PAPAMATERNO | varchar(16) | NO |  |  |  |
| CEN2PAPANOMBRE | varchar(16) | NO |  |  |  |
| CEN2PAPAEDOCIVIL | varchar(3) | NO |  |  |  |
| CEN2MAMANUMERO | varchar(8) | NO | MUL |  |  |
| CEN2MAMAPATERNO | varchar(16) | NO |  |  |  |
| CEN2AMAMAMATERNO | varchar(16) | NO |  |  |  |
| CEN2MAMAMNOMBRE | varchar(16) | NO |  |  |  |
| CEN2MAMAEDOCIVIL | varchar(3) | NO |  |  |  |
| CEN2FAMILIANUMERO | int | NO | MUL | 0 |  |
| CEN2GENERO | varchar(1) | NO |  |  |  |
| CEN2SANGRETIPO | varchar(3) | NO |  |  |  |
| CEN2SANGREDONAR | varchar(2) | NO |  |  |  |
| CEN2CASACALLE | varchar(60) | NO |  |  |  |
| CEN2CASANUMEROEXT | varchar(21) | NO |  |  |  |
| CEN2CASANUMEROINT | varchar(20) | NO |  |  |  |
| CEN2CASAENTRE1 | varchar(60) | NO |  |  |  |
| CEN2CASAENTRE2 | varchar(25) | NO |  |  |  |
| CEN2CASACOLONIA | varchar(30) | NO |  |  |  |
| CEN2CASACP | varchar(5) | NO |  |  |  |
| CEN2CASADELEGACION | varchar(12) | NO |  |  |  |
| CEN2CASAEDO | varchar(7) | NO |  |  |  |
| CEN2CASATELEFONO1 | varchar(60) | NO |  |  |  |
| CEN2CASATELEFONO2 | varchar(30) | NO |  |  |  |
| CEN2EMAIL | varchar(45) | NO |  |  |  |
| CEN2NACIMIENTOFECHA | varchar(10) | NO |  |  |  |
| CEN2COMUNIDAD | varchar(12) | NO |  |  |  |
| CEN2NUMEROCDI | varchar(10) | NO |  |  |  |
| CEN2NACIMIENTOCD | varchar(18) | NO |  |  |  |
| CEN2NACIMIENTOEDO | varchar(15) | NO |  |  |  |
| CEN2NACIMIENTOPAIS | varchar(11) | NO |  |  |  |
| CEN2ESTUDIOSPREESC | varchar(30) | NO |  |  |  |
| CEN2ESTUDIOSPRIMAR | varchar(23) | NO |  |  |  |
| CEN2ESTUDIOSSEC | varchar(26) | NO |  |  |  |
| CEN2ESTUDIOSPREPA | varchar(26) | NO |  |  |  |
| CEN2ESTUDIOSPROF | varchar(2) | NO |  |  |  |
| CEN2ESTUDIOSCARRERA | varchar(35) | NO |  |  |  |
| CEN2ESTUDIOSUNIV | varchar(38) | NO |  |  |  |
| CEN2ESTPOSGRA | varchar(2) | NO |  |  |  |
| CEN2ESTUDIOSPOSGRA | varchar(30) | NO |  |  |  |
| CEN2ESTPOSGRUNI | varchar(25) | NO |  |  |  |
| CEN2ESTUDIOSOTROS | varchar(2) | NO |  |  |  |
| CEN2ESTOTROSCUAL | varchar(26) | NO |  |  |  |
| CEN2ESTOTROSUNIV | varchar(32) | NO |  |  |  |
| CEN2PROFESION | varchar(44) | NO |  |  |  |
| CEN2GADOESTUDIO | varchar(25) | NO |  |  |  |
| CEN2ESPECIALIDAD | varchar(46) | NO |  |  |  |
| CEN2OCUPPRINCIPAL | varchar(49) | NO |  |  |  |
| CEN2SEDEDICA | varchar(30) | NO |  |  |  |
| CEN2OCUPACION | varchar(49) | NO |  |  |  |
| CEN2MOVJUVENIL | varchar(22) | NO |  |  |  |
| CEN2TRABAJOTIPO | varchar(30) | NO |  |  |  |
| CEN2TRABAJOCARGO | varchar(44) | NO |  |  |  |
| CEN2MATRFECHA | varchar(10) | NO |  |  |  |
| CEN2MATRDIVORCIO | varchar(10) | NO |  |  |  |
| CEN2FESPFALLECIM | varchar(10) | NO |  |  |  |
| CEN2CASAES | varchar(19) | NO |  |  |  |
| CEN2CASAFINDESEMANA | varchar(15) | NO |  |  |  |
| CEN2SINAGOGAASISTE | varchar(37) | NO |  |  |  |
| CEN2SINAGOGOGAOTRA | varchar(33) | NO |  |  |  |
| CEN2SINAOGAFREC | varchar(27) | NO |  |  |  |
| CEN2IDIOMAINGLES | varchar(8) | NO |  |  |  |
| CEN2IDIOMAHEBREO | varchar(8) | NO |  |  |  |
| CEN2IDIOMAARABE | varchar(8) | NO |  |  |  |
| CEN2IDIOMAFRANCES | varchar(8) | NO |  |  |  |
| CEN2IDIOMAOTRO | varchar(9) | NO |  |  |  |
| CEN2FECHADEFUNCION | varchar(10) | NO |  |  |  |
| CEN2VOLTRAB | varchar(15) | NO |  |  |  |
| CEN2VOLOTRACOM | varchar(10) | NO |  |  |  |
| CEN2VOLDESEA | varchar(26) | NO |  |  |  |
| CEN2HIJOSCASADOS | varchar(2) | NO |  |  |  |
| CEN2RELIGIOSIDAD | tinyint unsigned | NO |  | 0 |  |
| CEN2TRABAJONOMBRE | varchar(50) | NO |  |  |  |
| CEN2TRABAJOGIRO | varchar(50) | NO |  |  |  |
| CEN2TRABENTRECALLE1 | varchar(24) | NO |  |  |  |
| CEN2TRABENTRECALLE2 | varchar(32) | NO |  |  |  |
| CEN2TRABAJOCALLE | varchar(40) | NO |  |  |  |
| CEN2TRABNUMEROEXT | varchar(9) | NO |  |  |  |
| CEN2TRABANUMEROINT | varchar(15) | NO |  |  |  |
| CEN2TRABAJOCOLONIA | varchar(32) | NO |  |  |  |
| CEN2TRABCP | varchar(5) | NO |  |  |  |
| CEN2TRABDELEGECION | varchar(22) | NO |  |  |  |
| CEN2TRABAJOEDO | varchar(14) | NO |  |  |  |
| CEN2TRABAJOTEL1 | varchar(15) | NO |  |  |  |
| CEN2TRABAJOTEL2 | varchar(15) | NO |  |  |  |
| CEN2TRABAJOFAX | varchar(11) | NO |  |  |  |
| CEN2TRABAJOWEB | varchar(28) | NO |  |  |  |
| CEN2TRABAJOMAIL | varchar(43) | NO |  |  |  |
| CEN2FECHACENSO | varchar(10) | NO |  |  |  |
| CEN2HORAINICIO | varchar(13) | NO |  |  |  |
| CEN2HORAFIN | varchar(13) | NO |  |  |  |
| CEN2ENCUESTADOR | varchar(24) | NO |  |  |  |
| CEN2ESPOSONUMERO | varchar(6) | NO | MUL |  |  |
| CEN2ESCUELAACTUAL | varchar(20) | NO |  |  |  |
| CEN2SILLA | varchar(13) | NO |  |  |  |
| CEN2PAGASILLA | varchar(6) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CEN2ESPOSONUMERO | NO | 1 | CEN2ESPOSONUMERO |
| CEN2FAMILIANUMERO | NO | 1 | CEN2FAMILIANUMERO |
| CEN2MAMANUMERO | NO | 1 | CEN2MAMANUMERO |
| CEN2NUMERO | NO | 1 | CEN2NUMERO |
| CEN2PAPANUMERO | NO | 1 | CEN2PAPANUMERO |
| CEN2SEQ | YES | 1 | CEN2SEQ |
| PRIMARY | YES | 1 | CEN2SEQ |

## fcia

- Engine: InnoDB
- Estimated rows: 1601
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CIASEQ | int | NO | PRI |  | auto_increment |
| CIAPRINTER | decimal(18,0) | NO |  | 0 |  |
| CIAPAR1 | varchar(15) | NO |  |  |  |
| CIAPAR2 | varchar(15) | NO |  |  |  |
| CIAPAR3 | varchar(15) | NO |  |  |  |
| CIAPAR4 | varchar(15) | NO |  |  |  |
| CIAPAR5 | varchar(15) | NO |  |  |  |
| CIAPAR6 | varchar(15) | NO |  |  |  |
| CIAPAR7 | varchar(15) | NO |  |  |  |
| CIAPAR8 | varchar(15) | NO |  |  |  |
| CIAPAR9 | varchar(15) | NO |  |  |  |
| CIAPAR0 | varchar(15) | NO |  |  |  |
| CIANAME | varchar(82) | NO |  |  |  |
| CIACODN | tinyint unsigned | NO |  | 0 |  |
| CIAFEPT | date | NO |  | 1900-12-31 |  |
| CIACDEL | varchar(6) | NO |  |  |  |
| CIACAL | varchar(6) | NO |  |  |  |
| CIATD1 | varchar(11) | NO |  |  |  |
| CIATD2 | varchar(11) | NO |  |  |  |
| CIAPERI | decimal(18,0) | NO |  | 0 |  |
| CIADESG | decimal(18,0) | NO |  | 0 |  |
| CIATM1 | varchar(2) | NO |  |  |  |
| CIATM2 | varchar(2) | NO |  |  |  |
| CIAVXV | decimal(18,0) | NO |  | 0 |  |
| CIAVX | decimal(18,0) | NO |  | 0 |  |
| CIATASA | decimal(18,2) | NO |  | 0.00 |  |
| CIAPRO | varchar(13) | NO |  |  |  |
| CIAPDES | varchar(30) | NO |  |  |  |
| CIATIPVER | decimal(18,0) | NO |  | 0 |  |
| CIATIP1 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP2 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP3 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIAPDD1 | varchar(15) | NO |  |  |  |
| CIAALIAS | varchar(15) | NO |  |  |  |
| CIAPDD3 | varchar(15) | NO |  |  |  |
| CIAHELP | tinyint unsigned | NO |  | 0 |  |
| CIAPUERTO | decimal(18,0) | NO |  | 0 |  |
| CIASERIE | varchar(15) | NO |  |  |  |
| CIAVERSION | varchar(10) | NO |  |  |  |
| CIACLITODOS | decimal(18,0) | NO |  | 0 |  |
| CIADOCTODOS | decimal(18,0) | NO |  | 0 |  |
| CIAAUXTODOS | decimal(18,0) | NO |  | 0 |  |
| CIAINVTODOS | decimal(18,0) | NO |  | 0 |  |
| CIAAUXINVTODOS | decimal(18,0) | NO |  | 0 |  |
| CIAIDEL | varchar(16) | NO |  |  |  |
| CIAIAL | varchar(16) | NO |  |  |  |
| CIATMI1 | varchar(2) | NO |  |  |  |
| CIATMI2 | varchar(2) | NO |  |  |  |
| CIACLAVE | varchar(24) | NO |  |  |  |
| CIAEXPORTNAME | varchar(12) | NO |  |  |  |
| CIAEXPORTIPO | decimal(18,0) | NO |  | 0 |  |
| CIASOLOEXIS | tinyint unsigned | NO |  | 0 |  |
| CIACONPRECIO | tinyint unsigned | NO |  | 0 |  |
| CIAFAM | varchar(16) | NO |  |  |  |
| CIAFDEL | date | NO |  | 1900-12-31 |  |
| CIAFAL | date | NO |  | 1900-12-31 |  |
| CIAFACTNAME | varchar(8) | NO |  |  |  |
| CIAFACLARGO | decimal(18,0) | NO |  | 0 |  |
| CIAFECHASTODAS | tinyint unsigned | NO |  | 0 |  |
| CIACLAVES | tinyint unsigned | NO |  | 0 |  |
| CIAMES | tinyint unsigned | NO |  | 0 |  |
| CIAREG1 | varchar(70) | NO |  |  |  |
| CIAREG2 | varchar(70) | NO |  |  |  |
| CIAREG3 | varchar(70) | NO |  |  |  |
| CIAREG4 | varchar(70) | NO |  |  |  |
| CIAKYT | decimal(18,0) | NO |  | 0 |  |
| CIAKEY | decimal(18,0) | NO | MUL | 0 |  |
| CIAFORDEN | tinyint unsigned | NO |  | 0 |  |
| CIAL0 | varchar(32) | NO |  |  |  |
| CIAL1 | varchar(32) | NO |  |  |  |
| CIAFL | decimal(18,0) | NO |  | 0 |  |
| CIAFORDENTIME | decimal(18,0) | NO |  | 0 |  |
| CIAFILPAR1 | varchar(5) | NO |  |  |  |
| CIAFILPAR2 | varchar(4) | NO |  |  |  |
| CIAFILPAR3 | varchar(4) | NO |  |  |  |
| CIAFILPAR4 | varchar(4) | NO |  |  |  |
| CIAFILPAR5 | varchar(4) | NO |  |  |  |
| CIAFILPAR6 | varchar(4) | NO |  |  |  |
| CIAFILPAR7 | varchar(4) | NO |  |  |  |
| CIAFILPAR8 | varchar(4) | NO |  |  |  |
| CIAFILPAR9 | varchar(4) | NO |  |  |  |
| CIATIP0 | decimal(18,4) | NO |  | 0.0000 |  |
| CIAFACTEXPORT | decimal(18,0) | NO |  | 0 |  |
| CIARECEPEXPORT | decimal(18,0) | NO |  | 0 |  |
| CIARAIZ | decimal(18,0) | NO |  | 0 |  |
| CIAACUMVTS | decimal(18,0) | NO |  | 0 |  |
| CIACOMPORTA | varchar(250) | NO |  |  |  |
| CIACOSTOS | tinyint unsigned | NO |  | 0 |  |
| CIATRANSACTION | decimal(18,0) | NO |  | 0 |  |
| CIAFECHAIMPORT | date | NO |  | 1900-12-31 |  |
| CIAADUANA | varchar(15) | NO |  |  |  |
| CIAPEDIMENTO | varchar(15) | NO |  |  |  |
| CIASIGPOINTER | decimal(18,0) | NO |  | 0 |  |
| CIAFAMCODN | varchar(1) | NO |  |  |  |
| CIAFAMPAR1 | varchar(15) | NO |  |  |  |
| CIAFAMPAR2 | varchar(15) | NO |  |  |  |
| CIAFAMPAR3 | varchar(15) | NO |  |  |  |
| CIAFAMPAR4 | varchar(15) | NO |  |  |  |
| CIAFAMPAR5 | varchar(15) | NO |  |  |  |
| CIAFAMPAR6 | varchar(15) | NO |  |  |  |
| CIAFAMPAR7 | varchar(15) | NO |  |  |  |
| CIASIGFAMPOINT | decimal(18,0) | NO |  | 0 |  |
| CIAFP1 | varchar(10) | NO |  |  |  |
| CIAFP2 | varchar(10) | NO |  |  |  |
| CIAFP3 | varchar(10) | NO |  |  |  |
| CIAPRINTERNAME | varchar(1000) | NO |  |  |  |
| CIASERIEDATE | date | NO |  | 1900-12-31 |  |
| CIAFDEL2 | date | NO |  | 1900-12-31 |  |
| CIAFAL2 | date | NO |  | 1900-12-31 |  |
| CIADESCPROM | decimal(18,2) | NO |  | 0.00 |  |
| CIADESCEFE | decimal(18,2) | NO |  | 0.00 |  |
| CIAOTROSDESC | decimal(18,2) | NO |  | 0.00 |  |
| CIAOBS | decimal(18,2) | NO |  | 0.00 |  |
| CIAALM | varchar(6) | NO |  |  |  |
| CIAPLUGS | varchar(50) | NO |  |  |  |
| CIAUSER | varchar(8) | NO |  |  |  |
| CIACTADEVS | varchar(16) | NO |  |  |  |
| CIAFILIAUXDOC | decimal(18,3) | NO |  | 0.000 |  |
| CIAAGR | varchar(16) | NO |  |  |  |
| CIAVANUALDEL | date | NO |  | 1900-12-31 |  |
| CIAVANUALAL | date | NO |  | 1900-12-31 |  |
| CIACOMEDOCTA | varchar(900) | NO |  |  |  |
| CIAGRUPO | tinyint unsigned | NO |  | 0 |  |
| CIAPDD0 | varchar(15) | NO |  |  |  |
| CIANOCOSTOS | tinyint unsigned | NO |  | 0 |  |
| CIANOSALDOS | tinyint unsigned | NO |  | 0 |  |
| CIAENTREGADOS | tinyint unsigned | NO |  | 0 |  |
| CIAUSRSEQ | int | NO |  | 0 |  |
| CIAFI | date | NO |  | 1900-12-31 |  |
| CIAFF | date | NO |  | 1900-12-31 |  |
| CIAPRINTERNAME2 | varchar(1000) | NO |  |  |  |
| CIAFEPT2 | date | NO |  | 1900-12-31 |  |
| CIAFILTIPOPED | tinyint unsigned | NO |  | 0 |  |
| CIAQ1 | tinyint unsigned | NO |  | 0 |  |
| CIAQ2 | tinyint unsigned | NO |  | 0 |  |
| CIAQ0 | tinyint unsigned | NO |  | 0 |  |
| CIACONNIV1 | tinyint unsigned | NO |  | 0 |  |
| CIACONNIV2 | tinyint unsigned | NO |  | 0 |  |
| CIACONNIV3 | tinyint unsigned | NO |  | 0 |  |
| CIACONNIV4 | tinyint unsigned | NO |  | 0 |  |
| CIACONNIV5 | tinyint unsigned | NO |  | 0 |  |
| CIACTAIVAV | varchar(16) | NO |  |  |  |
| CIACTAIVAC | varchar(16) | NO |  |  |  |
| CIAFILALM | varchar(6) | NO |  |  |  |
| CIAPDD4 | varchar(15) | NO |  |  |  |
| CIAPDD5 | varchar(15) | NO |  |  |  |
| CIAPDD6 | varchar(15) | NO |  |  |  |
| CIAPDD7 | varchar(15) | NO |  |  |  |
| CIAPDD8 | varchar(15) | NO |  |  |  |
| CIAPDD9 | varchar(15) | NO |  |  |  |
| CIATIP4 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP5 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP6 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP7 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP8 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIATIP9 | decimal(18,8) | NO |  | 0.00000000 |  |
| CIACTAINV | varchar(16) | NO |  |  |  |
| CIACTACXC | varchar(16) | NO |  |  |  |
| CIACTAPRV | varchar(16) | NO |  |  |  |
| CIAPDD2 | varchar(16) | NO |  |  |  |
| CIACTARES | varchar(16) | NO |  |  |  |
| CIAPERIODO | varchar(4) | NO |  |  |  |
| CIACTACOSVEN | varchar(16) | NO |  |  |  |
| CIACONNIV6 | tinyint unsigned | NO |  | 0 |  |
| CIACTAACR | varchar(15) | NO |  |  |  |
| CIACTADEUD | varchar(15) | NO |  |  |  |
| CIAPOLIZACONT | varchar(2) | NO |  |  |  |
| CIATALLA | tinyint unsigned | NO |  | 0 |  |
| CIAPRINTERDEFAULT | varchar(60) | NO |  |  |  |
| CIACLAVE2000 | varchar(6) | NO |  |  |  |
| CIA2000 | tinyint unsigned | NO |  | 0 |  |
| CIALECTOR | tinyint unsigned | NO |  | 0 |  |
| CIAQ4 | tinyint unsigned | NO |  | 0 |  |
| CIACIERRE | date | NO |  | 1900-12-31 |  |
| CIAVALORMIN | decimal(18,3) | NO |  | 0.000 |  |
| CIACTAGANANCIA | varchar(15) | NO |  |  |  |
| CIANOCEROS | tinyint unsigned | NO |  | 0 |  |
| CIAUSUARIOS | int | NO |  | 0 |  |
| CIAUSRCOUNT | tinyint unsigned | NO |  | 0 |  |
| CIAPROUM | varchar(2) | NO |  |  |  |
| CIAMATRIXFONT | varchar(20) | NO |  |  |  |
| CIATIT1 | varchar(15) | NO |  |  |  |
| CIATIT2 | varchar(15) | NO |  |  |  |
| CIATIT3 | varchar(15) | NO |  |  |  |
| CIATIT4 | varchar(15) | NO |  |  |  |
| CIATIT5 | varchar(15) | NO |  |  |  |
| CIATIT6 | varchar(15) | NO |  |  |  |
| CIAMAXCXC | decimal(18,2) | NO |  | 0.00 |  |
| CIACTAIMPORT | varchar(15) | NO |  |  |  |
| CIACTAIVAGI | varchar(15) | NO |  |  |  |
| CIACTAIVAGF | varchar(15) | NO |  |  |  |
| CIAFAMPAR8 | varchar(15) | NO |  |  |  |
| CIAFAMPAR9 | varchar(15) | NO |  |  |  |
| CIAFP4 | varchar(10) | NO |  |  |  |
| CIALISTA | varchar(1) | NO |  |  |  |
| CIAAUTO | tinyint unsigned | NO |  | 0 |  |
| CIACTAPERDIDA | varchar(15) | NO |  |  |  |
| CIAFILMONEDA | varchar(2) | NO |  |  |  |
| CIATITDE1 | varchar(10) | NO |  |  |  |
| CIATITDE2 | varchar(10) | NO |  |  |  |
| CIATITDE3 | varchar(10) | NO |  |  |  |
| CIACTASALDOSPOS | varchar(16) | NO |  |  |  |
| CIACTAIEPS | varchar(16) | NO |  |  |  |
| CIACTAFLETESIMPORT | varchar(16) | NO |  |  |  |
| CIACTAINTERESES | varchar(16) | NO |  |  |  |
| CIACTAIVA2 | varchar(16) | NO |  |  |  |
| CIAPOLIZAEXPORT | int | NO |  | 0 |  |
| CIAPEDEXPORT | int | NO |  | 0 |  |
| CIAFACTMARGEN | decimal(18,2) | NO |  | 0.00 |  |
| CIACTAIEPSFIJO | varchar(16) | NO |  |  |  |
| CIACTAIEPSCOMPRAS | varchar(16) | NO |  |  |  |
| CIASUCURSAL | int | NO |  | 0 |  |
| CIAEDIPRE | tinyint unsigned | NO |  | 0 |  |
| CIACIAUSR | int | NO |  | 0 |  |
| CIAQ3 | tinyint unsigned | NO |  | 0 |  |
| CIACTAPUENTE | varchar(16) | NO |  |  |  |
| CIACTARETIVAFLE | varchar(16) | NO |  |  |  |
| CIAEDIID | varchar(16) | NO |  |  |  |
| CIACTAFLETES | varchar(16) | NO |  |  |  |
| CIACTASALDOSNEG | varchar(16) | NO |  |  |  |
| CIACTAPDV | varchar(16) | NO |  |  |  |
| CIAEDIEANFIL | varchar(60) | NO |  |  |  |
| CIAPICT | tinyint unsigned | NO |  | 0 |  |
| CIAFP5 | varchar(15) | NO |  |  |  |
| CIAFP6 | varchar(15) | NO |  |  |  |
| CIAFP7 | varchar(15) | NO |  |  |  |
| CIACTAIVACOBRODE | varchar(13) | NO |  |  |  |
| CIACTAIVACOBROA | varchar(13) | NO |  |  |  |
| CIACTAIVAC2 | varchar(13) | NO |  |  |  |
| CIACONNIV7 | tinyint unsigned | NO |  | 0 |  |
| CIACLAVET | varchar(24) | NO |  |  |  |
| CIAVERS | int | NO |  | 0 |  |
| CIATIMER | decimal(18,0) | NO |  | 0 |  |
| CIACTAIVAPAGODE | varchar(13) | NO |  |  |  |
| CIACTAIVAPAGOA | varchar(13) | NO |  |  |  |
| CIATASAIVA | tinyint unsigned | NO |  | 0 |  |
| CIASOLOUSR | tinyint unsigned | NO |  | 0 |  |
| CIAVAR1 | varchar(7) | NO |  |  |  |
| CIAVAR2 | varchar(7) | NO |  |  |  |
| CIAVAR3 | varchar(7) | NO |  |  |  |
| CIAVAR4 | varchar(7) | NO |  |  |  |
| CIAVAR5 | varchar(7) | NO |  |  |  |
| CIAVAR6 | varchar(7) | NO |  |  |  |
| CIAVAR7 | varchar(7) | NO |  |  |  |
| CIAVAR8 | varchar(7) | NO |  |  |  |
| CIAVAR9 | varchar(7) | NO |  |  |  |
| CIAVAR10 | varchar(7) | NO |  |  |  |
| CIAVAR11 | varchar(7) | NO |  |  |  |
| CIAVAR12 | varchar(7) | NO |  |  |  |
| CIAVAR13 | varchar(7) | NO |  |  |  |
| CIAVAR14 | varchar(7) | NO |  |  |  |
| CIAFILIBAJA | tinyint unsigned | NO |  | 0 |  |
| CIAPATH | varchar(50) | NO |  |  |  |
| CIAUSRES | tinyint unsigned | NO |  | 0 |  |
| CIAUSRPROVS | varchar(300) | NO |  |  |  |
| CIAEMAIL | varchar(60) | NO |  |  |  |
| CIAEMAILSERVER | varchar(40) | NO |  |  |  |
| CIASTEFY | varchar(250) | NO |  |  |  |
| CIACTADESVSTD | varchar(13) | NO |  |  |  |
| CIACTAARANCELES | varchar(16) | NO |  |  |  |
| CIACTASEGUROS | varchar(16) | NO |  |  |  |
| CIACTAOTROS | varchar(16) | NO |  |  |  |
| CIACTARETIVADE | varchar(16) | NO |  |  |  |
| CIACTARETIVAA | varchar(16) | NO |  |  |  |
| CIACTARETISRDE | varchar(18) | NO |  |  |  |
| CIACTARETISRA | varchar(16) | NO |  |  |  |
| CIANUMTDAS | int | NO |  | 0 |  |
| CIAFFU | date | NO |  | 1900-12-31 |  |
| CIAFFC | date | NO |  | 1900-12-31 |  |
| CIACTATRASPASOS | varchar(16) | NO |  |  |  |
| CIATITCLIS | varchar(150) | NO |  |  |  |
| CIATITPRVS | varchar(150) | NO |  |  |  |
| CIAFP8 | varchar(15) | NO |  |  |  |
| CIAFP9 | varchar(15) | NO |  |  |  |
| CIAFP10 | varchar(15) | NO |  |  |  |
| CIAFP11 | varchar(15) | NO |  |  |  |
| CIAVARIOS1 | decimal(18,2) | NO |  | 0.00 |  |
| CIAUSRPAR | varchar(3) | NO |  |  |  |
| CIASTOP | tinyint unsigned | NO |  | 0 |  |
| CIATSTCANDADOS | tinyint unsigned | NO |  | 0 |  |
| CIADEBUG | tinyint unsigned | NO |  | 0 |  |
| CIATDASOFFLINE | int | NO |  | 0 |  |
| CIACTAIVAPAGOACRDE | varchar(15) | NO |  |  |  |
| CIACTAIVAPAGOACRA | varchar(15) | NO |  |  |  |
| CIACTAFLETESC | varchar(15) | NO |  |  |  |
| CIACTASEGUROSC | varchar(15) | NO |  |  |  |
| CIACTAOTROSC | varchar(15) | NO |  |  |  |
| CIASIPETIQ | int | NO |  | 0 |  |
| CIATIMEREDWC | int | NO |  | 0 |  |
| CIADIR | varchar(45) | NO |  |  |  |
| CIACD | varchar(30) | NO |  |  |  |
| CIAEDO | varchar(16) | NO |  |  |  |
| CIACOLONIA | varchar(45) | NO |  |  |  |
| CIANUMINT | varchar(31) | NO |  |  |  |
| CIANUMEXT | varchar(31) | NO |  |  |  |
| CIACP | varchar(5) | NO |  |  |  |
| CIADELEGACION | varchar(45) | NO |  |  |  |
| CIARFC | varchar(13) | NO |  |  |  |
| CIACTABCS | varchar(16) | NO |  |  |  |
| CIAVAR15 | varchar(7) | NO |  |  |  |
| CIAGLN | varchar(14) | NO |  |  |  |
| CIACTAINVFIS | varchar(16) | NO |  |  |  |
| CIAPOLIZAVTAS | varchar(1) | NO |  |  |  |
| CIAFILTIPOVENCE | tinyint unsigned | NO |  | 0 |  |
| CIACTAREDVEN | varchar(16) | NO |  |  |  |
| CIAUSRDEPTO | int | NO |  | 0 |  |
| CIAVAR16 | varchar(7) | NO |  |  |  |
| CIAVAR17 | varchar(7) | NO |  |  |  |
| CIAALTA | date | NO |  | 1900-12-31 |  |
| CIACARSFAMS | varchar(20) | NO |  |  |  |
| CIAALMPAR4 | varchar(10) | NO |  |  |  |
| CIAALMPAR5 | varchar(10) | NO |  |  |  |
| CIAALMPAR6 | varchar(10) | NO |  |  |  |
| CIAALMPAR7 | varchar(10) | NO |  |  |  |
| CIAALMPAR8 | varchar(10) | NO |  |  |  |
| CIAALMPAR9 | varchar(10) | NO |  |  |  |
| CIAPOLIZAING | varchar(1) | NO |  |  |  |
| CIAPOLIZAEGR | varchar(1) | NO |  |  |  |
| CIATMFACT | varchar(2) | NO |  |  |  |
| CIATMNC | varchar(2) | NO |  |  |  |
| CIAFAM1FAXINV | varchar(1) | NO |  |  |  |
| CIAFAM2FAXINV | varchar(1) | NO |  |  |  |
| CIAREGIMENES | varchar(255) | NO |  |  |  |
| CIAPOLIZAPOS | varchar(1) | NO |  |  |  |
| CIAPERFIL | varchar(15) | NO |  |  |  |
| CIAFILTROPDF | tinyint unsigned | NO |  | 0 |  |
| CIAOUTPATH | varchar(200) | NO |  |  |  |
| CIAVARIOS2 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS3 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS4 | decimal(18,2) | NO |  | 0.00 |  |
| CIACONNIV8 | tinyint unsigned | NO |  | 0 |  |
| CIAUSRFILFCLI | varchar(250) | NO |  |  |  |
| CIAUSRFILFDOCCLI | varchar(250) | NO |  |  |  |
| CIAUSRFILFPENCCLI | varchar(250) | NO |  |  |  |
| CIAUSRFILFPRV | varchar(250) | NO |  |  |  |
| CIAUSRFILFDOCPRV | varchar(250) | NO |  |  |  |
| CIAUSRFILFPENCPRV | varchar(250) | NO |  |  |  |
| CIAUSRFILFINV | varchar(250) | NO |  |  |  |
| CIAUSRFILFALM | varchar(250) | NO |  |  |  |
| CIAUSRFILFPOLIZA | varchar(250) | NO |  |  |  |
| CIAUSRFILFALMCAT | varchar(250) | NO |  |  |  |
| CIACTAMAQUILAS | varchar(15) | NO |  |  |  |
| CIACTAINV2 | varchar(15) | NO |  |  |  |
| CIAGASTOBASE | varchar(13) | NO |  |  |  |
| CIASOYEPOS | tinyint unsigned | NO |  | 0 |  |
| CIATDACAJA | varchar(6) | NO |  |  |  |
| CIAPDDSAT1 | varchar(3) | NO |  |  |  |
| CIAPDDSAT2 | varchar(3) | NO |  |  |  |
| CIAPDDSAT3 | varchar(3) | NO |  |  |  |
| CIAPDDSAT4 | varchar(3) | NO |  |  |  |
| CIAPDDSAT5 | varchar(3) | NO |  |  |  |
| CIAPDDSAT6 | varchar(3) | NO |  |  |  |
| CIAPDDSAT7 | varchar(3) | NO |  |  |  |
| CIAPDDSAT8 | varchar(3) | NO |  |  |  |
| CIAPDDSAT9 | varchar(3) | NO |  |  |  |
| CIACTAPROD | varchar(16) | NO |  |  |  |
| CIAFP12 | varchar(15) | NO |  |  |  |
| CIAFP13 | varchar(15) | NO |  |  |  |
| CIAFP14 | varchar(15) | NO |  |  |  |
| CIAFP15 | varchar(15) | NO |  |  |  |
| CIAFP16 | varchar(15) | NO |  |  |  |
| CIADIASVER | int | NO |  | 0 |  |
| CIACOLOR | tinyint unsigned | NO |  | 0 |  |
| CIATIENDAS | int | NO |  | 0 |  |
| CIARESPONS | varchar(150) | NO |  |  |  |
| CIACOLORUNICO | tinyint unsigned | NO |  | 0 |  |
| CIAVARIOS5 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS6 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS7 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS8 | decimal(18,2) | NO |  | 0.00 |  |
| CIAMAILAVISOS | varchar(70) | NO |  |  |  |
| CIAFILRDIN | varchar(250) | NO |  |  |  |
| CIAOCFAM | varchar(1) | NO |  |  |  |
| CIATITDE4 | varchar(10) | NO |  |  |  |
| CIATMFANTICIPO | varchar(2) | NO |  |  |  |
| CIATMNCANTICIPO | varchar(2) | NO |  |  |  |
| CIAFILVTAPOS | varchar(30) | NO |  |  |  |
| CIAUSRCUMPLE | tinyint unsigned | NO |  | 0 |  |
| CIACTAANTICIPOS | varchar(16) | NO |  |  |  |
| CIAEXTENDIDA | varchar(140) | NO |  |  |  |
| CIATMPEDOMNI | varchar(2) | NO |  |  |  |
| CIACTACXCPOS | varchar(16) | NO |  |  |  |
| CIAVARIOS9 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS10 | decimal(18,2) | NO |  | 0.00 |  |
| CIAVARIOS11 | decimal(18,2) | NO |  | 0.00 |  |
| CIAUSRFILFBENC | varchar(255) | NO |  |  |  |
| CIAMCIAID | varchar(6) | NO |  |  |  |
| CIAMARCA | varchar(15) | NO |  |  |  |
| CIATMPEDTRASP | varchar(2) | NO |  |  |  |
| CIACTATKTSPEND | varchar(16) | NO |  |  |  |
| CIACFDIGLOBAL4 | date | NO |  | 1900-12-31 |  |
| CIACFDIGLOBALTIPO | varchar(1) | NO |  |  |  |
| CIACTAIVAPEND | varchar(16) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CIAKEY | NO | 1 | CIAKEY |
| CIASEQ | YES | 1 | CIASEQ |
| PRIMARY | YES | 1 | CIASEQ |

## fcitas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CITSEQ | int | NO | PRI |  | auto_increment |
| CITNUM | varchar(13) | NO | MUL |  |  |
| CITFECHA | date | NO | MUL | 1900-12-31 |  |
| CITHORA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CITCANT | int | NO |  | 0 |  |
| CITLUGAR | varchar(50) | NO |  |  |  |
| CITSTATUS | varchar(10) | NO |  |  |  |
| CITAPARTADA | int | NO |  | 0 |  |
| CITDNUM | varchar(13) | NO | MUL |  |  |
| CITOBS | varchar(3000) | NO |  |  |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CITDNUM | NO | 1 | CITDNUM |
| CITFECHA | NO | 1 | CITFECHA |
| CITNUM | NO | 1 | CITNUM |
| CITSEQ | YES | 1 | CITSEQ |
| CLISEQ | NO | 1 | CLISEQ |
| PRIMARY | YES | 1 | CITSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fcli

- Engine: InnoDB
- Estimated rows: 8563
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CLISEQ | int | NO | PRI |  | auto_increment |
| CLICOD | varchar(6) | NO | MUL |  |  |
| CLINOM | varchar(255) | NO | MUL |  |  |
| CLIDIR | varchar(45) | NO |  |  |  |
| CLICD | varchar(45) | NO |  |  |  |
| CLIEDO | varchar(16) | NO |  |  |  |
| CLITEL | varchar(35) | NO |  |  |  |
| CLICONT | varchar(20) | NO |  |  |  |
| CLISTA | decimal(18,0) | NO |  | 0 |  |
| CLICREDIT | decimal(18,0) | NO |  | 0 |  |
| CLIDESC10 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC20 | decimal(18,2) | NO |  | 0.00 |  |
| CLIPLAZO0 | int | NO |  | 0 |  |
| CLIDIREV | varchar(9) | NO |  |  |  |
| CLIDIPAGO | varchar(9) | NO |  |  |  |
| CLISANT | decimal(18,2) | NO |  | 0.00 |  |
| CLISACT | decimal(18,2) | NO |  | 0.00 |  |
| CLITSACT | decimal(18,2) | NO |  | 0.00 |  |
| CLITSANT | decimal(18,2) | NO |  | 0.00 |  |
| CLIPLAZOR | decimal(18,0) | NO |  | 0 |  |
| CLIPAR1 | varchar(5) | NO | MUL |  |  |
| CLIPAR2 | varchar(4) | NO | MUL |  |  |
| CLIPAR3 | varchar(4) | NO | MUL |  |  |
| CLIPAR4 | varchar(4) | NO | MUL |  |  |
| CLIPAR5 | varchar(4) | NO | MUL |  |  |
| CLIPAR6 | varchar(4) | NO | MUL |  |  |
| CLIPAR7 | varchar(4) | NO | MUL |  |  |
| CLIPAR8 | varchar(4) | NO | MUL |  |  |
| CLIPAR9 | varchar(4) | NO | MUL |  |  |
| CLITEMP | decimal(18,0) | NO |  | 0 |  |
| CLITEMP2 | decimal(18,0) | NO |  | 0 |  |
| CLIULTCOM | date | NO |  | 1900-12-31 |  |
| CLIULTPAG | date | NO |  | 1900-12-31 |  |
| CLICOLONIA | varchar(60) | NO |  |  |  |
| CLIFAX | varchar(35) | NO |  |  |  |
| CLICP | varchar(12) | NO |  |  |  |
| CLIAPLICAR | varchar(6) | NO | MUL |  |  |
| CLIDESC30 | decimal(18,2) | NO |  | 0.00 |  |
| CLIRFC | varchar(15) | NO | MUL |  |  |
| CLIDIR2 | varchar(45) | NO |  |  |  |
| CLICD2 | varchar(45) | NO |  |  |  |
| CLIEDO2 | varchar(45) | NO |  |  |  |
| CLICORENTA | varchar(13) | NO |  |  |  |
| CLIGRUPO0 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO1 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO2 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO3 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO4 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO5 | decimal(18,2) | NO |  | 0.00 |  |
| CLIACUMULADO | decimal(18,2) | NO |  | 0.00 |  |
| CIAEDOSHCP | varchar(2) | NO |  |  |  |
| CLIALTA | date | NO |  | 1900-12-31 |  |
| CLIBAJA | date | NO |  | 1900-12-31 |  |
| CLIOBS | varchar(90) | NO |  |  |  |
| CLINUMPROVEEDOR | varchar(10) | NO |  |  |  |
| CLIMONEDA | tinyint unsigned | NO |  | 0 |  |
| CLITEL3 | varchar(75) | NO | MUL |  |  |
| CLITEL4 | varchar(35) | NO |  |  |  |
| CLICURP | varchar(35) | NO |  |  |  |
| CLIULTPED | date | NO |  | 1900-12-31 |  |
| CLISUCURSAL | varchar(15) | NO |  |  |  |
| CLICTA | varchar(13) | NO |  |  |  |
| CLIGRUPO6 | decimal(18,2) | NO |  | 0.00 |  |
| CLIGRUPO7 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC11 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC21 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC31 | decimal(18,2) | NO |  | 0.00 |  |
| CLIPLAZO1 | int | NO |  | 0 |  |
| CLIDESC12 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC22 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC32 | decimal(18,2) | NO |  | 0.00 |  |
| CLIPLAZO2 | int | NO |  | 0 |  |
| CLIDESC13 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC23 | decimal(18,2) | NO |  | 0.00 |  |
| CLIDESC33 | decimal(18,2) | NO |  | 0.00 |  |
| CLIPLAZO3 | int | NO |  | 0 |  |
| CLIDEPTO0 | varchar(5) | NO |  |  |  |
| CLIDEPTO1 | varchar(5) | NO |  |  |  |
| CLIDEPTO2 | varchar(5) | NO |  |  |  |
| CLIDEPTO3 | varchar(5) | NO |  |  |  |
| CLIEVENTOS | varchar(1) | NO |  |  |  |
| CLICOMISIONV | decimal(18,2) | NO |  | 0.00 |  |
| CLICOMISIONC | decimal(18,2) | NO |  | 0.00 |  |
| CLICORENTAIMP | decimal(18,2) | NO |  | 0.00 |  |
| CLILETRA | varchar(1) | NO | MUL |  |  |
| CLITIPOIVA | tinyint unsigned | NO |  | 0 |  |
| CLIDELEGACION | varchar(50) | NO |  |  |  |
| CLICIA | int | NO |  | 0 |  |
| CLIPRIORI | tinyint unsigned | NO |  | 0 |  |
| CLIPUNTOS | decimal(18,2) | NO |  | 0.00 |  |
| CLIHORAREV | varchar(15) | NO |  |  |  |
| CLIHORAPAG | varchar(15) | NO |  |  |  |
| CLIPLAZOREV | tinyint unsigned | NO |  | 0 |  |
| CLISERIEFACT | varchar(2) | NO |  |  |  |
| CLIEAN | varchar(42) | NO | MUL |  |  |
| CLIVARIOS1 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS2 | decimal(18,2) | NO |  | 0.00 |  |
| CLIALM | varchar(6) | NO |  |  |  |
| CLIVARIOS3 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS4 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS5 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS6 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS7 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS8 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS9 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS10 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS11 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS12 | decimal(18,2) | NO |  | 0.00 |  |
| CLIVIGENCIACRED | date | NO |  | 1900-12-31 |  |
| CLIFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| CLILOCALIZ | varchar(6) | NO |  |  |  |
| CLIRETIVA | decimal(18,2) | NO |  | 0.00 |  |
| CLIRETISR | decimal(18,2) | NO |  | 0.00 |  |
| CLIPORCSEG | tinyint unsigned | NO |  | 0 |  |
| CLITARJETA | varchar(16) | NO |  |  |  |
| CLITARJETABANCO | varchar(4) | NO |  |  |  |
| CLIPAIS | varchar(3) | NO |  |  |  |
| CLIPAIS2 | varchar(3) | NO |  |  |  |
| CLICP2 | varchar(12) | NO |  |  |  |
| CLICOLONIA2 | varchar(60) | NO |  |  |  |
| CLICLAVE | varchar(32) | NO |  |  |  |
| CLINOM2 | varchar(65) | NO |  |  |  |
| CLINUMEXT | varchar(31) | NO |  |  |  |
| CLINUMINT | varchar(31) | NO |  |  |  |
| CLIFACTRES | int | NO |  | 0 |  |
| CLIGLN | varchar(14) | NO | MUL |  |  |
| CLISOLOPOS | tinyint unsigned | NO |  | 0 |  |
| CLIEDIPORTOL | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARPED | tinyint unsigned | NO |  | 0 |  |
| CLIVARFACT | tinyint unsigned | NO |  | 0 |  |
| CLINACIMIENTO | date | NO |  | 1900-12-31 |  |
| CLINOINT | tinyint unsigned | NO |  | 0 |  |
| CLITIPOTER | varchar(2) | NO |  |  |  |
| CLITIPOPER | varchar(2) | NO |  |  |  |
| CLICATPAIS | varchar(2) | NO |  |  |  |
| CLIESPRV | tinyint unsigned | NO |  | 0 |  |
| CLIREGIEPS | varchar(20) | NO |  |  |  |
| CLIMULTICIA | tinyint unsigned | NO |  | 0 |  |
| CLIFACTURARA | varchar(6) | NO |  |  |  |
| CLINUMPARC | tinyint unsigned | NO |  | 0 |  |
| CLIADDENDA | varchar(6) | NO |  |  |  |
| CLICFDEMP | varchar(255) | NO |  |  |  |
| CLIINTERCIA | tinyint unsigned | NO |  | 0 |  |
| CLICTAPAGO | varchar(16) | NO |  |  |  |
| CLIMETPAGO | varchar(80) | NO |  |  |  |
| CLIPROMO | tinyint unsigned | NO |  | 0 |  |
| CLIMD5 | varchar(32) | NO |  |  |  |
| CLIVIGENCIACRED2 | date | NO |  | 1900-12-31 |  |
| CLIVIGENCIADOS | date | NO |  | 1900-12-31 |  |
| CLIWBOLETIN | int | NO |  | 0 |  |
| CLIPROMO1 | varchar(3) | NO |  |  |  |
| CLIPROMO2 | varchar(3) | NO |  |  |  |
| CLIPROMO3 | varchar(3) | NO |  |  |  |
| CLICELULAR | varchar(10) | NO | MUL |  |  |
| CLIDELEGACION2 | varchar(50) | NO |  |  |  |
| CLINUMEXT2 | varchar(31) | NO |  |  |  |
| CLINUMINT2 | varchar(31) | NO |  |  |  |
| CLIRFC2 | varchar(13) | NO |  |  |  |
| CLICURP2 | varchar(18) | NO |  |  |  |
| CLINUMTRIB | varchar(31) | NO |  |  |  |
| CLINUMTRIB2 | varchar(31) | NO |  |  |  |
| CLILEALTAD | tinyint unsigned | NO | MUL | 0 |  |
| CLIDESCTOMON | decimal(18,2) | NO |  | 0.00 |  |
| CLIVARIOS13 | decimal(18,2) | NO |  | 0.00 |  |
| CLISAF | decimal(18,2) | NO |  | 0.00 |  |
| CLICUPONES | decimal(18,2) | NO |  | 0.00 |  |
| CLIEMPLEADO | tinyint unsigned | NO |  | 0 |  |
| CLIEMPLIMITE | decimal(18,0) | NO |  | 0 |  |
| CLIPORCENPUNTOS | decimal(18,2) | NO |  | 0.00 |  |
| CLIANIOREGALO | int | NO |  | 0 |  |
| CLIMAILFACT | varchar(75) | NO |  |  |  |
| CLINIVEL | tinyint unsigned | NO |  | 0 |  |
| CLINIVELANT | tinyint unsigned | NO |  | 0 |  |
| CLIVTASM | int | NO |  | 0 |  |
| CLICELPAIS | varchar(3) | NO |  |  |  |
| CLIREGIMEN | varchar(3) | NO |  |  |  |
| CLICFDI4CS | decimal(18,0) | NO |  | 0 |  |
| CLIVTASD | int | NO |  | 0 |  |
| CLIVTASS | int | NO |  | 0 |  |
| CLILASTDSEQ | int | NO |  | 0 |  |
| CLIALTALEALTAD | date | NO |  | 1900-12-31 |  |
| CLIUSO | varchar(3) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLIAPLICAR | NO | 1 | CLIAPLICAR |
| CLICELULAR | NO | 1 | CLICELULAR |
| CLICOD | NO | 1 | CLICOD |
| CLIEAN | NO | 1 | CLIEAN |
| CLIGLN | NO | 1 | CLIGLN |
| CLILEALTAD | NO | 1 | CLILEALTAD |
| CLILETRA | NO | 1 | CLILETRA |
| CLINOM | NO | 1 | CLINOM |
| CLIPAR1 | NO | 1 | CLIPAR1 |
| CLIPAR2 | NO | 1 | CLIPAR2 |
| CLIPAR3 | NO | 1 | CLIPAR3 |
| CLIPAR4 | NO | 1 | CLIPAR4 |
| CLIPAR5 | NO | 1 | CLIPAR5 |
| CLIPAR6 | NO | 1 | CLIPAR6 |
| CLIPAR7 | NO | 1 | CLIPAR7 |
| CLIPAR8 | NO | 1 | CLIPAR8 |
| CLIPAR9 | NO | 1 | CLIPAR9 |
| CLIRFC | NO | 1 | CLIRFC |
| CLISEQ | YES | 1 | CLISEQ |
| CLITEL3 | NO | 1 | CLITEL3 |
| PRIMARY | YES | 1 | CLISEQ |

## fcoment

- Engine: InnoDB
- Estimated rows: 439805
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| COMSEQ | int | NO | PRI |  | auto_increment |
| COMSEQFACT | decimal(18,0) | NO | MUL | 0 |  |
| COML1 | varchar(100) | NO |  |  |  |
| COML2 | varchar(100) | NO |  |  |  |
| COML3 | varchar(100) | NO |  |  |  |
| COML4 | varchar(140) | NO |  |  |  |
| COMLETRA | varchar(350) | NO |  |  |  |
| COMCAJA | decimal(18,0) | NO |  | 0 |  |
| COML5 | varchar(3000) | NO |  |  |  |
| COMDNUM | varchar(13) | NO |  |  |  |
| COMDES | tinyint unsigned | NO |  | 0 |  |
| COMCAJA2 | int | NO |  | 0 |  |
| COMCAJA3 | int | NO |  | 0 |  |
| COMCAJA4 | int | NO |  | 0 |  |
| COMCAMBIOS | varchar(3000) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| COMSEQ | YES | 1 | COMSEQ |
| COMSEQFACT | NO | 1 | COMSEQFACT |
| PRIMARY | YES | 1 | COMSEQ |

## fcontactos

- Engine: InnoDB
- Estimated rows: 217
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CONTSEQ | int | NO | PRI |  | auto_increment |
| CONTKEY | varchar(6) | NO | MUL |  |  |
| CONTNOMBRE | varchar(50) | NO |  |  |  |
| CONTPUESTO | varchar(50) | NO |  |  |  |
| CONTTEL1 | varchar(15) | NO |  |  |  |
| CONTTEL2 | varchar(15) | NO |  |  |  |
| CONTTEL3 | varchar(15) | NO |  |  |  |
| CONTMAIL | varchar(50) | NO | MUL |  |  |
| CONTOBS | varchar(400) | NO |  |  |  |
| CONTES | tinyint unsigned | NO |  | 0 |  |
| CONTCUMPLE | date | NO |  | 1900-12-31 |  |
| CONTINTERES | varchar(50) | NO |  |  |  |
| CONTEXT | varchar(5) | NO |  |  |  |
| CONTCEL | varchar(15) | NO |  |  |  |
| CONTIT | varchar(15) | NO |  |  |  |
| CONTENVFACT | tinyint unsigned | NO |  | 0 |  |
| CONTRESP1 | tinyint unsigned | NO |  | 0 |  |
| CONTRESP2 | tinyint unsigned | NO |  | 0 |  |
| CONTRESP3 | tinyint unsigned | NO |  | 0 |  |
| CONTRESP4 | tinyint unsigned | NO |  | 0 |  |
| CONTRESP5 | tinyint unsigned | NO |  | 0 |  |
| CONTRESP6 | tinyint unsigned | NO |  | 0 |  |
| CONTFCAMBIO | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CONTPASSWORD | varchar(32) | NO |  |  |  |
| CONTENVECTA | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CONTKEY | NO | 1 | CONTKEY |
| CONTMAIL | NO | 1 | CONTMAIL |
| CONTSEQ | YES | 1 | CONTSEQ |
| PRIMARY | YES | 1 | CONTSEQ |

## fcosto

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| COSEQ | int | NO | PRI |  | auto_increment |
| CODIBUJO | varchar(13) | NO | MUL |  |  |
| CORAPPORT | tinyint unsigned | NO |  | 0 |  |
| COANCHO | decimal(18,2) | NO |  | 0.00 |  |
| COPASOS | decimal(18,0) | NO |  | 0 |  |
| COUNIDADESTOTAL | decimal(18,2) | NO |  | 0.00 |  |
| COTIPOPROD | tinyint unsigned | NO |  | 0 |  |
| COXXACA1 | varchar(13) | NO |  |  |  |
| COXXACA2 | varchar(13) | NO |  |  |  |
| COXXPROC4 | varchar(13) | NO |  |  |  |
| COXXPROC1 | varchar(13) | NO |  |  |  |
| COXXPROC2 | varchar(13) | NO |  |  |  |
| COXXPROC3 | varchar(13) | NO |  |  |  |
| COXXTELA | varchar(13) | NO |  |  |  |
| COXXHILO | varchar(13) | NO |  |  |  |
| COXXBOBINA | varchar(13) | NO |  |  |  |
| COSTONVO | decimal(18,2) | NO |  | 0.00 |  |
| COSTPUNTOS | double | NO |  | 0 |  |
| COXXDETALL1 | varchar(13) | NO |  |  |  |
| COXXDETALL2 | varchar(13) | NO |  |  |  |
| COXXRULO | varchar(13) | NO |  |  |  |
| COXXMONTAJE | varchar(13) | NO |  |  |  |
| CORULOSDIST | int | NO |  | 0 |  |
| COPZASRAPP | tinyint unsigned | NO |  | 0 |  |
| COFECHA | date | NO |  | 1900-12-31 |  |
| COUTILID | decimal(18,2) | NO |  | 0.00 |  |
| COCOSTO | decimal(18,2) | NO |  | 0.00 |  |
| COOTROS | decimal(18,2) | NO |  | 0.00 |  |
| COOTROSTXT | varchar(15) | NO |  |  |  |
| CONUMREC | decimal(18,1) | NO |  | 0.0 |  |
| COANCHOBORDADO | decimal(18,2) | NO |  | 0.00 |  |
| CORANGO | decimal(18,2) | NO |  | 0.00 |  |
| COPORCBOBINA | tinyint unsigned | NO |  | 0 |  |
| COTIPOBOBINA | tinyint unsigned | NO |  | 0 |  |
| COMARGENSUP | decimal(18,2) | NO |  | 0.00 |  |
| COMARGENINF | decimal(18,2) | NO |  | 0.00 |  |
| COPASOSSUP | decimal(18,0) | NO |  | 0 |  |
| COPASOSINF | decimal(18,0) | NO |  | 0 |  |
| COREPEATS | decimal(18,1) | NO |  | 0.0 |  |
| COUSR | varchar(6) | NO |  |  |  |
| COPUNZON | tinyint unsigned | NO |  | 0 |  |
| COTOTPASOS | decimal(18,0) | NO |  | 0 |  |
| COCALADO | decimal(18,2) | NO |  | 0.00 |  |
| COPORCPILZADO | tinyint unsigned | NO |  | 0 |  |
| CODIARTICULO | varchar(1) | NO |  |  |  |
| CODIPUNZON | varchar(1) | NO |  |  |  |
| CODIEST | varchar(3) | NO |  |  |  |
| CODIBAND | varchar(3) | NO |  |  |  |
| CODIHILOTUBCOL | varchar(1) | NO |  |  |  |
| CODIHILOTUBALT | varchar(1) | NO |  |  |  |
| CODIHILOTUBTIP | varchar(4) | NO |  |  |  |
| CODIHILOTUBCALB | varchar(5) | NO |  |  |  |
| CODICABIOCOLOR | varchar(1) | NO |  |  |  |
| CODISECUEN1 | varchar(6) | NO |  |  |  |
| CODISECUEN2 | varchar(6) | NO |  |  |  |
| CODISECUEN3 | varchar(6) | NO |  |  |  |
| CODISECUEN4 | varchar(6) | NO |  |  |  |
| CODISECUEN5 | varchar(6) | NO |  |  |  |
| CODISECUEN6 | varchar(6) | NO |  |  |  |
| CODISECUEN7 | varchar(6) | NO |  |  |  |
| CODIBHILCOLUNC | varchar(1) | NO |  |  |  |
| CODIBHILBOBALT | varchar(1) | NO |  |  |  |
| CODIHILOBOB | varchar(4) | NO |  |  |  |
| CODIHILOCAL | varchar(5) | NO |  |  |  |
| CODICAMBBOB | varchar(1) | NO |  |  |  |
| CODICAMBOB1 | varchar(6) | NO |  |  |  |
| CODICAMBOB2 | varchar(6) | NO |  |  |  |
| CODICAMBOB3 | varchar(6) | NO |  |  |  |
| CODICAMBOB4 | varchar(6) | NO |  |  |  |
| CODICAMBOB5 | varchar(6) | NO |  |  |  |
| CODICAMBOB6 | varchar(6) | NO |  |  |  |
| CODIROLLONUM | varchar(8) | NO |  |  |  |
| CODICAMBOB7 | varchar(6) | NO |  |  |  |
| COGUIPURE | tinyint unsigned | NO |  | 0 |  |
| COTOTMANIOBRAS | decimal(18,0) | NO |  | 0 |  |
| COCCTELA | decimal(18,2) | NO |  | 0.00 |  |
| COLLTELA | decimal(18,2) | NO |  | 0.00 |  |
| COIITELA | decimal(18,2) | NO |  | 0.00 |  |
| COTTTELA | decimal(18,2) | NO |  | 0.00 |  |
| COCCHILO | double | NO |  | 0 |  |
| COLLHILO | decimal(18,2) | NO |  | 0.00 |  |
| COIIHILO | decimal(18,2) | NO |  | 0.00 |  |
| COTTHILO | decimal(18,2) | NO |  | 0.00 |  |
| COCCBOBINA | decimal(18,2) | NO |  | 0.00 |  |
| COLLBOBINA | decimal(18,2) | NO |  | 0.00 |  |
| COIIBOBINA | decimal(18,2) | NO |  | 0.00 |  |
| COTTBOBINA | decimal(18,2) | NO |  | 0.00 |  |
| COCCACA1 | decimal(18,2) | NO |  | 0.00 |  |
| COLLACA1 | decimal(18,2) | NO |  | 0.00 |  |
| COIIACA1 | decimal(18,2) | NO |  | 0.00 |  |
| COTTACA1 | decimal(18,2) | NO |  | 0.00 |  |
| COCCACA2 | decimal(18,2) | NO |  | 0.00 |  |
| COLLACA2 | decimal(18,2) | NO |  | 0.00 |  |
| COIIACA2 | decimal(18,2) | NO |  | 0.00 |  |
| COTTACA2 | decimal(18,2) | NO |  | 0.00 |  |
| COCCPROC4 | decimal(18,2) | NO |  | 0.00 |  |
| COLLPROC4 | decimal(18,2) | NO |  | 0.00 |  |
| COIIPROC4 | decimal(18,2) | NO |  | 0.00 |  |
| COTTPROC4 | decimal(18,2) | NO |  | 0.00 |  |
| COCCPROC1 | decimal(18,2) | NO |  | 0.00 |  |
| COLLPROC1 | decimal(18,2) | NO |  | 0.00 |  |
| COIIPROC1 | decimal(18,2) | NO |  | 0.00 |  |
| COTTPROC1 | decimal(18,2) | NO |  | 0.00 |  |
| COCCPROC2 | decimal(18,2) | NO |  | 0.00 |  |
| COLLPROC2 | decimal(18,2) | NO |  | 0.00 |  |
| COIIPROC2 | decimal(18,2) | NO |  | 0.00 |  |
| COTTPROC2 | decimal(18,2) | NO |  | 0.00 |  |
| COCCPROC3 | decimal(18,2) | NO |  | 0.00 |  |
| COLLPROC3 | decimal(18,2) | NO |  | 0.00 |  |
| COIIPROC3 | decimal(18,2) | NO |  | 0.00 |  |
| COTTPROC3 | decimal(18,2) | NO |  | 0.00 |  |
| COCCDETALL1 | decimal(18,2) | NO |  | 0.00 |  |
| COLLDETALL1 | decimal(18,2) | NO |  | 0.00 |  |
| COIIDETALL1 | decimal(18,2) | NO |  | 0.00 |  |
| COTTDETALL1 | decimal(18,2) | NO |  | 0.00 |  |
| COCCDETALL2 | decimal(18,2) | NO |  | 0.00 |  |
| COLLDETALL2 | decimal(18,2) | NO |  | 0.00 |  |
| COIIDETALL2 | decimal(18,2) | NO |  | 0.00 |  |
| COTTDETALL2 | decimal(18,2) | NO |  | 0.00 |  |
| COCCRULO | decimal(18,2) | NO |  | 0.00 |  |
| COLLRULO | decimal(18,2) | NO |  | 0.00 |  |
| COIIRULO | decimal(18,2) | NO |  | 0.00 |  |
| COCCMONTAJE | decimal(18,2) | NO |  | 0.00 |  |
| COIIMONTAJE | decimal(18,2) | NO |  | 0.00 |  |
| COLLMONTAJE | decimal(18,2) | NO |  | 0.00 |  |
| COTTPASOS | decimal(18,2) | NO |  | 0.00 |  |
| COLZOSTURNO | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CODIBUJO | NO | 1 | CODIBUJO |
| COSEQ | YES | 1 | COSEQ |
| PRIMARY | YES | 1 | COSEQ |

## fcubos

- Engine: InnoDB
- Estimated rows: 86
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CUBSEQ | int | NO | PRI |  | auto_increment |
| CUBNAME | varchar(45) | NO |  |  |  |
| CUBUSR | varchar(300) | NO |  |  |  |
| CUBSENTENCIA | varchar(5120) | NO |  |  |  |
| CUBDIMENSIONES | varchar(500) | NO |  |  |  |
| CUBMETRICAS | varchar(500) | NO |  |  |  |
| CUBTIPO | tinyint unsigned | NO |  | 0 |  |
| CUBCOD | varchar(6) | NO | MUL |  |  |
| CUBPOSICION | varchar(4) | NO | MUL |  |  |
| CUBPATH | varchar(100) | NO |  |  |  |
| CUBFIRMA | varchar(10) | NO |  |  |  |
| CUBTOKFINV | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFFAM | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFAG | varchar(0) | NO |  |  |  |
| CUBTOKFCLI | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFDATES | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFALMCAT | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFPRV | tinyint unsigned | NO |  | 0 |  |
| CUBTOKFPOSTAL | tinyint unsigned | NO |  | 0 |  |
| CUBTAGFAGT | tinyint unsigned | NO |  | 0 |  |
| CUBNUMDIM | tinyint unsigned | NO |  | 0 |  |
| CUBNUMMETR | tinyint unsigned | NO |  | 0 |  |
| CUBBOOK | varchar(6) | NO | MUL |  |  |
| CUBPAGINA | int | NO |  | 0 |  |
| CUBEXPLAIN | varchar(2500) | NO |  |  |  |
| CUBMODULO | varchar(10) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CUBBOOK | NO | 1 | CUBBOOK |
| CUBCOD | NO | 1 | CUBCOD |
| CUBPOSICION | NO | 1 | CUBPOSICION |
| CUBSEQ | YES | 1 | CUBSEQ |
| PRIMARY | YES | 1 | CUBSEQ |

## fcuentas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CUENSEQ | int | NO | PRI |  | auto_increment |
| CUENCC | int | NO |  | 0 |  |
| CUENMES | tinyint unsigned | NO |  | 0 |  |
| CUENANIO | int | NO |  | 0 |  |
| CUENIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| CUENIMPORT2 | decimal(18,2) | NO |  | 0.00 |  |
| CUENPRESUP | decimal(18,2) | NO |  | 0.00 |  |
| CUENCIA | tinyint unsigned | NO |  | 0 |  |
| BSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BSEQ | NO | 1 | BSEQ |
| CUENSEQ | YES | 1 | CUENSEQ |
| PRIMARY | YES | 1 | CUENSEQ |

## fcupones

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CUPSEQ | int | NO | PRI |  | auto_increment |
| CUPNUM | varchar(15) | NO | MUL |  |  |
| CUPFECHA | date | NO |  | 1900-12-31 |  |
| CUPDESDE | date | NO |  | 1900-12-31 |  |
| CUPHASTA | date | NO |  | 1900-12-31 |  |
| CUPDESDE2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CUPHASTA2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CUPMONTOVTA | int | NO |  | 0 |  |
| CUPSEARCH | varchar(100) | NO |  |  |  |
| CUPTIPODESC | tinyint unsigned | NO |  | 0 |  |
| CUPVALOR | decimal(18,2) | NO |  | 0.00 |  |
| CUPABIERTO | tinyint unsigned | NO | MUL | 0 |  |
| CUPZPROMO | varchar(13) | NO |  |  |  |
| CUPMASALTO | tinyint unsigned | NO |  | 0 |  |
| CUPCLIENTE | varchar(6) | NO |  |  |  |
| CUPDESCTO | tinyint unsigned | NO |  | 0 |  |
| CUPPORCPUNTOS | tinyint unsigned | NO |  | 0 |  |
| CUPLISTA | tinyint unsigned | NO |  | 0 |  |
| CUPHDESDE | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CUPHHASTA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| CUPFILTRO | varchar(65) | NO |  |  |  |
| CUPDNUM | varchar(13) | NO | MUL |  |  |
| CUPOFERTA | varchar(6) | NO |  |  |  |
| CUPDNUM2 | varchar(13) | NO |  |  |  |
| CUPTEXTO | varchar(200) | NO |  |  |  |
| CUPQR | varchar(120) | NO |  |  |  |
| CUPIMAGEN | tinyint unsigned | NO |  | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CUPABIERTO | NO | 1 | CUPABIERTO |
| CUPDNUM | NO | 1 | CUPDNUM |
| CUPNUM | NO | 1 | CUPNUM |
| CUPSEQ | YES | 1 | CUPSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | CUPSEQ |

## fcurvas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| CURSEQ | int | NO | PRI |  | auto_increment |
| CURKEY | varchar(40) | NO | MUL |  |  |
| CURSEM1 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM2 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM3 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM4 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM5 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM6 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM7 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM8 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM9 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM10 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM11 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM12 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM13 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM14 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM15 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM16 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM17 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM18 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM19 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM20 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM21 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM22 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM23 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM24 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM25 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM26 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM27 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM28 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM29 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM30 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM31 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM32 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM33 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM34 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM35 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM36 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM37 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM38 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM39 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM40 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM41 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM42 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM43 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM44 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM45 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM46 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM47 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM48 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM49 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM50 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM51 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM52 | decimal(18,2) | NO |  | 0.00 |  |
| CURSEM53 | decimal(18,2) | NO |  | 0.00 |  |
| CURNUM | int | NO | MUL | 0 |  |
| CURSTRING | varchar(260) | NO |  |  |  |
| CURSUMA | varchar(942) | NO |  |  |  |
| CURTOTAL | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CURKEY | NO | 1 | CURKEY |
| CURNUM | NO | 1 | CURNUM |
| CURSEQ | YES | 1 | CURSEQ |
| PRIMARY | YES | 1 | CURSEQ |

## fdash

- Engine: InnoDB
- Estimated rows: 2939
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DASEQ | int | NO | PRI |  | auto_increment |
| DAKEY | varchar(13) | NO | MUL |  |  |
| DATIPO | varchar(6) | NO | MUL |  |  |
| DACLIENTE | varchar(6) | NO |  |  |  |
| DAANO | tinyint unsigned | NO |  | 0 |  |
| DASEM | tinyint unsigned | NO |  | 0 |  |
| DACALIF | tinyint unsigned | NO |  | 0 |  |
| DADESCR | varchar(400) | NO |  |  |  |
| DANOMBRE | varchar(45) | NO |  |  |  |
| DAMINIMO | int | NO |  | 0 |  |
| DAMETA | int | NO |  | 0 |  |
| DAVALOR | int | NO |  | 0 |  |
| DAMES | tinyint unsigned | NO |  | 0 |  |
| DATRIMESTRE | tinyint unsigned | NO |  | 0 |  |
| DAPAR1 | varchar(60) | NO |  |  |  |
| DAPAR2 | varchar(60) | NO |  |  |  |
| DAPAR3 | varchar(60) | NO |  |  |  |
| DAPAR4 | varchar(60) | NO |  |  |  |
| DAPAR5 | varchar(60) | NO |  |  |  |
| DAPAR6 | varchar(60) | NO |  |  |  |
| DAPAR7 | varchar(60) | NO |  |  |  |
| DAPAR8 | varchar(60) | NO |  |  |  |
| DAPAR9 | varchar(60) | NO |  |  |  |
| DANIVEL | tinyint unsigned | NO |  | 0 |  |
| DAMETRICA1 | int | NO |  | 0 |  |
| DAMETRICA2 | int | NO |  | 0 |  |
| DAMETRICA3 | int | NO |  | 0 |  |
| DAMETRICA4 | int | NO |  | 0 |  |
| DAMETRICA5 | int | NO |  | 0 |  |
| DAMETRICA6 | int | NO |  | 0 |  |
| DAMETRICA7 | int | NO |  | 0 |  |
| DAMETRICA8 | int | NO |  | 0 |  |
| DAMETRICA9 | int | NO |  | 0 |  |
| DAMETRICA10 | int | NO |  | 0 |  |
| DAMETRICA11 | int | NO |  | 0 |  |
| DAMETRICA12 | int | NO |  | 0 |  |
| DAMETRICA13 | int | NO |  | 0 |  |
| DAMETRICA14 | int | NO |  | 0 |  |
| DAMETRICA15 | int | NO |  | 0 |  |
| DAMETRICA16 | int | NO |  | 0 |  |
| DAMETRICA17 | int | NO |  | 0 |  |
| DAMETRICA18 | int | NO |  | 0 |  |
| DAMETRICA19 | int | NO |  | 0 |  |
| DAMETRICA20 | int | NO |  | 0 |  |
| DAPAR10 | varchar(60) | NO |  |  |  |
| DAPAR11 | varchar(60) | NO |  |  |  |
| DAPAR12 | varchar(60) | NO |  |  |  |
| DAPAR13 | varchar(60) | NO |  |  |  |
| DAPAR14 | varchar(60) | NO |  |  |  |
| DAPAR15 | varchar(60) | NO |  |  |  |
| DAPAR16 | varchar(60) | NO |  |  |  |
| DAPAR17 | varchar(60) | NO |  |  |  |
| DAPAR18 | varchar(60) | NO |  |  |  |
| DAPAR19 | varchar(60) | NO |  |  |  |
| DAPAR20 | varchar(60) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| DAKEY | NO | 1 | DAKEY |
| DASEQ | YES | 1 | DASEQ |
| DATIPO | NO | 1 | DATIPO |
| PRIMARY | YES | 1 | DASEQ |

## fdesctos

- Engine: InnoDB
- Estimated rows: 115
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DESSEQ | int | NO | PRI |  | auto_increment |
| DESKEY | varchar(20) | NO | MUL |  |  |
| DES1 | decimal(18,2) | NO |  | 0.00 |  |
| DES2 | decimal(18,2) | NO |  | 0.00 |  |
| DES3 | decimal(18,5) | NO |  | 0.00000 |  |
| DESFECHA | date | NO |  | 1900-12-31 |  |
| DESOBS | varchar(45) | NO |  |  |  |
| DESFECHAAL | date | NO |  | 1900-12-31 |  |
| DESCANTINI | decimal(18,2) | NO |  | 0.00 |  |
| DESCANTFIN | decimal(18,2) | NO |  | 0.00 |  |
| DESDEPTO | varchar(50) | NO |  |  |  |
| DESKEY2 | varchar(20) | NO | MUL |  |  |
| DESFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| DESSTATUS | varchar(1) | NO |  |  |  |
| DESANT | decimal(18,5) | NO |  | 0.00000 |  |
| DESUNIDAD | varchar(2) | NO |  |  |  |
| DESVTAANT | decimal(18,2) | NO |  | 0.00 |  |
| DESGRUPONVO | tinyint unsigned | NO |  | 0 |  |
| DESVTANVO | decimal(18,2) | NO |  | 0.00 |  |
| DESUSR | int | NO |  | 0 |  |
| DESPROMO | tinyint unsigned | NO |  | 0 |  |
| DESNIVEL | tinyint unsigned | NO |  | 0 |  |
| DESESCALA | tinyint unsigned | NO |  | 0 |  |
| DESPRO | varchar(13) | NO | MUL |  |  |
| DESART | varchar(13) | NO | MUL |  |  |
| DESTIPO | varchar(1) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| DESART | NO | 1 | DESART |
| DESKEY | NO | 1 | DESKEY |
| DESKEY2 | NO | 1 | DESKEY2 |
| DESPRO | NO | 1 | DESPRO |
| DESSEQ | YES | 1 | DESSEQ |
| PRIMARY | YES | 1 | DESSEQ |

## fdimensiones

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DIMSQQ | int | NO | PRI |  | auto_increment |
| DIMCUBO | varchar(6) | NO | MUL |  |  |
| DIMDIM1 | int | NO | MUL | 0 |  |
| DIMDIM2 | int | NO | MUL | 0 |  |
| DIMDIM3 | int | NO | MUL | 0 |  |
| DIMDIM4 | int | NO | MUL | 0 |  |
| DIMDIM5 | int | NO | MUL | 0 |  |
| DIMDIM6 | int | NO | MUL | 0 |  |
| DIMDIM7 | int | NO | MUL | 0 |  |
| DIMDIM8 | int | NO |  | 0 |  |
| DIMDIM9 | int | NO |  | 0 |  |
| DIMDIM10 | int | NO |  | 0 |  |
| DIMDIM11 | int | NO |  | 0 |  |
| DIMDIM12 | int | NO |  | 0 |  |
| DIMDIM13 | int | NO |  | 0 |  |
| DIMDIM14 | int | NO |  | 0 |  |
| DIMDIM15 | int | NO |  | 0 |  |
| DIMDIM16 | int | NO |  | 0 |  |
| DIMDIM17 | int | NO |  | 0 |  |
| DIMDIM18 | int | NO |  | 0 |  |
| DIMDIM19 | int | NO |  | 0 |  |
| DIMDIM20 | int | NO |  | 0 |  |
| DIMMET1 | int | NO |  | 0 |  |
| DIMMET2 | int | NO |  | 0 |  |
| DIMMET3 | int | NO |  | 0 |  |
| DIMMET4 | int | NO |  | 0 |  |
| DIMMET5 | int | NO |  | 0 |  |
| DIMMET6 | int | NO |  | 0 |  |
| DIMMET7 | int | NO |  | 0 |  |
| DIMMET8 | int | NO |  | 0 |  |
| DIMMET9 | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| DIMCUBO | NO | 1 | DIMCUBO |
| DIMDIM1 | NO | 1 | DIMDIM1 |
| DIMDIM2 | NO | 1 | DIMDIM2 |
| DIMDIM3 | NO | 1 | DIMDIM3 |
| DIMDIM4 | NO | 1 | DIMDIM4 |
| DIMDIM5 | NO | 1 | DIMDIM5 |
| DIMDIM6 | NO | 1 | DIMDIM6 |
| DIMDIM7 | NO | 1 | DIMDIM7 |
| DIMSQQ | YES | 1 | DIMSQQ |
| PRIMARY | YES | 1 | DIMSQQ |

## fdlst

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DLSTSEQ | int | NO | PRI |  | auto_increment |
| DLSTGRUPO | varchar(24) | NO | MUL |  |  |
| DLSTG1 | varchar(4) | NO |  |  |  |
| DLSTG2 | varchar(4) | NO |  |  |  |
| DLSTG3 | varchar(4) | NO |  |  |  |
| DLSTG4 | varchar(4) | NO |  |  |  |
| DLSTINV | int | NO |  | 0 |  |
| DLSTOCTOT | int | NO |  | 0 |  |
| DLSTOCNVOS | int | NO |  | 0 |  |
| DLSTCURVATMP | int | NO |  | 0 |  |
| DLSTFACTOROC | decimal(18,2) | NO |  | 0.00 |  |
| DLSTOTB6M | int | NO |  | 0 |  |
| DLSTCOMPRAR | int | NO |  | 0 |  |
| DLSTFACTOROTB | decimal(18,2) | NO |  | 0.00 |  |
| DLSTFACTOR | decimal(18,2) | NO |  | 0.00 |  |
| DLSTG5 | varchar(4) | NO |  |  |  |
| DLSTG6 | varchar(4) | NO |  |  |  |
| DLSTFORAA | int | NO |  | 0 |  |
| DLSTFORAABIEN | int | NO |  | 0 |  |
| DLSTFORPRESUP | int | NO |  | 0 |  |
| DLSTVARINI | int | NO |  | 0 |  |
| DLSTVARSA | int | NO |  | 0 |  |
| DLSTPZASA | int | NO |  | 0 |  |
| DLSTVARSB | int | NO |  | 0 |  |
| DLSTPZASB | int | NO |  | 0 |  |
| DLSTVARSC | int | NO |  | 0 |  |
| DLSTPZASC | int | NO |  | 0 |  |
| DLSTSEMSOTB | decimal(18,0) | NO |  | 0 |  |
| DLSTFACTORCURVA | decimal(18,2) | NO |  | 0.00 |  |
| DLSTPORCINI | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| DLSTGRUPO | NO | 1 | DLSTGRUPO |
| DLSTSEQ | YES | 1 | DLSTSEQ |
| PRIMARY | YES | 1 | DLSTSEQ |

## fdlstt

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DLSTTSEQ | int | NO | PRI |  | auto_increment |
| DLSTTGRUPO | varchar(27) | NO | MUL |  |  |
| DLSTTG1 | varchar(4) | NO |  |  |  |
| DLSTTG2 | varchar(4) | NO |  |  |  |
| DLSTTG3 | varchar(4) | NO |  |  |  |
| DLSTTG4 | varchar(4) | NO |  |  |  |
| DLSTTG5 | varchar(4) | NO |  |  |  |
| DLSTTG6 | varchar(4) | NO |  |  |  |
| DLSTTALM | varchar(3) | NO |  |  |  |
| DLSTTINV | int | NO |  | 0 |  |
| DLSTTVTAFUT | int | NO |  | 0 |  |
| DLSTTSEMS | int | NO |  | 0 |  |
| DLSTTFORMATO | varchar(1) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| DLSTTGRUPO | NO | 1 | DLSTTGRUPO |
| DLSTTSEQ | YES | 1 | DLSTTSEQ |
| PRIMARY | YES | 1 | DLSTTSEQ |

## fdoc

- Engine: InnoDB
- Estimated rows: 351764
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DSEQ | int | NO | PRI |  | auto_increment |
| DNUM | varchar(13) | NO | MUL |  |  |
| DCANT | decimal(18,2) | NO |  | 0.00 |  |
| DFECHA | date | NO | MUL | 1900-12-31 |  |
| DVENCE | date | NO | MUL | 1900-12-31 |  |
| DCLINOM | varchar(21) | NO | MUL |  |  |
| DIVA | decimal(18,2) | NO |  | 0.00 |  |
| DDESC | decimal(18,2) | NO |  | 0.00 |  |
| DBRUTO | decimal(18,2) | NO |  | 0.00 |  |
| DUTILID | decimal(18,2) | NO |  | 0.00 |  |
| DCANTF | decimal(18,2) | NO |  | 0.00 |  |
| DTIPOC | decimal(18,8) | NO |  | 0.00000000 |  |
| DDESC1 | decimal(18,2) | NO |  | 0.00 |  |
| DDESC2 | decimal(18,2) | NO |  | 0.00 |  |
| DPORCIVA | decimal(18,2) | NO |  | 0.00 |  |
| DREFER | varchar(13) | NO | MUL |  |  |
| DDESC3 | decimal(18,2) | NO |  | 0.00 |  |
| DREFERELLOS | varchar(23) | NO | MUL |  |  |
| DEST | tinyint unsigned | NO |  | 0 |  |
| DESCXC | tinyint unsigned | NO | MUL | 0 |  |
| DESINV | tinyint unsigned | NO |  | 0 |  |
| DESFACT | tinyint unsigned | NO | MUL | 0 |  |
| DVACIO1 | varchar(1) | NO |  |  |  |
| DPAR0 | varchar(6) | NO |  |  |  |
| DPARA | varchar(6) | NO |  |  |  |
| DPAR1 | varchar(5) | NO |  |  |  |
| DPAR2 | varchar(4) | NO |  |  |  |
| DPAR3 | varchar(4) | NO |  |  |  |
| DPAR4 | varchar(4) | NO |  |  |  |
| DPAR5 | varchar(4) | NO |  |  |  |
| DPAR6 | varchar(4) | NO |  |  |  |
| DPAR7 | varchar(4) | NO |  |  |  |
| DPAR8 | varchar(4) | NO |  |  |  |
| DPAR9 | varchar(4) | NO | MUL |  |  |
| DCOMI | decimal(18,2) | NO |  | 0.00 |  |
| DCOM2 | decimal(18,2) | NO |  | 0.00 |  |
| DFECHAFOLIO | datetime | NO |  | 1900-12-31 00:00:00 |  |
| DPAGO1 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO2 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO3 | decimal(18,2) | NO |  | 0.00 |  |
| DIEPES | decimal(18,2) | NO |  | 0.00 |  |
| DPZAS | decimal(18,3) | NO |  | 0.000 |  |
| DFLETE | decimal(18,2) | NO |  | 0.00 |  |
| DPORCSURT | decimal(18,2) | NO |  | 0.00 |  |
| DFECHAPAGO | date | NO | MUL | 1900-12-31 |  |
| DMES | tinyint unsigned | NO | MUL | 0 |  |
| DRUTA | decimal(18,3) | NO | MUL | 0.000 |  |
| DVOLUMEN | decimal(18,2) | NO |  | 0.00 |  |
| DTALON | varchar(23) | NO | MUL |  |  |
| DFECHATALON | datetime | NO | MUL | 1900-12-31 00:00:00 |  |
| DSEGURO | decimal(18,2) | NO |  | 0.00 |  |
| DALMACEN | varchar(6) | NO |  |  |  |
| DFECHAPEDIDO | date | NO |  | 1900-12-31 |  |
| DDEPTO | varchar(13) | NO |  |  |  |
| DMONEDA | tinyint unsigned | NO |  | 0 |  |
| DFOLIO | varchar(15) | NO | MUL |  |  |
| DFECHAPROGR | date | NO | MUL | 1900-12-31 |  |
| DSTATUS | varchar(1) | NO |  |  |  |
| DCOSTOFLETE | decimal(18,2) | NO |  | 0.00 |  |
| DTIPOC2 | decimal(18,8) | NO |  | 0.00000000 |  |
| DPAGO4 | decimal(18,2) | NO |  | 0.00 |  |
| DSUCURSAL | decimal(18,0) | NO |  | 0 |  |
| DPAGINAS | tinyint unsigned | NO |  | 0 |  |
| DINICIAL | tinyint unsigned | NO |  | 0 |  |
| DIMNETO | decimal(18,2) | NO |  | 0.00 |  |
| DOTROS | decimal(18,2) | NO |  | 0.00 |  |
| DOTROSTXT | varchar(20) | NO |  |  |  |
| DIVARET | decimal(18,2) | NO |  | 0.00 |  |
| DPESO | decimal(18,2) | NO |  | 0.00 |  |
| DHIJOS | varchar(2) | NO |  |  |  |
| DYEAR | int | NO |  | 0 |  |
| DPAGO5 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO6 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO7 | decimal(18,2) | NO | MUL | 0.00 |  |
| DNUMPAGO | int | NO |  | 0 |  |
| DUSERCXC | int | NO |  | 0 |  |
| DUSERCXC2 | int | NO |  | 0 |  |
| DHORA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| DUSERCXC3 | int | NO |  | 0 |  |
| DFECHARUTA | date | NO |  | 1900-12-31 |  |
| DPUNTOS | decimal(18,2) | NO |  | 0.00 |  |
| DTIPOCINI | decimal(18,8) | NO |  | 0.00000000 |  |
| DPAGO8 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO9 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO10 | decimal(18,2) | NO |  | 0.00 |  |
| DPAGO11 | decimal(18,2) | NO |  | 0.00 |  |
| DINTERESES | decimal(18,2) | NO |  | 0.00 |  |
| DIUSEQ | int | NO |  | 0 |  |
| DCANCELADA | tinyint unsigned | NO |  | 0 |  |
| DSTATUSCFD | int | NO | MUL | 0 |  |
| DAPROBFOLIOS | varchar(63) | NO |  |  |  |
| DITIPMV | varchar(2) | NO |  |  |  |
| DTIPCAL | int | NO |  | 0 |  |
| DPROGRAMADO | decimal(18,2) | NO |  | 0.00 |  |
| DCDNUM | tinyint unsigned | NO |  | 0 |  |
| DCONTROLPOS | tinyint unsigned | NO |  | 0 |  |
| DMULTICIA | tinyint unsigned | NO |  | 0 |  |
| DCP | varchar(6) | NO |  |  |  |
| DESTRASP | tinyint unsigned | NO | MUL | 0 |  |
| DPARCIAL | int | NO |  | 0 |  |
| DESCOMPOST | int | NO | MUL | 0 |  |
| DMULTICFD | tinyint unsigned | NO |  | 0 |  |
| DCTAPAGO | varchar(16) | NO |  |  |  |
| DMETPAGO | varchar(80) | NO |  |  |  |
| DMONEDERO | varchar(16) | NO |  |  |  |
| DMONEDEROVALOR | decimal(18,2) | NO |  | 0.00 |  |
| DCFDIPACID | int | NO |  | 0 |  |
| DCFDIUUID | varchar(36) | NO | MUL |  |  |
| DISRRET | decimal(18,2) | NO |  | 0.00 |  |
| DCOPIA | int | NO |  | 0 |  |
| DFECHAPEDIDOV | date | NO |  | 1900-12-31 |  |
| DCFDIUSO | varchar(3) | NO |  |  |  |
| DREFERSAT | varchar(13) | NO |  |  |  |
| DREFEROMNI | varchar(36) | NO | MUL |  |  |
| DCANAL | varchar(2) | NO |  |  |  |
| DFECHACROSS | date | NO |  | 1900-12-31 |  |
| DMESTDA | int | NO | MUL | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| DCFDIUUID | NO | 1 | DCFDIUUID |
| DCLINOM | NO | 1 | DCLINOM |
| DESCOMPOST | NO | 1 | DESCOMPOST |
| DESCXC | NO | 1 | DESCXC |
| DESFACT | NO | 1 | DESFACT |
| DESTRASP | NO | 1 | DESTRASP |
| DFECHA | NO | 1 | DFECHA |
| DFECHAPAGO | NO | 1 | DFECHAPAGO |
| DFECHAPROGR | NO | 1 | DFECHAPROGR |
| DFECHATALON | NO | 1 | DFECHATALON |
| DFOLIO | NO | 1 | DFOLIO |
| DMES | NO | 1 | DMES |
| DMESTDA | NO | 1 | DMESTDA |
| DNUM | NO | 1 | DNUM |
| DPAGO7 | NO | 1 | DPAGO7 |
| DPAR9 | NO | 1 | DPAR9 |
| DREFER | NO | 1 | DREFER |
| DREFERELLOS | NO | 1 | DREFERELLOS |
| DREFEROMNI | NO | 1 | DREFEROMNI |
| DRUTA | NO | 1 | DRUTA |
| DSEQ | YES | 1 | DSEQ |
| DSTATUSCFD | NO | 1 | DSTATUSCFD |
| DTALON | NO | 1 | DTALON |
| DVENCE | NO | 1 | DVENCE |
| PRIMARY | YES | 1 | DSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fdopag

- Engine: InnoDB
- Estimated rows: 23153
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| DPAGSEQ | int | NO | PRI |  | auto_increment |
| DPAGNUM | varchar(11) | NO | MUL |  |  |
| DPAGFECHA | date | NO | MUL | 1900-12-31 |  |
| DPAGESTRANSFER | tinyint unsigned | NO |  | 0 |  |
| DPAGMONEDA | tinyint unsigned | NO |  | 0 |  |
| DPAGTIPOC | decimal(18,4) | NO |  | 0.0000 |  |
| DPAGMONTO | decimal(18,2) | NO |  | 0.00 |  |
| DPAGRFCORIGEN | varchar(13) | NO |  |  |  |
| DPAGBANORIGENEXT | varchar(30) | NO |  |  |  |
| DPAGCTAORIGEN | varchar(20) | NO |  |  |  |
| DPAGREFER | varchar(25) | NO | MUL |  |  |
| DPAGRFCDESTINO | varchar(13) | NO |  |  |  |
| DPAGCTADESTINO | varchar(20) | NO |  |  |  |
| DPAGSATMONEDA | varchar(3) | NO |  |  |  |
| DPAGSATFORMAPAG | varchar(2) | NO |  |  |  |
| DPAGES | tinyint unsigned | NO | MUL | 0 |  |
| DPAGOK | tinyint unsigned | NO |  | 0 |  |
| DPAGDNUMCFDI | varchar(13) | NO | MUL |  |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |
| BASEQ | int | NO | MUL | 0 |  |
| BSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BASEQ | NO | 1 | BASEQ |
| BSEQ | NO | 1 | BSEQ |
| CLISEQ | NO | 1 | CLISEQ |
| DPAGDNUMCFDI | NO | 1 | DPAGDNUMCFDI |
| DPAGES | NO | 1 | DPAGES |
| DPAGFECHA | NO | 1 | DPAGFECHA |
| DPAGNUM | NO | 1 | DPAGNUM |
| DPAGREFER | NO | 1 | DPAGREFER |
| DPAGSEQ | YES | 1 | DPAGSEQ |
| PRIMARY | YES | 1 | DPAGSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fedi

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| EDSEQ | int | NO | PRI |  | auto_increment |
| EDTIPO | int | NO |  | 0 |  |
| EDFECHA | date | NO |  | 1900-12-31 |  |
| EDFECHADEL | date | NO |  | 1900-12-31 |  |
| EDFECHAAL | date | NO |  | 1900-12-31 |  |
| EDPEDIDO | varchar(8) | NO |  |  |  |
| EDPEDIDOELLOS | varchar(15) | NO |  |  |  |
| EDISA | int | NO |  | 0 |  |
| EDFUSIONADO | tinyint unsigned | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| EDSEQ | YES | 1 | EDSEQ |
| PRIMARY | YES | 1 | EDSEQ |

## fedocta

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| EDOSEQ | int | NO | PRI |  | auto_increment |
| EDOID | varchar(15) | NO | MUL |  |  |
| EDOCHEQUE | varchar(13) | NO |  |  |  |
| EDOIMPORT | decimal(18,2) | NO |  | 0.00 |  |
| EDOIMPORTNEG | decimal(18,2) | NO |  | 0.00 |  |
| EDOREFER | varchar(60) | NO |  |  |  |
| EDOAFIL | decimal(18,0) | NO |  | 0 |  |
| EDOFECHA | date | NO |  | 1900-12-31 |  |
| EDOBASEQ | int | NO |  | 0 |  |
| EDOFECHAOK | date | NO |  | 1900-12-31 |  |
| EDOCENCOS | int | NO |  | 0 |  |
| EDOPOLIZABENEF | varchar(60) | NO |  |  |  |
| BSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| BSEQ | NO | 1 | BSEQ |
| EDOID | NO | 1 | EDOID |
| EDOSEQ | YES | 1 | EDOSEQ |
| PRIMARY | YES | 1 | EDOSEQ |

## fempaque

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| EMPSEQ | int | NO | PRI |  | auto_increment |
| EMPNUM | decimal(18,0) | NO | MUL | 0 |  |
| EMPCANT | decimal(18,2) | NO |  | 0.00 |  |
| EMPETIQ | tinyint unsigned | NO |  | 0 |  |
| EMPSUCURSAL | decimal(18,0) | NO |  | 0 |  |
| EMPTIPO | decimal(18,2) | NO |  | 0.00 |  |
| EMPETIQFIN | tinyint unsigned | NO |  | 0 |  |
| AISEQ | int | NO | MUL | 0 |  |
| DSEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| AISEQ | NO | 1 | AISEQ |
| DSEQ | NO | 1 | DSEQ |
| EMPNUM | NO | 1 | EMPNUM |
| EMPSEQ | YES | 1 | EMPSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | EMPSEQ |

## fens

- Engine: InnoDB
- Estimated rows: 138
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ENSEQ | int | NO | PRI |  | auto_increment |
| EPRO | varchar(13) | NO | MUL |  |  |
| EART | varchar(13) | NO | MUL |  |  |
| ECANT | decimal(18,6) | NO |  | 0.000000 |  |
| EORDEN | int | NO |  | 0 |  |
| EHERENCIA | tinyint unsigned | NO |  | 0 |  |
| EHERENCIA2 | varchar(6) | NO |  |  |  |
| EUSO | varchar(20) | NO |  |  |  |
| EFACTOR | double | NO |  | 0 |  |
| EUNIDAD | varchar(2) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| EART | NO | 1 | EART |
| ENSEQ | YES | 1 | ENSEQ |
| EPRO | NO | 1 | EPRO |
| PRIMARY | YES | 1 | ENSEQ |

## feventos

- Engine: InnoDB
- Estimated rows: 71
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| EVSEQ | int | NO | PRI |  | auto_increment |
| EVFECHA | date | NO |  | 1900-12-31 |  |
| EVTITULO | varchar(70) | NO |  |  |  |
| EVDESCR | varchar(19200) | NO |  |  |  |
| EVFOLLOW | date | NO | MUL | 1900-12-31 |  |
| EVENCE | date | NO | MUL | 1900-12-31 |  |
| EVTIPO | varchar(3) | NO |  |  |  |
| EVRESPONSABLE | varchar(8) | NO | MUL |  |  |
| EVSOLICITA | varchar(8) | NO | MUL |  |  |
| EVRELEASE | int | NO |  | 0 |  |
| EVIMPORTANCIA | tinyint unsigned | NO |  | 0 |  |
| EVCOMPLEJIDAD | tinyint unsigned | NO |  | 0 |  |
| EVDONE | tinyint unsigned | NO |  | 0 |  |
| EVPROYECTO | varchar(12) | NO |  |  |  |
| EVKEY | varchar(25) | NO | MUL |  |  |
| EVNUM | varchar(8) | NO | MUL |  |  |
| EVFACTURA | varchar(13) | NO |  |  |  |
| EVCOSTO | decimal(18,2) | NO |  | 0.00 |  |
| EVAM | tinyint unsigned | NO |  | 0 |  |
| EVEJECUTA | varchar(15) | NO |  |  |  |
| EVDONE2 | tinyint unsigned | NO |  | 0 |  |
| EVFOLLOWINI | date | NO |  | 1900-12-31 |  |
| EVENCEINI | date | NO |  | 1900-12-31 |  |
| EVSUC | varchar(10) | NO |  |  |  |
| EVEXTRA | tinyint unsigned | NO |  | 0 |  |
| EVDEPTO | tinyint unsigned | NO |  | 0 |  |
| EVCIERRE | varchar(3) | NO |  |  |  |
| EVEVENTOS | int | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| EVENCE | NO | 1 | EVENCE |
| EVFOLLOW | NO | 1 | EVFOLLOW |
| EVKEY | NO | 1 | EVKEY |
| EVNUM | NO | 1 | EVNUM |
| EVRESPONSABLE | NO | 1 | EVRESPONSABLE |
| EVSEQ | YES | 1 | EVSEQ |
| EVSOLICITA | NO | 1 | EVSOLICITA |
| PRIMARY | YES | 1 | EVSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## ffam

- Engine: InnoDB
- Estimated rows: 363
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| FAMSEQ | int | NO | PRI |  | auto_increment |
| FAMTNUM | varchar(4) | NO | MUL |  |  |
| FAMDESCR | varchar(30) | NO | MUL |  |  |
| FAMPROCMIN | decimal(18,2) | NO |  | 0.00 |  |
| FAMPRECIO | decimal(18,2) | NO |  | 0.00 |  |
| FAMCONSEC | int | NO |  | 0 |  |
| FAMT | varchar(1) | NO | MUL |  |  |
| FAMNUM | varchar(4) | NO | MUL |  |  |
| FAMCOLUMNA | int | NO |  | 0 |  |
| FAMPADRE | varchar(4) | NO |  |  |  |
| FAMOBS | varchar(200) | NO |  |  |  |
| FAMVTA1 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA2 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA3 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA4 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA5 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA6 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA7 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA8 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA9 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA10 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA11 | decimal(18,2) | NO |  | 0.00 |  |
| FAMVTA12 | decimal(18,2) | NO |  | 0.00 |  |
| FAMTIEMPO | int | NO |  | 0 |  |
| FAMMESESANALISIS | tinyint unsigned | NO |  | 0 |  |
| FAMTIEMPOENTREGA | decimal(18,0) | NO |  | 0 |  |
| FAMMINIMOTDA | int | NO |  | 0 |  |
| FAMMAXIMOTIENDA | int | NO |  | 0 |  |
| FAMFACTOR | decimal(18,2) | NO |  | 0.00 |  |
| FAMPRV | varchar(6) | NO |  |  |  |
| FAMPORCMIN2 | decimal(18,2) | NO |  | 0.00 |  |
| FAMCANTCAJA | int | NO |  | 0 |  |
| FAMNOCAPAS | tinyint unsigned | NO |  | 0 |  |
| FAMMD5 | varchar(32) | NO |  |  |  |
| FAMPREGUNTA | varchar(100) | NO |  |  |  |
| FAMTVPPCOLOR | tinyint unsigned | NO |  | 0 |  |
| FAMTVDETCOLOR | tinyint unsigned | NO |  | 0 |  |
| FAMICODSAT | varchar(8) | NO |  |  |  |
| FAMPERFILV | varchar(2) | NO |  |  |  |
| FAMPERFILC | varchar(2) | NO |  |  |  |
| FAMPESOSAT | decimal(18,5) | NO |  | 0.00000 |  |
| FAMPROMO | varchar(6) | NO |  |  |  |
| FAMALTOA | decimal(18,2) | NO |  | 0.00 |  |
| FAMANCHOA | decimal(18,2) | NO |  | 0.00 |  |
| FAMLARGOA | decimal(18,2) | NO |  | 0.00 |  |
| FAMALTOB | decimal(18,2) | NO |  | 0.00 |  |
| FAMANCHOB | decimal(18,2) | NO |  | 0.00 |  |
| FAMLARGOB | decimal(18,2) | NO |  | 0.00 |  |
| FAMSEASON | varchar(4) | NO |  |  |  |
| FAMPADRES | varchar(15) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FAMDESCR | NO | 1 | FAMDESCR |
| FAMNUM | NO | 1 | FAMNUM |
| FAMSEQ | YES | 1 | FAMSEQ |
| FAMT | NO | 1 | FAMT |
| FAMTNUM | NO | 1 | FAMTNUM |
| PRIMARY | YES | 1 | FAMSEQ |

## fforecast

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| FORSEQ | int | NO | PRI |  | auto_increment |
| FORKEY | varchar(50) | NO | MUL |  |  |
| FORPRESUP | int | NO |  | 0 |  |
| FORLEEDTIME | int | NO |  | 0 |  |
| FORPRV | varchar(6) | NO | MUL |  |  |
| FORGRUPO | varchar(30) | NO | MUL |  |  |
| FORDATE | date | NO |  | 1900-12-31 |  |
| FORAA | int | NO |  | 0 |  |
| FORAABIEN | int | NO |  | 0 |  |
| FORALM | varchar(5) | NO | MUL |  |  |
| FORICOD | varchar(13) | NO |  |  |  |
| FORSEM | tinyint unsigned | NO | MUL | 0 |  |
| FORCURVA | int | NO | MUL | 0 |  |
| FORG1 | varchar(4) | NO | MUL |  |  |
| FORG2 | varchar(4) | NO | MUL |  |  |
| FORG3 | varchar(4) | NO |  |  |  |
| FORG4 | varchar(4) | NO | MUL |  |  |
| FORG5 | varchar(4) | NO |  |  |  |
| FORIMPORTEAA | int | NO |  | 0 |  |
| FORIMPORTEAABIEN | int | NO |  | 0 |  |
| FORAACOSTO | int | NO |  | 0 |  |
| FORITEMS | int | NO |  | 0 |  |
| FORITEMSBIEN | int | NO |  | 0 |  |
| FORVTA | int | NO |  | 0 |  |
| FORINV | int | NO |  | 0 |  |
| FORPORCINCR | int | NO |  | 0 |  |
| FOROCOM | int | NO |  | 0 |  |
| FORMAXIMO | int | NO |  | 0 |  |
| FORNADA | varchar(2) | NO |  |  |  |
| FORAACOSTOBV | int | NO |  | 0 |  |
| FORPRESUPCST | int | NO |  | 0 |  |
| FORPRESUPVTA | int | NO |  | 0 |  |
| FORINVAA | int | NO |  | 0 |  |
| FORMES | int | NO | MUL | 0 |  |
| FORANIO | int | NO |  | 0 |  |
| FORNS | int | NO |  | 0 |  |
| FORIMPORTE | decimal(18,0) | NO |  | 0 |  |
| FORUTILIDADAA | int | NO |  | 0 |  |
| FORUTILIDAD | int | NO |  | 0 |  |
| FORALMACT | int | NO |  | 0 |  |
| FORHISTMIN | int | NO |  | 0 |  |
| FORHISTMAX | int | NO |  | 0 |  |
| FORHISTEOL | int | NO |  | 0 |  |
| FORHISTEOL2 | int | NO |  | 0 |  |
| FORHISTEOL3 | int | NO |  | 0 |  |
| FORHISTFAMN | int | NO |  | 0 |  |
| FORHISTSOMN | int | NO |  | 0 |  |
| FORHISTFAMX | int | NO |  | 0 |  |
| FORHISTSOMX | int | NO |  | 0 |  |
| FORHISTFACD | int | NO |  | 0 |  |
| FORHISTSOCD | int | NO |  | 0 |  |
| FORG6 | varchar(4) | NO | MUL |  |  |
| FORPRESUPINI | int | NO |  | 0 |  |
| FORVTABV | int | NO |  | 0 |  |
| FORVTAOF | int | NO |  | 0 |  |
| FORCLIMA | varchar(4) | NO |  |  |  |
| FORINVHIST | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FORALM | NO | 1 | FORALM |
| FORCURVA | NO | 1 | FORCURVA |
| FORG1 | NO | 1 | FORG1 |
| FORG2 | NO | 1 | FORG2 |
| FORG4 | NO | 1 | FORG4 |
| FORG6 | NO | 1 | FORG6 |
| FORGRUPO | NO | 1 | FORGRUPO |
| FORKEY | NO | 1 | FORKEY |
| FORMES | NO | 1 | FORMES |
| FORPRV | NO | 1 | FORPRV |
| FORSEM | NO | 1 | FORSEM |
| FORSEQ | YES | 1 | FORSEQ |
| PRIMARY | YES | 1 | FORSEQ |

## ffortalla

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| FORTSEQ | int | NO | PRI |  | auto_increment |
| FORTKEY | varchar(41) | NO | MUL |  |  |
| FORTPRESUP | int | NO |  | 0 |  |
| FORTUM | varchar(3) | NO |  |  |  |
| FORTTALLA | varchar(6) | NO |  |  |  |
| FORTG1 | varchar(4) | NO |  |  |  |
| FORTG2 | varchar(4) | NO |  |  |  |
| FORTG3 | varchar(4) | NO |  |  |  |
| FORTG4 | varchar(4) | NO |  |  |  |
| FORTG5 | varchar(4) | NO |  |  |  |
| FORTAA | int | NO |  | 0 |  |
| FORTAABIEN | int | NO |  | 0 |  |
| FORTALM | varchar(6) | NO |  |  |  |
| FORTTIPO | varchar(1) | NO |  |  |  |
| FORTLOTE | decimal(18,2) | NO |  | 0.00 |  |
| FORTG6 | varchar(4) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FORTKEY | NO | 1 | FORTKEY |
| FORTSEQ | YES | 1 | FORTSEQ |
| PRIMARY | YES | 1 | FORTSEQ |

## ffpagos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| FPSEQ | int | NO | PRI |  | auto_increment |
| FPTDA | varchar(3) | NO | MUL |  |  |
| FPNUM | tinyint unsigned | NO |  | 0 |  |
| FPACTIVA | tinyint unsigned | NO |  | 0 |  |
| FPKEY | varchar(10) | NO | MUL |  |  |
| FPAFIL | varchar(12) | NO |  |  |  |
| PROMSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FPKEY | NO | 1 | FPKEY |
| FPSEQ | YES | 1 | FPSEQ |
| FPTDA | NO | 1 | FPTDA |
| PRIMARY | YES | 1 | FPSEQ |
| PROMSEQ | NO | 1 | PROMSEQ |

## fgrupos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| GRUSEQ | int | NO | PRI |  | auto_increment |
| GRUCOD | varchar(6) | NO |  |  |  |
| GRUALM | varchar(6) | NO |  |  |  |
| GRUCANT | decimal(18,2) | NO |  | 0.00 |  |
| GRUKEY | varchar(12) | NO | MUL |  |  |
| GRUACTIVO | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| GRUKEY | NO | 1 | GRUKEY |
| GRUSEQ | YES | 1 | GRUSEQ |
| PRIMARY | YES | 1 | GRUSEQ |

## fhdcasos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| HDCSEQ | int | NO | PRI |  | auto_increment |
| HDCNUM | int | NO |  | 0 |  |
| HDCTITULO | varchar(60) | NO |  |  |  |
| HDCDESCR | varchar(3000) | NO |  |  |  |
| HDCFECHA | date | NO |  | 1900-12-31 |  |
| HDCFECHAFIN | date | NO |  | 1900-12-31 |  |
| HDCPAR1 | varchar(4) | NO |  |  |  |
| HDCPAR2 | varchar(4) | NO |  |  |  |
| HDCPAR3 | varchar(4) | NO |  |  |  |
| HDCPAR4 | varchar(4) | NO |  |  |  |
| HDCSTATUS | tinyint unsigned | NO |  | 0 |  |
| HDCPRIORIDAD | tinyint unsigned | NO |  | 0 |  |
| HDCUSER | int | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| HDCSEQ | YES | 1 | HDCSEQ |
| PRIMARY | YES | 1 | HDCSEQ |

## fhdinteracciones

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| HDISEQ | int | NO | PRI |  | auto_increment |
| HDIDIALOGO | varchar(3000) | NO |  |  |  |
| CLISEQ | int | NO | MUL | 0 |  |
| HDCSEQ | int | NO | MUL | 0 |  |
| HDLSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| HDCSEQ | NO | 1 | HDCSEQ |
| HDISEQ | YES | 1 | HDISEQ |
| HDLSEQ | NO | 1 | HDLSEQ |
| PRIMARY | YES | 1 | HDISEQ |

## fhdllamadas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| HDLSEQ | int | NO | PRI |  | auto_increment |
| HDLNUM | int | NO |  | 0 |  |
| HDLFECHA | date | NO |  | 1900-12-31 |  |
| HDLCERRADA | tinyint unsigned | NO |  | 0 |  |
| HDLUSR1 | int | NO |  | 0 |  |
| HDLINICIO | datetime | NO |  | 1900-12-31 00:00:00 |  |
| HDLFIN | datetime | NO |  | 1900-12-31 00:00:00 |  |
| HDLCONTACTO | varchar(40) | NO |  |  |  |
| HDLUSR2 | int | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| HDLSEQ | YES | 1 | HDLSEQ |
| PRIMARY | YES | 1 | HDLSEQ |

## fhelp

- Engine: InnoDB
- Estimated rows: 1172
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| HSEQ | int | NO | PRI |  | auto_increment |
| HKEY | varchar(20) | NO | MUL |  |  |
| HHELP1 | varchar(5000) | NO |  |  |  |
| HHELP2 | varchar(30) | NO |  |  |  |
| HUSER0 | tinyint unsigned | NO |  | 0 |  |
| HUSER1 | tinyint unsigned | NO |  | 0 |  |
| HUSER2 | tinyint unsigned | NO |  | 0 |  |
| HUSER3 | tinyint unsigned | NO |  | 0 |  |
| HUSER4 | tinyint unsigned | NO |  | 0 |  |
| HUSER5 | tinyint unsigned | NO |  | 0 |  |
| HUSER6 | tinyint unsigned | NO |  | 0 |  |
| HUSER7 | tinyint unsigned | NO |  | 0 |  |
| HUSER8 | tinyint unsigned | NO |  | 0 |  |
| HUSER9 | tinyint unsigned | NO |  | 0 |  |
| HTIMES | decimal(18,0) | NO |  | 0 |  |
| HLAST | date | NO |  | 1900-12-31 |  |
| HUSER10 | tinyint unsigned | NO |  | 0 |  |
| HUSER11 | tinyint unsigned | NO |  | 0 |  |
| HUSER12 | tinyint unsigned | NO |  | 0 |  |
| HUSER13 | tinyint unsigned | NO |  | 0 |  |
| HUSER14 | tinyint unsigned | NO |  | 0 |  |
| HUSER15 | tinyint unsigned | NO |  | 0 |  |
| HUSER16 | tinyint unsigned | NO |  | 0 |  |
| HUSER17 | tinyint unsigned | NO |  | 0 |  |
| HUSER18 | tinyint unsigned | NO |  | 0 |  |
| HUSER19 | tinyint unsigned | NO |  | 0 |  |
| HUSER20 | tinyint unsigned | NO |  | 0 |  |
| HUSER21 | tinyint unsigned | NO |  | 0 |  |
| HUSER22 | tinyint unsigned | NO |  | 0 |  |
| HUSER23 | tinyint unsigned | NO |  | 0 |  |
| HUSER24 | tinyint unsigned | NO |  | 0 |  |
| HUSER25 | tinyint unsigned | NO |  | 0 |  |
| HUSER26 | tinyint unsigned | NO |  | 0 |  |
| HUSER27 | tinyint unsigned | NO |  | 0 |  |
| HWIZARDDESCR | varchar(40) | NO |  |  |  |
| HUSER28 | tinyint unsigned | NO |  | 0 |  |
| HUSER29 | tinyint unsigned | NO |  | 0 |  |
| HUSER30 | tinyint unsigned | NO |  | 0 |  |
| HUSER31 | tinyint unsigned | NO |  | 0 |  |
| HUSER32 | tinyint unsigned | NO |  | 0 |  |
| HUSER33 | tinyint unsigned | NO |  | 0 |  |
| HUSER34 | tinyint unsigned | NO |  | 0 |  |
| HUSER35 | tinyint unsigned | NO |  | 0 |  |
| HUSER36 | tinyint unsigned | NO |  | 0 |  |
| HUSER37 | tinyint unsigned | NO |  | 0 |  |
| HUSER38 | tinyint unsigned | NO |  | 0 |  |
| HUSER39 | tinyint unsigned | NO |  | 0 |  |
| HUSER40 | tinyint unsigned | NO |  | 0 |  |
| HAUDIT | tinyint unsigned | NO |  | 0 |  |
| HMODULO | varchar(20) | NO |  |  |  |
| HCONTENEDOR | varchar(100) | NO |  |  |  |
| HRUTA | varchar(210) | NO |  |  |  |
| HTIPO | varchar(30) | NO |  |  |  |
| HTEMAS | varchar(300) | NO |  |  |  |
| HDOCUMENT | varchar(300) | NO |  |  |  |
| HUSER41 | tinyint unsigned | NO |  | 0 |  |
| HVALIDACLAVE | varchar(6) | NO |  |  |  |
| HSUBTIPO | varchar(20) | NO |  |  |  |
| HMAIL | tinyint unsigned | NO |  | 0 |  |
| HELPPOS | tinyint unsigned | NO |  | 0 |  |
| HELPHORAPOS | tinyint unsigned | NO |  | 0 |  |
| HELPDATEDAY | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| HKEY | NO | 1 | HKEY |
| HSEQ | YES | 1 | HSEQ |
| PRIMARY | YES | 1 | HSEQ |

## fhuellas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| HUESEQ | int | NO | PRI |  | auto_increment |
| HUECOD | varchar(15) | NO | MUL |  |  |
| HUEDESCR | varchar(20) | NO |  |  |  |
| HUEPZALARGO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPZAANCHO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPZAALTO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPAQLARGO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPAQANCHO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPAQAALTO | decimal(18,4) | NO |  | 0.0000 |  |
| HUECAJLARGO | decimal(18,4) | NO |  | 0.0000 |  |
| HUECAJAANCHO | decimal(18,4) | NO |  | 0.0000 |  |
| HUECAJAALTO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPALLARGO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPALANCHO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPALALTO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEANILARGO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEANIANCHO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEANIALTO | decimal(18,4) | NO |  | 0.0000 |  |
| HUEPALCAJCAM | int | NO |  | 0 |  |
| HUEDESCR2 | varchar(250) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| HUECOD | NO | 1 | HUECOD |
| HUESEQ | YES | 1 | HUESEQ |
| PRIMARY | YES | 1 | HUESEQ |

## fimp

- Engine: InnoDB
- Estimated rows: 31
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| IMPSEQ | int | NO | PRI |  | auto_increment |
| IMPCLA | varchar(3) | NO | MUL |  |  |
| IMPDESCR | varchar(40) | NO |  |  |  |
| IMPCTAIVADE | varchar(16) | NO |  |  |  |
| IMPCTAIVAA | varchar(16) | NO |  |  |  |
| IMPCTAIEPSDE | varchar(16) | NO |  |  |  |
| IMPCTAIEPSA | varchar(16) | NO |  |  |  |
| IMPCTARETIVADE | varchar(16) | NO |  |  |  |
| IMPCTARETIVAA | varchar(16) | NO |  |  |  |
| IMPCTARETISRDE | varchar(16) | NO |  |  |  |
| IMPCTARETISRA | varchar(16) | NO |  |  |  |
| IMPCTAVTS | varchar(16) | NO |  |  |  |
| IMPCTADEVS | varchar(16) | NO |  |  |  |
| IMPCTAINV | varchar(16) | NO |  |  |  |
| IMPCTACOSTO | varchar(16) | NO |  |  |  |
| IMPCTADESV | varchar(16) | NO |  |  |  |
| IMPCTAVTSPOS | varchar(16) | NO |  |  |  |
| IMPCTADEVSPOS | varchar(16) | NO |  |  |  |
| IMPCTADESCTOSPOS | varchar(16) | NO |  |  |  |
| IMPCTADESCTOS | varchar(16) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| IMPCLA | NO | 1 | IMPCLA |
| IMPSEQ | YES | 1 | IMPSEQ |
| PRIMARY | YES | 1 | IMPSEQ |

## finv

- Engine: InnoDB
- Estimated rows: 47468
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ISEQ | int | NO | PRI |  | auto_increment |
| ICOD | varchar(13) | NO | MUL |  |  |
| IDESCR | varchar(60) | NO | MUL |  |  |
| ITIPO | decimal(18,0) | NO |  | 0 |  |
| ILISTA1 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA2 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA3 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA4 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA5 | decimal(18,4) | NO |  | 0.0000 |  |
| IMINIMO | decimal(18,0) | NO |  | 0 |  |
| IMAXIMO | decimal(18,0) | NO |  | 0 |  |
| IPEDCLI | decimal(18,2) | NO |  | 0.00 |  |
| IPEDPRV | decimal(18,2) | NO |  | 0.00 |  |
| INECPRO | decimal(18,0) | NO |  | 0 |  |
| ISTKACT | decimal(18,3) | NO |  | 0.000 |  |
| ISTKANT | decimal(18,3) | NO |  | 0.000 |  |
| ISTKACU | decimal(18,3) | NO |  | 0.000 |  |
| ICANACT | decimal(18,2) | NO |  | 0.00 |  |
| ICANTAN | decimal(18,2) | NO |  | 0.00 |  |
| ICANTAC | decimal(18,2) | NO |  | 0.00 |  |
| IULTVTA | date | NO | MUL | 1900-12-31 |  |
| IULTCPR | date | NO |  | 1900-12-31 |  |
| ITEMP | int | NO |  | 0 |  |
| IARANCEL | varchar(16) | NO |  |  |  |
| IADVALOREM | decimal(18,2) | NO |  | 0.00 |  |
| ILOTE | decimal(18,4) | NO |  | 0.0000 |  |
| ITEMP2 | varchar(0) | NO |  |  |  |
| IPORC1 | decimal(18,2) | NO |  | 0.00 |  |
| IPORC2 | decimal(18,2) | NO |  | 0.00 |  |
| IPORC3 | decimal(18,2) | NO |  | 0.00 |  |
| ITIEMPO | decimal(18,6) | NO |  | 0.000000 |  |
| ILISTA6 | decimal(18,4) | NO |  | 0.0000 |  |
| IFAM | varchar(16) | NO |  |  |  |
| TALLA1 | decimal(18,2) | NO |  | 0.00 |  |
| TALLA2 | decimal(18,2) | NO |  | 0.00 |  |
| TALLA3 | decimal(18,2) | NO |  | 0.00 |  |
| TALLA4 | decimal(18,2) | NO |  | 0.00 |  |
| TALLA5 | decimal(18,2) | NO |  | 0.00 |  |
| TALLA6 | decimal(18,2) | NO |  | 0.00 |  |
| IASIGNADO | decimal(18,2) | NO |  | 0.00 |  |
| IVOLUMEN | decimal(18,6) | NO |  | 0.000000 |  |
| ICANTCAJA | decimal(18,2) | NO |  | 0.00 |  |
| IBODEGA | decimal(18,0) | NO |  | 0 |  |
| ITIPOTIEMPO | tinyint unsigned | NO |  | 0 |  |
| ILISTA7 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA8 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA9 | decimal(18,4) | NO |  | 0.0000 |  |
| INVFIS | decimal(18,4) | NO |  | 0.0000 |  |
| IDESCGRUPO | decimal(18,0) | NO |  | 0 |  |
| IPEDIMENTO | varchar(15) | NO |  |  |  |
| IFECHAIMPORT | date | NO |  | 1900-12-31 |  |
| IADUANA | varchar(25) | NO |  |  |  |
| IPORCIVA | tinyint unsigned | NO |  | 0 |  |
| IPORCOMISION | decimal(18,2) | NO |  | 0.00 |  |
| IFAM1 | varchar(4) | NO | MUL |  |  |
| IFAM2 | varchar(4) | NO | MUL |  |  |
| IFAM3 | varchar(4) | NO | MUL |  |  |
| IFAM4 | varchar(4) | NO | MUL |  |  |
| IFAM5 | varchar(4) | NO | MUL |  |  |
| IFAM6 | varchar(4) | NO | MUL |  |  |
| IFAM7 | varchar(7) | NO | MUL |  |  |
| IOFERDESDE | date | NO |  | 1900-12-31 |  |
| IOFERHASTA | date | NO |  | 1900-12-31 |  |
| IMONEDA | int | NO |  | 0 |  |
| IPORCIEPES | decimal(18,6) | NO |  | 0.000000 |  |
| IPORCARANC | decimal(18,2) | NO |  | 0.00 |  |
| IPOINTERLOTE | decimal(18,0) | NO |  | 0 |  |
| IUM | varchar(3) | NO |  |  |  |
| INUMMAQ | decimal(18,0) | NO |  | 0 |  |
| ISTKPZS | decimal(18,0) | NO |  | 0 |  |
| ICANTCAJA2 | int | NO |  | 0 |  |
| IVOLUMEN2 | decimal(18,3) | NO |  | 0.000 |  |
| ILUGAR | varchar(4) | NO | MUL |  |  |
| ILISTA11 | decimal(18,4) | NO |  | 0.0000 |  |
| IROYALTY | decimal(18,2) | NO |  | 0.00 |  |
| ICODPRV | varchar(16) | NO | MUL |  |  |
| IFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| IPERDIDAVTA | decimal(18,2) | NO |  | 0.00 |  |
| IEAN | varchar(30) | NO | MUL |  |  |
| IEMPAQUE | decimal(18,2) | NO |  | 0.00 |  |
| IPEDCOTIZ | decimal(18,0) | NO |  | 0 |  |
| ICTA | varchar(16) | NO |  |  |  |
| ICTADEV | varchar(16) | NO |  |  |  |
| ILOCALIZ | varchar(30) | NO |  |  |  |
| ICT | int | NO |  | 0 |  |
| IUPC | varchar(13) | NO |  |  |  |
| IMONEDA1 | int | NO |  | 0 |  |
| IMONEDA2 | int | NO |  | 0 |  |
| IMONEDA3 | int | NO |  | 0 |  |
| IMONEDA4 | int | NO |  | 0 |  |
| IMONEDA5 | int | NO |  | 0 |  |
| IMONEDA6 | int | NO |  | 0 |  |
| IMONEDA7 | int | NO |  | 0 |  |
| IMONEDA8 | int | NO |  | 0 |  |
| IMONEDA9 | int | NO |  | 0 |  |
| IMONEDA10 | int | NO |  | 0 |  |
| ILISTA10 | decimal(18,4) | NO |  | 0.0000 |  |
| IDENSIDAD | decimal(18,4) | NO |  | 0.0000 |  |
| ICOLOR | varchar(6) | NO |  |  |  |
| IFISICOINICIAL | decimal(18,4) | NO |  | 0.0000 |  |
| IFAM8 | varchar(4) | NO | MUL |  |  |
| IFAM9 | varchar(4) | NO | MUL |  |  |
| IALTA | date | NO |  | 1900-12-31 |  |
| IVARIOS1 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS2 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS3 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS4 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS5 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS6 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS7 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS8 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS9 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS10 | decimal(18,2) | NO |  | 0.00 |  |
| IFIJOIEPS | decimal(18,2) | NO |  | 0.00 |  |
| IENSABLES | tinyint unsigned | NO |  | 0 |  |
| IUM2 | varchar(3) | NO |  |  |  |
| IUM2FACTOR | double | NO |  | 0 |  |
| IUM2PRECIO | decimal(18,4) | NO |  | 0.0000 |  |
| ICONFIRMADO | decimal(18,3) | NO |  | 0.000 |  |
| IORDCOTIZ | decimal(18,0) | NO |  | 0 |  |
| IFISCAL | int | NO |  | 0 |  |
| IRENGLON | varchar(1) | NO |  |  |  |
| ICOMPOS | varchar(120) | NO |  |  |  |
| IPESOMTRO | double | NO |  | 0 |  |
| IPESO | double | NO |  | 0 |  |
| IPESOSPARAPUNTO | decimal(18,2) | NO |  | 0.00 |  |
| INOCAPAS | tinyint unsigned | NO |  | 0 |  |
| ILISTA12 | decimal(18,4) | NO |  | 0.0000 |  |
| ICONTROLPZAS | tinyint unsigned | NO |  | 0 |  |
| IBAJA | date | NO | MUL | 1900-12-31 |  |
| IEDIEMP | varchar(4) | NO |  |  |  |
| IEDIEMPC | int | NO |  | 0 |  |
| IPRV | varchar(6) | NO | MUL |  |  |
| IVARIOS11 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS12 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS13 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS14 | decimal(18,2) | NO |  | 0.00 |  |
| ISEGUNDAS | varchar(13) | NO |  |  |  |
| IVARIOS15 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS16 | decimal(18,2) | NO |  | 0.00 |  |
| IREBAJAMINIMO | tinyint unsigned | NO |  | 0 |  |
| ITERCERAS | varchar(13) | NO |  |  |  |
| IDESCTOPOS | decimal(18,2) | NO |  | 0.00 |  |
| IMONEDA11 | tinyint unsigned | NO |  | 0 |  |
| IMONEDA12 | tinyint unsigned | NO |  | 0 |  |
| IPROXRECEP | date | NO |  | 1900-12-31 |  |
| IVARIOS17 | decimal(18,2) | NO |  | 0.00 |  |
| ILISTA13 | decimal(18,4) | NO |  | 0.0000 |  |
| IMONEDA13 | tinyint unsigned | NO |  | 0 |  |
| IPRIMERVTAPOS | date | NO |  | 1900-12-31 |  |
| IVARIOS18 | decimal(18,4) | NO |  | 0.0000 |  |
| IVARIOS19 | decimal(18,4) | NO |  | 0.0000 |  |
| ITRANSITO | decimal(18,2) | NO |  | 0.00 |  |
| ITVP | tinyint unsigned | NO | MUL | 0 |  |
| ICTA3 | varchar(16) | NO |  |  |  |
| INOPRODUCTIVO | tinyint unsigned | NO |  | 0 |  |
| IRAIZ | varchar(13) | NO |  |  |  |
| ICOLOREXT | varchar(20) | NO |  |  |  |
| IINACTIVO | tinyint unsigned | NO |  | 0 |  |
| IFECHAENSAMBLE | date | NO |  | 1900-12-31 |  |
| ILARGO | decimal(18,2) | NO |  | 0.00 |  |
| IANCHO | decimal(18,2) | NO |  | 0.00 |  |
| IALTO | decimal(18,2) | NO |  | 0.00 |  |
| IFLAGTRASP | tinyint unsigned | NO |  | 0 |  |
| IFECHACAMBIOPR | date | NO | MUL | 1900-12-31 |  |
| IFOTO | tinyint unsigned | NO |  | 0 |  |
| IACUMENTRADAS | decimal(18,0) | NO |  | 0 |  |
| IMINIMOHASTA | date | NO |  | 1900-12-31 |  |
| IRETIVA | tinyint unsigned | NO |  | 0 |  |
| IFINTEMPORADA | date | NO |  | 1900-12-31 |  |
| ICOMPRAMINIMA | int | NO |  | 0 |  |
| IDLXFTPCOD | varchar(17) | NO |  |  |  |
| IDLXPKGTYP | varchar(8) | NO |  |  |  |
| IDLXUNTPAK | int | NO |  | 0 |  |
| IDLXPAKUOM | varchar(2) | NO |  |  |  |
| IDLXUNTCAS | int | NO |  | 0 |  |
| IDLXCASUOM | varchar(2) | NO |  |  |  |
| IDLXUNTPAL | int | NO |  | 0 |  |
| IDLXPALUOM | varchar(2) | NO |  |  |  |
| IDLXUNTLEN | decimal(18,4) | NO |  | 0.0000 |  |
| IDLXPAKLEN | decimal(18,4) | NO |  | 0.0000 |  |
| IDLXNETWGT | decimal(18,4) | NO |  | 0.0000 |  |
| IDLXABC | varchar(1) | NO |  |  |  |
| IDLXFIFWIN | int | NO |  | 0 |  |
| IDLXDTCFLG | tinyint unsigned | NO |  | 0 |  |
| IDLXAGEPFLNAM | varchar(15) | NO |  |  |  |
| IDLXWGTCOD | varchar(1) | NO |  |  |  |
| IDLXFAM | varchar(15) | NO |  |  |  |
| ICURVATMP | tinyint unsigned | NO | MUL | 0 |  |
| ILMVPZAS | int | NO |  | 0 |  |
| ILMVIMPORT | int | NO |  | 0 |  |
| ILMVCONTRIB | int | NO |  | 0 |  |
| ILMVINV | int | NO |  | 0 |  |
| ILMVTOP | tinyint unsigned | NO |  | 0 |  |
| IFACTORSEMTDAS | decimal(18,2) | NO |  | 0.00 |  |
| IFACTORSEMBODEGA | decimal(18,2) | NO |  | 0.00 |  |
| IDESCTOMON | decimal(18,2) | NO |  | 0.00 |  |
| IPLANLISTA1 | decimal(18,4) | NO |  | 0.0000 |  |
| IPLANLISTA2 | decimal(18,4) | NO |  | 0.0000 |  |
| IPLANLISTA3 | decimal(18,4) | NO |  | 0.0000 |  |
| IPLANLISTA11 | decimal(18,4) | NO |  | 0.0000 |  |
| IFAMA | varchar(4) | NO |  |  |  |
| IFAMB | varchar(4) | NO |  |  |  |
| IFAMC | varchar(4) | NO |  |  |  |
| IFAMD | varchar(4) | NO |  |  |  |
| IFAME | varchar(4) | NO | MUL |  |  |
| IFAMF | varchar(4) | NO |  |  |  |
| IFAMG | varchar(4) | NO |  |  |  |
| IFAMH | varchar(4) | NO |  |  |  |
| IFAMI | varchar(4) | NO |  |  |  |
| IFAMJ | varchar(4) | NO |  |  |  |
| IFAMK | varchar(4) | NO |  |  |  |
| ISTATUSOTB | tinyint unsigned | NO |  | 0 |  |
| IUSEQ | int | NO |  | 0 |  |
| ISOLOCD | tinyint unsigned | NO |  | 0 |  |
| IVTA | int | NO |  | 0 |  |
| IDIASSTK | int | NO |  | 0 |  |
| IPREPACK | int | NO |  | 0 |  |
| IMD5 | varchar(32) | NO |  |  |  |
| IVTAEOL | int | NO |  | 0 |  |
| IMAXIMOINI | decimal(18,0) | NO |  | 0 |  |
| IPPP | decimal(18,2) | NO |  | 0.00 |  |
| IMERCHTIPO | varchar(2) | NO | MUL |  |  |
| IREDI | tinyint unsigned | NO |  | 0 |  |
| ITMVTS | varchar(2) | NO |  |  |  |
| ITMREC | varchar(2) | NO |  |  |  |
| IPORCRETISR | decimal(18,4) | NO |  | 0.0000 |  |
| IPORCRETIVA | decimal(18,4) | NO |  | 0.0000 |  |
| ICTADESV | varchar(16) | NO |  |  |  |
| INOIVAENIEPS | tinyint unsigned | NO |  | 0 |  |
| IWMSCANTIN | int | NO |  | 0 |  |
| IWMSCANTOUT | int | NO |  | 0 |  |
| IWMSCANTPAL | int | NO |  | 0 |  |
| IWMSVOL | double | NO |  | 0 |  |
| IWEBNOVEDAD | int | NO |  | 0 |  |
| IWEBOFERTA | int | NO |  | 0 |  |
| IWEBMASVENDIDO | int | NO |  | 0 |  |
| ITIEMPOAIRE | int | NO |  | 0 |  |
| IASIGNWMS | decimal(18,2) | NO |  | 0.00 |  |
| IFRACCIONABLE | decimal(18,0) | NO |  | 0 |  |
| ITVPML | tinyint unsigned | NO | MUL | 0 |  |
| IDONATIVO | int | NO |  | 0 |  |
| IGRUPON | varchar(2) | NO |  |  |  |
| IMESA | varchar(2) | NO |  |  |  |
| IWEBSTK | decimal(18,2) | NO |  | 0.00 |  |
| IWEBSORTNUM | int | NO |  | 0 |  |
| IWEBSORTDATE | date | NO |  | 1900-12-31 |  |
| ITVPAMAZON | tinyint unsigned | NO |  | 0 |  |
| IARANCELEXP | varchar(16) | NO |  |  |  |
| IFAML | varchar(4) | NO |  |  |  |
| IFAMM | varchar(4) | NO |  |  |  |
| IFAMN | varchar(4) | NO |  |  |  |
| IFAMO | varchar(4) | NO |  |  |  |
| IWEBNOFLETE | tinyint unsigned | NO |  | 0 |  |
| IRANK | int | NO |  | 0 |  |
| IWEBNOPUNTOS | tinyint unsigned | NO |  | 0 |  |
| ICODSAT | varchar(8) | NO |  |  |  |
| ITVPLINIO | tinyint unsigned | NO |  | 0 |  |
| ITVSTATML | varchar(1) | NO | MUL |  |  |
| ITVSTATAMZ | varchar(1) | NO |  |  |  |
| ITVSTATLIN | varchar(1) | NO |  |  |  |
| IMINIMOBOD | int | NO |  | 0 |  |
| IFACTORCCE | decimal(18,5) | NO |  | 0.00000 |  |
| IPOSNODEVS | tinyint unsigned | NO |  | 0 |  |
| IWEBREMATE | tinyint unsigned | NO |  | 0 |  |
| IPOSNOPZAS | tinyint unsigned | NO |  | 0 |  |
| ISTKBUENO | decimal(18,2) | NO |  | 0.00 |  |
| ILISTA14 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA15 | decimal(18,4) | NO |  | 0.0000 |  |
| ILISTA16 | decimal(18,4) | NO |  | 0.0000 |  |
| IMONEDA14 | tinyint unsigned | NO |  | 0 |  |
| IMONEDA15 | tinyint unsigned | NO |  | 0 |  |
| IMONEDA16 | tinyint unsigned | NO |  | 0 |  |
| IVARIOS20 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS21 | decimal(18,2) | NO |  | 0.00 |  |
| IVARIOS22 | decimal(18,2) | NO |  | 0.00 |  |
| ITVPSURTEPRV | tinyint unsigned | NO |  | 0 |  |
| ITVPMLFF | tinyint unsigned | NO |  | 0 |  |
| ITVPAMAZFF | tinyint unsigned | NO |  | 0 |  |
| ITVPLINIOFF | tinyint unsigned | NO |  | 0 |  |
| IWEBPEDIDOS | decimal(18,2) | NO |  | 0.00 |  |
| IZONAPICK | varchar(4) | NO |  |  |  |
| ILOCALIZ2 | varchar(8) | NO |  |  |  |
| IFACTCERO | decimal(18,2) | NO |  | 0.00 |  |
| IENSWEB | tinyint unsigned | NO |  | 0 |  |
| ICCPMPTIPO | int | NO |  | 0 |  |
| ICCPMPCLAVE | varchar(4) | NO |  |  |  |
| ICCPMPEMBALAJE | varchar(4) | NO |  |  |  |
| ILISTA17 | decimal(18,2) | NO |  | 0.00 |  |
| ILISTA18 | decimal(18,2) | NO |  | 0.00 |  |
| IMONEDA17 | int | NO |  | 0 |  |
| IMONEDA18 | int | NO |  | 0 |  |
| IPORPREPACK | tinyint unsigned | NO |  | 0 |  |
| INIVELPRECIO | int | NO |  | 0 |  |
| IFORMATOTDA | varchar(5) | NO |  |  |  |
| ITVPFLEXI | int | NO |  | 0 |  |
| ITDAFORMATO | varchar(10) | NO |  |  |  |
| ITDACLIMA | varchar(10) | NO |  |  |  |
| ITDANIVEL | varchar(10) | NO |  |  |  |
| INUMPREPACKS | int | NO |  | 0 |  |
| ICLIMAS | varchar(10) | NO |  |  |  |
| IFAMP | varchar(4) | NO |  |  |  |
| IFAMQ | varchar(4) | NO |  |  |  |
| IFAMR | varchar(4) | NO |  |  |  |
| USEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| IBAJA | NO | 1 | IBAJA |
| ICOD | NO | 1 | ICOD |
| ICODPRV | NO | 1 | ICODPRV |
| ICURVATMP | NO | 1 | ICURVATMP |
| IDESCR | NO | 1 | IDESCR |
| IEAN | NO | 1 | IEAN |
| IFAM1 | NO | 1 | IFAM1 |
| IFAM2 | NO | 1 | IFAM2 |
| IFAM3 | NO | 1 | IFAM3 |
| IFAM4 | NO | 1 | IFAM4 |
| IFAM5 | NO | 1 | IFAM5 |
| IFAM6 | NO | 1 | IFAM6 |
| IFAM7 | NO | 1 | IFAM7 |
| IFAM8 | NO | 1 | IFAM8 |
| IFAM9 | NO | 1 | IFAM9 |
| IFAME | NO | 1 | IFAME |
| IFECHACAMBIOPR | NO | 1 | IFECHACAMBIOPR |
| ILUGAR | NO | 1 | ILUGAR |
| IMERCHTIPO | NO | 1 | IMERCHTIPO |
| IPRV | NO | 1 | IPRV |
| ISEQ | YES | 1 | ISEQ |
| ITVP | NO | 1 | ITVP |
| ITVPML | NO | 1 | ITVPML |
| ITVSTATML | NO | 1 | ITVSTATML |
| IULTVTA | NO | 1 | IULTVTA |
| PRIMARY | YES | 1 | ISEQ |
| USEQ | NO | 1 | USEQ |

## finv2

- Engine: InnoDB
- Estimated rows: 69642
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| I2SEQ | int | NO | PRI |  | auto_increment |
| I2DESCR | varchar(4800) | NO |  |  |  |
| I2KEY | decimal(18,0) | NO | MUL | 0 |  |
| I2DESCR2 | varchar(4800) | NO |  |  |  |
| I2DESCR3 | varchar(4800) | NO |  |  |  |
| I2COD | varchar(13) | NO | MUL |  |  |
| I2DESCR4 | varchar(4800) | NO |  |  |  |
| I2URL | varchar(4800) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| I2COD | NO | 1 | I2COD |
| I2KEY | NO | 1 | I2KEY |
| I2SEQ | YES | 1 | I2SEQ |
| PRIMARY | YES | 1 | I2SEQ |

## finvc

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| ICSEQ | int | NO | PRI |  | auto_increment |
| ICKEY | varchar(17) | NO | MUL |  |  |
| ICCNT | decimal(18,3) | NO |  | 0.000 |  |
| ICCOS | decimal(18,4) | NO |  | 0.0000 |  |
| ICFEC | date | NO |  | 1900-12-31 |  |
| ICDOC | varchar(7) | NO |  |  |  |
| ICLOTE | decimal(18,3) | NO |  | 0.000 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ICKEY | NO | 1 | ICKEY |
| ICSEQ | YES | 1 | ICSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | ICSEQ |

## flog

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| LOGSEQ | int | NO | PRI |  | auto_increment |
| LOGDT | datetime | NO | MUL | 1900-12-31 00:00:00 |  |
| LOGTYPE | varchar(1) | NO |  |  |  |
| LOGID | int | NO |  | 0 |  |
| LOGMSG | varchar(8192) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| LOGDT | NO | 1 | LOGDT |
| LOGSEQ | YES | 1 | LOGSEQ |
| PRIMARY | YES | 1 | LOGSEQ |

## flotes

- Engine: InnoDB
- Estimated rows: 21464
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| LOSEQ | int | NO | PRI |  | auto_increment |
| LOPEDIM | varchar(15) | NO | MUL |  |  |
| LOFECHA | date | NO |  | 1900-12-31 |  |
| LOADUANA | varchar(25) | NO |  |  |  |
| LOCANT | decimal(18,4) | NO |  | 0.0000 |  |
| LOCOSTO | decimal(18,4) | NO |  | 0.0000 |  |
| LONUM | varchar(300) | NO | MUL |  |  |
| LOKEY | varchar(17) | NO | MUL |  |  |
| LODOC | varchar(13) | NO |  |  |  |
| LOLOTE | decimal(18,3) | NO |  | 0.000 |  |
| LOCOSTOADV | decimal(18,4) | NO |  | 0.0000 |  |
| LOTIPOC2 | decimal(18,4) | NO |  | 0.0000 |  |
| LOCANTINI | decimal(18,4) | NO |  | 0.0000 |  |
| LOCADUCIDAD | date | NO |  | 1900-12-31 |  |
| LOALM | varchar(6) | NO |  |  |  |
| LOPRV | varchar(6) | NO |  |  |  |
| LOLOCALIZ | varchar(20) | NO |  |  |  |
| LOASIGN | decimal(18,2) | NO |  | 0.00 |  |
| LOTEXTO1 | varchar(35) | NO |  |  |  |
| LOTEXTO2 | varchar(35) | NO |  |  |  |
| LOTEXTO3 | varchar(35) | NO |  |  |  |
| LOTEXTO4 | varchar(35) | NO |  |  |  |
| LOTEXTO5 | varchar(35) | NO |  |  |  |
| LOTEXTO6 | varchar(35) | NO |  |  |  |
| LORECEPCION | varchar(11) | NO |  |  |  |
| LOTEXTO7 | varchar(10) | NO |  |  |  |
| LOTEXTO8 | varchar(5) | NO |  |  |  |
| LOKEYINI | varchar(17) | NO |  |  |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| LOKEY | NO | 1 | LOKEY |
| LONUM | NO | 1 | LONUM |
| LOPEDIM | NO | 1 | LOPEDIM |
| LOSEQ | YES | 1 | LOSEQ |
| PRIMARY | YES | 1 | LOSEQ |

## fmail

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MAILSEQ | int | NO | PRI |  | auto_increment |
| MAILDE | varchar(6) | NO | MUL |  |  |
| MAILA | varchar(6) | NO | MUL |  |  |
| MAILDATE1 | datetime | NO | MUL | 1900-12-31 00:00:00 |  |
| MAILTEMA | varchar(25) | NO |  |  |  |
| MAILTEXT | varchar(2000) | NO |  |  |  |
| MAILSTATUS | tinyint unsigned | NO |  | 0 |  |
| MAILNOBORRAR | tinyint unsigned | NO |  | 0 |  |
| MAILRESPUESTA | varchar(100) | NO |  |  |  |
| MAILDATE2 | datetime | NO |  | 1900-12-31 00:00:00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MAILA | NO | 1 | MAILA |
| MAILDATE1 | NO | 1 | MAILDATE1 |
| MAILDE | NO | 1 | MAILDE |
| MAILSEQ | YES | 1 | MAILSEQ |
| PRIMARY | YES | 1 | MAILSEQ |

## fmaquinas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MAQSEQ | int | NO | PRI |  | auto_increment |
| MAQCOD | varchar(6) | NO | MUL |  |  |
| MAQVEL | decimal(18,2) | NO |  | 0.00 |  |
| MAQLIBRE | date | NO |  | 1900-12-31 |  |
| MAQNOM | varchar(40) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MAQCOD | NO | 1 | MAQCOD |
| MAQSEQ | YES | 1 | MAQSEQ |
| PRIMARY | YES | 1 | MAQSEQ |

## fmarbetes

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MARSEQ | int | NO | PRI |  | auto_increment |
| MARNUM | varchar(10) | NO | MUL |  |  |
| MARLOCALIZ | varchar(19) | NO | MUL |  |  |
| MARCOD | varchar(13) | NO | MUL |  |  |
| MARCONT1 | decimal(18,2) | NO |  | 0.00 |  |
| MARCONT2 | decimal(18,2) | NO |  | 0.00 |  |
| MARCONT3 | decimal(18,2) | NO |  | 0.00 |  |
| MARFECHA | date | NO |  | 1900-12-31 |  |
| MARALM | varchar(6) | NO |  |  |  |
| MARINVINI | decimal(18,2) | NO |  | 0.00 |  |
| MARCANT | decimal(18,2) | NO |  | 0.00 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| MARCOD | NO | 1 | MARCOD |
| MARLOCALIZ | NO | 1 | MARLOCALIZ |
| MARNUM | NO | 1 | MARNUM |
| MARSEQ | YES | 1 | MARSEQ |
| PRIMARY | YES | 1 | MARSEQ |

## fmedidas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MEDSEQ | int | NO | PRI |  | auto_increment |
| MEDTIPO | tinyint unsigned | NO | MUL | 0 |  |
| MEDFAM2 | varchar(4) | NO |  |  |  |
| MEDFAM3 | varchar(4) | NO |  |  |  |
| MEDART | varchar(6) | NO |  |  |  |
| MEDDESCR | varchar(30) | NO |  |  |  |
| MEDPASO | decimal(18,3) | NO |  | 0.000 |  |
| MEDTOLPOS | decimal(18,3) | NO |  | 0.000 |  |
| MEDTOLNEG | decimal(18,3) | NO |  | 0.000 |  |
| MEDUM | varchar(3) | NO |  |  |  |
| MEDICOD | varchar(13) | NO | MUL |  |  |
| MEDKEY | varchar(25) | NO | MUL |  |  |
| MEDTALLA11 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA12 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA13 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA14 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA15 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA16 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA17 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA18 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA19 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA20 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA21 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA22 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA23 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA24 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA25 | decimal(18,2) | NO |  | 0.00 |  |
| MEDTALLA26 | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MEDICOD | NO | 1 | MEDICOD |
| MEDKEY | NO | 1 | MEDKEY |
| MEDSEQ | YES | 1 | MEDSEQ |
| MEDTIPO | NO | 1 | MEDTIPO |
| PRIMARY | YES | 1 | MEDSEQ |

## fmenlin

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MLSEQ | int | NO | PRI |  | auto_increment |
| MLKEY | varchar(8) | NO | MUL |  |  |
| MLPROD | varchar(13) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MLKEY | NO | 1 | MLKEY |
| MLSEQ | YES | 1 | MLSEQ |
| PRIMARY | YES | 1 | MLSEQ |

## fmenu

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MENSEQ | int | NO | PRI |  | auto_increment |
| MENPROD | varchar(20) | NO |  |  |  |
| MENART | varchar(30) | NO |  |  |  |
| MENDESCR | varchar(45) | NO |  |  |  |
| MENICOD | varchar(13) | NO |  |  |  |
| MENPRECIO | decimal(18,2) | NO |  | 0.00 |  |
| MENX | tinyint unsigned | NO | MUL | 0 |  |
| MENY | tinyint unsigned | NO |  | 0 |  |
| MENZ | tinyint unsigned | NO |  | 0 |  |
| MENPALETA | varchar(1) | NO |  |  |  |
| MENPICT | varchar(15) | NO |  |  |  |
| MENPICTPAL | varchar(15) | NO |  |  |  |
| MENCOMBO | tinyint unsigned | NO |  | 0 |  |
| MENCOMBOMIN | tinyint unsigned | NO |  | 0 |  |
| MENCOMBOMAX | tinyint unsigned | NO |  | 0 |  |
| MENGRANEL | tinyint unsigned | NO |  | 0 |  |
| MENMODIF | varchar(6) | NO |  |  |  |
| MENKDS | tinyint unsigned | NO |  | 0 |  |
| MENYDEFAULT | tinyint unsigned | NO |  | 0 |  |
| MENLAYOUTA | tinyint unsigned | NO |  | 0 |  |
| MENDESCFAM1 | varchar(15) | NO |  |  |  |
| MEMDESC2FAM | varchar(1) | NO |  |  |  |
| MEMDESC2VALOR | varchar(3) | NO |  |  |  |
| MENDESCFDEL | datetime | NO |  | 1900-12-31 00:00:00 |  |
| MEMDESCFAL | datetime | NO |  | 1900-12-31 00:00:00 |  |
| MENPORC | tinyint unsigned | NO |  | 0 |  |
| MENAUT | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MENSEQ | YES | 1 | MENSEQ |
| MENX | NO | 1 | MENX |
| PRIMARY | YES | 1 | MENSEQ |

## fmonedero

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MOSEQ | int | NO | PRI |  | auto_increment |
| MOMONTOINI | decimal(18,2) | NO |  | 0.00 |  |
| MOSALDO | decimal(18,2) | NO |  | 0.00 |  |
| MODESDE | date | NO |  | 1900-12-31 |  |
| MOHASTA | date | NO |  | 1900-12-31 |  |
| MOCLIENTE | varchar(6) | NO | MUL |  |  |
| MOFECHA | date | NO |  | 1900-12-31 |  |
| MONUMERO | varchar(16) | NO | MUL |  |  |
| MONUEVO | tinyint unsigned | NO |  | 0 |  |
| MODOCINI | varchar(13) | NO |  |  |  |
| MODOCPAGO | varchar(13) | NO |  |  |  |
| MEFECHAPAGO | date | NO |  | 1900-12-31 |  |
| MOFECHAUSO | date | NO |  | 1900-12-31 |  |
| MOTIPO | tinyint unsigned | NO |  | 0 |  |
| MOCICLO | int | NO |  | 0 |  |
| MOSEL | varchar(1) | NO |  |  |  |
| MOFAM | varchar(4) | NO |  |  |  |
| MOOBS | varchar(12) | NO |  |  |  |
| MOFILTRO | varchar(65) | NO |  |  |  |
| MOUNAVEZ | tinyint unsigned | NO |  | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| MOCLIENTE | NO | 1 | MOCLIENTE |
| MONUMERO | NO | 1 | MONUMERO |
| MOSEQ | YES | 1 | MOSEQ |
| PRIMARY | YES | 1 | MOSEQ |

## fmosaicos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| MOSSEQ | int | NO | PRI |  | auto_increment |
| MOSBOOK | varchar(15) | NO | MUL |  |  |
| MOSDASH | varchar(6) | NO | MUL |  |  |
| MOSNUM | tinyint unsigned | NO |  | 0 |  |
| MOSCUBO | int | NO |  | 0 |  |
| MOSTITULO1 | varchar(20) | NO |  |  |  |
| MOSOBJETO | varchar(10) | NO |  |  |  |
| MOSOBJTIPO | varchar(2) | NO |  |  |  |
| MOSOBJSUBTIPO | varchar(2) | NO |  |  |  |
| MOSOBJNUM | tinyint unsigned | NO |  | 0 |  |
| MOSX0 | decimal(18,2) | NO |  | 0.00 |  |
| MOSY0 | decimal(18,2) | NO |  | 0.00 |  |
| MOSWIDTH | decimal(18,2) | NO |  | 0.00 |  |
| MOSHEIGHT | decimal(18,2) | NO |  | 0.00 |  |
| MOSTIPOFILT | varchar(1) | NO |  |  |  |
| MOSFILTRAD1 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD2 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD3 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD4 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD5 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD6 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD7 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD8 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD9 | tinyint unsigned | NO |  | 0 |  |
| MOSSORT | decimal(18,0) | NO |  | 0 |  |
| MOSDIM1 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM2 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM3 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM4 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM5 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM6 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM7 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM8 | tinyint unsigned | NO |  | 0 |  |
| MOSDIM9 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR1 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR2 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR3 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR4 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR5 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR6 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR7 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR8 | tinyint unsigned | NO |  | 0 |  |
| MOSMETR9 | tinyint unsigned | NO |  | 0 |  |
| MOSMETRTIT1 | varchar(15) | NO |  |  |  |
| MOSMETRTIT2 | varchar(15) | NO |  |  |  |
| MOSMETRTIT3 | varchar(15) | NO |  |  |  |
| MOSMETRTIT4 | varchar(15) | NO |  |  |  |
| MOSMETRTIT5 | varchar(15) | NO |  |  |  |
| MOSMETRTIT6 | varchar(15) | NO |  |  |  |
| MOSMETRTIT7 | varchar(15) | NO |  |  |  |
| MOSMETRTIT8 | varchar(15) | NO |  |  |  |
| MOSMETRTIT9 | varchar(15) | NO |  |  |  |
| MOSSEL | int | NO |  | 0 |  |
| MOSCAMPO | tinyint unsigned | NO |  | 0 |  |
| MOSDIMTIT1 | varchar(25) | NO |  |  |  |
| MOSDIMTIT2 | varchar(25) | NO |  |  |  |
| MOSDIMTIT3 | varchar(25) | NO |  |  |  |
| MOSDIMTIT4 | varchar(25) | NO |  |  |  |
| MOSDIMTIT5 | varchar(25) | NO |  |  |  |
| MOSDIMTIT6 | varchar(25) | NO |  |  |  |
| MOSDIMTIT7 | varchar(25) | NO |  |  |  |
| MOSDIMTIT8 | varchar(25) | NO |  |  |  |
| MOSDIMTIT9 | varchar(25) | NO |  |  |  |
| MOSDIMSEL1 | int | NO |  | 0 |  |
| MOSDIMSEL2 | int | NO |  | 0 |  |
| MOSDIMSEL3 | int | NO |  | 0 |  |
| MOSDIMSEL4 | int | NO |  | 0 |  |
| MOSDIMSEL5 | int | NO |  | 0 |  |
| MOSDIMSEL6 | int | NO |  | 0 |  |
| MOSDIMSEL7 | int | NO |  | 0 |  |
| MOSDIMSEL8 | int | NO |  | 0 |  |
| MOSDIMSEL9 | int | NO |  | 0 |  |
| MOSNUMDIM | tinyint unsigned | NO |  | 0 |  |
| MOSNUMMETR | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD10 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD11 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRAD12 | tinyint unsigned | NO |  | 0 |  |
| MOSFILTRO | varchar(30) | NO |  |  |  |
| MOSBWITH | int | NO |  | 0 |  |
| MOSBHEIGHT | int | NO |  | 0 |  |
| MOSFOR1 | varchar(50) | NO |  |  |  |
| MOSFOR2 | varchar(50) | NO |  |  |  |
| MOSFOR3 | varchar(50) | NO |  |  |  |
| MOSFOR4 | varchar(50) | NO |  |  |  |
| MOSFOR5 | varchar(50) | NO |  |  |  |
| MOSFOR6 | varchar(50) | NO |  |  |  |
| MOSGRAFREL | varchar(1) | NO |  |  |  |
| MOSUSER | varchar(8) | NO | MUL |  |  |
| MOSSELONE | int | NO |  | 0 |  |
| MOSFOR7 | varchar(50) | NO |  |  |  |
| MOSFOR8 | varchar(50) | NO |  |  |  |
| MOSFOR9 | varchar(50) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| MOSBOOK | NO | 1 | MOSBOOK |
| MOSDASH | NO | 1 | MOSDASH |
| MOSSEQ | YES | 1 | MOSSEQ |
| MOSUSER | NO | 1 | MOSUSER |
| PRIMARY | YES | 1 | MOSSEQ |

## fnecpro

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| NSEC | int | NO | PRI |  | auto_increment |
| NCOD | varchar(13) | NO | MUL |  |  |
| NCANT | double | NO |  | 0 |  |
| NPEDIDO | decimal(18,2) | NO |  | 0.00 |  |
| NRUTA | varchar(50) | NO | MUL |  |  |
| NSTAK | varchar(49) | NO | MUL |  |  |
| NTERMINAR | date | NO | MUL | 1900-12-31 |  |
| NINICIAR | date | NO | MUL | 1900-12-31 |  |
| NAFABR | decimal(18,0) | NO |  | 0 |  |
| NFAMILIA | varchar(13) | NO |  |  |  |
| NTIPO | tinyint unsigned | NO |  | 0 |  |
| NPRO | varchar(13) | NO |  |  |  |
| NORDEN | int | NO |  | 0 |  |
| NCOLOR | varchar(6) | NO |  |  |  |
| NUSO | varchar(10) | NO |  |  |  |
| NINV | decimal(18,2) | NO |  | 0.00 |  |
| NORDENADO | decimal(18,2) | NO |  | 0.00 |  |
| NMINIMO | decimal(18,2) | NO |  | 0.00 |  |
| NPZAS | double | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| NCOD | NO | 1 | NCOD |
| NINICIAR | NO | 1 | NINICIAR |
| NRUTA | NO | 1 | NRUTA |
| NSEC | YES | 1 | NSEC |
| NSTAK | NO | 1 | NSTAK |
| NTERMINAR | NO | 1 | NTERMINAR |
| PRIMARY | YES | 1 | NSEC |

## fnegados

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| NEGSEQ | int | NO | PRI |  | auto_increment |
| NEGDATE | date | NO |  | 1900-12-31 |  |
| NEGTDA | varchar(6) | NO |  |  |  |
| NEGOBS | varchar(50) | NO |  |  |  |
| NEGISTKACT | int | NO |  | 0 |  |
| NEGALMCANT | int | NO |  | 0 |  |
| NEGIPEDPRV | int | NO |  | 0 |  |
| NEGIMAXIMO | int | NO |  | 0 |  |
| NEGNOMBRE | varchar(50) | NO |  |  |  |
| NEGMAIL | varchar(50) | NO |  |  |  |
| ISEQ | int | NO | MUL | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| NEGSEQ | YES | 1 | NEGSEQ |
| PRIMARY | YES | 1 | NEGSEQ |

## fnotif

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| NOTSEQ | int | NO | PRI |  | auto_increment |
| NOTDATE | datetime | NO |  | 1900-12-31 00:00:00 |  |
| NOTREFER | varchar(25) | NO | MUL |  |  |
| NOTKEY | int | NO |  | 0 |  |
| NOTLEIDO | tinyint unsigned | NO | MUL | 0 |  |
| NOTTEXT | varchar(140) | NO |  |  |  |
| NOTTIPOKEY | varchar(1) | NO |  |  |  |
| NOTVECES | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| NOTLEIDO | NO | 1 | NOTLEIDO |
| NOTREFER | NO | 1 | NOTREFER |
| NOTSEQ | YES | 1 | NOTSEQ |
| PRIMARY | YES | 1 | NOTSEQ |

## fnumeros

- Engine: InnoDB
- Estimated rows: 2799
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| NUMSEQ | int | NO | PRI |  | auto_increment |
| NUMKEY | varchar(7) | NO | MUL |  |  |
| NUMNUM | decimal(18,0) | NO |  | 0 |  |
| NUMLAST | int | NO |  | 0 |  |
| NUMAPROBFOLIOS | varchar(15) | NO |  |  |  |
| NUMNUMFIN | decimal(18,0) | NO |  | 0 |  |
| NUMSATCHK | decimal(18,0) | NO |  | 0 |  |
| NUMSATINI | decimal(18,0) | NO |  | 0 |  |
| NUMDATE | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| NUMKEY | NO | 1 | NUMKEY |
| NUMSEQ | YES | 1 | NUMSEQ |
| PRIMARY | YES | 1 | NUMSEQ |

## fofertas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| OFESEQ | int | NO | PRI |  | auto_increment |
| OFETIPO | int | NO |  | 0 |  |
| OFENOM | varchar(40) | NO |  |  |  |
| OFEGRUTDS | varchar(4) | NO |  |  |  |
| OFEDEL | date | NO |  | 1900-12-31 |  |
| OFEAL | date | NO |  | 1900-12-31 |  |
| OFEPRIORIDAD | int | NO | MUL | 0 |  |
| OFECONDICION | varchar(180) | NO |  |  |  |
| OFEMESA | varchar(10) | NO |  |  |  |
| OFEENTRADA | tinyint unsigned | NO |  | 0 |  |
| OFESALIDA | tinyint unsigned | NO |  | 0 |  |
| OFEACTIVA | tinyint unsigned | NO |  | 0 |  |
| OFEDESCR | varchar(1000) | NO |  |  |  |
| OFEREPLACE | tinyint unsigned | NO |  | 0 |  |
| OFESCOPE | varchar(0) | NO |  |  |  |
| OFEPROMO | int | NO |  | 0 |  |
| OFEMESA2 | varchar(10) | NO |  |  |  |
| OFECOD | varchar(6) | NO | MUL |  |  |
| OFEE01 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE02 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE03 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE04 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE05 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE06 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE07 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE08 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE11 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE12 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE13 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE14 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE15 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE16 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE17 | decimal(18,2) | NO |  | 0.00 |  |
| OFEE18 | decimal(18,2) | NO |  | 0.00 |  |
| OFES01 | varchar(13) | NO |  |  |  |
| OFES02 | varchar(10) | NO |  |  |  |
| OFES03 | varchar(10) | NO |  |  |  |
| OFES04 | varchar(10) | NO |  |  |  |
| OFES05 | varchar(10) | NO |  |  |  |
| OFES06 | varchar(10) | NO |  |  |  |
| OFES07 | varchar(65) | NO |  |  |  |
| OFES08 | varchar(35) | NO |  |  |  |
| OFECUPON | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| OFECOD | NO | 1 | OFECOD |
| OFEPRIORIDAD | NO | 1 | OFEPRIORIDAD |
| OFESEQ | YES | 1 | OFESEQ |
| PRIMARY | YES | 1 | OFESEQ |

## fpedimento

- Engine: InnoDB
- Estimated rows: 29057
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PMTOSEQ | int | NO | PRI |  | auto_increment |
| PMTODOC | varchar(13) | NO | MUL |  |  |
| PMTFECHA | date | NO |  | 1900-12-31 |  |
| PMTNUM | varchar(15) | NO | MUL |  |  |
| PMTADUANA | varchar(25) | NO |  |  |  |
| PMTAGENTE1 | decimal(18,2) | NO |  | 0.00 |  |
| PMTFLETE1 | decimal(18,2) | NO |  | 0.00 |  |
| PMTAGENTE2 | decimal(18,2) | NO |  | 0.00 |  |
| PMTFLETE2 | decimal(18,2) | NO |  | 0.00 |  |
| PMTDTA | decimal(18,2) | NO |  | 0.00 |  |
| PMTOTROS | decimal(18,2) | NO |  | 0.00 |  |
| PMTPRVAGENTE1 | varchar(6) | NO |  |  |  |
| PMTIVAFLETE1 | decimal(18,2) | NO |  | 0.00 |  |
| PMTIVAFLETE2 | decimal(18,2) | NO |  | 0.00 |  |
| PMTIVAPRODUCTO | decimal(18,2) | NO |  | 0.00 |  |
| PMTPASIVOS | decimal(18,2) | NO |  | 0.00 |  |
| PMTIEPS | decimal(18,2) | NO |  | 0.00 |  |
| PMTINCREMENTABLES | decimal(18,2) | NO |  | 0.00 |  |
| PMTPRVAGENTE2 | varchar(6) | NO |  |  |  |
| PMTPRVFLETE1 | varchar(6) | NO |  |  |  |
| PMTPRVFLETE2 | varchar(6) | NO |  |  |  |
| PMTPRVDTA | varchar(6) | NO |  |  |  |
| PMTPRVOTROS | varchar(6) | NO |  |  |  |
| PMTPRVIVA1XXX | varchar(6) | NO |  |  |  |
| PMTPRVIVA2XXX | varchar(6) | NO |  |  |  |
| PMTPRVIVAPRODUCTO | varchar(6) | NO |  |  |  |
| PMTPRVIEPS | varchar(6) | NO |  |  |  |
| PMTIVAAGENTE1 | decimal(18,2) | NO |  | 0.00 |  |
| PMTIVAAGENTE2 | decimal(18,2) | NO |  | 0.00 |  |
| PMTIVADTA | decimal(18,2) | NO |  | 0.00 |  |
| PMTIVAOTROS | decimal(18,2) | NO |  | 0.00 |  |
| PMTLOTENUM | varchar(15) | NO |  |  |  |
| PMTTEXTO1 | varchar(35) | NO |  |  |  |
| PMTTEXTO2 | varchar(35) | NO |  |  |  |
| PMTTEXTO3 | varchar(35) | NO |  |  |  |
| PMTTEXTO4 | varchar(35) | NO |  |  |  |
| PMTTEXTO5 | varchar(35) | NO |  |  |  |
| PMTTEXTO6 | varchar(35) | NO |  |  |  |
| PMTRECEPCION | varchar(11) | NO |  |  |  |
| PMTTEXTO7 | varchar(10) | NO |  |  |  |
| PMTTEXTO8 | varchar(5) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PMTNUM | NO | 1 | PMTNUM |
| PMTODOC | NO | 1 | PMTODOC |
| PMTOSEQ | YES | 1 | PMTOSEQ |
| PRIMARY | YES | 1 | PMTOSEQ |

## fpenc

- Engine: InnoDB
- Estimated rows: 200712
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PESEQ | int | NO | PRI |  | auto_increment |
| PENUM | varchar(9) | NO | MUL |  |  |
| PECANT | decimal(18,2) | NO |  | 0.00 |  |
| PEFECHA | date | NO | MUL | 1900-12-31 |  |
| PEDESDE | date | NO | MUL | 1900-12-31 |  |
| PECLINO | varchar(16) | NO | MUL |  |  |
| PDESC1 | decimal(18,2) | NO |  | 0.00 |  |
| PDESC2 | decimal(18,2) | NO |  | 0.00 |  |
| PEBRUTO | decimal(18,2) | NO |  | 0.00 |  |
| PEACTA | decimal(18,2) | NO |  | 0.00 |  |
| PEPAR0 | varchar(6) | NO |  |  |  |
| PEPAR1 | varchar(6) | NO | MUL |  |  |
| PEPARA | varchar(6) | NO | MUL |  |  |
| PESPEDIDO | decimal(18,0) | NO | MUL | 0 |  |
| PECOMI | decimal(18,2) | NO |  | 0.00 |  |
| PEPORCIVA | decimal(18,0) | NO |  | 0 |  |
| PEDESC | decimal(18,2) | NO |  | 0.00 |  |
| PEIVA | decimal(18,2) | NO |  | 0.00 |  |
| PESTATUS | varchar(6) | NO |  |  |  |
| PEVENCE | date | NO | MUL | 1900-12-31 |  |
| PEPAR2 | varchar(4) | NO |  |  |  |
| PEPAR3 | varchar(4) | NO |  |  |  |
| PEPAR4 | varchar(4) | NO |  |  |  |
| PEPAR5 | varchar(4) | NO |  |  |  |
| PEPAR6 | varchar(4) | NO | MUL |  |  |
| PEPAR7 | varchar(4) | NO |  |  |  |
| PEPAR8 | varchar(7) | NO | MUL |  |  |
| PEPAR9 | varchar(4) | NO |  |  |  |
| PENUMELLOS | varchar(36) | NO | MUL |  |  |
| PESURT | decimal(18,2) | NO |  | 0.00 |  |
| PDESC3 | decimal(18,2) | NO |  | 0.00 |  |
| PEPLAZO | varchar(3) | NO |  |  |  |
| PENOPARC | tinyint unsigned | NO |  | 0 |  |
| PEDEPTO | varchar(11) | NO |  |  |  |
| PEPRIMTIK | double | NO |  | 0 |  |
| PEFACTOR | double | NO |  | 0 |  |
| PETIPOC | decimal(18,8) | NO |  | 0.00000000 |  |
| PEMONEDA | tinyint unsigned | NO |  | 0 |  |
| PEINICIAL | tinyint unsigned | NO |  | 0 |  |
| PEFLETE | decimal(18,2) | NO |  | 0.00 |  |
| PESEGURO | decimal(18,2) | NO |  | 0.00 |  |
| PEOTRO | decimal(18,2) | NO |  | 0.00 |  |
| PEOTROTXT | varchar(10) | NO | MUL |  |  |
| PEPZAS | decimal(18,3) | NO |  | 0.000 |  |
| PEPZASSURT | decimal(18,3) | NO |  | 0.000 |  |
| PEALMACEN | varchar(6) | NO |  |  |  |
| PEDATE2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PEPORCMINSUR | tinyint unsigned | NO |  | 0 |  |
| PENUMASINACION | int | NO |  | 0 |  |
| PEUSRALTA | int | NO |  | 0 |  |
| PEUSRAUT | int | NO |  | 0 |  |
| PEMAQUILERO | varchar(6) | NO |  |  |  |
| PESUCURSAL | decimal(18,0) | NO |  | 0 |  |
| PEMES | tinyint unsigned | NO |  | 0 |  |
| PEYEAR | int | NO |  | 0 |  |
| PEDATE3 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PEPZASIGN | decimal(18,3) | NO |  | 0.000 |  |
| PEOBS | varchar(23) | NO |  |  |  |
| PECAMBIOS | int | NO |  | 0 |  |
| PEIEPES | decimal(18,2) | NO |  | 0.00 |  |
| PEFECHAEXPORT | date | NO |  | 1900-12-31 |  |
| PEFECHAEMPAQUE | date | NO |  | 1900-12-31 |  |
| PEMULTICIA | tinyint unsigned | NO |  | 0 |  |
| PEHIJOS | int | NO |  | 0 |  |
| PEDATE4 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PEPUNTOSFIJOS | decimal(18,0) | NO |  | 0 |  |
| PEPUNTOSPORC | int | NO |  | 0 |  |
| PEFLUJO | tinyint unsigned | NO |  | 0 |  |
| PECHAT | varchar(10000) | NO |  |  |  |
| PEANTICIPO | varchar(13) | NO |  |  |  |
| PESAF | decimal(18,2) | NO |  | 0.00 |  |
| PECUPON | decimal(18,2) | NO |  | 0.00 |  |
| PEPUNTOS | decimal(18,2) | NO |  | 0.00 |  |
| PESTATUSTVP | varchar(3) | NO | MUL |  |  |
| PETIPOENTR | varchar(1) | NO |  |  |  |
| PEMOMPAGO | varchar(1) | NO |  |  |  |
| PEPORDESIGNAR | tinyint unsigned | NO |  | 0 |  |
| PEPORASIGNAR | tinyint unsigned | NO |  | 0 |  |
| PEENTREGA | varchar(3) | NO | MUL |  |  |
| PETALON | varchar(23) | NO |  |  |  |
| PECANAL | varchar(3) | NO | MUL |  |  |
| PECARRITO | varchar(36) | NO | MUL |  |  |
| PEFORMAPAGO | varchar(2) | NO |  |  |  |
| PECITA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PEDATE5 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PESGSPK | int | NO |  | 0 |  |
| PEAPARTAWEB | tinyint unsigned | NO |  | 0 |  |
| PEPAGADO | tinyint unsigned | NO |  | 0 |  |
| PEFECHAPAGO | datetime | NO |  | 1900-12-31 00:00:00 |  |
| PEDATECANCELED | date | NO |  | 1900-12-31 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| PECANAL | NO | 1 | PECANAL |
| PECARRITO | NO | 1 | PECARRITO |
| PECLINO | NO | 1 | PECLINO |
| PEDESDE | NO | 1 | PEDESDE |
| PEENTREGA | NO | 1 | PEENTREGA |
| PEFECHA | NO | 1 | PEFECHA |
| PENUM | NO | 1 | PENUM |
| PENUMELLOS | NO | 1 | PENUMELLOS |
| PEOTROTXT | NO | 1 | PEOTROTXT |
| PEPAR1 | NO | 1 | PEPAR1 |
| PEPAR6 | NO | 1 | PEPAR6 |
| PEPAR8 | NO | 1 | PEPAR8 |
| PEPARA | NO | 1 | PEPARA |
| PESEQ | YES | 1 | PESEQ |
| PESPEDIDO | NO | 1 | PESPEDIDO |
| PESTATUSTVP | NO | 1 | PESTATUSTVP |
| PEVENCE | NO | 1 | PEVENCE |
| PRIMARY | YES | 1 | PESEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fplin

- Engine: InnoDB
- Estimated rows: 761389
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PLSEQ | int | NO | PRI |  | auto_increment |
| PLTIPMV | varchar(2) | NO | MUL |  |  |
| PLCANT | decimal(18,3) | NO |  | 0.000 |  |
| PLPRECI | decimal(18,5) | NO |  | 0.00000 |  |
| PLSURT | decimal(18,3) | NO |  | 0.000 |  |
| PLASIGNADO | decimal(18,3) | NO |  | 0.000 |  |
| PLDESC | decimal(18,2) | NO |  | 0.00 |  |
| PLMAQUILA | decimal(18,2) | NO |  | 0.00 |  |
| PLASIGNPZAS | varchar(1000) | NO |  |  |  |
| PLSUC | int | NO |  | 0 |  |
| PLPRPUB | decimal(18,2) | NO |  | 0.00 |  |
| PLPROF | decimal(18,2) | NO |  | 0.00 |  |
| PLSKU | varchar(18) | NO |  |  |  |
| PLCOLOR | varchar(20) | NO |  |  |  |
| PLTALLA | varchar(10) | NO |  |  |  |
| PLCLASE | varchar(3) | NO |  |  |  |
| PLETIQ | varchar(8) | NO |  |  |  |
| PLTIQX1 | varchar(4) | NO |  |  |  |
| PLTIQX2 | varchar(255) | NO |  |  |  |
| PLNUMASIGN | int | NO | MUL | 0 |  |
| PLFACTOR | double | NO |  | 0 |  |
| PLUNIDAD | varchar(3) | NO |  |  |  |
| PLMONEDA | tinyint unsigned | NO |  | 0 |  |
| PLAGENTE | varchar(3) | NO |  |  |  |
| PLDEMOSTRA | varchar(3) | NO |  |  |  |
| PLTIEMPO | tinyint unsigned | NO |  | 0 |  |
| PLPREPACK | varchar(9) | NO |  |  |  |
| PLFECHA | date | NO |  | 1900-12-31 |  |
| PLEDIPRE | decimal(18,5) | NO |  | 0.00000 |  |
| PLOTROS | varchar(13) | NO |  |  |  |
| PLASIGNWMS | decimal(18,2) | NO |  | 0.00 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |
| PESEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| PESEQ | NO | 1 | PESEQ |
| PLNUMASIGN | NO | 1 | PLNUMASIGN |
| PLSEQ | YES | 1 | PLSEQ |
| PLTIPMV | NO | 1 | PLTIPMV |
| PRIMARY | YES | 1 | PLSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |

## fpointers

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| POINSEQ | int | NO | PRI |  | auto_increment |
| POINCIA | tinyint unsigned | NO |  | 0 |  |
| POINFAXSEQ | int | NO |  | 0 |  |
| POINSTK | decimal(18,3) | NO |  | 0.000 |  |
| POINCOSTO | decimal(18,4) | NO |  | 0.0000 |  |
| POINISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| POINISEQ | NO | 1 | POINISEQ |
| POINSEQ | YES | 1 | POINSEQ |
| PRIMARY | YES | 1 | POINSEQ |

## fpoliza

- Engine: InnoDB
- Estimated rows: 426356
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| POSEQ | int | NO | PRI |  | auto_increment |
| PONUM | varchar(11) | NO | MUL |  |  |
| PODESCR | varchar(90) | NO |  |  |  |
| POFECHA | date | NO | MUL | 1900-12-31 |  |
| POAPLICADA | tinyint unsigned | NO |  | 0 |  |
| POBENEF | varchar(85) | NO |  |  |  |
| POCHEQUE | varchar(13) | NO | MUL |  |  |
| POLETRA | varchar(111) | NO |  |  |  |
| POUSR | int | NO |  | 0 |  |
| POEST | tinyint unsigned | NO |  | 0 |  |
| POREPORTE | varchar(15) | NO |  |  |  |
| POFAMILIA | varchar(20) | NO |  |  |  |
| POAUDIT | datetime | NO |  | 1900-12-31 00:00:00 |  |
| POPOSTFECHA | date | NO |  | 1900-12-31 |  |
| POPAR1 | varchar(4) | NO |  |  |  |
| POPAR2 | varchar(4) | NO |  |  |  |
| POCAMBIO | int | NO |  | 0 |  |
| POFUSA | date | NO |  | 1900-12-31 |  |
| POCIA | tinyint unsigned | NO |  | 0 |  |
| POORIGEN | varchar(10) | NO |  |  |  |
| POESTRANSFER | tinyint unsigned | NO |  | 0 |  |
| POMES | tinyint unsigned | NO |  | 0 |  |
| POYEAR | int | NO |  | 0 |  |
| PORFC | varchar(13) | NO |  |  |  |
| POSATBCO | varchar(3) | NO |  |  |  |
| POSATCTA | varchar(18) | NO |  |  |  |
| POSATBCOEXT | varchar(60) | NO |  |  |  |
| POAPLICANDO | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| POCHEQUE | NO | 1 | POCHEQUE |
| POFECHA | NO | 1 | POFECHA |
| PONUM | NO | 1 | PONUM |
| POSEQ | YES | 1 | POSEQ |
| PRIMARY | YES | 1 | POSEQ |

## fportal

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PORTSEQ | int | NO | PRI |  | auto_increment |
| PORTTIPO | varchar(6) | NO | MUL |  |  |
| PORTKEY | varchar(11) | NO | MUL |  |  |
| PORTFECHA | date | NO | MUL | 1900-12-31 |  |
| PORTDATA | varchar(1000) | NO |  |  |  |
| PORTPRV | varchar(6) | NO | MUL |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PORTFECHA | NO | 1 | PORTFECHA |
| PORTKEY | NO | 1 | PORTKEY |
| PORTPRV | NO | 1 | PORTPRV |
| PORTSEQ | YES | 1 | PORTSEQ |
| PORTTIPO | NO | 1 | PORTTIPO |
| PRIMARY | YES | 1 | PORTSEQ |

## fpostal

- Engine: InnoDB
- Estimated rows: 145373
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| POSSEQ | int | NO | PRI |  | auto_increment |
| POSCODEDO | varchar(3) | NO |  |  |  |
| POSCODCD | varchar(2) | NO |  |  |  |
| POCCODCLASE | varchar(2) | NO |  |  |  |
| POSCODMUNIC | varchar(3) | NO |  |  |  |
| POSDESCRCOL | varchar(80) | NO | MUL |  |  |
| POSREPARTO | varchar(5) | NO |  |  |  |
| POSASENT | varchar(2) | NO |  |  |  |
| POSCP | varchar(5) | NO | MUL |  |  |
| POSEDO | varchar(20) | NO |  |  |  |
| POSEDO2 | varchar(6) | NO |  |  |  |
| POSCD | varchar(60) | NO |  |  |  |
| POSMUNIC | varchar(80) | NO | MUL |  |  |
| POSVERSION | tinyint unsigned | NO |  | 0 |  |
| POSTIPOASEN | varchar(20) | NO |  |  |  |
| POSTIPOZONA | varchar(10) | NO |  |  |  |
| POSLADA | varchar(3) | NO |  |  |  |
| POSIDESTAFETA | varchar(2) | NO |  |  |  |
| POSCODCOL | varchar(4) | NO |  |  |  |
| POSCLIMA1 | varchar(4) | NO |  |  |  |
| POSCLIMA12 | varchar(12) | NO |  |  |  |
| POSLONGITUD | double | NO |  | 0 |  |
| POSLATITUD | double | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| POSCP | NO | 1 | POSCP |
| POSDESCRCOL | NO | 1 | POSDESCRCOL |
| POSMUNIC | NO | 1 | POSMUNIC |
| POSSEQ | YES | 1 | POSSEQ |
| PRIMARY | YES | 1 | POSSEQ |

## fprecompra

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PRESEQ | int | NO | PRI |  | auto_increment |
| PRECANT | int | NO |  | 0 |  |
| PRECOSTO | decimal(18,2) | NO |  | 0.00 |  |
| PRETIPO | varchar(10) | NO |  |  |  |
| PREFECHA | date | NO |  | 1900-12-31 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| PRESEQ | YES | 1 | PRESEQ |
| PRIMARY | YES | 1 | PRESEQ |

## fpromos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PROMSEQ | int | NO | PRI |  | auto_increment |
| PROMCOD | varchar(3) | NO | MUL |  |  |
| PROMDESCR | varchar(20) | NO |  |  |  |
| PROMTM | varchar(2) | NO |  |  |  |
| PROMBANCO | varchar(12) | NO |  |  |  |
| PROMCTABCO | varchar(16) | NO |  |  |  |
| PROMPAGOS | int | NO |  | 0 |  |
| PROMDIFER | tinyint unsigned | NO |  | 0 |  |
| PROMPLAN | tinyint unsigned | NO |  | 0 |  |
| PROMCOM1 | decimal(18,2) | NO |  | 0.00 |  |
| PROMCTACOM1 | varchar(16) | NO |  |  |  |
| PROMCOM2 | decimal(18,2) | NO |  | 0.00 |  |
| PROMCTACOM2 | varchar(16) | NO |  |  |  |
| PROMTIPO | tinyint unsigned | NO |  | 0 |  |
| PROMAGRUPA | tinyint unsigned | NO |  | 0 |  |
| PROMDEL | date | NO |  | 1900-12-31 |  |
| PROMAL | date | NO |  | 1900-12-31 |  |
| PROMFP | tinyint unsigned | NO |  | 0 |  |
| PROMAGRPROM | tinyint unsigned | NO |  | 0 |  |
| PROMAGRCTA | tinyint unsigned | NO |  | 0 |  |
| PROMMINIMO | int | NO |  | 0 |  |
| PROMPORCIVA | tinyint unsigned | NO |  | 0 |  |
| PROMCTAIVA | varchar(16) | NO |  |  |  |
| PROMRFCBCO | varchar(13) | NO |  |  |  |
| PROMMONSAT | varchar(3) | NO |  |  |  |
| PROMSATFORMPAG | varchar(3) | NO |  |  |  |
| PROMCTADESTINO | varchar(20) | NO |  |  |  |
| PROMMETODO | tinyint unsigned | NO |  | 0 |  |
| PROMNOCP | tinyint unsigned | NO |  | 0 |  |
| PROMDEFAULT | tinyint unsigned | NO | MUL | 0 |  |
| PROMUDPC | tinyint unsigned | NO |  | 0 |  |
| PROMPAGOSFACT | double | NO |  | 0 |  |
| PROMAGRCOM | tinyint unsigned | NO |  | 0 |  |
| PROMOFETIPO | varchar(3) | NO |  |  |  |
| PROMCTABCO2 | varchar(16) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | PROMSEQ |
| PROMCOD | NO | 1 | PROMCOD |
| PROMDEFAULT | NO | 1 | PROMDEFAULT |
| PROMSEQ | YES | 1 | PROMSEQ |

## fpruebas

- Engine: InnoDB
- Estimated rows: 5535
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PRSEQ | int | NO | PRI |  | auto_increment |
| PRNOMBRE1 | varchar(35) | NO |  |  |  |
| PRMIN1 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX1 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE2 | varchar(35) | NO |  |  |  |
| PRMIN2 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX2 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE3 | varchar(35) | NO |  |  |  |
| PRMIN3 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX3 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE4 | varchar(35) | NO |  |  |  |
| PRMIN4 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX4 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE5 | varchar(35) | NO |  |  |  |
| PRMIN5 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX5 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE6 | varchar(35) | NO |  |  |  |
| PRMIN6 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX6 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE7 | varchar(35) | NO |  |  |  |
| PRMIN7 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX7 | decimal(18,4) | NO |  | 0.0000 |  |
| PRDATO1 | varchar(35) | NO |  |  |  |
| PRDATO2 | varchar(35) | NO |  |  |  |
| PRDATO3 | varchar(35) | NO |  |  |  |
| PRDATO4 | varchar(35) | NO |  |  |  |
| PRNOMBRE8 | varchar(35) | NO |  |  |  |
| PRMIN8 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX8 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE9 | varchar(35) | NO |  |  |  |
| PRMIN9 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX9 | decimal(18,4) | NO |  | 0.0000 |  |
| PRNOMBRE10 | varchar(35) | NO |  |  |  |
| PRMIN10 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX10 | decimal(18,4) | NO |  | 0.0000 |  |
| PRDATO5 | varchar(35) | NO |  |  |  |
| PRUKEY | varchar(19) | NO | MUL |  |  |
| PRUPRV | varchar(6) | NO |  |  |  |
| PRUM1 | varchar(6) | NO |  |  |  |
| PRUM2 | varchar(6) | NO |  |  |  |
| PRUM3 | varchar(6) | NO |  |  |  |
| PRUM4 | varchar(6) | NO |  |  |  |
| PRUM5 | varchar(6) | NO |  |  |  |
| PRUM6 | varchar(6) | NO |  |  |  |
| PRUM7 | varchar(6) | NO |  |  |  |
| PRUM8 | varchar(6) | NO |  |  |  |
| PRUM9 | varchar(6) | NO |  |  |  |
| PRUM10 | varchar(6) | NO |  |  |  |
| PRNOMBRE11 | varchar(35) | NO |  |  |  |
| PRMIN11 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX11 | decimal(18,4) | NO |  | 0.0000 |  |
| PRUM11 | varchar(6) | NO |  |  |  |
| PRNOMBRE12 | varchar(35) | NO |  |  |  |
| PRMIN12 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX12 | decimal(18,4) | NO |  | 0.0000 |  |
| PRUM12 | varchar(6) | NO |  |  |  |
| PRNOMBRE13 | varchar(35) | NO |  |  |  |
| PRMIN13 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX13 | decimal(18,4) | NO |  | 0.0000 |  |
| PRUM13 | varchar(6) | NO |  |  |  |
| PRNOMBRE14 | varchar(35) | NO |  |  |  |
| PRMIN14 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX14 | decimal(18,4) | NO |  | 0.0000 |  |
| PRUM14 | varchar(6) | NO |  |  |  |
| PRNOMBRE15 | varchar(35) | NO |  |  |  |
| PRMIN15 | decimal(18,4) | NO |  | 0.0000 |  |
| PRMAX15 | decimal(18,4) | NO |  | 0.0000 |  |
| PRUM15 | varchar(6) | NO |  |  |  |
| PROBS1 | varchar(35) | NO |  |  |  |
| PROBS2 | varchar(35) | NO |  |  |  |
| PROBS3 | varchar(35) | NO |  |  |  |
| PROBS4 | varchar(35) | NO |  |  |  |
| PROBS5 | varchar(35) | NO |  |  |  |
| PROBS6 | varchar(35) | NO |  |  |  |
| PROBS7 | varchar(35) | NO |  |  |  |
| PROBS8 | varchar(35) | NO |  |  |  |
| PROBS9 | varchar(35) | NO |  |  |  |
| PROBS10 | varchar(35) | NO |  |  |  |
| PROBS11 | varchar(35) | NO |  |  |  |
| PROBS12 | varchar(35) | NO |  |  |  |
| PROBS13 | varchar(35) | NO |  |  |  |
| PROBS14 | varchar(35) | NO |  |  |  |
| PROBS15 | varchar(35) | NO |  |  |  |
| PRMETODO1 | varchar(15) | NO |  |  |  |
| PRMETODO2 | varchar(15) | NO |  |  |  |
| PRMETODO3 | varchar(15) | NO |  |  |  |
| PRMETODO4 | varchar(15) | NO |  |  |  |
| PRMETODO5 | varchar(15) | NO |  |  |  |
| PRMETODO6 | varchar(15) | NO |  |  |  |
| PRMETODO7 | varchar(15) | NO |  |  |  |
| PRMETODO8 | varchar(15) | NO |  |  |  |
| PRMETODO9 | varchar(15) | NO |  |  |  |
| PRMETODO10 | varchar(15) | NO |  |  |  |
| PRMETODO11 | varchar(15) | NO |  |  |  |
| PRMETODO12 | varchar(15) | NO |  |  |  |
| PRMETODO13 | varchar(15) | NO |  |  |  |
| PRMETODO14 | varchar(15) | NO |  |  |  |
| PRMETODO15 | varchar(15) | NO |  |  |  |
| PRPRIORIDAD1 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD2 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD3 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD4 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD5 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD6 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD7 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD8 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD9 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD10 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD11 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD12 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD13 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD14 | varchar(8) | NO |  |  |  |
| PRPRIORIDAD15 | varchar(8) | NO |  |  |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | PRSEQ |
| PRSEQ | YES | 1 | PRSEQ |
| PRUKEY | NO | 1 | PRUKEY |

## fprv

- Engine: InnoDB
- Estimated rows: 7619
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PRVSEQ | int | NO | PRI |  | auto_increment |
| PRVCOD | varchar(6) | NO | MUL |  |  |
| PRVNOM | varchar(80) | NO | MUL |  |  |
| PRVDIR | varchar(45) | NO |  |  |  |
| PRVCD | varchar(30) | NO |  |  |  |
| PRVEDO | varchar(30) | NO |  |  |  |
| PRVTEL | varchar(15) | NO |  |  |  |
| PRVCONT | varchar(30) | NO |  |  |  |
| PRVLISTA | decimal(18,0) | NO |  | 0 |  |
| PRVCREDIT | decimal(18,0) | NO |  | 0 |  |
| PRVDESC1 | decimal(18,2) | NO |  | 0.00 |  |
| PRVDESC2 | decimal(18,2) | NO |  | 0.00 |  |
| PRVPLAZO | decimal(18,0) | NO |  | 0 |  |
| PRVDIREV | varchar(9) | NO |  |  |  |
| PRVDIPAGO | varchar(9) | NO |  |  |  |
| PRVSANT | decimal(18,2) | NO |  | 0.00 |  |
| PRVSACT | decimal(18,2) | NO |  | 0.00 |  |
| PRVTSACT | decimal(18,2) | NO |  | 0.00 |  |
| PRVTSANT | decimal(18,2) | NO |  | 0.00 |  |
| PRVPLAZOR | decimal(18,0) | NO |  | 0 |  |
| PRVPAR1 | varchar(5) | NO | MUL |  |  |
| PRVPAR2 | varchar(4) | NO |  |  |  |
| PRVPAR3 | varchar(4) | NO |  |  |  |
| PRVPAR4 | varchar(4) | NO |  |  |  |
| PRVPAR5 | varchar(4) | NO |  |  |  |
| PRVPAR6 | varchar(4) | NO |  |  |  |
| PRVPAR7 | varchar(4) | NO |  |  |  |
| PRVPAR8 | varchar(4) | NO |  |  |  |
| PRVPAR9 | varchar(4) | NO |  |  |  |
| PRVTEMP | varchar(0) | NO |  |  |  |
| PRVTEMP2 | varchar(0) | NO |  |  |  |
| PRVULTCOM | date | NO |  | 1900-12-31 |  |
| PRVULTPAG | date | NO |  | 1900-12-31 |  |
| PRVCOLONIA | varchar(35) | NO |  |  |  |
| PRVFAX | varchar(15) | NO |  |  |  |
| PRVCP | varchar(7) | NO |  |  |  |
| PRVRFC | varchar(15) | NO | MUL |  |  |
| PRVCTA | varchar(16) | NO |  |  |  |
| PRVMONEDA | tinyint unsigned | NO |  | 0 |  |
| PRVACUMULADO | decimal(18,2) | NO |  | 0.00 |  |
| PRVTIPO | tinyint unsigned | NO |  | 0 |  |
| PRVTEL2 | varchar(20) | NO |  |  |  |
| PRVTEL3 | varchar(20) | NO |  |  |  |
| PRVOBS | varchar(127) | NO |  |  |  |
| PRVTRAB1 | decimal(18,2) | NO |  | 0.00 |  |
| PRVTRAB2 | decimal(18,2) | NO |  | 0.00 |  |
| PRVTRAB3 | int | NO |  | 0 |  |
| PRVTRAB4 | int | NO |  | 0 |  |
| PRVTRAB5 | int | NO |  | 0 |  |
| PRVTRAB6 | int | NO |  | 0 |  |
| PRVTRAB7 | int | NO |  | 0 |  |
| PRVTRAB0 | int | NO |  | 0 |  |
| PRVCURP | varchar(20) | NO |  |  |  |
| PRVEMAIL | varchar(254) | NO |  |  |  |
| PRVEVENTOS | varchar(1) | NO |  |  |  |
| PRVVARIOS1 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS2 | decimal(18,2) | NO |  | 0.00 |  |
| PRVBMXID | tinyint unsigned | NO |  | 0 |  |
| PRVBMXSUC | varchar(4) | NO |  |  |  |
| PRVBMXCTABANCO | varchar(20) | NO |  |  |  |
| PRVBMXEDO | varchar(2) | NO |  |  |  |
| PRVBMXCD | varchar(4) | NO |  |  |  |
| PRVBMXBANCO | varchar(5) | NO |  |  |  |
| PRVBAJA | date | NO |  | 1900-12-31 |  |
| PRVVARIOS3 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS4 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS5 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS6 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS7 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS8 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS9 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS10 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS11 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS12 | decimal(18,2) | NO |  | 0.00 |  |
| PRVTIPOIVA | tinyint unsigned | NO |  | 0 |  |
| PRVRETISR | decimal(18,4) | NO |  | 0.0000 |  |
| PRVRETIVA | decimal(18,4) | NO |  | 0.0000 |  |
| PRVFECHACAMBIO | date | NO |  | 1900-12-31 |  |
| PRVAPLICAR | varchar(6) | NO |  |  |  |
| PRVALTA | date | NO |  | 1900-12-31 |  |
| PRVPASWORD | varchar(8) | NO | MUL |  |  |
| PRVREFCIE | varchar(20) | NO |  |  |  |
| PRVTIEMPO | int | NO |  | 0 |  |
| PRVTOLERANCIA | decimal(18,0) | NO |  | 0 |  |
| PRVTIPTER | varchar(2) | NO |  |  |  |
| PRVTIPOOPER | varchar(2) | NO |  |  |  |
| PRVCATPAIS | varchar(2) | NO |  |  |  |
| PRVMULTICIA | tinyint unsigned | NO |  | 0 |  |
| PRVPAIS | varchar(3) | NO |  |  |  |
| PRVFRECCOM | int | NO |  | 0 |  |
| PRVINTERCIA | tinyint unsigned | NO |  | 0 |  |
| PRVSATBCO | varchar(3) | NO |  |  |  |
| PRVICOD | varchar(13) | NO |  |  |  |
| PRVGENPRES | tinyint unsigned | NO |  | 0 |  |
| PRVTAXID | varchar(30) | NO |  |  |  |
| PRVEXTR | tinyint unsigned | NO |  | 0 |  |
| PRVSATBCOEXT | varchar(60) | NO |  |  |  |
| PRVDNC1 | decimal(18,4) | NO |  | 0.0000 |  |
| PRVDNC2 | decimal(18,4) | NO |  | 0.0000 |  |
| PRVCIECONCEPT | varchar(30) | NO |  |  |  |
| PRVCIECONV | varchar(7) | NO |  |  |  |
| PRVCIEREFER | varchar(20) | NO |  |  |  |
| PRVSINTIMBRE | tinyint unsigned | NO |  | 0 |  |
| PRVBMXBENEF | varchar(30) | NO |  |  |  |
| PRVVARIOS13 | decimal(18,0) | NO |  | 0 |  |
| PRVVARIOS14 | decimal(18,2) | NO |  | 0.00 |  |
| PRVVARIOS15 | decimal(18,2) | NO |  | 0.00 |  |
| PRVEXPRESS | tinyint unsigned | NO |  | 0 |  |
| PRVREGIMEN | varchar(3) | NO |  |  |  |
| PRVUSO | varchar(3) | NO |  |  |  |
| PRVMETPAG | varchar(3) | NO |  |  |  |
| PRVVARPED | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | PRVSEQ |
| PRVCOD | NO | 1 | PRVCOD |
| PRVNOM | NO | 1 | PRVNOM |
| PRVPAR1 | NO | 1 | PRVPAR1 |
| PRVPASWORD | NO | 1 | PRVPASWORD |
| PRVRFC | NO | 1 | PRVRFC |
| PRVSEQ | YES | 1 | PRVSEQ |

## fpuntos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| PUNSEQ | int | NO | PRI |  | auto_increment |
| PUNKEY | varchar(10) | NO | MUL |  |  |
| PUNVENCE | date | NO | MUL | 1900-12-31 |  |
| PUNCANT | decimal(18,2) | NO |  | 0.00 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| PRIMARY | YES | 1 | PUNSEQ |
| PUNKEY | NO | 1 | PUNKEY |
| PUNSEQ | YES | 1 | PUNSEQ |
| PUNVENCE | NO | 1 | PUNVENCE |

## fquerys

- Engine: InnoDB
- Estimated rows: 26
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| QSEQ | int | NO | PRI |  | auto_increment |
| QNAME | varchar(15) | NO | MUL |  |  |
| QFORMULA | varchar(3000) | NO |  |  |  |
| QTODOS | tinyint unsigned | NO |  | 0 |  |
| QUSUARIOS | varchar(200) | NO |  |  |  |
| QDESCR | varchar(60) | NO |  |  |  |
| QMOD1 | tinyint unsigned | NO |  | 0 |  |
| QMOD2 | tinyint unsigned | NO |  | 0 |  |
| QMOD3 | tinyint unsigned | NO |  | 0 |  |
| QMOD4 | tinyint unsigned | NO |  | 0 |  |
| QMOD5 | tinyint unsigned | NO |  | 0 |  |
| QMOD6 | tinyint unsigned | NO |  | 0 |  |
| QMOD7 | tinyint unsigned | NO |  | 0 |  |
| QMOD8 | tinyint unsigned | NO |  | 0 |  |
| QMOD9 | tinyint unsigned | NO |  | 0 |  |
| QMOD10 | tinyint unsigned | NO |  | 0 |  |
| QMOD11 | tinyint unsigned | NO |  | 0 |  |
| QMOD12 | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | QSEQ |
| QNAME | NO | 1 | QNAME |
| QSEQ | YES | 1 | QSEQ |

## fredi

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| REDSEQ | int | NO | PRI |  | auto_increment |
| REDPRV | varchar(6) | NO | MUL |  |  |
| REDG1 | varchar(4) | NO | MUL |  |  |
| REDG2 | varchar(4) | NO | MUL |  |  |
| REDG3 | varchar(4) | NO |  |  |  |
| REDG4 | varchar(4) | NO |  |  |  |
| REDG5 | varchar(4) | NO |  |  |  |
| REDG6 | varchar(4) | NO |  |  |  |
| REDDATE | date | NO | MUL | 1900-12-31 |  |
| REDVTA | int | NO |  | 0 |  |
| REDVAFUTS | int | NO |  | 0 |  |
| REDCANT | int | NO |  | 0 |  |
| REDBOD | int | NO |  | 0 |  |
| REDTRANSITO | int | NO |  | 0 |  |
| REDMINIMO | int | NO |  | 0 |  |
| REDMINIMOENTDA | int | NO |  | 0 |  |
| REDNS | int | NO |  | 0 |  |
| REDVEOL | int | NO |  | 0 |  |
| REDORDENADO | int | NO |  | 0 |  |
| REDMAXIMO | int | NO |  | 0 |  |
| REDSOBRA | int | NO |  | 0 |  |
| REDFALTA | int | NO |  | 0 |  |
| REDDETDAS | int | NO |  | 0 |  |
| REDMES | varchar(2) | NO |  |  |  |
| REDSEM | varchar(2) | NO |  |  |  |
| REDYEAR | varchar(4) | NO |  |  |  |
| REDFINMES | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | REDSEQ |
| REDDATE | NO | 1 | REDDATE |
| REDG1 | NO | 1 | REDG1 |
| REDG2 | NO | 1 | REDG2 |
| REDPRV | NO | 1 | REDPRV |
| REDSEQ | YES | 1 | REDSEQ |

## frequest

- Engine: InnoDB
- Estimated rows: 173
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| REQSEQ | int | NO | PRI |  | auto_increment |
| REQSTATUS | int | NO | MUL | 0 |  |
| REQMETODO | varchar(40) | NO | MUL |  |  |
| REQREQ | varchar(20000) | NO |  |  |  |
| REQRESP | varchar(32000) | NO |  |  |  |
| REQPARMS | varchar(40) | NO |  |  |  |
| REQFECINI | datetime | NO |  | 1900-12-31 00:00:00 |  |
| REQFECREQ | datetime | NO |  | 1900-12-31 00:00:00 |  |
| REQFECPRO | datetime | NO |  | 1900-12-31 00:00:00 |  |
| REQPROC | varchar(3) | NO | MUL |  |  |
| REQUSRSEQ | int | NO |  | 0 |  |
| REQFECSTART | datetime | NO |  | 1900-12-31 00:00:00 |  |
| REQUSER | varchar(8) | NO |  |  |  |
| REQSES | int | NO |  | 0 |  |
| REQMCIA | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | REQSEQ |
| REQMETODO | NO | 1 | REQMETODO |
| REQPROC | NO | 1 | REQPROC |
| REQSEQ | YES | 1 | REQSEQ |
| REQSTATUS | NO | 1 | REQSTATUS |

## fresumenemp

- Engine: InnoDB
- Estimated rows: 2
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| RESSEQ | int | NO | PRI |  | auto_increment |
| RESDATE | date | NO |  | 1900-12-31 |  |
| RESCXC | decimal(18,2) | NO |  | 0.00 |  |
| RESCXP | decimal(18,2) | NO |  | 0.00 |  |
| RESVTAS | decimal(18,2) | NO |  | 0.00 |  |
| RESCOMPRAS | decimal(18,2) | NO |  | 0.00 |  |
| RESUTILID | decimal(18,2) | NO |  | 0.00 |  |
| RESBCS | decimal(18,2) | NO |  | 0.00 |  |
| RESINV | decimal(18,2) | NO |  | 0.00 |  |
| REST | tinyint unsigned | NO |  | 0 |  |
| RESGASTOS | decimal(18,2) | NO |  | 0.00 |  |
| RESVEN0 | decimal(18,0) | NO |  | 0 |  |
| RESVEN30 | decimal(18,0) | NO |  | 0 |  |
| RESVEN60 | decimal(18,0) | NO |  | 0 |  |
| RESVEN90 | decimal(18,0) | NO |  | 0 |  |
| RESVEN120 | decimal(18,0) | NO |  | 0 |  |
| RESVEN150 | decimal(18,0) | NO |  | 0 |  |
| RESVEN180 | decimal(18,0) | NO |  | 0 |  |
| RESCOBROS | decimal(18,0) | NO |  | 0 |  |
| RESNOCOBROS | decimal(18,0) | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | RESSEQ |
| RESSEQ | YES | 1 | RESSEQ |

## fses

- Engine: InnoDB
- Estimated rows: 59
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SESSEQ | int | NO | PRI |  | auto_increment |
| SESID | int | NO | MUL | 0 |  |
| SESUL | int | NO |  | 0 |  |
| SESSTA | int | NO |  | 0 |  |
| SESREG | datetime | NO |  | 1900-12-31 00:00:00 |  |
| SESACT | datetime | NO |  | 1900-12-31 00:00:00 |  |
| SESUPD | datetime | NO |  | 1900-12-31 00:00:00 |  |
| SESUSRSEQ | int | NO | MUL | 0 |  |
| SESMSG | varchar(1024) | NO |  |  |  |
| SESCHK | int | NO |  | 0 |  |
| SESTIPO | int | NO | MUL | 0 |  |
| SESWRKP | int | NO |  | 0 |  |
| SESUID | varchar(13) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | SESSEQ |
| SESID | NO | 1 | SESID |
| SESSEQ | YES | 1 | SESSEQ |
| SESTIPO | NO | 1 | SESTIPO |
| SESUSRSEQ | NO | 1 | SESUSRSEQ |

## fsiscomp

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SISSEQ | int | NO | PRI |  | auto_increment |
| SISKEY | varchar(23) | NO | MUL |  |  |
| SISVTA | int | NO |  | 0 |  |
| SISVTAREAL | int | NO |  | 0 |  |
| SISRECIBO | int | NO |  | 0 |  |
| SISFECHAOC | date | NO | MUL | 1900-12-31 |  |
| SISOCANT | int | NO |  | 0 |  |
| SISINVINI | int | NO |  | 0 |  |
| SISINVFIN | int | NO |  | 0 |  |
| SISDIASINV | int | NO |  | 0 |  |
| SISVTASAFIN | int | NO |  | 0 |  |
| SISINVIDEAL | int | NO |  | 0 |  |
| FORSEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FORSEQ | NO | 1 | FORSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | SISSEQ |
| SISFECHAOC | NO | 1 | SISFECHAOC |
| SISKEY | NO | 1 | SISKEY |
| SISSEQ | YES | 1 | SISSEQ |

## fskus

- Engine: InnoDB
- Estimated rows: 240
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SKUSEQ | int | NO | PRI |  | auto_increment |
| SKUSKU | varchar(20) | NO | MUL |  |  |
| SKUALTA | date | NO |  | 1900-12-31 |  |
| SKUCANT | decimal(18,2) | NO |  | 0.00 |  |
| SKUMOD | tinyint unsigned | NO |  | 0 |  |
| SKUCANAL | varchar(2) | NO | MUL |  |  |
| SKUSTATUS | int | NO |  | 0 |  |
| SKUSINCRONIZA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| SKUERROR | varchar(3200) | NO |  |  |  |
| SKUFAMMP | varchar(45) | NO |  |  |  |
| SKUFAMMP2 | varchar(45) | NO |  |  |  |
| SKUFAMMP3 | varchar(45) | NO |  |  |  |
| SKUSUBCANAL | int | NO |  | 0 |  |
| SKUPRECIO | decimal(18,2) | NO |  | 0.00 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | SKUSEQ |
| SKUCANAL | NO | 1 | SKUCANAL |
| SKUSEQ | YES | 1 | SKUSEQ |
| SKUSKU | NO | 1 | SKUSKU |

## fstatdlstal

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| STATSEQ | int | NO | PRI |  | auto_increment |
| STATTKEY | varchar(32) | NO | MUL |  |  |
| STATG1 | varchar(4) | NO |  |  |  |
| STATG2 | varchar(4) | NO |  |  |  |
| STATG3 | varchar(4) | NO |  |  |  |
| STATG4 | varchar(4) | NO |  |  |  |
| STATG5 | varchar(44) | NO |  |  |  |
| STATALM | varchar(6) | NO |  |  |  |
| STATINV | int | NO |  | 0 |  |
| STATVTA | int | NO |  | 0 |  |
| STATMULT | decimal(18,2) | NO |  | 0.00 |  |
| STATG6 | varchar(4) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | STATSEQ |
| STATSEQ | YES | 1 | STATSEQ |
| STATTKEY | NO | 1 | STATTKEY |

## fsucmes

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SMSEQ | int | NO | PRI |  | auto_increment |
| SMKEY | varchar(18) | NO | MUL |  |  |
| SMV1 | int | NO |  | 0 |  |
| SMV2 | int | NO |  | 0 |  |
| SMV3 | int | NO |  | 0 |  |
| SMV4 | int | NO |  | 0 |  |
| SMV5 | int | NO |  | 0 |  |
| SMV6 | int | NO |  | 0 |  |
| SMV7 | int | NO |  | 0 |  |
| SMV8 | int | NO |  | 0 |  |
| SMV9 | int | NO |  | 0 |  |
| SMV10 | int | NO |  | 0 |  |
| SMV11 | int | NO |  | 0 |  |
| SMV12 | int | NO |  | 0 |  |
| SMI1 | int | NO |  | 0 |  |
| SMI2 | int | NO |  | 0 |  |
| SMI3 | int | NO |  | 0 |  |
| SMI4 | int | NO |  | 0 |  |
| SMI5 | int | NO |  | 0 |  |
| SMI6 | int | NO |  | 0 |  |
| SMI7 | int | NO |  | 0 |  |
| SMI8 | int | NO |  | 0 |  |
| SMI9 | int | NO |  | 0 |  |
| SMI10 | int | NO |  | 0 |  |
| SMI11 | int | NO |  | 0 |  |
| SMI12 | int | NO |  | 0 |  |
| SMV13 | int | NO |  | 0 |  |
| SMI13 | int | NO |  | 0 |  |
| SMSUCURSAL | int | NO |  | 0 |  |
| SMVMAX | int | NO |  | 0 |  |
| SMV14 | int | NO |  | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | SMSEQ |
| SMKEY | NO | 1 | SMKEY |
| SMSEQ | YES | 1 | SMSEQ |

## fsucursales

- Engine: InnoDB
- Estimated rows: 11
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SUCSEQ | int | NO | PRI |  | auto_increment |
| SUCKEY | varchar(11) | NO | MUL |  |  |
| SUCCOD | decimal(18,0) | NO |  | 0 |  |
| SUCNOM | varchar(100) | NO |  |  |  |
| SUCVEN | varchar(3) | NO |  |  |  |
| SUCIVA | decimal(18,0) | NO |  | 0 |  |
| SUCINF | varchar(1) | NO |  |  |  |
| SUCDIR1 | varchar(45) | NO |  |  |  |
| SUCDIR2 | varchar(60) | NO |  |  |  |
| SUCCD | varchar(45) | NO |  |  |  |
| SUCEDO | varchar(15) | NO |  |  |  |
| SUCCP | varchar(7) | NO |  |  |  |
| SUCEAN | varchar(13) | NO | MUL |  |  |
| SUCDEM | varchar(3) | NO |  |  |  |
| SUCCONTACTO | varchar(45) | NO |  |  |  |
| SUCTEL | varchar(30) | NO |  |  |  |
| SUCFAX | varchar(30) | NO |  |  |  |
| SUCPAR1 | varchar(5) | NO |  |  |  |
| SUCPAR2 | varchar(4) | NO |  |  |  |
| SUCPAR3 | varchar(4) | NO |  |  |  |
| SUCPAR4 | varchar(4) | NO |  |  |  |
| SUCPAR5 | varchar(4) | NO |  |  |  |
| SUCPAR6 | varchar(4) | NO |  |  |  |
| SUCPAR7 | varchar(4) | NO |  |  |  |
| SUCPAR8 | varchar(4) | NO |  |  |  |
| SUCPAR9 | varchar(4) | NO |  |  |  |
| SUCCLIAPLIC | varchar(6) | NO |  |  |  |
| SUCTIEMPO | tinyint unsigned | NO |  | 0 |  |
| SUCVARIOS1 | int | NO |  | 0 |  |
| SUCVARIOS2 | int | NO |  | 0 |  |
| SUCVARIOS3 | int | NO |  | 0 |  |
| SUCVARIOS4 | int | NO |  | 0 |  |
| SUCVARIOS5 | int | NO |  | 0 |  |
| SUCVARIOS6 | int | NO |  | 0 |  |
| SUCVARIOS7 | int | NO |  | 0 |  |
| SUCVARIOS8 | int | NO |  | 0 |  |
| SUCVARIOS9 | int | NO |  | 0 |  |
| SUCVARIOS10 | int | NO |  | 0 |  |
| SUCVARIOS11 | int | NO |  | 0 |  |
| SUCVARIOS12 | int | NO |  | 0 |  |
| SUCALTA | date | NO |  | 1900-12-31 |  |
| SUCBAJA | date | NO |  | 1900-12-31 |  |
| SUCNUMEXT | varchar(31) | NO |  |  |  |
| SUCNUMINT | varchar(31) | NO |  |  |  |
| SUCDELEGACION | varchar(50) | NO |  |  |  |
| SUCPAIS | varchar(3) | NO |  |  |  |
| SUCEANS | varchar(8192) | NO |  |  |  |
| SUCCOM | tinyint unsigned | NO |  | 0 |  |
| SUCCEDIS | int | NO |  | 0 |  |
| SUCMAIL | varchar(255) | NO |  |  |  |
| CLISEQ | int | NO | MUL | 0 |  |
| PRVSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| PRIMARY | YES | 1 | SUCSEQ |
| PRVSEQ | NO | 1 | PRVSEQ |
| SUCEAN | NO | 1 | SUCEAN |
| SUCKEY | NO | 1 | SUCKEY |
| SUCSEQ | YES | 1 | SUCSEQ |

## fsumariza

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SUMSEQ | int | NO | PRI |  | auto_increment |
| SUMKEY | varchar(30) | NO | MUL |  |  |
| SUMCLI | varchar(6) | NO | MUL |  |  |
| SUMFAM1 | varchar(4) | NO |  |  |  |
| SUMFAM2 | varchar(4) | NO |  |  |  |
| SUMALM | varchar(5) | NO |  |  |  |
| SUMFECHA | date | NO | MUL | 1900-12-31 |  |
| SUMPZAS | int | NO |  | 0 |  |
| SUMIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| SUMCOSTO | decimal(18,2) | NO |  | 0.00 |  |
| SUMIVA | decimal(18,2) | NO |  | 0.00 |  |
| SUMOFERTA | tinyint unsigned | NO |  | 0 |  |
| SUMTIPO | varchar(1) | NO |  |  |  |
| SUMAHORRO | decimal(18,0) | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | SUMSEQ |
| SUMCLI | NO | 1 | SUMCLI |
| SUMFECHA | NO | 1 | SUMFECHA |
| SUMKEY | NO | 1 | SUMKEY |
| SUMSEQ | YES | 1 | SUMSEQ |

## ftarjetas

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TARSEQ | int | NO | PRI |  | auto_increment |
| TARMARCA | varchar(4) | NO |  |  |  |
| TARMOTOR | varchar(11) | NO |  |  |  |
| TARTOKEN | varchar(36) | NO |  |  |  |
| TARVENCE | date | NO |  | 1900-12-31 |  |
| CLISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| PRIMARY | YES | 1 | TARSEQ |
| TARSEQ | YES | 1 | TARSEQ |

## ftikets

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TKTSEQ | int | NO | PRI |  | auto_increment |
| TKTNUMOP | varchar(15) | NO | MUL |  |  |
| TKTDATE | date | NO |  | 1900-12-31 |  |
| TKTPROD | varchar(13) | NO | MUL |  |  |
| TKTART | varchar(13) | NO |  |  |  |
| TKTVALOR | decimal(18,3) | NO |  | 0.000 |  |
| TKTPZANUM | decimal(18,0) | NO |  | 0 |  |
| TKTPEDPLSEQ | decimal(18,0) | NO | MUL | 0 |  |
| TKTOPPLSEQ | decimal(18,0) | NO | MUL | 0 |  |
| TKTSTATUS | tinyint unsigned | NO | MUL | 0 |  |
| TKTEMPL | varchar(6) | NO | MUL |  |  |
| TKTDATEEND | date | NO |  | 1900-12-31 |  |
| TKTCANT | decimal(18,2) | NO |  | 0.00 |  |
| TKTSURT | decimal(18,2) | NO |  | 0.00 |  |
| TKTESFINAL | tinyint unsigned | NO |  | 0 |  |
| TKTMIN | decimal(18,4) | NO |  | 0.0000 |  |
| TKTMAQUINA | varchar(6) | NO | MUL |  |  |
| TKTUSEQ | int | NO |  | 0 |  |
| TKTPAR0 | tinyint unsigned | NO |  | 0 |  |
| TKTFOLIOS | varchar(12) | NO |  |  |  |
| TKTINICIO | date | NO |  | 1900-12-31 |  |
| TKTPAR1 | varchar(4) | NO |  |  |  |
| TKTORDEN | int | NO |  | 0 |  |
| TKTCOLOR | varchar(6) | NO |  |  |  |
| TKTINICIO2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TKTDATEEND2 | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TKTMNUTOSDIA | decimal(18,2) | NO |  | 0.00 |  |
| TKTEXTRA | int | NO |  | 0 |  |
| TKTPEDIDO | varchar(9) | NO | MUL |  |  |
| TKTCOM | varchar(150) | NO |  |  |  |
| TKTLIENZO | varchar(9) | NO | MUL |  |  |
| TKTTIRAS | decimal(18,0) | NO |  | 0 |  |
| TKTLARGO | decimal(18,2) | NO |  | 0.00 |  |
| TKTDEFECTOS | int | NO |  | 0 |  |
| TKTCLI | varchar(6) | NO | MUL |  |  |
| TKTINICIORL | date | NO |  | 1900-12-31 |  |
| TKTINV | tinyint unsigned | NO |  | 0 |  |
| TKTFAMART | varchar(16) | NO |  |  |  |
| TKTNOPRODUCTIVO | tinyint unsigned | NO |  | 0 |  |
| TKTFAMPROD | varchar(16) | NO |  |  |  |
| TKTTERCERAS | int | NO |  | 0 |  |
| TKTLECTURA | int | NO |  | 0 |  |
| TKTVALORNUEVO | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TKTSEQ |
| TKTCLI | NO | 1 | TKTCLI |
| TKTEMPL | NO | 1 | TKTEMPL |
| TKTLIENZO | NO | 1 | TKTLIENZO |
| TKTMAQUINA | NO | 1 | TKTMAQUINA |
| TKTNUMOP | NO | 1 | TKTNUMOP |
| TKTOPPLSEQ | NO | 1 | TKTOPPLSEQ |
| TKTPEDIDO | NO | 1 | TKTPEDIDO |
| TKTPEDPLSEQ | NO | 1 | TKTPEDPLSEQ |
| TKTPROD | NO | 1 | TKTPROD |
| TKTSEQ | YES | 1 | TKTSEQ |
| TKTSTATUS | NO | 1 | TKTSTATUS |

## ftipmv

- Engine: InnoDB
- Estimated rows: 257
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TICLA | varchar(2) | NO | MUL |  |  |
| TINUM | int | NO |  | 0 |  |
| TIIVA0 | decimal(18,2) | NO |  | 0.00 |  |
| TIAFCXC | decimal(18,0) | NO |  | 0 |  |
| TIAFINV | decimal(18,0) | NO |  | 0 |  |
| TIAFAGT | decimal(18,0) | NO |  | 0 |  |
| TIDESCR | varchar(30) | NO |  |  |  |
| TIAFBCS | decimal(18,0) | NO |  | 0 |  |
| TIAFVTS | decimal(18,0) | NO |  | 0 |  |
| TIREPNAME | varchar(15) | NO |  |  |  |
| TILARGO | decimal(18,2) | NO |  | 0.00 |  |
| TILARGO2 | decimal(18,2) | NO |  | 0.00 |  |
| TISEQ | int | NO | PRI |  | auto_increment |
| TICHR1 | varchar(15) | NO |  |  |  |
| TICHR2 | varchar(15) | NO |  |  |  |
| TILINEAS | decimal(18,0) | NO |  | 0 |  |
| TIMARGENSUP | decimal(18,2) | NO |  | 0.00 |  |
| TIMARGENINF | decimal(18,2) | NO |  | 0.00 |  |
| TIPRINTER | decimal(18,0) | NO |  | 0 |  |
| TIPRINTERNAME | varchar(30) | NO |  |  |  |
| TIPRELLENO | tinyint unsigned | NO |  | 0 |  |
| TICONVERTIR | varchar(2) | NO |  |  |  |
| TIAFPZO | tinyint unsigned | NO |  | 0 |  |
| TIALM | varchar(6) | NO |  |  |  |
| TICONTA | tinyint unsigned | NO |  | 0 |  |
| TICUENTA | varchar(16) | NO |  |  |  |
| TIADHOC | tinyint unsigned | NO |  | 0 |  |
| TIIVA1 | decimal(18,2) | NO |  | 0.00 |  |
| TIIVA2 | decimal(18,2) | NO |  | 0.00 |  |
| TIRETIVA | decimal(18,2) | NO |  | 0.00 |  |
| TICOML1 | varchar(15) | NO | MUL |  |  |
| TICOML2 | varchar(15) | NO |  |  |  |
| TICOML3 | varchar(15) | NO |  |  |  |
| TICOML4 | varchar(15) | NO |  |  |  |
| TICOML5 | varchar(15) | NO |  |  |  |
| TITRASPASOS | tinyint unsigned | NO |  | 0 |  |
| TICOPIAS | tinyint unsigned | NO |  | 0 |  |
| TIRETISR | tinyint unsigned | NO |  | 0 |  |
| TIMODULO | tinyint unsigned | NO |  | 0 |  |
| TIAFECTA | varchar(2) | NO |  |  |  |
| TIAVISO | int | NO |  | 0 |  |
| TIFISCAL | tinyint unsigned | NO |  | 0 |  |
| TISERLEN | tinyint unsigned | NO |  | 0 |  |
| TITEXTO1 | varchar(8192) | NO |  |  |  |
| TITEXTO2 | varchar(8192) | NO |  |  |  |
| TIUSUARIOS | varchar(1240) | NO |  |  |  |
| TICEROS | tinyint unsigned | NO |  | 0 |  |
| TIMULTICIA | tinyint unsigned | NO |  | 0 |  |
| TIIMPLTD | varchar(2048) | NO |  |  |  |
| TICONVERTIRFRANQ | varchar(2) | NO |  |  |  |
| TICONVERTIRNEG | varchar(2) | NO |  |  |  |
| TICONVERTIRFRANG | varchar(2) | NO |  |  |  |
| TIAPARTAWEB | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TISEQ |
| TICLA | NO | 1 | TICLA |
| TICOML1 | NO | 1 | TICOML1 |
| TISEQ | YES | 1 | TISEQ |

## ftjn

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TJN_SEQ | int | NO | PRI |  | auto_increment |
| TJN_ICOD | varchar(13) | NO | MUL |  |  |
| TJN_COLOR | varchar(3) | NO |  |  |  |
| TJN_YEAR | int | NO |  | 0 |  |
| TJN_WEEK | int | NO |  | 0 |  |
| TJN_CHANNEL | varchar(5) | NO |  |  |  |
| TJN_BANNER | varchar(5) | NO |  |  |  |
| TJN_DEPARTMENT | varchar(4) | NO |  |  |  |
| TJN_CLASS | varchar(4) | NO |  |  |  |
| TJN_CATEGORY | varchar(4) | NO |  |  |  |
| TJN_SEASON | varchar(32767) | NO |  |  |  |
| TJN_ORDER_PZ | int | NO |  | 0 |  |
| TJN_ORDER_DL | int | NO |  | 0 |  |
| TJN_ONHAND_PZ | int | NO |  | 0 |  |
| TJN_ONHAND_DL | int | NO |  | 0 |  |
| TJN_ESTILOS | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TJN_SEQ |
| TJN_ICOD | NO | 1 | TJN_ICOD |
| TJN_SEQ | YES | 1 | TJN_SEQ |

## ftjs

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TJS_SEQ | int | NO | PRI |  | auto_increment |
| TJS_ALMKEY | varchar(19) | NO | MUL |  |  |
| TJS_YEAR | int | NO |  | 0 |  |
| TJS_WEEK | int | NO |  | 0 |  |
| TJS_MD | int | NO |  | 0 |  |
| TJS_L1 | decimal(18,2) | NO |  | 0.00 |  |
| TJS_ALMSEQ | int | NO |  | 0 |  |
| TJS_ALMNUM | varchar(6) | NO |  |  |  |
| TJS_INV3WA | int | NO |  | 0 |  |
| TJS_INV2WA | int | NO |  | 0 |  |
| TJS_INV1WA | int | NO |  | 0 |  |
| TJS_INV0WA | int | NO |  | 0 |  |
| TJS_SALES3WA | int | NO |  | 0 |  |
| TJS_SALES2WA | int | NO |  | 0 |  |
| TJS_SALES1WA | int | NO |  | 0 |  |
| TJS_SALES0WA | int | NO |  | 0 |  |
| TJS_RECS | int | NO |  | 0 |  |
| TJS_ENV | int | NO |  | 0 |  |
| TJS_TOTENV | int | NO |  | 0 |  |
| TJS_TOTSALES | int | NO |  | 0 |  |
| TJS_COLOR | varchar(3) | NO |  |  |  |
| TJS_DEPARTMENT | varchar(4) | NO |  |  |  |
| TJS_CLASS | varchar(4) | NO |  |  |  |
| TJS_CATEGORY | varchar(4) | NO |  |  |  |
| TJS_SEASON | varchar(4) | NO |  |  |  |
| TJS_INVFUT | int | NO |  | 0 |  |
| TJS_ICOD | varchar(13) | NO | MUL |  |  |
| TJS_F_SALES_DLS | decimal(18,2) | NO | MUL | 0.00 |  |
| TJS_F_SHRINK_DLS | decimal(18,2) | NO | MUL | 0.00 |  |
| TJS_F_COGS_DLS | decimal(18,2) | NO |  | 0.00 |  |
| TJS_M_INV_UNITS | int | NO |  | 0 |  |
| TJS_M_MD_UNITS | int | NO |  | 0 |  |
| TJS_M_INV_DLS | decimal(18,2) | NO |  | 0.00 |  |
| TJS_M_MD_DLS | decimal(18,2) | NO |  | 0.00 |  |
| TJS_N_ORD_UNITS | int | NO |  | 0 |  |
| TJS_N_ORD_DLS | int | NO |  | 0 |  |
| TJS_N_ONH_UNITS | int | NO |  | 0 |  |
| TJS_N_ONH_DLS | int | NO |  | 0 |  |
| TJS_N_ESTILOS | int | NO |  | 0 |  |
| TJS_WEEK_ENDDATE | date | NO |  | 1900-12-31 |  |
| TJS_MD_DATE | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TJS_SEQ |
| TJS_ALMKEY | NO | 1 | TJS_ALMKEY |
| TJS_F_SALES_DLS | NO | 1 | TJS_F_SALES_DLS |
| TJS_F_SHRINK_DLS | NO | 1 | TJS_F_SHRINK_DLS |
| TJS_ICOD | NO | 1 | TJS_ICOD |
| TJS_SEQ | YES | 1 | TJS_SEQ |

## ftokens

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TOKSEQ | int | NO | PRI |  | auto_increment |
| TOKCUBO | varchar(6) | NO |  |  |  |
| TOKID | int | NO |  | 0 |  |
| TOKCOD | varchar(14) | NO |  |  |  |
| TOKDESCR | varchar(60) | NO | MUL |  |  |
| TOKDIM | tinyint unsigned | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TOKSEQ |
| TOKDESCR | NO | 1 | TOKDESCR |
| TOKSEQ | YES | 1 | TOKSEQ |

## ftransop

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TRANSSEQ | int | NO | PRI |  | auto_increment |
| TRANSORDEN | varchar(8) | NO |  |  |  |
| TRANSFECHA | date | NO |  | 1900-12-31 |  |
| TRANSCANT | decimal(18,2) | NO |  | 0.00 |  |
| TRANSPLSEQ | decimal(18,0) | NO | MUL | 0 |  |
| TRANSICOD | varchar(13) | NO |  |  |  |
| TRANSCLI | varchar(6) | NO |  |  |  |
| TRANSOBS | varchar(1000) | NO |  |  |  |
| TRANSKEY | varchar(25) | NO | MUL |  |  |
| TRANSPEDIDO | varchar(10) | NO |  |  |  |
| TRANSDEFECTOS | decimal(18,2) | NO |  | 0.00 |  |
| TRANSTERCERAS | decimal(18,2) | NO |  | 0.00 |  |
| TRANSESFINAL | tinyint unsigned | NO |  | 0 |  |
| TRANSEORDEN | int | NO |  | 0 |  |
| TRANSMAQPRECI | decimal(18,2) | NO |  | 0.00 |  |
| TRANSAICANTF | decimal(18,2) | NO |  | 0.00 |  |
| TRANSPRV | varchar(6) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | TRANSSEQ |
| TRANSKEY | NO | 1 | TRANSKEY |
| TRANSPLSEQ | NO | 1 | TRANSPLSEQ |
| TRANSSEQ | YES | 1 | TRANSSEQ |

## ftraspasos

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| TRASSEQ | int | NO | PRI |  | auto_increment |
| TRASDE | varchar(6) | NO | MUL |  |  |
| TRASA | varchar(6) | NO |  |  |  |
| TRASVIA | varchar(6) | NO |  |  |  |
| TRASCANT | decimal(18,2) | NO |  | 0.00 |  |
| TRANSCOLOR | varchar(6) | NO |  |  |  |
| TRASENV | int | NO |  | 0 |  |
| TRASDOCENVIO | varchar(13) | NO |  |  |  |
| TRASNUMERO | varchar(8) | NO | MUL |  |  |
| TRASCDNUM | tinyint unsigned | NO |  | 0 |  |
| TRASNS | tinyint unsigned | NO |  | 0 |  |
| TRASACTIVO | tinyint unsigned | NO |  | 0 |  |
| TRASSURTECD | tinyint unsigned | NO |  | 0 |  |
| TRASTIPO | varchar(10) | NO |  |  |  |
| TRASEMPACA | varchar(8) | NO |  |  |  |
| TRASCOTIZ | tinyint unsigned | NO | MUL | 0 |  |
| TRASFECHA | date | NO |  | 1900-12-31 |  |
| TRASFECHAEMPACA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TRASSURTE | varchar(8) | NO |  |  |  |
| TRASFECHASURTE | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TRASFINSURTE | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TRASFINEMPACA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| TRASRATIONEC | decimal(18,2) | NO |  | 0.00 |  |
| TRASNOENVIAR | tinyint unsigned | NO |  | 0 |  |
| TRASRUTA | varchar(10) | NO |  |  |  |
| TRASPEDIDO | varchar(9) | NO | MUL |  |  |
| TRASFENVIAR | date | NO |  | 1900-12-31 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | TRASSEQ |
| TRASCOTIZ | NO | 1 | TRASCOTIZ |
| TRASDE | NO | 1 | TRASDE |
| TRASNUMERO | NO | 1 | TRASNUMERO |
| TRASPEDIDO | NO | 1 | TRASPEDIDO |
| TRASSEQ | YES | 1 | TRASSEQ |

## funidad

- Engine: InnoDB
- Estimated rows: 12
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| UCOD | varchar(3) | NO | MUL |  |  |
| UDESCR | varchar(15) | NO |  |  |  |
| USEQ | int | NO | PRI |  | auto_increment |
| UTALLA11 | varchar(4) | NO |  |  |  |
| UTALLA12 | varchar(4) | NO |  |  |  |
| UTALLA13 | varchar(4) | NO |  |  |  |
| UTALLA14 | varchar(4) | NO |  |  |  |
| UTALLA15 | varchar(4) | NO |  |  |  |
| UTALLA16 | varchar(4) | NO |  |  |  |
| UTALLA17 | varchar(4) | NO |  |  |  |
| UTALLA18 | varchar(4) | NO |  |  |  |
| UTALLA19 | varchar(4) | NO |  |  |  |
| UTALLA20 | varchar(4) | NO |  |  |  |
| UTALLA21 | varchar(4) | NO |  |  |  |
| UTALLA22 | varchar(4) | NO |  |  |  |
| UTALLA23 | varchar(4) | NO |  |  |  |
| UTALLA24 | varchar(4) | NO |  |  |  |
| UTALLA25 | varchar(4) | NO |  |  |  |
| UTALLA26 | varchar(4) | NO |  |  |  |
| UTIPO | tinyint unsigned | NO |  | 0 |  |
| UEQUIV | double | NO |  | 0 |  |
| UCORR11 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR12 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR13 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR14 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR15 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR16 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR17 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR18 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR19 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR20 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR21 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR22 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR23 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR24 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR25 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR26 | decimal(18,1) | NO |  | 0.0 |  |
| UDESCRAMECE | varchar(25) | NO |  |  |  |
| UABREGEN | varchar(6) | NO |  |  |  |
| UTALLA27 | varchar(4) | NO |  |  |  |
| UTALLA28 | varchar(4) | NO |  |  |  |
| UTALLA29 | varchar(4) | NO |  |  |  |
| UTALLA30 | varchar(4) | NO |  |  |  |
| UCORR27 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR28 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR29 | decimal(18,1) | NO |  | 0.0 |  |
| UCORR30 | decimal(18,1) | NO |  | 0.0 |  |
| UINACTIVO | tinyint unsigned | NO |  | 0 |  |
| UCODEXP | varchar(2) | NO |  |  |  |
| UCODSAT | varchar(3) | NO |  |  |  |
| UMULTIPLOWEB | tinyint unsigned | NO |  | 0 |  |
| UUMPROMODA | varchar(3) | NO |  |  |  |
| UMCORNER | varchar(2) | NO |  |  |  |
| UCORRIDAS | varchar(100) | NO | MUL |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | USEQ |
| UCOD | NO | 1 | UCOD |
| UCORRIDAS | NO | 1 | UCORRIDAS |
| USEQ | YES | 1 | USEQ |

## fusers

- Engine: InnoDB
- Estimated rows: 478
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| USRSEQ | int | NO | PRI |  | auto_increment |
| USRNAME | varchar(46) | NO | MUL |  |  |
| USRGROUP | tinyint unsigned | NO |  | 0 |  |
| USRCOD | varchar(8) | NO | MUL |  |  |
| USRSTATUS | tinyint unsigned | NO |  | 0 |  |
| USRPASW | varchar(12) | NO | MUL |  |  |
| USRNOCOSTOS | tinyint unsigned | NO |  | 0 |  |
| USRNOSALDOS | tinyint unsigned | NO |  | 0 |  |
| USRPRINTERNAME | varchar(1000) | NO |  |  |  |
| USRCIA | int | NO |  | 0 |  |
| USRVENDEDOR | varchar(3) | NO |  |  |  |
| USRSOLOEL | tinyint unsigned | NO |  | 0 |  |
| USRES | tinyint unsigned | NO |  | 0 |  |
| USRPROVS | varchar(300) | NO |  |  |  |
| USRFIRMA | tinyint unsigned | NO |  | 0 |  |
| USRSEQN | int | NO | MUL | 0 |  |
| USRPAR | varchar(4) | NO | MUL |  |  |
| USRSIPETIQ | int | NO |  | 0 |  |
| USRFI | date | NO |  | 1900-12-31 |  |
| USRFF | date | NO |  | 1900-12-31 |  |
| USRDATEPASW | date | NO |  | 1900-12-31 |  |
| USRLASTASPASWORDS | varchar(200) | NO |  |  |  |
| USRDEPTO | tinyint unsigned | NO |  | 0 |  |
| USROBS | varchar(40) | NO |  |  |  |
| USRTDA | varchar(3) | NO |  |  |  |
| USRPUESTO | varchar(50) | NO |  |  |  |
| USRMULTICIA | tinyint unsigned | NO |  | 0 |  |
| USRNOMINA | varchar(8) | NO |  |  |  |
| USRPOSACCESOS | varchar(200) | NO |  |  |  |
| USRNUMPRIMO | int | NO | MUL | 0 |  |
| USRTDAS | varchar(1000) | NO |  |  |  |
| USRDESCMAX | decimal(18,2) | NO |  | 0.00 |  |
| USRFAMS | varchar(110) | NO |  |  |  |
| USRPSWPOS | varchar(15) | NO |  |  |  |
| USRFAM | varchar(1) | NO |  |  |  |
| USRPERFIL | varchar(15) | NO |  |  |  |
| USROUTPATH | varchar(200) | NO |  |  |  |
| USRMAXSES | int | NO |  | 0 |  |
| USRFILTROFINV | varchar(250) | NO |  |  |  |
| USRFILTROFALM | varchar(250) | NO |  |  |  |
| USRFILTROFDOCCLI | varchar(250) | NO |  |  |  |
| USRFILTROFPENCCLI | varchar(250) | NO |  |  |  |
| USRFILTROFCLI | varchar(250) | NO |  |  |  |
| USRFILTROFPOLIZA | varchar(250) | NO |  |  |  |
| USRFILTROFDOCPRV | varchar(250) | NO |  |  |  |
| USRFILTROFPENCPRV | varchar(250) | NO |  |  |  |
| USRFILTROFPRV | varchar(250) | NO |  |  |  |
| USRFILTROFALMCAT | varchar(250) | NO |  |  |  |
| USRRFC | varchar(15) | NO | MUL |  |  |
| USRCENCOS | int | NO |  | 0 |  |
| USRRDID | varchar(250) | NO |  |  |  |
| USRDIASVER | int | NO |  | 0 |  |
| USRTIMES | int | NO |  | 0 |  |
| USRNOTIF | int | NO |  | 0 |  |
| USRPARTNUM | varchar(4) | NO | MUL |  |  |
| USRNACIMIENTO | date | NO |  | 1900-12-31 |  |
| USRNODATE | tinyint unsigned | NO |  | 0 |  |
| USRCORTEHAND | tinyint unsigned | NO |  | 0 |  |
| USRCONSMOBIL | tinyint unsigned | NO |  | 0 |  |
| USRFILTROFBENC | varchar(250) | NO |  |  |  |
| USRSUPERVISOR | tinyint unsigned | NO |  | 0 |  |
| USRBAJA | date | NO |  | 1900-12-31 |  |
| USRFRANQUICIA | varchar(3) | NO |  |  |  |
| USRENCUESTA | date | NO |  | 1900-12-31 |  |
| USRCELULAR | varchar(10) | NO |  |  |  |
| USREXTKEY | varchar(88) | NO |  |  |  |
| USRTIMESTAMP | varchar(10) | NO |  |  |  |
| USROTP | tinyint unsigned | NO |  | 0 |  |
| USREMAIL | varchar(64) | NO |  |  |  |
| USRMONTOAUT | decimal(18,0) | NO |  | 0 |  |
| USRTEL | varchar(10) | NO |  |  |  |
| USRMSGXTEL | decimal(18,0) | NO |  | 0 |  |
| USRMSGXMAIL | decimal(18,0) | NO |  | 0 |  |
| USRMSGPERFILES | varchar(20) | NO |  |  |  |
| USRGALIOID | varchar(63) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | USRSEQ |
| USRCOD | NO | 1 | USRCOD |
| USRNAME | NO | 1 | USRNAME |
| USRNUMPRIMO | NO | 1 | USRNUMPRIMO |
| USRPAR | NO | 1 | USRPAR |
| USRPARTNUM | NO | 1 | USRPARTNUM |
| USRPASW | NO | 1 | USRPASW |
| USRRFC | NO | 1 | USRRFC |
| USRSEQ | YES | 1 | USRSEQ |
| USRSEQN | NO | 1 | USRSEQN |

## fusl

- Engine: InnoDB
- Estimated rows: 40939
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| USLSEQ | int | NO | PRI |  | auto_increment |
| USLMU | int | NO |  | 0 |  |
| USLUL | tinyint unsigned | NO |  | 0 |  |
| USLUSRSEQ | int | NO |  | 0 |  |
| USLENT | datetime | NO |  | 1900-12-31 00:00:00 |  |
| USLSAL | datetime | NO |  | 1900-12-31 00:00:00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | USLSEQ |
| USLSEQ | YES | 1 | USLSEQ |

## fvanu

- Engine: InnoDB
- Estimated rows: 29151
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| VSEQ | int | NO | PRI |  | auto_increment |
| V1 | decimal(18,0) | NO |  | 0 |  |
| V2 | decimal(18,0) | NO |  | 0 |  |
| V3 | decimal(18,0) | NO |  | 0 |  |
| V4 | decimal(18,0) | NO |  | 0 |  |
| V5 | decimal(18,0) | NO |  | 0 |  |
| V6 | decimal(18,0) | NO |  | 0 |  |
| V7 | decimal(18,0) | NO |  | 0 |  |
| V8 | decimal(18,0) | NO |  | 0 |  |
| V9 | decimal(18,0) | NO |  | 0 |  |
| V10 | decimal(18,0) | NO |  | 0 |  |
| V11 | decimal(18,0) | NO |  | 0 |  |
| V12 | decimal(18,0) | NO |  | 0 |  |
| VKEYNOUSAR | decimal(18,0) | NO | MUL | 0 |  |
| VI1 | decimal(18,2) | NO |  | 0.00 |  |
| VI2 | decimal(18,2) | NO |  | 0.00 |  |
| VI3 | decimal(18,2) | NO |  | 0.00 |  |
| VI4 | decimal(18,2) | NO |  | 0.00 |  |
| VI5 | decimal(18,2) | NO |  | 0.00 |  |
| VI6 | decimal(18,2) | NO |  | 0.00 |  |
| VI7 | decimal(18,2) | NO |  | 0.00 |  |
| VI8 | decimal(18,2) | NO |  | 0.00 |  |
| VI9 | decimal(18,2) | NO |  | 0.00 |  |
| VI10 | decimal(18,2) | NO |  | 0.00 |  |
| VI11 | decimal(18,2) | NO |  | 0.00 |  |
| VI12 | decimal(18,2) | NO |  | 0.00 |  |
| VC1 | decimal(18,2) | NO |  | 0.00 |  |
| VC2 | decimal(18,2) | NO |  | 0.00 |  |
| VC3 | decimal(18,2) | NO |  | 0.00 |  |
| VC4 | decimal(18,2) | NO |  | 0.00 |  |
| VC5 | decimal(18,2) | NO |  | 0.00 |  |
| VC6 | decimal(18,2) | NO |  | 0.00 |  |
| VC7 | decimal(18,2) | NO |  | 0.00 |  |
| VC8 | decimal(18,2) | NO |  | 0.00 |  |
| VC9 | decimal(18,2) | NO |  | 0.00 |  |
| VC10 | decimal(18,2) | NO |  | 0.00 |  |
| VC11 | decimal(18,2) | NO |  | 0.00 |  |
| VC12 | decimal(18,2) | NO |  | 0.00 |  |
| VKT | decimal(18,0) | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | VSEQ |
| VKEYNOUSAR | NO | 1 | VKEYNOUSAR |
| VSEQ | YES | 1 | VSEQ |

## fvanu2

- Engine: InnoDB
- Estimated rows: 31860
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| VASEQ | int | NO | PRI |  | auto_increment |
| VAKEY | varchar(14) | NO | MUL |  |  |
| VAMES | decimal(18,0) | NO |  | 0 |  |
| VAKT | decimal(18,0) | NO |  | 0 |  |
| VACANT | decimal(18,2) | NO |  | 0.00 |  |
| VACOSTO | decimal(18,2) | NO |  | 0.00 |  |
| VAIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| VAANO | tinyint unsigned | NO |  | 0 |  |
| VAIMPORTE2 | decimal(18,2) | NO |  | 0.00 |  |
| VATIPO | tinyint unsigned | NO |  | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| ISEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | VASEQ |
| VAKEY | NO | 1 | VAKEY |
| VASEQ | YES | 1 | VASEQ |

## fvsem

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| SEMSEQ | int | NO | PRI |  | auto_increment |
| SEMKEY | varchar(13) | NO | MUL |  |  |
| SEMTKTS | int | NO |  | 0 |  |
| SEMPZAS | int | NO |  | 0 |  |
| SEMHORAST | decimal(18,1) | NO |  | 0.0 |  |
| SEMDIAS | tinyint unsigned | NO |  | 0 |  |
| SEMIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| SEMPAR1 | varchar(5) | NO |  |  |  |
| SEMPAR2 | varchar(4) | NO |  |  |  |
| SEMPAR3 | varchar(4) | NO |  |  |  |
| SEMPAR4 | varchar(4) | NO |  |  |  |
| SEMPAR5 | varchar(4) | NO |  |  |  |
| SEMPAR6 | varchar(4) | NO |  |  |  |
| SEMPAR7 | varchar(4) | NO |  |  |  |
| SEMPAR8 | varchar(4) | NO |  |  |  |
| SEMPAR9 | varchar(4) | NO |  |  |  |
| SEMYEAR | tinyint unsigned | NO |  | 0 |  |
| SEMMES | tinyint unsigned | NO |  | 0 |  |
| SEMMINIMO | decimal(18,0) | NO |  | 0 |  |
| SEMMETA | decimal(18,0) | NO |  | 0 |  |
| SEMSEM | tinyint unsigned | NO |  | 0 |  |
| SEMOPORT | int | NO |  | 0 |  |
| SEMHTD1 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD2 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD3 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD4 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD5 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD6 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHTD7 | decimal(18,1) | NO |  | 0.0 |  |
| SEMHRD1 | int | NO |  | 0 |  |
| SEMHRD2 | int | NO |  | 0 |  |
| SEMHRD3 | int | NO |  | 0 |  |
| SEMHRD4 | int | NO |  | 0 |  |
| SEMHRD5 | int | NO |  | 0 |  |
| SEMHRD6 | int | NO |  | 0 |  |
| SEMHRD7 | int | NO |  | 0 |  |
| SEMRATIOFIN | decimal(18,2) | NO |  | 0.00 |  |
| SEMESTDA | tinyint unsigned | NO |  | 0 |  |
| SEMHORASR | int | NO |  | 0 |  |
| SEMTRIMESTRE | tinyint unsigned | NO |  | 0 |  |
| SEMCOLMES | tinyint unsigned | NO |  | 0 |  |
| SEMCOLTRIM | tinyint unsigned | NO |  | 0 |  |
| SEMCOM1 | decimal(18,2) | NO |  | 0.00 |  |
| SEMCOM2 | decimal(18,2) | NO |  | 0.00 |  |
| SEMCOM3 | decimal(18,2) | NO |  | 0.00 |  |
| SEMBONO | decimal(18,2) | NO |  | 0.00 |  |
| SEMCONCEPTO | varchar(15) | NO |  |  |  |
| SEMDESCTOS | int | NO |  | 0 |  |
| SEMMIN1 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN2 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN3 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN4 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN5 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN6 | decimal(18,0) | NO |  | 0 |  |
| SEMMIN7 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA1 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA2 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA3 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA4 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA5 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA6 | decimal(18,0) | NO |  | 0 |  |
| SEMVTA7 | decimal(18,0) | NO |  | 0 |  |
| SEMVTAAA | decimal(18,2) | NO |  | 0.00 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | SEMSEQ |
| SEMKEY | NO | 1 | SEMKEY |
| SEMSEQ | YES | 1 | SEMSEQ |

## fvsucursal

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| VSSEQ | int | NO | PRI |  | auto_increment |
| VSSUCURSAL | int | NO |  | 0 |  |
| VSTIPO | varchar(2) | NO |  |  |  |
| VSCANTQA | decimal(18,2) | NO |  | 0.00 |  |
| VSCANTQS | decimal(18,2) | NO |  | 0.00 |  |
| ISEQ | int | NO | MUL | 0 |  |
| CLISEQ | int | NO | MUL | 0 |  |
| EDSEQ | int | NO | MUL | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| CLISEQ | NO | 1 | CLISEQ |
| EDSEQ | NO | 1 | EDSEQ |
| ISEQ | NO | 1 | ISEQ |
| PRIMARY | YES | 1 | VSSEQ |
| VSSEQ | YES | 1 | VSSEQ |

## fwg

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| WGSEQ | int | NO | PRI |  | auto_increment |
| WGKEY | varchar(36) | NO | MUL |  |  |
| WGICOD | varchar(13) | NO |  |  |  |
| WGMIN | varchar(3) | NO |  |  |  |
| WGMAX | varchar(3) | NO |  |  |  |
| WGLISTA1 | decimal(18,2) | NO |  | 0.00 |  |
| WGLISTA5 | decimal(18,2) | NO |  | 0.00 |  |
| WGULTCPRCD | date | NO |  | 1900-12-31 |  |
| WGPRIMERVTA | date | NO |  | 1900-12-31 |  |
| WGULTCPR | date | NO |  | 1900-12-31 |  |
| WGINVPROM | int | NO |  | 0 |  |
| WGDIAS | int | NO |  | 0 |  |
| WGVENTAS | int | NO |  | 0 |  |
| WGCOMOPRAS | int | NO |  | 0 |  |
| WGOCDATE1 | date | NO |  | 1900-12-31 |  |
| WGOCCANT1 | int | NO |  | 0 |  |
| WGOCDATE2 | date | NO |  | 1900-12-31 |  |
| WGOCCANT2 | int | NO |  | 0 |  |
| WGOCDATE3 | date | NO |  | 1900-12-31 |  |
| WGOCCANT3 | int | NO |  | 0 |  |
| WGOCDATE4 | date | NO |  | 1900-12-31 |  |
| WGOCCANT4 | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | WGSEQ |
| WGKEY | NO | 1 | WGKEY |
| WGSEQ | YES | 1 | WGSEQ |

## fxg

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| FXSEQ | int | NO | PRI |  | auto_increment |
| FXA01 | int | NO |  | 0 |  |
| FXA02 | int | NO |  | 0 |  |
| FXA03 | int | NO |  | 0 |  |
| FXA04 | int | NO |  | 0 |  |
| FXA05 | int | NO |  | 0 |  |
| FXA06 | int | NO |  | 0 |  |
| FXA07 | int | NO |  | 0 |  |
| FXA08 | int | NO |  | 0 |  |
| FXA09 | int | NO |  | 0 |  |
| FXA10 | int | NO |  | 0 |  |
| FXA11 | int | NO |  | 0 |  |
| FXA12 | int | NO |  | 0 |  |
| FXA13 | int | NO |  | 0 |  |
| FXA14 | int | NO |  | 0 |  |
| FXA15 | int | NO |  | 0 |  |
| FXA16 | int | NO |  | 0 |  |
| FXA17 | int | NO |  | 0 |  |
| FXA18 | int | NO |  | 0 |  |
| FXA19 | int | NO |  | 0 |  |
| FXA20 | int | NO |  | 0 |  |
| FXA21 | int | NO |  | 0 |  |
| FXA22 | int | NO |  | 0 |  |
| FXA23 | int | NO |  | 0 |  |
| FXA24 | int | NO |  | 0 |  |
| FXA25 | int | NO |  | 0 |  |
| FXA26 | int | NO |  | 0 |  |
| FXA27 | int | NO |  | 0 |  |
| FXA28 | int | NO |  | 0 |  |
| FXA29 | int | NO |  | 0 |  |
| FXA30 | int | NO |  | 0 |  |
| FXA31 | int | NO |  | 0 |  |
| FXA32 | int | NO |  | 0 |  |
| FXA33 | int | NO |  | 0 |  |
| FXA34 | int | NO |  | 0 |  |
| FXA35 | int | NO |  | 0 |  |
| FXA36 | int | NO |  | 0 |  |
| FXA37 | int | NO |  | 0 |  |
| FXA38 | int | NO |  | 0 |  |
| FXA39 | int | NO |  | 0 |  |
| FXA40 | int | NO |  | 0 |  |
| FXA41 | int | NO |  | 0 |  |
| FXA42 | int | NO |  | 0 |  |
| FXA43 | int | NO |  | 0 |  |
| FXA44 | int | NO |  | 0 |  |
| FXA45 | int | NO |  | 0 |  |
| FXA46 | int | NO |  | 0 |  |
| FXA47 | int | NO |  | 0 |  |
| FXA48 | int | NO |  | 0 |  |
| FXA49 | int | NO |  | 0 |  |
| FXA50 | int | NO |  | 0 |  |
| FXB01 | int | NO |  | 0 |  |
| FXB02 | int | NO |  | 0 |  |
| FXB03 | int | NO |  | 0 |  |
| FXB04 | int | NO |  | 0 |  |
| FXB05 | int | NO |  | 0 |  |
| FXB06 | int | NO |  | 0 |  |
| FXB07 | int | NO |  | 0 |  |
| FXB08 | int | NO |  | 0 |  |
| FXB09 | int | NO |  | 0 |  |
| FXB10 | int | NO |  | 0 |  |
| FXB11 | int | NO |  | 0 |  |
| FXB12 | int | NO |  | 0 |  |
| FXB13 | int | NO |  | 0 |  |
| FXB14 | int | NO |  | 0 |  |
| FXB15 | int | NO |  | 0 |  |
| FXB16 | int | NO |  | 0 |  |
| FXB17 | int | NO |  | 0 |  |
| FXB18 | int | NO |  | 0 |  |
| FXB19 | int | NO |  | 0 |  |
| FXB20 | int | NO |  | 0 |  |
| FXB21 | int | NO |  | 0 |  |
| FXB22 | int | NO |  | 0 |  |
| FXB23 | int | NO |  | 0 |  |
| FXB24 | int | NO |  | 0 |  |
| FXB25 | int | NO |  | 0 |  |
| FXB26 | int | NO |  | 0 |  |
| FXB27 | int | NO |  | 0 |  |
| FXB28 | int | NO |  | 0 |  |
| FXB29 | int | NO |  | 0 |  |
| FXB30 | int | NO |  | 0 |  |
| FXB31 | int | NO |  | 0 |  |
| FXB32 | int | NO |  | 0 |  |
| FXB33 | int | NO |  | 0 |  |
| FXB34 | int | NO |  | 0 |  |
| FXB35 | int | NO |  | 0 |  |
| FXB36 | int | NO |  | 0 |  |
| FXB37 | int | NO |  | 0 |  |
| FXB38 | int | NO |  | 0 |  |
| FXB39 | int | NO |  | 0 |  |
| FXB40 | int | NO |  | 0 |  |
| FXB41 | int | NO |  | 0 |  |
| FXB42 | int | NO |  | 0 |  |
| FXB43 | int | NO |  | 0 |  |
| FXB44 | int | NO |  | 0 |  |
| FXB45 | int | NO |  | 0 |  |
| FXB46 | int | NO |  | 0 |  |
| FXB47 | int | NO |  | 0 |  |
| FXB48 | int | NO |  | 0 |  |
| FXB49 | int | NO |  | 0 |  |
| FXB50 | int | NO |  | 0 |  |
| FXC01 | int | NO |  | 0 |  |
| FXC02 | int | NO |  | 0 |  |
| FXC03 | int | NO |  | 0 |  |
| FXC04 | int | NO |  | 0 |  |
| FXC05 | int | NO |  | 0 |  |
| FXC06 | int | NO |  | 0 |  |
| FXC07 | int | NO |  | 0 |  |
| FXC08 | int | NO |  | 0 |  |
| FXC09 | int | NO |  | 0 |  |
| FXC10 | int | NO |  | 0 |  |
| FXC11 | int | NO |  | 0 |  |
| FXC12 | int | NO |  | 0 |  |
| FXC13 | int | NO |  | 0 |  |
| FXC14 | int | NO |  | 0 |  |
| FXC15 | int | NO |  | 0 |  |
| FXC16 | int | NO |  | 0 |  |
| FXC17 | int | NO |  | 0 |  |
| FXC18 | int | NO |  | 0 |  |
| FXC19 | int | NO |  | 0 |  |
| FXC20 | int | NO |  | 0 |  |
| FXC21 | int | NO |  | 0 |  |
| FXC22 | int | NO |  | 0 |  |
| FXC23 | int | NO |  | 0 |  |
| FXC24 | int | NO |  | 0 |  |
| FXC25 | int | NO |  | 0 |  |
| FXC26 | int | NO |  | 0 |  |
| FXC27 | int | NO |  | 0 |  |
| FXC28 | int | NO |  | 0 |  |
| FXC29 | int | NO |  | 0 |  |
| FXC30 | int | NO |  | 0 |  |
| FXC31 | int | NO |  | 0 |  |
| FXC32 | int | NO |  | 0 |  |
| FXC33 | int | NO |  | 0 |  |
| FXC34 | int | NO |  | 0 |  |
| FXC35 | int | NO |  | 0 |  |
| FXC36 | int | NO |  | 0 |  |
| FXC37 | int | NO |  | 0 |  |
| FXC38 | int | NO |  | 0 |  |
| FXC39 | int | NO |  | 0 |  |
| FXC40 | int | NO |  | 0 |  |
| FXC41 | int | NO |  | 0 |  |
| FXC42 | int | NO |  | 0 |  |
| FXC43 | int | NO |  | 0 |  |
| FXC44 | int | NO |  | 0 |  |
| FXC45 | int | NO |  | 0 |  |
| FXC46 | int | NO |  | 0 |  |
| FXC47 | int | NO |  | 0 |  |
| FXC48 | int | NO |  | 0 |  |
| FXC49 | int | NO |  | 0 |  |
| FXC50 | int | NO |  | 0 |  |
| FXD01 | int | NO |  | 0 |  |
| FXD02 | int | NO |  | 0 |  |
| FXD03 | int | NO |  | 0 |  |
| FXD04 | int | NO |  | 0 |  |
| FXD05 | int | NO |  | 0 |  |
| FXD06 | int | NO |  | 0 |  |
| FXD07 | int | NO |  | 0 |  |
| FXD08 | int | NO |  | 0 |  |
| FXD09 | int | NO |  | 0 |  |
| FXD10 | int | NO |  | 0 |  |
| FXD11 | int | NO |  | 0 |  |
| FXD12 | int | NO |  | 0 |  |
| FXD13 | int | NO |  | 0 |  |
| FXD14 | int | NO |  | 0 |  |
| FXD15 | int | NO |  | 0 |  |
| FXD16 | int | NO |  | 0 |  |
| FXD17 | int | NO |  | 0 |  |
| FXD18 | int | NO |  | 0 |  |
| FXD19 | int | NO |  | 0 |  |
| FXD20 | int | NO |  | 0 |  |
| FXD21 | int | NO |  | 0 |  |
| FXD22 | int | NO |  | 0 |  |
| FXD23 | int | NO |  | 0 |  |
| FXD24 | int | NO |  | 0 |  |
| FXD25 | int | NO |  | 0 |  |
| FXD26 | int | NO |  | 0 |  |
| FXD27 | int | NO |  | 0 |  |
| FXD28 | int | NO |  | 0 |  |
| FXD29 | int | NO |  | 0 |  |
| FXD30 | int | NO |  | 0 |  |
| FXD31 | int | NO |  | 0 |  |
| FXD32 | int | NO |  | 0 |  |
| FXD33 | int | NO |  | 0 |  |
| FXD34 | int | NO |  | 0 |  |
| FXD35 | int | NO |  | 0 |  |
| FXD36 | int | NO |  | 0 |  |
| FXD37 | int | NO |  | 0 |  |
| FXD38 | int | NO |  | 0 |  |
| FXD39 | int | NO |  | 0 |  |
| FXD40 | int | NO |  | 0 |  |
| FXD41 | int | NO |  | 0 |  |
| FXD42 | int | NO |  | 0 |  |
| FXD43 | int | NO |  | 0 |  |
| FXD44 | int | NO |  | 0 |  |
| FXD45 | int | NO |  | 0 |  |
| FXD46 | int | NO |  | 0 |  |
| FXD47 | int | NO |  | 0 |  |
| FXD48 | int | NO |  | 0 |  |
| FXD49 | int | NO |  | 0 |  |
| FXD50 | int | NO |  | 0 |  |
| FXE01 | int | NO |  | 0 |  |
| FXE02 | int | NO |  | 0 |  |
| FXE03 | int | NO |  | 0 |  |
| FXE04 | int | NO |  | 0 |  |
| FXE05 | int | NO |  | 0 |  |
| FXE06 | int | NO |  | 0 |  |
| FXE07 | int | NO |  | 0 |  |
| FXE08 | int | NO |  | 0 |  |
| FXE09 | int | NO |  | 0 |  |
| FXE10 | int | NO |  | 0 |  |
| FXE11 | int | NO |  | 0 |  |
| FXE12 | int | NO |  | 0 |  |
| FXE13 | int | NO |  | 0 |  |
| FXE14 | int | NO |  | 0 |  |
| FXE15 | int | NO |  | 0 |  |
| FXE16 | int | NO |  | 0 |  |
| FXE17 | int | NO |  | 0 |  |
| FXE18 | int | NO |  | 0 |  |
| FXE19 | int | NO |  | 0 |  |
| FXE20 | int | NO |  | 0 |  |
| FXE21 | int | NO |  | 0 |  |
| FXE22 | int | NO |  | 0 |  |
| FXE25 | int | NO |  | 0 |  |
| FXE26 | int | NO |  | 0 |  |
| FXE27 | int | NO |  | 0 |  |
| FXE28 | int | NO |  | 0 |  |
| FXE29 | int | NO |  | 0 |  |
| FXE30 | int | NO |  | 0 |  |
| FXE31 | int | NO |  | 0 |  |
| FXE32 | int | NO |  | 0 |  |
| FXE33 | int | NO |  | 0 |  |
| FXE34 | int | NO |  | 0 |  |
| FXE35 | int | NO |  | 0 |  |
| FXE36 | int | NO |  | 0 |  |
| FXE37 | int | NO |  | 0 |  |
| FXE38 | int | NO |  | 0 |  |
| FXE39 | int | NO |  | 0 |  |
| FXE40 | int | NO |  | 0 |  |
| FXE41 | int | NO |  | 0 |  |
| FXE42 | int | NO |  | 0 |  |
| FXE43 | int | NO |  | 0 |  |
| FXE44 | int | NO |  | 0 |  |
| FXE45 | int | NO |  | 0 |  |
| FXE46 | int | NO |  | 0 |  |
| FXE47 | int | NO |  | 0 |  |
| FXE48 | int | NO |  | 0 |  |
| FXE49 | int | NO |  | 0 |  |
| FXE50 | int | NO |  | 0 |  |
| FXKEY | varchar(36) | NO | MUL |  |  |
| FXICODPRV | varchar(30) | NO |  |  |  |
| FXALM | varchar(5) | NO |  |  |  |
| FXCDNUM | tinyint unsigned | NO |  | 0 |  |
| FXZONA | varchar(2) | NO |  |  |  |
| FXE23 | int | NO |  | 0 |  |
| FXE24 | int | NO |  | 0 |  |
| FXICOD1 | varchar(13) | NO |  |  |  |
| FXICOD2 | varchar(13) | NO |  |  |  |
| FXICOD3 | varchar(13) | NO |  |  |  |
| FXPRV | varchar(6) | NO |  |  |  |
| FXICORRMIN1 | varchar(3) | NO |  |  |  |
| FXICORRMIN2 | varchar(3) | NO |  |  |  |
| FXICORRMIN3 | varchar(3) | NO |  |  |  |
| FXICORRMAX1 | varchar(3) | NO |  |  |  |
| FXICORRMAX2 | varchar(3) | NO |  |  |  |
| FXICORRMAX3 | varchar(3) | NO |  |  |  |
| FXICOD4 | varchar(3) | NO |  |  |  |
| FXICORRMIN4 | varchar(3) | NO |  |  |  |
| FXICORRMAX4 | varchar(3) | NO |  |  |  |
| FXFAM | varchar(16) | NO |  |  |  |
| FXUM1 | varchar(2) | NO |  |  |  |
| FXUM2 | varchar(2) | NO |  |  |  |
| FXUM3 | varchar(2) | NO |  |  |  |
| FXACTIVO | varchar(1) | NO |  |  |  |
| FXORD1 | int | NO |  | 0 |  |
| FXORD2 | int | NO |  | 0 |  |
| FXORD3 | int | NO |  | 0 |  |
| FXORD4 | int | NO |  | 0 |  |
| FXORD5 | int | NO |  | 0 |  |
| FXORD6 | int | NO |  | 0 |  |
| FXORD7 | int | NO |  | 0 |  |
| FXDESCTO | tinyint unsigned | NO |  | 0 |  |
| FXA51 | int | NO |  | 0 |  |
| FXA52 | int | NO |  | 0 |  |
| FXB51 | int | NO |  | 0 |  |
| FXB52 | int | NO |  | 0 |  |
| FXC51 | int | NO |  | 0 |  |
| FXC52 | int | NO |  | 0 |  |
| FXD51 | int | NO |  | 0 |  |
| FXD52 | int | NO |  | 0 |  |
| FXF01 | int | NO |  | 0 |  |
| FXF02 | int | NO |  | 0 |  |
| FXF03 | tinyint unsigned | NO |  | 0 |  |
| FXF04 | int | NO |  | 0 |  |
| FXF05 | int | NO |  | 0 |  |
| FXF06 | int | NO |  | 0 |  |
| FXF07 | int | NO |  | 0 |  |
| FXF08 | int | NO |  | 0 |  |
| FXF09 | int | NO |  | 0 |  |
| FXF10 | int | NO |  | 0 |  |
| FXF11 | int | NO |  | 0 |  |
| FXF12 | int | NO |  | 0 |  |
| FXF13 | int | NO |  | 0 |  |
| FXF14 | int | NO |  | 0 |  |
| FXF15 | int | NO |  | 0 |  |
| FXF16 | int | NO |  | 0 |  |
| FXF17 | int | NO |  | 0 |  |
| FXF18 | int | NO |  | 0 |  |
| FXF19 | int | NO |  | 0 |  |
| FXF20 | int | NO |  | 0 |  |
| FXF21 | int | NO |  | 0 |  |
| FXF22 | int | NO |  | 0 |  |
| FXF23 | int | NO |  | 0 |  |
| FXF24 | int | NO |  | 0 |  |
| FXF25 | int | NO |  | 0 |  |
| FXF26 | int | NO |  | 0 |  |
| FXF27 | int | NO |  | 0 |  |
| FXF28 | int | NO |  | 0 |  |
| FXF29 | int | NO |  | 0 |  |
| FXF30 | int | NO |  | 0 |  |
| FXF31 | int | NO |  | 0 |  |
| FXF32 | int | NO |  | 0 |  |
| FXF33 | int | NO |  | 0 |  |
| FXF34 | int | NO |  | 0 |  |
| FXF35 | int | NO |  | 0 |  |
| FXF36 | int | NO |  | 0 |  |
| FXF37 | int | NO |  | 0 |  |
| FXF38 | int | NO |  | 0 |  |
| FXF39 | int | NO |  | 0 |  |
| FXF40 | int | NO |  | 0 |  |
| FXF41 | int | NO |  | 0 |  |
| FXF42 | int | NO |  | 0 |  |
| FXF43 | int | NO |  | 0 |  |
| FXF44 | int | NO |  | 0 |  |
| FXF45 | int | NO |  | 0 |  |
| FXF46 | int | NO |  | 0 |  |
| FXF47 | int | NO |  | 0 |  |
| FXF48 | int | NO |  | 0 |  |
| FXF49 | int | NO |  | 0 |  |
| FXF50 | int | NO |  | 0 |  |
| FXA00 | int | NO |  | 0 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| FXKEY | NO | 1 | FXKEY |
| FXSEQ | YES | 1 | FXSEQ |
| PRIMARY | YES | 1 | FXSEQ |

## fxml

- Engine: InnoDB
- Estimated rows: 162081
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| XMLSEQ | int | NO | PRI |  | auto_increment |
| XMLTIPO | varchar(2) | NO |  |  |  |
| XMLUUID | varchar(36) | NO | MUL |  |  |
| XMLRFC | varchar(15) | NO |  |  |  |
| XMLNUESTRO | tinyint unsigned | NO |  | 0 |  |
| XMLIMPORTE | decimal(18,2) | NO |  | 0.00 |  |
| XMLFECHA | date | NO |  | 1900-12-31 |  |
| XMLPOINTER | varchar(31) | NO |  |  |  |
| XMLSERIE | varchar(20) | NO |  |  |  |
| XMLFOLIO | varchar(20) | NO |  |  |  |
| XMLDESCR | varchar(25) | NO |  |  |  |
| XMLMCIA | tinyint unsigned | NO |  | 0 |  |
| XMLNOMBRE | varchar(35) | NO |  |  |  |
| XMLDNUM | varchar(13) | NO | MUL |  |  |
| XMLRFCOK | tinyint unsigned | NO |  | 0 |  |
| XMLTIPOC | decimal(18,8) | NO |  | 0.00000000 |  |
| XMLUNUSED1 | int | NO |  | 0 |  |
| XMLVERNOM | decimal(18,2) | NO |  | 0.00 |  |
| XMLARCHIVADO | tinyint unsigned | NO |  | 0 |  |
| XMLEXPRESS | tinyint unsigned | NO |  | 0 |  |
| XMLCOPBASEQ | int | NO |  | 0 |  |
| XMLCOPCONS | int | NO |  | 0 |  |
| XMLCOMMETODO | varchar(3) | NO |  |  |  |
| XMLCTAPREDIAL | varchar(10) | NO |  |  |  |
| XMLCOPUUID | varchar(36) | NO | MUL |  |  |
| XMLPORVALIDAR | tinyint unsigned | NO |  | 0 |  |
| XMLFORMAPAGO | varchar(2) | NO |  |  |  |
| XMLFECHAPAGO | date | NO |  | 1900-12-31 |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | XMLSEQ |
| XMLCOPUUID | NO | 1 | XMLCOPUUID |
| XMLDNUM | NO | 1 | XMLDNUM |
| XMLSEQ | YES | 1 | XMLSEQ |
| XMLUUID | NO | 1 | XMLUUID |

## fyg

- Engine: InnoDB
- Estimated rows: 151990
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| YGSEQ | int | NO | PRI |  | auto_increment |
| YGKEY | varchar(47) | NO | MUL |  |  |
| YGDAT | varchar(32767) | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| PRIMARY | YES | 1 | YGSEQ |
| YGKEY | NO | 1 | YGKEY |
| YGSEQ | YES | 1 | YGSEQ |

## g_posnum

- Engine: InnoDB
- Estimated rows: 0
- Comment: N/A

| Column | Type | Null | Key | Default | Extra |
|---|---|---|---|---|---|
| G_POSNUM_SEQ | int | NO | PRI |  | auto_increment |
| G_POSNUM_REFERENCIA | varchar(15) | NO |  |  |  |
| G_POSNUM_DNUM | varchar(9) | NO |  |  |  |
| G_POSNUM_FECHA | datetime | NO |  | 1900-12-31 00:00:00 |  |
| G_POSNUM_OTROS | varchar(50) | NO |  |  |  |
| G_POSNUM_SCRIPT | longtext | NO |  |  |  |

| Index | Unique | Seq | Column |
|---|---|---|---|
| G_POSNUM_SEQ | YES | 1 | G_POSNUM_SEQ |
| PRIMARY | YES | 1 | G_POSNUM_SEQ |
