import { useEffect, useRef, useState } from "react";

/**
 * Reports whether the page has scrolled past a sentinel element.
 *
 * Uses IntersectionObserver rather than a scroll listener so the browser does
 * the work off the main thread.
 *
 * @returns {[React.RefObject, boolean]} ref to place above the sticky element,
 *   and whether that element is currently stuck.
 */
export function useStuck() {
  const sentinelRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsStuck(!entry.isIntersecting);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [sentinelRef, isStuck];
}
