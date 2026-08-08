// --- Official Social & Community Links ---
export const socialLinks = {
  discord: 'https://discord.gg/bUWygPMcT',
  youtube: 'https://youtube.com/@abtalksonai?si=dOfRYY0faglyokx_',
  linkedin: 'https://www.linkedin.com/company/abtalks-on-ai',
  instagram: 'https://www.instagram.com/abtalksonai?igsh=MXhwa2F6YWd1ZWs1Zg==',
  email: 'mailto:hello@abtalks.in',
};

// --- User Profile ---
export const userData = {
  id: 'u_001',
  name: 'Aryan Sharma',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aryan',
  college: 'IIT Delhi',
  track: 'Full-Stack Developer',
  joinedDate: '2026-07-27',
  bio: 'Building cool stuff, one commit at a time.',
  github: 'https://github.com/aryan',
  linkedin: 'https://linkedin.com/in/aryan',
  currentStreak: 12,
  longestStreak: 12,
  totalDaysCompleted: 12,
  totalDaysInChallenge: 60,
  rank: 42,
  totalParticipants: 1200,
  xp: 1450,
  badges: [
    { id: 'b_01', name: 'First Commit', icon: '🔥', earnedOn: '2026-07-27', description: 'Made your very first submission' },
    { id: 'b_02', name: '7-Day Streak', icon: '⚡', earnedOn: '2026-08-02', description: 'Maintained a 7-day streak' },
    { id: 'b_03', name: 'Community Star', icon: '⭐', earnedOn: '2026-08-05', description: 'Helped a fellow participant' },
    { id: 'b_04', name: 'Night Owl', icon: '🦉', earnedOn: null, description: 'Submit 5 days after midnight', locked: true },
    { id: 'b_05', name: '30-Day Milestone', icon: '💎', earnedOn: null, description: 'Reach the 30-day halfway point', locked: true },
    { id: 'b_06', name: 'Completionist', icon: '🏆', earnedOn: null, description: 'Complete all 60 days', locked: true },
  ],
};

// --- Tracks ---
export const tracks = [
  {
    id: 't_01',
    name: 'Full-Stack Developer',
    tagline: 'Stop Consuming. Start Shipping.',
    description: 'Build and deploy real products, end-to-end. From React frontends to Node.js backends to cloud deployment.',
    icon: '🌐',
    color: '#F97316',
    totalDays: 60,
    difficulty: 'Intermediate',
    participants: 380,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel', 'PostgreSQL', 'Redis', 'Docker', 'Next.js'],
    hiringAt: ['Flipkart', 'Zomato', 'Infosys', 'Freshworks', 'Swiggy'],
    prerequisites: 'Basic JavaScript & HTML knowledge',
    skills: ['RESTful APIs', 'Full-Stack Architecture', 'State Management', 'Database Modeling', 'CI/CD & Cloud Deployment', 'Microservices', 'Caching with Redis'],
    modules: [
      { week: 'Weeks 1–2 (Days 1–15)', title: 'Frontend Architecture & Modern React', description: 'Master component composition, custom hooks, virtual DOM internals, responsive design, and state pipelines.' },
      { week: 'Weeks 3–4 (Days 16–30)', title: 'Backend Systems & API Engineering', description: 'Build resilient Express servers, middleware pipelines, JWT auth, MongoDB schemas, and PostgreSQL relational modeling.' },
      { week: 'Weeks 5–6 (Days 31–45)', title: 'Integration, Caching & Real-time WebSockets', description: 'Connect full-stack apps with Axios interceptors, Redis caching, WebSockets for live collaboration, and background queues.' },
      { week: 'Weeks 7–8 (Days 46–60)', title: 'DevOps, Microservices & Capstone SaaS', description: 'Dockerize applications, setup GitHub Actions CI/CD, rate limiting, and ship a production-grade multi-tenant SaaS.' },
    ],
    projects: [
      'Multi-tenant SaaS Dashboard with JWT & Role Auth',
      'Real-time Collaborative Whiteboard with WebSockets',
      'Cloud Storage & Media Processing Platform with S3',
      'High-Throughput E-commerce Engine with Redis & Stripe',
    ],
  },
  {
    id: 't_02',
    name: 'AI / ML Engineer',
    tagline: "Don't Just Use AI. Build It.",
    description: 'Train, fine-tune, and ship intelligent systems. From neural networks to production ML pipelines.',
    icon: '🧠',
    color: '#10B981',
    totalDays: 60,
    difficulty: 'Advanced',
    participants: 290,
    tags: ['Python', 'PyTorch', 'Hugging Face', 'LangChain', 'OpenAI', 'vLLM', 'FastAPI', 'ChromaDB'],
    hiringAt: ['Google', 'Microsoft', 'OpenAI', 'Amazon', 'Anthropic'],
    prerequisites: 'Python proficiency & basic linear algebra',
    skills: ['PyTorch Modeling', 'LLM Fine-Tuning', 'RAG Pipelines', 'Vector Databases', 'Model Deployment via FastAPI', 'Agentic Workflows', 'vLLM Serving'],
    modules: [
      { week: 'Weeks 1–2 (Days 1–15)', title: 'Deep Learning & PyTorch Foundations', description: 'Build neural networks from scratch, backpropagation calculus, and tensor optimization.' },
      { week: 'Weeks 3–4 (Days 16–30)', title: 'Transformers & Hugging Face Ecosystem', description: 'Fine-tune open-weights LLMs (Llama 3, Mistral), tokenization pipelines, and LoRA adapters.' },
      { week: 'Weeks 5–6 (Days 31–45)', title: 'Agentic AI & Production RAG Systems', description: 'Engineer multi-step agentic workflows with LangChain, LangGraph, and hybrid vector retrieval.' },
      { week: 'Weeks 7–8 (Days 46–60)', title: 'Model Serving, Quantization & LLMOps', description: 'Deploy models using vLLM, TensorRT-LLM, Docker, and monitor hallucinations with evaluation metrics.' },
    ],
    projects: [
      'Autonomous Code Review & Refactoring Agent',
      'Enterprise Document Q&A with Multimodal RAG',
      'Fine-tuned Specialized Domain LLM using QLoRA',
      'Real-time Audio & Vision Streaming Assistant',
    ],
  },
  {
    id: 't_03',
    name: 'Data Engineer',
    tagline: 'Power Every AI With Clean Data.',
    description: "Build the pipelines that move the world's data. Master ETL, streaming, and data warehousing.",
    icon: '💎',
    color: '#3B82F6',
    totalDays: 60,
    difficulty: 'Intermediate',
    participants: 210,
    tags: ['SQL', 'Spark', 'Airflow', 'Snowflake', 'dbt', 'Kafka', 'PostgreSQL', 'DuckDB'],
    hiringAt: ['Amazon', 'Uber', 'Coinbase', 'Databricks', 'Stripe'],
    prerequisites: 'Comfortable with SQL & basic Python scripting',
    skills: ['Distributed ETL', 'Data Lakehouse Architecture', 'Streaming with Kafka', 'dbt Data Modeling', 'Airflow DAG Orchestration', 'Data Quality Testing'],
    modules: [
      { week: 'Weeks 1–2 (Days 1–15)', title: 'Advanced SQL & Dimensional Modeling', description: 'Star schema vs snowflake schemas, window functions, query execution planning, and indexing.' },
      { week: 'Weeks 3–4 (Days 16–30)', title: 'Distributed Compute with Apache Spark', description: 'PySpark transformations, partitioning strategies, delta lakes, and big data pipeline optimization.' },
      { week: 'Weeks 5–6 (Days 31–45)', title: 'Modern Orchestration & dbt Transformations', description: 'Write automated Airflow DAGs, enforce data quality with Great Expectations, and build dbt models.' },
      { week: 'Weeks 7–8 (Days 46–60)', title: 'Real-time Streaming & Cloud Warehousing', description: 'Stream clickstream data with Kafka, load into Snowflake/BigQuery, and deploy monitoring dashboards.' },
    ],
    projects: [
      'Real-time Financial Fraud Detection Stream',
      'Automated Data Lakehouse with Delta Lake & Spark',
      'E-commerce Analytics Data Warehouse with dbt & Snowflake',
      'End-to-End Orchestrated ETL with Apache Airflow',
    ],
  },
  {
    id: 't_04',
    name: 'Advanced DSA',
    tagline: 'Crack The Code. Land The Job.',
    description: 'Master data structures and algorithms for top-tier placements at FAANG and beyond.',
    icon: '⚔️',
    color: '#EF4444',
    totalDays: 60,
    difficulty: 'Advanced',
    participants: 450,
    tags: ['C++', 'Java', 'LeetCode', 'Codeforces', 'Graphs', 'Dynamic Programming', 'Tries', 'Segment Trees'],
    hiringAt: ['Google', 'Meta', 'Goldman Sachs', 'Tower Research', 'DE Shaw'],
    prerequisites: 'Basic programming in C++, Java, or Python',
    skills: ['Dynamic Programming', 'Graph Algorithms', 'Tries & Segment Trees', 'Bit Manipulation', 'System Design Patterns', 'Hard LeetCode Problem Solving'],
    modules: [
      { week: 'Weeks 1–2 (Days 1–15)', title: 'Advanced Linear Structures & Two-Pointers', description: 'Sliding window, monotonic stack/queue, binary search on answer spaces, and bit manipulation.' },
      { week: 'Weeks 3–4 (Days 16–30)', title: 'Trees, Tries & Graph Traversals', description: 'DFS/BFS variations, Dijkstra, Bellman-Ford, Union-Find, Topological Sort, and Trie optimizations.' },
      { week: 'Weeks 5–6 (Days 31–45)', title: 'Dynamic Programming Mastery', description: '1D/2D DP, Knapsack patterns, DP on Trees, DP on Subsets (Bitmasking), and Digit DP.' },
      { week: 'Weeks 7–8 (Days 46–60)', title: 'Segment Trees, Hard LeetCode & Mock Interviews', description: 'Range queries with Lazy Propagation, Hard FAANG problem patterns, and timed mock rounds.' },
    ],
    projects: [
      'Visual Algorithm Simulator with Step-by-Step State Visuals',
      'Automated Competitive Programming Contest Analyzer',
      'Graph Shortest Path & Network Flow Visualizer',
      'Curated 200-Problem FAANG Master Portfolio',
    ],
  },
];

// --- Day Titles (60 full days) ---
const dayTitles = [
  'Set Up Your Dev Environment',
  'HTML & CSS Fundamentals',
  'JavaScript Essentials',
  'Responsive Design & Flexbox',
  'Git & GitHub Workflow',
  'Introduction to React',
  'React State & Props',
  'React Hooks Deep Dive',
  'Building a Portfolio Page',
  'Introduction to Node.js',
  'Express.js Fundamentals',
  'Build a REST API with Express',
  'Authentication with JWT',
  'MongoDB & Mongoose',
  'CRUD Operations',
  'File Uploads & Cloudinary',
  'React Router & Navigation',
  'State Management with Context',
  'Form Handling & Validation',
  'API Integration (Frontend ↔ Backend)',
  'Error Handling & Centralized Logging',
  'Testing with Jest & Supertest',
  'Performance Optimization in React',
  'Docker & Containerization Basics',
  'CI/CD Pipelines with GitHub Actions',
  'Deploying to Vercel & Render',
  'Database Indexing & Query Plans',
  'WebSockets & Real-time Messaging',
  'Web Security Best Practices (CORS, CSRF)',
  '30-Day Milestone Project Review',
  'PostgreSQL Relational Data Modeling',
  'Prisma ORM & Migration Workflows',
  'Redis Caching & Session Stores',
  'Rate Limiting & IP Throttling',
  'Background Job Queues with BullMQ',
  'Email Services & Verification Flows',
  'Stripe Payment Gateway Integration',
  'Microservices Architecture Patterns',
  'API Gateway & Reverse Proxies (Nginx)',
  'GraphQL Schema & Resolver Setup',
  'Next.js App Router & SSR',
  'Server Actions & Server Components',
  'Full-Stack TypeScript Migration',
  'Zod Schema Validation & Inference',
  'Tailwind CSS Design Systems',
  'Component Library Storybook Setup',
  'End-to-End Testing with Playwright',
  'Monitoring with Prometheus & Grafana',
  'AWS S3 Bucket File Pipelines',
  'Serverless Functions on AWS Lambda',
  'Database Replication & Read Replicas',
  'Search Engine with Elasticsearch',
  'OAuth 2.0 (Google & GitHub Sign-In)',
  'Multi-tenant Architecture Setup',
  'Real-time Analytics Dashboard',
  'Code Splitting & Bundle Analyzer',
  'Load Testing with k6',
  'Zero-Downtime Blue/Green Deploys',
  'Final SaaS Capstone Polish',
  '60-Day Graduation & Portfolio Showcase',
];

const dayDescriptions = [
  'Install VS Code, Node.js, Git, and configure your development environment for the challenge.',
  'Build a semantic HTML page with modern CSS techniques including Grid and custom properties.',
  'Master ES6+ features: arrow functions, destructuring, promises, and async/await.',
  'Create a fully responsive layout using Flexbox and media queries at 390px and desktop.',
  'Learn branching, merging, pull requests, and professional Git commit message conventions.',
  'Build your first React component, understand JSX, and the virtual DOM.',
  'Master component composition, prop drilling, and state management basics.',
  'Deep dive into useState, useEffect, useRef, and custom hooks.',
  'Build and deploy a personal portfolio page using everything learned so far.',
  'Understand the Node.js event loop, modules, and the npm ecosystem.',
  'Set up an Express server with routes, middleware, and request handling.',
  'Create a fully functional REST API with CRUD operations, middleware, and error handling.',
  'Implement user authentication using JSON Web Tokens and bcrypt.',
  'Connect to MongoDB, design schemas, and perform database operations with Mongoose.',
  'Build a complete CRUD interface with React frontend and Express backend.',
  'Implement file upload functionality with Multer and Cloudinary integration.',
  'Add client-side routing with React Router, protected routes, and navigation guards.',
  'Manage global state with React Context API and useReducer.',
  'Build robust forms with validation, error messages, and user-friendly interactions.',
  'Connect your React frontend to the Express backend with Axios and handle loading states.',
  'Implement centralized error handling, logging, and user-friendly error pages.',
  'Write unit tests and integration tests for your API endpoints.',
  'Optimize React rendering, lazy loading, code splitting, and bundle analysis.',
  'Containerize your application with Docker and understand multi-stage builds.',
  'Set up automated testing and deployment with GitHub Actions.',
  'Deploy your full-stack application to Vercel with environment variables.',
  'Optimize database queries, add indexes, and implement pagination.',
  'Add real-time features using WebSockets and Socket.io.',
  'Implement CORS, rate limiting, input sanitization, and HTTPS.',
  'Celebrate the halfway mark with a polished 30-day milestone project review.',
  'Transition to relational systems with PostgreSQL schema modeling and foreign keys.',
  'Generate type-safe database queries with Prisma ORM and manage schema migrations.',
  'Accelerate high-frequency read queries with Redis in-memory key-value caching.',
  'Protect your API against abuse using Redis-backed token bucket rate limiters.',
  'Offload heavy asynchronous tasks like PDF generation and emails using BullMQ.',
  'Integrate transactional emails with Resend/Nodemailer and magic link verification.',
  'Build a subscription billing flow with Stripe webhooks and checkout sessions.',
  'Decompose monolithic servers into decoupled, independently deployable services.',
  'Configure Nginx as a reverse proxy for SSL termination and load balancing.',
  'Design efficient GraphQL query schemas and mutations to replace bloated endpoints.',
  'Build full-stack Next.js applications using the App Router and streaming SSR.',
  'Execute backend mutations directly from UI components with Next.js Server Actions.',
  'Enforce end-to-end type safety from database schemas to frontend React props.',
  'Validate runtime API payloads and form inputs using Zod type inference.',
  'Construct scalable design systems with Tailwind utility composition.',
  'Document and test isolated UI components with Storybook.',
  'Automate browser user journey testing using Playwright.',
  'Track application metrics, CPU/memory usage, and latency with Prometheus.',
  'Set up secure pre-signed URLs for direct browser-to-S3 file uploads.',
  'Deploy event-driven serverless functions with AWS Lambda and API Gateway.',
  'Scale database reads horizontally using master-replica PostgreSQL clusters.',
  'Implement fast full-text search with typo tolerance using Elasticsearch.',
  'Allow one-click sign-in via Google and GitHub OAuth 2.0 authorization code flow.',
  'Isolate tenant data securely using organization IDs and row-level security.',
  'Aggregate event streams and render real-time analytics charts.',
  'Reduce initial bundle size under 100KB with dynamic imports and vendor chunks.',
  'Simulate 10,000 concurrent virtual users to identify system bottlenecks with k6.',
  'Deploy applications with zero user downtime using blue/green deployment scripts.',
  'Fine-tune error states, micro-interactions, SEO tags, and documentation for your SaaS.',
  'Present your 60-day proof of work portfolio to the community and recruiters.',
];

export const dayEntries = Array.from({ length: 60 }, (_, i) => {
  const dayNumber = i + 1;
  const baseDate = new Date('2026-07-27');
  baseDate.setDate(baseDate.getDate() + i);
  const date = baseDate.toISOString().split('T')[0];

  let status;
  if (dayNumber <= 12) status = 'completed';
  else if (dayNumber === 13) status = 'pending';
  else status = 'locked';

  // Day 8 is a missed day for demo purposes
  if (dayNumber === 8) status = 'missed';

  const entry = {
    dayNumber,
    date,
    status,
    title: dayTitles[i] || `Day ${dayNumber} Challenge`,
    description: dayDescriptions[i] || 'Complete today\'s coding challenge and submit your work.',
    learningObjectives: [
      `Understand the core concepts of ${dayTitles[i]?.toLowerCase() || 'today\'s topic'}`,
      'Apply knowledge through hands-on coding',
      'Submit a working GitHub commit as proof of work',
    ],
    xpReward: 100 + (dayNumber * 5),
  };

  // Add submission data for completed days
  if (status === 'completed') {
    entry.submission = {
      githubCommitUrl: `https://github.com/aryan/60days-fullstack/commit/${Math.random().toString(36).substr(2, 7)}`,
      githubCommitMessage: `feat: day ${dayNumber} - ${dayTitles[i]?.toLowerCase() || 'challenge complete'}`,
      linkedinPostUrl: `https://linkedin.com/posts/aryan_day${dayNumber}-update`,
      linkedinPostPreview: `Day ${dayNumber} of #60DaysOfCode — ${dayTitles[i]} ✅🚀`,
      submittedAt: `${date}T${20 + Math.floor(Math.random() * 4)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00+05:30`,
    };
    entry.reflection = getReflection(dayNumber);
    entry.mood = getMood(dayNumber);
    entry.xpEarned = entry.xpReward;
    entry.streakAtCompletion = dayNumber <= 7 ? dayNumber : (dayNumber === 8 ? 0 : dayNumber - 1);
  }

  if (status === 'missed') {
    entry.reflection = null;
    entry.mood = null;
    entry.submission = null;
  }

  return entry;
});

function getReflection(day) {
  const reflections = [
    'Setting up the environment took longer than expected, but I feel ready to go!',
    'CSS Grid is so powerful. Flexbox + Grid = unstoppable combo.',
    'Async/await finally clicked. Promises make so much more sense now.',
    'Building responsive layouts at 390px is tricky but satisfying.',
    'Git branching workflow is something I wish I learned earlier.',
    'React feels magical. Components are such a clean abstraction.',
    'Props vs state — finally understand the mental model.',
    null, // missed day
    'Portfolio is live! Feels amazing to have something deployed.',
    'Node.js event loop is fascinating. JavaScript everywhere!',
    'Express middleware pipeline is elegant. Loved learning this.',
    'Learned about middleware chaining — it finally clicked!',
  ];
  return reflections[day - 1] || 'Great progress today. Keeping the momentum going!';
}

function getMood(day) {
  const moods = ['excited', 'confident', 'focused', 'proud', 'curious', 'amazed', 'focused', null, 'proud', 'curious', 'confident', 'confident'];
  return moods[day - 1] || 'motivated';
}

// --- Dashboard Aggregate ---
export const dashboardData = {
  greeting: 'Keep going, Aryan!',
  motivationalQuote: 'The code you write today is the portfolio that hires you tomorrow.',
  nightOwlGreeting: "You're putting in the work while others sleep. That's the difference.",
  nightOwlQuote: "Late nights build early careers. You've got this.",
  todayTask: {
    dayNumber: 13,
    title: 'Authentication with JWT',
    status: 'pending',
    deadline: '2026-08-08T23:59:59+05:30',
    description: 'Implement user authentication using JSON Web Tokens and bcrypt.',
  },
  weeklyHeatmap: [
    { day: 'Mon', status: 'completed' },
    { day: 'Tue', status: 'completed' },
    { day: 'Wed', status: 'completed' },
    { day: 'Thu', status: 'completed' },
    { day: 'Fri', status: 'completed' },
    { day: 'Sat', status: 'completed' },
    { day: 'Sun', status: 'pending' },
  ],
  recentActivity: [
    { type: 'submission', day: 12, title: 'Build a REST API with Express', timestamp: '2026-08-07T23:45:00+05:30' },
    { type: 'submission', day: 11, title: 'Express.js Fundamentals', timestamp: '2026-08-06T22:30:00+05:30' },
    { type: 'badge', badge: 'Community Star', icon: '⭐', timestamp: '2026-08-05T18:00:00+05:30' },
    { type: 'submission', day: 10, title: 'Introduction to Node.js', timestamp: '2026-08-05T21:15:00+05:30' },
    { type: 'badge', badge: '7-Day Streak', icon: '⚡', timestamp: '2026-08-02T23:00:00+05:30' },
    { type: 'submission', day: 7, title: 'React State & Props', timestamp: '2026-08-02T22:45:00+05:30' },
  ],
  communityHighlights: [
    { name: 'Priya M.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya', streak: 15, track: 'AI/ML Engineer', xp: 1890 },
    { name: 'Rohan K.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rohan', streak: 14, track: 'Full-Stack Developer', xp: 1780 },
    { name: 'Sneha R.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha', streak: 13, track: 'Data Engineer', xp: 1650 },
    { name: 'Aditya P.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aditya', streak: 12, track: 'Advanced DSA', xp: 1520 },
    { name: 'Kavya S.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavya', streak: 11, track: 'Full-Stack Developer', xp: 1410 },
  ],
};

// --- FAQ Data ---
export const faqData = [
  {
    id: 1,
    question: 'Is This Beginner Friendly?',
    answer: "Absolutely! Most students start with little or no experience. Each 60-day track is designed to guide you from fundamentals to production-grade architectures. You're never alone — the community is here to help.",
  },
  {
    id: 2,
    question: "I'm In First Year. Is It Too Early?",
    answer: "It's never too early. In fact, the students winning early are NOT waiting for college to teach them everything. Starting in first year gives you a 3-year head start over your peers.",
  },
  {
    id: 3,
    question: 'Will This Help Me Get Internships?',
    answer: "Yes. A 60-day streak of GitHub commits and LinkedIn posts creates an undeniable visible portfolio that recruiters notice. Companies want proof of work, not just a CGPA.",
  },
  {
    id: 4,
    question: 'How Are You Different From YouTube?',
    answer: "YouTube teaches you to watch. ABTalks teaches you to ship. Every single day for 60 days, you write real code, push a real commit, and build real momentum. Accountability changes everything.",
  },
  {
    id: 5,
    question: 'How Much Time Do I Need Daily?',
    answer: "Between 1-3 hours depending on the track and your pace. The challenges are designed to be completable in a focused evening session — perfect for after classes.",
  },
  {
    id: 6,
    question: 'What If I Miss A Day?',
    answer: "It happens! We call it a 'logged rest day,' not a failure. What matters is you come back. The platform is designed to encourage consistency, not perfection across all 60 days.",
  },
];

// --- AI Chatbot Mock Responses ---
export const chatbotResponses = {
  greeting: "Hey! 👋 I'm your ABTalks AI buddy. Ask me anything about today's challenge, your 60-day progress, or the track.",
  nightOwlGreeting: "Hey night owl! 🦉 Still grinding at this hour? I respect the hustle. How can I help with your 60-day journey?",
  fallback: "I'm still learning! For now, I can help with your daily challenges, explain concepts, or just cheer you on. Try asking about today's task!",
  responses: [
    { keywords: ['today', 'task', 'challenge', 'what should'], response: "Today's challenge is **Day 13: Authentication with JWT**. You'll learn how to implement secure user auth using JSON Web Tokens and bcrypt. Want me to break down the key concepts?" },
    { keywords: ['streak', 'progress', 'how am i'], response: "You're on a 🔥 **12-day streak**! That's incredible. You've completed 12/60 days and earned 1,450 XP. You're in the top 4% of all participants. Keep it going!" },
    { keywords: ['help', 'stuck', 'confused', 'don\'t understand'], response: "No worries, getting stuck is part of the process! 💪 Can you tell me which part of today's challenge is tripping you up? I'll help break it down step by step." },
    { keywords: ['jwt', 'token', 'auth'], response: "JWT (JSON Web Tokens) are a way to securely transmit information between parties. Think of it like a digital ID card: the server creates it, signs it, and the client carries it. Each request includes the token to prove identity." },
    { keywords: ['tired', 'exhausted', 'sleep', 'late'], response: "I see you grinding late! 🌙 Remember: the code you write at 2 AM is still code. Take a 5-minute break, drink some water, and come back fresh. You've already done the hard part by showing up." },
    { keywords: ['miss', 'missed', 'skip', 'break'], response: "Missing a day isn't failure — it's a logged rest day. What matters is that you came back. Your streak resets, but your skills don't. Let's pick up right where you left off! 💪" },
    { keywords: ['badge', 'achievement', 'reward'], response: "You've earned 3 badges so far: 🔥 First Commit, ⚡ 7-Day Streak, and ⭐ Community Star. Next up: 🦉 Night Owl and 💎 30-Day Milestone. You're building massive proof of work!" },
    { keywords: ['rank', 'leaderboard', 'position'], response: "You're ranked **#42 out of 1,200** participants — that's the top 3.5%! Priya M. is currently leading with a 15-day streak. Keep pushing!" },
  ],
};

// --- Helper Functions ---
export function getDayEntry(dayNumber) {
  return dayEntries.find(d => d.dayNumber === Number(dayNumber)) || null;
}

export function getCompletedDays() {
  return dayEntries.filter(d => d.status === 'completed');
}

export function getCurrentStreak() {
  return userData.currentStreak;
}

export function getTrackByName(name) {
  return tracks.find(t => t.name === name) || tracks[0];
}

export function getChatResponse(message) {
  const lower = message.toLowerCase();
  const match = chatbotResponses.responses.find(r =>
    r.keywords.some(k => lower.includes(k))
  );
  return match ? match.response : chatbotResponses.fallback;
}
