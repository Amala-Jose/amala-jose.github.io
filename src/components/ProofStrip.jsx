import { useInView } from "../hooks/useInView.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { figures } from "../data/index.js";
import "./ProofStrip.css";

/**
 * A single stat. Splits the stored value into its leading number and
 * trailing unit (e.g. "60%" -> 60 and "%"), animates the number, and
 * appends the unit as-is. Falls back to showing the raw string if it
 * doesn't start with a number, so this never breaks on future data.
 */
function Figure({ figure, delay }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const match = figure.value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const display = useCountUp(target ?? 0, inView, 900 + delay);

  return (
    <li ref={ref}>
      <span className="proof__value">{target !== null ? `${display}${suffix}` : figure.value}</span>
      <span className="proof__label">{figure.label}</span>
    </li>
  );
}

/**
 * Evidence before narrative. A reader who gives this page forty seconds
 * should leave with the numbers.
 */
export function ProofStrip() {
  return (
    <section id="proof" className="proof" aria-labelledby="proof-heading">
      <div className="wrap">
        <h2 id="proof-heading" className="visually-hidden">
          What the work produced
        </h2>
        <ul className="proof__list">
          {figures.map((figure, index) => (
            <Figure figure={figure} delay={index * 100} key={figure.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}