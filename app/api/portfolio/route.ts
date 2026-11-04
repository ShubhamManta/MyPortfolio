import { NextResponse } from "next/server";

export async function GET() {
  const portfolioData = {
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
  };

  return NextResponse.json(portfolioData);
}
