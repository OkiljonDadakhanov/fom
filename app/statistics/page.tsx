"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type OlympiadFilter = "ibo" | "icho" | "ifo" | "imo" | "iio" | "arbicho";
type YearFilter = "2025" | "2024" | "2023" | "2022" | "2021" | "2020" | "2019" | "2018" | "2017" | "2016" | "2015";

interface Participant {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function Statistics() {
  const [olympiadFilter, setOlympiadFilter] = useState<OlympiadFilter>("ibo");
  const [yearFilter, setYearFilter] = useState<YearFilter>("2024");
  
  // Sample olympiad data
  const olympiads = {
    ibo: {
      id: "ibo",
      name: "IBO",
      fullName: "International Biology Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae. Amet donec aenean dignissim sed nunc integer pretium nulla.",
      participants: [
        {
          id: 1,
          name: "Rodney Murphy",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        {
          id: 2,
          name: "Bianca Wong",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    icho: {
      id: "icho",
      name: "ICHO",
      fullName: "International Chemistry Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed. Nulla tincidunt et imperdiet hendrerit enim sagittis elit vitae.",
      participants: [
        {
          id: 3,
          name: "Alex Johnson",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    ifo: {
      id: "ifo",
      name: "IFO",
      fullName: "International Physics Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed.",
      participants: [
        {
          id: 4,
          name: "Sarah Chen",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    imo: {
      id: "imo",
      name: "IMO",
      fullName: "International Mathematical Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed.",
      participants: [
        {
          id: 5,
          name: "Michael Lee",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    iio: {
      id: "iio",
      name: "IIO",
      fullName: "International Informatics Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed.",
      participants: [
        {
          id: 6,
          name: "Emma Wilson",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    arbicho: {
      id: "arbicho",
      name: "ARBICHO",
      fullName: "Asian Regional Biology Olympiad",
      description: "Morbi id consectetur dignissim at convallis consectetur a. Sed leo id pellentesque ac porta quis. Semper lectus sollicitudin sagittis in sed.",
      participants: [
        {
          id: 7,
          name: "David Park",
          description: "Risus feugiat amet gravida ultrices sit aliquet. Elit turpis mauris non sem sed. Varius lorem erat malesuada elit aenean.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        }
      ]
    }
  };

  const selectedOlympiad = olympiads[olympiadFilter];
  const years: YearFilter[] = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            Statistics
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. 
            Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus 
            pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Olympiad Filters - Horizontal Tabs */}
        <div className="flex flex-wrap mb-8 border-b overflow-x-auto">
          {Object.values(olympiads).map((olympiad) => (
            <button
              key={olympiad.id}
              onClick={() => setOlympiadFilter(olympiad.id as OlympiadFilter)}
              className={cn(
                "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
                olympiadFilter === olympiad.id
                  ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              )}
            >
              {olympiad.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar - Year Filters */}
          <div className="md:col-span-1">
            <div className="space-y-2 sticky top-20">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setYearFilter(year)}
                  className={cn(
                    "w-full text-left py-3 px-4 rounded-lg transition-colors",
                    yearFilter === year
                      ? "bg-gray-100 dark:bg-gray-800 text-[#0E3150] dark:text-white font-medium border-l-4 border-[#0E3150] dark:border-blue-500"
                      : "hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Selected Olympiad */}
          <div className="md:col-span-3">
            {/* Olympiad Details */}
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-[#0E3150] dark:text-white mb-2">
                {selectedOlympiad.name} {yearFilter}
              </h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {selectedOlympiad.fullName}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedOlympiad.description}
              </p>
            </div>

            {/* Participants Section */}
            <div className="space-y-6">
              {selectedOlympiad.participants.map((participant) => (
                <div 
                  key={participant.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                      <Image
                        src={participant.image}
                        alt={participant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0E3150] dark:text-white mb-2">
                      {participant.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {participant.description}
                    </p>
                  </div>
                </div>
              ))}

              {selectedOlympiad.participants.length === 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    No participants found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    There are no participants for {selectedOlympiad.name} in {yearFilter}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
