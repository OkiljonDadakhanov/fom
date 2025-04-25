"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CategoryFilter =
  | "mahalliy"
  | "hamkorlikdagi"
  | "nufuzli-xalqaro"
  | "xalqaro"
  | "mintaqaviy-xalqaro";
type OlympiadFilter = "imo" | "ibo" | "icho" | "ifo" | "iio" | "arbicho";

export default function Olympiads() {
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilter>("xalqaro");
  const [olympiadFilter, setOlympiadFilter] = useState<OlympiadFilter>("ibo");

  // Sample olympiad data
  const olympiads = {
    imo: {
      id: "imo",
      name: "IMO",
      fullName: "International Mathematical Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "/olympiads/math-olympiad-1.jpg",
        "/olympiads/math-olympiad-2.jpg",
      ],
    },
    ibo: {
      id: "ibo",
      name: "IBO",
      fullName: "International Biology Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "https://plus.unsplash.com/premium_photo-1682096202071-d7b6f5c4a991?q=80&w=500&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1682096202071-d7b6f5c4a991?q=80&w=500&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1682096202071-d7b6f5c4a991?q=80&w=500&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1682096202071-d7b6f5c4a991?q=80&w=500&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1682096202071-d7b6f5c4a991?q=80&w=500&auto=format&fit=crop",
      ],
    },
    icho: {
      id: "icho",
      name: "ICHO",
      fullName: "International Chemistry Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "/olympiads/chemistry-olympiad-1.jpg",
        "/olympiads/chemistry-olympiad-2.jpg",
      ],
    },
    ifo: {
      id: "ifo",
      name: "IFO",
      fullName: "International Physics Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "/olympiads/physics-olympiad-1.jpg",
        "/olympiads/physics-olympiad-2.jpg",
      ],
    },
    iio: {
      id: "iio",
      name: "IIO",
      fullName: "International Informatics Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "/olympiads/informatics-olympiad-1.jpg",
        "/olympiads/informatics-olympiad-2.jpg",
      ],
    },
    arbicho: {
      id: "arbicho",
      name: "ARBICHO",
      fullName: "Asian Regional Biology Olympiad",
      description:
        "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      year: "2024",
      images: [
        "/olympiads/arbicho-olympiad-1.jpg",
        "/olympiads/arbicho-olympiad-2.jpg",
      ],
    },
  };

  const selectedOlympiad = olympiads[olympiadFilter];

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            Olimpiads
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus
            purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet
            eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet
            platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Category Filters */}
        <div className="flex flex-wrap mb-8 border-b">
          <button
            onClick={() => setCategoryFilter("mahalliy")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              categoryFilter === "mahalliy"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Mahalliy
          </button>
          <button
            onClick={() => setCategoryFilter("hamkorlikdagi")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              categoryFilter === "hamkorlikdagi"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Hamkorlikdagi
          </button>
          <button
            onClick={() => setCategoryFilter("nufuzli-xalqaro")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              categoryFilter === "nufuzli-xalqaro"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Nufuzli xalqaro
          </button>
          <button
            onClick={() => setCategoryFilter("xalqaro")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              categoryFilter === "xalqaro"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Xalqaro
          </button>
          <button
            onClick={() => setCategoryFilter("mintaqaviy-xalqaro")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              categoryFilter === "mintaqaviy-xalqaro"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Mintaqaviy xalqaro
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar - Olympiad Filters */}
          <div className="md:col-span-1">
            <div className="space-y-2 sticky top-20">
              {Object.values(olympiads).map((olympiad) => (
                <button
                  key={olympiad.id}
                  onClick={() =>
                    setOlympiadFilter(olympiad.id as OlympiadFilter)
                  }
                  className={cn(
                    "w-full text-left py-3 px-4 rounded-lg transition-colors",
                    olympiadFilter === olympiad.id
                      ? "bg-gray-100 dark:bg-gray-800 text-[#0E3150] dark:text-white font-medium border-l-4 border-[#0E3150] dark:border-blue-500"
                      : "hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
                  )}
                >
                  {olympiad.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Selected Olympiad */}
          <div className="md:col-span-3">
            {/* Olympiad Details */}
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-[#0E3150] dark:text-white mb-2">
                {selectedOlympiad.name} {selectedOlympiad.year}
              </h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {selectedOlympiad.fullName}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedOlympiad.description}
              </p>
            </div>

            {/* Images Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-[#0E3150] dark:text-white mb-6">
                Images
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedOlympiad.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <Image
                      src={image}
                      alt={`${selectedOlympiad.name} image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
