import { eras } from "../data/index.js";
import "./Eras.css";

/**
 * Three generations of frontend, on one line.
 *
 * This is the only place on the site where a visual device is spent freely.
 * It earns it: the sequence is real, and the span is the most distinctive
 * thing on the résumé.
 */
export function Eras() {
  return (
    <div className="eras">
      <h2 className="visually-hidden">Three generations of frontend</h2>
      <ol className="eras__list">
        {eras.map((era) => (
          <li className="era" key={era.id}>
            <span className="era__year">{era.year}</span>
            <p className="era__stack">{era.stack}</p>
            <p className="era__note">{era.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
