# 04. Datos y consideraciones técnicas

## Estructura de datos propuesta

Tablas principales:
- `usuarios_taller`
- `ordenes`
- `piezas`
- `servicios`
- `catalogo_servicios`
- `historial_estados`

Claves del modelo:
- `orden_id`: `ORD-YYYYMMDD-###`
- `piece_id`: `P-YYYYMMDD-###`
- `opciones_json` para variaciones de servicios sin romper esquema.

📌 Definición completa de campos: [`spec-completa-original.md`](spec-completa-original.md).

## Configuración del taller
Parámetros configurables:
- Perfil del taller (nombre, logo, contacto, dirección)
- Impuestos, moneda y redondeo
- Plantilla de recibos
- Seguridad (contraseña, 2FA)
- Preferencias (tema, idioma, notificaciones)

## Consideraciones técnicas críticas
1. Offline-first (captura y registro sin conexión)
2. Gestión y compresión de fotos (original + thumbnail)
3. Rendimiento en listas e imágenes (lazy loading + paginación)
4. Seguridad (hash robusto, sesión con expiración, validaciones)
5. Backup y recuperación (auto + manual)
6. Escalabilidad (arquitectura modular)
