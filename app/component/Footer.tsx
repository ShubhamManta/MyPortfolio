"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";
import { selectProfile } from "@/store";

export default function Footer() {
  const profile = useAppSelector(selectProfile);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-12 border-t border-cyan-500/15 pt-8 pb-12 text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-xs sm:text-sm text-slate-500">
          © {currentYear} {profile?.name || "Shubham Manta"}. All rights reserved.
        </div>

        {/* Center Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm font-medium">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-cyan-300 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="hover:text-cyan-300 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-cyan-300 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="hover:text-cyan-300 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-cyan-300 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-cyan-500/20 bg-[#081324] px-4 py-2 text-xs font-semibold text-slate-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUp className="h-3 w-3" />
          </div>
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
}

