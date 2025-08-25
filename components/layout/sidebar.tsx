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
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        data-sidebar
        className={`fixed top-0 left-0 h-full w-[280px] bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between dark:border-gray-700">
            <h2 className="font-bold text-xl text-[#0E3150] dark:text-white">
              Science Olympiads
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <Home className="w-5 h-5" />
                  <span>SOC Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <Info className="w-5 h-5" />
                  <span>About SOC</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/statistics"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <ChartArea className="w-5 h-5" />
                  <span>Statistics</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/news-events"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <Calendar className="w-5 h-5" />
                  <span>News / Events</span>
                </Link>
              </li> */}
              <li>
                <Link
                  href="/olimpiads"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <Atom className="w-5 h-5" />
                  <span>Olimpiads</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <FileText className="w-5 h-5" />
                  <span>Methodology</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <FileText className="w-5 h-5" />
                  <span>Partners</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/virtual-tour"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <FileText className="w-5 h-5" />
                  <span>Virtual Tour</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/related-links"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <FileText className="w-5 h-5" />
                  <span>Related Links</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={onClose}
                >
                  <FileText className="w-5 h-5" />
                  <span>Media</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
