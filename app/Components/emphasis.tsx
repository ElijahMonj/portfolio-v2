import type { ReactNode } from "react";

/**
 * Inline emphasis inside bullet copy: `**term**` lifts a technology out of the
 * muted body text, `==metric==` renders a headline number in the brand gradient.
 *
 * Shared by ExperienceCard and AchievementShowcase, which render the same
 * bullets in two different presentations.
 */
const EMPHASIS = /(\*\*[^*]+\*\*|==[^=]+==)/g;

export function renderBullet(text: string): ReactNode[] {
  return text.split(EMPHASIS).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("==")) {
      return (
        <strong key={i} className="text-gradient whitespace-nowrap font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
