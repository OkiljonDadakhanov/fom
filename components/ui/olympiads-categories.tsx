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
  // {
  //   id: "hamkorlikda",
  //   name: "In Partnership",
  //   active: false,
  //   color: "#7C3AED",
  //   textColor: "text-white",
  // }, // violet-600
];

// Olympiads (logo images wired to /public/images/olympiad-logos + links)
const olympiads = [
  // PRESTIGIOUS
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
    image: "/images/olympiad-logos/icho.png",
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

  // INTERNATIONAL — inserted from your doc
  {
    id: 201,
    name: "IDO — International German Olympics",
    description:
      "The world’s largest German language competition for students aged 14–17, organized by the Goethe-Institut every two years.",
    category: "xalqaro",
    image: "/images/international/german.png",
    link: "https://www.goethe.de/ins/us/en/sta/chi/ser/afs/ido.html",
  },
  {
    id: 202,
    name: "IFLO — International French Language Olympiad",
    description:
      "A new global gathering for francophiles to immerse in French language and culture through contests and events.",
    category: "xalqaro",
    image: "/images/international/iflo.png",
    link: "https://iac-exams.com/iflo",
  },
  {
    id: 203,
    name: "SOF IEO — International English Olympiad",
    description:
      "Annual English competition by SOF for students in grades 1–12 assessing language and comprehension skills.",
    category: "xalqaro",
    image: "/images/international/sof.png",
    link: "https://sofworld.org/ieo",
  },
  {
    id: 204,
    name: "iGeo — International Geography Olympiad",
    description:
      "Annual contest for the best 16–19-year-old geographers worldwide; finalists emerge from national olympiads.",
    category: "xalqaro",
    image: "/images/international/igeo.png",
    link: "https://www.geoolympiad.org/",
  },
  {
    id: 205,
    name: "IEO — International Economics Olympiad",
    description:
      "Annual competition promoting creative problem-solving in economics, business, and finance for high-school students.",
    category: "xalqaro",
    image: "/images/international/economy.png",
    link: "https://ecolymp.org/",
  },
  {
    id: 206,
    name: "IAO — International Astronomy Olympiad",
    description:
      "Astronomy olympiad bringing together secondary-school students for theoretical and observational challenges.",
    category: "xalqaro",
    image: "/images/international/astronomy.png",
    link: "http://www.issp.ac.ru/iao/",
  },

  // LOCAL / REGIONAL — your existing items (kept as-is)
  {
    id: 301,
    name: "IZhO — International Zhautykov Olympiad",
    description:
      "Team-based olympiad in mathematics, physics and computer science, first held in 2005; emphasizes combined team and individual results.",
    category: "mahalliy",
    image: "/images/local/izho.jpg",
    link: "https://izho.kz/",
  },
  {
    id: 302,
    name: "CMO — Caucasus Mathematic Olympiad",
    description:
      "Builds a shared cultural and educational space for students across the Caucasus and Black Sea region; fosters mathematical friendships.",
    category: "mahalliy",
    image: "/images/local/kavkaz.png",
    link: "https://cmo.adygmath.ru/en/",
  },
  {
    id: 303,
    name: "BMO — Balkan Mathematical Olympiad",
    description:
      "Annual high-school contest among Balkan countries and guests to promote talent and cooperation in mathematics.",
    category: "mahalliy",
    image: "/images/local/balkan.png",
    link: "https://bmo2025.pmf.unsa.ba/",
  },
  {
    id: 304,
    name: "JBMO — Junior Balkan Mathematical Olympiad",
    description:
      "Junior version of BMO; established in the mid-1990s to engage younger students across the region.",
    category: "mahalliy",
    image: "/images/local/junior-balkan.png",
    link: "https://jbmo2025.mk/",
  },
  {
    id: 305,
    name: "IMC — International Mathematical Competition",
    description:
      "Competition for junior-high students with strong interest in math; began with Southeast Asian teams and expanded globally.",
    category: "mahalliy",
    image: "/images/local/imc.png",
    link: "https://www.imc-math.org.uk/",
  },
  {
    id: 306,
    name: "Mendeleev Chemistry Olympiad",
    description:
      "A top-tier chemistry olympiad that holds a unique position among subject competitions for secondary students.",
    category: "mahalliy",
    image: "/images/local/mendeleev.png",
    link: "https://mendeleevolympiad.org/eng",
  },
  {
    id: 307,
    name: "IJSO — International Junior Science Olympiad",
    description:
      "Annual individual and team competition in the natural sciences for students under 16, highlighting science in general education.",
    category: "mahalliy",
    image: "/images/local/ijso.png",
    link: "https://www.ijsoweb.org/",
  },
  {
    id: 308,
    name: "APhO — Asian Physics Olympiad",
    description:
      "Annual physics contest featuring practical and theoretical exams; nations send teams of eight high-school students.",
    category: "mahalliy",
    image: "/images/local/apho.png",
    link: "https://www.apho2025.sa/",
  },
  {
    id: 309,
    name: "EuPhO — European Physics Olympiad",
    description:
      "European physics contest modeled on real research situations, encouraging creative and concise solutions.",
    category: "mahalliy",
    image: "/images/local/eupho.png",
    link: "https://eupho.ee/",
  },
  {
    id: 310,
    name: "APIO — Asia-Pacific Informatics Olympiad",
    description:
      "IOI-style contest for the Asian and Western Pacific regions; first organized in 2007 by the Australian IOI team.",
    category: "mahalliy",
    image: "/images/local/apio.png",
    link: "https://apio2025.uz/",
  },
  {
    id: 311,
    name: "Al-Farghani International Physics Olympiad",
    description:
      "Identifies young physics talents; participants are evaluated by an experienced international jury.",
    category: "mahalliy",
    image: "/images/local/fargoniy.png",
    link: "https://www.uzedu.uz/en/news/436",
  },
  {
    id: 312,
    name: "ARBIChO — Abu Rayhan Biruni Chemistry Olympiad",
    description:
      "Prestigious international chemistry competition promoting scientific excellence and collaboration.",
    category: "mahalliy",
    image: "/images/local/beruniy.png",
    link: "https://www.arbicho.uz/",
  },
  {
    id: 313,
    name: "AIBO — International Avicenna Olympiad in Biology",
    description:
      "Offline biology olympiad for ages 15–18; multiple teams from one country may participate.",
    category: "mahalliy",
    image: "/images/local/avicenna.png",
    link: "https://www.aibo.uz/en",
  },
  {
    id: 314,
    name: "KHIMIO — Al-Khwarizmi Math & Informatics Olympiad",
    description:
      "A venue to test skills and showcase innovative ideas at the intersection of math, informatics and technology.",
    category: "mahalliy",
    image: "/images/local/xorazmiy.png",
    link: "https://www.khimio.uz",
  },
  {
    id: 315,
    name: "EGOI — European Girls’ Olympiad in Informatics",
    description:
      "One-week international CS contest for young women, with two competition days and cultural program.",
    category: "mahalliy",
    image: "/images/local/ego.png",
    link: "https://egoi.org/",
  },
  {
    id: 316,
    name: "EGMO — European Girls’ Mathematical Olympiad",
    description:
      "Premier European mathematics competition for high-school girls; launched in 2012 and now includes 50+ countries.",
    category: "mahalliy",
    image: "/images/local/apmo.png",
    link: "https://www.egmo.org/",
  },
  {
    id: 317,
    name: "APMO — Asian-Pacific Mathematical Olympiad",
    description:
      "Annual math competition for Pacific-rim countries; each nation organizes locally under a national coordinator.",
    category: "mahalliy",
    image: "/images/local/egmo.png",
    link: "https://www.apmo-official.org/",
  },

  // IN PARTNERSHIP (placeholder)
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
    <section
      className="py-16 md:py-24 bg-white dark:bg-gray-950 scroll-mt-20"
      id="categories"
    >
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
                {/* Olympiad Logo / Image */}
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
