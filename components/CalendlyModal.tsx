"use client";

import React, { useEffect } from "react";
import { X, Calendar, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      data-lenis-prevent="true"
      data-lenis-prevent-touch="true"
      data-lenis-prevent-wheel="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Dark Blur Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-touch="true"
        data-lenis-prevent-wheel="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl rounded-none bg-[#141414] border-2 border-white/20 p-6 sm:p-10 text-white overflow-y-auto max-h-[90vh] overscroll-contain animate-in zoom-in-95 duration-300"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-none bg-[#A855F7]/10 text-[#A855F7]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                Schedule Executive Discovery
              </h3>
              <p className="font-mono text-xs text-zinc-400">
                SUNRACO GLOBAL RESOURCES // DIRECT INTAKE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-none bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          <div className="p-5 rounded-none bg-zinc-900/80 border border-white/10 flex items-start gap-4">
            <Clock className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
            <div className="text-sm font-light text-zinc-300 leading-relaxed">
              Connect directly with Sunraco’s trade architecture and logistics directors. Select your preferred meeting window below or open Calendly directly.
            </div>
          </div>

          {/* Fallback Direct Booking Option */}
          <div className="p-6 rounded-none bg-[#0A0A0A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-lg text-white">
                Calendly Direct Booking Engine
              </div>
              <div className="font-mono text-xs text-zinc-400">
                30-Min Confidential Consultation
              </div>
            </div>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-none bg-[#7E22CE] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#A855F7] transition-all flex items-center justify-center gap-2"
            >
              <span>Launch Calendly Window</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Information Notice */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA & confidentiality protocols enforced automatically.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
