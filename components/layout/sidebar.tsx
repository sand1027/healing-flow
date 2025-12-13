"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const navItems = [
  { href: "/home", key: "home" as const, icon: Home },
  { href: "/about", key: "about" as const, icon: Users },
  { href: "/services", key: "services" as const, icon: Briefcase },
  { href: "/case-studies", key: "caseStudies" as const, icon: FileText },
  { href: "/blogs", key: "blogs" as const, icon: BookOpen },
  { href: "/faq", key: "faq" as const, icon: HelpCircle },
  { href: "/contact", key: "contact" as const, icon: Mail },
  { href: "/testimonials", key: "testimonials" as const, icon: MessageSquare },
];

function NavItem({ 
  item, 
  isActive, 
  isCollapsed, 
  label 
}: { 
  item: typeof navItems[0]; 
  isActive: boolean; 
  isCollapsed: boolean; 
  label: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);
  const Icon = item.icon;

  const handleMouseEnter = useCallback(() => {
    if (isCollapsed && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 8,
      });
    }
    setIsHovered(true);
  }, [isCollapsed]);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        ref={linkRef}
        href={item.href}
        className={`flex items-center rounded-md text-sm font-light transition-all duration-200 ${
          isCollapsed 
            ? "justify-center px-0 py-2.5" 
            : "justify-start gap-3 px-3 py-2.5"
        } ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-foreground/60 hover:text-foreground hover:bg-secondary/30"
        }`}
      >
        <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
        <span className={`truncate transition-all duration-300 ${
          isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
        }`}>
          {label}
        </span>
      </Link>
      
      {/* Tooltip when collapsed - using fixed positioning */}
      {isCollapsed && isHovered && (
        <div 
          className="fixed px-3 py-2 bg-primary text-primary-foreground text-xs font-light rounded-md whitespace-nowrap z-[9999] shadow-lg pointer-events-none"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: 'translateY(-50%)',
          }}
        >
          {label}
          <div className="absolute right-full top-1/2 -translate-y-1/2">
            <div className="border-4 border-transparent border-r-primary"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Load collapsed state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setIsCollapsed(savedState === "true");
    }
  }, []);

  // Save collapsed state to localStorage
  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    // Delay localStorage and event dispatch to allow smooth transition
    setTimeout(() => {
      localStorage.setItem("sidebarCollapsed", String(newState));
      window.dispatchEvent(new Event("sidebarToggle"));
    }, 50);
  };

  return (
    <>
      {/* Desktop Sidebar - Only visible on desktop */}
      <aside className={`hidden md:block fixed left-0 top-0 h-full bg-background border-r border-border/50 z-50 transition-all duration-300 ease-in-out overflow-visible ${
        isCollapsed ? "w-16" : "w-56"
      }`}>
        <div className="flex flex-col h-full relative overflow-visible">
          {/* Logo */}
          <div className="p-6 border-b border-border/30 flex items-center justify-center">
            {isCollapsed ? (
              <Link href="/home" className="block">
                <h1 className="text-lg font-light tracking-wide text-foreground">
                  HF
                </h1>
              </Link>
            ) : (
              <Link href="/home" className="block whitespace-nowrap">
                <h1 className="text-xl font-light tracking-wide text-foreground">
                  Healing Flow
                </h1>
              </Link>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <NavItem
                  key={item.href}
                  item={item}
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                  label={t[item.key]}
                />
              );
            })}
          </nav>
        </div>
        
        {/* Toggle Button - Outside sidebar on the right edge */}
        <button
          onClick={toggleCollapse}
          className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-full p-2 rounded-r-md transition-colors text-foreground/60 bg-background border border-l-0 border-border/50 shadow-sm ${
            isCollapsed ? "" : "hover:bg-secondary/30 hover:text-foreground"
          }`}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 animate-slide-right" strokeWidth={1.5} />
          ) : (
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </aside>
    </>
  );
}
