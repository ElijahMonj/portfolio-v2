/**
 * The two featured projects.
 *
 * Lives here rather than inline in the section so the cards (client) and the
 * JSON-LD entities (server, in sections/Projects.tsx) read the same strings —
 * a description edited in one place can't leave the structured data stale.
 */

import type { StaticImageData } from "next/image";
import tricycall from "@/public/images/projects/capstone/2.jpg";
import neopal from "@/public/images/projects/neopal.png";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  /** Describes what the preview actually shows; falls back to a generic label. */
  imageAlt?: string;
  label: string;
  github?: string;
  link?: string;
};

export const PROJECTS = {
  tricycall: {
    title: "TricyCall",
    description:
      "A cloud-based multi-platform tricycle hailing system with real-time chat, emergency assistance, and GPS tracking, built for Tower TODA in the Philippines.",
    technologies: [
      "React Native",
      "Expo",
      "Google Maps",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Semaphore",
    ],
    image: tricycall,
    imageAlt:
      "TricyCall feature overview: book with a live map, real-time chat with your driver, OTP-verified sign-in, and a feedback system.",
    label: "IT Capstone Project",
  },
  neopal: {
    title: "NeoPal",
    description:
      "An AI chat web app where you can talk with different AI characters and even create your own virtual pal!",
    technologies: [
      "React",
      "Next.js",
      "NextAuth",
      "TypeScript",
      "Groq",
      "Llama",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
    image: neopal,
    imageAlt:
      "The NeoPal web app showing a gallery of AI characters to chat with and a panel for creating your own virtual pal.",
    label: "Personal Hobby Project",
    github: "https://github.com/ElijahMonj/ai-chat-app-web",
    link: "https://neopal.vercel.app/",
  },
} satisfies Record<string, Project>;

/**
 * The case study's own overview copy, duplicated out of sections/CaseStudy.tsx
 * for the CreativeWork entity. The case study renders inside a closed <dialog>
 * (display:none), and search engines discount hidden text — the structured data
 * is what keeps this content legible to them.
 */
export const TRICYCALL_OVERVIEW =
  "A cloud-based, multi-platform tricycle hailing system with real-time chat, emergency assistance, and GPS tracking for Tower TODA. The project aimed to address the challenges faced by commuters of Tower TODA — a barangay in the Philippines — by providing a convenient and reliable mode of transportation.";
