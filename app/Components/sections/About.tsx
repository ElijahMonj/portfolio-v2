import { FaGraduationCap, FaLaptopCode, FaRoute } from "react-icons/fa6";
import { FiCode, FiUploadCloud, FiDollarSign, FiRefreshCw } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import Section from "./Section";
import { TECH_STACK, type TechItem } from "@/app/lib/site";

/** Formerly its own top-level section, folded in here so every section is a nav stop. */
const SHIP_STEPS = [
  { Icon: FiCode, title: "Build", desc: "Design and build features across web and mobile with React, Next.js & React Native." },
  { Icon: FiUploadCloud, title: "Ship", desc: "Release to the App Store & Google Play and deploy web dashboards." },
  { Icon: FiDollarSign, title: "Monetize", desc: "Wire up subscriptions, in app purchases and ad monetization." },
  { Icon: FiRefreshCw, title: "Maintain", desc: "Cloud functions, push notifications, and keeping things stable after launch." },
];

type SkillGroup = { title: string; span?: string; skills: TechItem[] };

/*
 * Grouped by layer rather than by platform. React Native and Expo sit with the
 * other UI tools because that is what they are — the earlier "Mobile" split
 * separated them from React purely by target device. Vercel moved out of the
 * backend group (it's hosting, not a backend) into Platform & Monetization,
 * which is where Stripe, RevenueCat and AdMob belong too.
 *
 * Three tiles across; sizes (7/6/4) are close enough that equal thirds beats a
 * weighted bento.
 */
const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    skills: TECH_STACK.filter((tech) => ["React", "React Native", "Next.js", "Expo", "TypeScript", "Tailwind", "Bootstrap"].includes(tech.label)),
  },
  {
    title: "Backend & Data",
    skills: TECH_STACK.filter((tech) => ["Node.js", "Express", "Firebase", "Supabase", "PostgreSQL", "MongoDB"].includes(tech.label)),
  },
  {
    title: "Platform & Monetization",
    span: "sm:col-span-2 lg:col-span-1",
    skills: TECH_STACK.filter((tech) => ["Vercel", "Stripe", "RevenueCat", "AdMob"].includes(tech.label)),
  },
];

const linkClass =
  "text-accent-blue underline-offset-4 hover:underline transition-colors";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Get To Know Me"
        title="About Me"
        highlight="Me"
        lead="How I work, what I build with, and where I learned it."
      />

      {/* How I Work */}
      <SectionHeading as="h3" Icon={FaRoute} title="How I Work" className="mb-6" />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SHIP_STEPS.map(({ Icon, title, desc }) => (
          <RevealItem key={title}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-tr from-accent-cyan/20 to-accent-violet/20 text-accent-blue">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display text-lg font-bold">{title}</h4>
              <p className="mt-1.5 text-sm text-muted">{desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Technical Skills */}
      <SectionHeading
        as="h3"
        Icon={FaLaptopCode}
        title="Technical Skills"
        className="mb-6 mt-16"
      />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <RevealItem key={group.title} className={group.span}>
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">
                {group.title}
              </h4>
              {/*
               * flex-1 + content-center: grid rows stretch every tile to the
               * tallest in the row, so the shorter ones centre their chips in
               * the leftover height rather than leaving a hole underneath.
               */}
              <div className="mt-4 flex flex-1 flex-wrap content-center gap-2.5">
                {group.skills.map((skill, i) => (
                  <span
                    key={`${skill.label}-${i}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-accent-blue/40"
                  >
                    <skill.Icon className={`h-4 w-4 ${skill.color}`} />
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Education */}
      <SectionHeading
        as="h3"
        Icon={FaGraduationCap}
        title="Education"
        className="mb-6 mt-16"
      />
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        <RevealItem>
          <div className="glass h-full rounded-2xl p-6">
            <h4 className="font-display text-lg font-bold">
              BS in Information Technology
            </h4>
            <p className="text-sm text-muted">
              STI College San Jose Del Monte — Graduated June 2025
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
              <li>Data Structures and Algorithms</li>
              <li>Web Systems and Technologies</li>
              <li>Advanced Database Systems (SQL)</li>
            </ul>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="glass h-full rounded-2xl p-6">
            <h4 className="font-display text-lg font-bold">
              Full Stack JavaScript Curriculum
            </h4>
            <p className="text-sm text-muted">The Odin Project — Completed 2023</p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
              <li>MongoDB, Express.js, React, and Node.js (MERN) full-stack development</li>
              <li>Version control with Git and GitHub</li>
              <li>
                Built projects such as a{" "}
                <a href="https://elijahmonj.github.io/Tic-Tac-Toe/" className={linkClass}>
                  tic-tac-toe game
                </a>
              </li>
            </ul>
          </div>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
