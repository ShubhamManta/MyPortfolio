"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import ContactCTA from "./component/ContactCTA";
import Footer from "./component/Footer";
import ContactModal from "./component/ContactModal";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { fetchPortfolioDetails } from "./store/slices/portfolioSlice";
import { selectPortfolioLoading } from "./store";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(selectPortfolioLoading);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Fetch portfolio data from Next.js API / store slice on initial mount
  useEffect(() => {
    if (loadingStatus === "idle") {
      dispatch(fetchPortfolioDetails());
    }
  }, [dispatch, loadingStatus]);

  return (
    <div className="relative min-h-screen w-full bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* 
        ========================================================================
        CYBER / TECH BACKGROUND LAYOUT (Matching Pinterest Reference: pin.it/5hvuthIEx)
        ========================================================================
      */}

      {/* Ambient Top & Corner Radial Glow Meshes */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Top-center large cyan glow */}
        <div className="absolute left-1/2 -top-40 -translate-x-1/2 h-[650px] w-[850px] rounded-full bg-cyan-500/[0.12] blur-[160px]" />
        
        {/* Right side cyan/blue glow */}
        <div className="absolute -right-40 top-1/4 h-[550px] w-[650px] rounded-full bg-blue-600/[0.10] blur-[150px]" />
        
        {/* Left side teal/cyan glow */}
        <div className="absolute -left-40 top-2/3 h-[600px] w-[600px] rounded-full bg-teal-500/[0.08] blur-[160px]" />
        
        {/* Bottom subtle indigo aura */}
        <div className="absolute left-1/3 bottom-0 h-[450px] w-[700px] rounded-full bg-indigo-600/[0.07] blur-[150px]" />

        {/* Global cyber grid pattern overlay */}
        <div className="absolute inset-0 cyber-grid opacity-35" />
      </div>

      {/* Main Wrapper Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 
          Outer Glowing Cyber Glassmorphism Frame 
          (Mirrors the outer glowing border frame seen in the Pinterest reference design)
        */}
        <div className="relative rounded-[2.5rem] border border-cyan-500/20 bg-[#070c17]/85 p-4 sm:p-8 md:p-12 shadow-[0_0_90px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          {/* Subtle top frame accent light */}
          <div className="pointer-events-none absolute inset-x-20 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          
          {/* Navigation Bar */}
          <Navbar onOpenContact={() => setIsContactOpen(true)} />

          {/* Page Sections */}
          <main className="space-y-6 sm:space-y-12">
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <Skills />
            <Projects />
            <Experience />
            <ContactCTA onOpenContact={() => setIsContactOpen(true)} />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Contact Dialog Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

