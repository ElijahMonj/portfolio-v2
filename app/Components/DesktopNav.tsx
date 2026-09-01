"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SECTION_IDS } from "@/app/lib/site";
import { useActiveSection } from "./useActiveSection";

export default function DesktopNav() {
  const pathname = usePathname();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <ul className="flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === "/" && activeId === link.id;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-accent-cyan to-accent-violet" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
