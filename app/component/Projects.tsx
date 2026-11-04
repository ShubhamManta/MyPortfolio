"use client";

import React, { useState } from "react";
import {
  Briefcase,
  ArrowUpRight,
  TrendingUp,
  Activity,
  FileCode2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { useAppSelector } from "@/lib/hooks";
import { selectProjects } from "@/store";

export default function Projects() {
  const projects = useAppSelector(selectProjects);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTags = ["All", "Next.js", "WebSockets", "Node.js", "AI"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
        p.technologies.some((t) =>
          t.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  // High-fidelity UI mockups simulating real dark-mode application interfaces
  const renderProjectMockup = (projectId?: string, index?: number) => {
    switch (projectId) {
      case "crypto-trading":
        return (
          <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#060c18] border border-cyan-500/20 p-3 font-mono text-[10px]">
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/15 pb-1.5 mb-2 text-slate-400">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-cyan-400" /> BTC / USDT Live Feed
              </span>
              <span className="text-emerald-400 font-semibold">$94,820.50 (+4.8%)</span>
            </div>

            {/* Mock Candlestick Chart / Waves */}
            <div className="h-20 w-full flex items-end gap-1.5 pt-2 px-1">
              {[40, 55, 38, 70, 65, 80, 72, 90, 85, 95, 88, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className={`w-full rounded-sm ${i % 3 === 0
                      ? "bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]"
                      : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      }`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>

            {/* Mock Orderbook Row */}
            <div className="mt-2.5 flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-cyan-500/10">
              <span>Latency: 8.2ms</span>
              <span className="text-cyan-300">WebSocket Connected</span>
              <span>24h Vol: $1.4B</span>
            </div>
          </div>
        );

      case "telehealth-portal":
        return (
          <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#07101f] border border-teal-500/20 p-3 font-sans text-[11px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-teal-500/15 pb-1.5 mb-2">
              <div className="flex items-center gap-1.5 text-teal-300 font-bold">
                <Activity className="h-3.5 w-3.5" />
                <span>Doctor Portal • Active Cases</span>
              </div>
              <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-[9px] text-teal-300 font-mono">
                RBAC Secure
              </span>
            </div>

            {/* List items */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-lg bg-[#0b192e] p-1.5 border border-teal-500/10">
                <span className="text-slate-300">Dr. Sarah Vance (Cardiology)</span>
                <span className="text-emerald-400 font-mono text-[10px]">● Online</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0b192e] p-1.5 border border-teal-500/10">
                <span className="text-slate-300">Patient Tele-consult #4829</span>
                <span className="text-cyan-300 font-mono text-[10px]">Encrypted</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0b192e] p-1.5 border border-teal-500/10">
                <span className="text-slate-300">EHR Sync Pipeline</span>
                <span className="text-teal-400 font-mono text-[10px]">Complete</span>
              </div>
            </div>
          </div>
        );

      case "headless-publishing":
        return (
          <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#081224] border border-blue-500/20 p-3 font-sans text-[11px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-500/15 pb-1.5 mb-2 text-slate-300">
              <div className="flex items-center gap-1.5 text-blue-300 font-bold">
                <FileCode2 className="h-3.5 w-3.5" />
                <span>Sanity.io + Next.js Engine</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px]">Revalidated</span>
            </div>

            {/* Mock CMS preview grid */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="rounded-lg bg-[#050c18] p-2 border border-blue-500/10">
                <div className="h-2 w-16 bg-blue-400/60 rounded mb-1.5" />
                <div className="h-1.5 w-full bg-slate-700 rounded mb-1" />
                <div className="h-1.5 w-2/3 bg-slate-700 rounded" />
              </div>
              <div className="rounded-lg bg-[#050c18] p-2 border border-blue-500/10">
                <div className="h-2 w-14 bg-cyan-400/60 rounded mb-1.5" />
                <div className="h-1.5 w-full bg-slate-700 rounded mb-1" />
                <div className="h-1.5 w-1/2 bg-slate-700 rounded" />
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[9px] text-slate-400 font-mono">
              <span>ISR Edge Caching: 100%</span>
              <span className="text-blue-300">Global TTFB: 24ms</span>
            </div>
          </div>
        );

      case "ai-careerpilot":
      default:
        return (
          <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#061226] border border-cyan-500/20 p-3 font-sans text-[11px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/15 pb-1.5 mb-2">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>AI Prompt Orchestration</span>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[9px] text-cyan-300 font-mono">
                LLM Agentic
              </span>
            </div>

            {/* Chat Bubble Previews */}
            <div className="space-y-1.5">
              <div className="max-w-[85%] rounded-lg bg-[#0a1c36] p-2 text-[10px] text-slate-300 border border-cyan-500/10">
                Generate optimized distributed architecture for high-concurrency event stream...
              </div>
              <div className="max-w-[90%] ml-auto rounded-lg bg-cyan-950/50 p-2 text-[10px] text-cyan-200 border border-cyan-400/25">
                ✦ Synthesizing Node.js + WebSocket cluster with Redis backend.
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-14 sm:py-20">
      {/* Background cyan glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#08172c]/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
            <span>FEATURED WORK</span>
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-500/20 bg-[#071324]/80 p-1.5 backdrop-blur-md">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-200 ${activeFilter === tag
                ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid matching the Pinterest layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id || project.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#081426]/75 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0b1a30]/90 hover:shadow-[0_12px_40px_rgba(6,182,212,0.25)] hover:-translate-y-1.5"
          >
            {/* Top UI Mockup Card */}
            <div className="transition-transform duration-500 group-hover:scale-[1.02]">
              {renderProjectMockup(project.id, idx)}
            </div>

            {/* Content Details */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-cyan-500/15 bg-[#050d18] px-2.5 py-0.5 text-[11px] font-medium text-slate-300 group-hover:border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-5 pt-3.5 border-t border-cyan-500/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400/80">
                {project.category || "Full-Stack System"}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl || "https://github.com/shubisworld"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#06101f] text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-[#06101f] text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-all"
                  aria-label="View Project"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Subtle glow wash on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
