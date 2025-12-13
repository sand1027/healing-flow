"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LanguageProvider } from "@/lib/language-context";
import Sidebar from "@/components/layout/sidebar";
import MobileNavbar from "@/components/layout/mobile-navbar";
import LanguageToggle from "@/components/layout/language-toggle";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEntryPage = pathname === "/";
  const [sidebarWidth, setSidebarWidth] = useState("56"); // Default: w-56 = 14rem = 224px
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if we're on desktop (md breakpoint = 768px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkDesktop();

    // Listen for window resize
    window.addEventListener("resize", checkDesktop);

    // Check sidebar collapsed state
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState === "true") {
      setSidebarWidth("16"); // w-16 = 4rem = 64px
    } else {
      setSidebarWidth("56"); // w-56 = 14rem = 224px
    }

    // Listen for storage changes (when sidebar toggles)
    const handleStorageChange = () => {
      // Use requestAnimationFrame to ensure smooth transition
      requestAnimationFrame(() => {
        const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
        setSidebarWidth(collapsed ? "16" : "56");
      });
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Custom event for same-tab updates
    window.addEventListener("sidebarToggle", handleStorageChange);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sidebarToggle", handleStorageChange);
    };
  }, []);

  return (
    <LanguageProvider>
      {!isEntryPage && (
        <>
          <MobileNavbar />
          <Sidebar />
          <LanguageToggle />
        </>
      )}
      <main 
        className={!isEntryPage ? `pt-[57px] md:pt-0 min-h-screen transition-all duration-300 ease-in-out` : ""}
        style={!isEntryPage && isDesktop ? { 
          marginLeft: `calc(${sidebarWidth} * 0.25rem)` 
        } : {}}
      >
        {children}
      </main>
      {!isEntryPage && <Footer />}
      {!isEntryPage && <ScrollToTop />}
    </LanguageProvider>
  );
}

