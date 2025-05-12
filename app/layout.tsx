import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Logo from '@/app/Components/logo';
import Footer from "./Components/Footer";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import SidebarContent from "./Components/SidebarContent";
import { IoClose } from "react-icons/io5";

const inter = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elijahmonjardin.tech"),
  title: {
    template: '%s | Elijah Monjardin',
    default: 'Elijah Monjardin | React Developer & IT Student',
  },
  description: "Elijah Monjardin is a React Developer and IT graduate specializing in web development. Explore his portfolio showcasing React, Next.js, and full-stack projects.",
  keywords: ["Elijah Monjardin", "React Developer", "Web Developer", "IT Student", "Portfolio", "Next.js Developer", "Full Stack Developer", "Philippines Developer"],
  authors: [{ name: "Elijah Monjardin" }],
  creator: "Elijah Monjardin",
  openGraph: {
    title: "Elijah Monjardin | React Developer & IT Student",
    description: "Dive into Elijah Monjardin's portfolio to discover innovative web projects, technical expertise, and a passion for creating user-focused digital solutions.",
    type: "website",
    locale: "en_US",
    url: "https://elijahmonjardin.tech/",
    siteName: "Elijah Monjardin",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elijah Monjardin - React Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Monjardin | React Developer & IT Student",
    description: "Explore Elijah Monjardin's portfolio showcasing innovative web development projects and technical expertise.",
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: "ZzwOU7xIRSjOPBdQQqdXsaX7N0s_RD3jK5zjdkoeN_s",
  },
  alternates: {
    canonical: "https://elijahmonjardin.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://elijahmonjardin.tech" />
        <meta name="google-site-verification" content="ZzwOU7xIRSjOPBdQQqdXsaX7N0s_RD3jK5zjdkoeN_s" />
      </head>
      <body className={`${inter.className} bg-white text-dark`}>
        <div className="min-h-screen flex flex-col w-full max-w-7xl mx-auto">
          {/* Main Layout Container */}
          <div className="flex">
            {/* Drawer Toggle (Hidden Checkbox) */}
            <input id="my-drawer" type="checkbox" className="hidden peer" />

            <div className="flex-1 flex flex-col min-h-screen">
              {/* Navbar */}
              <nav className="w-full flex items-center justify-between h-24 px-5">
                {/* Logo */}
                <Link href={'/'} aria-label="Home">
                  <Logo className="h-12 w-12 fill-dark hover:fill-darkgray transition duration-500 ease-out cursor-pointer" />
                </Link>

                {/* Hamburger Icon for Drawer (Visible on small screens) */}
                <div className="lg:hidden">
                  <label htmlFor="my-drawer" aria-label="Open sidebar">
                    <MdMenu className="w-6 h-20 cursor-pointer hover:text-darkgray transition duration-500 ease-out" />
                  </label>
                </div>

                {/* Navbar Links (Visible on large screens) */}
                <div className="hidden lg:block">
                  <ul className="flex space-x-4">
                    <li><Link href={'/projects'} className="hover:text-darkgray transition duration-500 ease-out">Projects</Link></li>
                    <li><Link href={'/about'} className="hover:text-darkgray transition duration-500 ease-out">About</Link></li>
                  </ul>
                </div>
              </nav>

              {/* Page Content */}
              <main className="flex-1 items-center flex">
                {children}
              </main>
              
              {/* Footer */}
              <Footer />
            </div>

            {/* Drawer Overlay (Visible when drawer is open) */}
            <div className="fixed inset-0 z-40 bg-black opacity-50 hidden peer-checked:block"></div>

            {/* Drawer Sidebar */}
            <aside
              role="dialog"
              className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-4 transform translate-x-full transition-transform duration-300 ease-in-out peer-checked:translate-x-0"
            >
              {/* Close Button */}
              <label
                htmlFor="my-drawer"
                aria-label="Close sidebar"
                className="absolute top-4 right-4 cursor-pointer"
              >
                <IoClose className="w-6 h-6 hover:text-darkgray transition duration-500 ease-out" />
              </label>
              <SidebarContent />
             
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}