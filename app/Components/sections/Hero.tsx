import Image from "next/image";
import Link from "next/link";
import Me from "@/public/images/me.jpg";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { Reveal } from "../motion/Reveal";
import Section from "./Section";
import { SITE, SOCIALS } from "@/app/lib/site";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-blue/40 hover:text-accent-blue";

export default function Hero() {
  return (
    <Section
      id="top"
      className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
    >
      <Reveal className="order-2 lg:order-1">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Full Stack Software Engineer
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          Hi, I&apos;m Elijah
          <br />a <span className="text-gradient">Full Stack Engineer</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          A full stack software engineer who builds and ships products across web
          and mobile. These days I&apos;m deep in React Native, taking apps end to
          end from the first commit to the app store and everything after. I love
          turning rough ideas into real products.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 font-medium text-white shadow-lg shadow-accent-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:border-accent-blue/40 hover:text-accent-blue"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.key];
            return (
              <Link
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
              >
                <Icon /> {social.label}
              </Link>
            );
          })}
          <Link href={`mailto:${SITE.email}`} className={pillClass}>
            <FaEnvelope /> Email
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="order-1 flex justify-center lg:order-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-cyan/30 via-accent-blue/20 to-accent-violet/30 blur-2xl" />
          <div className="relative rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet p-[3px]">
            <Image
              src={Me}
              alt="Elijah Monjardin, full stack software engineer"
              quality={100}
              priority
              className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
