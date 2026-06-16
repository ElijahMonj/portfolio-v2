import Link from "next/link";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { MdDownload } from "react-icons/md";
import { SITE, SOCIALS } from "@/app/lib/site";
import { Reveal } from "./motion/Reveal";

const SOCIAL_ICONS = {
  github: FaSquareGithub,
  linkedin: FaLinkedin,
  facebook: FaSquareFacebook,
} as const;

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-5 py-16">
        <Reveal className="glass flex flex-col items-center justify-between gap-8 rounded-3xl p-8 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="mt-2 max-w-md text-muted">
              Let&apos;s build something amazing together. I&apos;m open to new
              opportunities and collaborations.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.key];
                return (
                  <Link
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-foreground/70 transition-colors duration-300 hover:text-accent-blue"
                  >
                    <Icon size={30} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex w-full max-w-[260px] flex-col gap-3">
            <Link
              href={`mailto:${SITE.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 font-medium text-white shadow-lg shadow-accent-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FiMail className="h-5 w-5" /> Email me
            </Link>
            <Link
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:border-accent-blue/40 hover:text-accent-blue"
            >
              Resume <MdDownload className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 text-center text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
