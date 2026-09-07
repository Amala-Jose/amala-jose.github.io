import { skills } from "../data/index.js";
import "./Skills.css";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <div className="wrap section-pad">
        <h2 id="skills-heading">What I work with</h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.id}>
              <h3 className="skills__group">{group.group}</h3>
              <p className="skills__body">{group.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
