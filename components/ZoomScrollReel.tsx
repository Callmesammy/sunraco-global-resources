"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/Logo";

export default function ZoomScrollReel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const oldContentRef = useRef<HTMLDivElement>(null);

  const slice1Ref = useRef<SVGPathElement>(null);
  const slice2Ref = useRef<HTMLDivElement>(null);
  const slice3Ref = useRef<HTMLDivElement>(null);

  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const line6Ref = useRef<HTMLDivElement>(null);
  const line7Ref = useRef<HTMLDivElement>(null);

  const darkPanelRef = useRef<HTMLDivElement>(null);
  const solidPurpleCoverRef = useRef<HTMLDivElement>(null);
  const whiteScreenStageRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const kineticBarRef = useRef<HTMLDivElement>(null);
  const softAccentPanelRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState("about");
  const [selectedCard, setSelectedCard] = useState<number>(3); // 1 to 5

  // Continuous Ambient Kinetic Floating Animation & Mouse Parallax
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add({ isDesktop: "(min-width: 640px)", isMobile: "(max-width: 639px)" }, (ctx) => {
        const { isMobile } = ctx.conditions as { isMobile: boolean };

        // Main Pinned Timeline - Generous pause windows for text reading and interactive submenus
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: isMobile ? "+=380%" : "+=520%",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onEnter: () => {
              gsap.to("header", { opacity: 0, pointerEvents: "none", duration: 0.2 });
            },
            onLeave: () => {
              gsap.to("header", { opacity: 1, pointerEvents: "auto", duration: 0.2 });
            },
            onEnterBack: () => {
              gsap.to("header", { opacity: 0, pointerEvents: "none", duration: 0.2 });
            },
            onLeaveBack: () => {
              gsap.to("header", { opacity: 1, pointerEvents: "auto", duration: 0.2 });
            },
          },
        });

        // STEP 1: SAMURAI BLADE SLICES & CRISP TEXT REVEAL (0.0 -> 0.15)
        tl.fromTo(
          slice1Ref.current,
          { strokeDashoffset: 1000, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0
        )
          .fromTo(line1Ref.current, { opacity: 0.3, y: 20, x: -30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.0)
          .fromTo(line2Ref.current, { opacity: 0.3, y: 20, x: 30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.02);

        tl.fromTo(
          slice2Ref.current,
          { x: isMobile ? 120 : 300, y: -40, rotation: 65, scale: 0.2, opacity: 0 },
          { x: 0, y: 0, rotation: -25, scale: 1, opacity: 1, ease: "power2.out" },
          0.04
        )
          .fromTo(line3Ref.current, { opacity: 0.3, y: 20, x: -30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.04)
          .fromTo(line4Ref.current, { opacity: 0.3, y: 20, x: 30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.06)
          .fromTo(line5Ref.current, { opacity: 0.3, y: 20, x: -30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.08);

        tl.fromTo(
          slice3Ref.current,
          { x: isMobile ? -100 : -250, y: 80, rotation: -40, scale: 0.2, opacity: 0 },
          { x: 0, y: 0, rotation: 32, scale: 1, opacity: 1, ease: "power2.out" },
          0.10
        )
          .fromTo(line6Ref.current, { opacity: 0.3, y: 20, x: 30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.10)
          .fromTo(line7Ref.current, { opacity: 0.3, y: 20, x: -30 }, { opacity: 1, y: 0, x: 0, ease: "power2.out" }, 0.12);

        // =========================================================================
        // STEP 1 READING HOLD DELAY (0.15 -> 0.42):
        // All 7 text lines stay 100% visible & static so the user can read everything!
        // =========================================================================

        // STEP 2: DARK KINETIC PANEL ZOOMS IN & LOCKS FOR INTERACTION (0.42 -> 0.52)
        tl.set(darkPanelRef.current, { display: "flex" }, 0.42).fromTo(
          darkPanelRef.current,
          { scale: 0.35, opacity: 0, borderRadius: "2rem" },
          { scale: 1.0, opacity: 1, borderRadius: "0rem", ease: "power2.out" },
          0.43
        );

        tl.to(oldContentRef.current, { opacity: 0 }, 0.45);
        tl.to(darkPanelRef.current, { opacity: 1 }, 0.52);

        // =========================================================================
        // STEP 2 INTERACTIVE HOLDING DELAY (0.52 -> 0.78):
        // Dark Panel stays 100% visible & static so user can click submenus!
        // =========================================================================

        // STEP 3: SOLID DEEP PURPLE COVER TAKEOVER (0.78 -> 0.88)
        tl.set(solidPurpleCoverRef.current, { display: "block" }, 0.78).fromTo(
          solidPurpleCoverRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "power2.inOut" },
          0.79
        );

        // STEP 4: DISSOLVE TO WHITE CANVAS & CARDS SLIDE IN (0.88 -> 0.94)
        tl.set(whiteScreenStageRef.current, { display: "flex" }, 0.87)
          .to(solidPurpleCoverRef.current, { opacity: 0, ease: "power2.inOut" }, 0.88)
          .fromTo(
            whiteScreenStageRef.current,
            { opacity: 0 },
            { opacity: 1, ease: "power2.inOut" },
            0.88
          )
          .fromTo(
            kineticBarRef.current,
            { scale: 0.4, rotation: -18, x: 0, opacity: 0 },
            { scale: 1.0, rotation: -18, x: 0, opacity: 1, ease: "power2.out" },
            0.89
          )
          .fromTo(
            softAccentPanelRef.current,
            { x: -60, y: 20, rotation: -18, opacity: 0 },
            { x: -40, y: 10, rotation: -18, opacity: 1, ease: "power2.out" },
            0.90
          );

        // Cards fan out cleanly without jitter
        tl.fromTo(card1Ref.current, { x: -220, opacity: 0, rotation: -15 }, { x: 0, opacity: 1, rotation: -8, ease: "power2.out" }, 0.91)
          .fromTo(card2Ref.current, { x: -120, opacity: 0, rotation: -10 }, { x: 0, opacity: 1, rotation: -4, ease: "power2.out" }, 0.92)
          .fromTo(card3Ref.current, { scale: 0.6, opacity: 0 }, { scale: 1.0, opacity: 1, ease: "power2.out" }, 0.93)
          .fromTo(card4Ref.current, { x: 120, opacity: 0, rotation: 10 }, { x: 0, opacity: 1, rotation: 4, ease: "power2.out" }, 0.94)
          .fromTo(card5Ref.current, { x: 220, opacity: 0, rotation: 15 }, { x: 0, opacity: 1, rotation: 8, ease: "power2.out" }, 0.95);

        // STEP 5: ROTATE CARDS TO UPRIGHT & SPOTLIGHT FOCUS (0.95 -> 1.00)
        tl.to(
          [
            kineticBarRef.current,
            softAccentPanelRef.current,
            card1Ref.current,
            card2Ref.current,
            card3Ref.current,
            card4Ref.current,
            card5Ref.current,
          ],
          { rotation: 0, y: 0, ease: "power2.inOut" },
          0.96
        );

        tl.to(card3Ref.current, { scale: isMobile ? 1.05 : 1.15, ease: "power2.inOut" }, 0.98);
        tl.to(whiteScreenStageRef.current, { opacity: 1 }, 1.0);

        return () => {
          if (darkPanelRef.current) gsap.set(darkPanelRef.current, { clearProps: "all" });
          if (oldContentRef.current) gsap.set(oldContentRef.current, { clearProps: "all" });
          if (solidPurpleCoverRef.current) gsap.set(solidPurpleCoverRef.current, { clearProps: "all" });
          if (whiteScreenStageRef.current) gsap.set(whiteScreenStageRef.current, { clearProps: "all" });
        };
      });
    },
    { scope: sectionRef }
  );

  // MOUSE PARALLAX TILT EFFECT ON CARDS STAGE
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardsContainerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = (clientX / innerWidth - 0.5) * 20;
    const moveY = (clientY / innerHeight - 0.5) * 20;

    gsap.to(cardsContainerRef.current, {
      rotateY: moveX,
      rotateX: -moveY,
      duration: 0.6,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardsContainerRef.current) return;
    gsap.to(cardsContainerRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const tabContents = {
    about:
      "sgr delivers software engineering and brand systems that get you started quickly, and drive your growth. We specialise in full-stack SaaS applications, .NET, Azure, Docker, PostgreSQL, Three.js 3D web, and motion design.",
    approach:
      "sgr directly collaborate with clients to understand strategic requirements from the outset. From there, we deliver full-stack SaaS code, 60FPS motion physics, and visual assets, developing a complete digital system over time.",
    why:
      "sgr know how to deliver value on tight deadlines, and how to build software architectures and brand systems that can grow and adapt over time. We are perfect for aggressive GTM teams seeking immediate growth and engagement.",
  };

  return (
    <section
      id="reel"
      ref={sectionRef}
      className="relative h-screen w-screen bg-white text-black p-0 m-0 overflow-hidden select-none"
    >
      {/* SECTION 1 CONTENT CONTAINER */}
      <div
        ref={oldContentRef}
        className="w-full h-screen grid grid-cols-1 lg:grid-cols-12 items-center p-0 m-0 relative"
      >
        {/* LEFT COLUMN */}
        <div className="hidden lg:flex lg:col-span-5 h-screen bg-[#EFEFEA] border-r border-black/15 rounded-none relative overflow-hidden items-center justify-center p-0 m-0">
          <svg
            className="absolute -left-20 -top-16 w-[160%] h-[160%] pointer-events-none z-10"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path
              ref={slice1Ref}
              d="M 50 450 A 350 350 0 0 1 450 50"
              stroke="#0A0A0A"
              strokeWidth="95"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>
          <div
            ref={slice2Ref}
            className="absolute top-[42%] right-[5%] w-64 md:w-80 h-16 md:h-20 bg-[#0A0A0A] rounded-none z-20 opacity-0"
          />
          <div
            ref={slice3Ref}
            className="absolute bottom-[8%] left-[-15%] w-80 md:w-[420px] h-20 md:h-24 bg-[#0A0A0A] rounded-none z-20 opacity-0"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-1 lg:col-span-7 h-screen relative flex flex-col justify-center px-4 sm:px-12 md:px-16 py-0 bg-white z-20 overflow-hidden space-y-4 sm:space-y-4 md:space-y-5">
          <div ref={line1Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            We are sgr. We architect high-impact SaaS applications & motion web engines.
          </div>
          <div ref={line2Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Full Stack Engineering. .NET Framework, Azure Cloud, Docker & PostgreSQL.
          </div>
          <div ref={line3Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Next.js, Node.js & Three.js 3D canvas architectures built for scale.
          </div>
          <div ref={line4Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Integrating 60FPS GSAP physics, shear reveals & interactive cursor spotlights.
          </div>
          <div ref={line5Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Digital brand refreshes, logo design, UI/UX mockups, sales decks & assets.
          </div>
          <div ref={line6Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Precision engineering in motion. Institutional grade cloud scalability.
          </div>
          <div ref={line7Ref} className="font-mono font-black text-lg sm:text-xl md:text-lg tracking-tight sm:tracking-wider text-[#0A0A0A] uppercase opacity-90 transition-opacity leading-snug">
            Unwavering digital excellence and high-velocity software execution.
          </div>
        </div>
      </div>

      {/* STAGE A: CLEAN KINETIC DARK PANEL */}
      <div
        ref={darkPanelRef}
        className="fixed inset-0 w-full h-full min-h-screen z-40 bg-[#0A0A0A] text-white px-6 sm:px-12 md:px-20 pt-16 sm:pt-20 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden opacity-0 scale-50 rounded-none pointer-events-auto hidden transform-gpu will-change-transform"
      >
        {/* TOP SUBMENU BAR - STICKY, HIGH-CONTRAST, 100% CLICKABLE */}
        <div className="w-full max-w-7xl mx-auto flex items-center gap-6 sm:gap-10 font-sans font-bold text-lg sm:text-2xl tracking-tight z-50 pt-4 pb-4">
          <button
            onClick={() => setActiveTab("about")}
            className="relative inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap hover:scale-105 transition-all pointer-events-auto group"
          >
            {activeTab === "about" ? (
              <div className="w-3.5 h-7 sm:w-4 sm:h-9 bg-[#FF5500] -rotate-45 rounded-xs" />
            ) : (
              <div className="w-2.5 h-6 sm:w-3 sm:h-7 bg-zinc-700/60 -rotate-45 rounded-xs group-hover:bg-[#FF5500]/60 transition-colors" />
            )}
            <span className={activeTab === "about" ? "text-white font-black text-xl sm:text-2xl" : "text-zinc-300 font-bold hover:text-white"}>
              About Us
            </span>
          </button>

          <span className="text-zinc-700 font-light select-none">|</span>

          <button
            onClick={() => setActiveTab("approach")}
            className="relative inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap hover:scale-105 transition-all pointer-events-auto group"
          >
            {activeTab === "approach" ? (
              <div className="w-3.5 h-7 sm:w-4 sm:h-9 bg-[#FF5500] -rotate-45 rounded-xs" />
            ) : (
              <div className="w-2.5 h-6 sm:w-3 sm:h-7 bg-zinc-700/60 -rotate-45 rounded-xs group-hover:bg-[#FF5500]/60 transition-colors" />
            )}
            <span className={activeTab === "approach" ? "text-white font-black text-xl sm:text-2xl" : "text-zinc-300 font-bold hover:text-white"}>
              Approach
            </span>
          </button>

          <span className="text-zinc-700 font-light select-none">|</span>

          <button
            onClick={() => setActiveTab("why")}
            className="relative inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap hover:scale-105 transition-all pointer-events-auto group"
          >
            {activeTab === "why" ? (
              <div className="w-3.5 h-7 sm:w-4 sm:h-9 bg-[#FF5500] -rotate-45 rounded-xs" />
            ) : (
              <div className="w-2.5 h-6 sm:w-3 sm:h-7 bg-zinc-700/60 -rotate-45 rounded-xs group-hover:bg-[#FF5500]/60 transition-colors" />
            )}
            <span className={activeTab === "why" ? "text-white font-black text-xl sm:text-2xl" : "text-zinc-300 font-bold hover:text-white"}>
              Why sgr?
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 my-auto z-10 max-w-7xl w-full mx-auto">
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="font-sans font-medium text-base sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-[1.35] text-zinc-100 max-w-2xl transition-all duration-300">
              {tabContents[activeTab as keyof typeof tabContents]}
            </h2>
          </div>

          <div className="hidden xl:flex lg:col-span-5 relative flex-col items-end justify-center pointer-events-none select-none">
            <div className="font-sans font-black text-6xl sm:text-8xl tracking-tighter uppercase opacity-10 text-transparent stroke-text leading-none space-y-2">
              <div style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)" }}>ENGINEER</div>
              <div style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)" }}>BUILD</div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <Logo className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#FF5500] shrink-0 hover:rotate-180 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-400 pt-4 sm:pt-6 border-t border-zinc-800 z-10 max-w-7xl w-full mx-auto">
          <div>FULL STACK SOFTWARE ENGINEERING & DIGITAL BRAND SYSTEMS</div>
          <div className="hidden sm:block">SAAS // MOTION WEBSITES // 3D CANVAS // BRAND REFRESH</div>
        </div>
      </div>

      {/* STAGE B: SOLID 100% DEEP PURPLE COVER */}
      <div
        ref={solidPurpleCoverRef}
        className="fixed inset-0 w-screen h-screen z-50 bg-[#581C87] hidden opacity-0 pointer-events-none transform-gpu"
      />

      {/* STAGE C: PURE WHITE CANVAS WITH INTERACTIVE KINETIC CARDS */}
      <div
        ref={whiteScreenStageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed inset-0 w-screen h-screen z-50 bg-[#FFFFFF] hidden items-center justify-center pointer-events-auto overflow-hidden perspective-[1000px]"
      >
        <div
          ref={cardsContainerRef}
          className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 transition-transform duration-300 ease-out transform-style-3d"
        >
          {/* Background Soft Accent Panel */}
          <div
            ref={softAccentPanelRef}
            className="absolute w-56 sm:w-80 md:w-[420px] h-[30vh] sm:h-[34vh] bg-[#F3E8FF] rounded-none opacity-0 transform-gpu"
          />

          {/* Background Kinetic Anchor Bar */}
          <div
            ref={kineticBarRef}
            className="w-48 sm:w-80 md:w-[450px] h-[28vh] sm:h-[36vh] bg-[#581C87] rounded-none z-20 transform-gpu opacity-0"
          />

          {/* CARD 1: SAAS ENGINE */}
          <div
            ref={card1Ref}
            onClick={() => setSelectedCard(1)}
            onMouseEnter={() => setSelectedCard(1)}
            className={`absolute left-[2%] sm:left-[5%] w-36 sm:w-64 h-[32vh] sm:h-[44vh] bg-[#581C87] text-white p-4 sm:p-6 rounded-none flex flex-col justify-end transform-gpu transition-all duration-500 cursor-pointer border border-purple-400/20 ${
              selectedCard === 1
                ? "z-40 scale-110 border-[#FF5500]"
                : "z-10 hover:scale-105 opacity-90"
            }`}
          >
            <div className="space-y-1">
              <div className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tighter">
                SaaS<span className="text-[#FF5500]">.</span>
              </div>
              <p className="font-mono text-[10px] text-purple-200/80 leading-tight hidden sm:block">
                Full-stack Next.js, Node & cloud API architecture
              </p>
            </div>
          </div>

          {/* CARD 2: sgr BRAND ACCENT */}
          <div
            ref={card2Ref}
            onClick={() => setSelectedCard(2)}
            onMouseEnter={() => setSelectedCard(2)}
            className={`absolute left-[20%] sm:left-[26%] w-32 sm:w-56 h-[24vh] sm:h-[32vh] bg-[#FF5500] text-white p-4 sm:p-6 rounded-none flex flex-col justify-center items-center transform-gpu transition-all duration-500 cursor-pointer ${
              selectedCard === 2
                ? "z-40 scale-115 border border-white"
                : "z-20 hover:scale-105 opacity-95"
            }`}
          >
            <div className="flex items-center gap-2 font-sans font-black text-2xl sm:text-4xl">
              <Logo className="w-7 h-7 sm:w-10 sm:h-10 text-white shrink-0" />
              <span>sgr<span className="text-black">.</span></span>
            </div>
          </div>

          {/* CARD 3: MOTION (MAIN HERO CARD) */}
          <div
            ref={card3Ref}
            onClick={() => setSelectedCard(3)}
            onMouseEnter={() => setSelectedCard(3)}
            className={`absolute w-52 sm:w-80 md:w-96 h-[40vh] sm:h-[52vh] bg-[#1D4ED8] text-white p-5 sm:p-8 rounded-none flex flex-col justify-end transform-gpu transition-all duration-500 cursor-pointer border border-blue-400/30 ${
              selectedCard === 3
                ? "z-50 scale-110 ring-2 ring-[#FF5500]"
                : "z-30 hover:scale-105 opacity-95"
            }`}
          >
            <div className="space-y-2">
              <div className="font-sans font-black text-3xl sm:text-6xl tracking-tighter">
                motion<span className="text-[#FF5500]">.</span>
              </div>
              <p className="font-mono text-xs text-blue-100/90 leading-relaxed hidden sm:block">
                60FPS GSAP physics, pinned scroll triggers, and interactive cursor reveals.
              </p>
            </div>
          </div>

          {/* CARD 4: 3D CANVAS ACCENT */}
          <div
            ref={card4Ref}
            onClick={() => setSelectedCard(4)}
            onMouseEnter={() => setSelectedCard(4)}
            className={`absolute right-[18%] sm:right-[24%] w-32 sm:w-52 h-[22vh] sm:h-[30vh] bg-[#064E3B] text-white p-4 sm:p-6 rounded-none flex flex-col justify-center items-center text-center transform-gpu transition-all duration-500 cursor-pointer ${
              selectedCard === 4
                ? "z-40 scale-115 border border-emerald-400"
                : "z-20 hover:scale-105 opacity-95"
            }`}
          >
            <div className="font-mono font-extrabold text-xs sm:text-base text-emerald-100">
              THREE.JS & WEBGL
            </div>
          </div>

          {/* CARD 5: ROLLOUT */}
          <div
            ref={card5Ref}
            onClick={() => setSelectedCard(5)}
            onMouseEnter={() => setSelectedCard(5)}
            className={`absolute right-[2%] sm:right-[5%] w-36 sm:w-64 h-[32vh] sm:h-[44vh] bg-[#2DD4BF] text-black p-4 sm:p-6 rounded-none flex flex-col justify-end transform-gpu transition-all duration-500 cursor-pointer border border-teal-600/20 ${
              selectedCard === 5
                ? "z-40 scale-110 border-black"
                : "z-10 hover:scale-105 opacity-90"
            }`}
          >
            <div className="space-y-1">
              <div className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tighter">
                rollout<span className="text-[#FF5500]">.</span>
              </div>
              <p className="font-mono text-[10px] text-teal-900/80 leading-tight hidden sm:block">
                Complete brand refresh, sales decks & SaaS launch assets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

