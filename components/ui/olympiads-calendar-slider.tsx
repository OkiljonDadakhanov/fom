"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Upcoming olympiads (all English, with links)
const upcomingOlympiads = [
  {
    id: 1,
    name: "IMO 2026",
    date: "July 2026",
    location: "Shanghai, China",
    description:
      "International Mathematical Olympiad — the world’s top math contest for high-school students.",
    color: "#33CC66", // Prestigious
    category: "Prestigious",
    link: "https://www.imo-official.org/",
  },
  {
    id: 2,
    name: "IChO 2026",
    date: "July 2026",
    location: "Tashkent, Uzbekistan",
    description:
      "International Chemistry Olympiad hosted in Tashkent, featuring theoretical and practical exams.",
    color: "#FF3366", // Local
    category: "Local",
    link: "https://www.icho2026.uz/",
  },
  {
    id: 3,
    name: "IOI 2026",
    date: "July–August 2026",
    location: "Tashkent, Uzbekistan",
    description:
      "International Olympiad in Informatics — elite programming/algorithmic contest for secondary students.",
    color: "#33CC66", // Prestigious
    category: "Prestigious",
    link: "https://ioi2026.uz/",
  },
];

// Category color mapping (English)
const categoryColors: Record<string, string> = {
  Prestigious: "#33CC66",
  Local: "#FF3366",
  International: "#9933CC",
  "Regional International": "#3399FF",
  "In Partnership": "#FF9933",
};

export default function OlympiadsCalendarSlider() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update current slide index and count when the carousel changes
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onChange = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onChange);
    return () => {
      api.off("select", onChange);
    };
  }, [api]);

  // Handle manual navigation to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
      id="calendar"
    >
      <Container>
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">Upcoming Olympiads</h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay updated with the latest science olympiads and competitions.
              Hover on any event to see more details.
            </p>
          </div>

          {/* Slider navigation controls */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">
              {current + 1} / {count}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => api?.scrollPrev()}
                className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 top-6 z-0"></div>

          {/* Olympiad cards carousel */}
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="p-4 pb-8">
              {upcomingOlympiads.map((olympiad) => (
                <CarouselItem
                  key={olympiad.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 first:pl-0"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredCard(olympiad.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline dot */}
                    <div
                      className="w-3 h-3 rounded-full absolute -top-1.5 left-4"
                      style={{ backgroundColor: olympiad.color }}
                    ></div>

                    {/* Card */}
                    <div
                      className={`mt-6 rounded-lg shadow-sm border bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ${
                        hoveredCard === olympiad.id
                          ? "transform -translate-y-1 shadow-md"
                          : ""
                      }`}
                    >
                      {/* Card header with colored border */}
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: olympiad.color }}
                      ></div>

                      <div className="p-4">
                        {/* Date and name */}
                        <div className="flex items-start mb-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                            style={{ backgroundColor: olympiad.color }}
                          ></div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {olympiad.date}
                            </p>
                            <h3 className="font-semibold text-lg">
                              {olympiad.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {olympiad.location}
                            </p>
                          </div>
                        </div>

                        {/* Description - only visible on hover */}
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredCard === olympiad.id
                              ? "max-h-24 opacity-100 mt-2"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {olympiad.description}
                          </p>
                        </div>

                        {/* Action button */}
                        <div
                          className={`flex justify-end mt-2 transition-opacity duration-300 ${
                            hoveredCard === olympiad.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <a
                            href={olympiad.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                          >
                            Open <ChevronRight className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Hidden default navigation buttons - we're using our custom ones */}
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-blue-600 dark:bg-blue-500"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Category legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pt-2">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
