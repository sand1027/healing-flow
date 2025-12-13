"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide indicator after scrolling down a bit
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToContent}
            className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors group z-10"
            aria-label="Scroll to content"
        >
            <span className="text-xs uppercase tracking-wider font-light">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-none" strokeWidth={1.5} />
        </button>
    );
}

