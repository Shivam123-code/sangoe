# Redesigned TrustStrip & Project Walkthrough

All project build checks and development servers are fully operational.

## Changes Implemented

### 1. TrustStrip Redesign (Marquee Scrolling)
- Configured a dynamic CSS scrolling marquee (`@keyframes scroll` translating from `0` to `-33.3333%` on a 3x duplicated array of items). This ensures seamless, loop-free visual motion.
- Added an automatic pause on hover (`animation-play-state: paused`) to allow users to pause the scroll and interact with any card.
- Kept the vertical height minimal (around 70px) so the strip remains small and fits cleanly after the Hero section.
- **Fixed Clipping Issue:** Set a **fixed card width of 240px** (`flex-shrink: 0`) to completely resolve the text clipping on the "Startup to IPO Framework" card.
- **Fixed Hover Clipping & Overlap:** Set `.waveBridge` z-index to `1` and `.strip` z-index to `2`. When cards are hovered, they now float *on top* of the sibling curve wave instead of slipping underneath it. Added vertical padding (`8px 0`) with a compensating negative margin (`-8px 0`) to `.marqueeContainer` and `.marqueeTrack` to prevent overflow clipping.

### 2. Next.js Prerender Build Fix (/legal)
- **Root Cause:** Next.js throws a prerender error when Client-side event handlers (`onMouseEnter`/`onMouseLeave`) are used on components inside a Server Component page. The page had `export const metadata` which prevented simply marking the file as `'use client'`.
- **Resolution:**
  - Created a new CSS Module stylesheet [page.module.css](file:///c:/Users/Administrator/Desktop/Sangoe%20Website/sangoe/app/legal/page.module.css) to handle card hover transitions, scaling, and shadows natively in CSS.
  - Replaced inline styling and JS event handlers in [page.js](file:///c:/Users/Administrator/Desktop/Sangoe%20Website/sangoe/app/legal/page.js) with the new CSS Module classes.
  - Utilized a CSS custom variable (`--hover-border-color`) passed in React inline styles to dynamically change each card's hover border color based on the document theme color.
  - This successfully resolves the prerendering build error, preserves search engine optimizations (SEO), and maintains metadata exporting.

### 3. Feature Additions & Footer Redesign
- Committed and pushed:
  - New `/get-started`, `/trust-centre` and `/legal` sub-slug pages.
  - Form endpoints/APIs for newsletter subscriptions and contact requests.
  - Compact light-themed footer matching the overall design aesthetics.
