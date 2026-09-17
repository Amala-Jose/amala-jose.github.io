import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most in view, for
 * highlighting the matching link in the masthead's section nav.
 *
 * The rootMargin treats a section as "current" once it has crossed roughly
 * the upper third of the viewport, rather than requiring it to fill the
 * screen, since the sections here vary a lot in height.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        // Among sections currently crossing the trigger line, the one
        // nearest the top of the viewport is the one being read.
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topmost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}