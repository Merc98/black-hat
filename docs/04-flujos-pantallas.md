# 04. Flujos de usuario y pantallas

## 6. Cliente (detallado)

### 6.1 Guest / no autenticado
- Landing con news feed (si está activa).
- Si está inactiva: login simple.
- Guest puede crear solicitud local offline y luego convertirla en orden real.

### 6.2 Cliente autenticado — Dashboard
- Header con tienda y fecha.
- Métricas: Awaiting Quote, In Process, Ready for Pickup, Pending Payment.
- Lista de órdenes recientes con fotos, estado y badge de mensajes.
- CTA: New Repair Request.

### 6.3 Nueva solicitud (multi-step)
1. Jewelry Type & Material.
2. Describe Issue (texto requerido + hasta 3 fotos).
3. Review & Submit.

Estado inicial tras envío: `pending workshop review`.

### 6.4 Order detail cliente
- Foto de pieza (tomada por taller).
- Número de orden y estado.
- Precio final cuando exista.
- Fecha y expiración de cotización.
- Chat y acciones (Approve/Reject, Track Progress, Mark as Collected).

## 7. Panel de taller

### 7.1 Dashboard
- KPIs: total orders, pending requests, in repair, ready, revenue.
- Órdenes recientes cross-store.
- Sección de solicitudes nuevas de clientes.

### 7.2 Client Requests
Cada item muestra:
- Tienda
- Fecha
- Tipo/material
- Descripción
- Thumbnails
- Acciones: View Details / Reject

En View Details:
- Notas internas
- Ajuste de material
- Selección de servicios (filtrada por tipo)
- Generar cotización y convertir a orden

### 7.3 Order Detail taller (tabs)
- Details
- Messages
- Internal Notes

En Details:
- Área de selección de servicios por carouseles filtrados
- Cart summary
- Botón Generate Quote

### 7.4 Pantallas admin
- Service Catalog Management
- Pricing Management
- Clients Management
- Site Settings

## 8. Mensajería
- Thread por orden.
- `sender`: workshop/client.
- `isInternal`: solo visible en taller.
- Cola offline con icono de reloj.
- Indicadores unread (dot/badge).
