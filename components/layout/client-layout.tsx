"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/lib/language-context";
import Sidebar from "@/components/layout/sidebar";
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
          <Sidebar />
          <LanguageToggle />
        </>
      )}
      <main className={!isEntryPage ? "md:ml-64 min-h-screen" : ""}>{children}</main>
      {!isEntryPage && <Footer />}
      {!isEntryPage && <ScrollToTop />}
    </LanguageProvider>
  );
}

