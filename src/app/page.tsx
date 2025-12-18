import HeroSection from "@/components/sections/hero-section";
import ComparisonTable from "@/components/sections/comparison-table";
import SolutionsGrid from "@/components/sections/solutions-grid";
import DemoSection from "@/components/sections/demo-section";
import BentoCardsSection from "@/components/sections/bento-cards";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import GettingStartedSection from "@/components/sections/getting-started";
import FaqSection from "@/components/sections/faq";
import { CTA } from "@/components/ui/call-to-action";
import { Footer } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ComparisonTable />
      <SolutionsGrid />
      <DemoSection />
      <BentoCardsSection />
      <TestimonialsCarousel />
      <GettingStartedSection />
      <div id="faq">
        <FaqSection />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}