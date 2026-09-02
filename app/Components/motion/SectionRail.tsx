"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import HashLink from "../HashLink";
import { NAV_LINKS, SECTION_IDS } from "@/app/lib/site";
import { useActiveSection } from "../useActiveSection";

const LABELS: Record<string, string> = {
  top: "Top",
  ...Object.fromEntries(NAV_LINKS.map((l) => [l.id, l.label])),
};

/** Fixed dot rail marking scroll position through the page's sections. */
export default function SectionRail() {
  const pathname = usePathname();
  const active = useActiveSection(SECTION_IDS);

  // The sections only exist on the home page.
  if (pathname !== "/") return null;

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      {SECTION_IDS.map((id) => {
        const isActive = active === id;
        return (
          <HashLink
            key={id}
            href={`/#${id}`}
            aria-label={LABELS[id]}
            aria-current={isActive ? "true" : undefined}
            className="group relative grid h-4 w-4 place-items-center"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "h-6 w-[3px] bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-violet"
                  : "h-2 w-2 bg-foreground/25 group-hover:bg-foreground/50"
              }`}
            />
            <span className="glass pointer-events-none absolute right-full mr-3 select-none whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              {LABELS[id]}
            </span>
          </HashLink>
        );
      })}
    </motion.nav>
  );
}
