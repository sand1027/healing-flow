"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-border/30 rounded-full px-3 sm:px-4 py-2 shadow-sm">
      <Globe className="w-4 h-4 text-foreground/60" />
      <button
        onClick={() => setLang("en")}
        className={`text-xs font-light px-3 py-1 rounded-full transition-all ${
          lang === "en"
            ? "bg-accent text-accent-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-foreground/30">|</span>
      <button
        onClick={() => setLang("no")}
        className={`text-xs font-light px-3 py-1 rounded-full transition-all ${
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

