"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/Logo";

interface HeroProps {
  onOpenCalendly: () => void;
  activeMenuTarget?: number;
}

export default function HeroBrandReveal({ onOpenCalendly }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomLine1Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ENTRANCE ANIMATION FOR THE OFFICIAL SGR ACCENT SOLAR (#FF5500) LINE
      if (bottomLine1Ref.current) {
        gsap.fromTo(
          bottomLine1Ref.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            transformOrigin: "left center",
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full bg-white text-black select-none overflow-hidden pt-20 sm:pt-28 pb-12">
      {/* HERO CONTENT STAGE */}
      <section id="hero" className="w-full px-4 sm:px-8 md:px-16 flex flex-col items-start justify-start">
        {/* SGR DISPLAY WORDMARK WITH ACCENT SOLAR LINE */}
        <div className="w-full flex flex-col items-start font-sans font-black uppercase">
          <div className="text-[36vw] sm:text-[34vw] md:text-[30vw] leading-[0.75] tracking-tighter text-black">
            SGR
          </div>

          {/* OFFICIAL SGR ACCENT SOLAR (#FF5500) LINE DIRECTLY AT THE BOTTOM OF SGR */}
          <div className="w-full mt-2 sm:mt-4 md:mt-6">
            <div
              ref={bottomLine1Ref}
              className="w-full h-3.5 sm:h-5 md:h-6 bg-[#FF5500] rounded-full shadow-[0_0_25px_rgba(255,85,0,0.85)] transform-gpu will-change-transform"
            />
          </div>
        </div>

        {/* SECOND EMPTY SPACE: BIG ANIMATED MP4 VIDEO SHOWCASE (MATCHING KOBYKOOBA SCREENSHOT 2) */}
        <div className="w-full mt-6 sm:mt-10 md:mt-14">
          <div className="relative w-full h-[62vh] sm:h-[72vh] md:h-[80vh] bg-black overflow-hidden shadow-2xl border border-black/10 rounded-none">
            <video
              src="/so_i_want_a_mini_animation_on.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* BOTTOM-LEFT FLOATING CIRCULAR LOGO BADGE */}
      <div ref={badgeRef} className="fixed left-6 bottom-6 z-40 flex items-center transform-gpu">
        <div
          onClick={onOpenCalendly}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black border border-white/20 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 hover:border-[#FF5500] transition-all duration-300 group"
          title="SGR Kinetic Badge"
        >
          <Logo className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF5500] group-hover:rotate-180 transition-transform duration-700 ease-out" />
        </div>
      </div>
    </div>
  );
}
