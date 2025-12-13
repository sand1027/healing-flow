"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ServicesOverview() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const services = [
        {
            title: t.individualTherapy,
            description: t.individualTherapyDesc,
            image: "/images/therapy-session.png",
            href: "/services#individual",
        },
        {
            title: t.couplesCounseling,
            description: t.couplesCounselingDesc,
            image: "/images/wellness-abstract.png",
            href: "/services#couples",
        },
        {
            title: t.groupSessions,
            description: t.groupSessionsDesc,
            image: "/images/hero-meditation.png",
            href: "/services#group",
        },
    ];
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="container-custom">
                {/* Section Header - Simple */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                            {t.comprehensiveMentalHealthSupport}
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors font-light"
                    >
                        {t.viewAll}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                </div>

                {/* Services Grid - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group block space-y-4"
                        >
                            {/* Image - Simple */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-accent/30">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
