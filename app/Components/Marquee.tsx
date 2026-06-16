import { Fragment, type ReactNode } from "react";

/**
 * Seamless infinite marquee. Renders the items twice inside one track and
 * translates it -50% (see `--animate-marquee` in globals.css). Pauses on hover;
 * stops entirely under prefers-reduced-motion. Server component.
 */
export default function Marquee({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee flex w-max items-center gap-4 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {items.map((item, i) => (
              <Fragment key={`${copy}-${i}`}>{item}</Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
