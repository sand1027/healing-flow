"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass border-b border-border/40">
        <nav className="container-custom">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-light tracking-wide text-foreground">
                  Healing Flow
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-normal tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Button
                asChild
                className="text-sm font-normal tracking-wide px-8 h-11 rounded-none bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/contact">Book Session</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" strokeWidth={1} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation - Slide Down */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-foreground/10 transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-light text-foreground/80 transition-colors hover:text-foreground tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                asChild
                className="w-full text-sm font-normal tracking-wide h-12 rounded-none bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
