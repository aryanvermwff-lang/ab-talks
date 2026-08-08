# Project Task Plan (B.L.A.S.T. Protocol)

## Current Status: Phase 5 (Trigger / Ready)

---

### 🟢 Protocol 0: Initialization & Setup
- [x] Initialize memory files (`task_plan.md`, `findings.md`, `progress.md`, `gemini.md`, `claude.md`)
- [x] Present Discovery Questions to user
- [x] Receive user answers & project requirements
- [x] Define JSON Data Schemas in `gemini.md` (5 schemas confirmed)
- [x] Conduct external research (SaaS patterns, student UX, tech stack)
- [x] Identify value-add feature ("Night Owl Mode")

---

### 🏗️ Phase 1: B - Blueprint (Vision & Logic)
- [x] Establish North Star & core goals
- [x] Map integrations & verify source of truth (mocked JSON, no live APIs)
- [x] Specify delivery payload (3 routes, 390px + desktop)
- [x] Define behavioral invariants (tone, negative states, no auth)
- [x] Finalize tech stack (Vite + React + React Router + Vanilla CSS)
- [x] Absorb ABTalks brand guidelines + NYC reference screenshots
- [x] Create Implementation Plan artifact (Blueprint v2 — brand-aligned)
- [x] Gain user approval on Blueprint ✅
- [x] Add AI Chatbot component to plan (API key ready for future plug-in)

---

### ⚡ Phase 2: L - Link (Connectivity)
- [x] Mock data JSON file established per confirmed schemas (`src/data/mockData.js`)
- [x] Verified mock data integrity against all 5 schemas
- [x] Netlify SPA fallback configured (`public/_redirects`)

---

### ⚙️ Phase 3: A - Architect (The 3-Layer Build)
- [x] Initialize Vite + React project with React Router v7
- [x] Set up React Router with 3 routes (`/`, `/dashboard`, `/day/:id`)
- [x] Create design system (`index.css` with ABTalks brand tokens)
- [x] Build Landing Page (`/`) — LIGHT MODE, NYC-style editorial
  - [x] Hero section (bold headline, yellow CTA, student imagery)
  - [x] Feature cards (01-04 numbered grid)
  - [x] Track selection (4 track cards with hero images)
  - [x] Comparison section (Traditional vs ABTalks path)
  - [x] FAQ accordion
  - [x] Final CTA + footer
- [x] Build Dashboard (`/dashboard`) — DARK MODE, Late-Night Sandbox
  - [x] Layout shell (mobile bottom nav + desktop sidebar)
  - [x] Streak card (hero metric + fire animation)
  - [x] Today's task card
  - [x] 30-day heatmap grid
  - [x] Badge shelf
  - [x] Activity feed
  - [x] Community board
- [x] Build Day View (`/day/:id`) — DARK MODE
  - [x] Day header + status badge
  - [x] Task details + learning objectives
  - [x] Submission summary & simulated form
  - [x] Reflection + mood display
  - [x] XP earned + navigation arrows
- [x] Build AI Chatbot component (`AIChatbot.jsx`)
  - [x] Floating chat button (bottom-right)
  - [x] Chat drawer/modal with message history
  - [x] Contextual awareness (knows current day/task/streak/night owl)
- [x] Implement Night Owl Mode hook (`useNightOwl.js`)
- [x] Implement responsive layout (390px mobile-first → desktop SaaS)
- [x] Handle negative states (Day 0, no streak, missed day, empty profile)

---

### ✨ Phase 4: S - Stylize (Refinement & UI)
- [x] Apply premium CSS (gradients, glassmorphism, micro-animations)
- [x] Typography (Inter 900 for headlines, JetBrains Mono for code)
- [x] Brand color palette (light landing, dark dashboard, track neon accents)
- [x] Yellow CTA buttons (#FFD600) matching NYC style
- [x] Numbered badges, hand-drawn doodle annotations
- [x] Polish all empty/error/loading states

---

### 🛰️ Phase 5: T - Trigger (Deployment Ready)
- [x] Build production bundle (`npm run build` — 0 errors)
- [x] Verify all 3 routes at 390px and desktop via browser subagent
- [x] Tested AI Chatbot query and responses
- [x] Maintenance Log updated in `gemini.md`
