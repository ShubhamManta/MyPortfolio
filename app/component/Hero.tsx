"use client";

import React from "react";
import Image from "next/image";
import { Download, Code2, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { useAppSelector } from "../lib/hooks";
import { selectProfile } from "../store";

export default function Hero() {
  const profile = useAppSelector(selectProfile);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.08] rounded-full blur-[150px] animate-halo-breathe" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 animate-fade-in-up">
            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-6 shadow-sm shadow-amber-500/10 hover:border-amber-400/50 transition-colors">
              <span className="text-xs sm:text-sm font-medium text-amber-400">
                Hello, I&apos;m {profile.name} 👋
              </span>
            </div>

            {/* Main Headline (Matching Image styling with dual-color line emphasis) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-black text-white leading-[1.15] tracking-tight mb-6">
              Building Scalable <br className="hidden sm:inline" />
              Solutions with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Clean
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Code &amp; Modern Tech
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              {profile.subheadline ||
                "I'm a passionate Software Engineer who loves building high-performance web applications and solving real-world problems."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${profile.email}?subject=Resume%20Request`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-white/20 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-amber-400/50 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <a
                href={profile.socialLinks?.github || "https://github.com/shubisworld"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#131926] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-[#182030] transition-all hover:scale-110 active:scale-95 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.socialLinks?.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#131926] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-[#182030] transition-all hover:scale-110 active:scale-95 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.socialLinks?.twitter || "https://x.com"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#131926] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-[#182030] transition-all hover:scale-110 active:scale-95 shadow-sm"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#131926] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-[#182030] transition-all hover:scale-110 active:scale-95 shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait with Glowing Halo & Floating Badge (Matching Image 2) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[430px] md:h-[430px]">
              {/* Outer Radiant Golden Ambient Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/25 via-amber-400/35 to-yellow-500/15 blur-3xl transform scale-110 animate-halo-breathe" />

              {/* Glowing Amber Orbital Ring Orbit (Matching the fine golden orbit ring seen in Image 2) */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-amber-400/50 shadow-[0_0_40px_rgba(245,158,11,0.3)] animate-ring-orbit pointer-events-none" />

              {/* Inner Circular Portrait Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-[#0c121d] group">
                <Image
                  src={profile.avatar || "/images/ShubhamManta.jpg"}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Stat Badge (Top-Right, matching Image 2 with animated subtle float) */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#121824]/95 backdrop-blur-md border border-amber-500/40 shadow-2xl shadow-black/60 hover:scale-105 transition-transform animate-float">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-white leading-none">
                    {profile.stats?.yearsExperience || "8+"}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300 mt-1">
                    Years of Experience
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
