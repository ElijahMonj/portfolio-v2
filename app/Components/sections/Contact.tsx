import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import Section from "./Section";
import { SITE, SOCIALS } from "@/app/lib/site";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Work Together"
        highlight="Together"
        lead="Have a project in mind or just want to say hi? My inbox is always open."
      />
      <Reveal className="glass mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl p-8 text-center md:p-10">
        <Link
          href={`mailto:${SITE.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 font-medium text-white shadow-lg shadow-accent-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Say hello
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.key];
            return (
              <Link
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
              >
                <Icon /> {social.label}
              </Link>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
