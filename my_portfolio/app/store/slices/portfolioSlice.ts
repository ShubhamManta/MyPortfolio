
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioState {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
    yearsOfExperience: number;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: PortfolioProject[];
  education: Education[];
}

const initialState: PortfolioState = {
  profile: {
    name: "Shubham Manta",
    title: "Senior Full-Stack & Systems Engineer",
    location: "Noida, Uttar Pradesh, India",
    email: "mantashubham@gmail.com",
    phone: "+91-9736776853",
    linkedin:
      "https://www.linkedin.com/in/shubham-manta-94570b224",
    summary:
      "Senior Full-Stack Engineer with around 8 years of experience building high-concurrency web platforms, distributed backends, and low-latency real-time systems across fintech and healthcare. Experienced in Node.js, NestJS, Next.js, PHP, WebSockets, event-driven architectures, applied AI, and database optimization.",
    yearsOfExperience: 8,
  },

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
        "Pub/Sub",
        "LLM API Integration",
        "Agent Workflows",
        "Prompt-driven Automation",
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        "PostgreSQL",
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

  projects: [
    {
      title: "Real-time Crypto Trading Ecosystem",
      description:
        "High-concurrency trading platform integrating MetaTrader and ActTrader execution engines with live WebSocket ticker feeds.",
      technologies: [
        "Next.js",
        "React.js",
        "WebSockets",
        "Trading APIs",
      ],
    },
    {
      title: "Hospital & Telehealth Portal",
      description:
        "Enterprise healthcare solution featuring multi-role doctor-patient messaging, referral tracking, and secure role-based access control.",
      technologies: [
        "Node.js",
        "NestJS",
        "WebSockets",
        "RBAC",
      ],
    },
    {
      title: "Headless Publishing Architecture",
      description:
        "Next.js and Sanity.io CMS platform with real-time previews, instant content updates, and optimized caching.",
      technologies: ["Next.js", "Sanity.io", "SSR"],
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
      institution:
        "University College of Business Studies, HPU",
      duration: "2012 - 2015",
    },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateProfile: (
      state,
      action: PayloadAction<Partial<PortfolioState["profile"]>>
    ) => {
      Object.assign(state.profile, action.payload);
    },

    setExperience: (
      state,
      action: PayloadAction<Experience[]>
    ) => {
      state.experience = action.payload;
    },

    setProjects: (
      state,
      action: PayloadAction<PortfolioProject[]>
    ) => {
      state.projects = action.payload;
    },

    setSkills: (
      state,
      action: PayloadAction<SkillCategory[]>
    ) => {
      state.skills = action.payload;
    },

    setEducation: (
      state,
      action: PayloadAction<Education[]>
    ) => {
      state.education = action.payload;
    },
  },
});

export const {
  updateProfile,
  setExperience,
  setProjects,
  setSkills,
  setEducation,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
