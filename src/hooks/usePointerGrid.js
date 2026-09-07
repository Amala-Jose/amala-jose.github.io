import { useEffect, useState } from "react";

/**
 * Tracks the pointer and writes its position to CSS custom properties, which
 * the grid layer uses as the centre of its reveal mask.
 *
 * Writes are throttled to one animation frame, and the effect opts out
 * entirely on touch devices and when the user prefers reduced motion.
 *
 * @returns {boolean} whether the grid should be shown at all
 */
export function usePointerGrid() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !hasFinePointer) return;

    setEnabled(true);

    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let frameQueued = false;

    const handleMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (frameQueued) return;

      frameQueued = true;
      requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${x}px`);
        root.style.setProperty("--my", `${y}px`);
        frameQueued = false;
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return enabled;
}
