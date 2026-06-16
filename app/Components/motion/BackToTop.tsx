"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUp } from "react-icons/fi";

/** Floating button that appears after scrolling and returns to the top. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="glass fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-foreground shadow-lg shadow-black/20 transition-colors hover:text-accent-blue"
        >
          <FiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
