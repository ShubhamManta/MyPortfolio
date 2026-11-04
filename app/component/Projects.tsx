"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectProjects } from "../store";

export default function Projects() {
  const projects = useAppSelector(selectProjects);

  // High-fidelity UI mockup renderer matching Image 2's cards
  const renderProjectMockup = (projectId: string) => {
    if (projectId === "dev-analytics") {
      return (
        <div className="relative w-full h-44 bg-[#0a0f18] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-500 text-[9px]">dev-analytics.app</span>
          </div>
          {/* Mock Dashboard Graphs */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="rounded bg-[#121926] p-1.5 border border-white/5">
              <span className="text-slate-400 text-[8px] block">Requests/s</span>
              <span className="text-amber-400 text-xs font-bold">14.2k</span>
            </div>
            <div className="rounded bg-[#121926] p-1.5 border border-white/5">
              <span className="text-slate-400 text-[8px] block">Latency</span>
              <span className="text-emerald-400 text-xs font-bold">18ms</span>
            </div>
            <div className="rounded bg-[#121926] p-1.5 border border-white/5">
              <span className="text-slate-400 text-[8px] block">Uptime</span>
              <span className="text-cyan-400 text-xs font-bold">99.98%</span>
            </div>
          </div>
          {/* Mock Purple Wave Line Graph */}
          <div className="h-14 w-full flex items-end gap-1 pt-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100, 85, 65, 90, 110].map(
              (val, idx) => (
                <div
                  key={idx}
                  style={{ height: `${val * 0.45}%` }}
                  className="flex-1 bg-gradient-to-t from-purple-600/30 to-purple-400 rounded-t"
                />
              )
            )}
          </div>
        </div>
      );
    }

    if (projectId === "shop-sphere") {
      return (
        <div className="relative w-full h-44 bg-[#0d131f] p-3 flex flex-col justify-between overflow-hidden">
          {/* Mock Clean E-Commerce Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-500 text-[9px] font-mono">shopsphere.io</span>
          </div>
          {/* Mock Product Grid */}
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="rounded bg-[#172033] p-2 border border-white/5 flex flex-col items-center">
              <div className="w-full h-12 rounded bg-amber-500/10 mb-1.5 flex items-center justify-center text-amber-400 text-xs">
                ☕
              </div>
              <div className="w-12 h-1.5 rounded bg-slate-600 mb-1" />
              <div className="w-8 h-1.5 rounded bg-amber-500/60" />
            </div>
            <div className="rounded bg-[#172033] p-2 border border-white/5 flex flex-col items-center">
              <div className="w-full h-12 rounded bg-cyan-500/10 mb-1.5 flex items-center justify-center text-cyan-400 text-xs">
                🎧
              </div>
              <div className="w-12 h-1.5 rounded bg-slate-600 mb-1" />
              <div className="w-8 h-1.5 rounded bg-cyan-500/60" />
            </div>
            <div className="rounded bg-[#172033] p-2 border border-white/5 flex flex-col items-center">
              <div className="w-full h-12 rounded bg-emerald-500/10 mb-1.5 flex items-center justify-center text-emerald-400 text-xs">
                ⌚
              </div>
              <div className="w-12 h-1.5 rounded bg-slate-600 mb-1" />
              <div className="w-8 h-1.5 rounded bg-emerald-500/60" />
            </div>
          </div>
        </div>
      );
    }

    // Default: TaskFlow
    return (
      <div className="relative w-full h-44 bg-[#0a0f18] p-3 flex flex-col justify-between overflow-hidden">
        {/* Mock Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <span className="text-slate-500 text-[9px] font-mono">taskflow.app</span>
        </div>
        {/* Mock Kanban Columns */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="rounded bg-[#131b2c] p-2 border border-white/5 space-y-1.5">
            <span className="text-[9px] font-bold text-slate-400 block uppercase">To Do</span>
            <div className="rounded bg-[#1a243a] p-1 text-[8px] text-slate-300">API Gateway</div>
            <div className="rounded bg-[#1a243a] p-1 text-[8px] text-slate-300">Auth Token</div>
          </div>
          <div className="rounded bg-[#131b2c] p-2 border border-white/5 space-y-1.5">
            <span className="text-[9px] font-bold text-amber-400 block uppercase">In Progress</span>
            <div className="rounded bg-amber-500/10 border border-amber-500/20 p-1 text-[8px] text-amber-300">
              WebSockets
            </div>
          </div>
          <div className="rounded bg-[#131b2c] p-2 border border-white/5 space-y-1.5">
            <span className="text-[9px] font-bold text-emerald-400 block uppercase">Done</span>
            <div className="rounded bg-emerald-500/10 border border-emerald-500/20 p-1 text-[8px] text-emerald-300">
              Deploy V1
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with "View All Projects ->" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/shubisworld"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111724]/90 border border-white/5 overflow-hidden hover:border-amber-500/40 hover:bg-[#151c2c] transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40 flex flex-col group"
            >
              {/* Card Header Preview Area */}
              <div className="relative border-b border-white/5 overflow-hidden group-hover:brightness-105 transition-all">
                {renderProjectMockup(project.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-amber-400 transition-colors p-1"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#182030] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
