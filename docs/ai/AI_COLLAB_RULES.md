# AI Collaboration Rules

## Objetivo
Mantener consistencia entre asistentes y desarrolladores en un ERP legacy replicado desde Omnis.

## Reglas obligatorias
1. Primero validar SQL en IDE cuando sea modulo/consulta nueva o dudosa.
2. Luego implementar endpoint backend.
3. Luego conectar frontend (types -> api -> hook -> UI).
4. Mantener arquitectura por capas y clases.
5. Backend solo lectura (`SELECT/SHOW/DESCRIBE`).
6. No romper estilo visual legacy del frontend.
7. Todo cambio funcional actualiza docs (`docs/ai` + `legacy-logical-model`).

## Flujo de ramas y git
1. Trabajar en rama feature.
2. Commits pequenos, descriptivos.
3. Integrar a `develop` cuando build/typecheck este en verde.

## Flujo cuando llega un PDF Omnis
1. Resumir comportamiento funcional.
2. Registrar tablas/campos candidatos.
3. Proponer SQL.
4. Validar SQL en IDE del usuario.
5. Documentar resultado final en `OMNIS_SQL_VALIDATED.md` y `legacy-logical-model.md`.
