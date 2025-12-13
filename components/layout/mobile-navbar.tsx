"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import LanguageToggle from "./language-toggle";

const navItems = [
  { href: "/home", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/case-studies", key: "caseStudies" as const },
  { href: "/blogs", key: "blogs" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
  { href: "/testimonials", key: "testimonials" as const },
];

export default function MobileNavbar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            )}
          </button>

          {/* Logo - Center */}
          <Link href="/home" className="flex-1 text-center">
            <h1 className="text-lg font-light tracking-wide text-foreground">
              Healing Flow
            </h1>
          </Link>

          {/* Language Toggle - Right */}
          <div className="w-20 flex justify-end">
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slides down from top */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-background border-b border-border/50 z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "57px" }}
      >
        <nav className="p-4 space-y-1 max-h-[calc(100vh-57px)] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-light transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/30"
                }`}
              >
                {t[item.key]}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Backdrop when menu is open */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
          style={{ top: "57px" }}
        />
      )}
    </>
  );
}

