"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Prevent mobile address bar height changes from firing disruptive ScrollTrigger layout refreshes during scroll
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Initialize Lenis Smooth Scroll with butter-smooth 60fps physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger ticker seamlessly
    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Expose lenis instance globally for modal scroll locking
    (window as any).lenis = lenis;

    // Refresh ScrollTrigger when window width changes (responsive layout toggle)
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("resize", handleResize);

    // Refresh ScrollTrigger to recalculate exact pin bounds after paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      delete (window as any).lenis;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return <>{children}</>;
}

