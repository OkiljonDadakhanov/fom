"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Container } from "@/components/ui/container";
import { Sidebar } from "./sidebar";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Olimpiads", href: "/olimpiads" },
  { label: "Statistics", href: "/statistics" },
  { label: "Partners", href: "/partners" },
  { label: "News & Events", href: "/news-events" },
  { label: "Methodology", href: "/methodology" },
  { label: "Virtual Tour", href: "/virtual-tour" },
  { label: "Media", href: "/media" },
  { label: "Related Links", href: "/related-links" },
];

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("/");

  // Shrink / shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update active state based on current path
  useEffect(() => {
    const path = window.location.pathname;
    setActive(path === "/" ? "/" : path);
  }, []);

  // classes
  const headerBase =
    "sticky top-0 z-50 w-full border-b transition-all duration-300";
  const headerDecor =
    "bg-[#0E3150]/95 dark:bg-[#010B2B]/95 backdrop-blur-xl border-white/10";
  const headerScrolled = scrolled ? "shadow-xl shadow-black/20" : "";
  const headerHeight = scrolled ? "h-16" : "h-20";
  const logoSize = scrolled ? 56 : 64;
  const linkBase =
    "px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 cursor-pointer";
  const linkInactive = "text-white/80 hover:text-white hover:bg-white/15";
  const linkActive = "text-white bg-white/20 ring-2 ring-white/30 shadow-lg";
  const ctaClasses =
    "hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-white text-[#0E3150] hover:bg-gray-100 text-sm lg:text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl";

  // build nav with memo to avoid re-renders
  const nav = useMemo(
    () =>
      NAV_ITEMS.slice(0, 6).map((item) => { // Show only first 6 items in header
        const isActive = active === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${linkBase} ${isActive ? linkActive : linkInactive}`}
          >
            {item.label}
          </Link>
        );
      }),
    [active]
  );

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className={`${headerBase} ${headerDecor} ${headerScrolled}`}>
        {/* subtle gradient line */}
        <div className="pointer-events-none h-[2px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <Container
          className={`flex ${headerHeight} items-center justify-between`}
        >
          {/* Left: menu + brand */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              aria-label="Open menu"
              data-menu-button
              className="group relative p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/30"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              <Menu className="w-6 h-6 text-white group-hover:text-white/90 transition-colors duration-200" />
              {/* Mobile indicator */}
              <span className="absolute -top-1 -right-1 md:hidden">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              </span>
            </button>
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setActive("/")}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={logoSize}
                height={logoSize}
                className="rounded-full shrink-0 transition-all duration-300 group-hover:scale-105"
                priority
              />
              <span className="hidden sm:block font-bold tracking-tight text-lg text-white group-hover:text-white/90 transition-colors duration-200">
                Science Olympiad Center
              </span>
            </Link>
          </div>

          {/* Center: nav */}
          <nav className="hidden lg:flex items-center gap-3">
            {nav}
          </nav>

          {/* Right: theme + CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className={ctaClasses}
              onClick={() => setActive("/about")}
            >
              Get in touch
            </Link>
            <ThemeToggle />
          </div>
        </Container>
      </header>
    </>
  );
}
