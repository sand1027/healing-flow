"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import ServicesOverview from "@/components/home/services-overview";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}>
      <Hero />
      <Features />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </div>
  );
}

