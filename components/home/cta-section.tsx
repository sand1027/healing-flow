"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function CTASection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section className="py-20 md:py-28 bg-primary/5">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                        {t.readyToBegin} {t.yourJourney}
                    </h2>

                    {/* Subtext */}
                    <p className="text-base md:text-lg text-foreground/60 font-light max-w-xl mx-auto leading-relaxed">
                        {t.takeFirstStep}
                    </p>

                    {/* CTA Button - Simple */}
                    <div className="pt-4">
                        <Button
                            size="lg"
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-light px-10 h-12 rounded-full transition-all"
                        >
                            <Link href="/contact">{t.bookASession}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
