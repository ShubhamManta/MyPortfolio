"use client";

import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectTestimonials } from "../store";

export default function Testimonials() {
  const testimonials = useAppSelector(selectTestimonials);

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Clients Say
            </h2>
          </div>

          {/* Navigation Arrows (matching Image 2) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              className="w-9 h-9 rounded-lg bg-[#141b2b] border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-9 h-9 rounded-lg bg-[#141b2b] border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#111724]/90 border border-white/5 p-6 hover:border-amber-500/40 hover:bg-[#151c2c] transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/30 flex flex-col justify-between group"
            >
              <div>
                {/* Big Amber Quote Icon */}
                <div className="text-amber-400 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold text-xs shadow-md shadow-amber-500/20 shrink-0">
                  {item.avatar || item.name.substring(0, 2).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
