"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface NextKineticShowcaseProps {
  onOpenCalendly?: () => void;
}

export default function NextKineticShowcase({}: NextKineticShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const thinBoxRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add({ isDesktop: "(min-width: 640px)", isMobile: "(max-width: 639px)" }, (ctx) => {
        const { isMobile } = ctx.conditions as { isMobile: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: isMobile ? "+=100%" : "+=140%",
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        // STEP 1: SHARP THIN KINETIC BAR ENTERS & ROTATES IN 3D TO THE MIDDLE (0.0 -> 0.40)
        tl.fromTo(
          thinBoxRef.current,
          { x: isMobile ? -150 : -350, y: isMobile ? -80 : -180, rotation: -28, rotateY: -45, scale: 0.8, opacity: 0 },
          { x: 0, y: 0, rotation: 16, rotateY: 10, scale: isMobile ? 1.1 : 1.4, opacity: 1, ease: "power2.out" },
          0
        );

        // STEP 2: SHARP BAR ZOOMS OUT INTO PURE MP4 VIDEO SHOWCASE (0.40 -> 0.85)
        tl.to(
          thinBoxRef.current,
          {
            scale: isMobile ? 1.6 : 2.2,
            rotation: 0,
            rotateY: 0,
            y: 0,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.38
        ).fromTo(
          videoContainerRef.current,
          { scale: 0.65, rotateX: 12, opacity: 0 },
          { scale: 1.0, rotateX: 0, opacity: 1, ease: "power2.out" },
          0.42
        );

        // STEP 3: SMOOTH PAUSE & REVEAL (0.85 -> 1.0)
        tl.to(videoContainerRef.current, { opacity: 1, scale: 1.0 }, 1.0);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="next-kinetic-page"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#EFEFEA] text-[#0A0A0A] p-0 m-0 overflow-hidden select-none flex items-center justify-center border-t border-black/10"
    >
      {/* SHARP THIN KINETIC ORANGE BAR */}
      <div
        ref={thinBoxRef}
        className="w-56 sm:w-80 md:w-[480px] h-16 sm:h-24 md:h-28 bg-[#FF5500] rounded-none shadow-[0_30px_90px_rgba(255,85,0,0.5)] z-20 transform-gpu will-change-transform"
      />

      {/* SHARP ZOOMED MP4 VIDEO CONTAINER */}
      <div
        ref={videoContainerRef}
        className="absolute w-[94vw] max-w-7xl h-[55vh] sm:h-[78vh] rounded-none overflow-hidden shadow-2xl bg-black border border-black/10 z-30 opacity-0 transform-gpu pointer-events-auto"
      >
        <video
          src="/so_i_want_a_mini_animation_on.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
