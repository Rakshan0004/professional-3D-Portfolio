const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 12, suffix: "+", label: "Months of Experience" },
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
    title: "Full Stack Developer",
    company: "Pluto Rides",
    date: "Dec 2025 - Feb 2026",
    location: "Bengaluru, India",
    responsibilities: [
      "Contributed to cross-platform mobile application development using Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP) for shared business logic across iOS and Android",
      "Developed serverless backend APIs on AWS using Lambda and API Gateway to support ride and driver management workflows",
      "Worked on PostgreSQL schema design for ride matching, driver tracking, and transaction management systems",
      "Implemented real-time location tracking and Firebase Cloud Messaging (FCM) push notifications in customer and driver applications",
      "Built a full-featured admin panel from scratch covering ride monitoring, driver verification, analytics, and operational controls",
      "Implemented authentication and role-based authorization flows for customers, drivers, and administrators to ensure secure access management",
    ],
  },
  {
    review: "At Qontact, I worked on building intelligent, data-driven web applications from scratch, contributing across frontend, backend, automation pipelines, and AI-powered features.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    company: "QONTACT",
    date: "June 2025 - Dec 2025",
    location: "Toronto, Canada",
    responsibilities: [
      "Built a production-ready web application using Next.js 15 based on Figma designs, ensuring high performance and consistent cross-device user experience",
      "Developed automated web scraping pipelines using FastAPI, Selenium, and BeautifulSoup, reducing manual data entry effort by 80%",
      "Designed and implemented REST APIs using FastAPI to support business workflows and enable seamless frontend-backend communication",
      "Created data transformation pipelines to convert scraped data into structured JSON schemas for downstream integrations",
      "Integrated a Retrieval-Augmented Generation (RAG) based AI chatbot using LLM APIs and Pinecone vector database for context-aware responses from indexed documents",
      "Participated in technical discussions and code reviews to maintain code quality and ensure timely delivery of features",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Rakshan built a modern, accessible website for our NGO and handled end‑to‑end delivery – from responsive UI in React to deployment. Page load times improved dramatically and donations and volunteer sign‑ups increased thanks to clearer flows and an integrated chat assistant.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Great communication and fast iterations. Rakshan set up a clean CI/CD pipeline (Vercel) and code reviews that reduced deployment errors to zero. The final result was polished and delivered on time.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Rakshan engineered a secure REST API with Spring Boot and Spring Security, documented it well, and set up testing that caught regressions early. Integration with our frontend went smoothly.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "He delivered our e‑commerce backend with robust migrations (Flyway) and efficient SQL. Checkout performance and reliability improved noticeably after his optimizations.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Thoughtful UI details and smooth animations with Three.js. Rakshan kept performance top of mind and shipped features without regressions.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Professional, responsive, and proactive. He anticipated edge cases, added helpful monitoring, and left us with maintainable code and clear handover notes.",
    imgPath: "/images/client6.png",
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
];

const educationData = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vellore Institute of Technology",
    period: "March 2020 – May 2024",
    gpa: "7.8/10",
  },
  {
    degree: "Intermediate Education (MPC)",
    institution: "FIITJEE Junior College",
    period: "2018 – 2020",
    gpa: "9.0/10",
  },
  {
    degree: "Standard X",
    institution: "FIITJEE Junior College",
    period: "2017 – 2018",
    gpa: "9.5/10",
  },
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
};
