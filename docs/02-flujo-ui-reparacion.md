# 02. Flujo UI de reparación

## Flujo obligatorio
1. Captura de foto (obligatoria)
2. Clasificación de tipo de joya
3. Panel de servicios con carrusel
4. Selección de servicio + opciones
5. Servicios agregados por pieza
6. Resumen final de pedido

## Reglas funcionales críticas
- Sin foto no se puede continuar.
- Los servicios dependen del tipo de joya.
- Se permite repetir el mismo servicio con diferentes opciones.
- Cada línea se puede eliminar individualmente.
- El subtotal por pieza se calcula automáticamente.

## Mockups ASCII
Este módulo conserva exactamente los mockups en la versión completa:
- Login/Registro
- Dashboard
- Menú principal
- Flujo 1 a 6 de nueva reparación

📌 Ver detalle literal en: [`spec-completa-original.md`](spec-completa-original.md).

## Interacciones UX destacadas
- Panel deslizable para categorías.
- Carrusel horizontal manual con rotación cíclica.
- Orden de categorías por porcentaje de uso.
- Indicadores de precio unitario y total línea en tiempo real.

## Múltiples piezas por orden
Después de cerrar servicios de la pieza actual:
- Opción para agregar otra pieza al mismo pedido.
- Reinicio del flujo desde captura de foto.
- Consolidación en resumen final antes de confirmar.
