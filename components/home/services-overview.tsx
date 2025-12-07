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
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-32">
                    <div className="max-w-2xl">
                        <span className="text-xs font-light tracking-[0.3em] uppercase text-foreground/50 mb-8 block">
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
                        className="group flex items-center gap-3 text-xs tracking-widest text-foreground/50 hover:text-primary transition-colors font-light uppercase"
                    >
                        View All
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                </div>

                {/* Services Grid - Ultra Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group block space-y-8"
                        >
                            {/* Image - Grayscale */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-light tracking-wide group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-foreground/50 leading-loose font-light">
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
