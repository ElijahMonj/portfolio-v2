import Image from "next/image";
import image from "@/public/images/projects/capstone/2.jpg";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Capstone = () => {
  const technologies = [
    "React Native",
    "Expo",
    "Google Maps",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "Semaphore",
  ];

  return (
    <article className="group glass flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 md:flex-row">
      <div className="relative overflow-hidden md:w-2/5">
        <Image
          src={image}
          alt="TricyCall preview"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-3 top-3 select-none rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          IT Capstone Project
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold">TricyCall</h3>
        <p className="mt-2 flex-1 text-sm text-muted">
          A cloud-based multi-platform tricycle hailing system with real-time
          chat, emergency assistance, and GPS tracking, built for Tower TODA in
          the Philippines.
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
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Read Case Study <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Capstone;
