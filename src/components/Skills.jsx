import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
