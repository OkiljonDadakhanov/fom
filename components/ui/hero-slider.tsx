"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Empowering Young Minds Through Science",
    description:
      "Join our community of young scientists and prepare for national and international science olympiads with expert guidance.",
    bgColor: "from-[#0E3150] to-[#1A5B8F]",
    buttonText: "Explore Courses",
    secondaryButtonText: "Learn More",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Comprehensive Training Programs",
    description:
      "Our specialized curriculum covers all aspects of science olympiads with practical exercises and regular assessments.",
    bgColor: "from-[#010B2B] to-[#152C5B]",
    buttonText: "View Programs",
    secondaryButtonText: "Contact Us",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Success Stories That Inspire",
    description:
      "Our students have won medals at national and international competitions. Join us to write your own success story.",
    bgColor: "from-[#0A2342] to-[#2A4374]",
    buttonText: "Student Stories",
    secondaryButtonText: "Register Now",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  },
];

export function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  // Set up window height measurement for responsive full-height hero
  useEffect(() => {
    // Set initial height
    setWindowHeight(window.innerHeight);

    // Update height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate hero height (subtract header height)
  const heroHeight =
    windowHeight > 0 ? windowHeight - 64 : "calc(100vh - 64px)";

  // Set up autoplay
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  // Update current slide index when the carousel changes
  useEffect(() => {
    if (!api) return;

    const onChange = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onChange);
    return () => {
      api.off("select", onChange);
    };
  }, [api]);

  // Pause autoplay when hovering
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

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
    <div className="relative overflow-hidden group">
      {/* Custom navigation arrows - positioned on left and right sides */}
      <button
        onClick={() => api?.scrollPrev()}
        className="cursor-pointer absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
      </button>

      <button
        onClick={() => api?.scrollNext()}
        className="cursor-pointer absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
      </button>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <div
                className="w-full relative overflow-hidden"
                style={{ height: heroHeight }}
              >
                {/* Background gradient + image */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} z-0`}
                ></div>

                {/* Image overlay */}
                <div className="absolute inset-0 z-10 mix-blend-overlay">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                </div>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-20"></div>

                {/* Content */}
                <Container className="relative z-30 h-full flex flex-col justify-center">
                  <div className="max-w-4xl px-4 py-12 md:py-0">
                    <div className="flex flex-col gap-4 sm:gap-8">
                      {/* Animated title with staggered entrance */}
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight animate-fade-in">
                        {slide.title}
                      </h1>

                      {/* Description with subtle animation */}
                      <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in-delay">
                        {slide.description}
                      </p>

                      {/* Buttons with hover effects */}
                      <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-delay-long">
                        <Button
                          size="lg"
                          className=" cursor-pointer bg-white text-[#0E3150] hover:bg-white/90 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl"
                        >
                          {slide.buttonText}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="cursor-pointer border-white text-[#0E3150] hover:bg-white/10 transition-all duration-300 text-base backdrop-blur-sm"
                        >
                          {slide.secondaryButtonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hidden default navigation buttons - we're using our custom ones */}
        <div className="hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        {/* Slide indicators - improved design */}
        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`relative h-2.5 transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                } rounded-full`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
}
