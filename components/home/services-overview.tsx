import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Individual Therapy",
        description:
            "Personalized one-on-one sessions focused on your unique needs and goals.",
        image: "/images/therapy-session.png",
        href: "/services#individual",
    },
    {
        title: "Couples Counseling",
        description:
            "Strengthen your relationship through guided communication and understanding.",
        image: "/images/wellness-abstract.png",
        href: "/services#couples",
    },
    {
        title: "Group Sessions",
        description:
            "Connect with others in a supportive, professionally guided environment.",
        image: "/images/hero-meditation.png",
        href: "/services#group",
    },
];

export default function ServicesOverview() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* Section Header - Minimal */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-24">
                    <div className="max-w-2xl">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Comprehensive
                            <br />
                            Mental Health Support
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="group flex items-center gap-3 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors font-light border-b border-foreground/20 hover:border-foreground pb-1"
                    >
                        VIEW ALL SERVICES
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                </div>

                {/* Services Grid - Ultra Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group block space-y-6"
                        >
                            {/* Image - Grayscale */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-normal tracking-wide group-hover:text-foreground/60 transition-colors">
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
