import type { ReactNode } from "react";

/**
 * Anchor target for the single-page nav. `scroll-mt-24` clears the 64px sticky
 * header so a hash jump doesn't land the heading underneath it.
 */
export default function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      {children}
    </section>
  );
}
