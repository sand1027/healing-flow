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
  {
    name: "David Thompson",
    role: "Entrepreneur",
    content:
      "The couples counseling sessions helped us reconnect and communicate better. We're stronger than ever now.",
  },
  {
    name: "Lisa Anderson",
    role: "Nurse",
    content:
      "Dealing with work stress was overwhelming. The stress management techniques I learned here have transformed my life.",
  },
  {
    name: "James Wilson",
    role: "Student",
    content:
      "As a college student, I was struggling with depression. The support I received here was exactly what I needed.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
              Testimonials
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Real Stories,
              <br />
              <span className="font-normal">Real Healing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
              Hear from those who have walked the path to wellness with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="space-y-6 border-l border-foreground/10 pl-8 py-4"
              >
                <p className="text-base text-foreground/70 leading-relaxed font-light">
                  "{testimonial.content}"
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-light text-foreground">{testimonial.name}</p>
                  <p className="text-xs font-light text-foreground/50 uppercase tracking-wider">
                    {testimonial.role}
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

