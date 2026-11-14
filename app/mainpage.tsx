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

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute -top-40 right-0 w-150 h-150 rounded-full bg-amber-500/[0.07] blur-[160px]" />

        <div className="absolute top-1/3 -left-40 w-125 h-125 rounded-full bg-amber-600/5 blur-[150px]" />

        <div className="absolute bottom-10 right-1/4 w-150 h-150 rounded-full bg-amber-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-tech-grid opacity-35" />
      </div>

      <div className="relative z-10">

        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
