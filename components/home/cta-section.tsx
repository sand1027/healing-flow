import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-12 py-20">
                    {/* Heading */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                        Ready to Begin
                        <br />
                        Your Journey?
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                        Take the first step towards better mental health today.
                    </p>

                    {/* CTA Button - Minimal */}
                    <div className="pt-8">
                        <Button
                            size="lg"
                            asChild
                            className="text-sm font-normal tracking-wide px-12 h-12 rounded-none bg-foreground text-background hover:bg-foreground/90"
                        >
                            <Link href="/contact">BOOK A SESSION</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
