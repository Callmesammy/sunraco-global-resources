"use client";

import React, { useState, useRef } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

function RollingCheckbox({ isSelected }: { isSelected: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isSelected && boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { rotation: -180, scale: 0.7 },
          { rotation: 360, scale: 1.0, duration: 0.5, ease: "back.out(1.8)" }
        );
      }
    },
    { dependencies: [isSelected], scope: boxRef }
  );

  return (
    <div
      ref={boxRef}
      className={`w-7 h-7 rounded-none border-2 transition-all flex items-center justify-center shrink-0 transform-gpu will-change-transform ${
        isSelected
          ? "bg-white border-white text-black shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          : "bg-[#1A1A1A] border-white/40 group-hover:border-white"
      }`}
    >
      {isSelected && <div className="w-3.5 h-3.5 bg-black rounded-none" />}
    </div>
  );
}
function AnimatedPurpleAccent() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (barRef.current) {
        gsap.fromTo(
          barRef.current,
          { rotation: -52, scale: 0.92 },
          {
            rotation: -28,
            scale: 1.12,
            duration: 1.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }
    },
    { scope: barRef }
  );

  return (
    <div
      ref={barRef}
      className="w-3.5 h-8 sm:w-4 sm:h-10 bg-gradient-to-b from-[#C084FC] via-[#A855F7] to-[#7E22CE] rounded-xs shadow-[0_0_22px_rgba(168,85,247,0.95)] transform-gpu will-change-transform"
    />
  );
}

export default function EnquiryModal({ isOpen, onClose, initialPackage }: EnquiryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialPackage ? [initialPackage] : ["SaaS Application Architecture", "Motion & Interactive Website"]
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$8,000 – $10,000",
    message: "",
  });

  const toggleService = (opt: string) => {
    if (selectedServices.includes(opt)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== opt));
      }
    } else {
      setSelectedServices([...selectedServices, opt]);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isOpen]);

  useGSAP(
    () => {
      if (isOpen && modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1.0, duration: 0.4, ease: "power3.out" }
        );
      }
    },
    { dependencies: [isOpen], scope: modalRef }
  );

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.email) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setIsSubmitted(true);
      setStep(4);
    }
  };

  const projectOptions = [
    "SaaS Application Architecture",
    "Motion & Interactive Website",
    "3D Immersive Web Experience",
    "Digital Brand Refresh",
    "Complete Digital Brand Pack",
    "Full Enterprise Brand Rollout",
  ];

  const budgetOptions = [
    "$5,000 – $8,000",
    "$8,000 – $10,000",
    "$10,000+ / Custom Enterprise",
    "I'm not sure",
  ];

  return (
    <div className="fixed inset-0 z-[200] w-screen h-screen overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 md:p-12 select-none">
      {/* BACKGROUND DIAGONAL KINETIC SHEAR GRAPHIC */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[300px] bg-[#7E22CE] -rotate-18 filter blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[300px] bg-[#581C87] rotate-12 filter blur-[120px]" />
      </div>

      {/* MAIN ENQUIRY MODAL CONTAINER */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl bg-[#0D0D0D] border-2 border-white/20 rounded-none shadow-2xl p-6 sm:p-8 md:p-10 text-white overflow-y-auto max-h-[90vh] sm:max-h-[92vh] flex flex-col justify-between"
      >
        {/* CLOSE "X" BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-none bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/10 z-20"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* STEP NAVIGATOR HEADER (With Animated Purple Active Badges) */}
        <div className="w-full flex items-center justify-center gap-6 sm:gap-12 font-sans font-bold text-base sm:text-xl tracking-tight mb-6 sm:mb-8 border-b border-white/10 pb-4 sm:pb-5">
          {/* STEP 1: DETAILS */}
          <div
            onClick={() => setStep(1)}
            className="relative cursor-pointer py-1 px-2 flex items-center gap-2 group"
          >
            {step === 1 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7E22CE] text-white rounded-none shadow-[0_0_20px_rgba(168,85,247,0.8)] -rotate-3 z-0 animate-pulse" />
            )}
            <span className={`relative z-10 transition-colors ${step === 1 ? "text-white font-black px-4 py-1.5" : "text-zinc-400 group-hover:text-white"}`}>
              Details
            </span>
          </div>

          <span className="text-[#A855F7]/60 font-bold select-none">|</span>

          {/* STEP 2: PROJECT TYPE */}
          <div
            onClick={() => {
              if (formData.name && formData.email) setStep(2);
            }}
            className="relative cursor-pointer py-1 px-2 flex items-center gap-2 group"
          >
            {step === 2 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7E22CE] text-white rounded-none shadow-[0_0_20px_rgba(168,85,247,0.8)] -rotate-3 z-0 animate-pulse" />
            )}
            <span className={`relative z-10 transition-colors ${step === 2 ? "text-white font-black px-4 py-1.5" : "text-zinc-400 group-hover:text-white"}`}>
              Project Type
            </span>
          </div>

          <span className="text-[#A855F7]/60 font-bold select-none">|</span>

          {/* STEP 3: BUDGET */}
          <div
            onClick={() => {
              if (formData.name && formData.email) setStep(3);
            }}
            className="relative cursor-pointer py-1 px-2 flex items-center gap-2 group"
          >
            {step === 3 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7E22CE] text-white rounded-none shadow-[0_0_20px_rgba(168,85,247,0.8)] -rotate-3 z-0 animate-pulse" />
            )}
            <span className={`relative z-10 transition-colors ${step === 3 ? "text-white font-black px-4 py-1.5" : "text-zinc-400 group-hover:text-white"}`}>
              Budget
            </span>
          </div>
        </div>

        {/* STEP 1: DETAILS FORM (Name & Email) */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* LEFT COLUMN LABELS */}
              <div className="md:col-span-5 space-y-4 sm:space-y-6 font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white">
                <div>Your Name*</div>
                <div className="pt-2 sm:pt-4">Email Address*</div>
              </div>

              {/* RIGHT COLUMN INPUTS */}
              <div className="md:col-span-7 space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-none bg-[#1A1A1A] border border-white/10 text-white placeholder-zinc-500 font-mono text-base sm:text-lg focus:outline-none focus:border-[#A855F7] transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-none bg-[#1A1A1A] border border-white/10 text-white placeholder-zinc-500 font-mono text-base sm:text-lg focus:outline-none focus:border-[#A855F7] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM CTA: ANIMATED PURPLE ACCENT + PROCEED BUTTON */}
            <div className="pt-4 sm:pt-6 flex flex-col items-center justify-center space-y-4 text-center">
              <button
                type="submit"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-none bg-white text-black hover:bg-[#FF5500] hover:text-white font-sans font-black text-lg sm:text-xl tracking-tight transition-all cursor-pointer group"
              >
                {/* ANIMATED PURPLE ACCENT BAR */}
                <AnimatedPurpleAccent />
                <span>Proceed to next step</span>
                <ArrowRight className="w-5 h-5 text-[#C084FC] group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="font-mono text-[10px] sm:text-xs text-zinc-400 max-w-xl leading-relaxed">
                *By pressing Proceed, I consent to sgr storing and using this information to contact me in relation to starting a new project account (see our <span className="underline font-bold text-zinc-300">privacy statement</span> for more information)
              </p>
            </div>
          </form>
        )}

        {/* STEP 2: PROJECT TYPE SELECTION (Matching KobyKooba Screenshot 1-to-1) */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
              {/* LEFT COLUMN: LARGE HEADLINE */}
              <div className="md:col-span-5 font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
                Which services do you require?
              </div>

              {/* RIGHT COLUMN: SQUARE CHECKBOX OPTIONS */}
              <div className="md:col-span-7 space-y-4">
                {projectOptions.map((opt) => {
                  const isSelected = selectedServices.includes(opt);
                  return (
                    <div
                      key={opt}
                      onClick={() => toggleService(opt)}
                      className="flex items-center gap-4 cursor-pointer group py-2"
                    >
                      {/* ROLLING 360° KINETIC CHECKBOX */}
                      <RollingCheckbox isSelected={isSelected} />

                      <span className={`font-sans font-bold text-lg sm:text-xl transition-colors ${isSelected ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                        {opt}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOTTOM CTA: ANIMATED PURPLE ACCENT + PROCEED BUTTON */}
            <div className="pt-8 sm:pt-12 flex flex-col items-center justify-center space-y-4 text-center">
              <button
                type="submit"
                className="relative inline-flex items-center gap-3 px-8 py-5 rounded-none bg-white text-black hover:bg-[#FF5500] hover:text-white font-sans font-black text-lg sm:text-xl tracking-tight transition-all cursor-pointer group"
              >
                {/* ANIMATED PURPLE ACCENT BAR */}
                <AnimatedPurpleAccent />
                <span>Proceed to next step</span>
                <ArrowRight className="w-5 h-5 text-[#C084FC] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest pt-2"
              >
                ← Back to Details
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: BUDGET SELECTION (Matching KobyKooba Screenshot 1-to-1) */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
              {/* LEFT COLUMN: LARGE HEADLINE */}
              <div className="md:col-span-5 font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
                What is your budget?
              </div>

              {/* RIGHT COLUMN: SQUARE CHECKBOX BUDGET OPTIONS */}
              <div className="md:col-span-7 space-y-3">
                {budgetOptions.map((bOpt) => {
                  const isSelected = formData.budget === bOpt;
                  return (
                    <div
                      key={bOpt}
                      onClick={() => setFormData({ ...formData, budget: bOpt })}
                      className="flex items-center gap-4 cursor-pointer group py-1.5"
                    >
                      {/* ROLLING 360° KINETIC CHECKBOX */}
                      <RollingCheckbox isSelected={isSelected} />

                      <span className={`font-sans font-bold text-lg sm:text-xl transition-colors ${isSelected ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                        {bOpt}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOTTOM CTA: ANIMATED PURPLE ACCENT + SUBMIT BUTTON */}
            <div className="pt-6 sm:pt-8 flex flex-col items-center justify-center space-y-4 text-center">
              <button
                type="submit"
                className="relative inline-flex items-center gap-3 px-10 py-5 rounded-none bg-white text-black hover:bg-[#FF5500] hover:text-white font-sans font-black text-xl tracking-tight transition-all cursor-pointer group"
              >
                {/* ANIMATED PURPLE ACCENT BAR */}
                <AnimatedPurpleAccent />
                <span>Submit</span>
                <ArrowRight className="w-5 h-5 text-[#C084FC] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest pt-2"
              >
                ← Back to Project Type
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: SUCCESS CONFIRMATION (READY FOR BACKEND) */}
        {step === 4 && (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 rounded-none bg-[#A855F7]/10 border border-[#A855F7] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <CheckCircle2 className="w-10 h-10 text-[#A855F7]" />
            </div>

            <h3 className="font-sans font-black text-3xl sm:text-5xl">Enquiry Transmitted</h3>

            <p className="font-sans text-base sm:text-xl text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Thank you, <span className="text-[#A855F7] font-bold">{formData.name}</span>. Our executive trade directors have logged your enquiry for <span className="font-bold text-white">{selectedServices.join(", ")}</span> ({formData.budget}).
            </p>

            <div className="font-mono text-xs text-zinc-500 pt-4">
              [BACKEND READY] Payload structured for API dispatch. Executive review SLA: 24h.
            </div>

            <div className="pt-8">
              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-none bg-white text-black font-sans font-bold text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
