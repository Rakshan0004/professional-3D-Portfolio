const navLinks = [
  {
    name: "Process",
    link: "#process",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Live",
    link: "#live-projects",
  },
  {
    name: "Services",
    link: "#services",
  },
];

// Hero slider needs exactly 8 entries (4 words, repeated) to match the wordSlider keyframes
const words = [
  { text: "Problems", imgPath: "/images/concepts.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Workflows", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
  { text: "Problems", imgPath: "/images/concepts.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Workflows", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const processSteps = [
  { step: "01", title: "Find", desc: "Understand the real problem before any code." },
  { step: "02", title: "Define", desc: "Scope the smallest thing that proves the value." },
  { step: "03", title: "Design", desc: "Architect the system and its tradeoffs up front." },
  { step: "04", title: "Build", desc: "Ship it secure, tested and fully yours." },
];

const securityPractices = [
  "End-to-end encryption",
  "Server-side permissions",
  "Role-based access",
  "Tenant isolation",
  "Private AI on your cloud",
];

const caseStudies = [
  {
    id: "lawsafe",
    title: "LawSafe",
    label: "PunkRaven",
    problem: "Legal guidance for India, in the user's own language.",
    built: "One backend serving 3 web and 2 mobile apps, with verified advocates and role-based access.",
    tags: ["FastAPI", "Next.js", "Expo"],
    link: null,
  },
  {
    id: "dafter",
    title: "Dafter",
    label: "Open source",
    problem: "Realtime voice and video AI for any app.",
    built: "Go control plane on LiveKit with per-session encryption and consent-gated recording.",
    tags: ["Go", "Python", "LiveKit"],
    link: "https://github.com/punk-raven/dafter",
  },
  {
    id: "hyacinte",
    title: "Hyacinte AI",
    label: "Client",
    problem: "Private AI answers over sensitive documents.",
    built: "Multi-tenant RAG on AWS Bedrock, so data never leaves AWS. Shipped solo in 3 months.",
    tags: ["FastAPI", "AWS Bedrock", "Qdrant"],
    link: null,
  },
];

const services = [
  {
    title: "MVP: Idea to Production",
    desc: "I scope it, architect it and ship a secure first version you can put in front of users.",
    points: ["Discovery & scoping", "Web + mobile apps", "Deployed with CI/CD"],
  },
  {
    title: "AI & Realtime Features",
    desc: "Cited answers over your documents, AI agents and voice, with private-cloud options for sensitive data.",
    points: ["RAG & AI agents", "Voice & live translation", "Private LLMs on AWS"],
  },
  {
    title: "Cloud, DevOps & Security",
    desc: "AWS infrastructure as code, pipelines and access control, set up properly from the start.",
    points: ["AWS & OpenTofu", "CI/CD pipelines", "Auth, RBAC & hardening"],
  },
  {
    title: "Architecture Review",
    desc: "A review of your system's bottlenecks and security gaps, with a prioritized plan to fix them.",
    points: ["System & data design", "Security gap analysis", "Actionable roadmap"],
  },
];

const stackGroups = [
  { label: "Languages", items: ["TypeScript", "Python", "Go", "Java", "SQL"] },
  { label: "Backend", items: ["FastAPI", "Spring Boot", "Node.js", "REST & WebSockets"] },
  { label: "Web & Mobile", items: ["Next.js", "React", "Expo / React Native", "Kotlin Multiplatform"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Pinecone"] },
  { label: "Cloud & DevOps", items: ["AWS", "OpenTofu", "Docker", "GitHub Actions", "Observability"] },
  { label: "AI & Realtime", items: ["RAG", "AI Agents", "AWS Bedrock", "LiveKit", "WebRTC"] },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "SpringBoot",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React/Next.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Spring Boot",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Full Stack Developer",
    company: "PunkRaven",
    date: "Jul 2026 – Present",
    location: "Remote",
    summary:
      "Building two products end to end: LawSafe, a chat-first legal guidance app for India, and Dafter, an open-source realtime AI media toolkit.",
    highlights: [
      "LawSafe: designed a clean-architecture FastAPI backend (async Postgres, MongoDB, Redis, background workers) serving 3 Next.js web apps and 2 Expo mobile apps from one monorepo",
      "Shipped advocate verification end to end, from data model and API to admin, lawyer web and mobile screens with scheduled re-verification, plus role-based auth with a legal-hold role",
      "Dafter: built the Go control plane for realtime AI sessions (voice agents, live translation, transcription, consent-gated recording) on LiveKit, with JSON Schema as the single source of truth for Go and Python",
      "Privacy by design and production discipline: per-session E2E encryption, server-derived permissions, OpenTofu on AWS, CI/CD, Playwright and Maestro E2E tests",
    ],
    techStack: ["FastAPI", "Go", "Next.js", "Expo", "PostgreSQL", "LiveKit", "AWS", "OpenTofu"],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Hyacinte AI",
    date: "Apr 2026 – Jun 2026",
    location: "Remote",
    summary:
      "Designed and built a bilingual (English/French) AI executive intelligence platform as the sole engineer.",
    highlights: [
      "Delivered a working multi-tenant RAG prototype solo in 3 months",
      "Ran the LLM on AWS Bedrock so sensitive client documents never left AWS",
      "Org-level data isolation with RBAC in Postgres, tenant-scoped search in Qdrant, and async OCR/ingestion on Redis + Dramatiq",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "AWS Bedrock"],
  },
  {
    title: "Software Engineer",
    company: "Pluto Rides",
    date: "Jan 2026 – Apr 2026",
    location: "Bengaluru, India",
    summary:
      "Built backend and mobile features for a ride-hailing platform, working directly with the CTO and CEO.",
    highlights: [
      "Built 30+ serverless REST endpoints on AWS Lambda and API Gateway for ride and driver management",
      "Built cross-platform app screens in Kotlin/Compose Multiplatform, sharing most business logic across iOS and Android",
      "Implemented RBAC across customer, driver and admin roles, real-time GPS tracking, push notifications and CI/CD",
    ],
    techStack: ["Java", "Spring Boot", "AWS Lambda", "PostgreSQL", "Kotlin Multiplatform"],
  },
  {
    title: "Full Stack Developer",
    company: "Qontact",
    date: "Apr 2025 – Dec 2025",
    location: "Toronto, Canada (Remote)",
    summary:
      "Built AI-powered web applications from scratch across frontend, backend and data pipelines.",
    highlights: [
      "Built a RAG support chatbot (Claude/OpenAI + Pinecone) that cut average query resolution time by 60%",
      "Built FastAPI services and an automated pipeline normalizing data from 15+ sources into structured JSON",
      "Delivered the Next.js 15 web app from Figma designs",
    ],
    techStack: ["Next.js", "FastAPI", "Spring Boot", "Pinecone", "Docker"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "WebSeva",
    date: "Sep 2024 – Dec 2024",
    location: "Remote",
    summary: "Built and launched websites for NGO clients.",
    highlights: [
      "Shipped responsive React websites with custom AI chat assistants",
      "Set up Vercel CI/CD and code review practices that removed manual deployment errors",
    ],
    techStack: ["React", "Vercel", "CI/CD"],
  },
];

const expLogos = [
  {
    name: "pluto rides",
    imgPath: "/images/logo3.png",
  },
  {
    name: "qontact",
    imgPath: "/images/logo1.png",
  },
  {
    name: "webseva",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Abhishek Kholiya",
    mentions: "@abhishek_k",
    review:
      "Rakshan built a modern, accessible website for our NGO and handled end‑to‑end delivery – from responsive UI in React to deployment. Page load times improved dramatically and donations and volunteer sign‑ups increased thanks to clearer flows and an integrated chat assistant.",
    imgPath: "👨🏽‍💻",
  },
  {
    name: "Venkat",
    mentions: "@venkat_js",
    review:
      "Great communication and fast iterations. Rakshan built our Next.js frontend and set up a clean CI/CD pipeline (Vercel) along with code reviews that reduced deployment errors to zero. The final result was polished and delivered on time.",
    imgPath: "👨🏽‍💼",
  },
  {
    name: "Sarah Jenkins",
    mentions: "@sarah_letxt",
    review:
      "Rakshan developed a high-performance corporate landing page for LetXT Enterprises. The SEO optimization and sleek responsive design dramatically improved our digital presence and client conversion rate.",
    imgPath: "👩🏻‍💼",
  },
  {
    name: "Amresh",
    mentions: "@amresh_pluto",
    review:
      "At Pluto Rides, Rakshan contributed to our cross-platform mobile apps and serverless AWS backend. He helped us build a reliable, scalable system for ride matching that perfectly met our business requirements.",
    imgPath: "👨🏽‍🦱",
  },
  {
    name: "Wei Chen",
    mentions: "@weichen_kmpleet",
    review:
      "Kmpleet needed a robust survey analytics platform. Rakshan delivered a flawless Next.js application with a FastAPI backend and integrated an AI chatbot that our users love. His attention to detail is outstanding.",
    imgPath: "👨🏻‍💻",
  },
  {
    name: "Yash",
    mentions: "@yash_q",
    review:
      "Professional, responsive, and proactive. He anticipated edge cases for our immigration platform, added helpful monitoring, and left us with maintainable code and clear handover notes.",
    imgPath: "🧔🏽",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    link: "https://github.com/Rakshan0004",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/rakshan-chintala-08965521a/",
  },
  {
    name: "twitter",
    imgPath: "/images/x.png",
    link: "https://twitter.com/Rakshan_CH",
  },
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/ch_rakshan/",
  },
  {
    name: "leetcode",
    imgPath: "/images/logos/leetcode.svg",
    link: "https://leetcode.com/u/rakshanch0004/",
  },
];

const educationData = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vellore Institute of Technology",
    period: "Mar 2020 – May 2024",
    gpa: "7.8/10",
  },
  {
    degree: "Intermediate Education (MPC)",
    institution: "FIITJEE College",
    period: "Jun 2018 – May 2020",
    gpa: "9.0/10",
  },
  {
    degree: "Standard X",
    institution: "FIITJEE School",
    period: "Jun 2017 – May 2018",
    gpa: "9.5/10",
  },
];

const projects = [
  {
    id: "chitransit",
    title: "ChiTransit — Chicago 'L' Transit App",
    description:
      "A Chicago 'L' transit app with a live train map, real-time arrivals, and a smart trip planner — backed by a Spring Boot API built around CTA's data limits.",
    image: "/images/chitransit-map.png",
    screenshots: [
      "/images/chitransit-map.png",
      "/images/chitransit-train-detail.png",
      "/images/chitransit-arrivals.png",
    ],
    tags: ["Spring Boot", "React Native", "Expo", "PostgreSQL", "RAPTOR Routing", "MapLibre", "ArchUnit", "Docker"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
    type: "personal",
    details: {
      overview:
        "ChiTransit is a full-stack Chicago 'L' transit app: a Spring Boot backend that caches and cleans up CTA's live train data, and an Expo/React Native app with a live map, real-time arrivals, and a trip planner. Built solo in 4 weeks with 800+ automated tests. Feature-complete and tested on Android; not yet publicly deployed.",
      highlights: [
        "Custom trip planner that finds both the fastest route and the one with fewest transfers, not just a single \"best\" option",
        "Live map covering all 8 CTA rail lines, with trains that move smoothly between updates instead of jumping",
        "One shared backend call serves every user, keeping the app inside CTA's 100,000-requests-a-day limit no matter how many people use it",
        "800+ automated tests (316 backend, ~500 mobile) catch bugs before they reach the app",
        "API keys are hashed and every request is rate-limited — no plaintext secrets, no open endpoints",
      ],
      architectureHighlights: [
        "Trip Planning: A custom routing engine built on Chicago's official train schedule (269,000+ scheduled stops across 8 lines)",
        "Smart Caching: The backend checks CTA once and shares that answer with every user, instead of every phone calling CTA directly",
        "Security: Rate limiting and hashed API keys keep the app safe without needing user accounts",
        "Testing: 800+ automated tests across backend and mobile, with architecture rules enforced by ArchUnit",
      ],
      techCategories: {
        "Backend": ["Java 21", "Spring Boot 3.4.2", "Spring WebFlux/MVC", "Flyway"],
        "Mobile": ["TypeScript", "React Native 0.86", "Expo SDK 57", "MapLibre"],
        "Caching & Security": ["Caffeine", "Bucket4j", "SHA-256 Key Hashing"],
        "Testing": ["JUnit 5", "ArchUnit", "Jest"],
        "Infra": ["PostgreSQL", "Docker", "GitHub Actions", "Render + Neon"],
      },
    },
  },
  {
    id: "logistics-platform",
    title: "Logistics Platform — Multi-Courier Logistics Aggregator",
    description:
      "A robust multi-courier logistics aggregator for merchants. Features asynchronous parallel rate aggregation via Spring WebFlux, idempotent webhook processing, and a React SPA dashboard.",
    image: "/images/logistics.png",
    tags: ["Java 21", "Spring WebFlux", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Rakshan0004/ShipFlow_A_Logistics_Platform",
    demoUrl: "https://ship-flow-a-logistics-platform.vercel.app/merchant/dashboard",
    featured: false,
    type: "personal",
    details: {
      overview:
        "This project is a production-grade multi-courier logistics aggregator platform. It acts as a unified gateway for merchants to streamline shipping rate aggregation, select carriers, book shipments, and process real-time tracking webhooks across multiple distinct courier APIs (FastShip, QuickExpress, and ReliableCourier).",
      highlights: [
        "Implemented non-blocking, parallel rate aggregation from multiple third-party courier mock APIs using Spring WebFlux WebClient with a 5-second hard timeout and partial failure tolerance",
        "Designed a robust PostgreSQL schema using Flyway for versioned database migrations with idempotent webhook ingestion using partial unique constraints",
        "Built a two-step transaction flow to guarantee carrier selection and freeze pricing, preventing price tampering via PriceMismatchException",
        "Implemented a state machine guardrail system to prevent illegal status regressions (e.g., rejecting an update from DELIVERED back to IN_TRANSIT)",
        "Built a webhook processing engine that normalizes fragmented tracking payloads from three distinct couriers into a unified 7-step internal tracking state",
        "Developed a Merchant Dashboard SPA using React and Vite, featuring a premium glassmorphism dark UI with live rate comparison tables and real-time visual tracking timeline",
        "Fully containerized the microservices architecture using Docker Compose with a dedicated bridge network for secure service isolation",
        "Authored highly optimized multi-stage Dockerfiles (Node builder + Nginx runtime) to reduce image sizes and leverage Docker layer caching",
        "Configured Nginx as a reverse proxy with production-grade security headers (X-Frame-Options, X-XSS-Protection) and Gzip compression",
        "Designed the architecture for native AWS deployment — ECS/EKS for backend, RDS for PostgreSQL, S3 + CloudFront for frontend",
      ],
      techCategories: {
        "Backend": ["Java 21", "Spring Boot 3.3.0", "Spring WebFlux", "Spring Data JPA", "Flyway"],
        "Frontend": ["React 18", "Vite 5", "Node.js", "Vanilla CSS"],
        "Database": ["PostgreSQL"],
        "DevOps": ["Docker", "Docker Compose", "Nginx", "Multi-Stage Builds"],
        "AWS Ready": ["ECS/EKS", "RDS", "S3 + CloudFront", "EC2"],
      },
      architectureHighlights: [
        "Fault Tolerance: Built to survive third-party API outages during the rate aggregation phase",
        "Idempotent Event Driven Architecture: Webhooks are safely retriable without duplicating database records or corrupting shipment states",
        "Microservices Simulation: Ran a separate mock-courier-service container to simulate third-party API latency and webhook triggers",
      ],
    },
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with product catalog, user auth, cart, and payment gateway integration. Built with Java 17, Spring Boot 3.3.3, MySQL, and Flyway migrations.",
    image: "/images/projectEC.png",
    tags: ["Spring Boot", "Java 17", "MySQL", "Flyway", "REST API"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
    type: "personal",
    details: {
      overview:
        "A fully functional e-commerce backend platform built with Java 17 and Spring Boot 3.3.3. The application features a complete product catalog with category management, user authentication and authorization, shopping cart management, order processing workflow, and payment gateway integration.",
      highlights: [
        "Implemented RESTful API endpoints for product CRUD, cart management, and order processing",
        "Built user authentication and authorization with role-based access control (admin, customer)",
        "Designed a normalized MySQL database schema with Flyway for versioned, repeatable migrations",
        "Integrated payment gateway for secure checkout and transaction handling",
        "Implemented pagination, sorting, and filtering for product catalog browsing",
        "Built order lifecycle management with status tracking from placement to delivery",
      ],
      techCategories: {
        "Backend": ["Java 17", "Spring Boot 3.3.3", "Spring Security", "Spring Data JPA"],
        "Database": ["MySQL", "Flyway Migrations"],
        "API": ["REST API", "Postman"],
      },
    },
  },
  {
    id: "echo-arena",
    title: "Echo Arena — 2D Platformer Game",
    description:
      "A high-performance, 60FPS 2D time loop platformer built entirely with Vanilla JavaScript and HTML5 Canvas. Features a custom physics engine, input manager, and state machine.",
    image: "/images/echo-arena.png",
    tags: ["HTML5 Canvas", "Vanilla JS", "CSS3", "Game Dev"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: "https://echo-arena-game.vercel.app/",
    featured: false,
    type: "personal",
    details: {
      overview:
        "Echo Arena is a high-performance 2D time loop platformer game built from scratch using only Vanilla JavaScript and HTML5 Canvas — no game engine or framework used. It demonstrates deep understanding of game loop architecture, physics simulation, collision detection, and state management in the browser.",
      highlights: [
        "Custom game loop running at a locked 60FPS with delta-time interpolation for consistent physics across devices",
        "Built a from-scratch physics engine with gravity, friction, velocity-based movement, and AABB collision detection",
        "Implemented a finite state machine for character states (idle, running, jumping, falling, dashing)",
        "Custom input manager supporting keyboard controls with input buffering for responsive gameplay",
        "Level design system with tile-based maps and procedural obstacle placement",
        "Responsive CSS3 UI overlays for menus, HUD, and game-over screens that scale to any viewport",
        "Deployed on Vercel with optimized asset loading and zero-dependency architecture",
      ],
      techCategories: {
        "Core": ["Vanilla JavaScript (ES6+)", "HTML5 Canvas API"],
        "Game Systems": ["Custom Physics Engine", "State Machine", "Input Manager", "Collision Detection"],
        "Frontend": ["CSS3", "Responsive UI Overlays"],
        "Deployment": ["Vercel"],
      },
    },
  },
  {
    id: "blockvote",
    title: "BlockVote — Decentralized Voting",
    description:
      "A blockchain-based voting platform ensuring transparent, tamper-proof elections with smart contracts and a modern React frontend.",
    image: "/images/block.png",
    tags: ["Blockchain", "Solidity", "React", "Web3.js"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
    type: "personal",
    details: {
      overview:
        "BlockVote is a decentralized voting application built on blockchain technology to ensure transparent, tamper-proof elections. It uses Ethereum smart contracts to guarantee vote integrity while providing an intuitive React frontend that abstracts away the complexity of blockchain interactions.",
      highlights: [
        "Wrote Solidity smart contracts for election creation, candidate registration, and vote casting with built-in safeguards against double-voting",
        "Integrated Web3.js for seamless communication between the React frontend and the Ethereum blockchain",
        "Built a modern React UI with real-time vote tallying and election result visualization",
        "Implemented MetaMask wallet connection for voter authentication without centralized credentials",
        "Designed the contract architecture to be gas-efficient while maintaining election integrity guarantees",
      ],
      techCategories: {
        "Blockchain": ["Solidity", "Ethereum", "Web3.js", "MetaMask"],
        "Frontend": ["React", "JavaScript"],
        "Tools": ["Truffle/Hardhat", "Ganache"],
      },
    },
  },
  {
    id: "ai-agent",
    title: "Customizable AI Agent",
    description:
      "A RAG-powered AI agent with tool-use capabilities. Connects to a Pinecone vector database for context-aware responses from custom document sets.",
    image: "/images/ai-agent.png",
    tags: ["Python", "LangChain", "Pinecone", "FastAPI", "RAG"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
    type: "personal",
    details: {
      overview:
        "A customizable AI agent built with LangChain that supports Retrieval-Augmented Generation (RAG) and tool-use capabilities. The agent connects to a Pinecone vector database to provide context-aware responses grounded in custom document sets, making it adaptable for domain-specific applications like customer support, documentation search, and internal knowledge bases.",
      highlights: [
        "Built a RAG pipeline using LangChain with document ingestion, chunking, embedding, and retrieval stages",
        "Integrated Pinecone as the vector store for fast, scalable semantic search across large document sets",
        "Implemented tool-use capabilities allowing the agent to perform structured actions beyond text generation",
        "Created a FastAPI backend exposing the agent as a REST API with streaming response support",
        "Designed a modular architecture allowing easy swapping of LLM providers, embedding models, and vector stores",
        "Built document preprocessing pipelines supporting PDF, text, and markdown ingestion formats",
      ],
      techCategories: {
        "AI/ML": ["LangChain", "RAG Pipeline", "OpenAI/Claude API", "Embeddings"],
        "Backend": ["Python", "FastAPI"],
        "Database": ["Pinecone Vector DB"],
        "Tools": ["Document Processing", "Semantic Search"],
      },
    },
  },
  {
    id: "immigration",
    title: "Qontact — Immigration Consulting",
    description:
      "A production-ready Next.js 15 web application for a global immigration consulting firm, built from Figma designs with SpringBoot, Express.JS, FastAPI and AI chatbot.",
    image: "/images/immigration_website.png",
    tags: ["Next.js 15", "SpringBoot", "Express.JS", "FastAPI", "RAG", "Pinecone", "Selenium"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
    type: "company",
    details: {
      overview:
        "A production-ready web application built for Qontact, a global immigration consulting firm. Developed from Figma designs using Next.js 15 with multiple backend services (Spring Boot, Express.js, FastAPI), featuring an AI-powered chatbot for immigration queries and an automated data scraping pipeline.",
      highlights: [
        "Built a RAG-based AI chatbot using Claude/OpenAI APIs and Pinecone vector database, cutting average support query resolution time by 60%",
        "Developed 10+ REST API endpoints using FastAPI with average response times under 200ms",
        "Built an automated web scraping pipeline using Selenium and BeautifulSoup to extract and normalize data from 15+ websites",
        "Developed a responsive web application from Figma designs using Next.js 15 with cross-browser consistency",
        "Integrated third-party APIs and webhooks for real-time event handling",
        "Built data transformation pipelines to convert scraped content into standardized JSON supporting 3 downstream services",
      ],
      techCategories: {
        "Frontend": ["Next.js 15", "React"],
        "Backend": ["Spring Boot", "Express.js", "FastAPI"],
        "AI": ["Claude API", "OpenAI API", "RAG", "Pinecone"],
        "Automation": ["Selenium", "BeautifulSoup"],
        "DevOps": ["Docker", "AWS S3"],
      },
    },
  },
  {
    id: "kmpleet-survey",
    title: "Kmpleet — Data Collection App",
    description:
      "Full-stack SaaS data collection and analytics platform with dynamic survey builder, real-time analytics dashboard, and AI-powered chatbot assistance.",
    image: "/images/survay_website (1).png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "React", "Vercel"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: "https://kmpleet.com/",
    featured: false,
    type: "company",
    details: {
      overview:
        "Kmpleet is a full-stack SaaS platform for data collection, survey management, and real-time analytics. It features a dynamic survey builder, real-time response analytics dashboard, and AI-powered chatbot assistance for users. Built production-ready with Next.js 15 on the frontend and FastAPI on the backend.",
      highlights: [
        "Built a dynamic survey builder with drag-and-drop question types, conditional logic, and multi-page support",
        "Developed a real-time analytics dashboard with live response tracking, charts, and exportable reports",
        "Integrated an AI-powered chatbot to assist users with survey creation and data interpretation",
        "Implemented user authentication with role-based access for survey creators and respondents",
        "Built a PostgreSQL-backed data layer with optimized queries for aggregation and analytics",
        "Deployed on Vercel with CI/CD pipeline for seamless production updates",
      ],
      techCategories: {
        "Frontend": ["Next.js 15", "React"],
        "Backend": ["FastAPI", "Python"],
        "Database": ["PostgreSQL"],
        "AI": ["Chatbot", "NLP"],
        "Deployment": ["Vercel", "CI/CD"],
      },
    },
  },
];

const liveProjects = [
  {
    id: "chitransit",
    title: "ChiTransit",
    tagline: "Chicago 'L' Transit Companion",
    description:
      "A Chicago 'L' transit app with a live train map, real-time arrivals, and a smart trip planner — backed by a Spring Boot API built around CTA's data limits.",
    image: "/images/chitransit-map.png",
    screenshots: [
      "/images/chitransit-map.png",
      "/images/chitransit-train-detail.png",
      "/images/chitransit-arrivals.png",
    ],
    tags: ["Spring Boot", "React Native", "Expo", "PostgreSQL", "Trip Planner", "MapLibre"],
    links: [],
    featured: false,
    projectRef: "chitransit",
    type: "personal",
    details: {
      overview:
        "A Spring Boot API caches and cleans up CTA's live train data, and an Expo/React Native app shows a live map, real-time arrivals, and a trip planner. It isn't deployed publicly yet, but it's feature-complete and tested on Android, with 800+ automated tests.",
      highlights: [
        "Custom trip planner over Chicago's full train schedule — 269,000+ scheduled stops across 8 lines",
        "One shared backend call serves every user, built around CTA's 100,000-requests-a-day limit",
        "Live map with animated trains and all 8 CTA rail lines",
        "800+ automated tests across backend and mobile",
        "Hashed API keys and rate limiting — no plaintext secrets, no open endpoints",
      ],
      techCategories: {
        "Backend": ["Java 21", "Spring Boot", "PostgreSQL"],
        "Mobile": ["React Native", "Expo", "MapLibre"],
        "Infra": ["Docker", "GitHub Actions"],
      },
    },
  },
  {
    id: "logistics-platform",
    title: "Logistics Platform",
    tagline: "Multi-Courier Logistics Aggregator",
    description:
      "A production-grade logistics gateway for shipping rate aggregation and booking. Built with a highly concurrent Spring WebFlux backend and an interactive React/Vite dashboard.",
    image: "/images/logistics.png",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "AWS Ready"],
    links: [
      { label: "Live Dashboard", url: "https://ship-flow-a-logistics-platform.vercel.app/merchant/dashboard", icon: "globe" },
      { label: "GitHub", url: "https://github.com/Rakshan0004/ShipFlow_A_Logistics_Platform", icon: "globe" },
    ],
    featured: false,
    projectRef: "logistics-platform",
    type: "personal",
    details: {
      overview:
        "A production-grade multi-courier logistics aggregator platform that acts as a unified gateway for merchants to streamline shipping rate aggregation, select carriers, book shipments, and process real-time tracking webhooks across multiple distinct courier APIs.",
      highlights: [
        "Non-blocking, parallel rate aggregation from multiple courier APIs with 5-second hard timeout and partial failure tolerance",
        "Idempotent webhook processing using partial unique constraints to handle duplicate tracking events",
        "Two-step transaction flow with frozen pricing to prevent price tampering",
        "State machine guardrail system preventing illegal status regressions",
        "Merchant Dashboard SPA with glassmorphism dark UI, live rate comparison, and real-time tracking timeline",
        "Fully containerized with Docker Compose, Nginx reverse proxy, and multi-stage builds",
      ],
      techCategories: {
        "Backend": ["Java 21", "Spring Boot 3.3.0", "Spring WebFlux"],
        "Frontend": ["React 18", "Vite 5"],
        "Database": ["PostgreSQL", "Flyway"],
        "DevOps": ["Docker", "Nginx", "AWS Ready"],
      },
    },
  },
  {
    id: "echo-arena",
    title: "Echo Arena",
    tagline: "High-Performance 2D Time Loop Platformer",
    description:
      "A custom-built 60FPS browser game using Vanilla JavaScript and HTML5 Canvas. Features a from-scratch physics engine and responsive CSS3 UI overlays.",
    image: "/images/echo-arena.png",
    tags: ["HTML5 Canvas", "Vanilla JS", "Game Engine", "CSS3"],
    links: [
      { label: "Play Game", url: "https://echo-arena-game.vercel.app/", icon: "globe" },
    ],
    featured: false,
    projectRef: "echo-arena",
    type: "personal",
    details: {
      overview:
        "A high-performance 2D time loop platformer built from scratch with Vanilla JavaScript and HTML5 Canvas. No game engine or framework used — demonstrating deep understanding of game loop architecture, physics, and state management.",
      highlights: [
        "Custom game loop locked at 60FPS with delta-time interpolation",
        "From-scratch physics engine with gravity, friction, and AABB collision detection",
        "Finite state machine for character states and game flow",
        "Zero-dependency architecture deployed on Vercel",
      ],
      techCategories: {
        "Core": ["Vanilla JavaScript", "HTML5 Canvas"],
        "Game Systems": ["Physics Engine", "State Machine"],
      },
    },
  },
  {
    id: "kmpleet",
    title: "Kmpleet",
    tagline: "Robust Data Collection & Analytics Platform",
    description:
      "A full-stack SaaS platform for data collection, survey management, and real-time analytics. Built production-ready with Next.js 15 and a FastAPI backend.",
    image: "/images/live-kmpleet.png",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL", "React", "Vercel"],
    links: [
      { label: "Main App", url: "https://kmpleet.com/", icon: "globe" },
      {
        label: "Admin Panel",
        url: "https://staging.admin.kmpleet.com/login",
        icon: "admin",
      },
    ],
    featured: false,
    projectRef: "kmpleet-survey",
    type: "company",
    details: {
      overview:
        "A production SaaS platform for data collection, survey management, and real-time analytics with a dynamic survey builder and AI-powered chatbot.",
      highlights: [
        "Dynamic survey builder with drag-and-drop and conditional logic",
        "Real-time analytics dashboard with live response tracking",
        "AI-powered chatbot for survey creation assistance",
        "Role-based access control for creators and respondents",
      ],
      techCategories: {
        "Frontend": ["Next.js 15", "React"],
        "Backend": ["FastAPI", "Python"],
        "Database": ["PostgreSQL"],
      },
    },
  },
  {
    id: "plutorides",
    title: "Pluto Rides",
    tagline: "Cross-Platform Ride Mobility Ecosystem",
    description:
      "End-to-end ride mobility solution — cross-platform mobile app (iOS & Android), admin dashboard, and marketing website. Built with KMP, AWS Lambda, and Firebase.",
    image: "/images/live-plutorides.png",
    tags: ["Kotlin Multiplatform", "AWS Lambda", "PostgreSQL", "Firebase", "FCM"],
    links: [
      { label: "Website", url: "https://plutorides.com/", icon: "globe" },
      { label: "Admin Panel", url: "https://admin.plutorides.com/", icon: "admin" },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.pluto.rides&hl=en_IN",
        icon: "android",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/pluto-reliable-commute/id6757488243",
        icon: "apple",
      },
    ],
    featured: false,
    type: "company",
    details: {
      overview:
        "End-to-end ride mobility ecosystem including cross-platform mobile apps (iOS & Android), admin dashboard, serverless backend, and marketing website. Built at Pluto Rides as a Software Engineer.",
      highlights: [
        "Built 30+ serverless REST endpoints on AWS Lambda and API Gateway",
        "Developed cross-platform mobile screens using Kotlin Multiplatform (KMP) and Compose Multiplatform",
        "Added real-time GPS tracking and Firebase Cloud Messaging push notifications",
        "Implemented RBAC across 3 user roles (customer, driver, admin)",
        "Set up CI/CD pipelines for same-day hotfix releases",
      ],
      techCategories: {
        "Mobile": ["Kotlin Multiplatform", "Compose Multiplatform"],
        "Backend": ["AWS Lambda", "API Gateway", "Spring Boot"],
        "Database": ["PostgreSQL", "Firebase"],
        "DevOps": ["CI/CD", "FCM"],
      },
    },
  },
  {
    id: "letxt",
    title: "LetXT Enterprises",
    tagline: "Corporate Landing Page",
    description:
      "A freelance project — high-performance, responsive corporate landing page. Deployed on Vercel with CI/CD, optimized for SEO and cross-device experience.",
    image: "/images/live-letxt.png",
    tags: ["React.js", "Vercel", "CI/CD", "SEO"],
    links: [
      { label: "Live Site", url: "https://letxenterprises.com/", icon: "globe" },
    ],
    featured: false,
    type: "client",
    details: {
      overview:
        "A high-performance, responsive corporate landing page built for LetXT Enterprises as a freelance project. Optimized for SEO, cross-device experience, and deployed on Vercel with CI/CD.",
      highlights: [
        "Built a responsive, mobile-first corporate landing page from client requirements",
        "Optimized SEO with proper meta tags, structured data, and performance tuning",
        "Deployed on Vercel with CI/CD pipeline for seamless updates",
        "Cross-browser and cross-device testing for consistent experience",
      ],
      techCategories: {
        "Frontend": ["React.js", "CSS3"],
        "Deployment": ["Vercel", "CI/CD"],
        "Optimization": ["SEO", "Performance"],
      },
    },
  },
];

const faqData = [
  {
    question: "What kind of projects do you take on?",
    answer: "Products that need more than a pretty screen: SaaS platforms, mobile apps, AI features on private data, and the cloud infrastructure behind them. I work best with startups and small teams that need one person who can own the problem from discovery through architecture to a secure production release.",
  },
  {
    question: "How does a project with you start?",
    answer: "With the problem, not the tech. We have a short discovery call, I write up a problem statement and a scoped MVP, then an architecture plan with the key decisions and tradeoffs. Only once we agree on that does the build start, so there are no surprises halfway through.",
  },
  {
    question: "I only have an idea. Is it too early to reach out?",
    answer: "No, that's often the best time. The cheapest place to fix a wrong assumption is before any code exists. I'll help you pin down who it's for, what the first version really needs, and what it will cost to build and run.",
  },
  {
    question: "How do you handle security?",
    answer: "It's built in from day one, not bolted on at the end. Depending on the product, that means proper authentication, role-based access, tenant data isolation, hashed secrets, rate limiting, idempotent integrations, and keeping sensitive data inside your own cloud. I've shipped all of these in production and client work.",
  },
  {
    question: "Can you work with my existing team or codebase?",
    answer: "Yes. I've joined early-stage teams and worked directly with founders and CTOs. I can take over a module, review your architecture and security, set up CI/CD and AWS properly, or add AI features to an existing product.",
  },
  {
    question: "I'm in the US or Europe. Does the timezone work?",
    answer: "Yes. I'm based in India (IST) and have worked remotely with clients in Canada and the USA. I keep overlapping hours for calls, share progress in writing, and document decisions so nothing depends on being online at the same time.",
  },
  {
    question: "What do I get at the end?",
    answer: "A working, deployed system plus everything needed to own it: source code, infrastructure setup, CI/CD pipelines, and handover docs that explain how it's built and why.",
  },
  {
    question: "How do I get started?",
    answer: "Use the form below and tell me about the problem you're trying to solve, plus your timeline and budget if you know them. I'll reply with questions or a time for a quick call.",
  },
];

export {
  words,
  processSteps,
  stackGroups,
  securityPractices,
  caseStudies,
  services,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  educationData,
  liveProjects,
  projects,
  faqData,
};
