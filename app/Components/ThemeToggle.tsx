"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors duration-300 hover:text-accent-blue hover:border-accent-blue/40 ${className}`}
    >
      {/* Render a stable placeholder until mounted to avoid hydration mismatch. */}
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: -8, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 8, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid place-items-center"
          >
            {isDark ? <FiMoon className="h-5 w-5" /> : <FiSun className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
