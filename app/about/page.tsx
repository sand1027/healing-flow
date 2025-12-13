"use client";

import Image from "next/image";
import { Users2, Heart, Target, Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function AboutPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const values = [
        {
            icon: Heart,
            title: t.compassionFirst,
            description: t.compassionFirstDesc,
        },
        {
            icon: Target,
            title: t.evidenceBased,
            description: t.evidenceBasedDesc,
        },
        {
            icon: Users2,
            title: t.inclusiveCare,
            description: t.inclusiveCareDesc,
        },
        {
            icon: Award,
            title: t.excellence,
            description: t.excellenceDesc,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.aboutUs}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.dedicatedToYourMentalWellness}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.professionalCompassionateCare}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* About Us Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    {/* Mission Section */}
                    <div className="mb-20 md:mb-28">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground">
                                    {t.creatingSafeSpaces}
                                </h2>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.missionText1}
                                </p>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.missionText2}
                                </p>
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/therapy-session.png"
                                    alt="Therapy session"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20 md:mb-28">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                                {t.principlesThatGuide}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {values.map((value, index) => (
                                <div key={index} className="space-y-4 p-6 rounded-lg hover:bg-secondary/20 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                                        <value.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-light text-foreground">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mb-20 md:mb-28">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-2">10+</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">{t.yearsExperience}</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-2">500+</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">{t.happyClients}</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-2">15+</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">{t.expertTherapists}</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-2">98%</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">{t.successRate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
