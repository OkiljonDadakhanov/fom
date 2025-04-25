"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowLeftIcon, ShareIcon } from "lucide-react";

// Define the news item type
interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  views: number;
  image: string;
  excerpt: string;
  content?: string;
  author?: string;
  type?: string;
  releaseNumber?: string;
  action: {
    type: string;
    url: string;
  };
}

// Sample news data - in a real app, this would come from an API or database
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Chemistry Olimpiad among Teachers",
    category: "olimpiads",
    date: "21/03/2025",
    views: 568,
    image:
      "https://plus.unsplash.com/premium_photo-1677541367608-7dd2e24b45a6?q=80&w=500&auto=format&fit=crop",
    excerpt:
      "Annual chemistry competition brings together educators from across the country",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Key Highlights</h3>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
    `,
    author: "Lucca Navarro",
    action: { type: "open", url: "/news-events/chemistry-olimpiad-teachers" },
  },
  {
    id: 2,
    title: "Monthly Statistics of Participants",
    category: "statistics",
    date: "1/02/2025",
    views: 1024,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    excerpt:
      "Record participation numbers in science olympiads across all disciplines",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Participation by Subject</h3>
      
      <ul>
        <li>Mathematics: 1,245 participants</li>
        <li>Physics: 987 participants</li>
        <li>Chemistry: 876 participants</li>
        <li>Biology: 1,102 participants</li>
        <li>Informatics: 754 participants</li>
      </ul>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
    `,
    author: "Elena Kuznetsova",
    action: { type: "open", url: "/news-events/monthly-statistics" },
  },
  {
    id: 3,
    title: "Closing Ceremony of IMO and IFO",
    category: "event",
    date: "15/01/2024",
    views: 568,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop",
    excerpt:
      "Celebrating achievements at the International Mathematics and Physics Olympiads",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Medal Winners</h3>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
    `,
    author: "Mikhail Petrov",
    action: { type: "view", url: "/news-events/closing-ceremony" },
  },
  {
    id: 4,
    title: "International Conference Journal",
    category: "methodology",
    date: "21/03/2025",
    views: 568,
    image: "",
    excerpt:
      "Arcu urna felis id venenatis et elementum lorem tincidunt sit. Vel odio lobortis commodo adipiscing. Eu tortor est integer arcu nunc, cursus lectus molestie.",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Conference Proceedings</h3>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
    `,
    author: "Dr. Sarah Johnson",
    type: "press-release",
    releaseNumber: "№ 12-2025",
    action: { type: "read", url: "/news-events/conference-journal" },
  },
  {
    id: 5,
    title: "Memorandum with IT Park Tashkent",
    category: "partners",
    date: "1/02/2025",
    views: 1024,
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=500&auto=format&fit=crop",
    excerpt:
      "Strategic partnership to enhance technology education in science olympiads",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Partnership Goals</h3>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
    `,
    author: "Alisher Usmanov",
    action: { type: "open", url: "/news-events/memorandum-it-park" },
  },
  {
    id: 6,
    title: "Masterclass for Public School Teachers",
    category: "video",
    date: "15/01/2024",
    views: 568,
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=500&auto=format&fit=crop",
    excerpt: "Professional development workshop for science educators",
    content: `
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <h3>Workshop Topics</h3>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <p>In facilisi dolor imperdiet magna. Massa in amet integer tellus purus sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea pulvinar consectetur sed faucibus sed netus.</p>
      
      <div className="video-embed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Masterclass Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    `,
    author: "Prof. David Chen",
    action: { type: "play", url: "/news-events/masterclass-teachers" },
  },
];

// Function to get category label
const getCategoryLabel = (category: string) => {
  const categories: Record<string, string> = {
    statistics: "Statistics",
    olimpiads: "Olimpiads",
    event: "Event",
    methodology: "Methodology",
    partners: "Partners",
    video: "Video",
  };
  return categories[category] || category;
};

// Function to get category color
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    statistics: "bg-pink-500",
    olimpiads: "bg-amber-500",
    event: "bg-purple-500",
    methodology: "bg-green-500",
    partners: "bg-blue-500",
    video: "bg-red-500",
  };
  return colors[category] || "bg-gray-500";
};

export default function NewsDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [shareTooltip, setShareTooltip] = useState(false);

  // In a real app, you would fetch the news item from an API
  // Here we're just finding it in our sample data
  useEffect(() => {
    // Extract the news item ID from the slug
    const findNewsItem = newsItems.find((item) => {
      const itemSlug = item.action.url.split("/").pop();
      return itemSlug === slug;
    });

    setNewsItem(findNewsItem || null);
  }, [slug]);

  // Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: newsItem?.title || "News",
          text: newsItem?.excerpt || "",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      setShareTooltip(true);
      setTimeout(() => setShareTooltip(false), 2000);
    }
  };

  if (!newsItem) {
    return (
      <div className="flex flex-col min-h-screen py-16">
        <Container>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              News item not found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The news item you are looking for does not exist or has been
              removed.
            </p>
            <Link
              href="/news-events"
              className="px-6 py-3 bg-[#0E3150] text-white rounded-lg hover:bg-[#0A2540] dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Back to News
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        {/* Back button */}
        <Link
          href="/news-events"
          className="inline-flex items-center text-[#0E3150] dark:text-blue-400 mb-6 hover:underline"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to News
        </Link>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Header with image */}
          {newsItem.image && (
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`${getCategoryColor(
                        newsItem.category
                      )} text-white text-xs font-medium px-2.5 py-1 rounded`}
                    >
                      {getCategoryLabel(newsItem.category)}
                    </span>
                    <div className="relative">
                      <button
                        onClick={handleShare}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                        aria-label="Share"
                      >
                        <ShareIcon className="h-5 w-5" />
                      </button>
                      {shareTooltip && (
                        <div className="absolute right-0 top-full mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                          Link copied!
                        </div>
                      )}
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {newsItem.title}
                  </h1>
                  <div className="flex items-center text-sm text-gray-200">
                    {newsItem.author && (
                      <>
                        <span>{newsItem.author}</span>
                        <span className="mx-2">•</span>
                      </>
                    )}
                    <span>{newsItem.date}</span>
                    <span className="mx-2">•</span>
                    <span>{newsItem.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Header without image */}
          {!newsItem.image && (
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`${getCategoryColor(
                    newsItem.category
                  )} text-white text-xs font-medium px-2.5 py-1 rounded`}
                >
                  {getCategoryLabel(newsItem.category)}
                </span>
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                    aria-label="Share"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                  {shareTooltip && (
                    <div className="absolute right-0 top-full mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      Link copied!
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#0E3150] dark:text-white mb-4">
                {newsItem.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                {newsItem.author && (
                  <>
                    <span>{newsItem.author}</span>
                    <span className="mx-2">•</span>
                  </>
                )}
                <span>{newsItem.date}</span>
                <span className="mx-2">•</span>
                <span>{newsItem.views} views</span>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="p-6 md:p-8">
            {/* Press Release Info */}
            {newsItem.type === "press-release" && newsItem.releaseNumber && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Press Release
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {newsItem.releaseNumber}
                  </span>
                </div>
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-[#0E3150] dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
            />
          </div>

          {/* Article Footer */}
          <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link
                href="/news-events"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
              >
                Back to News
              </Link>
            </div>
            <div className="relative">
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 bg-[#0E3150] hover:bg-[#0A2540] dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ShareIcon className="h-4 w-4 mr-2" />
                Share
              </button>
              {shareTooltip && (
                <div className="absolute right-0 bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Link copied!
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0E3150] dark:text-white mb-6">
            Related News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems
              .filter(
                (item) =>
                  item.id !== newsItem.id && item.category === newsItem.category
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.action.url}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {item.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <span
                      className={`${getCategoryColor(
                        item.category
                      )} text-white text-xs font-medium px-2.5 py-1 rounded mb-2 inline-block`}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                    <h3 className="text-lg font-semibold text-[#0E3150] dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
