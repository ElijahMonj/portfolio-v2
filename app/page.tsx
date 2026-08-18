import Image from "next/image";
import Link from "next/link";
import Me from "@/public/images/me.jpg";
import { FiArrowRight, FiArrowUpRight, FiCode, FiUploadCloud, FiDollarSign, FiRefreshCw } from "react-icons/fi";
import { Reveal, RevealGroup, RevealItem } from "./Components/motion/Reveal";
import Marquee from "./Components/Marquee";
import { SITE, SOCIALS, TECH_STACK } from "./lib/site";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const SOCIAL_ICONS = {
  github: FaSquareGithub,
  linkedin: FaLinkedin,
} as const;

const SHIP_STEPS = [
  { Icon: FiCode, title: "Build", desc: "Design and build features across web and mobile with React, Next.js & React Native." },
  { Icon: FiUploadCloud, title: "Ship", desc: "Release to the App Store & Google Play and deploy web dashboards." },
  { Icon: FiDollarSign, title: "Monetize", desc: "Wire up subscriptions, in app purchases and ad monetization." },
  { Icon: FiRefreshCw, title: "Maintain", desc: "Cloud functions, push notifications, and keeping things stable after launch." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 lg:gap-32 lg:py-20">
      {/* Hero */}
      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Full Stack Software Engineer
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Hi, I&apos;m Elijah
            <br />a <span className="text-gradient">Full Stack Engineer</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            I build and ship apps for web and mobile. Right now I&apos;m crafting
            React Native apps people use every day. I love turning rough ideas
            into real products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 font-medium text-white shadow-lg shadow-accent-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:border-accent-blue/40 hover:text-accent-blue"
            >
              About me
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.key];
              return (
                <Link
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground/60 transition-colors duration-300 hover:text-accent-blue"
                >
                  <Icon size={26} />
                </Link>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-cyan/30 via-accent-blue/20 to-accent-violet/30 blur-2xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet p-[3px]">
              <Image
                src={Me}
                alt="Elijah Monjardin"
                quality={100}
                priority
                className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* End-to-end / how I ship */}
      <section>
        <Reveal className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            From idea to shipped
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            I handle the <span className="text-gradient">whole flow</span>
          </h2>
        </Reveal>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SHIP_STEPS.map(({ Icon, title, desc }) => (
            <RevealItem key={title}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-tr from-accent-cyan/20 to-accent-violet/20 text-accent-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted">{desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Tech marquee */}
      <section>
        <Reveal className="mb-8 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Tools &amp; technologies I work with
          </h2>
        </Reveal>
        <Marquee
          items={TECH_STACK.map(({ label, Icon, color }) => (
            <div
              key={label}
              className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5"
            >
              <Icon className={`h-5 w-5 ${color}`} />
              <span className="whitespace-nowrap text-sm font-medium">{label}</span>
            </div>
          ))}
        />
      </section>

      {/* CTA */}
      <section>
        <Reveal className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s work <span className="text-gradient">together</span>
          </h2>
          <p className="max-w-md text-muted">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <Link
            href={`mailto:${SITE.email}`}
            className="group mt-2 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors duration-300 hover:border-accent-blue/40 hover:text-accent-blue"
          >
            Say hello
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
