# Atelier de Lujo Pro — Jewelry Repair Management

Repositorio de especificación funcional y técnica para **Atelier de Lujo Pro**, un SaaS B2B multi-tenant para talleres de joyería que atienden múltiples joyerías minoristas.

## Estado del repositorio
Este repositorio está preparado como **base documental** para arrancar un nuevo proyecto de app (cliente + panel taller) con flujo correcto centrado en solicitudes del cliente y operación del taller.

## Documentación principal
- [`docs/00-system-prompt-completo.md`](docs/00-system-prompt-completo.md): especificación maestra consolidada.
- [`docs/01-resumen-ejecutivo.md`](docs/01-resumen-ejecutivo.md): visión de producto, alcance y propuesta de valor.
- [`docs/02-catalogo-servicios-precios.md`](docs/02-catalogo-servicios-precios.md): catálogo completo de servicios con precios exactos del PDF.
- [`docs/03-filtrado-inteligente-y-precios.md`](docs/03-filtrado-inteligente-y-precios.md): reglas de filtrado por tipo de joya y motor de pricing.
- [`docs/04-flujos-pantallas.md`](docs/04-flujos-pantallas.md): experiencia cliente, panel taller y mensajería.
- [`docs/05-arquitectura-tecnica.md`](docs/05-arquitectura-tecnica.md): offline/sync, stack técnico y estructura de carpetas.
- [`docs/06-checklist-implementacion.md`](docs/06-checklist-implementacion.md): checklist ejecutable por módulos.
- [`docs/spec-completa-original.md`](docs/spec-completa-original.md): documento histórico anterior (legacy/reference).

## Próximo paso recomendado
Crear un repositorio de implementación con esta estructura inicial:

```txt
atelier-de-lujo/
├── apps/
│   ├── mobile-client/
│   └── mobile-workshop/
├── services/
│   └── api/
├── packages/
│   ├── shared-types/
│   └── pricing-engine/
└── docs/
```
