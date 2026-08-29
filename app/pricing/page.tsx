"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import EnquiryModal from "@/components/EnquiryModal";
import SmoothScroll from "@/components/SmoothScroll";
import { ArrowRight, Check } from "lucide-react";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleOpenCalendly = (pkgTitle?: string) => {
    if (pkgTitle && typeof pkgTitle === "string") {
      setSelectedPackage(pkgTitle);
    }
    setIsEnquiryOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
    setIsEnquiryOpen(false);
  };

  useGSAP(
    () => {
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
          }
        );
      }
    },
    { scope: containerRef }
  );

  const pricingTiers = [
    {
      id: "tier-1",
      title: "Digital Brand Refresh",
      price: "Starting from $5,000",
      description: "Just the basics, done right. Essential identity and motion web foundation engineered for growing products.",
      graphic: (
        <svg className="w-full h-36 sm:h-44 bg-[#0A0A0A] rounded-none" viewBox="0 0 400 200" fill="none">
          <path d="M 40 180 A 140 140 0 0 1 360 180" stroke="#EFEFEA" strokeWidth="48" strokeLinecap="square" />
        </svg>
      ),
      features: [
        "Logo Design",
        "Research & Needs Analysis",
        "Imagery and Illustration",
        "Photography Guidelines",
        "Typography",
        "Motion Website Baseline",
      ],
    },
    {
      id: "tier-2",
      title: "Complete Digital Brand Pack",
      price: "Starting from $8,000",
      popular: true,
      description: "Build for the future with a UX-driven rebrand, perfectly engineered for your target audience.",
      graphic: (
        <svg className="w-full h-36 sm:h-44 bg-[#0A0A0A] rounded-none" viewBox="0 0 400 200" fill="none">
          <circle cx="120" cy="90" r="60" stroke="#EFEFEA" strokeWidth="32" />
          <rect x="220" y="110" width="130" height="40" fill="#EFEFEA" transform="rotate(-15 220 110)" />
        </svg>
      ),
      features: [
        "Logo Design",
        "Research & Needs Analysis",
        "Imagery and Illustration",
        "Photography Guidelines",
        "Typography",
        "Iconography",
        "Branded Platform Mockups",
        "Email Signatures",
        "Motion & Interactive Web Experience",
      ],
    },
    {
      id: "tier-3",
      title: "Full Brand & SaaS Rollout",
      price: "Starting from $10,000",
      description: "Bring your brand to the real world. We'll provide you with everything you need to expand your reach and supercharge your sales process.",
      graphic: (
        <svg className="w-full h-36 sm:h-44 bg-[#0A0A0A] rounded-none" viewBox="0 0 400 200" fill="none">
          <rect x="50" y="40" width="300" height="110" fill="#EFEFEA" transform="rotate(-12 200 100)" />
        </svg>
      ),
      features: [
        "Logo Design & Needs Analysis",
        "Imagery, Illustration & Typography",
        "Photography & Iconography Guidelines",
        "Branded Platform & UI/UX Mockups",
        "Sales Decks & Email Signatures",
        "Business Cards & Social Media Assets",
        "Letter Heads & Merchandise Mockups",
        "Full Stack SaaS Application Architecture",
        "High-Performance 3D & Motion Website Engine",
      ],
    },
  ];

  return (
    <SmoothScroll>
      <div
        ref={containerRef}
        className="min-h-screen bg-[#EFEFEA] text-[#0A0A0A] selection:bg-[#7E22CE] selection:text-white flex flex-col justify-between"
      >
        {/* Navigation Bar */}
        <Navbar onOpenCalendly={handleOpenCalendly} />

        {/* HERO SECTION */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
            <div className="font-mono text-xs sm:text-sm text-[#7E22CE] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7E22CE] animate-pulse" />
              <span>Transparent Pricing</span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-[#0A0A0A] leading-tight">
              Engineering & Brand Packs
            </h1>

            <p className="font-sans text-base sm:text-xl text-zinc-600 leading-relaxed font-medium pt-2">
              We want to get started quickly, not haggle over the details. Every project is unique, but our most popular software engineering and brand packages are shown below.
            </p>
          </div>

          {/* 3 PRICING CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div
                key={tier.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`relative bg-white rounded-none border-2 border-black flex flex-col justify-between p-2 sm:p-3 transition-all duration-300 hover:-translate-y-2 group ${
                  tier.popular ? "ring-2 ring-[#7E22CE]" : ""
                }`}
              >
                <div>
                  {/* TOP GEOMETRIC GRAPHIC */}
                  <div className="relative overflow-hidden mb-6">
                    {tier.graphic}
                    {tier.popular && (
                      <div className="absolute top-4 right-4 bg-[#7E22CE] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-none">
                        POPULAR CHOICE
                      </div>
                    )}
                  </div>

                  {/* CARD HEADER & PRICE */}
                  <div className="px-4 sm:px-6 space-y-3 mb-6">
                    <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-[#0A0A0A]">
                      {tier.title}
                    </h3>

                    <div className="font-mono text-sm text-zinc-500 font-medium">
                      from <span className="font-sans font-black text-3xl sm:text-4xl text-[#0A0A0A] ml-1">{tier.price}</span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                      {tier.description}
                    </p>
                  </div>

                  {/* FEATURE CHECKLIST WITH ACCENT PURPLE LINES */}
                  <div className="px-4 sm:px-6 pt-6 border-t border-black/10 space-y-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 font-mono text-xs sm:text-sm text-zinc-800">
                        <span className="text-[#7E22CE] font-black text-base leading-none select-none">|</span>
                        <span className="font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ENQUIRE CTA BUTTON AT BOTTOM */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <button
                    onClick={() => handleOpenCalendly(tier.title)}
                    className="w-full py-4 rounded-none border-2 border-black text-[#0A0A0A] font-sans font-black text-base uppercase tracking-wider hover:bg-[#7E22CE] hover:text-white hover:border-[#7E22CE] transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#7E22CE]"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-4 h-4 text-[#7E22CE] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* OUR PROCESS & PROJECT DELIVERY SECTION (Matching KobyKooba Screenshots 1-to-1) */}
        <section className="w-full bg-[#0D0D0D] text-white py-20 sm:py-32 px-4 sm:px-8 md:px-16 border-t border-black/10">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
            {/* SECTION TITLE */}
            <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white">
              Our Process & Project Delivery
            </h2>

            {/* 4 NUMBERED DELIVERY STEPS */}
            <div className="space-y-12 sm:space-y-16">
              {/* STEP 01 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pb-12 border-b border-white/10">
                <div className="lg:col-span-2 font-sans font-black text-6xl sm:text-8xl tracking-tighter text-white">
                  01
                </div>
                <div className="lg:col-span-5 font-sans font-black text-2xl sm:text-4xl text-white leading-tight">
                  Scope and objectives <span className="font-normal text-zinc-400">| Day one</span>
                </div>
                <div className="lg:col-span-5 font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
                  sgr begin with a direct discussion to define the main goals and priorities of the project. Key success criteria are identified, and a broader project roadmap is developed.
                </div>
              </div>

              {/* STEP 02 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pb-12 border-b border-white/10">
                <div className="lg:col-span-2 font-sans font-black text-6xl sm:text-8xl tracking-tighter text-white">
                  02
                </div>
                <div className="lg:col-span-5 font-sans font-black text-2xl sm:text-4xl text-white leading-tight">
                  Research and ideation <span className="font-normal text-zinc-400">| Week one</span>
                </div>
                <div className="lg:col-span-5 font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
                  sgr will identify competitors, best-practice examples, and market leaders within a structured research phase. This feeds into a curated mood board, UI/UX architecture wireframes, and a series of design proposals presented to the client.
                </div>
              </div>

              {/* STEP 03 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pb-12 border-b border-white/10">
                <div className="lg:col-span-2 font-sans font-black text-6xl sm:text-8xl tracking-tighter text-white">
                  03
                </div>
                <div className="lg:col-span-5 font-sans font-black text-2xl sm:text-4xl text-white leading-tight">
                  Design and delivery <span className="font-normal text-zinc-400">| Week two - week three</span>
                </div>
                <div className="lg:col-span-5 font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
                  The sgr team designs and builds each element within an organised production sprint — full-stack SaaS code, 60FPS motion physics, and brand assets are then presented to the client for sign-off.
                </div>
              </div>

              {/* STEP 04 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pb-4">
                <div className="lg:col-span-2 font-sans font-black text-6xl sm:text-8xl tracking-tighter text-white">
                  04
                </div>
                <div className="lg:col-span-5 font-sans font-black text-2xl sm:text-4xl text-white leading-tight">
                  Ongoing maintenance <span className="font-normal text-zinc-400">| Week three onwards</span>
                </div>
                <div className="lg:col-span-5 font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
                  If required, sgr will continue to update and adapt the software architecture and brand identity over time, further refining visual elements and scaling API infrastructure based on audience feedback.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer onOpenCalendly={() => handleOpenCalendly()} />

        {/* Interactive Multi-Step Enquiry Modal */}
        <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseCalendly} initialPackage={selectedPackage} />
        <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
      </div>
    </SmoothScroll>
  );
}
