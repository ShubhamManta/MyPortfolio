"use client";

import React, { useState } from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { useAppSelector } from "../lib/hooks";
import { selectProfile } from "../store";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const profile = useAppSelector(selectProfile);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(profile?.email || "mantashubham@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${profile?.email || "mantashubham@gmail.com"}?subject=${encodeURIComponent(
        formData.subject || "Project / Opportunity Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0e1422]/95 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.15)] backdrop-blur-2xl z-10">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-amber-500/15 blur-[80px]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#141b2c] text-slate-400 hover:border-amber-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white">
            Get in touch with {profile?.name || "Shubham"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Available for Senior Software Engineering, Full-Stack, and High-Concurrency opportunities.
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Email Card with Copy button */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#121827] p-3 text-xs">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              <div className="truncate">
                <div className="text-[10px] text-slate-400">Email</div>
                <div className="font-mono text-slate-200 truncate">
                  {profile?.email || "mantashubham@gmail.com"}
                </div>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#162033] text-slate-300 hover:text-amber-400 cursor-pointer"
              title="Copy Email"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <a
            href={`tel:${profile?.phone || "+919736776853"}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#121827] p-3 text-xs hover:border-amber-400/40 transition-colors"
          >
            <Phone className="h-4 w-4 shrink-0 text-amber-400" />
            <div>
              <div className="text-[10px] text-slate-400">Direct Phone</div>
              <div className="font-mono text-slate-200">
                {profile?.phone || "+91 97367 76853"}
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#121827] p-3 text-xs">
            <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
            <div>
              <div className="text-[10px] text-slate-400">Location</div>
              <div className="text-slate-200 font-medium">
                {profile?.location || "Noida, India"}
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={profile?.socialLinks?.linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#121827] p-3 text-xs hover:border-amber-400/40 text-amber-400 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400">LinkedIn</div>
              <div className="font-medium text-slate-200">Connect Profile ↗</div>
            </div>
          </a>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-white/10 bg-[#121827] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-white/10 bg-[#121827] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Software Engineer Role / Project Inquiry"
              className="w-full rounded-xl border border-white/10 bg-[#121827] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi Shubham, let's discuss an opportunity..."
              className="w-full rounded-xl border border-white/10 bg-[#121827] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 text-black py-3 text-xs font-bold shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            <span>{submitted ? "Redirecting..." : "Send Message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
