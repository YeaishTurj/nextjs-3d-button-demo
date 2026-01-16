"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Button3DProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button3D({
  text,
  onClick,
  className = "",
}: Button3DProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const content = contentRef.current;

    // Initial animation - fade in with scale
    gsap.fromTo(
      button,
      {
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
      }
    );

    // Hover effects
    const onMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(content, {
        y: -2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(content, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseDown = () => {
      gsap.to(button, {
        scale: 0.98,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseUp = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", onMouseEnter);
    button.addEventListener("mouseleave", onMouseLeave);
    button.addEventListener("mousedown", onMouseDown);
    button.addEventListener("mouseup", onMouseUp);

    return () => {
      button.removeEventListener("mouseenter", onMouseEnter);
      button.removeEventListener("mouseleave", onMouseLeave);
      button.removeEventListener("mousedown", onMouseDown);
      button.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative px-8 py-4 font-semibold text-white rounded-lg
        bg-gradient-to-br from-blue-600 to-blue-800
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
        transform perspective
        ${className}
      `}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <span
        ref={contentRef}
        className="inline-block relative z-10"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {text}
      </span>

      {/* Glossy overlay effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}
