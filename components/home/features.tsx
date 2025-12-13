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
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="container-custom">
                {/* Section Header - Simple */}
                <div className="max-w-3xl mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                        {t.professionalCare}
                    </h2>
                </div>

                {/* Features Grid - Clean Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group space-y-4 p-6 rounded-lg hover:bg-white/50 transition-all duration-300"
                        >
                            {/* Icon - Simple */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-light text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed font-light">
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
