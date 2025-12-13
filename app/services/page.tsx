"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function ServicesPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const services = [
        {
            id: "individual",
            title: t.individualTherapy,
            description: t.oneOnOneSessions,
            image: "/images/therapy-session.png",
            features: [
                t.personalizedTreatmentPlans,
                t.flexibleSchedulingOptions,
                t.evidenceBasedApproaches,
                t.safeConfidentialEnvironment,
            ],
        },
        {
            id: "couples",
            title: t.couplesCounseling,
            description: t.strengthenYourRelationship,
            image: "/images/wellness-abstract.png",
            features: [
                t.communicationSkillsTraining,
                t.conflictResolutionStrategies,
                t.intimacyAndConnection,
                t.preMaritalCounseling,
            ],
        },
        {
            id: "group",
            title: t.groupSessions,
            description: t.connectWithOthers,
            image: "/images/hero-meditation.png",
            features: [
                t.peerSupportAndConnection,
                t.sharedExperiences,
                t.costEffectiveOption,
                t.variousSpecializedGroups,
            ],
        },
        {
            id: "online",
            title: t.onlineSessions,
            description: t.accessQualityCare,
            image: "/images/therapy-session.png",
            features: [
                t.convenientAndFlexible,
                t.sameQualityAsInPerson,
                t.secureVideoPlatform,
                t.availableNationwide,
            ],
        },
    ];

    const pricingTiers = [
        {
            name: t.individualSession,
            price: "$150",
            duration: "50 minutes",
            features: [
                t.oneOnOneTherapy,
                t.personalizedTreatment,
                t.flexibleScheduling,
                t.progressTracking,
            ],
        },
        {
            name: t.couplesSession,
            price: "$200",
            duration: "75 minutes",
            features: [
                t.jointTherapySessions,
                t.communicationTools,
                t.relationshipStrategies,
                t.homeworkAssignments,
            ],
            highlighted: true,
        },
        {
            name: t.groupSession,
            price: "$75",
            duration: "90 minutes",
            features: [
                t.smallGroupSetting,
                t.peerSupport,
                t.guidedDiscussions,
                t.weeklyMeetings,
            ],
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: t.bookConsultation,
            description: t.scheduleFreeConsultation,
        },
        {
            step: "02",
            title: t.meetYourTherapist,
            description: t.connectWithTherapist,
        },
        {
            step: "03",
            title: t.createYourPlan,
            description: t.developPersonalizedPlan,
        },
        {
            step: "04",
            title: t.beginYourJourney,
            description: t.startYourPath,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.services}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.comprehensiveMentalHealthSupport}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.professionalServicesDesigned}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Services Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    {/* Services Detail */}
                    {services.map((service, index) => (
                        <section
                            key={service.id}
                            id={service.id}
                            className="mb-20 md:mb-28"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground">
                                        {service.title}
                                    </h2>
                                    <p className="text-base text-foreground/60 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                                                <span className="text-sm text-foreground/60 font-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        size="lg"
                                        asChild
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-light px-8 h-12 rounded-full transition-all"
                                    >
                                        <Link href="/contact">{t.bookThisService}</Link>
                                    </Button>
                                </div>
                                <div className={`relative aspect-[3/4] overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </section>
                    ))}

                    {/* Pricing Section */}
                    <section className="mb-20 md:mb-28 bg-secondary/10 py-16 md:py-20">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 text-foreground">
                                {t.transparentAffordableCare}
                            </h2>
                            <p className="text-base text-foreground/60 leading-relaxed font-light max-w-2xl">
                                {t.flexiblePaymentOptions}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {pricingTiers.map((tier, index) => (
                                <div
                                    key={index}
                                    className={`space-y-6 p-6 rounded-lg bg-white/50 border ${tier.highlighted ? "border-primary/50" : "border-border/50"}`}
                                >
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-light text-foreground">
                                            {tier.name}
                                        </h3>
                                        <div className="text-4xl font-light text-foreground">
                                            {tier.price}
                                        </div>
                                        <p className="text-xs uppercase tracking-wider text-foreground/50 font-light">
                                            {tier.duration}
                                        </p>
                                    </div>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                                <span className="text-sm text-foreground/60 font-light">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full text-sm font-light h-12 rounded-full transition-all ${
                                            tier.highlighted
                                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                                : "bg-transparent border border-border/50 hover:border-primary text-foreground"
                                        }`}
                                        asChild
                                    >
                                        <Link href="/contact">{t.getStarted}</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="mb-20 md:mb-28">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                                {t.simpleStraightforwardProcess}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                            {processSteps.map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="w-12 h-12 border border-border/50 rounded-lg flex items-center justify-center bg-primary/5">
                                        <span className="text-lg font-light text-primary">
                                            {item.step}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-light text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
