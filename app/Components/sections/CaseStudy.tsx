import Image from "next/image";
import Link from "next/link";
import Me from "@/public/images/me.jpg";
import { FaUser } from "react-icons/fa6";
import Carousel from "../Carousel";
import { TRICYCALL_OVERVIEW } from "@/app/lib/projects";

const teamMembers = [
  {
    name: "Louis Sindao",
    link: "https://ph.linkedin.com/in/louis-matthew-sindao-662b48334",
    role: "Project Manager",
  },
  {
    name: "Jake Birad",
    link: "https://ph.linkedin.com/in/jake-louie-birad",
    role: "Programmer",
  },
  {
    name: "Jehiel Camiling",
    link: "https://ph.linkedin.com/in/jehiel-noelle-camiling",
    role: "Quality Assurance",
  },
];

const features = [
  ["Dynamic Booking", "Real-time booking lets passengers book rides, set passenger count, and apply discounts."],
  ["Live Tracking", "Real-time location tracking for passengers and drivers for accurate trip statuses."],
  ["Emergency Assistance", "Automatic SMS alerts to all drivers during emergencies, improving safety."],
  ["Chat Support", "Real-time chat for better communication between passengers and drivers."],
  ["Driver & Passenger Dashboards", "Intuitive dashboards to manage trips, availability, and history."],
  ["Ticketing & Reviews", "Report, rating, and review system to maintain service quality."],
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

/** Narrow reading measure for long-form prose; media and grids run wider. */
const prose = "mx-auto max-w-2xl";
const wide = "mx-auto max-w-5xl";

export default function CaseStudy() {
  return (
    <div>
      {/* Carousel */}
      <div className="mb-12">
        <Carousel />
      </div>

      {/* Team */}
      <div className={`${wide} my-16`}>
        <h3 className="mb-6 text-center font-display text-2xl font-bold">Team</h3>
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image
            src={Me}
            alt="Elijah Monjardin, UI developer and researcher on TricyCall"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover ring-2 ring-accent-blue/40"
          />
          <div className="text-center">
            <p className="font-medium">Elijah Monjardin</p>
            <p className="text-sm text-muted">UI Developer &amp; Researcher</p>
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
              <span
                aria-hidden
                className="grid h-16 w-16 place-items-center rounded-full border border-border bg-foreground/5 text-muted transition-transform duration-300 group-hover:scale-110"
              >
                <FaUser className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className={`${prose} my-16`}>
        <h3 className="mb-4 text-center font-display text-2xl font-bold">Overview</h3>
        <p className="text-muted">{TRICYCALL_OVERVIEW}</p>
      </div>

      {/* Features */}
      <div className={`${wide} my-16`}>
        <h3 className="mb-6 text-center font-display text-2xl font-bold">Key Features</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, desc]) => (
            <div key={title} className="glass h-full rounded-2xl p-5">
              <h4 className="font-semibold text-accent-blue">{title}</h4>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className={`${wide} my-16`}>
        <h3 className="mb-4 text-center font-display text-2xl font-bold">Technologies Used</h3>
        <p className={`${prose} mb-6 text-muted`}>
          The team used the following technologies to build the app. My
          contributions focused on UI design, coding the interface in React
          Native, and conducting user research and documentation.
        </p>
        <ul className="grid gap-3 lg:grid-cols-2">
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
      </div>

      {/* Challenges */}
      <div className={`${prose} my-16`}>
        <h3 className="mb-4 text-center font-display text-2xl font-bold">
          Challenges &amp; Learnings
        </h3>
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
      </div>

      {/* Outcome */}
      <div className={`${prose} my-16`}>
        <h3 className="mb-4 text-center font-display text-2xl font-bold">Outcome</h3>
        <p className="text-muted">
          TricyCall is a fully functional prototype, tested in real-world
          scenarios and recognized for its innovative approach to commuter
          needs. It received positive feedback during its presentation and was
          selected for the STI Research Symposium 2024, showcasing its impact
          and relevance in solving transportation challenges.
        </p>
      </div>
    </div>
  );
}
