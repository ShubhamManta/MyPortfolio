import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "code" | "server" | "layout" | "zap" | "database" | "shield";
}

export interface TechStackItem {
  name: string;
  badge: string;
  category: string;
  color?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
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
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  yearsOfExperience: number;
  avatar: string;
  summary: string;
  bioShort: string;
  stats: {
    projectsCompleted: string;
    happyClients: string;
    yearsExperience: string;
    technologies: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface PortfolioState {
  profile: ProfileDetails;
  services: ServiceItem[];
  techStack: TechStackItem[];
  projects: PortfolioProject[];
  testimonials: TestimonialItem[];
  skills: SkillCategory[];
  featuredSkills: SkillItem[];
  experience: Experience[];
  education: Education[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastFetched: number | null;
}

const initialState: PortfolioState = {
  profile: {
    name: "Shubham Manta",
    title: "Software Engineer",
    headline: "Building Scalable Solutions with Clean Code & Modern Tech",
    subheadline:
      "I'm a passionate Software Engineer who loves building high-performance web applications and solving real-world problems.",
    location: "Noida, Uttar Pradesh, India",
    email: "mantashubham@gmail.com",
    phone: "+91 97367 76853",
    availability: "Open to Work",
    yearsOfExperience: 8,
    avatar: "/images/ShubhamManta.jpg",
    summary:
      "Senior Software Engineer with around 8 years of experience building high-concurrency web platforms, distributed backends, and low-latency real-time systems across fintech and healthcare. Experienced in Node.js, NestJS, Next.js, PHP, WebSockets, event-driven architectures, applied AI, and database optimization.",
    bioShort:
      "I enjoy turning ideas into reality using modern technologies and best practices. When I'm not coding, you'll find me exploring emerging tech, reading, or traveling.",
    stats: {
      projectsCompleted: "20+",
      happyClients: "15+",
      yearsExperience: "8+",
      technologies: "10+",
    },
    socialLinks: {
      github: "https://github.com/shubisworld",
      linkedin: "https://www.linkedin.com/in/shubham-manta-94570b224",
      twitter: "https://x.com",
      email: "mantashubham@gmail.com",
    },
  },

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Building responsive and performant web applications using modern frameworks and technologies.",
      icon: "code",
    },
    {
      id: "backend-dev",
      title: "Backend Development",
      description:
        "Creating robust APIs and backend systems with security, scalability, and performance in mind.",
      icon: "server",
    },
    {
      id: "uiux-impl",
      title: "UI/UX Implementation",
      description:
        "Converting designs into beautiful, intuitive, and interactive user interfaces.",
      icon: "layout",
    },
    {
      id: "perf-opt",
      title: "Performance Optimization",
      description:
        "Improving application performance, optimizing queries, and enhancing user experience.",
      icon: "zap",
    },
  ],

  techStack: [
    { name: "JavaScript", badge: "JS", category: "Languages", color: "#F7DF1E" },
    { name: "TypeScript", badge: "TS", category: "Languages", color: "#3178C6" },
    { name: "React", badge: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", badge: "Next.js", category: "Frontend", color: "#FFFFFF" },
    { name: "Node.js", badge: "Node.js", category: "Backend", color: "#5FA04E" },
    { name: "Express.js", badge: "ex", category: "Backend", color: "#FFFFFF" },
    { name: "MongoDB", badge: "MongoDB", category: "Databases", color: "#47A248" },
    { name: "PostgreSQL", badge: "PostgreSQL", category: "Databases", color: "#4169E1" },
    { name: "Tailwind CSS", badge: "Tailwind CSS", category: "Frontend", color: "#38BDF8" },
    { name: "Git", badge: "Git", category: "Tools", color: "#F05032" },
  ],

  projects: [
    {
      id: "dev-analytics",
      title: "DevAnalytics",
      category: "Fintech & Analytics",
      description:
        "Analytics dashboard for developers to track productivity, code metrics, and low-latency market order books.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fxview.com/global/",
      githubUrl: "https://github.com/shubisworld",
      featured: true,
    },
    {
      id: "shop-sphere",
      title: "ShopSphere",
      category: "E-Commerce & Scalable APIs",
      description:
        "Modern e-commerce platform with cart, payments, real-time doctor-patient tracking, and order management.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://github.com/shubisworld",
      githubUrl: "https://github.com/shubisworld",
      featured: true,
    },
    {
      id: "task-flow",
      title: "TaskFlow",
      category: "Productivity & Real-time",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and WebSocket features.",
      technologies: ["React", "Express.js", "Socket.io"],
      liveUrl: "https://career-admin.dev.vinove.com/",
      githubUrl: "https://career-admin.dev.vinove.com/",
      featured: true,
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Rohit Sharma",
      role: "CTO",
      company: "TechVision",
      content:
        "Shubham is an exceptional developer. He delivered high-quality work on time and exceeded our expectations. Highly recommended!",
      avatar: "RS",
    },
    {
      id: "test-2",
      name: "Priya Mehta",
      role: "Product Manager",
      company: "InnovateX",
      content:
        "Working with Shubham was a great experience. He's professional, communicative, and his code quality is top-notch.",
      avatar: "PM",
    },
    {
      id: "test-3",
      name: "Vikram Singh",
      role: "Founder",
      company: "StartupHub",
      content:
        "Shubham's technical skills and problem-solving ability helped our project succeed. I would love to work with him again.",
      avatar: "VS",
    },
  ],

  featuredSkills: [
    {
      name: "React",
      level: "Expert",
      percentage: 92,
      category: "Frontend",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      level: "Expert",
      percentage: 90,
      category: "Frontend",
      color: "#FFFFFF",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      percentage: 88,
      category: "Languages",
      color: "#3178C6",
    },
    {
      name: "Node.js",
      level: "Advanced",
      percentage: 86,
      category: "Backend",
      color: "#5FA04E",
    },
    {
      name: "Tailwind CSS",
      level: "Expert",
      percentage: 92,
      category: "Frontend",
      color: "#38BDF8",
    },
  ],

  skills: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      category: "Databases & Tools",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Git", "GitHub"],
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

  loading: "idle",
  error: null,
  lastFetched: null,
};

export const fetchPortfolioDetails = createAsyncThunk<
  Partial<PortfolioState>,
  void,
  { rejectValue: string }
>("portfolio/fetchPortfolioDetails", async (_, { rejectWithValue }) => {
  try {
    if (typeof window !== "undefined") {
      const response = await fetch("/api/portfolio", {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }
    return initialState;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch portfolio details";
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
    setServices: (state, action: PayloadAction<ServiceItem[]>) => {
      state.services = action.payload;
    },
    setTechStack: (state, action: PayloadAction<TechStackItem[]>) => {
      state.techStack = action.payload;
    },
    setProjects: (state, action: PayloadAction<PortfolioProject[]>) => {
      state.projects = action.payload;
    },
    setTestimonials: (state, action: PayloadAction<TestimonialItem[]>) => {
      state.testimonials = action.payload;
    },
    setExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experience = action.payload;
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
          if (action.payload.services) {
            state.services = action.payload.services;
          }
          if (action.payload.techStack) {
            state.techStack = action.payload.techStack;
          }
          if (action.payload.projects) {
            state.projects = action.payload.projects;
          }
          if (action.payload.testimonials) {
            state.testimonials = action.payload.testimonials;
          }
          if (action.payload.skills) {
            state.skills = action.payload.skills;
          }
          if (action.payload.featuredSkills) {
            state.featuredSkills = action.payload.featuredSkills;
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
  setServices,
  setTechStack,
  setProjects,
  setTestimonials,
  setExperience,
  setSkills,
  setFeaturedSkills,
  setEducation,
  resetStatus,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
