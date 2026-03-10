# 01. Contexto del producto

## 🎯 Contexto y usuarios
- Aplicación **exclusiva** para talleres de joyería (no cliente final).
- Usuario principal: joyero/tallerista con la pieza ya recibida.
- Modelo comercial: **pago a la entrega**.
- El flujo siempre inicia cuando la joya está físicamente en el taller.

## Reglas de negocio base
- No se trabaja como cotizador con vigencia.
- El sistema se orienta a orden operativa real y trazabilidad.
- Toda pieza debe tener identificación única: `P-YYYYMMDD-####`.

## Pantalla inicial (Login/Registro)
Contiene:
- Correo
- Contraseña
- Botón de inicio de sesión
- Acción de creación de cuenta para primera vez

> Referencia visual completa: `spec-completa-original.md`.

## Pantalla principal (post-login)
Bloques clave:
- Estado actual (en reparación, listas, pendientes)
- Acciones rápidas
  - Nueva reparación
  - Ver pendientes
  - Listas hoy
- Actividad reciente

## Menú principal
Secciones mínimas:
- Inicio
- Nueva reparación
- Todas las órdenes
- En reparación
- Listas para entregar
- Entregadas
- Estadísticas
- Clientes
- Inventario
- Configuración
- Ayuda
- Cerrar sesión
