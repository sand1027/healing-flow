"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function CaseStudiesPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const caseStudies = [
        {
            title: t.overcomingAnxiety,
            client: "Sarah M., 32",
            challenge: t.caseStudy1Challenge,
            solution: t.caseStudy1Solution,
            result: t.caseStudy1Result,
        },
        {
            title: t.rebuildingAfterLoss,
            client: "Michael T., 45",
            challenge: t.caseStudy2Challenge,
            solution: t.caseStudy2Solution,
            result: t.caseStudy2Result,
        },
        {
            title: t.strengtheningRelationshipBonds,
            client: "Emma & David, Couple",
            challenge: t.caseStudy3Challenge,
            solution: t.caseStudy3Solution,
            result: t.caseStudy3Result,
        },
        {
            title: t.managingWorkRelatedStress,
            client: "Jennifer L., 38",
            challenge: t.caseStudy4Challenge,
            solution: t.caseStudy4Solution,
            result: t.caseStudy4Result,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.caseStudies}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.realStoriesRealResults}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.discoverHowOurTherapeutic}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {caseStudies.map((study, index) => (
                            <Card key={index} className="border-border/50 rounded-lg bg-white/50">
                                <CardContent className="p-6 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-light mb-2 text-foreground">{study.title}</h3>
                                        <p className="text-sm text-foreground/50 uppercase tracking-wider font-light">{study.client}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.challenge}</h4>
                                            <p className="text-sm text-foreground/70 font-light leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.solution}</h4>
                                            <p className="text-sm text-foreground/70 font-light leading-relaxed">{study.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.result}</h4>
                                            <p className="text-sm text-foreground/70 font-light leading-relaxed">{study.result}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
