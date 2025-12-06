import { Heart, Shield, Users, Sparkles } from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Compassionate Care",
        description:
            "A safe, non-judgmental space where you can explore your thoughts freely.",
    },
    {
        icon: Shield,
        title: "Confidential",
        description:
            "Your privacy is protected by professional standards and complete confidentiality.",
    },
    {
        icon: Users,
        title: "Expert Therapists",
        description:
            "Licensed professionals specializing in various therapeutic approaches.",
    },
    {
        icon: Sparkles,
        title: "Flexible Options",
        description:
            "Convenient online and in-person sessions that fit your lifestyle.",
    },
];

export default function Features() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* Section Header - Ultra Minimal */}
                <div className="max-w-4xl mb-24">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                        Professional Care,
                        <br />
                        Personalized Approach
                    </h2>
                </div>

                {/* Features Grid - Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group space-y-6"
                        >
                            {/* Icon - Minimal */}
                            <div className="w-10 h-10 flex items-center justify-center">
                                <feature.icon className="h-6 w-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300" strokeWidth={1} />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-normal tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
