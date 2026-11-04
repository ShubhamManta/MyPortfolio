"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import TechStack from "./component/TechStack";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ContactModal from "./component/ContactModal";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { fetchPortfolioDetails } from "./store/slices/portfolioSlice";
import { selectPortfolioLoading } from "./store";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(selectPortfolioLoading);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (loadingStatus === "idle") {
      dispatch(fetchPortfolioDetails());
    }
  }, [dispatch, loadingStatus]);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0f17] text-slate-100 selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Background Ambient Radial Glow Elements (Matching Image 2) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-Right Golden Glow */}
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/[0.07] blur-[160px]" />
        
        {/* Left Side Subtle Glow */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-amber-600/[0.05] blur-[150px]" />

        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/[0.05] blur-[180px]" />

        {/* Global Tech Grid Pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-35" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        {/* Sticky/Fixed Navbar */}
        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        {/* Core Sections */}
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Contact Dialog Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
