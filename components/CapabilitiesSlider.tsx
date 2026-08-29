"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Ship, Fuel, Gem, Layers, Landmark } from "lucide-react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Maritime Fleet Operations",
    subtitle: "GLOBAL LOGISTICS & TANKER CHARTERING",
    description:
      "Management of Aframax, VLCC, and LNG carriers equipped with satellite telemetry and low-emission dual-fuel engines.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    icon: Ship,
    tag: "38 VLCC Vessels",
  },
  {
    id: "02",
    title: "Refined Energy Systems",
    subtitle: "HYDROCARBON CORRIDORS & LNG",
    description:
      "Direct off-take and distribution of liquefied natural gas, low-sulfur fuel oil, and renewable aviation biofuels.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    icon: Fuel,
    tag: "2.4M BBL/Day",
  },
  {
    id: "03",
    title: "Strategic Minerals",
    subtitle: "RARE EARTH & METALS ARCHITECTURE",
    description:
      "End-to-end supply chain security for copper cathode, lithium carbonate, industrial nickel, and refined bullion.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    icon: Gem,
    tag: "Grade A Certified",
  },
  {
    id: "04",
    title: "Deepwater Terminals",
    subtitle: "PORT INFRASTRUCTURE & BUNKERING",
    description:
      "Ownership and long-term lease of high-throughput deepwater berths across major maritime chokepoints.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    icon: Layers,
    tag: "18 Port Berths",
  },
  {
    id: "05",
    title: "Structured Trade Capital",
    subtitle: "COMMODITY LIQUIDITY & HEDGING",
    description:
      "Custom collateralized trade finance facilities, letters of credit, and physical spot-market risk mitigation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    icon: Landmark,
    tag: "Tier-1 Capital",
  },
];

interface CapabilitiesProps {
  onOpenCalendly: () => void;
}

export default function CapabilitiesSlider({ onOpenCalendly }: CapabilitiesProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scrollWidth = scrollContainerRef.current
          ? scrollContainerRef.current.scrollWidth - window.innerWidth
          : 0;

        if (scrollWidth > 0) {
          gsap.to(scrollContainerRef.current, {
            x: -scrollWidth - 80,
            ease: "none",
            scrollTrigger: {
              trigger: targetRef.current,
              pin: true,
              scrub: 0.8,
              start: "top top",
              end: `+=${scrollWidth}`,
              anticipatePin: 1,
            },
          });
        }
      });
    },
    { scope: targetRef }
  );

  return (
    <section
      id="capabilities"
      ref={targetRef}
      className="relative min-h-screen w-full bg-[#0A0A0A] py-24 overflow-hidden flex flex-col justify-between"
    >
      {/* Header Info */}
      <div className="px-6 md:px-16 flex items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF5500] uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            <span>02. CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tighter uppercase">
            INTEGRATED CAPABILITY MATRIX
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs font-mono text-zinc-500">
          <span>DRAG OR SCROLL HORIZONTALLY</span>
          <ArrowRight className="w-4 h-4 text-[#FF5500]" />
        </div>
      </div>

      {/* Horizontal Cards Scroll Container */}
      <div className="w-full flex-1 flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 px-6 md:px-16 w-max"
        >
          {CAPABILITIES.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.id}
                className="group relative w-[85vw] sm:w-[500px] md:w-[550px] h-[580px] rounded-3xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between p-8 hover:border-[#FF5500]/60 transition-all duration-500 shadow-2xl flex-shrink-0"
              >
                {/* Background Image with Hover Parallax Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-110 transition-all duration-700 ease-out"
                  style={{ backgroundImage: `url('${cap.image}')` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />

                {/* Top Card Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-zinc-500 group-hover:text-[#FF5500] transition-colors">
                    {cap.id}
                  </span>
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-300 tracking-wider">
                    {cap.tag}
                  </div>
                </div>

                {/* Bottom Card Details */}
                <div className="relative z-10 space-y-4">
                  <div className="p-3.5 w-max rounded-2xl bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] text-[#FF5500] uppercase tracking-widest mb-1">
                      {cap.subtitle}
                    </p>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {cap.description}
                  </p>

                  <button
                    onClick={onOpenCalendly}
                    className="pt-2 inline-flex items-center gap-2 font-mono text-xs text-white group-hover:text-[#FF5500] transition-colors"
                  >
                    <span>REQUEST INFRASTRUCTURE DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
