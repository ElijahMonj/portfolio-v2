import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { Reveal } from "./motion/Reveal";

/**
 * Splits `highlight` out of `title` and paints it with the brand gradient.
 *
 * Doing this here rather than at each call site is the point of the component:
 * sections used to hand-write their own <span className="text-gradient">, so a
 * section could silently lose its accent word (Work Experience did).
 */
function withHighlight(title: string, highlight?: string): ReactNode {
  if (!highlight) return title;
  const at = title.indexOf(highlight);
  if (at === -1) return title;
  return (
    <>
      {title.slice(0, at)}
      <span className="text-gradient">{highlight}</span>
      {title.slice(at + highlight.length)}
    </>
  );
}

/**
 * Shared section heading — always centered, so every section on the page reads
 * the same way. `h2` for top-level sections (eyebrow + title + lead), `h3` with
 * a leading icon for the sub-blocks inside #about.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  Icon,
  as = "h2",
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Substring of `title` to render in the brand gradient. */
  highlight?: string;
  Icon?: IconType;
  as?: "h2" | "h3";
  lead?: ReactNode;
  className?: string;
}) {
  const Tag = as;
  const size = as === "h2" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl";

  return (
    <Reveal className={`text-center ${className ?? "mb-8"}`}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <Tag
        className={`flex items-center justify-center gap-3 font-display font-bold ${size} ${
          eyebrow ? "mt-2" : ""
        }`}
      >
        {Icon && <Icon className="shrink-0 text-accent-blue" />}
        {withHighlight(title, highlight)}
      </Tag>
      {lead && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">{lead}</p>
      )}
    </Reveal>
  );
}
