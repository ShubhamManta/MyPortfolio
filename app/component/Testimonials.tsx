"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectTestimonials } from "../store";

export default function Testimonials() {
  const testimonials = useAppSelector(selectTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with functional arrows (matching Image 2) */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Clients Say
            </h2>
          </div>

          {/* Interactive Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-[#141b2b] border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-[#1a2338] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#141b2b] border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-[#1a2338] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Testimonials Grid with Active Highlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? "bg-[#141c2c] border-2 border-amber-500/60 shadow-xl shadow-amber-500/10 -translate-y-2"
                    : "bg-[#111724]/90 border border-white/5 hover:border-amber-500/40 hover:bg-[#151c2c] hover:-translate-y-1 shadow-lg shadow-black/40"
                }`}
              >
                <div>
                  {/* Big Amber Quote Icon */}
                  <div
                    className={`mb-3 transition-opacity ${
                      isSelected
                        ? "text-amber-400 opacity-100"
                        : "text-amber-400 opacity-70 group-hover:opacity-100"
                    }`}
                  >
                    <Quote className="w-6 h-6 rotate-180" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {/* Avatar Badge */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-md shrink-0 transition-transform ${
                      isSelected
                        ? "bg-gradient-to-tr from-amber-400 to-amber-500 shadow-amber-500/30 scale-105"
                        : "bg-gradient-to-tr from-amber-500 to-amber-600 shadow-amber-500/15 group-hover:scale-105"
                    }`}
                  >
                    {item.avatar || item.name.substring(0, 2).toUpperCase()}
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-bold transition-colors ${
                        isSelected
                          ? "text-amber-400"
                          : "text-white group-hover:text-amber-400"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === i ? "w-6 bg-amber-400" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
