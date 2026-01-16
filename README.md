# Next.js 3D Button Landing Page

A pixel-perfect Next.js landing page featuring animated 3D buttons, a responsive hero section, and smooth GSAP transitions. Built from Figma design with clean component structure, modern UI, and production-ready code. Includes optional entrance animation for extra polish.

## 🚀 Features

- 3D animated buttons with GSAP
- Responsive hero section for desktop, tablet, and mobile
- Pixel-perfect Figma implementation
- Clean, reusable React components
- Subtle blurred fade-in entrance animation
- Tailwind CSS 4 for styling
- Lenis for smooth scrolling
- Accessible and keyboard-friendly

## 🛠️ Tech Stack

- **Next.js 16.1.2** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **GSAP 3.14** - Animation library
- **Lenis** - Smooth scrolling library
- **ESLint** - Code quality

## 🌐 Live Preview

Once pushed to GitHub, deploy instantly to Vercel for a live preview:

1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Import this repository (`nextjs-3d-button-demo`).
3. Click "Deploy" and get your live link in seconds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/YeaishTurj/nextjs-3d-button-demo)

---

## 📋 Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone or navigate to project
cd /home/yeaish/nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the button demo.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main demo page with button showcase
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles and animations
├── components/
│   ├── CallBookButton.tsx # Main button component
│   ├── PrimaryButton.tsx  # Primary button variant (optional)
│   ├── SecondaryButton.tsx # Secondary button variant (optional)
│   └── Button3D.tsx       # 3D button component (optional)
└── [config files]
```

## 🎯 Component Usage

### Basic Usage

```tsx
import CallBookButton from "@/components/CallBookButton";

export default function Example() {
  const handleClick = () => {
    console.log("Call booking initiated!");
  };

  return <CallBookButton onClick={handleClick} />;
}
```

### With Variant Display

```tsx
// Show specific state without interactivity
<CallBookButton variant="hover" />
<CallBookButton variant="clicked" />
<CallBookButton variant="default" />
```

### Props

| Prop      | Type                                | Default     | Description                       |
| --------- | ----------------------------------- | ----------- | --------------------------------- |
| `onClick` | `() => void`                        | -           | Callback function on button click |
| `variant` | `'default' \| 'hover' \| 'clicked'` | `'default'` | Force a specific visual state     |

## 📱 Responsive Behavior

The button automatically adapts to all screen sizes:

- **Mobile** (< 640px): Compact padding, touch-friendly
- **Tablet** (640px - 1024px): Standard sizing
- **Desktop** (> 1024px): Full-size button with optimal spacing

## 🎨 Customization

### Changing Colors

Edit the color values in `CallBookButton.tsx`:

```tsx
// Default state
backgroundColor: '#ffffff',
color: '#000000',

// Hover state
background: 'linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%)',

// Clicked state
background: 'linear-gradient(135deg, #YOUR_DARK_COLOR_1 0%, #YOUR_DARK_COLOR_2 100%)',
```

### Adjusting Animation Timing

Modify the GSAP `duration` values:

```tsx
gsap.to(button, {
  duration: 0.5, // Change animation speed (default 0.3s)
  // ...
});
```

### Changing Button Text

Pass custom text via children (if implemented) or modify the hardcoded text:

```tsx
// In component
<span ref={textRef} className="font-medium">
  Your Custom Text
</span>
```

## 🚀 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance

- Zero external image assets
- Optimized GSAP animations (using raf)
- Minimal CSS (Tailwind CSS 4 with purging)
- Touch-friendly event handling
- No layout shift on state change

## 🐛 Debugging

### Dev Tools

```bash
# Run with Turbopack (faster dev server)
npm run dev

# Build and check for errors
npm run build

# Lint code
npm run lint
```

### Common Issues

**Button not animating?**

- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors

**Styling not applying?**

- Verify Tailwind CSS 4 is installed
- Run `npm install` to ensure all dependencies

**Smooth scroll not working?**

- Verify Lenis is installed: `npm install lenis`
- Check for JavaScript errors in console

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Lenis Documentation](https://lenis.studiofreight.com/)

## 📝 Notes for Developers

- Component uses `'use client'` directive (Client Component) for interactivity
- All animations are GPU-accelerated for smooth performance
- Button maintains focus state for keyboard accessibility
- Touch events are handled for mobile devices

## 🎯 Next Steps

1. **Customize Colors**: Update gradient colors to match your brand
2. **Add More Variants**: Create `PrimaryButton` and `SecondaryButton` components
3. **Integrate CTA**: Connect button click to your booking system
4. **Deploy**: Push to Vercel or your hosting platform

## 📄 License

This project is provided as-is for evaluation and development purposes.

---

**Questions or Issues?** Check the browser console for errors and verify all dependencies are installed correctly.
