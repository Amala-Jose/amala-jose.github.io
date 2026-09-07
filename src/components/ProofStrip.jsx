import { figures } from "../data/index.js";
import "./ProofStrip.css";

/**
 * Evidence before narrative. A reader who gives this page forty seconds
 * should leave with the numbers.
 */
export function ProofStrip() {
  return (
    <section className="proof" aria-labelledby="proof-heading">
      <div className="wrap">
        <h2 id="proof-heading" className="visually-hidden">
          What the work produced
        </h2>
        <ul className="proof__list">
          {figures.map((figure) => (
            <li key={figure.id}>
              <span className="proof__value">{figure.value}</span>
              <span className="proof__label">{figure.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
