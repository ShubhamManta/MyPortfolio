import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface PortfolioProject {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
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

export interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Expert";
  percentage: number;
  category?: string;
  icon?: string;
  color?: string;
}

export interface ProfileDetails {
  name: string;
  title: string;
  headline?: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  summary: string;
  bioShort?: string;
  yearsOfExperience: number;
  avatar?: string;
  status?: string;
  stats?: {
    yearsExperience: string;
    projectsCompleted: string;
    happyClients: string;
    jobSuccess: string;
  };
}

export interface PortfolioState {
  profile: ProfileDetails;
  skills: SkillCategory[];
  featuredSkills: SkillItem[];
  experience: Experience[];
  projects: PortfolioProject[];
  education: Education[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastFetched: number | null;
}

const initialState: PortfolioState = {
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
      level: "Advanced",
      percentage: 90,
      category: "Frontend",
      icon: "react",
      color: "#00d8fe",
    },
    {
      name: "Next.js",
      level: "Advanced",
      percentage: 88,
      category: "Frontend",
      icon: "nextjs",
      color: "#ffffff",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      percentage: 88,
      category: "Languages",
      icon: "typescript",
      color: "#3178c6",
    },
    {
      name: "Node.js",
      level: "Advanced",
      percentage: 86,
      category: "Backend",
      icon: "nodejs",
      color: "#68a063",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      percentage: 90,
      category: "Frontend",
      icon: "tailwind",
      color: "#38bdf8",
    },
    {
      name: "PostgreSQL",
      level: "Intermediate",
      percentage: 78,
      category: "Databases",
      icon: "postgresql",
      color: "#336791",
    },
    {
      name: "MongoDB",
      level: "Advanced",
      percentage: 80,
      category: "Databases",
      icon: "mongodb",
      color: "#47a248",
    },
    {
      name: "NestJS",
      level: "Advanced",
      percentage: 88,
      category: "Backend",
      icon: "nestjs",
      color: "#ea2845",
    },
    {
      name: "WebSockets",
      level: "Expert",
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
      id: "crypto-trading",
      title: "Real-time Crypto Trading Ecosystem",
      category: "Fintech & High-Concurrency",
      description:
        "High-concurrency trading platform integrating MetaTrader and ActTrader execution engines with live sub-second WebSocket ticker feeds, order book analytics, and interactive candlestick charts.",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Trading APIs", "Tailwind CSS"],
      liveUrl: "https://fxview.com/global/",
      githubUrl: "https://fxview.com/global/",
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

  loading: "idle",
  error: null,
  lastFetched: null,
};

/**
 * Async Thunk to fetch portfolio details adhering to Next.js App standards.
 * Calls Next.js API route (/api/portfolio) on client or gracefully falls back.
 */
export const fetchPortfolioDetails = createAsyncThunk<
  Partial<PortfolioState>,
  void,
  { rejectValue: string }
>("portfolio/fetchPortfolioDetails", async (_, { rejectWithValue }) => {
  try {
    // If running in browser, fetch from the Next.js API route
    if (typeof window !== "undefined") {
      const response = await fetch("/api/portfolio", {
        headers: {
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }

    // SSR / Node environment fallback
    return initialState;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch portfolio details";
    // Return initial state to guarantee a flawless UI experience even if fetch fails
    return rejectWithValue(message);
  }
});

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

    setExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experience = action.payload;
    },

    setProjects: (state, action: PayloadAction<PortfolioProject[]>) => {
      state.projects = action.payload;
    },

    setSkills: (state, action: PayloadAction<SkillCategory[]>) => {
      state.skills = action.payload;
    },

    setFeaturedSkills: (state, action: PayloadAction<SkillItem[]>) => {
      state.featuredSkills = action.payload;
    },

    setEducation: (state, action: PayloadAction<Education[]>) => {
      state.education = action.payload;
    },

    resetStatus: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioDetails.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchPortfolioDetails.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.lastFetched = Date.now();
        if (action.payload) {
          if (action.payload.profile) {
            state.profile = { ...state.profile, ...action.payload.profile };
          }
          if (action.payload.skills) {
            state.skills = action.payload.skills;
          }
          if (action.payload.featuredSkills) {
            state.featuredSkills = action.payload.featuredSkills;
          }
          if (action.payload.projects) {
            state.projects = action.payload.projects;
          }
          if (action.payload.experience) {
            state.experience = action.payload.experience;
          }
          if (action.payload.education) {
            state.education = action.payload.education;
          }
        }
      })
      .addCase(fetchPortfolioDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload ?? "Failed to fetch portfolio data";
      });
  },
});

export const {
  updateProfile,
  setExperience,
  setProjects,
  setSkills,
  setFeaturedSkills,
  setEducation,
  resetStatus,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
