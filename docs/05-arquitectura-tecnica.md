# 05. Arquitectura técnica

## 9. Offline & Sync
- Cache local con SQLite.
- Cambios pendientes con flags de sincronización.
- Auto-sync al volver conexión.
- Banner de modo offline.
- Sync manual por pull-to-refresh.

## 10. Stack técnico recomendado
- React Native / Expo SDK 49+
- React Navigation 6 (tabs + drawer + stack)
- React Native Reanimated 3
- Zustand (estado)
- WatermelonDB o Expo SQLite (offline)
- Expo Camera / ImagePicker
- Axios con offline queue

## Estructura de carpetas (base)

```txt
atelier-de-lujo/
├── App.js
├── src/
│   ├── config/
│   ├── data/
│   ├── navigation/
│   ├── screens/
│   │   ├── auth/
│   │   ├── store/
│   │   └── workshop/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── services/
```

## Componentes clave
- ServiceCard
- CategoryCarousel
- MaterialChips
- CartSummary
- MessageThread

## Notas de implementación
- Todos los importes en centavos.
- Reglas de pricing en módulo aislado y testeable.
- Catálogo y mapping tipo↔servicio desacoplados de UI.
