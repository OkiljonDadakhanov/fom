"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function Methodology() {
  const [activeTab, setActiveTab] = useState<
    "online-classes" | "video-tutorials" | "journals" | "qollanmalar" | "maqolalar" | "olimpiada-savollari"
  >("online-classes");

  // Sample data for online classes
  const onlineClasses = [
    { id: 1, name: "Online Class for prepare IMO Olympiad", link: "/methodology/classes/imo" },
    { id: 2, name: "Online Class for prepare IBO Olympiad", link: "/methodology/classes/ibo" },
    { id: 3, name: "Online Class for prepare ICHO Olympiad", link: "/methodology/classes/icho" },
    { id: 4, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo" },
    { id: 5, name: "Online Class for prepare IIO Olympiad", link: "/methodology/classes/iio" },
    { id: 6, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-2" },
    { id: 7, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-3" },
    { id: 8, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-4" },
    { id: 9, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-5" },
    { id: 10, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-6" },
    { id: 11, name: "Online Class for prepare IFO Olympiad", link: "/methodology/classes/ifo-7" },
  ];

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            Methodology
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. 
            Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus 
            pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex flex-wrap mb-8 border-b">
          <button
            onClick={() => setActiveTab("online-classes")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "online-classes"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Online Classes
          </button>
          <button
            onClick={() => setActiveTab("video-tutorials")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "video-tutorials"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Video Tutorials
          </button>
          <button
            onClick={() => setActiveTab("journals")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "journals"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Journals
          </button>
          <button
            onClick={() => setActiveTab("qollanmalar")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "qollanmalar"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Qo'llanmalar
          </button>
          <button
            onClick={() => setActiveTab("maqolalar")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "maqolalar"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Maqolalar
          </button>
          <button
            onClick={() => setActiveTab("olimpiada-savollari")}
            className={cn(
              "py-3 px-6 text-base md:text-lg font-medium focus:outline-none relative",
              activeTab === "olimpiada-savollari"
                ? "text-[#0E3150] dark:text-white border-b-2 border-[#0E3150] dark:border-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
          >
            Olimpiada Savollari
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === "online-classes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onlineClasses.map((course) => (
                <Link 
                  key={course.id} 
                  href={course.link}
                  className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#0E3150] dark:hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-medium text-[#0E3150] dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      View details
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0E3150] dark:text-white"
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
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "video-tutorials" && (
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Video Tutorials Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We're currently preparing high-quality video tutorials for various olympiad subjects.
              </p>
            </div>
          )}

          {activeTab === "journals" && (
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Journals Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Academic journals and research papers will be available here soon.
              </p>
            </div>
          )}

          {activeTab === "qollanmalar" && (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Qo'llanmalar Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Educational guides and manuals will be available here soon.
              </p>
            </div>
          )}

          {activeTab === "maqolalar" && (
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
                Maqolalar Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Articles and publications will be available here soon.
              </p>
            </div>
          )}

          {activeTab === "olimpiada-savollari" && (
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Olimpiada Savollari Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Olympiad questions and practice problems will be available here soon.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
