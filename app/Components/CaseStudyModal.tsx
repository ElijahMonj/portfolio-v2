"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { FiX } from "react-icons/fi";

/**
 * Case study dialog, built on the native <dialog> element.
 *
 * showModal() supplies focus trapping, focus restore to the trigger, Escape to
 * close, background inerting and top-layer stacking — the last of which keeps
 * it clear of the sticky header, section rail, scroll progress bar and
 * back-to-top button without any z-index juggling.
 *
 * A closed <dialog> is display:none rather than unmounted, so the case study
 * still ships in the served HTML. That matters: this is the deepest content on
 * the site and it used to be its own indexed page.
 */
export default function CaseStudyModal({
  id,
  open,
  onClose,
  eyebrow,
  title,
  children,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  /*
   * Native listener, not React's onClose: the dialog `close` event does not
   * bubble, so React's delegated synthetic handler misses it. Without this,
   * Escape closes the dialog while React still thinks it is open — which leaves
   * the body scroll-locked and the trigger stuck at aria-expanded="true".
   * `close` also fires after `cancel`, so this covers Escape and close() alike.
   */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onCloseRef.current();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  // Drive the dialog from the `open` prop, guarded so we never double-call.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // Always open at the top; the scroll container otherwise keeps whatever
      // offset it had when the dialog was last laid out.
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // showModal() inerts the page behind but doesn't reliably stop it scrolling.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      data-case-study
      aria-labelledby={`${id}-title`}
      // A click landing on the dialog itself came from the ::backdrop.
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none flex-col overflow-hidden border-0 bg-surface p-0 text-foreground open:flex sm:m-auto sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-5xl sm:rounded-2xl sm:border sm:border-border"
    >
      <header className="flex shrink-0 items-start justify-between gap-4 border-b border-border bg-surface/95 px-5 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            {title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
        >
          <FiX className="h-5 w-5" />
        </button>
      </header>

      <div
        ref={bodyRef}
        className="flex-1 overflow-y-auto overscroll-contain px-5 py-8 sm:px-8"
      >
        {children}
      </div>
    </dialog>
  );
}
