# Call Book Button - Next.js Animation Task

Project: Production-ready interactive button component with three states (default, hover, clicked), smooth GSAP animations, icon morphing, and full responsive design.

## Tech Stack

- Next.js 16.1.2 with App Router
- React 19 with TypeScript
- Tailwind CSS 4
- GSAP 3.14 for animations
- Lenis for smooth scrolling
- ESLint for code quality

## Key Components

- CallBookButton.tsx: Main button with state management and GSAP animations
- page.tsx: Demo page showcasing all button states
- globals.css: Global animations and keyframes

## Features Implemented

✅ Default State: White bg, light grey border, black text, diagonal arrow (↗)
✅ Hover State: Blue gradient bg, white text, right arrow (→), lifted shadow
✅ Clicked State: Dark blue gradient, inner shadow effect, scale animation
✅ Icon Morphing: Smooth GSAP transition between arrow icons
✅ Smooth Scroll: Lenis integration on demo page
✅ Full Responsive Design: Mobile, tablet, desktop optimization
✅ Accessibility: Focus states, keyboard support
✅ Light Theme: Clean white/grey backgrounds with blue accents

## Running the Project

1. npm install (if needed)
2. npm run dev
3. Open http://localhost:3000

## Customization

1. Colors: Edit gradient values in src/components/CallBookButton.tsx
2. Text: Change "Book a call" in component
3. Animations: Adjust GSAP duration/ease values
4. Icons: Modify arrow symbols or use custom icons

## Development Notes

- All animations are GPU-accelerated
- Component uses 'use client' for interactivity
- GSAP duration configurable (default 0.3s)
- Shadow effects: glow on hover, inner shadow on click
- Color gradients fully customizable

Status: COMPLETE - Ready for live preview and deployment
