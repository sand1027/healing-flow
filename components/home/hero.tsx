"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    return (
        <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
            {/* Nature Background - Full Screen */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="https://res.cloudinary.com/dchz9rofb/image/upload/v1767004476/healing-flow/fog-5333546_qb9ztn.jpg"
                    alt="Nature background with fog and trees"
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full min-h-screen flex flex-col">
                {/* Top Right - Name and Titles */}
                <div className="absolute top-8 md:top-16 right-6 md:right-12 text-right z-20">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                        {t.sarithaThulasidas}
                    </h1>
                    <div className="space-y-1 text-sm md:text-base text-black font-normal">
                        <p>{t.regressionTherapist}</p>
                        <p>{t.spiritualTechnologyFacilitator}</p>
                        <p>{t.intuitiveAbhyangaMassuer}</p>
                    </div>
                </div>

                {/* Middle Right - Quote */}
                <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 text-right z-20 max-w-md">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-relaxed">
                        {t.quoteWithStrongRoots}
                    </p>
                </div>
            </div>
        </section>
    );
}
