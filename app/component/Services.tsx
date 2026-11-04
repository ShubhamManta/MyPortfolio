"use client";

import React from "react";
import { Code2, Server, Layout, Gauge } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectServices } from "../store";

export default function Services() {
  const services = useAppSelector(selectServices);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case "server":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "layout":
        return <Layout className="w-5 h-5 text-amber-400" />;
      case "zap":
      default:
        return <Gauge className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services I Offer
          </h2>
        </div>

        {/* 4-Card Responsive Grid with Animated Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#111724]/90 border border-white/5 p-6 hover:border-amber-500/40 hover:bg-[#151c2c] transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-default"
            >
              {/* Icon Container with Animated Scale & Glow */}
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300">
                {getServiceIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
