import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-semibold gradient-text">
                            Healing Flow
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your journey to mental wellness starts here. Professional,
                            compassionate care tailored to your unique needs.
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
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Services
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
                            Get in Touch
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
                        © {currentYear} Healing Flow. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
