import AchievementShowcase from "./AchievementShowcase";
import ExperienceCard from "../ExperienceCard";
import SectionHeading from "../SectionHeading";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import Section from "./Section";
import { EXPERIENCES } from "@/app/lib/content";

export default function Work() {
  // The role carrying a `showcase` block leads the section as a full-width
  // achievement panel; everything else falls through to the ordinary grid.
  const featured = EXPERIENCES.find((exp) => exp.showcase);
  const rest = EXPERIENCES.filter((exp) => !exp.showcase);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Where I've Worked"
        title="Work Experience"
        highlight="Experience"
        lead="A mix of professional experience, academic research, and projects I build for fun."
      />

      {featured && <AchievementShowcase exp={featured} />}

      <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((exp) => (
          <RevealItem key={exp.company}>
            <ExperienceCard exp={exp} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
