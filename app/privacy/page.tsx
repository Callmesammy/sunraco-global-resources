"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import EnquiryModal from "@/components/EnquiryModal";
import SmoothScroll from "@/components/SmoothScroll";

export default function PrivacyPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#EFEFEA] text-[#0A0A0A] select-none relative font-sans">
        {/* TOP NAVIGATION BAR (LIGHT MODE) */}
        <Navbar
          onOpenCalendly={() => setIsCalendlyOpen(true)}
          isDark={false}
        />

        {/* MINIMALIST EDITORIAL PRIVACY POLICY STAGE */}
        <main className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto">
          {/* MAIN PAGE TITLE */}
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0A0A0A] mb-8 sm:mb-12">
            Privacy Policy
          </h1>

          {/* INTRODUCTORY SUMMARY */}
          <p className="font-sans text-base sm:text-xl text-zinc-700 leading-relaxed max-w-4xl mb-12 sm:mb-16">
            Our privacy policy&apos;s aim is to inform how we collect, use and protect your Personally Identifiable Information with our website.
          </p>

          {/* POLICY SECTION MATRIX */}
          <div className="space-y-12 sm:space-y-16 pt-4">
            {/* SECTION 1 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                What personal information do we collect?
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                When filling in our project planner form on our website, you will be asked for your name, email address, and other information.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                When do we collect it?
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                We collect the information when you complete the project planner form on our website.
              </p>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                How do we use your information?
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                We use the information you submit when you express interest in working with sgr to follow up on your enquiry (email/telephone).
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                How do we protect your information?
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                The information you submit is stored in servers behind secured networks and only accessible by a limited number of people who have sufficient access rights. All information you submit is transmitted via Secure Socket Layer (SSL). All submitted information via our online form is deleted on a weekly basis.
              </p>
            </div>
          </div>
        </main>

        {/* GLOBAL FOOTER */}
        <Footer onOpenCalendly={() => setIsCalendlyOpen(true)} />

        {/* MODALS */}
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
        />
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
