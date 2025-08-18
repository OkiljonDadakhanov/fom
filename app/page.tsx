import { HeroSlider } from "@/components/ui/hero-slider";
import OlympiadsCalendarSlider from "@/components/ui/olympiads-calendar-slider";
import OlympiadsCategories from "@/components/ui/olympiads-categories";
import StatisticsSection from "@/components/ui/statistics-section";
import SponsorsSlider from "@/components/ui/sponsors-slider";
import NewsEvents from "@/components/ui/news-events";
import FAQSection from "@/components/ui/faq-section";
import { InteractiveMap } from "@/components/ui/interactive-map";
import { AnimatedSection } from "@/components/ui/animated-wrapper";
import { PageTransition } from "@/components/ui/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <HeroSlider />

        {/* Upcoming Olympiads Section */}
        <AnimatedSection delay={0.2}>
          <OlympiadsCalendarSlider />
        </AnimatedSection>

        {/* Olympiad Categories Section */}
        <AnimatedSection delay={0.3}>
          <OlympiadsCategories />
        </AnimatedSection>

        {/* Statistics Section */}
        <AnimatedSection delay={0.4}>
          <StatisticsSection />
        </AnimatedSection>

                 {/* Interactive Map Section */}
         <InteractiveMap />

        {/* Sponsors Section */}
        <AnimatedSection delay={0.5}>
          <SponsorsSlider />
        </AnimatedSection>

        {/* News and Events Section */}
        <AnimatedSection delay={0.6}>
          <NewsEvents />
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={0.7}>
          <FAQSection />
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
