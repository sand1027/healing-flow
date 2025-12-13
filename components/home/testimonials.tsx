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
        <section className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="max-w-2xl mb-32">
                    <span className="text-xs font-light tracking-[0.3em] uppercase text-foreground/50 mb-8 block">
                        {t.testimonials}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                        {t.realStories},
                        <br />
                        {t.realHealing}
                    </h2>
                </div>

                {/* Testimonials Grid - Ultra Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="space-y-10 border-l border-foreground/5 pl-10"
                        >
                            {/* Quote */}
                            <p className="text-sm text-foreground/60 leading-loose font-light">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="space-y-2">
                                <p className="text-sm font-light text-foreground">{testimonial.name}</p>
                                <p className="text-xs font-light text-foreground/40 uppercase tracking-widest">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
