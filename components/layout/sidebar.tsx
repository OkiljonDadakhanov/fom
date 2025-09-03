import { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Home,
  Info,
  Calendar,
  FileText,
  ChartArea,
  Atom,
  Users,
  Globe,
  Link as LinkIcon,
  Newspaper,
  Map,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [olympiadsOpen, setOlympiadsOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("[data-sidebar]") &&
        !target.closest("[data-menu-button]")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigationItems = [
    {
      category: "Main",
      items: [
        { href: "/", label: "Home", icon: Home, description: "Main page" },
        { href: "/about", label: "About SOC", icon: Info, description: "About Science Olympiad Center" },
      ]
    },
    {
      category: "Olympiads",
      items: [
        { href: "/olimpiads", label: "All Olympiads", icon: Atom, description: "Browse all olympiads" },
        { href: "/statistics", label: "Statistics", icon: ChartArea, description: "View statistics and data" },
      ]
    },
    {
      category: "Resources",
      items: [
        { href: "/methodology", label: "Methodology", icon: FileText, description: "Educational methodology" },
        { href: "/partners", label: "Partners", icon: Users, description: "Our partners and collaborators" },
        { href: "/virtual-tour", label: "Virtual Tour", icon: Map, description: "Take a virtual tour" },
        { href: "/related-links", label: "Related Links", icon: LinkIcon, description: "Useful external resources" },
        { href: "/media", label: "Media", icon: Newspaper, description: "Media resources and downloads" },
      ]
    },
    {
      category: "News & Events",
      items: [
        { href: "/news-events", label: "News & Events", icon: Calendar, description: "Latest news and upcoming events" },
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        data-sidebar
        className={`fixed top-0 left-0 h-full w-[320px] bg-white dark:bg-gray-900 z-50 shadow-2xl transform transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#0E3150] to-[#1a4a7a] dark:from-[#010B2B] dark:to-[#1a2a4a]">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl text-white">
                Science Olympiads
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-white group-hover:text-white/80" />
              </button>
            </div>
            <p className="text-white/80 text-sm mt-2">Navigate through our resources</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-3">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2">
                  {section.category}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm"
                        onClick={onClose}
                      >
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-[#0E3150] group-hover:text-white transition-all duration-200">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-gray-900 dark:text-white group-hover:text-[#0E3150] dark:group-hover:text-white transition-colors duration-200">
                            {item.label}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Science Olympiad Center
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Empowering students through science
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
