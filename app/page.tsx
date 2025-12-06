import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import ServicesOverview from "@/components/home/services-overview";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </>
  );
}
