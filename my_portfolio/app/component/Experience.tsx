"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useAppSelector } from "@/lib/hooks";
import { selectExperience, selectEducation } from "@/store";

export default function Experience() {
  const experiences = useAppSelector(selectExperience);
  const education = useAppSelector(selectEducation);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="relative py-14 sm:py-20">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#08172c]/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>CAREER TIMELINE</span>
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
        </div>

        {/* Tab switch pills */}
        <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-[#071324]/80 p-1.5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              activeTab === "experience"
                ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              activeTab === "education"
                ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Education</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "experience" ? (
        <div className="relative space-y-6 before:absolute before:inset-0 before:left-4 sm:before:left-6 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.duration}
              className="group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pl-10 sm:pl-14"
            >
              {/* Timeline marker */}
              <div className="absolute left-2.5 sm:left-4.5 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#050b14] shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="w-full rounded-2xl border border-cyan-500/20 bg-[#081426]/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0b1c34]/90 hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/15 pb-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400/90">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 rounded-md bg-[#050e1c] px-2.5 py-1 border border-cyan-500/15">
                      <Calendar className="h-3 w-3 text-cyan-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-[#050e1c] px-2.5 py-1 border border-cyan-500/15">
                      <MapPin className="h-3 w-3 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-cyan-500/20 bg-[#081426]/75 p-6 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-cyan-400/90 mb-3">
                {edu.institution}
              </p>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-[#050d1a] px-2.5 py-1 text-xs text-slate-400 font-mono border border-cyan-500/15">
                <Calendar className="h-3 w-3 text-cyan-400" />
                <span>{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

