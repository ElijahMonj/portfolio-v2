import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  /** Describes what the preview shows; falls back to a generic label. */
  imageAlt?: string;
  github?: string;
  /** Destination for the primary button. Omit when using `onCtaClick`. */
  link?: string;
  label: string;
  /** Primary button text. */
  cta?: string;
  /** Renders the primary button as a dialog trigger instead of a link. */
  onCtaClick?: () => void;
  /** Whether the dialog it controls is currently open. */
  ctaExpanded?: boolean;
  /** Id of the dialog this card's button controls. */
  ctaControls?: string;
}

const ctaClass =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5";

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  imageAlt,
  github,
  link,
  label,
  cta = "View",
  onCtaClick,
  ctaExpanded,
  ctaControls,
}) => {
  return (
    <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? `${title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-3 top-3 select-none rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="select-none rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          {onCtaClick ? (
            <button
              type="button"
              onClick={onCtaClick}
              aria-haspopup="dialog"
              aria-expanded={ctaExpanded}
              aria-controls={ctaControls}
              className={ctaClass}
            >
              {cta} <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
            </button>
          ) : (
            link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClass}
              >
                {cta} <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
              </Link>
            )
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent-blue/40 hover:text-accent-blue"
            >
              GitHub <FaGithubAlt className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
