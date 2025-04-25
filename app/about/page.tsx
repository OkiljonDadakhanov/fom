"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define team member type
interface TeamMember {
  id: number;
  name: string;
  position: string;
  subject?: string;
  year: string;
  email: string;
  image: string;
  bio: string[];
}

// Define filter types
type PositionFilter =
  | "all"
  | "rahbariyat"
  | "bolimlar"
  | "fan-kengashi"
  | "terma-jamoa";
type SubjectFilter =
  | "all"
  | "matematika"
  | "fizika"
  | "informatika"
  | "kimyo"
  | "biologiya";
type YearFilter =
  | "all"
  | "2025"
  | "2024"
  | "2023"
  | "2022"
  | "2021"
  | "2020"
  | "2019";

export default function About() {
  const [activeTab, setActiveTab] = useState<"maqsad" | "vazifalar">("maqsad");
  const [positionFilter, setPositionFilter] = useState<PositionFilter>("all");
  const [subjectFilter, setSubjectFilter] = useState<SubjectFilter>("all");
  const [yearFilter, setYearFilter] = useState<YearFilter>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const objectives = [
    {
      id: 1,
      text: "Fames suspendisse mi in neque arcu commodo. Sapien enim sed placerat neque sollicitudin suspendisse ornare aliquet. Tellus orci dolor at sem nisi. Dictumst amet turpis non integer. Mauris ac erat turpis ullamcorper vulputate.",
    },
    {
      id: 2,
      text: "In feugiat velit eu tellus. Ut looreet ullamcorper facilisi risus aliquet ultrices donec tellus. Risus cursus eget pharetra vestibulum nisl ullamcorper. Feugiat mattis ultrices proin sit ac sollicitudin.",
    },
    {
      id: 3,
      text: "Nascetur in curabitur commodo viverra arcu nulla nunc nibh imperdiet. Condimentum nisl est fermentum arcu. Ultricies neque sodales viverra diam dolor justo. Luctus egestas sapien venenatis rhoncus sed cursus facilisis massa suspendisse. Vivamus lorem duis rhoncus sit fringilla euismod aliquam ac vestibulum.",
    },
    {
      id: 4,
      text: "Ipsum commodo convallis integer imperdiet pharetra adipiscing. Sed eget volutpat aliquam vivamus augue mi morbi nulla nisi. Nibh nullam vivamus interdum auctor ornare locus.",
    },
    {
      id: 5,
      text: "Suspendisse non non morbi velit massa amet scelerisque. Suscipit adipiscing scelerisque quam pulvinar volutpat.",
    },
  ];

  // Sample team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Rodney Murphy",
      position: "rahbariyat",
      subject: "fizika",
      year: "2022",
      email: "r.murphy@soc.uz",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      bio: [
        "Fames suspendisse mi in neque arcu commodo.",
        "Integer vestibulum at malesuada pellentesque porttitor proin eu. Viverra dui eros massa tellus nunc. Eu commodo nulla ullamcorper fringilla mi.",
        "Sapien convallis quam lorem venenatis vitae posuere cursus nibh. Turpis ultrices purus ut vehicula. Nibh faucibus tellus pellentesque lobortis ullamcorper cursus cursus nibh augue.",
      ],
    },
    {
      id: 2,
      name: "Axel Phelps",
      position: "bolimlar",
      subject: "matematika",
      year: "2023",
      email: "p.axel@soc.uz",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
      bio: [
        "In feugiat velit eu tellus. Ut looreet ullamcorper",
        "Nascetur in curabitur commodo viverra arcu nulla nunc nibh imperdiet. Condimentum nisl est fer",
        "Ipsum commodo convallis",
        "Suspendisse non non morbi velit massa amet scelerisque. Suscipit adipiscing scelerisque",
      ],
    },
    {
      id: 3,
      name: "Sarah Chen",
      position: "fan-kengashi",
      subject: "kimyo",
      year: "2021",
      email: "s.chen@soc.uz",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      bio: [
        "Fames suspendisse mi in neque arcu commodo.",
        "Integer vestibulum at malesuada pellentesque porttitor proin eu.",
      ],
    },
    {
      id: 4,
      name: "Michael Lee",
      position: "terma-jamoa",
      subject: "informatika",
      year: "2024",
      email: "m.lee@soc.uz",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      bio: [
        "In feugiat velit eu tellus. Ut looreet ullamcorper",
        "Nascetur in curabitur commodo viverra arcu nulla nunc nibh imperdiet.",
      ],
    },
    {
      id: 5,
      name: "Emma Wilson",
      position: "terma-jamoa",
      subject: "biologiya",
      year: "2020",
      email: "e.wilson@soc.uz",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      bio: [
        "Suspendisse non non morbi velit massa amet scelerisque.",
        "Sapien convallis quam lorem venenatis vitae posuere cursus nibh.",
      ],
    },
  ];

  // Filter team members based on selected filters
  const filteredMembers = teamMembers.filter((member) => {
    const matchesPosition =
      positionFilter === "all" || member.position === positionFilter;
    const matchesSubject =
      subjectFilter === "all" || member.subject === subjectFilter;
    const matchesYear = yearFilter === "all" || member.year === yearFilter;
    return matchesPosition && matchesSubject && matchesYear;
  });

  // Position filter options
  const positionOptions = [
    { id: "rahbariyat", label: "Rahbariyat" },
    { id: "bolimlar", label: "Bo'limlar" },
    { id: "fan-kengashi", label: "Fan Kengashi" },
    { id: "terma-jamoa", label: "Terma Jamoa" },
  ];

  // Subject filter options
  const subjectOptions = [
    { id: "matematika", label: "Matematika" },
    { id: "fizika", label: "Fizika" },
    { id: "informatika", label: "Informatika" },
    { id: "kimyo", label: "Kimyo" },
    { id: "biologiya", label: "Biologiya" },
  ];

  // Year filter options
  const yearOptions = [
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
    { id: "2021", label: "2021" },
    { id: "2020", label: "2020" },
    { id: "2019", label: "2019" },
  ];

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* About SOC Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
            About SOC
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl text-lg leading-relaxed">
            In facilisi dolor imperdiet magna. Massa in amet integer tellus
            purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet
            eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet
            platea pulvinar consectetur sed faucibus sed netus.
          </p>
        </section>

        {/* Tabs Section */}
        <section className="mb-20">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex">
              <button
                onClick={() => setActiveTab("maqsad")}
                className={cn(
                  "py-4 px-8 text-lg font-medium border-b-2 focus:outline-none",
                  activeTab === "maqsad"
                    ? "border-[#0E3150] text-[#0E3150] dark:border-blue-500 dark:text-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                Maqsad
              </button>
              <button
                onClick={() => setActiveTab("vazifalar")}
                className={cn(
                  "py-4 px-8 text-lg font-medium border-b-2 focus:outline-none",
                  activeTab === "vazifalar"
                    ? "border-[#0E3150] text-[#0E3150] dark:border-blue-500 dark:text-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                Vazifalar
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {activeTab === "maqsad" && (
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  In facilisi dolor imperdiet magna. Massa in amet integer
                  tellus purus sem sed bibendum. Sit mollis amet faucibus
                  dapibus lectus amet eget urna velit. Purus nulla donec purus
                  pulvinar platea. Imperdiet platea pulvinar consectetur sed
                  faucibus sed netus.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Fames suspendisse mi in neque arcu commodo. Sapien enim sed
                  placerat neque sollicitudin suspendisse ornare aliquet. Tellus
                  orci dolor at sem nisi. Dictumst amet turpis non integer.
                  Mauris ac erat turpis ullamcorper vulputate.
                </p>
              </div>
            )}

            {activeTab === "vazifalar" && (
              <div className="space-y-8">
                {objectives.map((objective) => (
                  <div key={objective.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-[#0E3150] dark:border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#0E3150] dark:bg-blue-500"></div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold mb-10 text-[#0E3150] dark:text-white">
            Team
          </h2>

          {/* Filters */}
          <div className="mb-10">
            {/* Position Filter */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-2">
              <button
                onClick={() => setPositionFilter("all")}
                className={cn(
                  "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                  positionFilter === "all"
                    ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                All
              </button>
              {positionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPositionFilter(option.id as PositionFilter)}
                  className={cn(
                    "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                    positionFilter === option.id
                      ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Subject Filter */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 mb-2">
              <button
                onClick={() => setSubjectFilter("all")}
                className={cn(
                  "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                  subjectFilter === "all"
                    ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                All
              </button>
              {subjectOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSubjectFilter(option.id as SubjectFilter)}
                  className={cn(
                    "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                    subjectFilter === option.id
                      ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-1">
              <button
                onClick={() => setYearFilter("all")}
                className={cn(
                  "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                  yearFilter === "all"
                    ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                All
              </button>
              {yearOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setYearFilter(option.id as YearFilter)}
                  className={cn(
                    "py-3 px-4 text-sm md:text-base font-medium focus:outline-none w-full rounded-md transition-colors",
                    yearFilter === option.id
                      ? "bg-[#0E3150] dark:bg-[#010B2B] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Team Members and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Team Members List */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-semibold text-[#0E3150] dark:text-white mb-4">
                Team Members
              </h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => setSelectedMember(member)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all",
                        selectedMember?.id === member.id
                          ? "bg-[#0E3150]/10 dark:bg-[#010B2B]/30 shadow-md border border-[#0E3150]/20 dark:border-[#010B2B]/50"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900 border border-transparent"
                      )}
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#0E3150]/20 dark:border-[#010B2B]/50">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          {member.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm capitalize">
                          {
                            positionOptions.find(
                              (p) => p.id === member.position
                            )?.label
                          }
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">
                      No team members match the selected filters
                    </p>
                    <button
                      onClick={() => {
                        setPositionFilter("all");
                        setSubjectFilter("all");
                        setYearFilter("all");
                      }}
                      className="mt-4 text-[#0E3150] dark:text-blue-400 font-medium hover:underline"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Member Details */}
            <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0E3150] dark:text-white mb-6">
                Member Details
              </h3>
              {selectedMember ? (
                <div>
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-[#0E3150]/20 dark:border-[#010B2B]/50 shadow-md">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0E3150] dark:text-white mb-2 text-center md:text-left">
                        {
                          positionOptions.find(
                            (p) => p.id === selectedMember.position
                          )?.label
                        }
                      </h3>
                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3 text-center md:text-left">
                        {selectedMember.name}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
                        {selectedMember.subject && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300">
                            {
                              subjectOptions.find(
                                (s) => s.id === selectedMember.subject
                              )?.label
                            }
                          </span>
                        )}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300">
                          {selectedMember.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                        <span className="font-medium">Email:</span>{" "}
                        {selectedMember.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h5 className="font-medium text-[#0E3150] dark:text-white">
                      Biography
                    </h5>
                    {selectedMember.bio.map((paragraph, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full border-2 border-[#0E3150]/30 dark:border-[#010B2B]/50 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0E3150] dark:bg-[#010B2B]/80"></div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">
                    Select a team member to view details
                  </p>
                  <p className="mt-2">
                    Click on any team member from the list to see their
                    information
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
