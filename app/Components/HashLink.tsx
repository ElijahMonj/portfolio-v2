"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * A `next/link` for the single-page nav's `/#section` targets.
 *
 * Clicking a link whose href already equals the current URL is a no-op: there
 * is nothing to navigate to, so the browser never re-runs its scroll-to-
 * fragment step. On a one-page site that means a dead nav — the hash stays
 * `#work` after you scroll away by hand, so the second click on "Work" does
 * nothing. Same for clicking "Work" while already reading that section.
 *
 * So do the scrolling here rather than leaning on the URL changing, and write
 * the hash ourselves: `push` when it actually changes, so Back still walks back
 * through the sections the way `next/link` used to, and `replace` when it
 * doesn't, so re-clicking the section you're already on can't stack a duplicate
 * entry that makes Back look broken. Both fire no `hashchange`, so neither can
 * feed the case-study listener in ProjectsShowcase.
 *
 * The history call goes BEFORE the scroll on purpose: the browser stamps the
 * outgoing entry's scroll position at that moment, so scrolling first would
 * save the destination against the entry we're leaving and Back would restore
 * the wrong place.
 *
 * `behavior` is deliberately left unset: `scrollIntoView` then falls back to
 * the computed `scroll-behavior`, which globals.css sets to `smooth` and
 * overrides to `auto` under `prefers-reduced-motion`. Passing `"smooth"`
 * explicitly would win over that media query and animate for everyone.
 */
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Leave modified and non-primary clicks alone so "open in new tab" works.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    const id = href.split("#")[1];
    const target = id ? document.getElementById(id) : null;
    // No target means the sections aren't rendered — the 404, say. Let the
    // router handle it: that's why these hrefs are root-relative.
    if (!target) return;

    e.preventDefault();
    const alreadyHere = new URL(href, location.href).href === location.href;
    if (alreadyHere) history.replaceState(null, "", href);
    else history.pushState(null, "", href);
    target.scrollIntoView({ block: "start" });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
