"use client";

import { useEffect, useState, type ReactNode } from "react";
import CaseStudyModal from "../CaseStudyModal";
import ProjectCard from "../ProjectCard";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import { PROJECTS } from "@/app/lib/projects";

const MODAL_ID = "case-study";

/**
 * The two-up project grid plus the TricyCall case study, which opens in a modal
 * rather than living on its own route.
 *
 * `caseStudy` arrives as an already server-rendered node, so the case study's
 * markup and static image imports never enter the client bundle — only this
 * toggle does.
 */
export default function ProjectsShowcase({ caseStudy }: { caseStudy: ReactNode }) {
  const [open, setOpen] = useState(false);

  /*
   * The old /projects/capstone URL redirects here; open the modal for anyone
   * arriving on that link rather than dropping them at the card.
   *
   * The hashchange listener is not redundant: reaching /#case-study from
   * elsewhere on the page is a same-document navigation, so the component never
   * remounts and a mount-only effect would never fire.
   */
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash !== `#${MODAL_ID}`) return;
      setOpen(true);
      // The dialog itself is display:none until open, so put the *page* behind
      // it in the right place for when the modal is dismissed.
      document.getElementById("projects")?.scrollIntoView({ block: "start" });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  /*
   * Keep the URL shareable now that /projects/capstone is gone. replaceState
   * fires no hashchange, so this can't feed back into the listener above.
   */
  const setOpenAndHash = (next: boolean) => {
    setOpen(next);
    history.replaceState(null, "", next ? `#${MODAL_ID}` : "#projects");
  };

  return (
    <>
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        <RevealItem>
          <ProjectCard
            {...PROJECTS.tricycall}
            cta="Read Case Study"
            onCtaClick={() => setOpenAndHash(true)}
            ctaExpanded={open}
            ctaControls={MODAL_ID}
          />
        </RevealItem>
        <RevealItem>
          <ProjectCard {...PROJECTS.neopal} />
        </RevealItem>
      </RevealGroup>

      <CaseStudyModal
        id={MODAL_ID}
        open={open}
        onClose={() => setOpenAndHash(false)}
        eyebrow="IT Capstone Project"
        title={
          <>
            TricyCall: A <span className="text-gradient">Tricycle Hailing</span> App
          </>
        }
      >
        {caseStudy}
      </CaseStudyModal>
    </>
  );
}
