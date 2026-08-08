# Project Constitution & Data Schemas (`gemini.md`)

## 1. Architectural Invariants
- **A.N.T. 3-Layer Architecture**:
  - **Layer 1: Architecture (`architecture/`)**: Technical SOPs in Markdown (Inputs, Tool Logic, Edge Cases). SOPs update *before* code.
  - **Layer 2: Navigation**: Orchestration & deterministic routing of data between SOPs and Tools.
  - **Layer 3: Tools (`tools/`)**: Deterministic, atomic, testable Python scripts.
- **Storage Locations**:
  - Intermediates & Ephemeral Data: `.tmp/`
  - Secrets & Credentials: `.env`
  - Long-term State / Schema: `gemini.md` / `claude.md`
- **Tech Stack**:
  - Vite + React (JavaScript/JSX) + React Router
  - Vanilla CSS (mobile-first responsive, 390px baseline → desktop fluid)
  - No Tailwind, no component library
  - Mocked JSON data (no database, no auth)
  - Deployable as static site (Vercel / Netlify)

## 2. Behavioral Rules
- Determinism over speed.
- Zero guessing on business logic.
- Self-annealing repair loop active on all failures.
- No script execution in `tools/` prior to schema definition and blueprint approval.
- **Tone**: Supportive companion for late-night student sessions. Never discouraging.
- **Responsive**: Mobile-first at 390px, but fully functional and SaaS-quality on laptop/desktop.
- **Negative States**: Gracefully handle Day 0, no streak, missed days, empty profile — always with encouragement.
- **No Auth**: No login/signup flows. Mocked user identity.
- **No Live APIs**: GitHub + LinkedIn submissions are simulated in UI.

## 3. Discovery Answers (Confirmed)

### North Star
Create a frictionless, high-trust mobile experience that instantly converts hesitant Indian college students into committed participants. Eliminate choice paralysis, project "we handle everything" energy, and visually guarantee that late-night phone coding translates into daily proof of work and recruiter visibility.

### Integrations
- GitHub commit submission: **simulated in UI** (no live API)
- LinkedIn post submission: **simulated in UI** (no live API)
- Authentication: **out of scope**
- No live API keys required

### Source of Truth
- Mocked JSON data structures (e.g., `src/data/mockData.js`)
- JSON acts as the single source of truth for dashboard, day views, and profile

### Delivery Payload
- GitHub repository link + live deployment URL
- Three required routes: `/`, `/dashboard`, `/day/12`
- Must be fully functional at 390px width for automated screenshots
- Must also be fully functional on laptop/desktop screens (SaaS-like)

### Behavioral Rules
- Mobile-first at 390px, desktop as full experience (not afterthought)
- Handle negative user states gracefully (Day 0, no streak, missed day, empty profile)
- At least one thoughtful value-add idea that elevates the student experience
- Supportive, warm, never discouraging tone

## 4. Brand Design System (from ABTalks Brand Guidelines + NYC Reference)

### 4.1 Color Tokens
```css
/* === LANDING PAGE (Light Mode) === */
--landing-bg: #FFFFFF;
--landing-surface: #F8F9FA;
--landing-text-primary: #0A0A0A;
--landing-text-secondary: #4A4A4A;
--landing-accent-blue: #1A1A6E;         /* Deep blue headlines */
--landing-accent-yellow: #FFD600;       /* Yellow CTAs & badges */
--landing-card-border: #E5E7EB;

/* === DASHBOARD / DAY VIEW (Dark Mode — "Late-Night Sandbox") === */
--dark-bg: #0B0D12;
--dark-surface: #151821;
--dark-surface-hover: #1C1F2E;
--dark-glass: rgba(255, 255, 255, 0.05);
--dark-border: rgba(255, 255, 255, 0.08);
--dark-text-primary: #F0F0F5;
--dark-text-secondary: #8B8FA3;
--dark-text-muted: #565B6E;

/* === Track Neon Accents === */
--track-fullstack: #F97316;             /* Full-Stack Orange */
--track-vibe-coding: #3B82F6;           /* Vibe Coding Blue */
--track-agentic-ai: #10B981;           /* Agentic AI Green */
--track-dsa: #EF4444;                  /* DSA Red */

/* === State Colors === */
--color-success: #4ADE80;
--color-warning: #FBBF24;
--color-error: #F87171;
--color-streak: #FF6B35;               /* Streak fire orange */
--color-xp: #A78BFA;                   /* XP purple */

/* === Night Owl Mode Overrides === */
--nightowl-bg: #0D0D14;
--nightowl-surface: #161822;
--nightowl-text: #E8E4D9;              /* Warm white */
--nightowl-accent: #8B7FFF;            /* Softer purple */
```

### 4.2 Typography
```css
/* Display / Headlines: Bold, editorial, ALL-CAPS */
--font-display: 'Inter', system-ui, sans-serif;
--font-weight-display: 900;            /* Black weight */

/* Body text */
--font-body: 'Inter', system-ui, sans-serif;
--font-weight-body: 400;

/* Monospace / Technical (commit hashes, code, data grids) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 2rem;      /* 32px */
--text-4xl: 2.5rem;    /* 40px */
--text-5xl: 3.5rem;    /* 56px — hero */
```

### 4.3 Spacing & Layout
```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### 4.4 Visual Patterns (from NYC Reference)
- **Yellow badge labels**: "WHY STUDENTS JOIN", "START YOUR JOURNEY" — pill shapes with yellow background
- **Numbered feature cards**: 01, 02, 03 badges in colored squares
- **Bold headline + blue accent word**: "BECOME **MORE THAN** A GRADUATE"
- **2-column comparison**: "Traditional Path vs ABTalks Path"
- **FAQ accordion**: Numbered items with expand/collapse
- **Track cards**: Hero illustration image + bold title + description + tech stack icons + "HIRING AT" logos
- **CTA buttons**: Yellow fill + ALL-CAPS + arrow icon. Secondary: white + border + lightning bolt
- **Hand-drawn doodles**: Crown, sparkle, arrow annotations (CSS pseudo-elements or SVG)

## 5. Data Schemas (JSON) — CONFIRMED

### 5.1 User Profile Schema
```json
{
  "user": {
    "id": "u_001",
    "name": "Aryan Sharma",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=aryan",
    "college": "IIT Delhi",
    "track": "Full-Stack Web Dev",
    "joinedDate": "2026-07-27",
    "bio": "Building cool stuff, one commit at a time.",
    "github": "https://github.com/aryan",
    "linkedin": "https://linkedin.com/in/aryan",
    "currentStreak": 12,
    "longestStreak": 12,
    "totalDaysCompleted": 12,
    "totalDaysInChallenge": 30,
    "rank": 42,
    "totalParticipants": 1200,
    "xp": 1450,
    "badges": [
      { "id": "b_01", "name": "First Commit", "icon": "🔥", "earnedOn": "2026-07-27" },
      { "id": "b_02", "name": "7-Day Streak", "icon": "⚡", "earnedOn": "2026-08-02" },
      { "id": "b_03", "name": "Community Star", "icon": "⭐", "earnedOn": "2026-08-05" }
    ]
  }
}
```

### 5.2 Track Schema
```json
{
  "tracks": [
    {
      "id": "t_01",
      "name": "Full-Stack Developer",
      "tagline": "Stop Consuming. Start Shipping.",
      "description": "Build and deploy real products, end-to-end.",
      "icon": "🌐",
      "color": "#F97316",
      "totalDays": 30,
      "difficulty": "Intermediate",
      "participants": 380,
      "tags": ["React", "Node.js", "MongoDB", "Express", "Vercel"]
    },
    {
      "id": "t_02",
      "name": "AI / ML Engineer",
      "tagline": "Don't Just Use AI. Build It.",
      "description": "Train, fine-tune, and ship intelligent systems.",
      "icon": "🧠",
      "color": "#10B981",
      "totalDays": 30,
      "difficulty": "Advanced",
      "participants": 290,
      "tags": ["Python", "PyTorch", "Hugging Face", "LangChain", "OpenAI"]
    },
    {
      "id": "t_03",
      "name": "Data Engineer",
      "tagline": "Power Every AI With Clean Data.",
      "description": "Build the pipelines that move the world's data.",
      "icon": "💎",
      "color": "#3B82F6",
      "totalDays": 30,
      "difficulty": "Intermediate",
      "participants": 210,
      "tags": ["SQL", "Spark", "Airflow", "Snowflake", "dbt"]
    },
    {
      "id": "t_04",
      "name": "Advanced DSA",
      "tagline": "Crack The Code. Land The Job.",
      "description": "Master data structures and algorithms for top-tier placements.",
      "icon": "⚔️",
      "color": "#EF4444",
      "totalDays": 30,
      "difficulty": "Advanced",
      "participants": 450,
      "tags": ["C++", "Java", "LeetCode", "Codeforces", "Graphs"]
    }
  ]
}
```

### 5.3 Daily Entry Schema (Day View)
```json
{
  "dayEntry": {
    "dayNumber": 12,
    "date": "2026-08-07",
    "status": "completed",
    "title": "Build a REST API with Express",
    "description": "Create a fully functional REST API with CRUD operations, middleware, and error handling.",
    "learningObjectives": [
      "Understand Express middleware pipeline",
      "Implement proper error handling",
      "Write clean route handlers"
    ],
    "submission": {
      "githubCommitUrl": "https://github.com/aryan/30days-fullstack/commit/abc123",
      "githubCommitMessage": "feat: add REST API with Express routes and middleware",
      "linkedinPostUrl": "https://linkedin.com/posts/aryan_day12-update",
      "linkedinPostPreview": "Day 12 of #30DaysOfCode — Built a REST API with Express! 🚀",
      "submittedAt": "2026-08-07T23:45:00+05:30"
    },
    "reflection": "Learned about middleware chaining — it finally clicked!",
    "mood": "confident",
    "xpEarned": 120,
    "streakAtCompletion": 12
  }
}
```

### 5.4 Dashboard Aggregate Schema
```json
{
  "dashboard": {
    "greeting": "Keep going, Aryan! 🔥",
    "motivationalQuote": "The code you write today is the portfolio that hires you tomorrow.",
    "todayTask": {
      "dayNumber": 13,
      "title": "Authentication with JWT",
      "status": "pending",
      "deadline": "2026-08-08T23:59:59+05:30"
    },
    "weeklyHeatmap": [
      { "day": "Mon", "status": "completed" },
      { "day": "Tue", "status": "completed" },
      { "day": "Wed", "status": "completed" },
      { "day": "Thu", "status": "completed" },
      { "day": "Fri", "status": "completed" },
      { "day": "Sat", "status": "completed" },
      { "day": "Sun", "status": "pending" }
    ],
    "calendarHeatmap": [
      { "date": "2026-07-27", "dayNumber": 1, "status": "completed" },
      { "date": "2026-07-28", "dayNumber": 2, "status": "completed" },
      { "date": "2026-08-07", "dayNumber": 12, "status": "completed" },
      { "date": "2026-08-08", "dayNumber": 13, "status": "pending" }
    ],
    "recentActivity": [
      { "type": "submission", "day": 12, "timestamp": "2026-08-07T23:45:00+05:30" },
      { "type": "badge", "badge": "Community Star", "timestamp": "2026-08-05T18:00:00+05:30" }
    ],
    "communityHighlights": [
      { "name": "Priya M.", "streak": 15, "track": "AI/ML" },
      { "name": "Rohan K.", "streak": 14, "track": "Full-Stack Web Dev" }
    ]
  }
}
```

### 5.5 Route Map
```
/           → Landing Page (LIGHT MODE — conversion-focused, NYC-style editorial)
/dashboard  → Student Dashboard (DARK MODE — Late-Night Sandbox)
/day/12     → Day Detail View (DARK MODE — Late-Night Sandbox)
```

---

## 6. Value-Add Feature: "Night Owl Mode" 🦉
A thoughtful addition that elevates the student experience:
- **Auto-activates** after 10 PM IST with warmer color temperature, reduced contrast, and a gentler UI tone.
- **Contextual encouragement** messages shift to late-night supportive ("You're putting in the work while others sleep. That's the difference.").
- **Quick-submit shortcuts** reduce friction for tired students — pre-filled commit messages, one-tap LinkedIn post templates.
- **Soft deadline nudges** ("2 hours left — you've got this!") instead of aggressive countdowns.

---

## 7. Maintenance Log
*(Will track system health, deployment hooks, and long-term invariants)*
