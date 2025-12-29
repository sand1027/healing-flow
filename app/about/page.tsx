"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function AboutPage() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full pl-8 md:pl-24 lg:pl-32">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.aboutUs}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.sarithaThulasidas}
                        </h1>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* About Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom pl-8 md:pl-24 lg:pl-32">
                    {/* Who am I Section */}
                    <div className="mb-20 md:mb-28">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-6">
                            {t.whoAmI}
                        </h2>
                        <div className="max-w-3xl space-y-4">
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                {t.whoAmIText1}
                            </p>
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                {t.whoAmIText2}
                            </p>
                        </div>
                    </div>

                    {/* What's my goal Section */}
                    <div className="mb-20 md:mb-28">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-6">
                            {t.whatsMyGoal}
                        </h2>
                        <div className="max-w-3xl space-y-4">
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                {t.whatsMyGoalText1}
                            </p>
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                {t.whatsMyGoalText2}
                            </p>
                        </div>
                    </div>

                    {/* Background Section */}
                    <div className="mb-20 md:mb-28">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-6">
                                    {t.background}
                                </h2>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.backgroundText1}
                                </p>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.backgroundText2}
                                </p>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.backgroundText3}
                                </p>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.backgroundText4}
                                </p>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {t.backgroundText5}
                                </p>
                            </div>
                            {/* Circular Portrait Image */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                                    <Image
                                        src="https://res.cloudinary.com/dchz9rofb/image/upload/v1767004478/healing-flow/IMG_4612_fw3lzm.jpg"
                                        alt="Saritha Thulasidas"
                                        fill
                                        className="object-cover"
                                        quality={95}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
