"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const navItems = [
  { href: "/home", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/case-studies", key: "caseStudies" as const },
  { href: "/blogs", key: "blogs" as const },
  { href: "/contact", key: "contact" as const },
  { href: "/testimonials", key: "testimonials" as const },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-border rounded-lg shadow-sm"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" strokeWidth={1} />
        ) : (
          <Menu className="h-6 w-6" strokeWidth={1} />
        )}
      </button>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-border z-40 transition-transform duration-300 ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-8 border-b border-border">
            <Link href="/home" className="block" onClick={() => setMobileMenuOpen(false)}>
              <h1 className="text-2xl font-light tracking-wide text-foreground">
                Healing Flow
              </h1>
              <p className="text-xs text-foreground/50 mt-1 font-light">Inner alchemy</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-light transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {t[item.key]}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

