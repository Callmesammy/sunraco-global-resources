"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Shield, Cpu, Activity } from "lucide-react";

export default function KineticTextMask() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textLinesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lineElements = textLinesRef.current?.querySelectorAll(".kinetic-line");
        if (lineElements && lineElements.length > 0) {
          gsap.fromTo(
            lineElements,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              stagger: 0.18,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const lineElements = textLinesRef.current?.querySelectorAll(".kinetic-line");
        if (lineElements) {
          gsap.set(lineElements, { y: "0%", opacity: 1 });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full bg-[#0A0A0A] bg-grid-pattern py-32 px-6 md:px-16 flex flex-col justify-between border-y border-white/10"
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#FF5500]" />
          <span className="uppercase">MANIFESTO // KINETIC CORE</span>
        </div>
        <span className="hidden sm:inline">SUNRACO ARCHITECTURE BLUEPRINT v4.2</span>
      </div>

      {/* Main Kinetic Text Mask Block */}
      <div ref={textLinesRef} className="my-auto py-12 max-w-6xl">
        <div className="overflow-hidden py-2">
          <p className="kinetic-line font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter text-zinc-100 uppercase leading-[1.08]">
            WE DO NOT MERELY MOVE COMMODITIES.
          </p>
        </div>

        <div className="overflow-hidden py-2">
          <p className="kinetic-line font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter text-[#FF5500] uppercase leading-[1.08]">
            WE ARCHITECT THE INFRASTRUCTURE
          </p>
        </div>

        <div className="overflow-hidden py-2">
          <p className="kinetic-line font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter text-zinc-100 uppercase leading-[1.08]">
            OF GLOBAL TRADE & ENERGY FREEDOM.
          </p>
        </div>
      </div>

      {/* Three Pillars Footer Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-zinc-400 font-mono text-xs">
        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#FF5500]/40 transition-colors">
          <div className="flex items-center gap-2 text-[#FF5500]">
            <Cpu className="w-4 h-4" />
            <span className="font-bold text-white uppercase">AUTONOMOUS DISPATCH</span>
          </div>
          <p className="text-zinc-400 leading-relaxed font-sans font-light text-sm">
            AI-driven dynamic routing and real-time vessel tracking across high-volume maritime corridors.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#FF5500]/40 transition-colors">
          <div className="flex items-center gap-2 text-[#FF5500]">
            <Shield className="w-4 h-4" />
            <span className="font-bold text-white uppercase">RISK MITIGATION</span>
          </div>
          <p className="text-zinc-400 leading-relaxed font-sans font-light text-sm">
            Institutional hedging and physical liquidity guaranteed through sovereign-backed deepwater reserves.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#FF5500]/40 transition-colors">
          <div className="flex items-center gap-2 text-[#FF5500]">
            <Activity className="w-4 h-4" />
            <span className="font-bold text-white uppercase">ZERO DISRUPTION</span>
          </div>
          <p className="text-zinc-400 leading-relaxed font-sans font-light text-sm">
            24/7 kinetic operational monitoring with sub-minute failover protocols across key transshipment hubs.
          </p>
        </div>
      </div>
    </section>
  );
}
