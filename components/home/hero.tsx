"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section className="relative min-h-screen flex items-center bg-background py-16 md:py-20">
            {/* Content */}
            <div className="container-custom relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        {/* Main Headline - Clean & Simple */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground">
                            {t.findYourInnerPeace}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-xl">
                            {t.professionalTherapy}
                        </p>

                        {/* CTA Buttons - Simple */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                size="lg"
                                asChild
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-light px-8 h-12 rounded-full transition-all"
                            >
                                <Link href="/contact">{t.startYourJourney}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                asChild
                                className="text-sm font-light h-12 rounded-full hover:bg-secondary/50 transition-all text-foreground/70 hover:text-foreground"
                            >
                                <Link href="/about">{t.learnMore}</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="hidden lg:block">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                            <Image
                                src="/images/hero-minimal.png"
                                alt="Peaceful meditation"
                                fill
                                className="object-cover"
                                priority
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator - Only visible on mobile */}
            <div className="md:hidden">
                <ScrollIndicator />
            </div>
        </section>
    );
}
