"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

interface FooterProps {
  onOpenCalendly: () => void;
}

export default function Footer({ onOpenCalendly }: FooterProps) {
  return (
    <footer className="w-full bg-[#EFEFEA] text-[#0A0A0A] p-0 m-0 overflow-hidden select-none border-t border-black/10">
      {/* TOP MAIN FOOTER STAGE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 pt-12 sm:pt-24 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 items-center lg:items-end gap-10 sm:gap-12">
        {/* LEFT COLUMN: UNIFIED "sgr." BRAND DISPLAY MARK */}
        <div className="lg:col-span-6 flex flex-col items-center sm:items-start justify-center w-full">
          <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 w-full">
            <Logo className="w-14 h-14 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#FF5500] shrink-0 hover:rotate-180 transition-transform duration-700 ease-out" />
            <div className="font-sans font-black text-6xl sm:text-9xl lg:text-[14rem] tracking-tighter leading-none text-[#0A0A0A]">
              sgr<span className="text-[#FF5500]">.</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: KINETIC "Let's chat" CTA BUTTON & BALANCED CONTACT MATRIX */}
        <div className="lg:col-span-6 flex flex-col justify-end items-center lg:items-end space-y-6 sm:space-y-10 w-full">
          {/* KINETIC "Let's chat" BUTTON */}
          <div className="w-full flex justify-center lg:justify-end">
            <button
              onClick={onOpenCalendly}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-14 py-4 sm:py-8 rounded-none bg-[#7E22CE] hover:bg-[#6B21A8] text-white font-sans font-black text-xl sm:text-5xl md:text-6xl tracking-tight rotate-0 sm:-rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(126,34,206,0.4)] cursor-pointer group"
            >
              <span>Let&apos;s chat</span>
              <ArrowUpRight className="w-6 h-6 sm:w-12 sm:h-12 text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </button>
          </div>

          {/* BALANCED SOCIAL LINKS & CONTACT MATRIX */}
          <div className="flex flex-col items-center lg:items-end space-y-5 font-mono text-[#0A0A0A] w-full pt-2">
            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-4 w-full font-black text-xs sm:text-base border-b border-black/10 pb-4">
              <a
                href="https://www.linkedin.com/in/samsonimoh17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5500] hover:text-[#0A0A0A] transition-colors py-1 px-2.5 bg-orange-500/10 rounded-sm"
              >
                LinkedIn
              </a>
              <span className="text-zinc-400 font-normal">•</span>
              <span className="text-zinc-600 font-bold py-1 px-2.5 bg-zinc-200/60 rounded-sm">X (In Progress)</span>
              <span className="text-zinc-400 font-normal">•</span>
              <span className="text-zinc-600 font-bold py-1 px-2.5 bg-zinc-200/60 rounded-sm">Instagram</span>
            </div>

            {/* Email & Phone Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-6 text-zinc-900 font-bold text-xs sm:text-base w-full text-center sm:text-right">
              <a
                href="mailto:sunracoglobalresources@gmail.com"
                className="hover:text-[#FF5500] transition-colors cursor-pointer font-bold text-xs sm:text-sm md:text-base text-zinc-800 hover:underline"
              >
                sunracoglobalresources@gmail.com
              </a>
              <span className="hidden sm:inline text-zinc-400">|</span>
              <a
                href="tel:+2348056031383"
                className="hover:text-[#FF5500] transition-colors cursor-pointer font-black text-xs sm:text-lg text-[#FF5500] bg-black text-white px-3 py-1 rounded-sm shadow-sm"
              >
                +234 805 603 1383
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM THIN STRIP */}
      <div className="w-full bg-[#0A0A0A] text-zinc-400 py-4 sm:py-5 px-6 sm:px-8 md:px-16 font-mono text-[11px] sm:text-xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-zinc-800 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} sgr Global. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

