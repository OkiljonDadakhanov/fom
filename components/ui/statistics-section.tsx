"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Content (no colors here)
const olympiads = [
  {
    title: "IBO Olympiad",
    description:
      "A spring of new opportunities! Our spring internship program introduces young people to the latest advances in digital technologies and opens the door to global opportunities.",
  },
  {
    title: "IMO Olympiad",
    description:
      "The International Mathematics Olympiad challenges brilliant young minds to solve complex mathematical problems and fosters logical thinking skills for future innovators.",
  },
  {
    title: "IOI Olympiad",
    description:
      "The International Olympiad in Informatics develops algorithmic thinking and programming skills among high school students, preparing them for careers in computer science.",
  },
  {
    title: "IChO Olympiad",
    description:
      "The International Chemistry Olympiad inspires students to explore chemical sciences through practical and theoretical challenges in an international competition.",
  },
];

// We’ll rotate between 3 palettes that adapt to theme
const statColorSets = [
  // set 1
  [
    "text-primary",
    "text-blue-600 dark:text-blue-300",
    "text-emerald-600 dark:text-emerald-300",
  ],
  // set 2
  [
    "text-fuchsia-600 dark:text-fuchsia-300",
    "text-amber-600 dark:text-amber-300",
    "text-cyan-600 dark:text-cyan-300",
  ],
  // set 3
  [
    "text-rose-600 dark:text-rose-300",
    "text-violet-600 dark:text-violet-300",
    "text-teal-600 dark:text-teal-300",
  ],
];

// Stats themselves (values + labels only)
const statisticsSets = [
  [
    { value: "120+", label: "Olympiads" },
    { value: "5M+", label: "Participants" },
    { value: "12", label: "Regions" },
    { value: "25+", label: "Gold" },
    { value: "50+", label: "Silver" },
    { value: "80+", label: "Bronze" },
  ],
  [
    { value: "45+", label: "Countries" },
    { value: "8M+", label: "Students" },
    { value: "20", label: "Disciplines" },
    { value: "35+", label: "Gold" },
    { value: "70+", label: "Silver" },
    { value: "100+", label: "Bronze" },
  ],
  [
    { value: "75+", label: "Events" },
    { value: "10M+", label: "Registrations" },
    { value: "30", label: "Partners" },
    { value: "40+", label: "Gold" },
    { value: "90+", label: "Silver" },
    { value: "150+", label: "Bronze" },
  ],
];

const OlympiadCarousel = () => {
  const [currentOlympiad, setCurrentOlympiad] = useState(0);
  const [currentStats, setCurrentStats] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // autoplay with pause on hover
  const hoverRef = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (hoverRef.current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentOlympiad((p) => (p + 1) % olympiads.length);
        setCurrentStats((p) => (p + 1) % statisticsSets.length);
        setIsAnimating(false);
      }, 350);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOlympiad((p) => (p - 1 + olympiads.length) % olympiads.length);
      setCurrentStats(
        (p) => (p - 1 + statisticsSets.length) % statisticsSets.length
      );
      setIsAnimating(false);
    }, 250);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOlympiad((p) => (p + 1) % olympiads.length);
      setCurrentStats((p) => (p + 1) % statisticsSets.length);
      setIsAnimating(false);
    }, 250);
  };

  const palette = statColorSets[currentStats % statColorSets.length];

  return (
    <section
      className="
        py-16 md:py-24
        bg-gradient-to-br from-muted/60 via-background to-background
        dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950
      "
    >
      <div
        className="
          mx-auto max-w-6xl rounded-3xl border border-border
          bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60
          p-6 md:p-10
        "
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Statistics */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Statistics
            </h2>
            <p className="text-muted-foreground mt-3 mb-8 max-w-lg">
              Key milestones from our community of learners and competitions.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStats}
                className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {statisticsSets[currentStats].map((stat, i) => {
                  let colorClass = palette[i % palette.length];

                  if (stat.label.toLowerCase() === "gold") {
                    colorClass = "text-yellow-500 dark:text-yellow-400";
                  } else if (stat.label.toLowerCase() === "silver") {
                    colorClass = "text-gray-400 dark:text-gray-300";
                  } else if (stat.label.toLowerCase() === "bronze") {
                    colorClass = "text-amber-700 dark:text-amber-600";
                  }

                  return (
                    <motion.div
                      key={`${stat.label}-${i}`}
                      className="flex flex-col"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    >
                      <motion.span
                        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${colorClass}`}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-sm md:text-base text-muted-foreground mt-2">
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured Card */}
          <div className="relative">
            <button
              onClick={handlePrevious}
              className="
                absolute -top-4 right-0
                inline-flex h-10 w-10 items-center justify-center
                rounded-full border border-border bg-muted/70 hover:bg-muted
                text-muted-foreground hover:text-foreground
                transition-colors
              "
              aria-label="Previous olympiad"
            >
              <ChevronUp className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentOlympiad}
                className="relative z-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {olympiads[currentOlympiad].title}
                </h3>
                <p className="text-muted-foreground">
                  {olympiads[currentOlympiad].description}
                </p>
                <motion.button
                  className="
                  mt-6 inline-flex items-center rounded-md px-4 py-2
                  bg-primary text-primary-foreground hover:opacity-90
                  transition-opacity
                "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="
                absolute -bottom-4 right-0
                inline-flex h-10 w-10 items-center justify-center
                rounded-full border border-border bg-muted/70 hover:bg-muted
                text-muted-foreground hover:text-foreground
                transition-colors
              "
              aria-label="Next olympiad"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {olympiads.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${currentOlympiad === i ? "bg-primary" : "bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OlympiadCarousel;
