import { Metadata } from "next";
import neopal from "@/public/images/projects/neopal.png";
import Project from "./Project";
import Capstone from "./Capstone";
import ExperienceCard from "../Components/ExperienceCard";
import { Reveal, RevealGroup, RevealItem } from "../Components/motion/Reveal";
import { EXPERIENCES } from "../lib/content";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Elijah Monjardin's portfolio of professional, academic, and personal projects in React, Next.js, and full-stack web development.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Elijah Monjardin",
    description:
      "View Elijah Monjardin's professional, academic, and personal web development projects.",
    url: `${SITE.url}/projects`,
  },
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

const Projects = () => {
  return (
    <div className="py-12 lg:py-20">
      <Reveal className="mb-16 max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          My <span className="text-gradient">work</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          A mix of professional experience, academic research, and projects I
          build for fun.
        </p>
      </Reveal>

      {/* Work Experience */}
      <section className="mb-20">
        <SectionHeading eyebrow="Where I've worked" title="Work Experience" />
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {EXPERIENCES.map((exp) => (
            <RevealItem key={exp.company}>
              <ExperienceCard exp={exp} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Academic */}
      <section className="mb-20">
        <SectionHeading eyebrow="Capstone & research" title="Academic" />
        <Reveal>
          <Capstone />
        </Reveal>
      </section>

      {/* Personal */}
      <section>
        <SectionHeading eyebrow="Built for fun" title="Personal Projects" />
        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          <RevealItem>
            <Project
              title="NeoPal"
              description="An AI chat web app where you can talk with different AI characters and even create your own virtual pal!"
              technologies={[
                "React",
                "Next.js",
                "NextAuth",
                "TypeScript",
                "Groq",
                "Llama",
                "Prisma",
                "PostgreSQL",
                "Cloudinary",
              ]}
              image={neopal}
              github="https://github.com/ElijahMonj/ai-chat-app-web"
              link="https://neopal.vercel.app/"
              label="Personal Hobby Project"
            />
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
};

export default Projects;
