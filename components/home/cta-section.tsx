"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function CTASection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section className="section-padding bg-accent/10">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-16 py-24">
                    {/* Heading */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                        {t.readyToBegin}
                        <br />
                        <span className="italic">{t.yourJourney}</span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-base md:text-lg text-foreground/50 font-light max-w-2xl mx-auto leading-loose">
                        {t.takeFirstStep}
                    </p>

                    {/* CTA Button - Minimal */}
                    <div className="pt-4">
                        <Button
                            size="lg"
                            asChild
                            style={{ backgroundColor: '#79C7C5', color: '#FFFFFF' }}
                            className="text-xs font-light tracking-wider px-10 h-11 rounded-full hover:opacity-90 transition-all uppercase"
                        >
                            <Link href="/contact">{t.bookASession}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
