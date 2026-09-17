import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most in view, for
 * highlighting the matching link in the masthead's section nav.
 *
 * The rootMargin treats a section as "current" once it has crossed roughly
 * the upper third of the viewport, rather than requiring it to fill the
 * screen, since the sections here vary a lot in height.
 *
 * The last section is a special case: if it's shorter than the trigger
 * band's distance from the bottom of the page, it can never cross into
 * that band naturally, since there's no more content left to scroll it
 * into position. Being scrolled to the very bottom of the document always
 * counts as that last section being active, regardless of what the
 * observer reports.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const lastId = ids[ids.length - 1];

    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtBottom()) {
          setActiveId(lastId);
          return;
        }

        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topmost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (isAtBottom()) setActiveId(lastId);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids]);

  return activeId;
}