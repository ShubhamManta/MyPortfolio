"use client";

import React from "react";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  MongoDBIcon,
  PostgresIcon,
  TailwindIcon,
  GitIcon,
} from "./Icons";
import { useAppSelector } from "../lib/hooks";
import { selectTechStack } from "../store";

export default function TechStack() {
  const techStack = useAppSelector(selectTechStack);

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "javascript":
        return <JavaScriptIcon className="w-8 h-8" />;
      case "typescript":
        return <TypeScriptIcon className="w-8 h-8" />;
      case "react":
        return <ReactIcon className="w-8 h-8" />;
      case "next.js":
        return <NextjsIcon className="w-8 h-8" />;
      case "node.js":
        return <NodejsIcon className="w-8 h-8" />;
      case "express.js":
        return (
          <span className="text-sm font-black tracking-tighter text-white font-mono bg-white/10 px-2 py-0.5 rounded">
            ex
          </span>
        );
      case "mongodb":
        return <MongoDBIcon className="w-8 h-8" />;
      case "postgresql":
        return <PostgresIcon className="w-8 h-8" />;
      case "tailwind css":
        return <TailwindIcon className="w-8 h-8" />;
      case "git":
      default:
        return <GitIcon className="w-8 h-8" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            My Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies I Work With
          </h2>
        </div>

        {/* Technologies Grid (Matching Image 2 with animated hover effects) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center min-w-[95px] sm:min-w-[110px] py-4 px-3 rounded-2xl bg-[#111724]/90 border border-white/5 hover:border-amber-500/40 hover:bg-[#161e30] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 group cursor-default"
            >
              <div className="h-10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                {getTechIcon(tech.name)}
              </div>
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
