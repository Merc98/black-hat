# 03. Filtrado inteligente y lógica de precios

## 3.1 Mapeo servicio ↔ tipo de joya

### Rings
- Ring Sizing
- Stone Tightening
- Tips & Prongs
- Channels
- Stone Setting (round/fancy)
- 14K Head & Set

### Necklaces & Chains
- Chain & Bracelet Repair
- Clasps & End Tabs

### Bracelets
- Chain & Bracelet Repair
- Clasps & End Tabs
- Tennis Bracelet repair específico

### Earrings
- Stone Tightening (si aplica)
- Stone Setting
- Tips & Prongs (si aplica)

### Brooches/Pins
- Stone Tightening
- Stone Setting
- Prong repair

## 3.2 Regla de implementación
1. Cliente selecciona tipo de joya.
2. Cliente selecciona material.
3. El sistema filtra categorías antes de mostrar servicios, tanto en vista cliente como en panel de taller.
4. Nunca se muestran servicios no aplicables.

## 4. Pricing engine

### 4.1 Multiplicadores por material (default)
- 10KY/14KY Yellow Gold: **1.00**
- 10KW/14KW White Gold: **1.10**
- Platinum: **2.00**
- Sterling Silver: **0.70**
- 18K (all colors): **1.25**

### 4.2 Ring sizing
Para ring sizing hay precio base material-específico en catálogo.

Fórmula sugerida si aplica ajuste global:

```txt
finalPrice = service.basePrice * globalMultiplier
```

### 4.3 Servicios no material-específicos

```txt
finalPrice = service.basePrice * materialMultiplier
```

Ejemplo: Laser Solder ($15.00) en Platinum (2.00) = **$30.00**.

### 4.4 Opciones y precios por volumen
- Stone Tightening: 1-3 a $5 c/u; 4+ a $3 c/u.
- Chain Repair: incremento por cada break.
- Ring Sizing: incremento por cada talla adicional.

## 5. Capacidades de administración
- CRUD de servicios completo.
- CRUD de materiales y multiplicadores.
- Multiplicador global.
- Overrides por servicio.
- Gestión de clientes.
- Gestión de órdenes y notas internas.
- Configuración de landing pública.
