"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Container } from "@/components/ui/container";
import { Sidebar } from "./sidebar";

type NavItem = { label: string; href: `#${string}` };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Calendar", href: "#calendar" },
  { label: "Categories", href: "#categories" },
  { label: "Statistics", href: "#statistics" },
  { label: "Partners", href: "#partners" },
  { label: "News", href: "#news" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home"); // Default to home
  const [manualNavigation, setManualNavigation] = useState(false);

  // Shrink / shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Skip intersection updates during manual navigation
        if (manualNavigation) return;

        // Check if we're at the very top of the page (home)
        if (window.scrollY < 100) {
          setActive("#home");
          return;
        }

        // pick entry with greatest intersection
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target?.id) {
          setActive(`#${mostVisible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [manualNavigation]);

  // Handle manual navigation clicks
  const handleNavClick = (href: string) => {
    setManualNavigation(true);
    setActive(href);

    // Re-enable scroll spy after navigation completes
    setTimeout(() => {
      setManualNavigation(false);
    }, 1000); // Adjust timing as needed
  };

  // classes
  const headerBase =
    "sticky top-0 z-50 w-full border-b transition-all duration-300";
  const headerDecor =
    "bg-[#0E3150]/80 dark:bg-[#010B2B]/80 backdrop-blur-xl border-white/10";
  const headerScrolled = scrolled ? "shadow-lg shadow-black/10" : "";
  const headerHeight = scrolled ? "h-16" : "h-20";
  const logoSize = scrolled ? 56 : 64;
  const linkBase =
    "px-3 py-1.5 rounded-full text-sm lg:text-base transition-colors cursor-pointer";
  const linkInactive = "text-white/80 hover:text-white hover:bg-white/10";
  const linkActive = "text-white bg-white/15 ring-1 ring-white/20";
  const ctaClasses =
    "hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white text-[#0E3150] hover:bg-gray-200 text-sm lg:text-base transition-colors";

  // build nav with memo to avoid re-renders
  const nav = useMemo(
    () =>
      NAV_ITEMS.map((item) => {
        const isActive = active === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            scroll={true}
            onClick={() => handleNavClick(item.href)}
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
        <div className="pointer-events-none h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Container
          className={`flex ${headerHeight} items-center justify-between`}
        >
          {/* Left: menu + brand */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              aria-label="Open menu"
              className="p-2 rounded-full hover:bg-white/10"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => handleNavClick("#home")}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={logoSize}
                height={logoSize}
                className="rounded-full shrink-0 transition-all duration-300"
                priority
              />
              <span className="hidden sm:block font-semibold tracking-tight">
                Science Olympiad Center
              </span>
            </Link>
          </div>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {nav}
          </nav>

          {/* Right: theme + CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              scroll={true}
              className={ctaClasses}
              onClick={() => handleNavClick("#contact")}
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
