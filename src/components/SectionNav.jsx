import { useActiveSection } from "../hooks/useActiveSection.js";
import "./SectionNav.css";

const LINKS = [
  { id: "casestudy", label: "Case Study" },
  { id: "lab", label: "Work" },
  { id: "route", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

// Computed once at module load. LINKS.map(...) used to run inside the
// component body, producing a new array reference on every render even
// though the contents never changed, which made useActiveSection think
// its input had changed and rebuild the whole observer every time the
// active section updated.
const IDS = LINKS.map((link) => link.id);

export function SectionNav() {
  const activeId = useActiveSection(IDS);

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