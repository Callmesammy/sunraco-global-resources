"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already responded to cookie consent
    const consent = localStorage.getItem("sgr_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sgr_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("sgr_cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] w-[310px] sm:w-[360px] bg-white border border-black/20 p-6 sm:p-7 text-black select-none font-sans flex flex-col justify-between space-y-5 rounded-none transform-gpu animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* TEXT CONTENT & LINK */}
      <div className="space-y-3">
        <h3 className="font-sans font-bold text-lg sm:text-xl text-black leading-tight tracking-tight">
          We use cookies to improve your experience.
        </h3>
        <div>
          <Link
            href="/cookies"
            className="font-sans text-xs text-zinc-600 underline hover:text-black font-semibold transition-colors cursor-pointer"
          >
            View Settings
          </Link>
        </div>
      </div>

      {/* ACTION BUTTONS ROW (REJECT ALL | ACCEPT ALL) */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={handleReject}
          className="w-full py-3 px-3 rounded-full border border-black text-black font-sans font-black text-[11px] uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          REJECT ALL
        </button>

        <button
          onClick={handleAccept}
          className="w-full py-3 px-3 rounded-full bg-black text-white font-sans font-black text-[11px] uppercase tracking-wider hover:bg-[#FF5500] transition-colors cursor-pointer"
        >
          ACCEPT ALL
        </button>
      </div>
    </div>
  );
}
