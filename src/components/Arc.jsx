import { arc } from "../data/index.js";
import "./Arc.css";

export function Arc() {
  return (
    <section aria-labelledby="arc-heading">
      <div className="wrap section-pad">
        <h2 id="arc-heading">The route here</h2>
        <ol className="arc__list">
          {arc.map((job) => (
            <li className="arc__item" key={job.id}>
              <span className="arc__when">{job.when}</span>
              <div>
                <p className="arc__role">{job.role}</p>
                <p className="arc__where">{job.where}</p>
                <p className="arc__what">{job.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
