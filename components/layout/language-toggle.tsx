"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface LanguageToggleProps {
  isMobile?: boolean;
}

export default function LanguageToggle({ isMobile = false }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  if (isMobile) {
    return (
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-border/30 rounded-full px-2 py-1 shadow-sm">
        <Globe className="w-3 h-3 text-foreground/60" />
        <button
          onClick={() => setLang("en")}
          className={`text-[10px] font-light px-2 py-0.5 rounded-full transition-all ${
            lang === "en"
              ? "bg-accent text-accent-foreground"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          EN
        </button>
        <span className="text-foreground/30 text-[10px]">|</span>
        <button
          onClick={() => setLang("no")}
          className={`text-[10px] font-light px-2 py-0.5 rounded-full transition-all ${
            lang === "no"
              ? "bg-accent text-accent-foreground"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          NO
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm border border-border/30 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 shadow-sm">
      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/60" />
      <button
        onClick={() => setLang("en")}
        className={`text-[10px] sm:text-xs font-light px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all ${
          lang === "en"
            ? "bg-accent text-accent-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-foreground/30 text-xs">|</span>
      <button
        onClick={() => setLang("no")}
        className={`text-[10px] sm:text-xs font-light px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all ${
          lang === "no"
            ? "bg-accent text-accent-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        NO
      </button>
    </div>
  );
}

