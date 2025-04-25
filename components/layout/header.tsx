"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Sidebar } from "./sidebar";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className="sticky top-0 z-50 w-full border-b bg-[#0E3150] dark:bg-[#010B2B] text-white">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Menu
              className="w-6 h-6 hover:cursor-pointer"
              data-menu-button
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <Link href="/" className="font-bold text-xl">
              Science Olympiads
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/about"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                About
              </Link>
              <Link
                href="/courses"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/events"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Events
              </Link>
              <Link
                href="/resources"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Logo</h1>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
