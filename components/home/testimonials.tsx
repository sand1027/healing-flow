const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Professional",
        content:
            "Healing Flow has been life-changing. The therapists are incredibly compassionate and helped me work through anxiety I've struggled with for years.",
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content:
            "The flexibility of online sessions made it easy to prioritize my mental health. My therapist provided practical tools I use every day.",
    },
    {
        name: "Emily Rodriguez",
        role: "Teacher",
        content:
            "After trying several options, I found my perfect match at Healing Flow. The personalized approach made all the difference in my healing journey.",
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding border-t border-foreground/10">
            <div className="container-custom">
                {/* Section Header */}
                <div className="max-w-2xl mb-24">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                        Real Stories,
                        <br />
                        Real Healing
                    </h2>
                </div>

                {/* Testimonials Grid - Ultra Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="space-y-8 border-l border-foreground/10 pl-8"
                        >
                            {/* Quote */}
                            <p className="text-base text-foreground/80 leading-relaxed font-light">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="space-y-1">
                                <p className="text-sm font-normal text-foreground">{testimonial.name}</p>
                                <p className="text-xs text-foreground/50 uppercase tracking-wider">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
