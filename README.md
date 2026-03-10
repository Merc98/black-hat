# Talleres de Joyería — Gestión de Reparaciones

Repositorio base para construir una app **exclusiva para talleres de joyería**.

## Objetivo del producto
Digitalizar el flujo real del taller desde que la pieza entra físicamente al local hasta la entrega final:

1. Ingreso de pieza con **foto obligatoria**.
2. Clasificación por tipo de joya.
3. Selección de servicios y opciones.
4. Seguimiento operativo durante reparación.
5. Entrega con sistema dual de recibos.

## Documentación del proyecto
Toda la especificación se reorganizó en `docs/` para que sea fácil de implementar por fases:

- [`docs/README.md`](docs/README.md): índice general de documentos.
- [`docs/01-contexto-producto.md`](docs/01-contexto-producto.md): alcance, usuarios, reglas de negocio y navegación principal.
- [`docs/02-flujo-ui-reparacion.md`](docs/02-flujo-ui-reparacion.md): flujo obligatorio y mockups ASCII de pantallas.
- [`docs/03-recibos-operacion.md`](docs/03-recibos-operacion.md): recibo cliente y ticket interno del taller.
- [`docs/04-datos-tecnico.md`](docs/04-datos-tecnico.md): esquema de base de datos + criterios técnicos.
- [`docs/05-checklist-implementacion.md`](docs/05-checklist-implementacion.md): checklist de implementación por módulos.
- [`docs/spec-completa-original.md`](docs/spec-completa-original.md): versión completa original sin fragmentar.

## Estado actual
- ✅ Documento funcional del producto definido.
- ⏳ Pendiente crear stack técnico (frontend/backend) y estructura de código.

## Siguiente paso recomendado
Crear la primera versión técnica del repositorio con:

- `apps/web` (interfaz principal para móvil/tablet).
- `services/api` (autenticación, órdenes, piezas, servicios, estados).
- `packages/shared` (tipos, validaciones, utilidades).
- `docs/adr` (decisiones de arquitectura).
