import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiDollarSign,
  FiDownload,
  FiRefreshCw,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import CountUp from "../CountUp";
import { renderBullet } from "../emphasis";
import { Reveal } from "../motion/Reveal";
import type { Experience } from "@/app/lib/content";
import { SITE } from "@/app/lib/site";

const PILLAR_ICONS = {
  build: FiCode,
  monetize: FiDollarSign,
  maintain: FiRefreshCw,
} as const;

/**
 * Stat icons live here, not in content.ts: that file is imported by
 * opengraph-image.tsx inside the next/og runtime, which must not pull in
 * react-icons. Same reason the pillars use string keys.
 *
 * Deliberately outline (Fi) rather than a solid star, so all three read as one
 * set, and sat above the figure rather than beside the label — an inline icon
 * would push "store rating" past the column width at the sm breakpoint.
 */
const STAT_ICONS = {
  downloads: FiDownload,
  rating: FiStar,
  users: FiUsers,
} as const;

/**
 * The headline role, presented as an achievement panel rather than a card: the
 * numbers lead, three pillars summarise the work, and the role's original
 * bullets survive underneath as secondary detail so nothing is lost.
 *
 * A gradient hairline (p-px around a solid inner panel) puts it a visual tier
 * above the translucent `glass` cards used everywhere else.
 */
export default function AchievementShowcase({ exp }: { exp: Experience }) {
  const showcase = exp.showcase;
  if (!showcase) return null;

  return (
    <Reveal>
      <div className="rounded-3xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet p-px shadow-xl shadow-accent-blue/10">
        <div className="rounded-[calc(1.5rem-1px)] bg-surface/90 px-5 py-10 backdrop-blur-xl sm:px-10 sm:py-14">
          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {showcase.marker && (
              <span className="rounded-full border border-accent-blue/40 bg-accent-blue/10 px-3 py-1 text-accent-blue">
                {showcase.marker}
              </span>
            )}
            <span>{exp.type}</span>
            <span aria-hidden>&middot;</span>
            <span>{exp.duration}</span>
          </div>

          <h3 className="mt-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {exp.role}
          </h3>
          {exp.url ? (
            <p className="mt-1 text-center text-sm">
              <Link
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-accent-blue hover:underline"
              >
                {exp.company} <FiArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          ) : (
            <p className="mt-1 text-center text-sm text-muted">{exp.company}</p>
          )}

          {showcase.lead && (
            <p className="mx-auto mt-6 max-w-xl text-center text-lg text-muted">
              {showcase.lead}
            </p>
          )}

          {/* Headline figures */}
          <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {showcase.stats.map((stat) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-full border border-border bg-foreground/[0.04] text-accent-blue">
                    <Icon aria-hidden className="h-[18px] w-[18px]" />
                  </div>
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    className="text-gradient font-display text-5xl font-bold leading-none sm:text-6xl"
                  />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="mt-1 text-sm text-muted">{stat.sublabel}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pillars */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {showcase.pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.icon];
              return (
                <div key={pillar.title} className="glass h-full rounded-2xl p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-accent-cyan/20 to-accent-violet/20 text-accent-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-muted">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* The original bullets, kept as secondary detail. */}
          <div className="mt-12 border-t border-border pt-8">
            <h4 className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
              What that involved
            </h4>
            <ul className="mt-6 grid gap-3 text-sm text-muted lg:grid-cols-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
                  <span>{renderBullet(bullet)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
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
            <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-center sm:gap-3">
              <p>{renderBullet(exp.note)}</p>
              <Link
                href={`mailto:${SITE.email}`}
                className="inline-flex shrink-0 items-center gap-1 font-medium text-accent-blue hover:underline"
              >
                Ask me <FiArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
