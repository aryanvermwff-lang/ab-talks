# Project Constitution & State Tracking (`claude.md`)

## 1. Project Identity
**Name**: 30DaysOfCode — Student Challenge Platform
**Type**: Mobile-first SaaS web app (also fully functional on desktop)
**Target Audience**: Indian college students participating in a 30-day coding challenge

## 2. Architectural Invariants
- **A.N.T. 3-Layer Architecture**:
  - **Layer 1: Architecture (`architecture/`)**: Technical SOPs in Markdown.
  - **Layer 2: Navigation**: Reasoning, decision-making, and routing.
  - **Layer 3: Tools (`tools/`)**: Deterministic Python scripts.
- **Directories**:
  - `.tmp/`: Intermediates, scraped data, logs.
  - `tools/`: Atomic tools.
  - `architecture/`: SOPs.

## 3. Behavioral Rules
- Follow the B.L.A.S.T. protocol strictly.
- Mobile-first at 390px, fully responsive to desktop.
- No authentication, no live APIs, no production database.
- Mocked JSON data is the single source of truth.
- Supportive tone; graceful handling of negative states.

## 4. Current State
- **Protocol 0**: ✅ Complete
- **Phase 1 (Blueprint)**: 🔄 In Progress — Discovery answered, schemas defined, awaiting blueprint approval
- **Phase 2 (Link)**: ⏳ Pending
- **Phase 3 (Architect)**: ⏳ Pending
- **Phase 4 (Stylize)**: ⏳ Pending
- **Phase 5 (Trigger)**: ⏳ Pending

## 5. Data Schemas
*See `gemini.md` for confirmed JSON Data Schemas.*

## 6. Route Map
```
/           → Landing Page
/dashboard  → Student Dashboard
/day/:id    → Day Detail View
```
