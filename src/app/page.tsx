"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import CallBookButton from "@/components/CallBookButton";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Initialize smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    // Subtle blurred fade-in animation for hero section
    if (heroRef.current) {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, filter: "blur(32px)", y: 64 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.85,
            ease: "power3.out",
            delay: 0.25,
          }
        );
      });
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleButtonClick = () => {
    console.log("Call booking initiated!");
  };

  // Shared gradient style to keep the JSX clean
  const gradientTextStyle = {
    background: "linear-gradient(145deg, #000000 30.66%, #0775DB 77.39%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <main className="relative min-h-screen bg-white pt-6 sm:pt-10">
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-500" />
            <span className="text-xl font-semibold text-zinc-900">
              alisadik
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a className="hover:text-zinc-900 transition" href="#">
              Home
            </a>
            <a className="hover:text-zinc-900 transition" href="#">
              Works
            </a>
            <a className="hover:text-zinc-900 transition" href="#">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <CallBookButton onClick={handleButtonClick} />
          </div>
        </nav>

        {/* Hero */}
        <section
          ref={heroRef}
          className="flex flex-col items-center text-center mt-10 sm:mt-16 mb-24"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-indigo-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-emerald-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-amber-500 border-2 border-white" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-500">
              Trusted by global founders
            </p>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            style={{
              whiteSpace: "normal",
            }}
          >
            {/* For 393px: Product Designer (one line), Specializing In Branding (one line) */}
            <span className="block sm:hidden" style={gradientTextStyle}>
              Product Designer
            </span>
            <span className="block sm:hidden" style={gradientTextStyle}>
              Specializing In Branding
            </span>

            {/* For 830px and above: Product Designer (one line), Specializing In Branding (one line) */}
            <span
              className="hidden sm:block headline-span"
              style={{
                ...gradientTextStyle,
                whiteSpace: "nowrap",
              }}
            >
              Product Designer
            </span>
            <span
              className="hidden sm:block headline-span"
              style={{
                ...gradientTextStyle,
                whiteSpace: "nowrap",
              }}
            >
              Specializing In Branding
            </span>
          </h1>
          <style>{`
            @media (max-width: 830px) and (min-width: 801px) {
              .headline-span {
                font-size: 4rem !important;
              }
            }
          `}</style>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <PrimaryButton onClick={handleButtonClick} />
            <SecondaryButton onClick={handleButtonClick} />
          </div>
        </section>
      </div>
    </main>
  );
}
