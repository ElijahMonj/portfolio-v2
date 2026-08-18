import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Experience } from "@/app/lib/content";
import { SITE } from "@/app/lib/site";

/**
 * Inline emphasis inside bullet copy: `**term**` lifts a technology out of the
 * muted body text, `==metric==` renders a headline number in the brand gradient.
 */
const EMPHASIS = /(\*\*[^*]+\*\*|==[^=]+==)/g;

function renderBullet(text: string) {
  return text.split(EMPHASIS).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("==")) {
      return (
        <strong key={i} className="text-gradient whitespace-nowrap font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-bold">{exp.role}</h3>
            <span className="rounded-full border border-accent-blue/40 bg-accent-blue/10 px-2.5 py-0.5 text-xs font-medium text-accent-blue">
              {exp.type}
            </span>
          </div>
          {exp.url ? (
            <Link
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
            >
              {exp.company} <FiArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <p className="mt-1 text-sm font-medium text-foreground/80">{exp.company}</p>
          )}
        </div>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted">
          {exp.duration}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
            <span>{renderBullet(bullet)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="select-none rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {exp.note && (
        <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{renderBullet(exp.note)}</p>
          <Link
            href={`mailto:${SITE.email}`}
            className="inline-flex shrink-0 items-center gap-1 font-medium text-accent-blue hover:underline"
          >
            Ask me <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </article>
  );
}
