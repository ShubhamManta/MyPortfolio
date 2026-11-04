import { NextResponse } from "next/server";


export async function GET() {
  const portfolioData = {
    profile: {
      name: "Shubham Manta",
      title: "Senior Full-Stack & Systems Engineer",
      headline: "Senior Full-Stack & Systems Engineer",
      location: "Noida, Uttar Pradesh, India",
      email: "mantashubham@gmail.com",
      phone: "+91-9736776853",
      linkedin: "https://www.linkedin.com/in/shubham-manta-94570b224",
      github: "https://github.com/shubisworld",
      twitter: "https://x.com",
      summary:
        "Senior Full-Stack Engineer with around 8 years of experience building high-concurrency web platforms, distributed backends, and low-latency real-time systems across fintech and healthcare. Experienced in Node.js, NestJS, Next.js, PHP, WebSockets, event-driven architectures, applied AI, and database optimization.",
      bioShort:
        "I craft fast, modern & scalable web applications with clean code and great user experiences.",
      yearsOfExperience: 8,
      avatar: "/images/ShubhamManta.jpg",
      status: "Available for Freelance & Roles",
      stats: {
        yearsExperience: "8+",
        projectsCompleted: "25+",
        happyClients: "10+",
        jobSuccess: "100%",
      },
    },

    featuredSkills: [
      {
        name: "React",
        level: "Advanced" as const,
        percentage: 90,
        category: "Frontend",
        icon: "react",
        color: "#00d8fe",
      },
      {
        name: "Next.js",
        level: "Expert" as const,
        percentage: 88,
        category: "Frontend",
        icon: "nextjs",
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        level: "Expert" as const,
        percentage: 88,
        category: "Languages",
        icon: "typescript",
        color: "#3178c6",
      },
      {
        name: "Node.js",
        level: "Advanced" as const,
        percentage: 86,
        category: "Backend",
        icon: "nodejs",
        color: "#68a063",
      },
      {
        name: "Tailwind CSS",
        level: "Expert" as const,
        percentage: 90,
        category: "Frontend",
        icon: "tailwind",
        color: "#38bdf8",
      },
      {
        name: "PostgreSQL",
        level: "Advanced" as const,
        percentage: 78,
        category: "Databases",
        icon: "postgresql",
        color: "#336791",
      },
      {
        name: "MongoDB",
        level: "Advanced" as const,
        percentage: 80,
        category: "Databases",
        icon: "mongodb",
        color: "#47a248",
      },
      {
        name: "NestJS",
        level: "Advanced" as const,
        percentage: 88,
        category: "Backend",
        icon: "nestjs",
        color: "#ea2845",
      },
      {
        name: "WebSockets",
        level: "Expert" as const,
        percentage: 92,
        category: "Real-time",
        icon: "websockets",
        color: "#06b6d4",
      },
    ],

    skills: [
      {
        category: "Languages",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript",
          "Python",
          "PHP",
          "SQL",
          "HTML5",
          "CSS3",
        ],
      },
      {
        category: "Backend & Architecture",
        skills: [
          "Node.js",
          "NestJS",
          "PHP",
          "REST APIs",
          "GraphQL",
          "Microservices",
          "Event-driven Architecture",
        ],
      },
      {
        category: "Frontend",
        skills: [
          "Next.js",
          "React.js",
          "Vue.js",
          "Nuxt.js",
          "Redux Toolkit",
          "Pinia",
          "SSR",
          "Performance Optimization",
        ],
      },
      {
        category: "Real-time & AI",
        skills: [
          "WebSockets",
          "LLM API Integration",
          "Agent Workflows",
          "Prompt-driven Automation",
        ],
      },
      {
        category: "Databases & Tools",
        skills: [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Sanity.io",
          "Git",
          "GitHub",
          "Jira",
          "Selenium",
          "Autodesk Viewer APIs",
        ],
      },
    ],

    projects: [
      {
        id: "crypto-trading",
        title: "Real-time Crypto Trading Ecosystem",
        category: "Fintech & High-Concurrency",
        description:
          "High-concurrency trading platform integrating MetaTrader and ActTrader execution engines with live sub-second WebSocket ticker feeds, order book analytics, and interactive candlestick charts.",
        technologies: ["Next.js", "TypeScript", "WebSockets", "Trading APIs", "Tailwind CSS"],
        liveUrl: "https://fxview.com/",
        githubUrl: "https://fxview.com/",
        featured: true,
      },
      {
        id: "telehealth-portal",
        title: "Hospital & Telehealth Portal",
        category: "Healthcare & Distributed Systems",
        description:
          "Multi-tenant enterprise healthcare solution featuring doctor-patient messaging, cross-entity appointment tracking, role-based access control, and low-latency WebSockets.",
        technologies: ["Node.js", "NestJS", "WebSockets", "PostgreSQL", "RBAC"],
        liveUrl: "https://github.com/shubisworld",
        githubUrl: "https://github.com/shubisworld",
        featured: true,
      },
      {
        id: "headless-publishing",
        title: "Headless Publishing Architecture",
        category: "Content Management & Performance",
        description:
          "High-performance Next.js and Sanity.io CMS publishing platform featuring instant preview pipelines, content revalidation, and sub-100ms global SSR delivery.",
        technologies: ["Next.js", "Sanity.io", "SSR", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://github.com/shubisworld",
        githubUrl: "https://github.com/shubisworld",
        featured: true,
      },
      {
        id: "ai-careerpilot",
        title: "CareerPilot & Agentic AI Workflows",
        category: "Applied AI & Automation",
        description:
          "Intelligent career acceleration tool powered by Next.js, Python microservices, and LLM agentic pipelines for real-time interview prep, prompt automation, and workflow orchestration.",
        technologies: ["Next.js", "Python", "OpenAI", "WebSockets", "FastAPI"],
        liveUrl: "https://career-admin.dev.vinove.com/",
        githubUrl: "https://career-admin.dev.vinove.com/",
        featured: true,
      },
    ],

    experience: [
      {
        company: "Vinove Software and Services",
        role: "Senior Software Developer",
        location: "Noida, Uttar Pradesh, India",
        duration: "Sep 2025 - Present",
        responsibilities: [
          "Architected backend microservices using Node.js and NestJS for high-availability enterprise web portals.",
          "Engineered a multi-tenant hospital admin portal with role-based access control and cross-entity workflows.",
          "Built real-time doctor-patient communication using WebSockets.",
          "Developed CareerPilot with Next.js, Python-integrated APIs, and WebSocket messaging.",
          "Integrated agentic AI workflows and LLM-assisted features into internal product pipelines.",
          "Built a browser-based 3D asset management tool using Autodesk Viewer APIs.",
          "Designed REST APIs for media sharing, messaging, and real-time video communication.",
        ],
      },
      {
        company: "Finvasia Centre",
        role: "Software Developer",
        location: "Mohali, Punjab, India",
        duration: "Feb 2021 - Jul 2025",
        responsibilities: [
          "Designed and scaled cryptocurrency trading portals using React.js, Next.js, and WebSockets.",
          "Architected low-latency live market data pipelines with sub-second dashboard updates.",
          "Built financial dashboards with live order books, portfolio analytics, and candlestick charts.",
          "Integrated MetaTrader and ActTrader execution gateways for order routing and settlement workflows.",
          "Improved page performance through SSR, lazy loading, and memoized Redux Toolkit state.",
        ],
      },
      {
        company: "Leo Software Pvt. Ltd.",
        role: "Software Developer",
        location: "Shimla, Himachal Pradesh, India",
        duration: "Aug 2020 - Dec 2020",
        responsibilities: [
          "Built a student college portal using HTML and PHP.",
          "Developed data-fetching, record-update, and form-submission workflows.",
          "Standardized REST APIs and supported relational database integrity.",
        ],
      },
      {
        company: "Abaca Systems",
        role: "Quality Analyst / ERP Engineer",
        location: "Mohali, Punjab, India",
        duration: "Oct 2017 - Oct 2019",
        responsibilities: [
          "Validated and supported ERP financial modules, including general ledgers, cashbooks, and profit-and-loss reporting.",
          "Performed system testing, business requirement analysis, and production support.",
        ],
      },
    ],

    education: [
      {
        degree: "MCA - Master of Computer Applications",
        institution: "Chitkara University",
        duration: "2015 - 2017",
      },
      {
        degree: "BCA - Bachelor of Computer Applications",
        institution: "University College of Business Studies, HPU",
        duration: "2012 - 2015",
      },
    ],
  };

  return NextResponse.json(portfolioData);
}
