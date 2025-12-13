"use client";

import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Features() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const features = [
        {
            icon: Heart,
            title: t.compassionateCare,
            description: t.compassionateCareDesc,
        },
        {
            icon: Shield,
            title: t.confidential,
            description: t.confidentialDesc,
        },
        {
            icon: Users,
            title: t.expertTherapists,
            description: t.expertTherapistsDesc,
        },
        {
            icon: Sparkles,
            title: t.flexibleOptions,
            description: t.flexibleOptionsDesc,
        },
    ];
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* Section Header - Ultra Minimal */}
                <div className="max-w-4xl mb-32">
                    <span className="text-xs font-light tracking-[0.3em] uppercase text-foreground/50 mb-8 block">
                        {t.whyChooseUs}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                        {t.professionalCare},
                        <br />
                        {t.personalizedApproach}
                    </h2>
                </div>

                {/* Features Grid - Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group space-y-8"
                        >
                            {/* Icon - Minimal */}
                            <div className="w-12 h-12 flex items-center justify-center">
                                <feature.icon className="h-5 w-5 text-foreground/30 group-hover:text-primary transition-colors duration-500" strokeWidth={0.8} />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-base font-light tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-foreground/50 leading-loose font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
