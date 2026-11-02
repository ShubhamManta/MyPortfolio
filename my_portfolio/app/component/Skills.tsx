"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Radio,
  ArrowUpRight,
  Flame,
  CheckCircle,
} from "lucide-react";
import { useAppSelector } from "@/lib/hooks";
import { selectFeaturedSkills, selectSkills } from "@/store";

export default function Skills() {
  const featuredSkills = useAppSelector(selectFeaturedSkills);
  const skillCategories = useAppSelector(selectSkills);

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Real-time", "Databases"];

  const filteredSkills =
    activeCategory === "All"
      ? featuredSkills
      : featuredSkills.filter(
          (s) => s.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  // Helper to render custom tech icons or symbols matching the pin design
  const renderSkillIcon = (iconName?: string, name?: string) => {
    switch (iconName) {
      case "react":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/60 border border-cyan-400/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <svg viewBox="0 0 100 100" className="h-6 w-6 animate-[spin_20s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="6">
              <ellipse cx="50" cy="50" rx="42" ry="16" />
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
              <circle cx="50" cy="50" r="6" fill="currentColor" />
            </svg>
          </div>
        );
      case "nextjs":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/90 border border-slate-500/40 text-white font-black text-xl shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            N
          </div>
        );
      case "typescript":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950/70 border border-blue-400/40 text-blue-400 font-bold text-base shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            TS
          </div>
        );
      case "nodejs":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950/70 border border-emerald-400/40 text-emerald-400 font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            JS
          </div>
        );
      case "tailwind":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-950/70 border border-sky-400/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          </div>
        );
      case "postgresql":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-950/70 border border-indigo-400/40 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Database className="h-5 w-5" />
          </div>
        );
      case "mongodb":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950/70 border border-emerald-400/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M17.193 11.026c-.44-.925-1.04-1.748-1.782-2.45-1.378-1.304-3.14-2.095-4.305-3.52C10.155 3.888 9.774 2.148 10.02 0c-1.353 1.343-2.673 3.612-2.464 6.643.147 2.13.916 4.093 1.93 5.928 1.05 1.9 2.33 3.655 3.195 5.642.84 1.93.96 4.24-.135 6.095 1.258-.456 2.37-1.353 3.14-2.45 1.62-2.31 1.76-5.59.507-8.832v-.002z" />
              <path d="M12.001 24c-.035 0-.07-.002-.105-.005-1.442-.142-2.736-.93-3.565-2.097-1.493-2.1-1.47-5.06-.412-7.854.743-1.96 1.763-3.78 2.827-5.617 1.01-1.748 1.97-3.535 2.518-5.467.042-.147.168-.255.32-.268.155-.015.302.067.37.208 1.03 2.106.828 4.675-.41 6.86-1.127 1.99-2.324 3.926-3.192 6.04-.637 1.55-.71 3.22-.213 4.708.438 1.31 1.36 2.348 2.585 2.894.275.123.364.444.208.682-.128.196-.328.316-.546.316z" opacity=".7" />
            </svg>
          </div>
        );
      case "nestjs":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-950/70 border border-rose-400/40 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
            <Flame className="h-5 w-5" />
          </div>
        );
      case "websockets":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Radio className="h-5 w-5 animate-pulse" />
          </div>
        );
      default:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/70 border border-cyan-400/40 text-cyan-400">
            <Code2 className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section id="skills" className="relative py-14 sm:py-20">
      {/* Background cyan glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#08172c]/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>MY EXPERTISE</span>
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-500/20 bg-[#071324]/80 p-1.5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid matching the Pinterest layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-[#091526]/75 p-5 shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0c1c33]/90 hover:shadow-[0_12px_35px_rgba(6,182,212,0.25)] hover:-translate-y-1.5"
          >
            {/* Top row: Icon */}
            <div className="flex items-start justify-between">
              {renderSkillIcon(skill.icon, skill.name)}
              <span className="font-mono text-xs font-semibold text-cyan-300/80 bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-500/20">
                {skill.percentage}%
              </span>
            </div>

            {/* Middle row: Name & Level */}
            <div className="mt-5 space-y-1">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs font-medium text-slate-400">
                {skill.level}
              </p>
            </div>

            {/* Bottom: Glowing Progress Bar */}
            <div className="mt-4">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#22d3ee] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>

            {/* Corner hover highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Additional Tech Categories Accordion / Pills for comprehensive view */}
      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-[#081222]/80 p-6 backdrop-blur-xl">
        <h3 className="text-sm font-semibold tracking-wide text-cyan-300 uppercase mb-4 flex items-center gap-2">
          <Layers className="h-4 w-4" />
          <span>Full Technology Ecosystem</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 tracking-wider">
                {catGroup.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {catGroup.skills.map((s, idx) => (
                  <span
                    key={`${catGroup.category}-${s}-${idx}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/15 bg-[#050d18] px-2.5 py-1 text-xs text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    <CheckCircle className="h-3 w-3 text-cyan-400" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

