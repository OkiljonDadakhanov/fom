"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Search } from "lucide-react";

interface RelatedLink {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function RelatedLinks() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample related links data
  const relatedLinks: RelatedLink[] = [
    {
      id: 1,
      title: "Sertificate Checking Platform",
      description:
        "Perferend Laudantiu eu Dignissi Interdu, Consequatut Scelersqu, Pellente",
      imageUrl:
        "https://images.unsplash.com/photo-1569017388730-020b5f80a004?q=80&w=100&auto=format&fit=crop",
      url: "https://example.com/certificate-checking",
    },
    {
      id: 2,
      title: "Olympiad Camp",
      description:
        "Perferend Laudantiu eu Dignissi Interdu, Consequatut Scelersqu, Pellente",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=100&auto=format&fit=crop",
      url: "https://example.com/olympiad-camp",
    },
    {
      id: 3,
      title: "Online Learning Platform",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
      imageUrl:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=100&auto=format&fit=crop",
      url: "https://example.com/online-learning",
    },
    {
      id: 4,
      title: "Science Olympiad Foundation",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et",
      imageUrl:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=100&auto=format&fit=crop",
      url: "https://example.com/olympiad-foundation",
    },
    {
      id: 5,
      title: "International Science Competitions",
      description: "Cras mattis consectetur purus sit amet fermentum",
      imageUrl:
        "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=100&auto=format&fit=crop",
      url: "https://example.com/international-competitions",
    },
  ];

  // Filter links based on search query
  const filteredLinks = relatedLinks.filter(
    (link) =>
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0E3150] dark:text-white">
            Related Links
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Explore these valuable resources and partner platforms related to
            science olympiads and educational opportunities.
          </p>
        </section>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={link.imageUrl}
                      alt={link.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-card-foreground">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#0E3150] hover:bg-[#0E3150]/90 text-white rounded-md text-sm font-medium transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 bg-muted rounded-lg">
              <Search className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <h3 className="text-lg font-medium text-foreground mb-1">
                No results found
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                We couldn't find any links matching your search.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-block px-4 py-2 bg-[#0E3150] hover:bg-[#0E3150]/90 text-white rounded-md text-sm font-medium transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
