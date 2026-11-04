"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useAppSelector } from "../lib/hooks";
import { selectProjects } from "../store";

export default function Projects() {
  const projects = useAppSelector(selectProjects);

  // High-fidelity UI mockup renderer tailored for each project
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case "fxview":
        return (
          <div className="relative w-full h-44 bg-[#080d16] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[8px] font-bold">
                  CySEC • FSCA
                </span>
                <span className="text-slate-400 text-[9px]">fxview.com</span>
              </div>
            </div>

            {/* Trading Pair & Stats */}
            <div className="grid grid-cols-3 gap-2 my-1.5">
              <div className="rounded bg-[#0e1626] p-1.5 border border-white/5">
                <span className="text-slate-400 text-[8px] block">EUR / USD</span>
                <span className="text-emerald-400 text-xs font-bold">1.0892 ▲</span>
              </div>
              <div className="rounded bg-[#0e1626] p-1.5 border border-white/5">
                <span className="text-slate-400 text-[8px] block">SPREAD</span>
                <span className="text-amber-400 text-xs font-bold">0.0 Pips</span>
              </div>
              <div className="rounded bg-[#0e1626] p-1.5 border border-white/5">
                <span className="text-slate-400 text-[8px] block">LEVERAGE</span>
                <span className="text-cyan-400 text-xs font-bold">1:500</span>
              </div>
            </div>

            {/* Live Candlestick / Graph */}
            <div className="h-14 w-full flex items-end gap-1.5 pt-1">
              {[45, 60, 50, 75, 65, 85, 70, 95, 80, 100, 90, 110, 95, 120, 105, 130].map(
                (val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val * 0.4}%` }}
                    className="flex-1 bg-gradient-to-t from-emerald-600/30 to-emerald-400 rounded-t group-hover:from-emerald-600/50 group-hover:to-emerald-300 transition-all duration-300"
                  />
                )
              )}
            </div>
          </div>
        );

      case "crypto-market":
        return (
          <div className="relative w-full h-44 bg-[#0a0f1a] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-amber-400 text-[9px] font-bold">LIVE CRYPTO EXCHANGE</span>
            </div>

            {/* Trading Controls & Order Book */}
            <div className="grid grid-cols-3 gap-2 my-1.5">
              <div className="rounded bg-[#121929] p-1.5 border border-white/5">
                <span className="text-slate-400 text-[8px] block">BTC / USDT</span>
                <span className="text-emerald-400 text-xs font-bold">$94,320</span>
              </div>
              <div className="rounded bg-emerald-500/10 border border-emerald-500/30 p-1.5 flex items-center justify-center text-emerald-400 font-bold text-xs">
                BUY ORDER
              </div>
              <div className="rounded bg-red-500/10 border border-red-500/30 p-1.5 flex items-center justify-center text-red-400 font-bold text-xs">
                SELL ORDER
              </div>
            </div>

            {/* Animated Ticker Bars */}
            <div className="h-14 w-full flex items-end gap-1.5 pt-1">
              {[60, 40, 75, 55, 90, 70, 85, 100, 75, 110, 85, 95, 115, 105, 125, 140].map(
                (val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val * 0.38}%` }}
                    className="flex-1 bg-gradient-to-t from-amber-600/30 to-amber-400 rounded-t group-hover:from-amber-600/50 group-hover:to-amber-300 transition-all duration-300"
                  />
                )
              )}
            </div>
          </div>
        );

      case "erp-web-app":
        return (
          <div className="relative w-full h-44 bg-[#090e18] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-slate-400 text-[9px]">ERP Manager • Balance Sheet</span>
            </div>

            {/* ERP Modules */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="rounded bg-[#121a2c] p-2 border border-white/5 space-y-1">
                <span className="text-[8px] text-slate-400 block uppercase">Sales Invoices</span>
                <span className="text-cyan-400 text-xs font-bold block">$184,200</span>
                <div className="w-full h-1 bg-cyan-500/30 rounded" />
              </div>
              <div className="rounded bg-[#121a2c] p-2 border border-white/5 space-y-1">
                <span className="text-[8px] text-slate-400 block uppercase">Purchase Orders</span>
                <span className="text-amber-400 text-xs font-bold block">$112,850</span>
                <div className="w-full h-1 bg-amber-500/30 rounded" />
              </div>
              <div className="rounded bg-[#121a2c] p-2 border border-white/5 space-y-1">
                <span className="text-[8px] text-slate-400 block uppercase">Stock Inventory</span>
                <span className="text-emerald-400 text-xs font-bold block">4,890 Items</span>
                <div className="w-full h-1 bg-emerald-500/30 rounded" />
              </div>
            </div>

            {/* Balance Sheet Status Bar */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#101726] border border-white/5 text-[9px]">
              <span className="text-slate-400">Net Balance Sheet</span>
              <span className="text-emerald-400 font-bold">+ $71,350 (Audited)</span>
            </div>
          </div>
        );

      case "career-pilot":
        return (
          <div className="relative w-full h-44 bg-[#0a0f19] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-purple-400 text-[9px] font-bold">CareerPilot Portals</span>
            </div>

            {/* Dual Portal Cards */}
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="rounded bg-[#141b2c] p-2.5 border border-purple-500/20 space-y-1">
                <span className="text-[8px] text-purple-300 font-bold block uppercase">
                  Institution Portal
                </span>
                <span className="text-white text-xs font-semibold block">48 Active Courses</span>
                <span className="text-slate-400 text-[8px] block">Mobile Student Enroll</span>
              </div>
              <div className="rounded bg-[#141b2c] p-2.5 border border-cyan-500/20 space-y-1">
                <span className="text-[8px] text-cyan-300 font-bold block uppercase">
                  Admin Portal
                </span>
                <span className="text-white text-xs font-semibold block">1,250 Registrations</span>
                <span className="text-slate-400 text-[8px] block">Institutions Oversight</span>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#101728] border border-white/5 text-[9px]">
              <span className="text-slate-400">System Pipeline</span>
              <span className="text-cyan-400 font-medium">Portals Live &amp; Connected</span>
            </div>
          </div>
        );

      case "ers-health":
        return (
          <div className="relative w-full h-44 bg-[#090f18] p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px]">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-emerald-400 text-[9px] font-bold">ERS Healthcare Admin</span>
            </div>

            {/* Medical Entities Grid */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="rounded bg-[#121b2b] p-2 border border-white/5 text-center">
                <span className="text-[8px] text-slate-400 block uppercase">Patients</span>
                <span className="text-emerald-400 text-xs font-bold">3,420</span>
                <span className="text-[8px] text-slate-500 block">Records</span>
              </div>
              <div className="rounded bg-[#121b2b] p-2 border border-white/5 text-center">
                <span className="text-[8px] text-slate-400 block uppercase">Doctors</span>
                <span className="text-cyan-400 text-xs font-bold">185</span>
                <span className="text-[8px] text-slate-500 block">Verified</span>
              </div>
              <div className="rounded bg-[#121b2b] p-2 border border-white/5 text-center">
                <span className="text-[8px] text-slate-400 block uppercase">Hospitals</span>
                <span className="text-amber-400 text-xs font-bold">24</span>
                <span className="text-[8px] text-slate-500 block">Networks</span>
              </div>
            </div>

            {/* Pulse Rate Monitor */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#0f1724] border border-white/5 text-[9px]">
              <span className="text-slate-400">Referrals &amp; Medications</span>
              <span className="text-emerald-400 font-bold">● Active EMR Stream</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-44 bg-[#0a0f18] p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-slate-500 text-[9px] font-mono">application.dev</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-slate-400 text-xs font-mono">
              Live Application
            </div>
          </div>
        );
    }
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
            href="https://github.com/ShubhamManta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors group cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111724]/90 border border-white/5 overflow-hidden hover:border-amber-500/40 hover:bg-[#151c2c] transition-all duration-300 hover:-translate-y-2.5 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col group cursor-default"
            >
              {/* Card Header Preview Area with Smooth Scale on Hover */}
              <div className="relative border-b border-white/5 overflow-hidden">
                <div className="transform group-hover:scale-105 transition-transform duration-500 ease-out">
                  {renderProjectMockup(project.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && project.githubUrl.includes("github.com") && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-amber-400 transition-colors p-1"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-amber-400 transition-colors p-1 group/link"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {project.category && (
                    <span className="text-[11px] font-semibold text-amber-400/90 block mb-2 uppercase tracking-wide">
                      {project.category}
                    </span>
                  )}

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Dual portal links if available */}
                  {project.extraUrl && (
                    <div className="mb-4">
                      <a
                        href={project.extraUrl.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4"
                      >
                        <span>{project.extraUrl.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#182030] text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
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
