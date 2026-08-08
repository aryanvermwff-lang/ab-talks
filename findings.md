# Project Findings & Discoveries

## 1. Initial Constraints & Invariants
- Execution protocol: B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger) & A.N.T. 3-Layer Architecture.
- Tools directory `tools/` execution is halted until Discovery answers are given and Data Schemas are defined in `gemini.md`.
- Intermediates belong strictly in `.tmp/`.

## 2. Discovery Answers Summary
- **North Star**: Frictionless, high-trust mobile experience converting hesitant Indian college students into committed 60-day challenge participants.
- **Integrations**: No live APIs. GitHub + LinkedIn submissions simulated in UI. No auth.
- **Source of Truth**: Mocked JSON data structures. No database.
- **Delivery Payload**: GitHub repo + live deployment URL. Routes: `/`, `/dashboard`, `/day/12`. Functional at 390px AND desktop.
- **Behavioral Rules**: Mobile-first 390px, desktop SaaS-quality. Supportive late-night tone. Graceful negative states. One value-add idea.

## 3. Brand Guidelines Analysis (ABTalks / NYC)

### Brand Identity
- **Name**: ABTalks (part of the Not Your College / NYC ecosystem)
- **Logo**: ABTalks logo in light/white text — provided as `abtalks-logo.png`
- **Mission**: Help Indian college students bypass the outdated academic system by building a "Proof of Work" portfolio in 60 days
- **Promise**: "You bring the code; we handle the visibility. Stop consuming, start shipping."
- **Values**: Execution over CGPA, Frictionless Momentum, Community-Driven

### Voice & Persona: "The Rebel Mentor"
- Anti-establishment but pro-student
- Direct & empathetic — acknowledges the Indian engineering grind
- Short, punchy, deeply encouraging copy
- Reframing failure: "logged rest day" not "failed streak"
- Never shames for missing a day

### Visual Style: "The Late-Night Sandbox"
**Key Design DNA from NYC Reference Screenshots:**
1. **Typography**: Bold, ultra-heavy display fonts (black weight) for headlines. ALL-CAPS for maximum impact. Mix of serif italics for accent words (like "MORE THAN"). Very editorial, magazine-like layout.
2. **Color Palette**:
   - Primary: Deep Blue (#1A1A6E / cobalt) for accent text and headlines
   - Highlight: Yellow (#FFD600) for badges, labels, and CTAs
   - Background: Clean white (#FFFFFF) for light sections
   - Dark surfaces: #0B0D12 background, #151821 surfaces (for dark dashboard sections)
   - Track-specific neon accents:
     - Vibe Coding Blue (#3B82F6)
     - Agentic AI Green (#10B981)
     - Full-Stack Orange (#F97316)
     - DSA Red (#EF4444)
3. **Card Design**: Clean rounded cards with subtle borders, numbered badges (01, 02, 03...) in colored squares, illustrations alongside text
4. **Layout Patterns**:
   - 2-column grids for feature cards
   - 4-column track card grids (with hero images)
   - Side-by-side comparison sections (Traditional vs NYC Path)
   - FAQ accordion with numbered items
   - Sticky yellow CTA badges ("WHY STUDENTS JOIN NYC", "START YOUR JOURNEY")
5. **Visual Elements**:
   - Hand-drawn doodle-style annotations (crowns 👑, stars ✨, arrows, sparkle effects)
   - Yellow sticky note overlays
   - Real student photography in collages
   - Tech stack icon rows beneath track cards
   - "HIRING AT" company logo rows for social proof
6. **Buttons**: Yellow solid fill CTAs with ALL-CAPS text + arrows. Secondary: white with blue border + lightning bolt icon.

### Dashboard Visual Direction (Dark Mode)
Per brand guidelines, the dashboard and inner pages use a "Late-Night Sandbox" aesthetic:
- Deep, cool dark mode (#0B0D12 background, #151821 surfaces)
- High-contrast neon indicators for tracks
- Blueprint UI: Monospace typography (JetBrains Mono) for commit hashes, route maps, data grids
- Fluid interactions: Soft glowing cursor, CSS antigravity staggered floating effects
- Mimics professional tools students already use (VS Code, Vercel, Linear)

### Landing Page Direction (Light Mode)
The NYC screenshots show the landing page uses a **bright white/light mode** with bold typography and yellow accents — this creates a high-trust, professional first impression.

**KEY INSIGHT**: The landing page (`/`) should use LIGHT MODE (matching NYC aesthetic), while `/dashboard` and `/day/:id` switch to DARK MODE (Late-Night Sandbox). This creates a powerful visual journey from "welcome/trust" to "deep work mode."

## 4. Research Findings (External)

### Modern SaaS Dashboard Patterns (2025-2026)
- High-density, low-clutter: Lead with North Star metric (current streak) at top
- Progressive disclosure: Show summaries, allow drill-downs
- Empty states: Encouraging, gamified content
- Thumb-friendly: Primary actions in bottom third for mobile
- Visual heatmaps: GitHub-style contribution grids
- Micro-interactions: Confetti, badge animations, progress rings

### Tech Stack Decision
- **Vite + React**: Lightweight, fast builds, easy static deployment
- **React Router**: Client-side routing for `/`, `/dashboard`, `/day/:id`
- **Vanilla CSS**: Full control, CSS custom properties for theming (light/dark mode switch)
- **Google Fonts**: Inter for body text + a bold display font matching NYC editorial style
- **JetBrains Mono**: Monospace for code/technical elements per brand guidelines
- **Deployment**: Vercel or Netlify (static SPA with fallback)

## 5. Value-Add Feature: "Night Owl Mode" 🦉
- Auto-activates after 10 PM IST
- Warmer color temperature, reduced contrast, gentler tone
- Late-night encouragement messages
- Quick-submit shortcuts for tired students
- Soft deadline nudges instead of aggressive countdowns
