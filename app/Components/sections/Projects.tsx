import CaseStudy from "./CaseStudy";
import ProjectsShowcase from "./ProjectsShowcase";
import SectionHeading from "../SectionHeading";
import Section from "./Section";
import JsonLd from "../JsonLd";
import { PROJECTS, TRICYCALL_OVERVIEW } from "@/app/lib/projects";
import { SITE, PERSON_ID, WEBSITE_ID } from "@/app/lib/site";

/*
 * Project entities, kept next to the data they describe.
 *
 * TricyCall is a CreativeWork rather than a SoftwareApplication: it's an
 * academic capstone prototype, not a distributed app. It matters more than the
 * usual schema block — the case study renders inside a closed <dialog>, which
 * is display:none, and search engines discount hidden text. Structured data is
 * unaffected by CSS, so this is what keeps that content legible to them.
 */
const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "@id": `${SITE.url}/#tricycall`,
      name: PROJECTS.tricycall.title,
      headline: "TricyCall: a cloud-based tricycle hailing app for Tower TODA",
      description: TRICYCALL_OVERVIEW,
      about: "Tricycle hailing, real-time GPS tracking and trip booking in the Philippines",
      keywords: PROJECTS.tricycall.technologies,
      award: "Selected for the STI Research Symposium 2024",
      url: `${SITE.url}/#case-study`,
      inLanguage: "en",
      creator: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
    },
    {
      "@type": "WebApplication",
      "@id": `${SITE.url}/#neopal`,
      name: PROJECTS.neopal.title,
      description: PROJECTS.neopal.description,
      url: PROJECTS.neopal.link,
      codeRepository: PROJECTS.neopal.github,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web browser",
      keywords: PROJECTS.neopal.technologies,
      inLanguage: "en",
      author: { "@id": PERSON_ID },
    },
  ],
};

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Things I've Built"
        title="Featured Projects"
        highlight="Projects"
        lead="One built for a real community, one built purely for fun."
      />
      <ProjectsShowcase caseStudy={<CaseStudy />} />
      <JsonLd data={projectsSchema} />
    </Section>
  );
}
