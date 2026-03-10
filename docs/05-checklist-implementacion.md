# 05. Checklist de implementación

## Bloques funcionales

### 🔐 Autenticación y estructura
- [ ] Login/registro para talleres
- [ ] Dashboard post-login
- [ ] Navegación principal
- [ ] Configuración del taller
- [ ] Logout seguro

### 📸 Flujo de captura
- [ ] Foto obligatoria
- [ ] Generación automática de `piece_id`
- [ ] Almacenamiento original + thumbnail
- [ ] Bloqueo de avance sin foto

### 🏷️ Clasificación
- [ ] Tipo de joya (6 opciones)
- [ ] Filtrado de servicios por tipo
- [ ] Preview de foto persistente

### 🎡 Interfaz de servicios
- [ ] Panel deslizable
- [ ] Carrusel de categorías
- [ ] Orden por uso
- [ ] Rotación cíclica
- [ ] Glassmorphism

### ⚙️ Servicios
- [ ] Selectores dinámicos
- [ ] Cálculo de precio en tiempo real
- [ ] Opciones por servicio
- [ ] Cantidad +/-

### ✨ Multi-selección
- [ ] Múltiples servicios por pieza
- [ ] Repetición del mismo servicio con opciones distintas
- [ ] Eliminación por línea
- [ ] Subtotal automático por pieza

### 🧠 Eliminación inteligente
- [ ] Detectar servicios no aplicables
- [ ] Alertar y limpiar líneas inválidas
- [ ] Sugerir alternativas

### 📦 Múltiples piezas por orden
- [ ] Agregar pieza adicional
- [ ] Reiniciar flujo por pieza
- [ ] Consolidar resumen final

### 🧾 Recibos
- [ ] Recibo cliente sin totales globales
- [ ] Ticket taller con totales y trazabilidad

### 📈 Tracking
- [ ] Estados de ciclo completo
- [ ] Historial con responsable y timestamp

## Flujo operativo final
1. Login/registro
2. Nueva reparación
3. Reparación en curso
4. Entrega
5. Gestión y reportes

📌 Flujo expandido y textos completos: [`spec-completa-original.md`](spec-completa-original.md).
