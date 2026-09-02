/** Single source of truth for site-wide metadata, nav, social links, and core tech stack. */

import type { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiGoogleadmob,
  SiMongodb,
  SiNextdotjs,
  SiRevenuecat,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiExpo,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

export const SITE = {
  name: "Elijah Monjardin",
  url: "https://elijahmonjardin.vercel.app",
  email: "monjardinelijah120@gmail.com",
  /**
   * Résumé PDF served straight out of `public/`. The file name is versioned
   * so a new upload never hits a stale CDN copy; `resumeFileName` is what the
   * visitor actually saves, so the "v2" never reaches their downloads folder.
   * Bump both together when the PDF is replaced.
   */
  resume: "/Elijah-Monjardin-Resume-v2.pdf",
  resumeFileName: "Elijah-Monjardin-Resume.pdf",
  /**
   * Feeds <meta description>, og:description, twitter:description and the web
   * manifest — all four read this one string. Keep it under ~155 characters or
   * Google truncates the tail in results.
   */
  description:
    "Full stack software engineer. I build and ship React Native and Next.js apps end to end — most recently to 100,000+ downloads in under a month.",
  jobTitle: "Full Stack Software Engineer",
  location: "Philippines",
  countryCode: "PH",
} as const;

export type TechItem = {
  label: string;
  Icon: IconType;
  color: string;
};

export const TECH_STACK: TechItem[] = [
  { label: "React", Icon: FaReact, color: "text-[#61DAFB]" },
  { label: "React Native", Icon: TbBrandReactNative, color: "text-[#61DAFB]" },
  { label: "Next.js", Icon: SiNextdotjs, color: "text-foreground" },
  { label: "TypeScript", Icon: BiLogoTypescript, color: "text-[#3178C6]" },
  { label: "Expo", Icon: SiExpo, color: "text-foreground" },
  { label: "Node.js", Icon: FaNodeJs, color: "text-[#5FA04E]" },
  { label: "Express", Icon: SiExpress, color: "text-foreground" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { label: "Bootstrap", Icon: FaBootstrap, color: "text-[#7952B3]" },
  { label: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
  { label: "Supabase", Icon: SiSupabase, color: "text-[#3FCF8E]" },
  { label: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-[#4169E1]" },
  { label: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  { label: "Stripe", Icon: SiStripe, color: "text-[#635BFF]" },
  { label: "RevenueCat", Icon: SiRevenuecat, color: "text-[#F2545B]" },
  { label: "AdMob", Icon: SiGoogleadmob, color: "text-[#4285F4]" },
  { label: "Vercel", Icon: SiVercel, color: "text-foreground" },
];

/**
 * Single-page nav. Hrefs are root-relative (`/#work`, not `#work`) because the
 * nav renders in the root layout, so a bare hash would resolve against whatever
 * path the visitor is on — a retired URL mid-redirect, or the 404 — instead of
 * the home page.
 */
export const NAV_LINKS = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

/** Scroll-spy targets, in document order. `top` is the hero — rail-only, no nav link. */
export const SECTION_IDS = ["top", "work", "projects", "about", "contact"] as const;

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

/**
 * Stable schema.org `@id`s. JSON-LD blocks in different files (layout.tsx's
 * @graph, the project entities in sections/Projects.tsx) reference the same
 * Person by id instead of each redescribing it.
 */
export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;
