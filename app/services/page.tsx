import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
    {
        id: "individual",
        title: "Individual Therapy",
        description:
            "One-on-one sessions tailored to your unique needs and goals. Work through anxiety, depression, trauma, life transitions, and more.",
        image: "/images/therapy-session.png",
        features: [
            "Personalized treatment plans",
            "Flexible scheduling options",
            "Evidence-based approaches",
            "Safe, confidential environment",
        ],
    },
    {
        id: "couples",
        title: "Couples Counseling",
        description:
            "Strengthen your relationship through improved communication, conflict resolution, and deeper understanding of each other.",
        image: "/images/wellness-abstract.png",
        features: [
            "Communication skills training",
            "Conflict resolution strategies",
            "Intimacy and connection building",
            "Pre-marital counseling",
        ],
    },
    {
        id: "group",
        title: "Group Therapy",
        description:
            "Connect with others facing similar challenges in a supportive, guided environment led by experienced therapists.",
        image: "/images/hero-meditation.png",
        features: [
            "Peer support and connection",
            "Shared experiences and insights",
            "Cost-effective option",
            "Various specialized groups",
        ],
    },
    {
        id: "online",
        title: "Online Sessions",
        description:
            "Access quality mental health care from the comfort of your home with secure, HIPAA-compliant video sessions.",
        image: "/images/therapy-session.png",
        features: [
            "Convenient and flexible",
            "Same quality as in-person",
            "Secure video platform",
            "Available nationwide",
        ],
    },
];

const pricingTiers = [
    {
        name: "Individual Session",
        price: "$150",
        duration: "50 minutes",
        features: [
            "One-on-one therapy",
            "Personalized treatment",
            "Flexible scheduling",
            "Progress tracking",
        ],
    },
    {
        name: "Couples Session",
        price: "$200",
        duration: "75 minutes",
        features: [
            "Joint therapy sessions",
            "Communication tools",
            "Relationship strategies",
            "Homework assignments",
        ],
        highlighted: true,
    },
    {
        name: "Group Session",
        price: "$75",
        duration: "90 minutes",
        features: [
            "Small group setting",
            "Peer support",
            "Guided discussions",
            "Weekly meetings",
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Our Services
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                            Comprehensive
                            <br />
                            <span className="font-normal">Mental Health Support</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                            Professional services designed to support you at every stage of your wellness journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail - Minimal */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className="section-padding"
                >
                    <div className="container-custom">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                <div>
                                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                                        {service.id}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <Check className="h-4 w-4 text-foreground/40 mt-1 flex-shrink-0" strokeWidth={1} />
                                            <span className="text-sm text-foreground/60 font-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    size="lg"
                                    asChild
                                    className="text-sm font-normal tracking-wide px-10 h-12 rounded-none bg-foreground text-background hover:bg-foreground/90"
                                >
                                    <Link href="/contact">BOOK THIS SERVICE</Link>
                                </Button>
                            </div>
                            <div className={`relative aspect-[3/4] overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Pricing Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Pricing
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                            Transparent,
                            <br />
                            Affordable Care
                        </h2>
                        <p className="text-base text-foreground/60 leading-relaxed font-light max-w-2xl">
                            Flexible payment options. We accept most major insurance plans.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`space-y-8 p-8 border ${tier.highlighted ? "border-foreground/20" : "border-foreground/10"}`}
                            >
                                <div className="space-y-4">
                                    <h3 className="text-xl font-normal tracking-wide">
                                        {tier.name}
                                    </h3>
                                    <div className="text-4xl font-light text-foreground">
                                        {tier.price}
                                    </div>
                                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                                        {tier.duration}
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <Check className="h-4 w-4 text-foreground/40 mt-0.5 flex-shrink-0" strokeWidth={1} />
                                            <span className="text-sm text-foreground/60 font-light">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full text-sm font-normal tracking-wide h-12 rounded-none ${tier.highlighted ? "bg-foreground text-background hover:bg-foreground/90" : "bg-transparent border border-foreground/20 hover:border-foreground text-foreground"}`}
                                    asChild
                                >
                                    <Link href="/contact">GET STARTED</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Simple,
                            <br />
                            Straightforward Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                        {[
                            {
                                step: "01",
                                title: "Book Consultation",
                                description: "Schedule a free 15-minute consultation call.",
                            },
                            {
                                step: "02",
                                title: "Meet Your Therapist",
                                description: "Connect with a therapist matched to your needs.",
                            },
                            {
                                step: "03",
                                title: "Create Your Plan",
                                description: "Develop a personalized treatment plan together.",
                            },
                            {
                                step: "04",
                                title: "Begin Your Journey",
                                description: "Start your path to healing and growth.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="space-y-6">
                                <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center">
                                    <span className="text-lg font-light text-foreground/40">
                                        {item.step}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-normal tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                        {item.description}
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
