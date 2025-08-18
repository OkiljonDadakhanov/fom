"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ChevronRight } from "lucide-react";

// Sample data for olympiad categories
const categories = [
  {
    id: "mahally",
    name: "Mahally",
    active: true,
    color: "#0E3150",
    textColor: "text-white",
  },
  {
    id: "hamkorlikda",
    name: "Hamkorlikda",
    active: false,
    color: "#F5F5F5",
    textColor: "text-gray-800",
  },
  {
    id: "nufuzli-xalqaro",
    name: "Nufuzli xalqaro",
    active: false,
    color: "#F5F5F5",
    textColor: "text-gray-800",
  },
  {
    id: "xalqaro",
    name: "Xalqaro",
    active: false,
    color: "#F5F5F5",
    textColor: "text-gray-800",
  },
];

// Sample olympiads data
const olympiads = [
  {
    id: 1,
    name: "IMO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "mahally",
    image: "/images/olympiads/imo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "IMO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "mahally",
    image: "/images/olympiads/imo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "IMO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "mahally",
    image: "/images/olympiads/imo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "IMO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "mahally",
    image: "/images/olympiads/imo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ICHO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "hamkorlikda",
    image: "/images/olympiads/icho.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "IFO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "nufuzli-xalqaro",
    image: "/images/olympiads/ifo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "IBO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "mahally",
    image: "/images/olympiads/ibo.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "IIO Olimpiad",
    description:
      "Varius mauris arcu nisi pellentesque laportis. Sagittis volutpat non phasellus tristique feugiat consectetur egestas semper.",
    category: "xalqaro",
    image: "/images/olympiads/iio.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=300&auto=format&fit=crop",
  },
];

export default function OlympiadsCategories() {
  const [activeCategory, setActiveCategory] = useState("mahally");

  // Filter olympiads by active category
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
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 whitespace-nowrap transition-colors duration-200 ${activeCategory === category.id
                    ? `bg-[${category.color}] ${category.textColor}`
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
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
                {/* Olympiad Image */}
                <motion.div
                  className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={olympiad.fallbackImage}
                    alt={olympiad.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Olympiad Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{olympiad.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {olympiad.description}
                  </p>
                  <div className="flex justify-end">
                    <motion.button
                      className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium group-hover:underline"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.button>
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
