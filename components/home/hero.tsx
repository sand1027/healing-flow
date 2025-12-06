import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-background py-24 md:py-32">
            {/* Content */}
            <div className="container-custom relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Small Label */}
                        <div className="inline-block">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60">
                                Mental Wellness
                            </span>
                        </div>

                        {/* Main Headline - Ultra Minimal */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-foreground">
                            Find Your
                            <br />
                            <span className="font-normal">Inner Peace</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-md">
                            Professional therapy designed for your unique journey to mental wellness.
                        </p>

                        {/* CTA Buttons - Minimal Style */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button
                                size="lg"
                                asChild
                                className="text-sm font-normal tracking-wide px-10 h-12 rounded-none bg-foreground text-background hover:bg-foreground/90"
                            >
                                <Link href="/contact">START YOUR JOURNEY</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                asChild
                                className="text-sm font-normal tracking-wide h-12 rounded-none hover:bg-transparent border-b border-foreground/20 hover:border-foreground px-0"
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="lg:col-span-6">
                        <div className="relative aspect-[3/4] rounded-none overflow-hidden max-h-[50vh]">
                            <Image
                                src="/images/hero-minimal.png"
                                alt="Peaceful meditation"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>

                        {/* Minimal Stats Below Image */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-foreground/10">
                            <div>
                                <div className="text-2xl font-light text-foreground mb-1">500+</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">Clients</div>
                            </div>
                            <div>
                                <div className="text-2xl font-light text-foreground mb-1">10+</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">Years</div>
                            </div>
                            <div>
                                <div className="text-2xl font-light text-foreground mb-1">98%</div>
                                <div className="text-xs uppercase tracking-wider text-foreground/50">Success</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
