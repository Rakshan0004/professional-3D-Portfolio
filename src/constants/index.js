const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Live",
    link: "#live-projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Links",
    link: "#links",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 24, suffix: "+", label: "Months of Experience" },
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "Commitment to Quality" },
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

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full Stack Development",
    desc: "Expertise in Java, Spring Boot, React.js, and modern web technologies for end-to-end solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem Solving",
    desc: "Strong analytical skills with experience in building scalable applications and REST APIs.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning",
    desc: "Passionate about staying updated with latest technologies and best practices in software development.",
  },
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
    review: "At Pluto Rides, I contributed to the development of cross-platform mobility applications and backend infrastructure supporting ride management and real-time driver operations.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Engineer",
    company: "Pluto Rides",
    date: "Jan 2026 - Mar 2026",
    location: "Bengaluru, India",
    responsibilities: [
      "Architected and deployed 30+ serverless REST endpoints on AWS Lambda and API Gateway for ride and driver management, achieving zero-server-overhead scalability and reducing infrastructure cost by 40%",
      "Spearheaded the subsequent migration of the entire backend infrastructure from AWS Lambda serverless functions to Spring Boot",
      "Owned end-to-end delivery of a full-featured admin panel covering ride management, driver verification, analytics, and system monitoring — shipping all modules within a 3-month timeline, 100% on schedule",
      "Modeled PostgreSQL database schemas for ride matching, driver tracking, and transaction management, supporting 5+ entity relationships and enabling consistent, reliable data flow across all services",
      "Built cross-platform mobile applications using Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP), sharing 70% of business logic and UI components across iOS and Android — cutting mobile dev effort in half",
      "Added real-time GPS location tracking and Firebase Cloud Messaging (FCM) push notifications for customer and driver apps, boosting time-sensitive ride event response rates by 35%",
      "Enforced authentication and authorization flows with role-based access control (RBAC) across 3 user roles (customer, driver, admin), eliminating unauthorized cross-role data access",
      "Configured CI/CD pipelines for automated build, test, and deployment workflows, reducing manual release effort and enabling same-day hotfix deployments across environments",
      "Collaborated with product and business teams in a 2-week Agile sprint cadence, consistently delivering features on schedule with no critical production incidents"
    ],
  },
  {
    review: "At Qontact, I worked on building intelligent, data-driven web applications from scratch, contributing across frontend, backend, automation pipelines, and AI-powered features.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Engineer",
    company: "QONTACT",
    date: "Jun 2025 - Dec 2025",
    location: "Toronto, Canada (Remote)",
    responsibilities: [
      "Shipped a RAG-based AI chatbot into a Next.js application using Claude/OpenAI LLM APIs and Pinecone vector database, cutting average support query resolution time by 60% over manual lookup",
      "Built and maintained 10+ REST API endpoints using FastAPI to power core business workflows, ensuring reliable data exchange between frontend and backend services with under 200ms average response time",
      "Constructed an automated web scraping pipeline using FastAPI, Selenium, and BeautifulSoup to extract and normalize data from 15+ websites into structured JSON schemas, reducing manual data entry time by 80%",
      "Delivered a pixel-accurate, responsive web application from scratch using Next.js 15 based on Figma designs, achieving consistent performance across all major browsers and device sizes",
      "Utilized AWS S3 for scalable file storage, Redis for high-frequency data caching, and Docker for containerizing services — improving deployment consistency and reducing environment-related bugs by 50%",
      "Engineered data transformation pipelines converting raw scraped content into standardized JSON formats, enabling seamless consumption by 3 downstream application services",
      "Integrated third-party APIs and webhooks for real-time event handling, extending platform capabilities without increasing backend complexity",
      "Participated in weekly code reviews and cross-functional syncs, contributing feedback on 20+ PRs and maintaining code quality standards across the team"
    ],
  },
  {
    review: "Rakshan demonstrated exceptional technical skills and delivered high-quality responsive websites for our NGO clients. His attention to detail and problem-solving approach significantly improved our project outcomes.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer Intern",
    company: "WebSeva",
    date: "September 2024 - December 2024",
    location: "Remote",
    responsibilities: [
      "Developed and launched responsive websites for NGOs using React.js, increasing user engagement and reducing bounce rates",
      "Streamlined deployment process on Vercel with CI/CD pipeline, reducing deployment time and eliminating manual deployment errors",
      "Engineered mobile-responsive layouts that improved mobile traffic and increased cross-device user retention",
      "Added AI chat boxes customized for each website, enhancing user interaction and providing real-time assistance",
      "Implemented structured code review protocols that enhanced code quality metrics and decreased post-release issues",
    ],
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
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with product catalog, user auth, cart, and payment gateway integration. Built with Java 17, Spring Boot 3.3.3, MySQL, and Flyway migrations.",
    image: "/images/projectEC.png",
    tags: ["Spring Boot", "Java 17", "MySQL", "Flyway", "REST API"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
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
  },
  {
    id: "immigration",
    title: "Qontact — Immigration Consulting",
    description:
      "A production-ready Next.js 15 web application for a global immigration consulting firm, built from Figma designs with a FastAPI backend and AI chatbot.",
    image: "/images/immigration_website.png",
    tags: ["Next.js 15", "FastAPI", "RAG", "Pinecone", "Selenium"],
    githubUrl: "https://github.com/Rakshan0004",
    demoUrl: null,
    featured: false,
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
  },
];

const liveProjects = [
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
  },
];

const faqData = [
  {
    question: "Who is Rakshan?",
    answer: "I am a passionate Full Stack Developer with extensive expertise in modern web technologies, dedicated to building scalable and responsive web applications. Over the years, I have honed my skills across the entire software development lifecycle, from conceptualizing dynamic user interfaces to engineering robust backend architectures. My journey is fueled by an insatiable curiosity for emerging technologies and a drive to solve complex, real-world problems through clean, maintainable, and efficient code. I thrive in collaborative environments where innovative ideas intersect with technical excellence.",
  },
  {
    question: "What technologies does Rakshan work with?",
    answer: "My technical stack is comprehensive and carefully chosen to deliver high-performance, scalable applications. It includes Languages (Java, JavaScript, TypeScript, Python, SQL, HTML5, CSS3), Frameworks (Spring Boot, React.js, Next.js, FastAPI, Express.js, Node.js, KMP, CMP), Cloud & DevOps (AWS - EC2, S3, Lambda, API Gateway, Docker, Vercel, Maven, Git, CI/CD), Databases (PostgreSQL, MySQL, MongoDB, Redis, Pinecone, Redshift), AI & Integration (Claude API, OpenAI API, LangChain, RAG Pipelines, n8n, AI Agents), and Tools & Methods (Postman, Selenium, BeautifulSoup, Firebase/FCM, pgAdmin, Agile/Scrum). I leverage this stack to build everything from robust full-stack applications to intelligent AI-powered systems.",
  },
  {
    question: "Is Rakshan available for freelance projects?",
    answer: "Yes, absolutely! I am highly receptive to taking on freelance opportunities and collaborating on exciting new ventures. Whether you are a startup looking to build a Minimum Viable Product (MVP), an established business needing a digital transformation, or an agency requiring specialized technical support, I am ready to bring your vision to life. I pride myself on transparent communication, setting realistic milestones, and delivering exceptional value that aligns perfectly with your strategic goals. Let's schedule a call to discuss how I can contribute to your next big project.",
  },
  {
    question: "What kind of projects does Rakshan build?",
    answer: "I engineer a highly diverse portfolio of digital products spanning Web Apps, Mobile Apps, Cloud Infrastructure, and AI. Specifically, I build responsive, full-stack web applications (SaaS, e-commerce) and cross-platform mobile apps for iOS and Android. Beyond the frontend, I architect highly scalable backend systems and serverless infrastructures on AWS. Furthermore, I integrate cutting-edge AI capabilities—such as RAG pipelines, LLMs, and AI agents—into these applications to create intelligent, context-aware solutions. My focus is always on creating systems that are functional, accessible, and primed for scale.",
  },
  {
    question: "Where is Rakshan located?",
    answer: "I am currently based in India, operating in the Indian Standard Time (IST) zone. However, location has never been a barrier to my professional collaborations. I have extensive experience working asynchronously with international clients and cross-functional teams spanning across North America, Europe, and Asia. I utilize asynchronous communication tools, comprehensive documentation, and overlapping working hours to ensure that projects progress smoothly and transparently, regardless of geographical distance.",
  },
  {
    question: "What is Rakshan's educational background?",
    answer: "I hold a Bachelor of Technology (B.Tech) degree in Electronics and Communication Engineering from the prestigious Vellore Institute of Technology (VIT). During my academic tenure, I developed a strong foundational understanding of computational logic, system architecture, and analytical problem-solving. While my degree is in Electronics, my passion for software engineering drove me to extensively self-educate and undertake rigorous project-based learning in computer science domains. This unique blend of hardware understanding and software proficiency allows me to approach development with a highly structured and optimized mindset.",
  },
  {
    question: "How can I hire Rakshan for my project?",
    answer: "Hiring me is a straightforward and collaborative process. You can initiate contact by reaching out via the contact form on this portfolio, dropping me a direct message on LinkedIn, or sending an email detailing your project requirements. Once we connect, we will schedule an initial consultation to dive deep into your project's scope, objectives, technical constraints, and timeline. After understanding your needs, I will provide a comprehensive proposal outlining the architecture, estimated milestones, and pricing structure. Upon mutual agreement, we will establish a communication rhythm and kick off the development phase immediately.",
  },
  {
    question: "Does Rakshan write technical blogs?",
    answer: "Yes, I am a strong advocate for knowledge sharing and community growth. I regularly write technical articles and comprehensive tutorials covering a wide spectrum of software engineering topics. My writing typically focuses on deep dives into modern web frameworks, best practices for building scalable backend systems, step-by-step guides for integrating AI into conventional applications, and my personal learnings from debugging complex production issues. I aim to distill complex technical concepts into accessible, actionable insights for developers of all skill levels.",
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
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
