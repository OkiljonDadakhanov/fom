"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Categories for filtering
const categories = [
  { id: "all", name: "ALL", active: true },
  { id: "olimpiads", name: "Olimpiads", active: false },
  { id: "statistics", name: "Statistics", active: false },
  { id: "methodology", name: "Methodology", active: false },
  { id: "events", name: "Events", active: false },
  { id: "images-videos", name: "Images and Videos", active: false },
];

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Chemistry Olimpiad among Teachers",
    category: "olimpiads",
    tag: "Olimpiad",
    date: "21/03/2025",
    views: 568,
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500&auto=format&fit=crop",
    action: "Open",
  },
  {
    id: 2,
    title: "Monthly Statistics of Participants",
    category: "statistics",
    tag: "Statistics",
    date: "11/01/2025",
    views: 1024,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    action: "Open",
  },
  {
    id: 3,
    title: "Closing Ceremony of IMO and IFO",
    category: "events",
    tag: "Event",
    date: "15/01/2025",
    views: 768,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop",
    action: "View",
  },
  {
    id: 4,
    title: "International Conference Journal",
    category: "methodology",
    tag: "Methodology",
    date: "27/01/2025",
    views: 568,
    description:
      "Arcu urna felis id porttibus et elementum enim tincidunt et vel odio lobortis commodo pellentesque id tempor sed vitae.",
    action: "Read",
    type: "Press Release",
    number: "№ 12-2025",
  },
  {
    id: 5,
    title: "Memorandum with IT Park Tashkent",
    category: "events",
    tag: "Partner",
    date: "11/02/2025",
    views: 1024,
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=500&auto=format&fit=crop",
    action: "Open",
  },
  {
    id: 6,
    title: "Masterclass for Public School Teachers",
    category: "images-videos",
    tag: "Video",
    date: "18/01/2025",
    views: 568,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500&auto=format&fit=crop",
    action: "Play",
  },
];

export default function NewsEvents() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter news items based on active category
  const filteredNews =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <section
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 scroll-mt-20"
      id="news"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">News and Events</h2>

          {/* Category filters - desktop */}
          <div className="hidden md:flex flex-col items-end space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-right transition-colors ${
                  activeCategory === category.id
                    ? "text-[#0E3150] dark:text-white font-medium"
                    : "text-muted-foreground hover:text-[#0E3150] dark:hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category filters - mobile */}
          <div className="md:hidden">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#0E3150] dark:bg-[#010B2B] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              {item.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Tag overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full text-white ${
                        item.tag === "Olimpiad"
                          ? "bg-amber-500"
                          : item.tag === "Statistics"
                          ? "bg-pink-500"
                          : item.tag === "Event"
                          ? "bg-purple-500"
                          : item.tag === "Methodology"
                          ? "bg-green-500"
                          : item.tag === "Partner"
                          ? "bg-blue-500"
                          : item.tag === "Video"
                          ? "bg-orange-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                {/* Special header for press releases */}
                {item.type && (
                  <div className="flex justify-between items-center mb-2 text-xs text-muted-foreground">
                    <span>{item.type}</span>
                    <span>{item.number}</span>
                  </div>
                )}

                {/* Tag for items without images */}
                {!item.image && item.tag && (
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full text-white mb-3 ${
                      item.tag === "Olimpiad"
                        ? "bg-amber-500"
                        : item.tag === "Statistics"
                        ? "bg-pink-500"
                        : item.tag === "Event"
                        ? "bg-purple-500"
                        : item.tag === "Methodology"
                        ? "bg-green-500"
                        : item.tag === "Partner"
                        ? "bg-blue-500"
                        : item.tag === "Video"
                        ? "bg-orange-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                {/* Description if available */}
                {item.description && (
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                )}

                {/* Date and views */}
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>{item.date}</span>
                  <span>{item.views} views</span>
                </div>

                {/* Action button */}
                <div className="flex justify-between items-center">
                  <button className="text-[#0E3150] dark:text-blue-400 font-medium flex items-center hover:underline">
                    {item.action}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
