import Image from "next/image";
import capstone from "@/public/images/projects/capstone/2.jpg";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CardCapstone = () => {
  const technologies = ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Socket.io"];

  return (
    <article className="group glass flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={capstone}
          alt="TricyCall preview"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-3 top-3 select-none rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          Capstone Project
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold">TricyCall: Tricycle Hailing App</h3>
        <p className="mt-2 flex-1 text-sm text-muted">
          A tricycle hailing app for both drivers and passengers with an admin
          panel, built for Tower TODA.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="select-none rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href="/projects/capstone"
            aria-label="View TricyCall case study"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Case Study <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardCapstone;
