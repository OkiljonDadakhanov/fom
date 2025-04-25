"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";

// Sample sponsors data
const sponsors = [
  { id: 1, name: "IT PARK" },
  { id: 2, name: "UZINFOCOM" },
  { id: 3, name: "UZTELECOM" },
  { id: 4, name: "TATU XORAZM" },
  { id: 5, name: "AloqaBank" },
  { id: 6, name: "UNICON SOFT" },
  { id: 7, name: "IT PARK" },
  { id: 8, name: "UZIN" },
];

export default function SponsorsSlider() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoPlay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [api]);

  return (
    <section className="py-10 bg-[#0E3150] dark:bg-[#010B2B] text-white overflow-hidden">
      <Container>
        <Carousel 
          className="w-full" 
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="flex items-center gap-8 md:gap-12 py-4">
            {sponsors.map((sponsor) => (
              <CarouselItem
                key={sponsor.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex-shrink-0 min-w-0"
              >
                <div className="h-16 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-center whitespace-nowrap">
                    {sponsor.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}
