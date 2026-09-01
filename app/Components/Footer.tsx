import Link from "next/link";
import { NAV_LINKS, SITE } from "@/app/lib/site";

/**
 * Deliberately thin: the social links live in #contact directly above, so the
 * footer is just wayfinding plus the copyright line.
 */
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-300 hover:text-accent-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
