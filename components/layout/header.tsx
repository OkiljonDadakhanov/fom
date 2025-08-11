"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Sidebar } from "./sidebar";
import Image from "next/image";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className="sticky top-0 z-50 w-full border-b bg-[#0E3150] dark:bg-[#010B2B] text-white">
        {/* Increased height from h-16 → h-20 */}
        <Container className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Increased icon size */}
            <Menu
              className="w-8 h-8 hover:cursor-pointer"
              data-menu-button
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            {/* Increased font size from text-xl → text-2xl */}
            <Link href="/" className="font-bold text-2xl">
              Science Olympiad Center
            </Link>
            <nav className="hidden md:flex gap-8 text-lg">
              <Link
                href="/"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                About
              </Link>
              <Link
                href="/statistics"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Statistics
              </Link>
              <Link
                href="/olimpiads"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Olimpiads
              </Link>
              <Link
                href="/methodology"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Increased logo text size */}
              <Link href="/" className="text-lg font-semibold">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </Container>
      </header>
    </>
  );
}
