"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface SecondaryButtonProps {
  onClick?: () => void;
  variant?: "default" | "hover" | "clicked";
}

export default function SecondaryButton({
  onClick,
  variant = "default",
}: SecondaryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [displayVariant, setDisplayVariant] = useState(variant);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const icon = iconRef.current;

    // Determine current state based on variant or user interaction
    let currentState = variant;
    if (variant === "default") {
      if (isPressed) currentState = "clicked";
      else if (isHovered) currentState = "hover";
    }

    switch (currentState) {
      case "default":
        // Default state: Light white bg (#F7F7F7), light grey border (#C9CCCF), icon hidden
        gsap.to(button, {
          backgroundColor: "#F7F7F7",
          color: "#000000",
          borderColor: "#C9CCCF",
          boxShadow: "none",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
          paddingBottom: "12px",
          height: "42px",
          borderRadius: "30px",
          duration: 0.3,
          ease: "power2.out",
        });

        setShowIcon(false);
        break;

      case "hover":
        // Hover state: off-white bg (#F0F0F0), light grey border (#C9CCCF), icon visible
        gsap.to(button, {
          backgroundColor: "#F0F0F0",
          color: "#000000",
          borderColor: "#C9CCCF",
          boxShadow: "none",
          paddingLeft: "24px",
          paddingRight: "16px",
          paddingTop: "12px",
          paddingBottom: "12px",
          height: "42px",
          borderRadius: "30px",
          duration: 0.3,
          ease: "power2.out",
        });

        setShowIcon(true);
        break;

      case "clicked":
        // Clicked state: off-white bg (#F0F0F0), light grey border (#C9CCCF), icon visible, slight press
        gsap.to(button, {
          backgroundColor: "#F0F0F0",
          color: "#000000",
          borderColor: "#C9CCCF",
          boxShadow: "none",
          transform: "scale(0.98)",
          paddingLeft: "24px",
          paddingRight: "16px",
          paddingTop: "12px",
          paddingBottom: "12px",
          height: "42px",
          borderRadius: "30px",
          duration: 0.3,
          ease: "power2.out",
        });

        setShowIcon(true);
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
      setShowIcon(false);
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
        setShowIcon(true);
      } else {
        setDisplayVariant("default");
        setShowIcon(false);
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
        relative rounded-full
        font-medium text-base
        border border-gray-300
        transition-all duration-300 ease-out
        whitespace-nowrap
        flex items-center gap-[10px]
        select-none
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
      "
      style={{
        backgroundColor: "#F7F7F7",
        color: "#000000",
        borderColor: "#C9CCCF",
        cursor: "pointer",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "12px",
        paddingBottom: "12px",
        height: "42px",
        borderRadius: "30px",
      }}
    >
      <span ref={textRef} className="font-medium">
        Send me a message
      </span>

      {/* WhatsApp Icon - appears on hover/click */}
      {showIcon && (
        <span
          ref={iconRef}
          className="inline-flex items-center justify-center"
          style={{
            display: "inline-flex",
            minWidth: "1.25rem",
            height: "1.25rem",
          }}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 510 512.459"
          >
            <path
              fill="#111B21"
              d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
