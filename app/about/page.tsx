import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Me from "@/public/images/me.jpg";
import neopal from "@/public/images/projects/neopal.png";
import { FaReact, FaNodeJs, FaBriefcase } from "react-icons/fa";
import {
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiVercel,
  SiExpo,
  SiGooglecloud,
  SiClaude,
  SiGoogleadmob,
  SiRevenuecat,
  SiSupabase,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons";
import CardCapstone from "./CardCapstone";
import Project from "../projects/Project";
import ExperienceCard from "../Components/ExperienceCard";
import { Reveal, RevealGroup, RevealItem } from "../Components/motion/Reveal";
import { EXPERIENCES } from "../lib/content";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Elijah Monjardin — a full stack software engineer building React, React Native, and Next.js apps. Explore his experience, skills, and education.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Elijah Monjardin",
    description:
      "Discover Elijah Monjardin's experience, skills, and achievements in React and full-stack web development.",
    url: `${SITE.url}/about`,
  },
};

type Skill = { Icon: IconType; label: string; color: string };
type SkillGroup = { title: string; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { Icon: BiLogoJavascript, label: "JavaScript", color: "text-[#F7DF1E]" },
      { Icon: BiLogoTypescript, label: "TypeScript", color: "text-[#3178C6]" },
      { Icon: BiLogoPhp, label: "PHP", color: "text-[#777BB4]" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { Icon: FaReact, label: "React", color: "text-[#61DAFB]" },
      { Icon: SiNextdotjs, label: "Next.js", color: "text-foreground" },
      { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-[#38BDF8]" },
      { Icon: FaBootstrap, label: "Bootstrap", color: "text-[#7952B3]" },
      { Icon: BiLogoVuejs, label: "Vue.js", color: "text-[#42B883]" },
    ],
  },
  {
    title: "Mobile & Monetization",
    skills: [
      { Icon: TbBrandReactNative, label: "React Native", color: "text-[#61DAFB]" },
      { Icon: SiExpo, label: "Expo", color: "text-foreground" },
      { Icon: SiRevenuecat, label: "RevenueCat", color: "text-[#F2545B]" },
      { Icon: SiGoogleadmob, label: "AdMob", color: "text-[#4285F4]" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { Icon: FaNodeJs, label: "Node.js", color: "text-[#5FA04E]" },
      { Icon: SiExpress, label: "Express.js", color: "text-foreground" },
      { Icon: SiPrisma, label: "Prisma", color: "text-foreground" },
      { Icon: SiFirebase, label: "Firebase", color: "text-[#FFCA28]" },
      { Icon: SiGooglecloud, label: "Cloud Functions", color: "text-[#4285F4]" },
      { Icon: SiLaravel, label: "Laravel", color: "text-[#FF2D20]" },
      { Icon: SiAppwrite, label: "Appwrite", color: "text-[#FD366E]" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { Icon: SiMongodb, label: "MongoDB", color: "text-[#47A248]" },
      { Icon: BiLogoPostgresql, label: "PostgreSQL", color: "text-[#4169E1]" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { Icon: SiVercel, label: "Vercel", color: "text-foreground" },
      { Icon: FaGithub, label: "GitHub", color: "text-foreground" },
      { Icon: SiClaude, label: "Claude Code", color: "text-[#D97757]" },
      { Icon: SiSupabase, label: "Supabase", color: "text-[#3FCF8E]" },
    ],
  },
  {
    title: "Also familiar with",
    skills: [
      { Icon: FaJava, label: "Java", color: "text-[#E76F00]" },
      { Icon: TbBrandCSharp, label: "C#", color: "text-[#9B4F96]" },
    ],
  },
];

const linkClass =
  "text-accent-blue underline-offset-4 hover:underline transition-colors";

function SectionTitle({ Icon, children }: { Icon: IconType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-2xl font-bold sm:text-3xl">
      <Icon className="text-accent-blue" /> {children}
    </h2>
  );
}

const About = () => {
  return (
    <div className="mx-auto max-w-4xl py-12 lg:py-20">
      {/* Header */}
      <Reveal>
        <header className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent-cyan/30 to-accent-violet/30 blur-xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet p-[3px]">
              <Image
                src={Me}
                alt="Elijah Monjardin"
                className="h-40 w-40 rounded-full object-cover lg:h-44 lg:w-44"
              />
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Elijah Monjardin
            </h1>
            <p className="mt-2 text-xl text-muted">Full Stack Software Engineer</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="https://github.com/ElijahMonj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
              >
                <FaGithub /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/elijah-monjardin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
              >
                <FaLinkedin /> LinkedIn
              </Link>
              <Link
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
              >
                <FaEnvelope /> Email
              </Link>
            </div>
            <p className="mt-5 max-w-xl text-muted">
              A full stack software engineer who builds and ships products across
              web and mobile. These days I&apos;m deep in React Native — taking
              apps end to end, from the first commit to the app store and
              everything after.
            </p>
          </div>
        </header>
      </Reveal>

      {/* Experience */}
      <section className="mt-16">
        <Reveal>
          <SectionTitle Icon={FaBriefcase}>Experience</SectionTitle>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2">
          {EXPERIENCES.map((exp) => (
            <RevealItem key={exp.company}>
              <ExperienceCard exp={exp} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Education */}
      <section className="mt-16">
        <Reveal>
          <SectionTitle Icon={FaGraduationCap}>Education</SectionTitle>
        </Reveal>
        <Reveal className="mt-6 space-y-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold">
              BS in Information Technology
            </h3>
            <p className="text-sm text-muted">
              STI College San Jose Del Monte — Graduated June 2025
            </p>
            <p className="mt-4 text-sm font-medium">Relevant coursework:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
              <li>Data Structures and Algorithms</li>
              <li>Web Systems and Technologies</li>
              <li>Advanced Database Systems (SQL)</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold">
              Full Stack JavaScript Curriculum
            </h3>
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
        </Reveal>
      </section>

      {/* Technical Skills */}
      <section className="mt-16">
        <Reveal>
          <SectionTitle Icon={FaLaptopCode}>Technical Skills</SectionTitle>
        </Reveal>
        <div className="mt-6 space-y-8">
          {SKILL_GROUPS.map((group) => (
            <Reveal key={group.title}>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={`${skill.label}-${i}`}
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <skill.Icon className={`h-5 w-5 ${skill.color}`} />
                    {skill.label}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-16">
        <Reveal>
          <SectionTitle Icon={FaCertificate}>Certifications & Courses</SectionTitle>
        </Reveal>
        <Reveal className="mt-6">
          <ul className="glass space-y-2 rounded-2xl p-6 text-sm text-muted">
            <li>Java Foundations — Oracle Academy</li>
            <li>Systems Administration — Linux Professional Institute</li>
          </ul>
        </Reveal>
      </section>

      {/* Featured Projects */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Featured <span className="text-gradient">projects</span>
          </h2>
          <p className="mt-2 text-muted">A couple of highlights from my work.</p>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2">
          <RevealItem>
            <CardCapstone />
          </RevealItem>
          <RevealItem>
            <Project
              title="NeoPal"
              description="An AI chat web app where you can talk with different AI characters and create your own virtual pal."
              technologies={["React", "Next.js", "TypeScript", "Groq", "Prisma", "PostgreSQL"]}
              image={neopal}
              github="https://github.com/ElijahMonj/ai-chat-app-web"
              link="https://neopal.vercel.app/"
              label="Personal Project"
            />
          </RevealItem>
        </RevealGroup>
        <Reveal className="mt-6">
          <p className="text-muted">
            For more, visit my{" "}
            <Link href="/projects" className={linkClass}>
              Projects page
            </Link>
            .
          </p>
        </Reveal>
      </section>

    </div>
  );
};

export default About;
