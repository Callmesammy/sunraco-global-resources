"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import CalendlyModal from "@/components/CalendlyModal";
import SmoothScroll from "@/components/SmoothScroll";
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck, Compass, Anchor, Cpu, Zap } from "lucide-react";

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handleOpenEnquiry = (projectName?: string) => {
    if (projectName && typeof projectName === "string") {
      setSelectedProject(projectName);
    }
    setIsEnquiryOpen(true);
  };

  const handleCloseModals = () => {
    setIsEnquiryOpen(false);
    setIsCalendlyOpen(false);
  };

  useGSAP(
    () => {
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }
    },
    { scope: containerRef }
  );

  const projects = [
    {
      id: "project-1",
      title: "Ping",
      category: "SaaS Infrastructure",
      year: "2026",
      liveUrl: "https://ping-tx5v.vercel.app/",
      bgClass: "bg-[#B4F000] text-[#0A0A0A]", // Lime Green
      graphic: (
        <div className="w-full h-80 sm:h-[420px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <div className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#0A0A0A] text-center">
            Ping<span className="text-[#FF5500]">.</span>
          </div>
          <div className="mt-4 font-mono text-xs text-black/80 uppercase tracking-widest bg-black/10 px-4 py-1.5 rounded-full font-bold">
            Real-Time Automated Telemetry
          </div>
        </div>
      ),
    },
    {
      id: "project-2",
      title: "Vine Homes",
      category: "PropTech SaaS",
      year: "2026",
      liveUrl: "https://vine-phi.vercel.app/",
      bgClass: "bg-[#0F4C46] text-white", // Dark Teal
      graphic: (
        <div className="w-full h-80 sm:h-[420px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <div className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#EFEFEA] text-center">
            Vine Homes
          </div>
          <div className="mt-4 font-mono text-xs text-[#5EEAD4] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full font-bold">
            Automated Living & Real Estate
          </div>
        </div>
      ),
    },
    {
      id: "project-3",
      title: "Loomiie",
      category: "3D & Motion Web",
      year: "2026",
      liveUrl: "https://loomiie-8loo.vercel.app/",
      bgClass: "bg-[#FF5500] text-white", // Vivid Solar Orange
      graphic: (
        <div className="w-full h-80 sm:h-[420px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <div className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white text-center">
            Loomiie<span className="text-black">.</span>
          </div>
          <div className="mt-4 font-mono text-xs text-white/90 uppercase tracking-widest bg-black/20 px-4 py-1.5 rounded-full font-bold">
            60FPS Kinetic Motion Engine
          </div>
        </div>
      ),
    },
    {
      id: "project-4",
      title: "BizTracker",
      category: "Enterprise SaaS",
      year: "2025",
      liveUrl: "https://yourbiztracker.com/",
      bgClass: "bg-[#121212] border border-white/10 text-white", // Dark Obsidian
      graphic: (
        <div className="w-full h-80 sm:h-[420px] flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]">
          <div className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white text-center">
            BizTracker<span className="text-[#FF5500]">.</span>
          </div>
          <div className="mt-4 font-mono text-xs text-zinc-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 font-bold">
            Business Growth & Analytics
          </div>
        </div>
      ),
    },
    {
      id: "project-5",
      title: "Ping Social App",
      category: "Social SaaS // Real-Time Messaging",
      year: "2026",
      liveUrl: "https://ping-tx5v.vercel.app/",
      bgClass: "bg-[#6366F1] text-white md:col-span-2", // Electric Indigo / Neon Purple (Full Width Hero Box)
      graphic: (
        <div className="w-full h-80 sm:h-[440px] flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#4F46E5]">
          <div className="font-sans font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-white text-center">
            Ping Social<span className="text-[#FF5500]">.</span>
          </div>
          <div className="mt-4 font-mono text-xs sm:text-sm text-indigo-100 uppercase tracking-widest bg-white/15 px-6 py-2 rounded-full font-bold backdrop-blur-md border border-white/20">
            Real-Time Messaging & Telemetry Application
          </div>
        </div>
      ),
    },
  ];

  return (
    <SmoothScroll>
      <div
        ref={containerRef}
        className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#FF5500] selection:text-white flex flex-col justify-between"
      >
        {/* Navigation Bar */}
        <Navbar onOpenCalendly={() => handleOpenEnquiry()} />

        {/* HERO BANNER SECTION (Matching KobyKooba Screenshot 1-to-1) */}
        <section className="w-full bg-[#EFEFEA] text-[#0A0A0A] pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* BACK BREADCRUMB BUTTON */}
            <div>
              <a
                href="/"
                className="inline-flex items-center gap-2 font-sans font-bold text-sm sm:text-base text-[#FF5500] hover:text-[#0A0A0A] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </a>
            </div>

            {/* HERO TITLE */}
            <div className="space-y-4">
              <h1 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#0A0A0A]">
                Our work
              </h1>
              <p className="font-sans text-lg sm:text-2xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
                Full-stack SaaS applications, motion websites, 3D web experiences, and digital brand rollouts.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN PROJECTS GRID SECTION (Edge-to-Edge Full Width, Sharp 90° Zero-Radius Corners) */}
        <main className="w-full py-0 px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
            {projects.map((proj, idx) => (
              <a
                key={proj.id}
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`group cursor-pointer rounded-none border border-black/10 overflow-hidden transition-all duration-300 flex flex-col justify-between ${proj.bgClass}`}
              >
                {/* PROJECT GRAPHIC PREVIEW */}
                {proj.graphic}

                {/* CLEAN PROJECT CARD INFO FOOTER (Matching KobyKooba 1-to-1) */}
                <div className="p-8 sm:p-12 space-y-3 border-t border-black/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest opacity-80">
                    <span>{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                      {proj.title}
                    </h2>

                    <div className="p-3.5 sm:p-4 rounded-none bg-black/10 group-hover:bg-black group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* Global Footer */}
        <Footer onOpenCalendly={() => handleOpenEnquiry()} />

        {/* Interactive Multi-Step Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseModals}
          initialPackage={selectedProject}
        />
        <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseModals} />
      </div>
    </SmoothScroll>
  );
}
