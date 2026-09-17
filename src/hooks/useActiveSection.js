import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const lastId = ids[ids.length - 1];

    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

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

    // Throttled to one check per animation frame so this doesn't force a
    // layout read on every raw scroll event, that per-event cost was the
    // other contributor to the slowdown.
    let frameQueued = false;
    const handleScroll = () => {
      if (frameQueued) return;
      frameQueued = true;
      requestAnimationFrame(() => {
        if (isAtBottom()) setActiveId(lastId);
        frameQueued = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids]);

  return activeId;
}