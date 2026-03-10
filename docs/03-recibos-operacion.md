# 03. Recibos y operación del taller

## Sistema dual de recibos

### 1) Recibo cliente (entrega)
Debe incluir:
- Datos del taller y orden.
- Datos del cliente.
- Piezas con ID y servicios realizados.
- Precio por línea de servicio.
- Garantía y espacio de firma.

No debe incluir:
- Total general
- Subtotales
- Impuestos

### 2) Ticket taller (interno)
Debe incluir:
- IDs de orden y pieza.
- Estado operativo.
- Servicios con estado por línea.
- Checklist de instrucciones.
- Asignación de técnico.
- Notas internas.
- Historial con timestamps.
- Totales completos con impuestos.

## Reglas operativas
- El ticket taller es el documento de trabajo interno.
- El recibo cliente es el documento de entrega/comunicación.
- Ambos deben mantenerse sincronizados por la misma orden.

📌 Formatos completos en ASCII: [`spec-completa-original.md`](spec-completa-original.md).
