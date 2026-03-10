# COMPLETE SYSTEM PROMPT — ATELIER DE LUJO PRO

Final Version with Full Service Catalog from PDF and Intelligent Service Filtering.

## 1. Executive Overview
Atelier de Lujo Pro is a multi-tenant SaaS platform for high-end jewelry workshops serving multiple retail jewelry stores.

Core flow:
- Stores initiate repair requests, upload photos, and track orders.
- Workshop receives requests, verifies pieces, selects services, generates quotes, and manages repair lifecycle.

Critical feature:
- Intelligent service filtering by jewelry type so only relevant services are shown.

Additional capabilities:
- Full admin control over services, pricing, materials, and settings.
- Offline support with auto-sync.
- Messaging with internal notes.
- Toggleable public landing page.
- Guest mode with local requests convertible to real orders.

## 2. Complete Service Catalog (from PDF)
Reference source: [`02-catalogo-servicios-precios.md`](02-catalogo-servicios-precios.md).

Includes categories:
- Ring Sizing (by material)
- Chain & Bracelet Repair
- Clasps & End Tabs
- Stone Tightening
- Tips & Prongs
- Channels
- Stone Setting (round / fancy)
- 14K Head & Set (round / fancy)

Missing values from PDF must be handled as estimates/admin-input.

## 3. Intelligent Service Filtering by Jewelry Type
Reference source: [`03-filtrado-inteligente-y-precios.md`](03-filtrado-inteligente-y-precios.md).

Supported jewelry types:
- ring
- necklace
- bracelet
- earring
- brooch

Filtering rule:
- Service carousels must render only categories applicable to selected type.

## 4. Pricing Logic with Material Multipliers
Reference source: [`03-filtrado-inteligente-y-precios.md`](03-filtrado-inteligente-y-precios.md).

Pricing engine combines:
- Base catalog prices
- Material multipliers
- Optional service-specific pricing/overrides
- Quantity tiers and options

## 5. Workshop Admin Capabilities
- Service catalog CRUD with type applicability, options, active toggle.
- Material CRUD with code, multiplier, color.
- Global multiplier and per-service overrides.
- Client management.
- Order management.
- Site settings (landing toggle).

## 6. Client Experience
- Guest mode + local requests.
- Dashboard with operational cards.
- Multi-step request creation.
- Order detail with quote actions and tracking.

## 7. Workshop Panel Screens
- Dashboard (cross-client stats).
- Client requests queue.
- Order detail tabs (details/messages/internal notes).
- Service catalog admin.
- Pricing management.
- Clients management.
- Site settings.

## 8. Messaging System
Per-order thread with:
- sender, text, timestamp, isInternal, read status.
- Internal notes visible only for workshop.
- Offline queue + unread indicators.

## 9. Offline and Sync Architecture
- Local SQLite cache.
- Pending flags for unsynced mutations.
- Auto sync on reconnect.
- Offline banner + manual sync.

## 10. Technical Architecture
Reference source: [`05-arquitectura-tecnica.md`](05-arquitectura-tecnica.md).

Stack:
- React Native / Expo
- React Navigation
- Reanimated
- Zustand
- SQLite / WatermelonDB
- Camera/ImagePicker
- Axios queue

## 11. Summary of Features
- Client-driven requests with photos.
- Workshop verification and quote generation.
- Intelligent service filtering.
- Complete service catalog with PDF pricing.
- Material-specific pricing engine.
- Offline-first and messaging with internal notes.
- Full admin controls for services/materials/clients/settings.
