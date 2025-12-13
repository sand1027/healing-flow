"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function FAQPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const faqs = t.faqs;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.faq}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.faqTitle}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.faqSubtitle}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* FAQ Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq: { question: string; answer: string }, index: number) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border/50 rounded-lg px-6 py-2 bg-white/50"
                                >
                                    <AccordionTrigger className="text-left font-light text-base py-4 hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-foreground/70 leading-relaxed font-light pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}

