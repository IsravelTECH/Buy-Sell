# BuySellUnplugged - Premium 3D Spatial Redesign Implementation Plan

## 1. Project Overview & Objectives
**BuySellUnplugged** is a mindful peer-to-peer commerce platform designed to give buyers and sellers focus, price transparency, and intentional screen-time limits while browsing high-curation marketplace listings.

This implementation transforms the fragmented static HTML prototype into a cohesive, high-performance, responsive **3D Spatial Web Application** powered by **React, Vite, Three.js, Lucide Icons, and Tailwind CSS**.

---

## 2. Architecture & Design Principles

### Visual & Motion Language: "Obsidian Aether & Liquid Chrome"
- **Background:** Deep Void Obsidian (`#08090C`) with subtle bioluminescent gradients and chromatic noise.
- **Surface Elevation:** Multi-layer frosted glassmorphism (`backdrop-blur-xl`, `border border-white/10`, physical specular highlights).
- **Accents:** 
  - Electric Cerulean (`#0084FF`) for primary flows and system actions.
  - Liquid Gold (`#FFD700`) for Premium member privileges, badges, and subscription tokens.
  - Emerald Ray (`#00F5A0`) for savings deltas, verified seller badges, and price drop radar.
- **3D Spatial Dimension:**
  - Interactive WebGL Three.js ambient background scene with particle dust, floating geometric glyphs, and cursor-reactive lighting.
  - Interactive 3D product inspection viewport with orbit controls and lighting presets.
  - Interactive 3D tilt cards responding with realistic gyro/mouse parallax.
  - 3D Radial Focus Limit Chronograph for mindful browsing screen-time management.

---

## 3. Core Feature Specifications

### 3.1 Seamless Role & Tier Simulation
- **Free User Tier:**
  - Browse curated product catalog.
  - 2.5D interactive product inspection.
  - Paywall preview on pro features (Search filters, Unlimited Watchlist, Deal Radar, Focus Limit).
- **Premium User Tier:**
  - Unlocked 3D Model Inspector with studio lighting controls.
  - Live Marketplace Keyword & Radius Search HUD with filters.
  - Mindful Focus Limit Engine: Configure daily/weekly session limit with radial 3D countdown.
  - Real-Time Price Drop Reminders & Deal Radar.
  - Cloud Watchlist with instant save & remove.
- **Instant Tier Switcher:** Fast dev-mode & demo switcher toggle in the header navigation to test both Free and Premium perspectives without manual logout.

### 3.2 Product Catalog Data Model (`products.json`)
Consolidate all disjointed static HTML files into a structured dataset:
- `id`: unique slug
- `title`: Product name (e.g., "Vintage Leather Jacket", "Handmade Ceramic Mug")
- `price`: Current listed price
- `originalPrice`: Retail comparison price
- `condition`: Item state (e.g., "Used - Like New")
- `location`: Neighborhood & city
- `postedTime`: Relative timestamp
- `seller`: Name, avatar URL, rating, verified badge
- `description`: Rich narrative
- `images`: Multi-angle imagery
- `pickupLocation`: Coordinates / Map preview
- `category`: Apparel, Decor, Furniture, Audio

---

## 4. Phase-by-Phase Execution Roadmap

| Phase | Deliverables | Status |
| :--- | :--- | :--- |
| **Phase 1: Project Scaffolding** | Initialize modern build system (Vite + React + Tailwind + Lucide + Three.js), define design tokens, and structure clean directory tree. | In Progress |
| **Phase 2: Data Normalization** | Create unified product schema `products.json` replacing static copy-pasted files. | In Progress |
| **Phase 3: 3D Engine & Spatial Canvas** | Implement Three.js canvas background, 3D tilt physics, ambient lighting, and particle constellations. | Planned |
| **Phase 4: Component Suite** | Build Glass Navbar, Hero Portal, 3D Marketplace Grid, Product Inspection Modal, Focus Limit Drawer, and Reminder Radar. | Planned |
| **Phase 5: State & Role Management** | Implement reactive store for active user (`free` / `premium`), watchlist, reminders, and focus timer. | Planned |
| **Phase 6: Verification & QA** | Test responsive breakpoints, smooth frame-rate (60fps), interactive states, and build bundle. | Planned |

---

## 5. Verification & Performance Targets
- **Lighthouse Performance Score:** 90+
- **60 FPS** 3D WebGL rendering with automatic low-power device fallbacks.
- Fully accessible keyboard navigation and mobile touch gesture support.
