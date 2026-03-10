TALLERES DE JOYERÍA

## 🎯 CONTEXTO Y USUARIOS
- **Aplicación EXCLUSIVA** para talleres de joyería (NO para clientes finales)
- **Usuario:** Joyero/tallerista que YA TIENE la pieza físicamente en el taller
- **Modelo:** Pago a la entrega (no presupuestos con validez)
- **Flujo comienza** cuando la joya está físicamente presente

## 🔐 PANTALLA INICIAL - LOGIN/REGISTRO
┌─────────────────────────────────────────┐
│            JOYERÍA [LOGO]               │
│          Gestión de Reparaciones        │
├─────────────────────────────────────────┤
│                                         │
│  Correo:                                │
│  ┌─────────────────────────┐           │
│  │                         │           │
│  └─────────────────────────┘           │
│                                         │
│  Contraseña:                            │
│  ┌─────────────────────────┐           │
│  │ •••••••••••••••••••••• │           │
│  └─────────────────────────┘           │
│                                         │
│        [INICIAR SESIÓN]                 │
│                                         │
│  ──────────────────────────             │
│                                         │
│  ¿Primera vez? [CREAR CUENTA]          │
│                                         │
└─────────────────────────────────────────┘

## 🏠 PANTALLA PRINCIPAL (POST-LOGIN)
┌─────────────────────────────────────────┐
│  Hola, [Nombre Taller]                 │
│  Hoy: [Fecha]                          │
├─────────────────────────────────────────┤
│                                         │
│  📊 ESTADO ACTUAL                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ En rep. │ │ Listas  │ │ Pend.   │   │
│  │   12    │ │   5     │ │   8     │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  🚀 ACCIONES RÁPIDAS                    │
│  ┌────────────────────────────────────┐ │
│  │  ➕ NUEVA REPARACIÓN                │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  📋 VER PENDIENTES                 │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  ✅ LISTAS HOY                     │ │
│  └────────────────────────────────────┘ │
│                                         │
│  📅 RECIENTES                          │
│  • Anillo - María G. (14:30)           │
│  • Collar - Juan P. (13:45)            │
│                                         │
└─────────────────────────────────────────┘

## 📱 MENÚ PRINCIPAL
┌─────────────────────────────────────────┐
│  [Foto] [Nombre Taller]                │
│  contacto@taller.com                   │
├─────────────────────────────────────────┤
│                                         │
│  🏠 INICIO                             │
│  ➕ NUEVA REPARACIÓN                    │
│  📋 TODAS LAS ÓRDENES                  │
│  ⚙️ EN REPARACIÓN                      │
│  ✅ LISTAS PARA ENTREGAR               │
│  📤 ENTREGADAS                         │
│  📊 ESTADÍSTICAS                       │
│  👤 CLIENTES                           │
│  💼 INVENTARIO                         │
│  ⚙️ CONFIGURACIÓN                      │
│  ❓ AYUDA                               │
│  🚪 CERRAR SESIÓN                      │
│                                         │
└─────────────────────────────────────────┘

## 🔄 FLUJO OBLIGATORIO DE REPARACIÓN

### 1. CAPTURA DE FOTO (OBLIGATORIA)
┌─────────────────────────────────────────┐
│           NUEVA PIEZA                   │
├─────────────────────────────────────────┤
│                                         │
│  📸 TOMA FOTO DE LA JOYA               │
│                                         │
│  ┌─────────────────────────┐           │
│  │    [VISTA PREVIA]       │           │
│  │                         │           │
│  └─────────────────────────┘           │
│                                         │
│  [📷 TOMAR FOTO]  [🖼️ SUBIR]           │
│                                         │
│  ⚠️ Sin foto no se puede continuar     │
│                                         │
│  ID: P-YYYYMMDD-#### (auto-generado)   │
│                                         │
│        [CANCELAR] [CONTINUAR →]        │
│                                         │
└─────────────────────────────────────────┘

### 2. CLASIFICACIÓN DE TIPO
┌─────────────────────────────────────────┐
│         ¿QUÉ TIPO DE JOYA ES?          │
├─────────────────────────────────────────┤
│                                         │
│  [Foto preview 150x150px]              │
│  ID: P-20250120-0001                   │
│                                         │
│  SELECCIONA TIPO:                       │
│  ⭕ ANILLO                              │
│  ⭕ COLLAR / CADENA                     │
│  ⭕ PULSERA                             │
│  ⭕ ARETE                               │
│  ⭕ RELOJ                               │
│  ⭕ OTRO                                │
│                                         │
│        [← ATRÁS] [CONTINUAR →]         │
│                                         │
└─────────────────────────────────────────┘

### 3. PANEL DE SERVICIOS CON CARRUSEL ROTATORIO

**VISTA CERRADA:**
┌─────────────────────────────────────────┐
│  [Fondo: Foto blur]                     │
│                                         │
│  ┌──────────────────────┐              │
│  │  ID: P-20250120-0001 │              │
│  │  Tipo: Anillo        │              │
│  │  [Foto mini 80x80px] │              │
│  └──────────────────────┘              │
│                                         │
│  ☰ DESLIZA ↑ PARA VER CATEGORÍAS       │
│                                         │
└─────────────────────────────────────────┘

**VISTA ABIERTA (50% inferior):**
┌─────────────────────────────────────────┐
│  CATEGORÍAS PARA ANILLOS                │
│  (Orden: más usadas →)                  │
├─────────────────────────────────────────┤
│  ◀ [Ajuste Talla] [Apretar] [Puntas] ▶ │
│      60% uso      35%      20% uso     │
│                                         │
│  ◀ [Montar Piedra] [Canal] [+]      ▶   │
│       25% uso     15% uso               │
│                                         │
│  • Carrusel horizontal manual (← →)     │
│  • Orden por % de uso para ese tipo     │
│  • Rotación cíclica continua            │
│  • Glassmorphism (panel translúcido)    │
└─────────────────────────────────────────┘

### 4. SELECCIÓN DE SERVICIO CON OPCIONES
┌─────────────────────────────────────────┐
│  AJUSTE DE TALLA - OPCIONES             │
├─────────────────────────────────────────┤
│                                         │
│  MATERIAL:                              │
│  ◉ Oro Amarillo 10K    ○ Oro Blanco 10K │
│  ○ Platino            ○ Plata Sterling │
│                                         │
│  TIPO DE AJUSTE:                        │
│  ◉ Agrandar 1 talla ($16.00)            │
│  ○ Reducir ≤3mm ($10.00)                │
│  ○ Cada talla adicional ($9.00)         │
│                                         │
│  CANTIDAD: [1] -  +                     │
│                                         │
│  PRECIO UNITARIO: $16.00                │
│  TOTAL LÍNEA: $16.00                    │
│                                         │
│  [← ATRÁS] [+ AGREGAR A PIEZA]          │
│                                         │
└─────────────────────────────────────────┘

### 5. VISTA DE SERVICIOS AGREGADOS
┌──────────────────────────────────────────┐
│  SERVICIOS AGREGADOS                     │
│  Pieza: P-20250120-0001 (Anillo)        │
│  Subtotal: $76.00                        │
├──────────────────────────────────────────┤
│                                          │
│  ✓ 1. Ajuste Talla - Oro Amarillo       │
│     • Material: Oro Amarillo 10K        │
│     • Ajuste: Agrandar 1 talla          │
│     • 1 unidad | $16.00          [✕]    │
│                                          │
│  ✓ 2. Apretar Piedras                   │
│     • Opción: 4+ piedras                │
│     • 4 piedras @ $3 c/u                │
│     • $12.00                      [✕]    │
│                                          │
│  ✓ 3. Ajuste Talla - Platino            │
│     • Material: Platino                 │
│     • Ajuste: Reducir ≤3mm              │
│     • 1 unidad | $18.00          [✕]    │
│     ⚠️ Mismo servicio, opciones ≠      │
│                                          │
│  ✓ 4. Reparar Puntas                    │
│     • Tipo: Múltiples puntas            │
│     • 3 puntas @ $10 c/u                │
│     • $30.00                      [✕]    │
│                                          │
│  [+ AGREGAR OTRO SERVICIO]               │
│                                          │
│  [← ATRÁS] [AGREGAR OTRA PIEZA →]       │
│                                          │
└──────────────────────────────────────────┘

**Características:**
- ✅ Múltiples servicios por pieza
- ✅ Mismo servicio repetible con opciones diferentes
- ✅ Cada línea independiente con botón ✕ para eliminar
- ✅ Subtotal calculado automáticamente
- ✅ Eliminación inteligente: detecta servicios no aplicables

### 6. RESUMEN FINAL DE PEDIDO
┌──────────────────────────────────────────┐
│           RESUMEN DE PEDIDO              │
│           ORD-20250120-001               │
│           Fecha: 2025-01-20 14:30        │
├──────────────────────────────────────────┤
│                                          │
│  📦 PIEZA 1: P-20250120-0001             │
│  Tipo: Anillo | [Foto 80x80px]          │
│  • Ajuste Talla (Oro Amarillo)   $16.00 │
│  • Apretar Piedras (4 @ $3)       $12.00 │
│  • Ajuste Talla (Platino)         $18.00 │
│  • Reparar Puntas (3 @ $10)       $30.00 │
│  Subtotal Pieza 1: $76.00               │
│                                          │
│  📦 PIEZA 2: P-20250120-0002             │
│  Tipo: Collar | [Foto 80x80px]          │
│  • Reparar Cadena                $15.00  │
│  • Cierre (Langosta Med)         $25.00  │
│  • Montar Piedra (2 @ $35)       $70.00  │
│  Subtotal Pieza 2: $110.00              │
│                                          │
│  ──────────────────────────────────────  │
│  TOTALES (VISIBLES SOLO PARA TALLER):    │
│  Subtotal: $186.00                       │
│  Impuestos (9%): $16.74                  │
│  TOTAL FINAL: $202.74                    │
│                                          │
│  [EDITAR PIEZAS] [CONFIRMAR PEDIDO]      │
│                                          │
└──────────────────────────────────────────┘

## 🧾 SISTEMA DUAL DE RECIBOS

### RECIBO CLIENTE (ENTREGA - SIN TOTALES):
╔══════════════════════════════════════════╗
║         TALLER DE JOYERÍA [NOMBRE]       ║
║         ORDEN: ORD-20250120-001          ║
║         Fecha: 2025-01-20               ║
╠══════════════════════════════════════════╣
║                                          ║
║  CLIENTE: [Nombre Cliente]              ║
║  TEL: [Teléfono]                        ║
║                                          ║
║  🔹 PIEZA 1: Anillo                     ║
║     ID: P-20250120-0001                 ║
║                                          ║
║     SERVICIOS REALIZADOS:               ║
║     1. Ajuste de Talla                  ║
║        • Material: Oro Amarillo 10K     ║
║        • Ajuste: Agrandar 1 talla       ║
║        • Precio línea: $16.00           ║
║                                          ║
║     2. Apretar Piedras                  ║
║        • 4 piedras aseguradas           ║
║        • Precio línea: $12.00           ║
║                                          ║
║     3. Reparación de Puntas             ║
║        • 3 puntas reforzadas            ║
║        • Precio línea: $30.00           ║
║                                          ║
║  ✅ INCLUYE:                            ║
║  • Limpieza profesional                 ║
║  • Garantía 30 días en mano de obra     ║
║                                          ║
║  Firma cliente: __________              ║
║  Fecha entrega: __________              ║
║                                          ║
║  ¡Gracias por su confianza!             ║
║                                          ║
╚══════════════════════════════════════════╝

**Características Recibo Cliente:**
- ✅ Foto por pieza (mini)
- ✅ ID de pieza visible
- ✅ Lista de servicios con opciones específicas
- ✅ **Precio por línea individual**
- ❌ **NO muestra total general**
- ❌ **NO muestra subtotales**
- ❌ **NO muestra impuestos**
- ✅ Incluye garantía y servicios incluidos
- ✅ Espacio para firma y fecha de entrega

### TICKET TALLER (INTERNO - CON TODO):
╔══════════════════════════════════════════╗
║        TICKET OPERATIVO - TALLER         ║
║        ORD-20250120-001                  ║
║        Ingreso: 2025-01-20 14:30        ║
║        Técnico: Juan López              ║
║        Estado: EN REPARACIÓN            ║
╠══════════════════════════════════════════╣
║                                          ║
║  📦 PIEZA 1: P-20250120-0001            ║
║  Tipo: Anillo | [Foto 200x200px]        ║
║  Estado: En proceso | Prioridad: Normal │
║                                          ║
║  ──────────────────────────────────────  │
║  SERVICIOS + INSTRUCCIONES:              │
║  ──────────────────────────────────────  │
║                                          ║
║  1. AJUSTE TALLA - Oro Amarillo, 1 talla│
║     Precio: $16.00 | Estado: PENDIENTE   │
║     ✓ Instrucciones:                     │
║       □ Medir talla actual (6.5)        │
║       □ Marcar línea de corte (3-4mm)   │
║       □ Calentar a 650°F                │
║       □ Soldar junta                    │
║       □ Lijar y pulir                   │
║       □ Verificar talla final           │
║                                          ║
║  2. APRETAR PIEDRAS - 4 piedras         │
║     Precio: $12.00 | Estado: COMPLETADO  │
║     Técnico: Ana (16:00)                │
║     ✓ Instrucciones:                    │
║       ☑ Inspeccionar bajo lupa (10x)    │
║       ☑ Verificar movimiento            │
║       ☑ Aplicar herramienta de tensión  │
║       ☑ Revisar estabilidad             │
║       ☑ Pulir área alrededor            │
║                                          ║
║  ──────────────────────────────────────  │
║  NOTAS INTERNAS (Pieza 1):               │
║  ──────────────────────────────────────  │
║  • Cliente mencionó debilidad en junta  │
║    anterior. Revisar resistencia.       │
║                                          ║
║  HISTORIAL:                             ║
║  14:30 - Recibido (Laura)               ║
║  14:35 - Asignado a Juan López          ║
║  15:00 - En reparación                  │
║  16:00 - Piedras aseguradas (Ana)       │
║                                          ║
║  Subtotal Pieza 1: $76.00               │
║                                          ║
╠══════════════════════════════════════════╣
║  TOTALES FINALES:                        │
║  ──────────────────────────────────────  │
║  Subtotal General:        $186.00        │
║  Impuestos (9%):          $16.74         │
║  TOTAL FINAL:             $202.74        │
║                                          │
║  [ACTUALIZAR ESTADO] [AGREGAR NOTA]     │
║  [IMPRIMIR] [COMPARTIR]                 │
║                                          │
╚══════════════════════════════════════════╝

**Características Ticket Taller:**
- ✅ Foto grande por pieza
- ✅ ID completo (pieza + orden)
- ✅ Estado detallado de cada servicio
- ✅ Instrucciones paso a paso (checklist)
- ✅ Asignación a técnicos específicos
- ✅ Notas internas editables
- ✅ Historial completo con timestamps
- ✅ **TOTALES COMPLETOS con impuestos**
- ✅ Botones de acción operativa

## 📊 ESTRUCTURA DE BASE DE DATOS

```sql
-- TABLA: usuarios_taller (Login/Registro)
id | email | password_hash | nombre_taller | telefono | creado_en | actualizado_en

-- TABLA: ordenes (Pedido general)
id | orden_id (ORD-YYYYMMDD-###) | usuario_id | cliente_nombre | cliente_telefono | estado | total | creado_en | actualizado_en

-- TABLA: piezas (Cada joya individual)
id | piece_id (P-YYYYMMDD-###) | orden_id | tipo (anillo/collar/etc) | foto_url | foto_mini_url | notas_cliente | notas_internas | estado | subtotal | creado_en

-- TABLA: servicios (Líneas de servicio)
id | pieza_id | servicio_codigo | nombre | opciones_json | cantidad | precio_unitario | precio_linea | estado_servicio | completado_por | completado_en | creado_en

-- TABLA: catalogo_servicios (Precios y reglas)
codigo | categoria | nombre | descripcion | aplicable_a (JSON array) | precio_base | reglas_precio_json | activo | creado_en

-- TABLA: historial_estados (Tracking)
id | pieza_id | estado_anterior | estado_nuevo | usuario | notas | creado_en
```

⚙️ CONFIGURACIÓN DEL TALLER

┌─────────────────────────────────────────┐
│         CONFIGURACIÓN                   │
├─────────────────────────────────────────┤
│                                         │
│  👤 PERFIL DEL TALLER                  │
│  • Nombre del taller                   │
│  • Logo                                │
│  • Información de contacto             │
│  • Dirección                           │
│                                         │
│  💰 CONFIGURACIÓN FINANCIERA           │
│  • Porcentaje de impuestos             │
│  • Moneda (USD, EUR, etc.)             │
│  • Redondeo de precios                 │
│                                         │
│  🖨️ CONFIGURACIÓN DE RECIBOS          │
│  • Encabezado personalizado            │
│  • Pie de página                       │
│  • Mostrar/ocultar campos              │
│  • Firmas personalizadas               │
│                                         │
│  🔐 SEGURIDAD                          │
│  • Cambiar contraseña                  │
│  • Autenticación en dos pasos          │
│                                         │
│  📱 PREFERENCIAS                       │
│  • Notificaciones                      │
│  • Tema (claro/oscuro/auto)            │
│  • Idioma                              │
│                                         │
└─────────────────────────────────────────┘

📋 CHECKLIST DE IMPLEMENTACIÓN

🔐 AUTHENTICACIÓN Y ESTRUCTURA:

· Login/Registro para talleres (email + contraseña)
· Pantalla principal con dashboard/resumen
· Menú hamburguesa/navegación lateral
· Pantalla de configuración del taller
· Logout/cierre de sesión seguro

📸 FLUJO DE CAPTURA:

· Foto obligatoria (cámara + galería)
· Generación automática de piece_id (P-YYYYMMDD-####)
· Almacenamiento de fotos (original + thumbnail)
· Sin foto = no se avanza

🏷️ CLASIFICACIÓN:

· Selección de tipo de joya (6 opciones)
· Filtrado automático de servicios basado en tipo
· Vista previa de foto durante clasificación

🎡 INTERFAZ DE SERVICIOS:

· Panel deslizable (se abre/cierra con gesto)
· Carrusel horizontal de categorías
· Orden de categorías por % de uso para ese tipo
· Rotación cíclica (manual con flechas)
· Glassmorphism en panel (translúcido con blur)

⚙️ SELECCIÓN DE SERVICIOS:

· Selectores dinámicos por categoría
· Cálculo de precio en tiempo real
· Opciones específicas por servicio (material, tamaño, etc.)
· Cantidad ajustable con botones +/-

✨ MULTI-SELECCIÓN AVANZADA:

· Múltiples servicios por pieza
· Mismo servicio repetible con opciones diferentes
· Eliminación individual por línea (botón ✕)
· Subtotal automático por pieza

🧠 ELIMINACIÓN INTELIGENTE:

· Detección de servicios no aplicables al tipo de joya
· Alerta al usuario + eliminación automática
· Sugerencia de alternativas válidas

📦 MÚLTIPLES PIEZAS:

· Agregar nueva pieza al mismo pedido
· Reinicio de flujo (foto → clasificación → servicios)
· Resumen consolidado de todas las piezas

📊 RESUMEN Y CONFIRMACIÓN:

· Vista de resumen antes de confirmar
· Fotos mini por pieza
· Lista completa de servicios con precios
· TOTALES VISIBLES SOLO PARA TALLER (subtotal, impuestos, total final)

🧾 SISTEMA DUAL DE RECIBOS:

· Recibo Cliente:
  · Sin totales generales
  · Solo precios por línea individual
  · Foto mini por pieza
  · Información de garantía
  · Espacio para firma
· Ticket Taller:
  · Con totales completos
  · Instrucciones paso a paso por servicio
  · Estado de cada servicio
  · Asignación a técnicos
  · Notas internas editables
  · Historial completo con timestamps
  · Botones de acción (actualizar, imprimir, etc.)

🗃️ BASE DE DATOS:

· 6 tablas principales con relaciones correctas
· Campos JSON para opciones flexibles (servicios)
· Índices para consultas frecuentes
· Backups automáticos

📈 TRACKING Y ESTADOS:

· Sistema de estados (Recibido → Evaluación → Reparación → Listo → Entregado)
· Historial con timestamps y usuario responsable
· Actualización de estados desde ticket taller

🎨 DISEÑO Y UI/UX:

· Glassmorphism implementado correctamente
· Paleta neutral profesional
· Iconografía consistente (SVG + PNG escalados)
· Animaciones suaves en transiciones
· Responsive (móvil primero, adaptable a tablet)

⚡ FUNCIONALIDADES ADICIONALES:

· Lista de órdenes con filtros (estado, fecha, cliente)
· Búsqueda por ID de pieza/orden o nombre cliente
· Estadísticas básicas (ingresos, piezas reparadas, etc.)
· Gestión de clientes frecuentes
· Sistema de backup/exportación de datos

🎨 CONSIDERACIONES DE DISEÑO

PALETA DE COLORES:

· Primario: Azul profesional (#2C3E50)
· Secundario: Dorado elegante (#D4AF37)
· Fondo: Gris claro (#F8F9FA)
· Texto: Gris oscuro (#343A40)
· Acento: Verde éxito (#28A745), Rojo alerta (#DC3545)

TIPOGRAFÍA:

· Principal: 'Inter' o 'Roboto' (legible, moderna)
· Tamaños: Jerarquía clara (títulos 24px, cuerpo 16px, detalles 14px)
· Pesos: Regular para cuerpo, Semibold para énfasis

ICONOGRAFÍA:

· Estilo: Línea delgada (stroke: 1.5-2px)
· Tamaño: Consistente (24px o 32px)
· Set completo: Cámara, Galería, Categorías, Servicios, Eliminar, Editar, Imprimir, etc.

ANIMACIONES:

· Panel deslizable: Transición suave (300ms)
· Carrusel: Desplazamiento horizontal con easing
· Botones: Feedback táctil (scale 0.95)
· Transiciones: Fade in/out entre pantallas

⚠️ CONSIDERACIONES TÉCNICAS CRÍTICAS

1. FUNCIONAMIENTO OFFLINE:

· Captura de fotos y datos sin conexión
· Sincronización automática al recuperar conexión
· Base de datos local (SQLite/IndexedDB)

2. GESTIÓN DE FOTOS:

· Compresión automática (original + thumbnail)
· Almacenamiento local + opcional en la nube
· Límite de tamaño por foto (ej: 5MB máximo)

3. RENDIMIENTO:

· Carga rápida de imágenes (lazy loading)
· Paginación en listas largas
· Optimización de consultas a BD

4. SEGURIDAD:

· Hash de contraseñas (bcrypt/scrypt)
· Tokens de sesión con expiración
· Validación de entrada de datos
· CORS configurado correctamente (si hay API)

5. BACKUP Y RECUPERACIÓN:

· Exportación automática periódica (JSON/CSV)
· Opción de backup manual
· Restauración desde backup

6. ESCALABILIDAD:

· Arquitectura modular
· Separación cliente/servidor clara
· Base de datos normalizada

🚀 FLUJO COMPLETO DEL USUARIO

1. INICIO:
   · Login/Registro → Pantalla principal (dashboard)
   · Menú de navegación disponible
2. NUEVA REPARACIÓN:
   · Tocar "➕ NUEVA REPARACIÓN"
   · Foto obligatoria → Confirmar
   · Seleccionar tipo de joya
   · Deslizar panel para ver categorías
   · Navegar carrusel (← →)
   · Seleccionar categoría → Elegir opciones
   · Agregar a pieza (puede repetir)
   · Opción: agregar otra pieza o finalizar
   · Ver resumen → Confirmar pedido
3. DURANTE LA REPARACIÓN:
   · Desde menú: "⚙️ EN REPARACIÓN"
   · Ver lista de piezas en proceso
   · Tocar pieza → Ver ticket taller
   · Actualizar estados de servicios
   · Agregar notas internas
   · Marcar servicios como completados
4. ENTREGA:
   · Desde menú: "✅ LISTAS PARA ENTREGAR"
   · Seleccionar pieza lista
   · Generar recibo cliente
   · Imprimir/firmar/entregar
   · Cambiar estado a "ENTREGADO"
5. GESTIÓN:
   · Ver estadísticas en dashboard
   · Buscar órdenes anteriores
   · Configurar taller en "⚙️ CONFIGURACIÓN"
