import { useActiveSection } from "../hooks/useActiveSection.js";
import "./SectionNav.css";

const LINKS = [
  { id: "proof", label: "Proof" },
  { id: "work", label: "Work" },
  { id: "route", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

/**
 * A slim jump nav living inside the sticky masthead, rather than a fixed
 * sidebar. The page is a single column with no reserved side gutter, so a
 * separate floating rail would compete with the masthead for attention.
 * Four stops, not every section, since Code and the AI section are
 * supplementary reading rather than places someone jumps to directly.
 *
 * The active link is shown with an underline in ink, not the site's
 * --measure green, since that colour is reserved for values that were
 * actually measured and is never used as decoration.
 */
export function SectionNav() {
  const activeId = useActiveSection(LINKS.map((link) => link.id));

  return (
    <nav className="section-nav" aria-label="Page sections">
      <ul>
        {LINKS.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={activeId === link.id ? "is-active" : ""}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}