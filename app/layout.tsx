import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";
import Logo from "@/app/Components/logo";
import Footer from "./Components/Footer";
import DesktopNav from "./Components/DesktopNav";
import MobileMenu from "./Components/MobileMenu";
import ThemeToggle from "./Components/ThemeToggle";
import AuroraBackground from "./Components/motion/AuroraBackground";
import ScrollProgress from "./Components/motion/ScrollProgress";
import BackToTop from "./Components/motion/BackToTop";
import SectionRail from "./Components/motion/SectionRail";
import JsonLd from "./Components/JsonLd";
import { SITE, SAME_AS, TECH_STACK, PERSON_ID, WEBSITE_ID } from "./lib/site";
import { EXPERIENCES } from "./lib/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Elijah Monjardin",
    default: "Elijah Monjardin | Full Stack Software Engineer",
  },
  description: SITE.description,
  keywords: [
    "Elijah Monjardin",
    "Full Stack Software Engineer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "Philippines Developer",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Permits full-size image thumbnails in results rather than a 128px one.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Elijah Monjardin | Full Stack Software Engineer",
    description: SITE.description,
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Monjardin | Full Stack Software Engineer",
    description: SITE.description,
  },
  verification: {
    google: "ZzwOU7xIRSjOPBdQQqdXsaX7N0s_RD3jK5zjdkoeN_s",
  },
};

/**
 * One @graph rather than loose blocks, so the entities can reference each other
 * by @id. ProfilePage is schema.org's type for exactly this — a page about one
 * person — which is what the site became when it collapsed to a single page.
 *
 * `knowsAbout` is DERIVED FROM TECH_STACK on purpose: it used to be a
 * hand-written list and had already drifted (no Expo, Supabase, Stripe,
 * RevenueCat or AdMob, all of which the page shows).
 */
/** The role still in progress drives worksFor / hasOccupation, so naming a new
 * employer in content.ts updates the schema without touching this file. */
const currentRole = EXPERIENCES.find((exp) => exp.duration.includes("Present"));

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#profilepage`,
      url: SITE.url,
      name: `${SITE.name} | ${SITE.jobTitle}`,
      description: SITE.description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/images/me.jpg`,
      jobTitle: SITE.jobTitle,
      email: `mailto:${SITE.email}`,
      sameAs: SAME_AS,
      knowsAbout: [
        ...TECH_STACK.map((tech) => tech.label),
        "Mobile app development",
        "Full stack development",
        "App Store and Google Play releases",
        "Subscription and ad monetization",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "STI College San Jose Del Monte",
      },
      ...(currentRole && {
        worksFor: {
          "@type": "Organization",
          name: currentRole.company,
          ...(currentRole.url ? { url: currentRole.url } : {}),
        },
        hasOccupation: {
          "@type": "Occupation",
          name: currentRole.role,
          occupationalCategory: "15-1252.00 Software Developers",
        },
      }),
      address: { "@type": "PostalAddress", addressCountry: SITE.countryCode },
      homeLocation: { "@type": "Country", name: SITE.location },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <Providers>
          <AuroraBackground />
          <ScrollProgress />

          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b border-border bg-card backdrop-blur-xl">
              <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
                <Link href="/" aria-label="Home" className="flex items-center gap-2">
                  <Logo className="h-9 w-9" />
                  <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
                    Elijah<span className="text-gradient">.</span>
                  </span>
                </Link>

                <div className="flex items-center gap-3">
                  <div className="hidden lg:block">
                    <DesktopNav />
                  </div>
                  <div className="hidden lg:block">
                    <ThemeToggle />
                  </div>
                  <MobileMenu />
                </div>
              </div>
            </header>

            <main className="mx-auto w-full max-w-7xl flex-1 px-5">{children}</main>

            <Footer />
          </div>

          <SectionRail />
          <BackToTop />
        </Providers>

        <JsonLd data={siteSchema} />
      </body>
    </html>
  );
}
