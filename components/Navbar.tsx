"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

interface NavbarProps {
  onOpenCalendly: () => void;
  onHoverMenu?: (index: number) => void;
  isDark?: boolean;
}

const MENU_ITEMS = [
  { id: "about", label: "About", href: "/#reel" },
  { id: "services", label: "Services", href: "/#founder-brand" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "projects", label: "Our Projects", href: "/projects" },
  { id: "contact", label: "Get in Touch", action: true },
];

export default function Navbar({ onOpenCalendly, isDark = false }: NavbarProps) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [hideHeader, setHideHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveNav = () => {
      if (pathname === "/pricing") {
        setActiveItem("pricing");
      } else if (pathname === "/projects") {
        setActiveItem("projects");
      } else if (pathname === "/") {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash === "#founder-brand") {
          setActiveItem("services");
        } else if (hash === "#reel") {
          setActiveItem("about");
        } else {
          const saved = typeof window !== "undefined" ? sessionStorage.getItem("sgr_active_nav") : null;
          if (saved && ["about", "services", "pricing", "projects", "contact"].includes(saved)) {
            setActiveItem(saved);
          } else {
            setActiveItem("about");
          }
        }
      } else {
        const saved = typeof window !== "undefined" ? sessionStorage.getItem("sgr_active_nav") : null;
        if (saved) setActiveItem(saved);
      }
    };

    updateActiveNav();
    window.addEventListener("hashchange", updateActiveNav);
    return () => window.removeEventListener("hashchange", updateActiveNav);
  }, [pathname]);

  const handleItemClick = (id: string, action?: boolean) => {
    setActiveItem(id);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("sgr_active_nav", id);
    }
    if (action) {
      onOpenCalendly();
    }
  };

  const textClass = isDark ? "text-white" : "text-[#0A0A0A]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-5 sm:px-8 md:px-20 flex items-center justify-between bg-transparent transition-opacity duration-300 transform-gpu ${
          hideHeader ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* Top-Left Header Target Container */}
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
          >
            <Logo
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF5500] group-hover:rotate-90 transition-transform duration-500 ease-out"
              animated={false}
            />
            <span className={`font-sans font-black text-2xl sm:text-3xl tracking-tighter ${textClass}`}>
              sgr<span className="text-[#FF5500]">.</span>
            </span>
          </a>
        </div>

        {/* Right Desktop Navigation Bar */}
        <div className={`hidden md:flex relative items-center gap-10 md:gap-14 font-sans text-lg md:text-xl font-bold tracking-tight ${textClass}`}>
          <nav className="flex items-center gap-10 md:gap-14">
            {MENU_ITEMS.map((item) => {
              const isTarget = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.id, item.action)}
                  className="relative inline-flex items-center cursor-pointer group py-1 px-1"
                >
                  {isTarget && (
                    <div className="absolute top-1/2 left-1/2 w-16 md:w-20 h-2 md:h-2.5 bg-[#C084FC] pointer-events-none z-0 rounded-xs shadow-[0_0_16px_rgba(192,132,252,0.85)] animate-circle-spin" />
                  )}

                  {item.action ? (
                    <button className="relative z-10 font-sans font-bold text-lg md:text-xl text-current hover:opacity-80 transition-opacity">
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="relative z-10 font-sans font-bold text-lg md:text-xl text-current hover:opacity-80 transition-opacity"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Header Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-full bg-black text-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#FF5500] transition-colors"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] text-white p-8 flex flex-col justify-between md:hidden animate-in fade-in duration-300">
          <div className="pt-20 space-y-6 font-sans font-black text-3xl tracking-tight">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleItemClick(item.id, item.action);
                }}
              >
                {item.action ? (
                  <button className="text-[#FF5500] uppercase tracking-wider">
                    {item.label} →
                  </button>
                ) : (
                  <a href={item.href} className="text-white hover:text-[#FF5500] transition-colors uppercase">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest pt-8 border-t border-zinc-800">
            sgr GLOBAL TRADE & ENERGY INFRASTRUCTURE
          </div>
        </div>
      )}
    </>
  );
}
