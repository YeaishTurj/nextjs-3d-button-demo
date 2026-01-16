"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import CallBookButton from "@/components/CallBookButton";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleButtonClick = () => {
    console.log("Call booking initiated!");
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="flex flex-col items-center text-center mt-16 mb-24">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-indigo-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-emerald-500 border-2 border-white" />
              <span className="h-8 w-8 rounded-full bg-amber-500 border-2 border-white" />
            </div>
            <p className="text-sm text-zinc-500">Trusted by global founders</p>
          </div>

          <h1
            className="font-medium text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "84px",
              fontWeight: 600,
              lineHeight: "110%",
              letterSpacing: "-8%",
              background:
                "linear-gradient(142.41deg, #000000 30.66%, #0775DB 77.39%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Product Designer
          </h1>
          <h2
            className="font-medium text-center mt-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "84px",
              fontWeight: 600,
              lineHeight: "110%",
              letterSpacing: "-8%",
              background:
                "linear-gradient(142.41deg, #000000 30.66%, #0775DB 77.39%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Specializing In Branding
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
            <PrimaryButton onClick={handleButtonClick} />
            <SecondaryButton onClick={handleButtonClick} />
          </div>
        </section>
      </div>
    </main>
  );
}
