"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
  /** Minimum time to keep the loader visible (ms) to avoid flash */
  minVisibleMs?: number;
};

export function Loading({ minVisibleMs = 700 }: Props) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [startTs] = useState<number>(() => Date.now());

  // Single useEffect to handle both scroll locking and progress
  useEffect(() => {
    // Store original overflow values
    const html = document.documentElement;
    const body = document.body;
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;

    // Lock scroll
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    // Progress animation
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 40);

    // Cleanup function
    return () => {
      clearInterval(interval);
      // Restore original overflow values
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
    };
  }, []);

  // Handle hiding the loader after progress completes
  useEffect(() => {
    if (progress < 100) return;

    const elapsed = Date.now() - startTs;
    const delay = Math.max(0, minVisibleMs - elapsed);

    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [progress, startTs, minVisibleMs]);

  // Additional safety: restore scroll when component unmounts or becomes invisible
  useEffect(() => {
    if (!visible) {
      // Ensure scroll is restored when loader becomes invisible
      const html = document.documentElement;
      const body = document.body;

      // Only restore if they're still hidden (in case another loader is active)
      if (html.style.overflow === "hidden") {
        html.style.overflow = "";
      }
      if (body.style.overflow === "hidden") {
        body.style.overflow = "";
      }
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="oc-loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
      >
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="mb-6"
        >
          <Image
            src="/images/logo.png"
            alt="OlympCenter Logo"
            width={120}
            height={120}
            className="animate-pulse"
            priority
          />
        </motion.div>

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold">OlympCenter.uz</h1>
        <p className="mt-1 text-sm text-white/70">
          Loading your olympiad journey…
        </p>

        {/* PROGRESS */}
        <div className="mt-6 w-64">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.25 }}
            />
          </div>
          <div className="mt-2 text-right text-xs text-white/60">
            {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
