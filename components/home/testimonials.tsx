"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Testimonials() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: t.marketingProfessional,
            content: t.testimonial1,
        },
        {
            name: "Michael Chen",
            role: t.softwareEngineer,
            content: t.testimonial2,
        },
        {
            name: "Emily Rodriguez",
            role: t.teacher,
            content: t.testimonial3,
        },
    ];
    return (
        <section className="py-20 md:py-28 bg-accent/20">
            <div className="container-custom">
                {/* Section Header - Simple */}
                <div className="max-w-2xl mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                        {t.realStories}
                    </h2>
                </div>

                {/* Testimonials Grid - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="space-y-6 p-6 bg-white/50 rounded-lg"
                        >
                            {/* Quote */}
                            <p className="text-sm text-foreground/70 leading-relaxed font-light">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="space-y-1 pt-4 border-t border-border/30">
                                <p className="text-sm font-light text-foreground">{testimonial.name}</p>
                                <p className="text-xs font-light text-foreground/50">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
