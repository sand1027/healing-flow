"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function BlogsPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const blogPosts = [
        {
            title: t.understandingAnxiety,
            excerpt: t.understandingAnxietyExcerpt,
            date: "March 15, 2024",
            category: t.mentalHealth,
            image: "/images/wellness-abstract.png",
        },
        {
            title: t.powerOfMindfulness,
            excerpt: t.powerOfMindfulnessExcerpt,
            date: "March 10, 2024",
            category: t.wellness,
            image: "/images/abstract-peace.png",
        },
        {
            title: t.buildingStrongerRelationships,
            excerpt: t.buildingStrongerRelationshipsExcerpt,
            date: "March 5, 2024",
            category: t.relationships,
            image: "/images/therapy-session.png",
        },
        {
            title: t.selfCareStrategies,
            excerpt: t.selfCareStrategiesExcerpt,
            date: "February 28, 2024",
            category: t.selfCare,
            image: "/images/hero-meditation.png",
        },
        {
            title: t.navigatingGrief,
            excerpt: t.navigatingGriefExcerpt,
            date: "February 20, 2024",
            category: t.mentalHealth,
            image: "/images/wellness-abstract.png",
        },
        {
            title: t.benefitsOfGroupTherapy,
            excerpt: t.benefitsOfGroupTherapyExcerpt,
            date: "February 15, 2024",
            category: t.therapy,
            image: "/images/abstract-peace.png",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.blogs}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.insightsAndResources}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.exploreOurCollection}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {blogPosts.map((post, index) => (
                            <Link key={index} href={`/blogs/${index + 1}`}>
                                <Card className="border-border/50 rounded-lg hover:border-primary/50 transition-colors cursor-pointer h-full bg-white/50">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-foreground/50 uppercase tracking-wider font-light">{post.category}</span>
                                            <span className="text-foreground/40 font-light">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-light leading-tight text-foreground">{post.title}</h3>
                                        <p className="text-sm text-foreground/60 font-light leading-relaxed">{post.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
