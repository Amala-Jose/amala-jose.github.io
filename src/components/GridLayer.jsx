import "./GridLayer.css";

/**
 * A faint baseline grid, revealed only around the pointer.
 *
 * The nod is deliberate: a design system sits on a grid, and this one becomes
 * visible where you happen to be looking. Purely decorative, so hidden from
 * assistive technology.
 */
export function GridLayer({ enabled }) {
  return <div className={`grid-layer${enabled ? " is-on" : ""}`} aria-hidden="true" />;
}
