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
  /** Highlighted role — its card spans the full width of the experience grid. */
  featured?: boolean;
  /** Under NDA — the card shows an "NDA" pill next to the company name. */
  confidential?: boolean;
  /** Closing line on the card, paired with an "Ask me" mailto link. */
  note?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack React Native Developer",
    company: "Confidential",
    type: "Full-time",
    duration: "Jun 2026 – Present",
    bullets: [
      "Built and shipped a **React Native (Expo)** app end to end — every feature, the release pipeline, and the **App Store** and **Google Play** submissions — reaching ==100k+ downloads== in less than 1 month.",
      "Own the full **AdMob** stack: ad placements, **mediation** across multiple ad networks, and tuned mediation groups and eCPM floors that grew ad revenue well past the default single-network setup.",
      "Use **Firebase** to its full extent — **Cloud Functions** keeping sensitive logic, keys, and validation off the client, **App Check** locking down API access, plus **Firestore**, **push notifications**, **Remote Config**, and **Analytics** — with efficient queries and caching keeping cloud costs low as usage scaled.",
      "Implemented **RevenueCat** subscriptions and **in-app purchases** with region-specific pricing and offerings, entitlements reliably synced back into the app, and hands-on resolution of every customer billing, restore, and purchase issue.",
      "Keep the backend stable on **Google Cloud** through continuous releases and fixes, versioned data migrations, and limited-time in-app events — plus a **Next.js** admin dashboard that lets the team run all of it without a deploy.",
    ],
    stack: ["React Native", "Expo", "Firebase", "Google Cloud", "Next.js", "RevenueCat", "AdMob"],
    featured: true,
    confidential: true,
    note: "My biggest project so far — happy to tell you more about it.",
  },
  {
    role: "Software Solutions Specialist",
    company: "The Riviere Group, LLC",
    url: "https://therivieregroup.org/",
    type: "Part-time",
    duration: "May 2025 – Oct 2025",
    bullets: [
      "Maintained and updated client **WordPress** sites, fixing bugs and improving reliability.",
      "Contributed to ongoing client projects, using AI tools like **Cursor** to speed up delivery.",
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
      "Worked on a Smart Logistics System using **Laravel** + **Vue.js**.",
      "Collaborated with fellow interns to add a registration portal, customizable landing page, improved **SEO**, and **QR code** implementation.",
    ],
    stack: ["Laravel", "Vue.js", "SEO", "QR Code"],
  },
];
