# System Tokens, Typography & Motion Physics

## 1. Typography Hierarchy
* **Display / Wordmark:** `Clash Display` / `PP Neue Montreal` (Black 900, letter-spacing `-0.05em`)
* **Headings:** `Cabinet Grotesk` or `General Sans` (Bold 700)
* **Body / Meta:** `Geist Sans` & `Geist Mono`

## 2. Color Tokens
* **Background:** `#0A0A0A` (Obsidian Void)
* **Card Surface:** `#141414` (Muted Graphite)
* **Text Primary:** `#F4F4F5` (Off-White)
* **Text Muted:** `#71717A` (Zinc)
* **Accent Solar:** `#FF5500` (SGR Kinetic Mark)
* **Border:** `rgba(255, 255, 255, 0.08)`

## 3. Motion Physics
* **Lenis Smooth Scroll:** Duration `1.15s`, Easing `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
* **GSAP Scrub:** `0.5` to `0.8`, `anticipatePin: 1`
* **Floating Symbol:** Spring physics tethered to scroll progress, docking into header navigation past 100vh.

## 4. Unsplash Photographic Curation
Editorial, high-contrast, industrial, and architectural themes:
* `"brutalist architecture concrete minimalist"`
* `"modern industrial glass steel headquarters"`
* `"aerial global logistics container terminal night"`
* `"monochrome dark stone abstract texture"`