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

    // Refresh ScrollTrigger to recalculate exact pin bounds
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      delete (window as any).lenis;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return <>{children}</>;
}

