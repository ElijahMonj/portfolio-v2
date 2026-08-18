/** Single source of truth for site-wide metadata, nav, social links, and core tech stack. */

import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiGoogleadmob,
  SiGooglecloud,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiRevenuecat,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiExpo,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

export const SITE = {
  name: "Elijah Monjardin",
  role: "Full Stack Software Engineer",
  url: "https://elijahmonjardin.vercel.app",
  email: "monjardinelijah120@gmail.com",
  description:
    "Elijah Monjardin is a full stack software engineer who builds and ships React, React Native, and Next.js apps end to end from features and backends to app store releases.",
  jobTitle: "Full Stack Software Engineer",
  location: "Philippines",
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
  { label: "JavaScript", Icon: BiLogoJavascript, color: "text-[#F7DF1E]" },
  { label: "Expo", Icon: SiExpo, color: "text-foreground" },
  { label: "Node.js", Icon: FaNodeJs, color: "text-[#5FA04E]" },
  { label: "Express", Icon: SiExpress, color: "text-foreground" },
  { label: "Prisma", Icon: SiPrisma, color: "text-foreground" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { label: "Bootstrap", Icon: FaBootstrap, color: "text-[#7952B3]" },
  { label: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
  { label: "Google Cloud", Icon: SiGooglecloud, color: "text-[#4285F4]" },
  { label: "Supabase", Icon: SiSupabase, color: "text-[#3FCF8E]" },
  { label: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-[#4169E1]" },
  { label: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  { label: "Vue.js", Icon: BiLogoVuejs, color: "text-[#42B883]" },
  { label: "Laravel", Icon: SiLaravel, color: "text-[#FF2D20]" },
  { label: "PHP", Icon: BiLogoPhp, color: "text-[#777BB4]" },
  { label: "RevenueCat", Icon: SiRevenuecat, color: "text-[#F2545B]" },
  { label: "AdMob", Icon: SiGoogleadmob, color: "text-[#4285F4]" },
  { label: "Appwrite", Icon: SiAppwrite, color: "text-[#FD366E]" },
  { label: "Vercel", Icon: SiVercel, color: "text-foreground" },
  { label: "GitHub", Icon: FaGithub, color: "text-foreground" },
];

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
