import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users2, Award } from "lucide-react";

const teamMembers = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Clinical Psychologist",
        specialty: "Anxiety & Depression",
    },
    {
        name: "Dr. James Chen",
        role: "Licensed Therapist",
        specialty: "Couples Counseling",
    },
    {
        name: "Dr. Emily Rodriguez",
        role: "Mental Health Counselor",
        specialty: "Trauma & PTSD",
    },
    {
        name: "Dr. Michael Thompson",
        role: "Behavioral Therapist",
        specialty: "Addiction Recovery",
    },
];

const values = [
    {
        icon: Heart,
        title: "Compassion First",
        description:
            "We believe in treating every client with empathy, understanding, and genuine care.",
    },
    {
        icon: Target,
        title: "Evidence-Based",
        description:
            "Our approaches are grounded in proven therapeutic methods and ongoing research.",
    },
    {
        icon: Users2,
        title: "Inclusive Care",
        description:
            "We welcome and support clients from all backgrounds, identities, and experiences.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "We're committed to the highest standards of professional mental health care.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                            Dedicated to Your
                            <br />
                            <span className="font-normal">Mental Wellness</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                            Professional, compassionate mental health care that empowers individuals to live their fullest lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                                    Our Mission
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                                    Creating Safe Spaces for Healing
                                </h2>
                            </div>
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                At Healing Flow, we believe everyone deserves access to quality
                                mental health care. Our mission is to create a safe, welcoming
                                space where individuals can explore their thoughts, heal from
                                past experiences, and develop tools for lasting wellness.
                            </p>
                            <p className="text-base text-foreground/60 leading-relaxed font-light">
                                We combine evidence-based therapeutic approaches with genuine
                                compassion to help our clients navigate life's challenges and
                                discover their inner strength.
                            </p>
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <Image
                                src="/images/therapy-session.png"
                                alt="Therapy session"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Our Values
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Principles That
                            <br />
                            Guide Our Work
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {values.map((value, index) => (
                            <div key={index} className="group space-y-6">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <value.icon className="h-6 w-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300" strokeWidth={1} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-normal tracking-wide">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Our Team
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Experienced
                            <br />
                            Professionals
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group space-y-6">
                                <div className="w-20 h-20 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
                                    <Users2 className="h-8 w-8 text-foreground/40" strokeWidth={1} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-normal tracking-wide">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-foreground/60 font-light">
                                        {member.role}
                                    </p>
                                    <p className="text-xs uppercase tracking-wider text-foreground/40">
                                        {member.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 pt-8 border-t border-foreground/10">
                        <div>
                            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">10+</div>
                            <div className="text-xs uppercase tracking-wider text-foreground/50">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">500+</div>
                            <div className="text-xs uppercase tracking-wider text-foreground/50">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">15+</div>
                            <div className="text-xs uppercase tracking-wider text-foreground/50">Expert Therapists</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">98%</div>
                            <div className="text-xs uppercase tracking-wider text-foreground/50">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
