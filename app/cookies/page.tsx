"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import EnquiryModal from "@/components/EnquiryModal";
import SmoothScroll from "@/components/SmoothScroll";

export default function CookiesPage() {
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

        {/* MINIMALIST EDITORIAL COOKIES POLICY STAGE */}
        <main className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto">
          {/* MAIN PAGE TITLE */}
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0A0A0A] mb-8 sm:mb-12">
            Cookies Policy
          </h1>

          {/* INTRODUCTORY SUMMARY */}
          <p className="font-sans text-base sm:text-xl text-zinc-700 leading-relaxed max-w-4xl mb-12 sm:mb-16">
            This website uses cookies. We use essential cookies to ensure our digital platform functions properly, enable smooth interactive animations, and analyze anonymous traffic to continuously improve user experience.
          </p>

          {/* COOKIE POLICY SECTIONS */}
          <div className="space-y-12 sm:space-y-16 pt-4">
            {/* SECTION 1 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                What are cookies?
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used by website operators to make websites work efficiently, remember user preferences, and provide analytical reporting.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                How sgr uses cookies
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                We use cookies to maintain core site operations, save temporary user selections within our project planner modal, prevent redundant page re-renders, and collect aggregate, non-identifying telemetry about site usage.
              </p>
            </div>

            {/* SECTION 3: TYPES OF COOKIES */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-6 sm:mb-8">
                Types of cookies we use
              </h2>

              <div className="space-y-8 max-w-4xl">
                {/* NECESSARY COOKIES */}
                <div className="bg-[#FAF9F5] border border-black/10 p-6 sm:p-8 rounded-none">
                  <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-3">
                    1. Necessary Cookies (Strictly Essential)
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                    Necessary cookies enable core functionality such as security, network management, smooth scroll physics, and accessibility. The website cannot function properly without these cookies.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-black/15 text-zinc-500 uppercase">
                          <th className="py-2 pr-4">Cookie Name</th>
                          <th className="py-2 pr-4">Provider</th>
                          <th className="py-2 pr-4">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/10 text-zinc-800">
                        <tr>
                          <td className="py-3 pr-4 font-bold">sgr_session</td>
                          <td className="py-3 pr-4">sgr Global</td>
                          <td className="py-3 pr-4">Maintains user session state during project inquiry form entry.</td>
                          <td className="py-3">Session</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-bold">lenis_state</td>
                          <td className="py-3 pr-4">sgr Global</td>
                          <td className="py-3 pr-4">Stores smooth scroll position data to prevent layout jumps.</td>
                          <td className="py-3">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ANALYTICS COOKIES */}
                <div className="bg-[#FAF9F5] border border-black/10 p-6 sm:p-8 rounded-none">
                  <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-3">
                    2. Performance & Analytics Cookies
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                    Analytics cookies help us understand how visitors interact with our website by gathering and reporting information anonymously. This helps us optimize site performance and page loading speed.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-black/15 text-zinc-500 uppercase">
                          <th className="py-2 pr-4">Cookie Name</th>
                          <th className="py-2 pr-4">Provider</th>
                          <th className="py-2 pr-4">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/10 text-zinc-800">
                        <tr>
                          <td className="py-3 pr-4 font-bold">_ga</td>
                          <td className="py-3 pr-4">Google Analytics</td>
                          <td className="py-3 pr-4">Calculates visitor, session, and campaign data anonymously for site analytics.</td>
                          <td className="py-3">2 years</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-bold">_ga_*</td>
                          <td className="py-3 pr-4">Google Analytics</td>
                          <td className="py-3 pr-4">Used to maintain session state for anonymous web analytics metrics.</td>
                          <td className="py-3">2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: MANAGING COOKIES */}
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-[#0A0A0A] mb-4 sm:mb-6">
                Managing & disabling cookies
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl">
                You can choose to disable or clear cookies through your individual browser options. Disabling strictly necessary cookies may impact certain interactive features on our website.
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
