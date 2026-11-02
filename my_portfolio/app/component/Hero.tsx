"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Briefcase,
  Layers,
  Smile,
  ShieldCheck,
  Mail,
  ChevronDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { useAppSelector } from "@/lib/hooks";
import { selectProfile } from "@/store";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const profile = useAppSelector(selectProfile);
  const [displayText, setDisplayText] = useState("");
  const fullName = profile?.name || "Shubham Manta";

  // Typewriter effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullName.slice(0, index));
      index++;
      if (index > fullName.length) {
        clearInterval(interval);
      }
    }, 90);
    return () => clearInterval(interval);
  }, [fullName]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 sm:py-16 md:py-20">
      {/* Background radial cyan glow beneath hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Intro & Call to Action */}
        <div className="flex flex-col items-start space-y-6 lg:col-span-5 z-10">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#081528]/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              {profile?.status || "Available for Freelance & Roles"}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-light text-slate-300 tracking-wide">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white flex items-center flex-wrap">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="inline-block text-cyan-400 animate-cursor font-light ml-1">
                |
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 pt-1">
              {profile?.title || "Senior Full-Stack & Systems Engineer"}
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
            {profile?.summary ||
              "Senior Full-Stack Engineer with around 8 years of experience building high-concurrency web platforms, distributed backends, and low-latency real-time systems."}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95"
            >
              <span>View My Work</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <a
              href={`mailto:${profile?.email || "mantashubham@gmail.com"}?subject=Interview%20Inquiry%20-%20Shubham%20Manta`}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/25 bg-[#0a1526]/70 px-5 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0e2038] hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              <span>Contact / Resume</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-6 sm:pt-10">
            <button
              onClick={scrollToSkills}
              className="group flex items-center gap-3 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cyan-500/30 bg-[#081324] p-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)] group-hover:border-cyan-400">
                <div className="h-2 w-1 animate-bounce rounded-full bg-cyan-400" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-widest text-slate-400 group-hover:text-cyan-300 uppercase">
                Scroll Down
              </span>
            </button>
          </div>
        </div>

        {/* Center & Right Column: Developer Photo + Cyber Tech Rig + Floating Stats */}
        <div className="relative lg:col-span-7 flex flex-col items-center">
          {/* Main Visual Composition: Developer + Laptop Mockup */}
          <div className="relative w-full max-w-2xl flex flex-col items-center">
            {/* Ambient Cyan Aura */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />

            {/* Top Right Floating Stat Card */}
            <div className="self-end mb-4 z-20 w-full sm:w-auto">
              <div className="rounded-2xl border border-cyan-500/30 bg-[#0a1528]/85 p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.2)] backdrop-blur-xl">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">
                        {profile?.stats?.yearsExperience || "8+"}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 leading-tight">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">
                        {profile?.stats?.projectsCompleted || "25+"}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 leading-tight">
                        Projects Built
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.3)]">
                      <Smile className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">
                        {profile?.stats?.happyClients || "10+"}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 leading-tight">
                        Enterprise Platforms
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">
                        {profile?.stats?.jobSuccess || "100%"}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 leading-tight">
                        Delivery Success
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links row inside stat card */}
                <div className="mt-4 pt-3.5 border-t border-cyan-500/15 flex items-center justify-around gap-2">
                  <a
                    href={profile?.github || "https://github.com/shubisworld"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#081222] text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={profile?.linkedin || "https://www.linkedin.com/in/shubham-manta-94570b224"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#081222] text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#081222] text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                    aria-label="Twitter / X"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <button
                    onClick={onOpenContact}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#081222] text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Central Visual: Photo and High-tech Cyber Rig */}
            <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Profile Picture Card */}
              <div className="group relative flex shrink-0 items-center justify-center">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 opacity-60 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />

                {/* Photo container */}
                <div className="relative h-64 w-64 sm:h-72 sm:w-72 overflow-hidden rounded-2xl border-2 border-cyan-400/40 bg-[#061122] shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                  <Image
                    src={profile?.avatar || "/images/ShubhamManta.jpg"}
                    alt={profile?.name || "Shubham Manta"}
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle dark bottom gradient on image */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#061122] to-transparent opacity-75" />

                  {/* Corner cyber decals */}
                  <div className="absolute top-2 left-2 h-2.5 w-2.5 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 h-2.5 w-2.5 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-cyan-400" />
                </div>
              </div>

              {/* Cyber Laptop / Terminal Rig Mockup (as in the Pinterest pin) */}
              <div className="w-full max-w-sm rounded-2xl border border-cyan-500/25 bg-[#071324]/90 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-xl">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400/80">
                    shubham@system:~
                  </span>
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
                </div>

                {/* Code & 3D wireframe preview inside laptop screen */}
                <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-1.5">
                  <p className="text-cyan-400">
                    <span className="text-slate-500">Real-time Trading & Systems</span>
                  </p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-300">architect</span> = &#123;
                  </p>
                  <p className="pl-3">
                    experience: <span className="text-emerald-400">&quot;8+ Years&quot;</span>,
                  </p>
                  <p className="pl-3">
                    stack: [<span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;NestJS&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;WebSockets&quot;</span>],
                  </p>
                  <p className="pl-3">
                    latency: <span className="text-teal-300">&quot;&lt; 15ms&quot;</span>,
                  </p>
                  <p className="pl-3">
                    status: <span className="text-cyan-300">&quot;Ready for Impact&quot;</span>
                  </p>
                  <p>&#125;;</p>

                  {/* 3D Wireframe Cyber Cube Graphic */}
                  <div className="mt-3 relative flex items-center justify-center rounded-xl border border-cyan-500/20 bg-[#040a14] p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
                    <svg
                      viewBox="0 0 100 100"
                      className="h-16 w-16 text-cyan-400 animate-[spin_12s_linear_infinite]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      {/* Isometric Cube Wireframe */}
                      <polygon points="50,15 85,35 50,55 15,35" stroke="rgba(34,211,238,0.9)" />
                      <polygon points="15,35 50,55 50,90 15,70" stroke="rgba(6,182,212,0.7)" />
                      <polygon points="85,35 50,55 50,90 85,70" stroke="rgba(56,189,248,0.7)" />
                      <circle cx="50" cy="55" r="3" fill="#22d3ee" />
                      <line x1="50" y1="15" x2="50" y2="55" stroke="rgba(34,211,238,0.4)" strokeDasharray="2,2" />
                    </svg>
                    <div className="ml-3 font-mono text-[10px] text-slate-400">
                      <span className="text-cyan-300 font-semibold block">SYSTEM ONLINE</span>
                      <span>High Concurrency Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
