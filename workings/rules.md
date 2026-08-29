# Engineering & Animation Performance Rules

1. **Pure Frontend Delivery:**
   * No databases, ORMs, or server-side notification pipelines. Keep the build static/edge deployable on Vercel.

2. **Scroll Synchronization:**
   * Never bind native `window.onscroll`. All scroll interactions must sync through Lenis and `ScrollTrigger.update`.

3. **Performance & GPU Optimization:**
   * Animate only `transform` (`xPercent`, `yPercent`, `scale`) and `opacity`. Avoid animating width/height directly.
   * Apply `will-change: transform` only during active trigger ranges.

4. **Motion Accessibility:**
   * Always wrap GSAP timelines inside `gsap.matchMedia()` to provide instant, non-moving opacity reveals for users with `prefers-reduced-motion`.