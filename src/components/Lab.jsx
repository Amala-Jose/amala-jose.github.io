import { lab } from "../data/index.js";
import "./Lab.css";

/**
 * Open code, which is the one thing the NDA sections cannot offer.
 *
 * Entries in ../data/lab.js are placeholders. Replace them with real
 * repositories or remove this section from App.jsx.
 */
export function Lab() {
  if (lab.length === 0) return null;

  return (
    <section aria-labelledby="lab-heading">
      <div className="wrap section-pad">
        <h2 id="lab-heading">Code you can open</h2>
        <p className="section-lede">
          The work above is behind NDAs, so this is where I keep things that are open to read. Small
          on purpose, and written the way I would write them on a team.
        </p>

        <ul className="lab__list">
          {lab.map((project) => (
            <li className="lab__item" key={project.id}>
              <h3 className="lab__name">{project.name}</h3>
              <p className="lab__blurb">{project.blurb}</p>
              <p className="lab__stack">{project.stack.join(", ")}</p>
              <p className="lab__links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} rel="noopener">
                    {link.label}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
