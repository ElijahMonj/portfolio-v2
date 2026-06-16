/** Shared portfolio content (experience, etc.) reused across pages. */

export type EmploymentType = "Full-time" | "Part-time" | "Internship" | "Freelance";

export type Experience = {
  role: string;
  company: string;
  /** Optional company link. */
  url?: string;
  type: EmploymentType;
  duration: string;
  bullets: string[];
  stack: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack React Native Developer",
    // TODO: replace with the real company name (or keep "Confidential" if under NDA).
    company: "Confidential",
    type: "Full-time",
    duration: "Jun 2026 – Present",
    bullets: [
      "Develop and maintain a production React Native (Expo) app end to end — from feature work to App Store and Google Play submissions.",
      "Built monetization with RevenueCat subscriptions & in-app purchases plus AdMob mediation across multiple ad networks.",
      "Engineered the backend and a Next.js admin dashboard on Firebase — Cloud Functions, Firestore, and push notifications.",
    ],
    stack: ["React Native", "Expo", "Firebase", "Cloud Functions", "Next.js", "RevenueCat", "AdMob"],
  },
  {
    role: "Software Solutions Specialist",
    company: "The Riviere Group, LLC",
    url: "https://therivieregroup.org/",
    type: "Part-time",
    duration: "May 2025 – Oct 2025",
    bullets: [
      "Maintained and updated client WordPress sites, fixing bugs and improving reliability.",
      "Contributed to ongoing client projects, using AI tools like Cursor to speed up delivery.",
    ],
    stack: ["WordPress", "React", "Next.js", "Cursor"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Lamina Studios, LLC",
    url: "https://laminatechstudios.com/",
    type: "Internship",
    duration: "Feb 2025 – May 2025",
    bullets: [
      "Worked on a Smart Logistics System using Laravel + Vue.js.",
      "Collaborated with fellow interns to add a registration portal, customizable landing page, improved SEO, and QR code implementation.",
    ],
    stack: ["Laravel", "Vue.js", "SEO", "QR Code"],
  },
];
