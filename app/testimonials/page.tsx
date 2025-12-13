"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function TestimonialsPage() {
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
        {
            name: "David Thompson",
            role: t.entrepreneur,
            content: t.testimonial4,
        },
        {
            name: "Lisa Anderson",
            role: t.nurse,
            content: t.testimonial5,
        },
        {
            name: "James Wilson",
            role: t.student,
            content: t.testimonial6,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.testimonials}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.realStories}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.hearFromThose}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="space-y-6 p-6 bg-white/50 rounded-lg border-l-4 border-primary/30"
                            >
                                <p className="text-sm text-foreground/70 leading-relaxed font-light">
                                    "{testimonial.content}"
                                </p>
                                <div className="space-y-1 pt-4 border-t border-border/30">
                                    <p className="text-sm font-light text-foreground">{testimonial.name}</p>
                                    <p className="text-xs font-light text-foreground/50">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
