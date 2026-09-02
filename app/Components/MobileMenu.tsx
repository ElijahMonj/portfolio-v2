"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import HashLink from "./HashLink";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NAV_LINKS, SECTION_IDS, SOCIALS } from "@/app/lib/site";
import { useActiveSection } from "./useActiveSection";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const activeId = useActiveSection(SECTION_IDS);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + Escape to close + focus the panel when open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /*
   * Portaled to <body>: the sticky header this button sits in has its own
   * backdrop-filter, which makes it a backdrop root *and* the containing block
   * for fixed-position descendants. Rendered inline, the drawer would sample an
   * empty backdrop (looking transparent) and position itself against the 4rem
   * header instead of the viewport.
   */
  const drawer = (
    <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              key="panel"
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-l border-border bg-surface/95 p-6 outline-none backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:text-accent-blue"
                >
                  <IoClose className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const active = pathname === "/" && activeId === link.id;
                  return (
                    <HashLink
                      key={link.href}
                      href={link.href}
                      /*
                       * Closing on `pathname` alone is not enough on the
                       * single-page layout — a hash-only change never updates it,
                       * so the drawer would stay open over the target section.
                       */
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-lg transition-colors ${
                        active
                          ? "text-gradient font-semibold"
                          : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </HashLink>
                  );
                })}
              </nav>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                <div className="flex gap-3 text-sm text-muted">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.key}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent-blue"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:text-accent-blue hover:border-accent-blue/40"
      >
        <MdMenu className="h-5 w-5" />
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
