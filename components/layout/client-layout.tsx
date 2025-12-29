"use client";

import { usePathname } from "next/navigation";
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
        className={!isEntryPage ? `pt-[57px] md:pt-0 min-h-screen` : ""}
      >
        {children}
      </main>
      {!isEntryPage && <Footer />}
      {!isEntryPage && <ScrollToTop />}
    </LanguageProvider>
  );
}

