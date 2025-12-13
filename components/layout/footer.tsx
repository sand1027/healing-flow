"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();
    const isEntryPage = pathname === "/";
    const { lang } = useLanguage();
    const t = translations[lang];
    const [sidebarWidth, setSidebarWidth] = useState("56");
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (isEntryPage) return;
        
        // Check if we're on desktop (md breakpoint = 768px)
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Initial check
        checkDesktop();

        // Listen for window resize
        window.addEventListener("resize", checkDesktop);
        
        const savedState = localStorage.getItem("sidebarCollapsed");
        if (savedState === "true") {
            setSidebarWidth("16");
        } else {
            setSidebarWidth("56");
        }

        const handleStorageChange = () => {
            const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
            setSidebarWidth(collapsed ? "16" : "56");
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("sidebarToggle", handleStorageChange);

        return () => {
            window.removeEventListener("resize", checkDesktop);
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("sidebarToggle", handleStorageChange);
        };
    }, [isEntryPage]);

    return (
        <footer 
            className={`bg-secondary/10 border-t border-border/50 transition-all duration-300 ease-in-out ${!isEntryPage ? "hidden md:block" : ""}`}
            style={!isEntryPage && isDesktop ? { marginLeft: `calc(${sidebarWidth} * 0.25rem)` } : {}}
        >
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-semibold gradient-text">
                            Healing Flow
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {t.yourJourneyFooter}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            {t.quickLinks}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t.ourServices}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t.resources}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            {t.services}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/services#individual"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Individual Therapy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#couples"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Couples Counseling
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#group"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Group Therapy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#online"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Online Sessions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            {t.getInTouch}
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                    123 Wellness Street
                                    <br />
                                    San Francisco, CA 94102
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href="tel:+1234567890"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href="mailto:hello@serenity.com"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    hello@serenity.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Healing Flow. {t.allRightsReserved}.
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            {t.privacyPolicy}
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            {t.termsOfService}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
