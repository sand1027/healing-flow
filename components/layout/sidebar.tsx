"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const navItems = [
  { href: "/home", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/case-studies", key: "caseStudies" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/questionnaire", key: "questionnaire" as const },
  { href: "/contact", key: "contact" as const },
  { href: "/testimonials", key: "testimonials" as const },
  { href: "/blogs", key: "blogs" as const },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      {/* Desktop Sidebar - Only visible on desktop */}
      <aside className="hidden md:block fixed left-0 top-0 h-full z-40">
        <div className="flex flex-col h-full px-8 pt-32 pb-8">
          {/* Navigation - simple transparent text menu */}
          <nav className="space-y-2 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-foreground/70 hover:text-foreground"
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
