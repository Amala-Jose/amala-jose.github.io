import { useEffect, useRef, useState } from "react";

/**
 * True once the referenced element has entered the viewport. Fires once,
 * then disconnects, since this is for a one-time reveal rather than
 * ongoing visibility tracking.
 */
export function useInView({ threshold = 0.6 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true); // no IO support: just show the final state
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}