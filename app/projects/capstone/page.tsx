import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FiChevronRight } from "react-icons/fi";
import Me from "@/public/images/me.jpg";
import Carousel from "./carousel";
import { Reveal } from "@/app/Components/motion/Reveal";
import JsonLd from "@/app/Components/JsonLd";
import { SITE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "TricyCall Case Study",
  description:
    "Explore the TricyCall case study — a cloud-based tricycle hailing app built for Tower TODA, Philippines. Features, technologies, learnings, and outcomes.",
  alternates: { canonical: "/projects/capstone" },
  openGraph: {
    title: "TricyCall Case Study | Elijah Monjardin",
    description:
      "A cloud-based tricycle hailing app developed for Tower TODA, Philippines — features, tech, and outcomes.",
    type: "article",
    url: `${SITE.url}/projects/capstone`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE.url}/projects` },
    {
      "@type": "ListItem",
      position: 3,
      name: "TricyCall Case Study",
      item: `${SITE.url}/projects/capstone`,
    },
  ],
};

const teamMembers = [
  {
    name: "Louis Sindao",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHRgkBeFR8iCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729680719297?e=2147483647&v=beta&t=OGxh8adRfVfWyLBFq-K1q5KuNH21Fz6O38Mgr_p1J4I",
    link: "https://ph.linkedin.com/in/louis-matthew-sindao-662b48334",
    role: "Project Manager",
  },
  {
    name: "Jake Birad",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGd602vZHgGmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730297809438?e=2147483647&v=beta&t=GM2pAGtGu535BO6opE2Ym_JTkAqLeGEzofWEjMin4jI",
    link: "https://ph.linkedin.com/in/jake-louie-birad",
    role: "Programmer",
  },
  {
    name: "Jehiel Camiling",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFH8N3exVcFWw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730298032434?e=2147483647&v=beta&t=gii2ucvrpASh4meP4NLZ6LzZzaw_TiKntepaROeKuHQ",
    link: "https://ph.linkedin.com/in/jehiel-noelle-camiling",
    role: "Quality Assurance",
  },
];

const features = [
  ["Dynamic booking", "Real-time booking lets passengers book rides, set passenger count, and apply discounts."],
  ["Live tracking", "Real-time location tracking for passengers and drivers for accurate trip statuses."],
  ["Emergency assistance", "Automatic SMS alerts to all drivers during emergencies, improving safety."],
  ["Chat support", "Real-time chat for better communication between passengers and drivers."],
  ["Driver & passenger dashboards", "Intuitive dashboards to manage trips, availability, and history."],
  ["Ticketing & reviews", "Report, rating, and review system to maintain service quality."],
];

const technologies = [
  ["React Native", "Building the cross-platform mobile apps."],
  ["Expo", "Simplifying React Native development."],
  ["Google Maps", "Maps and geolocation features."],
  ["Node.js & Express", "Server-side runtime and APIs."],
  ["MongoDB", "NoSQL database solution."],
  ["Socket.io", "Real-time communication."],
  ["Semaphore", "SMS alerts and OTP."],
];

const Page = () => {
  return (
    <article className="py-12 lg:py-16">
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <Reveal>
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1.5 text-sm text-muted"
        >
          <Link href="/" className="transition-colors hover:text-accent-blue">
            Home
          </Link>
          <FiChevronRight className="h-3.5 w-3.5" />
          <Link href="/projects" className="transition-colors hover:text-accent-blue">
            Projects
          </Link>
          <FiChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">TricyCall</span>
        </nav>
      </Reveal>

      {/* Header + carousel */}
      <Reveal className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          IT Capstone Project
        </p>
        <h1 className="mb-8 mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          TricyCall: A <span className="text-gradient">Tricycle Hailing</span> App
        </h1>
        <Carousel />
      </Reveal>

      {/* Team */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-6 font-display text-2xl font-bold">Team</h2>
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image
            src={Me}
            alt="Elijah Monjardin"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover ring-2 ring-accent-blue/40"
          />
          <div className="text-center">
            <p className="font-medium">Elijah Monjardin</p>
            <p className="text-sm text-muted">UI Developer & Researcher</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={member.link}
              key={member.name}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Overview */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold">Overview</h2>
        <p className="text-muted">
          A cloud-based, multi-platform tricycle hailing system with real-time
          chat, emergency assistance, and GPS tracking for Tower TODA. The
          project aimed to address the challenges faced by commuters of Tower
          TODA — a barangay in the Philippines — by providing a convenient and
          reliable mode of transportation.
        </p>
      </Reveal>

      {/* Features */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-6 font-display text-2xl font-bold">Key Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(([title, desc]) => (
            <div key={title} className="glass rounded-2xl p-5">
              <h3 className="font-semibold text-accent-blue">{title}</h3>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Technologies */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold">Technologies Used</h2>
        <p className="mb-6 text-muted">
          The team used the following technologies to build the app. My
          contributions focused on UI design, coding the interface in React
          Native, and conducting user research and documentation.
        </p>
        <ul className="space-y-3">
          {technologies.map(([name, desc]) => (
            <li key={name} className="flex gap-3 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
              <span>
                <strong className="font-semibold">{name}:</strong>{" "}
                <span className="text-muted">{desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Challenges */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold">Challenges & Learnings</h2>
        <p className="mb-4 text-muted">
          A key challenge was understanding the needs of commuters in Tower TODA.
          I learned how to talk to a client and to write and conduct interviews
          and surveys that respondents could understand, gathering insights that
          shaped the core functionality and helped gauge users&apos; tech
          literacy.
        </p>
        <p className="text-muted">
          Another challenge was making the interface friendly for both drivers
          and passengers. As the UX/UI designer, I researched inspirations to
          create a design that is easy to navigate while remaining visually
          appealing — and learned to communicate effectively with developers to
          ensure it was implemented correctly.
        </p>
      </Reveal>

      {/* Outcome */}
      <Reveal className="mx-auto my-16 max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold">Outcome</h2>
        <p className="text-muted">
          TricyCall is a fully functional prototype, tested in real-world
          scenarios and recognized for its innovative approach to commuter
          needs. It received positive feedback during its presentation and was
          selected for the STI Research Symposium 2024, showcasing its impact
          and relevance in solving transportation challenges.
        </p>
      </Reveal>
    </article>
  );
};

export default Page;
