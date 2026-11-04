"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useAppSelector } from "../lib/hooks";
import { selectProfile } from "../store";

export default function Contact() {
  const profile = useAppSelector(selectProfile);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Info, and Glowing 3D Wireframe Orb */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                Have a project in mind or want to collaborate? Feel free to reach
                out. I&apos;d love to hear from you!
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#141b2b] border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#141b2b] border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{profile.phone}</span>
              </a>
            </div>

            {/* Glowing 3D Geometric Wireframe Sphere (Matching Image 2) */}
            <div className="pt-6 relative flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <svg
                  className="w-full h-full animate-ring-pulse"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="wireGlow"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ambient Core Glow */}
                  <circle cx="100" cy="100" r="70" fill="url(#wireGlow)" />

                  {/* Outer Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />

                  {/* Latitude Ellipses */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="60"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                    strokeDasharray="4 4"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="35"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="15"
                    stroke="#f59e0b"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />

                  {/* Longitude Ellipses */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="35"
                    ry="80"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="15"
                    ry="80"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeOpacity="0.45"
                  />

                  {/* Golden Node Dots */}
                  {[
                    [100, 20],
                    [100, 180],
                    [20, 100],
                    [180, 100],
                    [55, 45],
                    [145, 45],
                    [45, 135],
                    [155, 135],
                    [100, 65],
                    [100, 135],
                    [65, 100],
                    [135, 100],
                  ].map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="2.5"
                      fill="#fbbf24"
                      className="animate-ping"
                      style={{ animationDuration: `${2 + (i % 3)}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Matching Image 2) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0f1523]/90 border border-white/10 p-6 sm:p-10 shadow-2xl shadow-black/50 backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and
                    will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg bg-[#182030] text-sm font-semibold text-slate-200 hover:text-white hover:bg-[#202b40] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
