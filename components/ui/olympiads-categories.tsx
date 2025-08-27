"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ChevronRight } from "lucide-react";

// Category tabs (distinct active colors so state change is visible)
const categories = [
  {
    id: "nufuzli",
    name: "Prestigious",
    active: true,
    color: "#0E3150",
    textColor: "text-white",
  }, // navy
  {
    id: "xalqaro",
    name: "International",
    active: false,
    color: "#0D9488",
    textColor: "text-white",
  }, // teal-600
  {
    id: "mahalliy",
    name: "Local",
    active: false,
    color: "#2563EB",
    textColor: "text-white",
  }, // blue-600
  {
    id: "hamkorlikda",
    name: "In Partnership",
    active: false,
    color: "#7C3AED",
    textColor: "text-white",
  }, // violet-600
];

// Olympiads (logo images wired to /public/images/olympiad-logos + official links)
const olympiads = [
  {
    id: 101,
    name: "IMO — International Mathematical Olympiad",
    description:
      "The most prestigious annual mathematics championship for secondary-school students. Held every year since 1959 in different host countries.",
    category: "nufuzli",
    image: "/images/olympiad-logos/imo.png",
    link: "https://www.imo-official.org/",
  },
  {
    id: 102,
    name: "IChO — International Chemistry Olympiad",
    description:
      "The leading chemistry competition for school students worldwide. Since 1968, more than 90 countries take part.",
    category: "nufuzli",
    image: "/images/olympiad-logos/icho.png", // update if your file name differs
    link: "https://www.ichosc.org/",
  },
  {
    id: 103,
    name: "IOI — International Olympiad in Informatics",
    description:
      "One of the five major international science olympiads, aimed at growing interest in informatics/IT and bringing together top talent.",
    category: "nufuzli",
    image: "/images/olympiad-logos/ioi.png",
    link: "https://ioinformatics.org/",
  },
  {
    id: 104,
    name: "IPhO — International Physics Olympiad",
    description:
      "The premier physics contest for secondary-school students, uniting physics enthusiasts since 1967.",
    category: "nufuzli",
    image: "/images/olympiad-logos/ipho.png",
    link: "https://www.ipho-new.org/",
  },
  {
    id: 105,
    name: "IBO — International Biology Olympiad",
    description:
      "An annual competition designed to identify and encourage talented students with a passion for biology.",
    category: "nufuzli",
    image: "/images/olympiad-logos/ibo-logo.svg",
    link: "https://www.ibo-info.org/",
  },

  // (Optional) Other categories — sample placeholders
  {
    id: 201,
    name: "IIO Olympiad",
    description:
      "Sample item describing other international informatics initiatives and competitions.",
    category: "xalqaro",
    image: "/images/olympiads/iio.jpg",
    link: "https://iio.team/",
  },
  {
    id: 301,
    name: "Local Science Olympiad",
    description:
      "A regional-stage, local contest aimed at identifying talented youth.",
    category: "mahalliy",
    image: "/images/olympiads/local.jpg",
    link: "#",
  },
  {
    id: 401,
    name: "Collaborative Tournament",
    description:
      "A set of themed olympiads and tournaments organized jointly by multiple institutions.",
    category: "hamkorlikda",
    image: "/images/olympiads/partnered.jpg",
    link: "#",
  },
];

export default function OlympiadsCategories() {
  // Show Prestigious by default
  const [activeCategory, setActiveCategory] = useState("nufuzli");

  const filteredOlympiads = olympiads.filter(
    (olympiad) => olympiad.category === activeCategory
  );

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Olympiad Categories</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore different types of science olympiads organized by category.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto mb-8 scrollbar-hide">
          <div className="flex flex-wrap gap-2 min-w-full">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  className={`px-6 py-3 whitespace-nowrap transition-all duration-200 rounded-md ${
                    isActive
                      ? `${category.textColor} ring-1 ring-offset-2 ring-gray-200 dark:ring-gray-700`
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
                  }`}
                  style={
                    isActive ? { backgroundColor: category.color } : undefined
                  }
                  onClick={() => setActiveCategory(category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Olympiads Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {filteredOlympiads.map((olympiad, index) => (
              <motion.div
                key={olympiad.id}
                className="flex items-start gap-6 group hover:bg-gray-50 dark:hover:bg-gray-900 p-4 rounded-lg transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Olympiad Logo */}
                <motion.div
                  className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-white ring-1 ring-gray-200 p-3"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={olympiad.image}
                    alt={`${olympiad.name} logo`}
                    fill
                    sizes="96px"
                    unoptimized={Boolean(olympiad.image?.endsWith(".svg"))}
                    className="object-contain"
                  />
                </motion.div>

                {/* Olympiad Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {olympiad.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {olympiad.description}
                  </p>
                  <div className="flex justify-end">
                    <motion.a
                      href={olympiad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium group-hover:underline"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
