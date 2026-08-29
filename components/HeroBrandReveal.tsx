"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/Logo";

interface HeroProps {
  onOpenCalendly: () => void;
  activeMenuTarget?: number;
}

export default function HeroBrandReveal({ onOpenCalendly }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lightBeamGroupRef = useRef<SVGGElement>(null);
  const bottomLine1Ref = useRef<HTMLDivElement>(null);
  const mobileBottomLineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      // DESKTOP ONLY ANIMATIONS (min-width: 640px)
      mm.add("(min-width: 640px)", () => {
        // 1. Torchlight beam rightward diagonal sweep animation
        if (lightBeamGroupRef.current) {
          gsap.fromTo(
            lightBeamGroupRef.current,
            { rotation: 4, x: 0, y: 0 },
            {
              rotation: 28,
              x: 140,
              y: -20,
              duration: 4.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              transformOrigin: "50px 300px",
            }
          );
        }

        // 2. Solar Accent Line Entrance & Scroll Scrub
        if (bottomLine1Ref.current) {
          gsap.fromTo(
            bottomLine1Ref.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 1.2, ease: "power3.out", transformOrigin: "left center" }
          );

          if (containerRef.current) {
            const lineTl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
              },
            });
            lineTl.to(bottomLine1Ref.current, { x: 80, scaleX: 1.1, ease: "none" }, 0);
          }
        }

        // 3. SGR ScrollTrigger Shrink to Header
        if (titleRef.current && containerRef.current) {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          scrollTl.to(titleRef.current, {
            scale: 0.08,
            y: -115,
            letterSpacing: "0.1em",
            transformOrigin: "left top",
            ease: "none",
          });

          if (lightBeamGroupRef.current) {
            scrollTl.to(
              lightBeamGroupRef.current,
              {
                scale: 1.4,
                rotation: 32,
                transformOrigin: "50px 300px",
                ease: "none",
              },
              0
            );
          }

          gsap.to(titleRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "bottom-=100 top",
              end: "bottom top",
              scrub: true,
            },
            opacity: 0,
            ease: "none",
          });
        }
      });

      // MOBILE ONLY ANIMATIONS (max-width: 639px)
      mm.add("(max-width: 639px)", () => {
        if (mobileBottomLineRef.current) {
          gsap.fromTo(
            mobileBottomLineRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 1.2, ease: "power3.out", transformOrigin: "left center" }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* ========================================== */}
      {/* DESKTOP LAYOUT (hidden sm:block) */}
      {/* ========================================== */}
      <div className="hidden sm:block">
        <div
          ref={titleRef}
          className="fixed top-36 left-10 sm:left-14 md:left-20 z-50 inline-flex flex-col items-start font-sans font-bold uppercase opacity-100 pointer-events-none transition-opacity duration-300"
        >
          <div className="inline-flex items-baseline text-[32vw] lg:text-[30vw] leading-[0.75] tracking-tighter text-black">
            <span>SG</span>
            <span className="relative">
              R
              {/* TORCHLIGHT BEAM EMITTER SVG */}
              <div className="absolute -top-60 lg:-top-72 left-[64%] w-[650px] h-[520px] pointer-events-none z-30 overflow-visible">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 700 550"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                >
                  <defs>
                    <linearGradient id="volumetricBeamGradNoHeader" x1="0.5" y1="1" x2="0.5" y2="0">
                      <stop offset="0%" stopColor="#FF5500" stopOpacity="0.55" />
                      <stop offset="35%" stopColor="#FF8800" stopOpacity="0.28" />
                      <stop offset="75%" stopColor="#FFC800" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="opticalCoreGlowNoHeader" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                      <stop offset="50%" stopColor="#FF7700" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FF4400" stopOpacity="0" />
                    </radialGradient>

                    <filter id="wideBeamBlurNoHeader" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="7" />
                    </filter>
                  </defs>

                  <g ref={lightBeamGroupRef} className="origin-[50px_300px]">
                    <path
                      d="M 50 300 L -120 -160 L 580 -160 Z"
                      fill="url(#volumetricBeamGradNoHeader)"
                      filter="url(#wideBeamBlurNoHeader)"
                      className="opacity-65"
                    />
                    <path
                      d="M 50 300 L 0 -160 L 400 -160 Z"
                      fill="url(#volumetricBeamGradNoHeader)"
                      className="opacity-50"
                    />
                    <circle cx="50" cy="300" r="18" fill="url(#opticalCoreGlowNoHeader)" />
                    <circle cx="30" cy="180" r="8" fill="#FFC800" className="opacity-30" />
                    <circle cx="10" cy="100" r="12" fill="#FF5500" className="opacity-20" />
                    <rect
                      x="5"
                      y="290"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#0A0A0A"
                      transform="rotate(-15 50 300)"
                      stroke="#444444"
                      strokeWidth="2"
                    />
                    <line
                      x1="8"
                      y1="300"
                      x2="92"
                      y2="300"
                      stroke="#FF5500"
                      strokeWidth="2"
                      transform="rotate(-15 50 300)"
                    />
                  </g>
                </svg>
              </div>
            </span>
          </div>

          <div className="w-full mt-7 pointer-events-none">
            <div
              ref={bottomLine1Ref}
              className="w-full h-5 bg-[#FF5500] rounded-full shadow-[0_0_20px_rgba(255,85,0,0.85)] transform-gpu will-change-transform"
            />
          </div>
        </div>

        <section
          id="hero-desktop"
          className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-16 select-none bg-white text-black transition-colors duration-300 overflow-hidden"
        >
          <div className="mt-24 mb-auto w-full flex flex-col items-start justify-center min-h-[500px]" />
        </section>
      </div>

      {/* ========================================== */}
      {/* MOBILE LAYOUT ONLY (block sm:hidden) */}
      {/* ========================================== */}
      <div className="block sm:hidden bg-white text-black select-none overflow-hidden pt-24 pb-12 px-5">
        {/* MOBILE SGR WORDMARK */}
        <div className="w-full flex flex-col items-center justify-center font-sans font-black uppercase text-center">
          <div className="text-[34vw] leading-[0.75] tracking-tighter text-black font-black">
            SGR
          </div>

          <div className="w-full mt-3 px-1">
            <div
              ref={mobileBottomLineRef}
              className="w-full h-3.5 bg-[#FF5500] rounded-full shadow-[0_0_20px_rgba(255,85,0,0.85)] transform-gpu will-change-transform"
            />
          </div>
        </div>

        {/* MOBILE SECOND SPACE: GIANT VIDEO SHOWCASE */}
        <div className="w-full mt-10">
          <div className="relative w-full h-[46vh] bg-black overflow-hidden shadow-2xl border border-black/10 rounded-xs">
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
      </div>

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
