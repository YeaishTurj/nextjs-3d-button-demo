"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface CallBookButtonProps {
  onClick?: () => void;
  variant?: "default" | "hover" | "clicked";
}

export default function CallBookButton({
  onClick,
  variant = "default",
}: CallBookButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [displayVariant, setDisplayVariant] = useState(variant);

  useEffect(() => {
    if (!buttonRef.current || !iconRef.current) return;

    const button = buttonRef.current;
    const icon = iconRef.current;
    const text = textRef.current;

    // Determine current state based on variant or user interaction
    let currentState = variant;
    if (variant === "default") {
      if (isPressed) currentState = "clicked";
      else if (isHovered) currentState = "hover";
    }

    // Remove explicit GSAP stroke sync; use currentColor for SVG so it always matches text

    switch (currentState) {
      case "default":
        gsap.to(button, {
          backgroundColor: "#F7F7F7",
          color: "#000000",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          borderColor: "#C9CCCF",
          duration: 0.3,
          ease: "power2.out",
        });
        // Reset icon rotation
        if (icon) {
          gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.out" });
        }
        break;
      case "hover":
        gsap.to(button, {
          backgroundColor: "#2A85FF",
          color: "#ffffff",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.12), inset 0 4px 4px 0 rgba(255, 255, 255, 0.25), inset 0 -4px 4px 0 rgba(255, 255, 255, 0.25)",
          borderColor: "#50AAFF",
          transform: "translateY(0px)",
          duration: 0.3,
          ease: "power1.out",
        });
        // Rotate icon 45deg
        if (icon) {
          gsap.to(icon, { rotate: 45, duration: 0.3, ease: "power2.out" });
        }
        break;
      case "clicked":
        gsap.to(button, {
          backgroundColor: "#0775DB",
          color: "#ffffff",
          boxShadow:
            "0 4px 4px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px 0 rgba(255, 255, 255, 0.42), inset 0 -8px 4px 0 rgba(255, 255, 255, 0.25)",
          borderColor: "#50AAFF",
          transform: "translateY(0px)",
          duration: 0.3,
          ease: "power1.out",
        });
        // Rotate icon 45deg
        if (icon) {
          gsap.to(icon, { rotate: 45, duration: 0.3, ease: "power2.out" });
        }
        break;
      default:
        break;
    }
  }, [displayVariant, isHovered, isPressed, variant]);

  const handleMouseEnter = () => {
    if (variant === "default") {
      setIsHovered(true);
      setDisplayVariant("hover");
    }
  };

  const handleMouseLeave = () => {
    if (variant === "default") {
      setIsHovered(false);
      setIsPressed(false);
      setDisplayVariant("default");
    }
  };

  const handleMouseDown = () => {
    if (variant === "default") {
      setIsPressed(true);
      setDisplayVariant("clicked");
    }
  };

  const handleMouseUp = () => {
    if (variant === "default") {
      setIsPressed(false);
      if (isHovered) {
        setDisplayVariant("hover");
      } else {
        setDisplayVariant("default");
      }
    }
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="
        relative
        font-medium text-base
        border
        transition-all duration-300 ease-out
        whitespace-nowrap
        flex items-center
        select-none
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
      style={{
        backgroundColor: "#F7F7F7",
        color: "#000000",
        borderColor: "#C9CCCF",
        cursor: "pointer",
        borderRadius: "30px",
        padding: "10px 12px",
        gap: "10px",
        borderWidth: "1px",
      }}
    >
      <svg
        ref={iconRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 font-semibold"
        style={{
          display: "inline-block",
          minWidth: "1.25rem",
          textAlign: "center",
          color: "inherit", // always match text color
          transition: "color 0.2s, stroke 0.2s",
        }}
        aria-hidden="true"
      >
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
      </svg>
      <span ref={textRef} className="font-medium">
        Book a call
      </span>
    </button>
  );
}
