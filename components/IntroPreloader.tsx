"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IntroPreloaderProps {
  onComplete?: () => void;
}

export default function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);

  const stage2Ref = useRef<HTMLDivElement>(null);
  const darkBoxContainerRef = useRef<HTMLDivElement>(null);
  const darkBoxFillRef = useRef<HTMLDivElement>(null);

  // Dark blocks (the dark spaces to be conquered in Stage 1)
  const blockTopLeftRef = useRef<HTMLDivElement>(null);
  const blockTopRightRef = useRef<HTMLDivElement>(null);
  const blockCenterRef = useRef<HTMLDivElement>(null);
  const blockBottomLeftRef = useRef<HTMLDivElement>(null);
  const blockBottomRightRef = useRef<HTMLDivElement>(null);

  // Battle line strikes
  const strike1Ref = useRef<HTMLDivElement>(null);
  const strike2Ref = useRef<HTMLDivElement>(null);
  const strike3Ref = useRef<HTMLDivElement>(null);
  const strike4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // ==========================================
      // STAGE 1: ULTRA-SMOOTH FLUID LINE BATTLE (0s -> 1.4s)
      // ==========================================

      // Strike 1: Fluid horizontal laser sweep clears top dark panels
      masterTl
        .fromTo(
          strike1Ref.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.45, ease: "power2.inOut", transformOrigin: "left center" }
        )
        .to(
          [blockTopLeftRef.current, blockTopRightRef.current],
          { y: "-100%", opacity: 0, duration: 0.55, ease: "power2.inOut" },
          "-=0.25"
        )
        .to(strike1Ref.current, { scaleX: 1.2, opacity: 0, duration: 0.25, ease: "power2.out" }, "-=0.35");

      // Strike 2: Fluid vertical laser sweep shatters center core
      masterTl
        .fromTo(
          strike2Ref.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 0.45, ease: "power2.inOut", transformOrigin: "top center" },
          "-=0.2"
        )
        .to(
          blockCenterRef.current,
          { scale: 0, rotate: 90, opacity: 0, duration: 0.5, ease: "power3.inOut" },
          "-=0.3"
        )
        .to(strike2Ref.current, { opacity: 0, duration: 0.2 }, "-=0.2");

      // Strike 3 & 4: Dual fluid diagonal laser slashes wipe remaining bottom panels
      masterTl
        .fromTo(
          [strike3Ref.current, strike4Ref.current],
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.inOut" },
          "-=0.2"
        )
        .to(
          [blockBottomLeftRef.current, blockBottomRightRef.current],
          { x: (i) => (i === 0 ? "-100%" : "100%"), opacity: 0, duration: 0.55, ease: "power2.inOut" },
          "-=0.3"
        )
        .to(
          [strike3Ref.current, strike4Ref.current],
          { opacity: 0, duration: 0.25, ease: "power2.out" },
          "-=0.2"
        );

      // ==========================================
      // STAGE 2: PURE SHARP MONOCHROME DARK BOX LOADING (1.4s -> 2.9s)
      // ==========================================
      masterTl
        .set(stage2Ref.current, { display: "flex" }, 1.4)
        .fromTo(
          stage2Ref.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.0, duration: 0.4, ease: "power3.out" },
          1.4
        )
        // Sharp Dark Box fills smoothly from 0% -> 100% width
        .to(
          darkBoxFillRef.current,
          {
            width: "100%",
            duration: 1.3,
            ease: "power2.inOut",
          },
          1.6
        );

      // ==========================================
      // STAGE 3: BOX SHRINKS, TURNS 360°, & SPLITS CURTAIN FOR ANIMATED PAGE REVEAL
      // ==========================================
      masterTl
        // 1. Box reduces size & turns 360 degrees
        .to(
          darkBoxContainerRef.current,
          {
            scale: 0.2,
            rotation: 360,
            duration: 0.8,
            ease: "back.inOut(1.8)",
          },
          2.9
        )
        // 2. Box implodes and vertical curtain splits to reveal the animated main page
        .to(
          darkBoxContainerRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          3.7
        )
        .to(
          topCurtainRef.current,
          {
            y: "-100%",
            duration: 0.85,
            ease: "power4.inOut",
          },
          3.75
        )
        .to(
          bottomCurtainRef.current,
          {
            y: "100%",
            duration: 0.85,
            ease: "power4.inOut",
          },
          3.75
        )
        .to(
          containerRef.current,
          {
            opacity: 0,
            display: "none",
            pointerEvents: "none",
            duration: 0.2,
          },
          4.55
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden select-none flex items-center justify-center pointer-events-auto transform-gpu"
    >
      {/* TOP HALF PRELOADER CURTAIN */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-white z-10 border-b border-black/5 transform-gpu"
      />

      {/* BOTTOM HALF PRELOADER CURTAIN */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-white z-10 border-t border-black/5 transform-gpu"
      />

      {/* STAGE 1: RESPONSIVE MINI BATTLE CANVAS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
        {/* Top Left Dark Space */}
        <div
          ref={blockTopLeftRef}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0A0A0A] border-r border-b border-zinc-800 transform-gpu"
        />
        {/* Top Right Dark Space */}
        <div
          ref={blockTopRightRef}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#0D0D0D] border-l border-b border-zinc-800 transform-gpu"
        />
        {/* Center Dark Space Core */}
        <div
          ref={blockCenterRef}
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#121212] z-20 border border-zinc-700 transform-gpu"
        />
        {/* Bottom Left Dark Space */}
        <div
          ref={blockBottomLeftRef}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0A0A0A] border-r border-t border-zinc-800 transform-gpu"
        />
        {/* Bottom Right Dark Space */}
        <div
          ref={blockBottomRightRef}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#0F0F0F] border-l border-t border-zinc-800 transform-gpu"
        />
      </div>

      {/* THE ATTACKING LINE STRIKES (Mini Battle Slashing Lines) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-hidden">
        {/* Strike 1: Top Horizontal Laser Strike */}
        <div
          ref={strike1Ref}
          className="absolute top-[25%] left-0 w-full h-2 md:h-3 bg-white transform-gpu opacity-0"
        />

        {/* Strike 2: Center Vertical Laser Strike */}
        <div
          ref={strike2Ref}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 md:w-3 h-full bg-white transform-gpu opacity-0"
        />

        {/* Strike 3: Diagonal Slash 1 */}
        <div
          ref={strike3Ref}
          className="absolute top-1/2 left-0 w-[150vw] h-2.5 md:h-3.5 bg-white -rotate-45 origin-left transform-gpu opacity-0"
        />

        {/* Strike 4: Diagonal Slash 2 */}
        <div
          ref={strike4Ref}
          className="absolute top-1/2 right-0 w-[150vw] h-2.5 md:h-3.5 bg-white rotate-45 origin-right transform-gpu opacity-0"
        />
      </div>

      {/* STAGE 2 & 3: SHARP MONOCHROME DARK BOX & 360° SPIN */}
      <div
        ref={stage2Ref}
        className="relative z-40 w-full max-w-xs sm:max-w-md md:max-w-lg px-6 flex flex-col items-center justify-center hidden opacity-0"
      >
        {/* SHARP RECTANGULAR DARK BOX CONTAINER */}
        <div
          ref={darkBoxContainerRef}
          className="relative w-full h-12 sm:h-16 md:h-18 bg-[#0A0A0A] rounded-none border border-black p-1 overflow-hidden transform-gpu will-change-transform"
        >
          {/* MONOCHROME INNER FILL */}
          <div
            ref={darkBoxFillRef}
            className="h-full w-0 bg-white rounded-none transition-all duration-75 ease-out"
          />
        </div>
      </div>
    </div>
  );
}
