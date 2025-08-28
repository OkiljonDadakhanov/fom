"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// /public/images/partners (case-sensitive)
const sponsors = [
  {
    id: 1,
    name: "Ajou University in Tashkent",
    logo: "/images/partners/ajou.png",
    url: "https://www.ajou.uz/en/",
  },
  {
    id: 2,
    name: "British Management University",
    logo: "/images/partners/bmi.png",
    url: "https://bmu-edu.uz/",
  },
  {
    id: 3,
    name: "Central Asian University",
    logo: "/images/partners/cau.PNG",
    url: "https://centralasian.uz/",
  },
  {
    id: 4,
    name: "Kangaroo Uzbekistan",
    logo: "/images/partners/kangroo.png",
    url: "https://olympia.uz/ru",
  },
  {
    id: 5,
    name: "Olimpia.uz",
    logo: "/images/partners/olimpia.png",
    url: "https://olympia.uz/ru",
  },
  {
    id: 6,
    name: "Turan international university",
    logo: "/images/partners/turan.png",
    url: "https://tiu-edu.uz/ru/",
  },
  {
    id: 7,
    name: "Raqamli iqtisodiyot va agrotexnologiyalar universiteti",
    logo: "/images/partners/agratexnologiya.png",
    url: "https://udea.uz/uz/",
  },
];

function Logo({ src, alt }: { src: string; alt: string }) {
  const [source, setSource] = useState(src);
  return (
    <Image
      src={source}
      alt={alt}
      fill
      sizes="(max-width: 640px) 160px, 180px"
      className="object-contain"
      onError={() => setSource("/images/partners/fallback.png")}
      priority={false}
    />
  );
}

export default function SponsorsSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  const prefersNoMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api || prefersNoMotion) return;
    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = window.setInterval(() => api.scrollNext(), 3000);
    };
    const stop = () => {
      if (!intervalRef.current) return;
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
    if (!isHovered) start();
    else stop();
    return () => stop();
  }, [api, isHovered, prefersNoMotion]);

  return (
    <section
      className="py-12 bg-background text-foreground w-full scroll-mt-20"
      id="partners"
    >
      <div className="mb-6 flex items-center justify-between px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Our Partners
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Trusted by universities & organizations
        </p>
      </div>

      <div
        className="relative border-t border-border bg-muted/50 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Partner logos carousel"
        aria-live="off"
      >
        {/* soft edge fade */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        />

        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true, dragFree: true }}
          setApi={setApi}
        >
          <CarouselContent className="flex items-center gap-6 md:gap-10 py-4">
            {[...sponsors, ...sponsors].map((s, i) => (
              <CarouselItem
                key={`${s.id}-${i}`}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex-shrink-0 min-w-0"
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-16 sm:h-20 flex items-center justify-center cursor-pointer"
                  title={s.name}
                >
                  <div className="relative w-[160px] sm:w-[180px] h-10 sm:h-12 opacity-95 hover:opacity-100 transition-opacity duration-200">
                    <Logo src={s.logo} alt={s.name} />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
