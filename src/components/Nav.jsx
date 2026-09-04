import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-mark">
          {profile.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </a>
        <nav aria-label="Section navigation">
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
