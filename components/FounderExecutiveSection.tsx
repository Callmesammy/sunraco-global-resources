"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FounderExecutiveSectionProps {
  onOpenCalendly: () => void;
}

export default function FounderExecutiveSection({ onOpenCalendly }: FounderExecutiveSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitZoomRef = useRef<HTMLDivElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);

  // DARK KINETIC SLIDE-UP FRAME REFS
  const slideUpFrameRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  // KINETIC TEXT HIGHLIGHT REFS
  const textLine1Ref = useRef<HTMLDivElement>(null);
  const textLine2Ref = useRef<HTMLDivElement>(null);
  const textLine3Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState("saas");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      // DESKTOP ONLY GSAP ScrollTrigger Setup (min-width: 640px)
      mm.add("(min-width: 640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        // STEP 1: PORTRAIT CARD ZOOM & 3D PARALLAX TILT
        tl.fromTo(
          portraitCardRef.current,
          { scale: 0.96, opacity: 0.9, rotateX: 6 },
          { scale: 1.0, opacity: 1, rotateX: 0, ease: "power1.out" },
          0
        ).fromTo(
          portraitZoomRef.current,
          { scale: 1.0, rotateY: -4 },
          { scale: 1.08, rotateY: 4, ease: "power1.out" },
          0
        );

        // STEP 2: DARK FRAME SLIDES UP OVER SOFT WHITE PAGE
        tl.set(slideUpFrameRef.current, { display: "flex" }, 0.25).fromTo(
          slideUpFrameRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "power2.inOut" },
          0.26
        );

        // 3 Diagonal Kinetic Color Blocks
        tl.fromTo(
          block1Ref.current,
          { x: -200, rotation: -28, opacity: 0 },
          { x: 0, rotation: -14, opacity: 1, ease: "power2.out" },
          0.32
        )
          .fromTo(
            block2Ref.current,
            { x: -300, rotation: -28, opacity: 0 },
            { x: 0, rotation: -14, opacity: 1, ease: "power2.out" },
            0.38
          )
          .fromTo(
            block3Ref.current,
            { x: -250, rotation: -28, opacity: 0 },
            { x: 0, rotation: -14, opacity: 1, ease: "power2.out" },
            0.44
          );

        // STEP 3: TEXT HIGHLIGHTS ON SCROLL
        tl.fromTo(
          textLine1Ref.current,
          { color: "#334155", opacity: 0.25 },
          { color: "#FFFFFF", opacity: 1, ease: "power2.out" },
          0.55
        )
          .fromTo(
            textLine2Ref.current,
            { color: "#334155", opacity: 0.25 },
            { color: "#FF5500", opacity: 1, ease: "power2.out" },
            0.75
          )
          .fromTo(
            textLine3Ref.current,
            { color: "#334155", opacity: 0.25 },
            { color: "#C084FC", opacity: 1, ease: "power2.out" },
            0.95
          );
      });
    },
    { scope: sectionRef }
  );

  const tabContents = {
    saas: {
      label: "SaaS & Full Stack",
      headline:
        "sgr delivers software engineering and digital brand systems that get you started quickly, and drive your growth. We specialise in full-stack SaaS applications, .NET, Azure Cloud, Docker, PostgreSQL, Three.js 3D web, and motion design.",
      col1: ["SaaS Architecture & .NET Framework", "Azure Cloud & Docker Infrastructure"],
      col2: ["PostgreSQL & Cloud Microservices", "REST API & WebSocket Telemetry"],
    },
    visual: {
      label: "Visual Content",
      headline:
        "We cover every base of visual design, from identity creation and social media templates to complex design systems and branded platform mockups.",
      col1: ["Logo Creation & Identity", "Social Media Brand Templates"],
      col2: ["Sales Decks & Collateral", "Branded UI/UX Mockups"],
    },
    motion: {
      label: "Motion & 3D",
      headline:
        "Bring assets to life with deliberate and strategic motion design, backed by 60FPS animation, WebGL real-time shaders, and development expertise.",
      col1: ["Interactive 3D Canvas", "60FPS Physics & Scroll Pinning"],
      col2: ["GSAP Bi-Directional Shear", "Shader & Cursor Spotlights"],
    },
  };

  const currentContent = tabContents[activeTab as keyof typeof tabContents];

  return (
    <section
      id="founder-brand"
      ref={sectionRef}
      className="w-full min-h-screen md:min-h-screen bg-[#EFEFEA] text-[#0A0A0A] px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-0 relative overflow-hidden select-none flex items-center justify-center border-t border-black/10"
    >
      {/* SOFT OFF-WHITE CONTENT CONTAINER */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-16 my-auto py-4">
        {/* LEFT COLUMN: ELEGANT PORTRAIT CONTAINER */}
        <div className="lg:col-span-5 relative w-full group">
          {/* SLEEK NEUTRAL BACKDROP SHADOW */}
          <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-3xl pointer-events-none" />

          {/* PORTRAIT CARD FRAME - COMPACT ON MOBILE TO SHOW FULL PORTRAIT */}
          <div
            ref={portraitCardRef}
            className="relative w-full h-[260px] sm:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-[36px] p-2 sm:p-2.5 bg-zinc-900 border border-black/20 shadow-2xl shadow-black/30 transform-gpu will-change-transform"
          >
            {/* INNER PORTRAIT IMAGE HOLDER */}
            <div className="relative w-full h-full rounded-xl sm:rounded-[28px] overflow-hidden bg-zinc-950 border border-white/10">
              <div ref={portraitZoomRef} className="relative w-full h-full transform-gpu will-change-transform z-10">
                <img
                  src="/user_portrait.jpg"
                  alt="sgr Founder & Full Stack Lead Engineer"
                  className="w-full h-full object-cover object-center grayscale contrast-125 brightness-105 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-20" />

              <div className="absolute bottom-2.5 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white font-mono text-[9px] sm:text-xs uppercase tracking-widest flex items-center justify-between z-30">
                <div>FULL STACK LEAD ENGINEER</div>
                <div className="text-[#FF5500] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                  <span>SOFTWARE ENGINEERING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: EDITORIAL CONTENT & DIRECTORY */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-8">
          <div className="flex items-center gap-3 sm:gap-8 md:gap-12 font-sans font-bold text-sm sm:text-lg md:text-xl tracking-tight border-b border-black/10 pb-3 sm:pb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("saas")}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {activeTab === "saas" && (
                <div className="w-2.5 h-5 sm:w-3.5 sm:h-8 bg-[#FF5500] -rotate-45 rounded-xs shadow-[0_0_12px_rgba(255,85,0,0.7)]" />
              )}
              <span className={activeTab === "saas" ? "text-black font-extrabold" : "text-zinc-400"}>
                SaaS & Full Stack
              </span>
            </button>

            <span className="text-zinc-300 font-light">|</span>

            <button
              onClick={() => setActiveTab("visual")}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {activeTab === "visual" && (
                <div className="w-2.5 h-5 sm:w-3.5 sm:h-8 bg-[#FF5500] -rotate-45 rounded-xs shadow-[0_0_12px_rgba(255,85,0,0.7)]" />
              )}
              <span className={activeTab === "visual" ? "text-black font-extrabold" : "text-zinc-400"}>
                Visual Content
              </span>
            </button>

            <span className="text-zinc-300 font-light">|</span>

            <button
              onClick={() => setActiveTab("motion")}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {activeTab === "motion" && (
                <div className="w-2.5 h-5 sm:w-3.5 sm:h-8 bg-[#FF5500] -rotate-45 rounded-xs shadow-[0_0_12px_rgba(255,85,0,0.7)]" />
              )}
              <span className={activeTab === "motion" ? "text-black font-extrabold" : "text-zinc-400"}>
                Motion & 3D
              </span>
            </button>
          </div>

          <h2 className="font-sans font-medium text-sm sm:text-2xl lg:text-4xl tracking-tight leading-normal sm:leading-[1.3] text-zinc-900 max-w-2xl min-h-0 sm:min-h-[140px] flex items-center transition-all duration-300">
            {currentContent.headline}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-4 border-t border-black/10 font-mono text-xs md:text-sm text-zinc-700">
            <div className="space-y-2 sm:space-y-3">
              {currentContent.col1.map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-zinc-800 hover:text-black transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-3">
              {currentContent.col2.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-700 hover:text-black transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <button
              onClick={onOpenCalendly}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#FF5500] transition-all duration-300 shadow-xl group"
            >
              <span>REQUEST TECHNICAL DOSSIER</span>
              <ArrowRight className="w-4 h-4 text-[#FF5500] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP DARK KINETIC SLIDE-UP FRAME (hidden on mobile) */}
      <div
        ref={slideUpFrameRef}
        className="fixed inset-0 w-full h-full min-h-screen z-50 bg-[#0A0A0A] text-white hidden md:flex items-center justify-center p-6 sm:p-12 md:p-20 overflow-hidden transform-gpu will-change-transform rounded-none border-none outline-none"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16">
          <div className="lg:col-span-5 relative h-[220px] sm:h-[380px] flex flex-col justify-center items-center gap-3 sm:gap-6">
            <div
              ref={block1Ref}
              className="w-48 sm:w-72 md:w-80 h-14 sm:h-20 md:h-24 bg-[#FF5500] rounded-none shadow-[0_20px_50px_rgba(255,85,0,0.4)] -rotate-18 transform-gpu"
            />
            <div
              ref={block2Ref}
              className="w-56 sm:w-80 md:w-96 h-14 sm:h-20 md:h-24 bg-[#EFEFEA] rounded-none shadow-2xl -rotate-18 transform-gpu"
            />
            <div
              ref={block3Ref}
              className="w-48 sm:w-72 md:w-80 h-14 sm:h-20 md:h-24 bg-[#581C87] rounded-none shadow-[0_20px_50px_rgba(88,28,135,0.6)] -rotate-18 transform-gpu"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-6">
            <div
              ref={textLine1Ref}
              className="font-sans font-black text-2xl sm:text-5xl lg:text-7xl tracking-tighter uppercase leading-[1.1] text-zinc-600 transition-colors"
            >
              Full Stack SaaS.
            </div>

            <div
              ref={textLine2Ref}
              className="font-sans font-black text-2xl sm:text-5xl lg:text-7xl tracking-tighter uppercase leading-[1.1] text-zinc-600 transition-colors"
            >
              Motion & 3D Web.
            </div>

            <div
              ref={textLine3Ref}
              className="font-sans font-black text-2xl sm:text-5xl lg:text-7xl tracking-tighter uppercase leading-[1.1] text-zinc-600 transition-colors"
            >
              Digital Brand Systems.
            </div>

            <div className="pt-3 sm:pt-6 font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest flex items-center gap-2 sm:gap-3">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
              <span>SOFTWARE ENGINEERING & PRODUCT LAUNCH BLUEPRINT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
