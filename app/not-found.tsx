import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

/**
 * Without this file the 404 falls through to the root layout's metadata, which
 * means a missing page advertises itself with the portfolio's own description
 * and is indexable by default.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <p className="text-gradient font-display text-6xl font-bold leading-none sm:text-7xl">
        404
      </p>
      <h1 className="font-display text-2xl font-bold sm:text-3xl">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-muted">
        The link may be out of date — the site is a single page now, so
        everything lives on the home page.
      </p>
      <Link
        href="/"
        className="group mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 font-medium text-white shadow-lg shadow-accent-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        Back home
      </Link>
    </div>
  );
}
