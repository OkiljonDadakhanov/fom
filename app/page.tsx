import { HeroSlider } from "@/components/ui/hero-slider";
import OlympiadsCalendarSlider from "@/components/ui/olympiads-calendar-slider";
import OlympiadsCategories from "@/components/ui/olympiads-categories";
import StatisticsSection from "@/components/ui/statistics-section";
import SponsorsSlider from "@/components/ui/sponsors-slider";
import NewsEvents from "@/components/ui/news-events";
import FAQSection from "@/components/ui/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Upcoming Olympiads Section */}
      <OlympiadsCalendarSlider />

      {/* Olympiad Categories Section */}
      <OlympiadsCategories />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Sponsors Section */}
      <SponsorsSlider />

      {/* News and Events Section */}
      <NewsEvents />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
