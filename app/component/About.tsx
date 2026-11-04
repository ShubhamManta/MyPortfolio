"use client";

import React from "react";
import { User, Mail, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectProfile } from "../store";

export default function About() {
  const profile = useAppSelector(selectProfile);

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek Dark Enclosing Container Matching Image 2 */}
        <div className="relative rounded-3xl bg-[#0f1420]/80 border border-white/10 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-amber-500/[0.06] rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Quick Profile Details */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl bg-[#141b2b]/90 border border-white/5 p-6 space-y-4">
                {/* Name */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Name
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {profile.name}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Experience
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {profile.stats?.yearsExperience || "8+"} Years
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Availability
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      {profile.availability || "Open to Work"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: Bio Story */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-block">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  About Me
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Who I Am
                </h2>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I&apos;m {profile.name}, a Software Engineer with a strong foundation
                  in computer science and a passion for creating efficient, scalable,
                  and user-friendly applications.
                </p>
                <p className="text-slate-400 text-sm">
                  {profile.bioShort ||
                    "I enjoy turning ideas into reality using modern technologies and best practices. When I'm not coding, you'll find me exploring new tech, reading, or traveling."}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm font-medium text-slate-200 hover:text-white hover:border-amber-400/50 hover:bg-white/10 transition-all group"
                >
                  <span>Know More About Me</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: 2x2 Large Stat Grid (Matches Image 2) */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Stat 1 */}
                <div className="rounded-2xl bg-[#141b2b]/90 border border-white/5 p-5 text-center hover:border-amber-500/30 transition-all group">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors block">
                    {profile.stats?.projectsCompleted || "20+"}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Projects Completed
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="rounded-2xl bg-[#141b2b]/90 border border-white/5 p-5 text-center hover:border-amber-500/30 transition-all group">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors block">
                    {profile.stats?.happyClients || "15+"}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Happy Clients
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="rounded-2xl bg-[#141b2b]/90 border border-white/5 p-5 text-center hover:border-amber-500/30 transition-all group">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors block">
                    {profile.stats?.yearsExperience || "8+"}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Years Experience
                  </span>
                </div>

                {/* Stat 4 */}
                <div className="rounded-2xl bg-[#141b2b]/90 border border-white/5 p-5 text-center hover:border-amber-500/30 transition-all group">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors block">
                    {profile.stats?.technologies || "10+"}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
