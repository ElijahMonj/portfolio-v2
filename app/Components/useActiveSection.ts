"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy for the single-page layout: returns the id of the section
 * currently occupying the middle of the viewport, or null when none of them
 * are on the page — so nav highlighting switches itself off anywhere the
 * sections aren't rendered, without the callers needing to check.
 *
 * Pass a stable (module-level) `ids` array so the observer isn't rebuilt on
 * every render.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // A thin band across the viewport middle. Whichever section crosses it wins;
    // when several do, the last one in document order is the one we've scrolled into.
    const observer = new IntersectionObserver(
      () => {
        const visible = sections.filter((el) => {
          const { top, bottom } = el.getBoundingClientRect();
          const mid = window.innerHeight / 2;
          return top <= mid && bottom >= mid;
        });
        if (visible.length > 0) setActive(visible[visible.length - 1].id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));

    /*
     * #contact is short enough that it may never reach the middle band, so it
     * would never light up. Force the last section once we're at the document
     * bottom. Also seeds the initial state on mount (e.g. a deep link).
     */
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const mid = window.innerHeight / 2;
      const current = sections.filter((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        return top <= mid && bottom >= mid;
      });
      if (current.length > 0) setActive(current[current.length - 1].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}
