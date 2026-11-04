"use client";

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { useAppSelector } from "../lib/hooks";
import { selectProfile } from "../store";

export default function Footer() {
  const profile = useAppSelector(selectProfile);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="relative bg-[#070a10] border-t border-white/5 pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500 text-black font-black text-lg tracking-tighter shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                SM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                  {profile.name}
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                  Software Engineer
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building scalable digital solutions that make a difference.
            </p>
          </div>

          {/* Quick Links with smooth scroll */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-amber-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, "skills")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, "testimonials")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-amber-400 transition-colors"
                >
                  UI/UX Implementation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={profile.socialLinks?.github || "https://github.com/shubisworld"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.socialLinks?.linkedin || "https://linkedin.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.socialLinks?.twitter || "https://x.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box (Matching Image 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get updates on new projects and tech insights.
            </p>

            {isSubscribed ? (
              <span className="text-xs text-amber-400 font-medium block animate-fade-in-up">
                ✓ Thanks for subscribing!
              </span>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#141b2b] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="w-full py-1.5 px-3 rounded-lg bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors shadow-sm shadow-amber-500/20 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Row with Animated Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {profile.name}. All rights reserved.</p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#121826] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:-translate-y-0.5 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
