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
import JsonLd from "./Components/JsonLd";
import { SITE, SAME_AS } from "./lib/site";

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.jobTitle,
  email: `mailto:${SITE.email}`,
  sameAs: SAME_AS,
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Mobile Development",
    "Full Stack Development",
  ],
  address: { "@type": "PostalAddress", addressCountry: "PH" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
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

          <BackToTop />
        </Providers>

        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
