"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
    const { lang } = useLanguage();
    const t = translations[lang];

    // Helper function to parse items and create clickable links
    const parseItems = (items: string[]) => {
        return items.map((item, idx) => {
            // Split by periods and commas to get individual items
            const parts = item.split(/[.,]/).filter(p => p.trim());
            return parts.map((part, partIdx) => {
                const trimmed = part.trim();
                if (!trimmed) return null;
                // For now, items are not clickable - user will tell us where to redirect
                return { text: trimmed, href: "#" }; // Placeholder href
            }).filter(Boolean);
        }).flat();
    };

    const services = [
        {
            id: "regression",
            title: t.regressionTherapy,
            goal: t.regressionTherapyGoal,
            items: t.regressionTherapyItems,
            color: "text-amber-600",
            leftImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004475/healing-flow/eye-6706850_uq5rbc.jpg",
            rightImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004475/healing-flow/buddha-1550588_a7e3vn.jpg",
        },
        {
            id: "spiritual",
            title: t.spiritualTechnology,
            goal: t.spiritualTechnologyGoal,
            items: t.spiritualTechnologyItems,
            color: "text-teal-500",
            leftImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004478/healing-flow/sheeps-6828766_yhzj8s.jpg",
            rightImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004477/healing-flow/sheep-1684536_iuwjxe.jpg",
        },
        {
            id: "abhyanga",
            title: t.abhyangaAyurvedic,
            subtitle: t.abhyangaAyurvedicSubtitle,
            goal: t.abhyangaAyurvedicGoal,
            items: t.abhyangaAyurvedicItems,
            color: "text-pink-500",
            leftImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004478/healing-flow/woman-2609115_tinsje.jpg",
            rightImage: "https://res.cloudinary.com/dchz9rofb/image/upload/v1767004477/healing-flow/head-650878_awrmcq.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Single-page Services layout */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom pl-8 md:pl-24 lg:pl-32">
                    {/* Main Title */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                            {t.services}
                        </h1>
                    </div>

                    {/* Services Blocks */}
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`mb-16 md:mb-20 ${index !== services.length - 1 ? "border-b border-gray-200 pb-16 md:pb-20" : ""}`}
                        >
                            {/* Service Title */}
                            <div className="mb-6">
                                <h2 className={`text-2xl md:text-3xl font-light ${service.color} mb-1`}>
                                    {service.title}
                                </h2>
                                {service.subtitle && (
                                    <p className="text-sm md:text-base text-foreground/60 font-light mt-1">
                                        {service.subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Service Content with Images */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* Left Circular Image */}
                                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                                        <Image
                                            src={service.leftImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Center Content */}
                                <div className="lg:col-span-8 space-y-4">
                                    {/* Goal */}
                                    <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                                        {service.goal}
                                    </p>

                                    {/* Items List - with clickable links */}
                                    <ul className="space-y-1.5">
                                        {service.items.map((item, idx) => {
                                            // Split by periods to get individual items
                                            const parts = item.split('.').map(p => p.trim()).filter(p => p);
                                            return (
                                                <li key={idx} className="text-sm md:text-base text-foreground/60 font-light leading-relaxed">
                                                    {parts.map((part, partIdx) => {
                                                        // Check if part has commas (like "Addictions. Self sabotaging beliefs. Depression")
                                                        if (part.includes(',')) {
                                                            const subParts = part.split(',').map(sp => sp.trim()).filter(sp => sp);
                                                            return (
                                                                <span key={partIdx}>
                                                                    {subParts.map((subPart, subIdx) => (
                                                                        <span key={subIdx}>
                                                                            {subIdx > 0 && ", "}
                                                                            <Link
                                                                                href="#" // Placeholder - user will tell us where to redirect
                                                                                className="hover:text-foreground hover:underline transition-colors"
                                                                            >
                                                                                {subPart}
                                                                            </Link>
                                                                        </span>
                                                                    ))}
                                                                    {partIdx < parts.length - 1 && ". "}
                                                                </span>
                                                            );
                                                        }
                                                        // Single item without commas
                                                        return (
                                                            <span key={partIdx}>
                                                                {partIdx > 0 && ". "}
                                                                <Link
                                                                    href="#" // Placeholder - user will tell us where to redirect
                                                                    className="hover:text-foreground hover:underline transition-colors"
                                                                >
                                                                    {part}
                                                                </Link>
                                                                {partIdx < parts.length - 1 && "."}
                                                            </span>
                                                        );
                                                    })}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    {/* More Information Link */}
                                    <div className="text-right pt-2">
                                        <Link
                                            href="/contact"
                                            className="text-xs md:text-sm text-foreground/40 hover:text-foreground/60 font-light transition-colors"
                                        >
                                            {t.moreInformation}
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Circular Image */}
                                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                                        <Image
                                            src={service.rightImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
