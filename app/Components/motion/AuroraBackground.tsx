/**
 * Ambient animated gradient backdrop (cyan -> blue -> violet).
 * Pure CSS transforms (no JS) for performance; the `animate-float` keyframe is
 * neutralized by the prefers-reduced-motion media query in globals.css.
 * Server component — rendered once in the root layout behind all content.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Blobs are softened on light theme, full strength on dark. */}
      <div className="absolute inset-0 opacity-50 dark:opacity-100">
        <div className="animate-float absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent-cyan/25 blur-[130px]" />
        <div className="animate-float absolute -right-40 top-1/4 h-[42rem] w-[42rem] rounded-full bg-accent-violet/25 blur-[140px] [animation-delay:-3s]" />
        <div className="animate-float absolute bottom-[-12rem] left-1/4 h-[34rem] w-[34rem] rounded-full bg-accent-blue/25 blur-[130px] [animation-delay:-6s]" />
      </div>

      {/* Fine grid overlay for depth. */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "var(--color-foreground)",
        }}
      />

      {/* Vignette so content stays legible over the gradients. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80" />
    </div>
  );
}
