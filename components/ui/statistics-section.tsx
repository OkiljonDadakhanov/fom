import React from "react";
import { Container } from "./container";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./button";

interface StatItem {
  value: string;
  label: string;
}

interface FeaturedOlympiad {
  title: string;
  description: string;
}

const stats: StatItem[] = [
  { value: "120+", label: "Olimpiads" },
  { value: "5M+", label: "Participants" },
  { value: "12", label: "Regions" },
  { value: "25+", label: "Gold" },
  { value: "50+", label: "Silver" },
  { value: "80+", label: "Bronze" },
];

const featuredOlympiad: FeaturedOlympiad = {
  title: "IBO Olympiad",
  description:
    "A spring of new opportunities! Our spring internship program introduces young people to the latest advances in digital technologies and opens the door to global opportunities.",
};

export default function StatisticsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Statistics</h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              Hendrerit lobortis rhoncus nullam aliquam suspendisse venenatis enim proin. Nam pellentesque integer velit pharetra malesuada.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E3150] dark:text-[#010B2B]/90">
                    {stat.value}
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Olympiad Column */}
          <div className="relative">
            <div className="absolute top-0 right-0 -translate-y-1/2">
              <ChevronUp size={40} className="text-gray-300 dark:text-gray-700" />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-md relative z-10">
              <h3 className="text-2xl font-bold mb-4">{featuredOlympiad.title}</h3>
              <p className="text-muted-foreground">
                {featuredOlympiad.description}
              </p>
              <Button className="mt-6 bg-[#0E3150] hover:bg-[#0E3150]/90 dark:bg-[#010B2B] dark:hover:bg-[#010B2B]/90 text-white">
                Learn More
              </Button>
            </div>
            
            <div className="absolute bottom-0 right-0 translate-y-1/2">
              <ChevronDown size={40} className="text-gray-300 dark:text-gray-700" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
