"use client";

import React, { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroBrandReveal from "@/components/HeroBrandReveal";
import ZoomScrollReel from "@/components/ZoomScrollReel";
import FounderExecutiveSection from "@/components/FounderExecutiveSection";
import NextKineticShowcase from "@/components/NextKineticShowcase";
import CalendlyModal from "@/components/CalendlyModal";
import EnquiryModal from "@/components/EnquiryModal";
import Footer from "@/components/Footer";
import IntroPreloader from "@/components/IntroPreloader";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeMenuTarget, setActiveMenuTarget] = useState(4); // Default to Get in Touch

  const handleOpenCalendly = () => setIsEnquiryOpen(true);
  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
    setIsEnquiryOpen(false);
  };

  return (
    <SmoothScroll>
      {/* 3-Stage Kinetic Intro Preloader Experience */}
      <IntroPreloader />

      <div className="relative min-h-screen bg-white text-black selection:bg-[#FF5500] selection:text-white">
        {/* Navigation Bar with Torchlight Spotlight Sync */}
        <Navbar
          onOpenCalendly={handleOpenCalendly}
          onHoverMenu={(index) => setActiveMenuTarget(index)}
        />

        {/* Main Section Architecture */}
        <main className="w-full">
          {/* Section 1: Colossal SGR Display Reveal */}
          <HeroBrandReveal
            onOpenCalendly={handleOpenCalendly}
            activeMenuTarget={activeMenuTarget}
          />

          {/* Section 2: Cinematic Pinned Dark Reel & Kinetic Transformation */}
          <ZoomScrollReel />

          {/* Section 3: Founder Executive Section (Soft Off-White Page + User Photo + Dark Slide-Up Text Highlight Frame) */}
          <FounderExecutiveSection onOpenCalendly={handleOpenCalendly} />

          {/* Section 4: Pinned Next Kinetic Showcase (Sharp Orange Bar Middle Rotation -> Pure MP4 Video Reel) */}
          <NextKineticShowcase onOpenCalendly={handleOpenCalendly} />
        </main>

        {/* Global Footer (Matching KobyKooba Reference Screenshot: Giant sgr. mark + Rotated Let's Chat CTA) */}
        <Footer onOpenCalendly={handleOpenCalendly} />

        {/* Floating Cookie Consent Banner */}
        <CookieBanner />

        {/* Interactive Multi-Step Enquiry Modal */}
        <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseCalendly} />
        <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
      </div>
    </SmoothScroll>
  );
}
