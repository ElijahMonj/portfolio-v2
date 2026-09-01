/** Shared portfolio content (experience, etc.) reused across pages. */

export type EmploymentType = "Full-time" | "Part-time" | "Internship" | "Freelance";

/** A headline figure in the achievement showcase. Rendered by <CountUp>. */
export type ShowcaseStat = {
  value: number;
  /** Decimal places to hold while counting (keeps 4.6 from rendering as 5). */
  decimals?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
};

/** Icon keys are resolved in AchievementShowcase so this file stays pure data. */
export type ShowcasePillar = {
  icon: "build" | "monetize" | "maintain";
  title: string;
  desc: string;
};

export type Experience = {
  role: string;
  company: string;
  /** Optional company link. */
  url?: string;
  type: EmploymentType;
  duration: string;
  bullets: string[];
  stack: string[];
  /**
   * Presents this role as the full-width achievement showcase at the top of
   * #work instead of an ordinary card. The bullets above are still rendered,
   * as secondary detail beneath the pillars.
   */
  showcase?: {
    /** Short label above the role title, e.g. "Current role". */
    marker?: string;
    /** One line framing the figures below it. */
    lead?: string;
    stats: ShowcaseStat[];
    pillars: ShowcasePillar[];
  };
  /** Closing line on the card, paired with an "Ask me" mailto link. */
  note?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack React Native Developer",
    company: "Growth Chain LLC",
    url: "https://www.growthchain.app/",
    type: "Full-time",
    duration: "June 2025 - Present",
    bullets: [
      "Built and shipped a **React Native (Expo)** app end to end, covering every feature, the release pipeline, and the **App Store** and **Google Play** submissions, reaching ==100k+ downloads== in less than 1 month.",
      "Owned the full **AdMob** stack: ad placements, **mediation** across multiple ad networks, and tuned mediation groups and eCPM floors that grew ad revenue well past the default single network setup.",
      "Used **Firebase** to its full extent, with **Cloud Functions** keeping sensitive logic, keys, and validation off the client, **App Check** locking down API access, plus **Firestore**, **push notifications**, **Remote Config**, and **Analytics**, with efficient queries and caching keeping cloud costs low as usage scaled.",
      "Implemented **RevenueCat** subscriptions and **in app purchases** with region specific pricing and offerings, entitlements reliably synced back into the app, and hands on resolution of every customer billing, restore, and purchase issue.",
      "Kept the backend stable on **Google Cloud** through continuous releases and fixes, versioned data migrations, and limited time in app events, plus a **Next.js** admin dashboard that lets the team run all of it without a deploy.",
    ],
    stack: ["React Native", "Expo", "Firebase", "Google Cloud", "Next.js", "RevenueCat", "AdMob"],
    showcase: {
      marker: "Current role",
      lead: "Built and shipped an app end to end.",
      stats: [
        {
          value: 100000,
          suffix: "+",
          label: "downloads",
          sublabel: "in under one month",
        },
        {
          value: 4.6,
          decimals: 1,
          label: "store rating",
          sublabel: "from 12.3K reviews",
        },
        {
          value: 98.83,
          decimals: 2,
          suffix: "%",
          label: "crash-free sessions",
          sublabel: "across every release",
        },
      ],
      pillars: [
        {
          icon: "build",
          title: "Built & Shipped",
          desc: "Every feature, the release pipeline, and both store submissions — end to end, on iOS and Android.",
        },
        {
          icon: "monetize",
          title: "Monetized",
          desc: "AdMob mediation across multiple networks, plus RevenueCat subscriptions and in app purchases with region specific pricing.",
        },
        {
          icon: "maintain",
          title: "Maintained",
          desc: "Cloud Functions, App Check, versioned migrations, and a Next.js admin dashboard the team runs without a deploy.",
        },
      ],
    },
    note: "My biggest project so far, happy to tell you more about it.",
  },
  {
    role: "Software Solutions Specialist",
    company: "The Riviere Group LLC",
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
    role: "Full Stack Developer Intern",
    company: "Lamina Studios LLC",
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
