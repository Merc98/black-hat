# 06. Checklist de implementación

## Producto y datos
- [ ] Modelar tenants (workshop + stores).
- [ ] Definir entidades de request, quote, order, message, service, material.
- [ ] Cargar catálogo completo con precios PDF y flags de estimación.

## Filtrado inteligente
- [ ] Definir tabla de mapeo `jewelry_type -> service_category`.
- [ ] Aplicar filtro en request creation (cliente).
- [ ] Aplicar filtro en service selection (taller).
- [ ] Agregar tests de no-regresión por tipo de joya.

## Pricing engine
- [ ] Multiplicador global.
- [ ] Multiplicadores por material.
- [ ] Overrides por servicio.
- [ ] Tiers de volumen (stone tightening).
- [ ] Cálculo en centavos + redondeo consistente.

## Cliente app
- [ ] Landing toggleable.
- [ ] Guest mode con solicitud local.
- [ ] Dashboard cliente con métricas y órdenes.
- [ ] Flujo nuevo request en 3 pasos.
- [ ] Order detail con aprobación/rechazo.

## Taller app
- [ ] Dashboard operativo.
- [ ] Bandeja de Client Requests.
- [ ] Conversión request -> order con quote.
- [ ] Gestión de estados y notas internas.
- [ ] CRUD de servicios/materiales/clientes.

## Mensajería y offline
- [ ] Thread por orden con notas internas ocultas al cliente.
- [ ] Cola de mensajes offline.
- [ ] Auto-sync y resolución de conflictos.
- [ ] Unread indicators en lista y tabs.

## Release readiness
- [ ] Seed inicial de materiales y multipliers.
- [ ] Backups de base local y remota.
- [ ] Métricas de errores y performance.
- [ ] Checklist QA end-to-end.
