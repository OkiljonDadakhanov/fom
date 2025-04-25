"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function Partners() {
  const [activeTab, setActiveTab] = useState<"mahalliy" | "xalqaro">(
    "mahalliy"
  );

  const partners = {
    mahalliy: [
      {
        id: 1,
        name: "IT Park",
        logo: "/partners/it-park.png",
        description:
          "In non a sed tincidunt fermentum tortor etiam tellus. Aliquet vitae iaculis sagittis sit nibh risus. Morbi non tempus malesuada lobortis leo mattis.",
        website: "https://it-park.uz/",
      },
      {
        id: 2,
        name: "Uzinfocom",
        logo: "/partners/uzinfocom.png",
        description:
          "In non a sed tincidunt fermentum tortor etiam tellus. Aliquet vitae iaculis sagittis sit nibh risus. Morbi non tempus malesuada lobortis leo mattis.",
        website: "https://uzinfocom.uz/",
      },
      {
        id: 3,
        name: "Uztelecom",
        logo: "/partners/uztelecom.png",
        description:
          "In non a sed tincidunt fermentum tortor etiam tellus. Aliquet vitae iaculis sagittis sit nibh risus. Morbi non tempus malesuada lobortis leo mattis.",
        website: "https://uztelecom.uz/",
      },
    ],
    xalqaro: [
      {
        id: 4,
        name: "Google",
        logo: "https://plus.unsplash.com/premium_photo-1677367072566-4879d6793d1c?q=80&w=200&auto=format&fit=crop",
        description:
          "In non a sed tincidunt fermentum tortor etiam tellus. Aliquet vitae iaculis sagittis sit nibh risus. Morbi non tempus malesuada lobortis leo mattis.",
        website: "https://google.com/",
      },
      {
        id: 5,
        name: "Microsoft",
        logo: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?q=80&w=200&auto=format&fit=crop",
        description:
          "In non a sed tincidunt fermentum tortor etiam tellus. Aliquet vitae iaculis sagittis sit nibh risus. Morbi non tempus malesuada lobortis leo mattis.",
        website: "https://microsoft.com/",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            Partners
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus
            purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet
            eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet
            platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex mb-12 border-b">
          <button
            onClick={() => setActiveTab("mahalliy")}
            className={cn(
              "py-3 px-8 text-lg font-medium focus:outline-none relative",
              activeTab === "mahalliy"
                ? "text-[#0E3150] dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Mahalliy
            {activeTab === "mahalliy" && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2980b9] dark:bg-[#2980b9]"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("xalqaro")}
            className={cn(
              "py-3 px-8 text-lg font-medium focus:outline-none relative",
              activeTab === "xalqaro"
                ? "text-[#0E3150] dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Xalqaro
            {activeTab === "xalqaro" && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2980b9] dark:bg-[#2980b9]"></span>
            )}
          </button>
        </div>

        {/* Partners List */}
        <div className="space-y-16">
          {partners[activeTab].map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-[#2980b9] dark:text-[#2980b9]">
                  {partner.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2980b9] hover:text-[#0E3150] dark:hover:text-blue-400 font-medium"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
