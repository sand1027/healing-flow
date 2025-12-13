"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function EntryPage() {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const router = useRouter();
  const { lang } = useLanguage();
  const t = translations[lang];
  const portalRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (portalRef.current) {
      const rect = portalRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
    setIsHovered(true);
  }, []);

  const handlePortalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push("/home");
    }, 600); // Match animation duration
  };

  return (
    <div className={`fixed inset-0 w-full h-full overflow-hidden bg-white rounded-lg transition-all duration-[600ms] ease-in-out ${
      isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
    }`}>
      {/* Upper Section - Grey Sky with Birds (40%) */}
      <div className="relative h-[40vh] bg-[#E5E5E5] overflow-hidden w-full">
        {/* Birds Image - covering the upper section */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/birds.png"
            alt="Birds in flight"
            fill
            className="object-cover"
            priority
            quality={95}
            style={{ mixBlendMode: 'multiply', objectPosition: 'left bottom' }}
          />
        </div>
      </div>

      {/* Dividing Line */}
      <div className="h-px bg-gray-300"></div>

      {/* Lower Section - White Background (60%) */}
      <div className="relative h-[60vh] bg-white flex flex-col w-full">
        {/* Circular Emblem - Top center (Clickable) */}
        <div className="relative">
          <button
            ref={portalRef}
            onClick={handlePortalClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer z-10 group"
          >
            <div className="relative transition-all duration-500 group-hover:scale-110 group-active:scale-95">
              {/* Outer black ring (thicker) */}
              <div className="w-16 h-16 rounded-full border-[3px] border-black transition-all duration-500 group-hover:border-gray-700"></div>
              {/* White ring (thin) */}
              <div className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full bg-white border border-white"></div>
              {/* Inner black circle (solid) */}
              <div className="absolute inset-4 w-8 h-8 rounded-full bg-black transition-all duration-500 group-hover:bg-gray-800"></div>
              {/* Ripple effect on click */}
              {isExiting && (
                <div className="absolute inset-0 rounded-full bg-black animate-ping opacity-75"></div>
              )}
            </div>
          </button>
          
          {/* Helper Text Tooltip */}
          {isHovered && !isExiting && (
            <div 
              className="fixed px-3 py-2 bg-primary text-primary-foreground text-xs font-light rounded-md whitespace-nowrap z-[9999] shadow-lg pointer-events-none"
              style={{
                top: `${tooltipPosition.top + 50}px`,
                left: `${tooltipPosition.left}px`,
                transform: 'translateX(-50%)',
              }}
            >
              {t.home || "Enter"}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2">
                <div className="border-4 border-transparent border-b-primary"></div>
              </div>
            </div>
          )}
        </div>

        {/* Text Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center mt-16 space-y-4">
          {/* Main Title and Subtitle */}
          <div className="flex items-baseline gap-2 relative">
            <h1 
              className="text-5xl md:text-6xl font-normal text-black"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                letterSpacing: "0.02em"
              }}
            >
              Healing flow
            </h1>
            <span 
              className="text-sm md:text-base text-gray-500 font-light absolute top-[1.2em] left-[calc(100%+0.75rem)] whitespace-nowrap"
              style={{ fontFamily: "'Futura', 'Inter', sans-serif" }}
            >
              Inner alchemy
            </span>
          </div>

          {/* Name */}
          <p 
            className="text-sm md:text-base text-gray-500 font-light"
            style={{ fontFamily: "'Futura', 'Inter', sans-serif" }}
          >
            Saritha Thulasidas
          </p>
        </div>
      </div>
    </div>
  );
}
