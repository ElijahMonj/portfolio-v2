/** Single source of truth for site-wide metadata, nav, and social links. */

export const SITE = {
  name: "Elijah Monjardin",
  role: "Full Stack Software Engineer",
  url: "https://elijahmonjardin.vercel.app",
  email: "monjardinelijah120@gmail.com",
  description:
    "Elijah Monjardin is a full stack software engineer who builds and ships React, React Native, and Next.js apps end to end — from features and backends to app store releases.",
  jobTitle: "Full Stack Software Engineer",
  location: "Philippines",
} as const;

export const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export const SOCIALS = [
  { key: "github", label: "GitHub", href: "https://github.com/ElijahMonj" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elijah-monjardin/",
  },
] as const;

/** URLs for schema.org Person `sameAs`. */
export const SAME_AS: string[] = SOCIALS.map((s) => s.href);
