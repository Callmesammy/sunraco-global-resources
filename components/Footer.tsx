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
      {/* TOP MAIN FOOTER STAGE (MATCHING KOBYKOOBA SCREENSHOT EXACTLY) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 items-end gap-8 sm:gap-12">
        {/* LEFT COLUMN: COLOSSAL "sgr." BRAND DISPLAY MARK */}
        <div className="lg:col-span-6 flex flex-col justify-end">
          <div className="flex items-center gap-3 sm:gap-6">
            <Logo className="w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#FF5500] shrink-0 hover:rotate-180 transition-transform duration-700 ease-out" />
            <div className="font-sans font-black text-6xl sm:text-9xl lg:text-[14rem] tracking-tighter leading-none text-[#0A0A0A]">
              sgr<span className="text-[#FF5500]">.</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ROTATED KINETIC "Let's chat" CTA BUTTON & CONTACT PLACEHOLDERS */}
        <div className="lg:col-span-6 flex flex-col justify-end items-start lg:items-end space-y-6 sm:space-y-10">
          {/* ROTATED KINETIC "Let's chat" BUTTON */}
          <div className="w-full flex justify-start lg:justify-end">
            <button
              onClick={onOpenCalendly}
              className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-14 py-4 sm:py-8 rounded-none bg-[#7E22CE] hover:bg-[#6B21A8] text-white font-sans font-black text-2xl sm:text-5xl md:text-6xl tracking-tight -rotate-6 sm:-rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out shadow-[0_25px_60px_rgba(126,34,206,0.5)] cursor-pointer group"
            >
              <span>Let&apos;s chat</span>
              <ArrowUpRight className="w-6 h-6 sm:w-12 sm:h-12 text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </button>
          </div>

          {/* SOCIAL LINKS & CONTACT DETAILS PLACEHOLDERS */}
          <div className="flex flex-col items-start lg:items-end space-y-3 sm:space-y-4 pt-2 sm:pt-4 font-mono text-xs sm:text-base text-[#0A0A0A]">
            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-bold">
              <a
                href="https://www.linkedin.com/in/samsonimoh17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5500] hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
              </a>
              <span className="w-1.5 h-4 sm:w-2 sm:h-5 bg-[#FF5500] -rotate-45" />
              <span className="text-zinc-400 font-normal">X (In Progress)</span>
              <span className="w-1.5 h-4 sm:w-2 sm:h-5 bg-zinc-300 -rotate-45" />
              <span className="text-zinc-400 font-normal">Instagram (In Progress)</span>
            </div>

            {/* Email & Phone Contact Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-800 pt-1 sm:pt-2 font-medium">
              <a
                href="mailto:sunracoglobalresources@gmail.com"
                className="hover:text-[#FF5500] transition-colors cursor-pointer"
              >
                sunracoglobalresources@gmail.com
              </a>
              <span className="text-zinc-400">|</span>
              <a
                href="tel:+2348056031383"
                className="hover:text-[#FF5500] transition-colors cursor-pointer font-bold"
              >
                +234 805 603 1383
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM THIN STRIP */}
      <div className="w-full bg-[#0A0A0A] text-zinc-400 py-4 sm:py-5 px-4 sm:px-8 md:px-16 font-mono text-[10px] sm:text-xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-zinc-800">
        <div>
          © {new Date().getFullYear()} sgr Global. All rights reserved.
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
