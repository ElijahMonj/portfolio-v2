"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

function format(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * A number that counts up to its value the first time it scrolls into view.
 *
 * The server renders the *final* value, so the real figure is in the HTML for
 * crawlers and for anyone without JS. A mount effect resets it to zero — which
 * is safe because this only ever renders below the fold, so the reset happens
 * long before the element is painted.
 *
 * prefers-reduced-motion is checked explicitly: <MotionConfig reducedMotion="user">
 * in providers.tsx gates motion *components'* transforms, but a raw animate()
 * driving text content is not covered by it.
 */
export default function CountUp({
  value,
  decimals = 0,
  suffix,
  duration = 2,
  className,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  /** Seconds. */
  duration?: number;
  className?: string;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (numberRef.current) numberRef.current.textContent = format(0, decimals);
  }, [reduce, decimals]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (numberRef.current) numberRef.current.textContent = format(v, decimals);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, decimals]);

  return (
    <span ref={rootRef} className={className}>
      <span className="sr-only">{`${format(value, decimals)}${suffix ?? ""}`}</span>
      <span ref={numberRef} aria-hidden className="tabular-nums">
        {format(value, decimals)}
      </span>
      {suffix && <span aria-hidden>{suffix}</span>}
    </span>
  );
}
