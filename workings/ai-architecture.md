# AI Architecture & System Blueprint: Sunraco Global Resources (SGR)

## 1. Overview
High-performance, visual-first digital experience for Sunraco Global Resources (SGR). Focuses purely on kinetic motion, smooth scroll synchronization, high-contrast brutalist/modernist editorial design, and direct-to-meeting conversion via Calendly.

## 2. Tech Stack
* **Framework:** Next.js (App Router, Tailwind CSS, Vercel Edge Hosting)
* **Animation Suite:** GSAP 3 (ScrollTrigger, Flip, SplitText) + Lenis Smooth Scroll + Framer Motion
* **Scheduling & Intake:** Calendly Embed / Modal (zero custom backend required)
* **Maps & Media:** Mapbox GL (Dark Monochrome theme) + Optimized WebM background loops

## 3. Brand Identity & Kinetic Elements
* **Primary Mark:** `SGR` (Set in extra-bold display typography).
* **Kinetic Satellite Glyph:** A floating orbital accent symbol that detaches from the wordmark on scroll, tracks mouse/scroll velocity, and docks into the sticky header navigation.

## 4. Section Architecture
1. `<HeroBrandReveal>`: Giant SGR display mark + floating orbital symbol -> Pin scrub -> Viewport scale
2. `<ZoomScrollReel>`: Contained 60vw media container expanding to 100vw full-bleed
3. `<KineticTextMask>`: Line-by-line masked editorial text reveals
4. `<CapabilitiesSlider>`: Pinned horizontal scroll showcase with parallax card hover
5. `<MapboxInteractive>`: Custom dark-styled global operations map
6. `<CalendlyBookingModal>`: Fast-track discovery call scheduling