"use client";

import React, { useState, useEffect } from "react";
import { Terminal, ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-2 sm:px-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-cyan-500/20 bg-[#081120]/80 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(6,182,212,0.18)] border-cyan-500/35"
            : "shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2.5 text-left transition-transform duration-200 hover:scale-105"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
            <Terminal className="h-4 w-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm group-hover:bg-cyan-400/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Dev<span className="text-cyan-400">Portfolio</span>
            </span>
          </div>
        </button>

        {/* Center Pill Nav (Desktop) */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-cyan-500/15 bg-[#050c18]/90 p-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-full px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="group relative hidden sm:inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.65)] hover:scale-105 active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-full border border-cyan-500/20 bg-[#0c1626] text-slate-300 hover:text-cyan-300"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm rounded-2xl border border-cyan-500/25 bg-[#091322]/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                )}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

