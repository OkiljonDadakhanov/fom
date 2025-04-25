"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type NewsCategory = "all" | "statistics" | "olimpiads" | "event" | "methodology" | "partners" | "video";

export default function NewsEvents() {
  const [categoryFilter, setCategoryFilter] = useState<NewsCategory>("all");
  
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Chemistry Olimpiad among Teachers",
      category: "olimpiads",
      date: "21/03/2025",
      views: 568,
      image: "https://plus.unsplash.com/premium_photo-1677541367608-7dd2e24b45a6?q=80&w=500&auto=format&fit=crop",
      excerpt: "Annual chemistry competition brings together educators from across the country",
      slug: "chemistry-olimpiad-teachers",
      action: { type: "open", url: "/news-events/chemistry-olimpiad-teachers" }
    },
    {
      id: 2,
      title: "Monthly Statistics of Participants",
      category: "statistics",
      date: "1/02/2025",
      views: 1024,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
      excerpt: "Record participation numbers in science olympiads across all disciplines",
      slug: "monthly-statistics",
      action: { type: "open", url: "/news-events/monthly-statistics" }
    },
    {
      id: 3,
      title: "Closing Ceremony of IMO and IFO",
      category: "event",
      date: "15/01/2024",
      views: 568,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop",
      excerpt: "Celebrating achievements at the International Mathematics and Physics Olympiads",
      slug: "closing-ceremony",
      action: { type: "view", url: "/news-events/closing-ceremony" }
    },
    {
      id: 4,
      title: "International Conference Journal",
      category: "methodology",
      date: "21/03/2025",
      views: 568,
      image: "",
      excerpt: "Arcu urna felis id venenatis et elementum lorem tincidunt sit. Vel odio lobortis commodo adipiscing. Eu tortor est integer arcu nunc, cursus lectus molestie.",
      type: "press-release",
      releaseNumber: "№ 12-2025",
      slug: "conference-journal",
      action: { type: "read", url: "/news-events/conference-journal" }
    },
    {
      id: 5,
      title: "Memorandum with IT Park Tashkent",
      category: "partners",
      date: "1/02/2025",
      views: 1024,
      image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=500&auto=format&fit=crop",
      excerpt: "Strategic partnership to enhance technology education in science olympiads",
      slug: "memorandum-it-park",
      action: { type: "open", url: "/news-events/memorandum-it-park" }
    },
    {
      id: 6,
      title: "Masterclass for Public School Teachers",
      category: "video",
      date: "15/01/2024",
      views: 568,
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=500&auto=format&fit=crop",
      excerpt: "Professional development workshop for science educators",
      slug: "masterclass-teachers",
      action: { type: "play", url: "/news-events/masterclass-teachers" }
    }
  ];

  // Filter news items by category
  const filteredNews = categoryFilter === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === categoryFilter);

  // Function to get category label
  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      "statistics": "Statistics",
      "olimpiads": "Olimpiads",
      "event": "Event",
      "methodology": "Methodology",
      "partners": "Partners",
      "video": "Video"
    };
    return categories[category] || category;
  };

  // Function to get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "statistics": "bg-pink-500",
      "olimpiads": "bg-amber-500",
      "event": "bg-purple-500",
      "methodology": "bg-green-500",
      "partners": "bg-blue-500",
      "video": "bg-red-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            News
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. 
            Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus 
            pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Category Filters */}
        <div className="flex flex-wrap mb-8 border-b overflow-x-auto">
          <button
            onClick={() => setCategoryFilter("all")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "all"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            All
          </button>
          <button
            onClick={() => setCategoryFilter("statistics")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "statistics"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Statistics
          </button>
          <button
            onClick={() => setCategoryFilter("olimpiads")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "olimpiads"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Olimpiads
          </button>
          <button
            onClick={() => setCategoryFilter("event")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "event"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Event
          </button>
          <button
            onClick={() => setCategoryFilter("methodology")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "methodology"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Methodology
          </button>
          <button
            onClick={() => setCategoryFilter("partners")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "partners"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Partners
          </button>
          <button
            onClick={() => setCategoryFilter("video")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative whitespace-nowrap",
              categoryFilter === "video"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Video
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col"
            >
              {/* News Image */}
              {item.image ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className={`${getCategoryColor(item.category)} text-white text-xs font-medium px-2.5 py-1 rounded`}>
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  {item.type && (
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.type === "press-release" ? "Press Release" : item.type}
                      </span>
                      {item.releaseNumber && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.releaseNumber}
                        </span>
                      )}
                    </div>
                  )}
                  <span className={`${getCategoryColor(item.category)} text-white text-xs font-medium px-2.5 py-1 rounded`}>
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
              )}
              
              {/* News Content */}
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-[#0E3150] dark:text-white mb-2">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.excerpt}
                  </p>
                )}
              </div>
              
              {/* News Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.views} views</span>
                </div>
                <Link 
                  href={item.action.url}
                  className="text-[#0E3150] dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  {item.action.type === "open" && "Open"}
                  {item.action.type === "view" && "View"}
                  {item.action.type === "read" && "Read"}
                  {item.action.type === "play" && "Play"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredNews.length === 0 && (
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No news found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              There are no news items in this category yet.
            </p>
            <button
              onClick={() => setCategoryFilter("all")}
              className="mt-4 px-4 py-2 bg-[#0E3150] text-white rounded-md hover:bg-[#0E3150]/90 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              View all news
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
