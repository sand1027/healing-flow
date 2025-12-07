import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-background py-20 md:py-24">
            {/* Content */}
            <div className="container-custom relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-center">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-6 space-y-12">
                        {/* Small Label */}
                        <div className="inline-block">
                            <span className="text-xs font-light tracking-[0.3em] uppercase text-foreground/50">
                                Mental Wellness
                            </span>
                        </div>

                        {/* Main Headline - Ultra Minimal */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tighter text-foreground">
                            Find Your
                            <br />
                            Inner Peace
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base md:text-lg text-foreground/50 leading-loose font-light max-w-lg">
                            Professional therapy designed for your unique journey to mental wellness.
                        </p>

                        {/* CTA Buttons - Minimal Style */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <Button
                                size="lg"
                                asChild
                                style={{ backgroundColor: '#79C7C5', color: '#FFFFFF' }}
                                className="text-xs font-light tracking-wider px-8 h-11 rounded-full hover:opacity-90 transition-all uppercase"
                            >
                                <Link href="/contact">Start Your Journey</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                asChild
                                className="text-xs font-light tracking-wider h-11 rounded-full hover:bg-accent/30 transition-all px-8 uppercase text-foreground/60 hover:text-foreground"
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="lg:col-span-6">
                        <div className="relative aspect-[3/4] overflow-hidden max-h-[60vh]">
                            <Image
                                src="/images/hero-minimal.png"
                                alt="Peaceful meditation"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                priority
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
