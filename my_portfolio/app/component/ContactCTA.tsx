"use client";

import React from "react";
import { ArrowUpRight, MessageSquareCode } from "lucide-react";

interface ContactCTAProps {
  onOpenContact: () => void;
}

export default function ContactCTA({ onOpenContact }: ContactCTAProps) {
  return (
    <section id="contact" className="relative py-10 sm:py-16">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-48 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-transparent blur-[100px]" />

      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-[#081326]/85 p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_35px_rgba(6,182,212,0.18)] backdrop-blur-2xl">
        {/* Subtle grid accent inside banner */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 z-10">
          {/* Left Title */}
          <div className="space-y-1">
            <span className="text-sm font-semibold tracking-wide text-slate-300">
              Let&apos;s build something
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Amazing together
              </span>
              <span className="inline-block text-2xl sm:text-3xl animate-bounce">
                👏
              </span>
            </h2>
          </div>

          {/* Center text */}
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-400">
            I&apos;m always open to discussing new high-concurrency projects, distributed backend architecture, and creative opportunities.
          </p>

          {/* Right Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

