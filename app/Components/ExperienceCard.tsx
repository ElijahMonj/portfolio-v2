import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Experience } from "@/app/lib/content";

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
            {bullet}
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
    </article>
  );
}
