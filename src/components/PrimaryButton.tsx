"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface PrimaryButtonProps {
  onClick?: () => void;
  variant?: "default" | "hover" | "clicked";
}

export default function PrimaryButton({
  onClick,
  variant = "default",
}: PrimaryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [displayVariant, setDisplayVariant] = useState(variant);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    // Determine current state based on variant or user interaction
    let currentState = variant;
    if (variant === "default") {
      if (isPressed) currentState = "clicked";
      else if (isHovered) currentState = "hover";
    }

    switch (currentState) {
      case "default":
        // Default state: Blue 500 fill, Blue 200 border, inner + drop shadows (from Figma specs)
        gsap.to(button, {
          backgroundColor: "#0775DB",
          color: "#ffffff",
          boxShadow:
            "inset 0 4px 4px 0 rgba(255, 255, 255, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.12), inset 0 -4px 4px 0 rgba(255, 255, 255, 0.25)",
          borderColor: "#50AAFF",
          transform: "translateY(0px)",
          duration: 0.3,
          ease: "power1.out",
        });
        break;

      case "hover":
        // Hover state: Blue 400 fill, Blue 200 border, inner + drop shadows (from Figma specs)
        gsap.to(button, {
          backgroundColor: "#2A85FF",
          color: "#ffffff",
          boxShadow:
            "inset 0 2px 4px 0 rgba(255, 255, 255, 0.42), 0 4px 4px 0 rgba(0, 0, 0, 0.12), inset 0 -8px 4px 0 rgba(255, 255, 255, 0.25)",
          borderColor: "#50AAFF",
          transform: "translateY(0px)",
          duration: 0.3,
          ease: "power1.out",
        });
        break;

      case "clicked":
        // Clicked state: Blue 500 fill, Blue 200 border, inner + drop shadows (from Figma specs)
        gsap.to(button, {
          backgroundColor: "#0775DB",
          color: "#ffffff",
          boxShadow:
            "inset 0 2px 4px 0 rgba(255, 255, 255, 0.42), 0 4px 4px 0 rgba(0, 0, 0, 0.12), inset 0 -8px 4px 0 rgba(255, 255, 255, 0.25)",
          borderColor: "#50AAFF",
          transform: "translateY(0px)",
          duration: 0.3,
          ease: "power1.out",
        });
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
        flex items-center justify-center
        select-none
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        hover:cursor-pointer
      "
      style={{
        backgroundColor: "#0775DB",
        color: "#ffffff",
        boxShadow:
          "inset 0 4px 4px 0 rgba(255, 255, 255, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.12), inset 0 -4px 4px 0 rgba(255, 255, 255, 0.25)",
        borderColor: "#50AAFF",
        cursor: "pointer",
        borderRadius: "36px",
        padding: "12px 24px",
        gap: "10px",
        borderWidth: "1px",
        height: "42px",
      }}
    >
      <span ref={textRef} className="font-medium">
        Explore my works
      </span>
    </button>
  );
}
