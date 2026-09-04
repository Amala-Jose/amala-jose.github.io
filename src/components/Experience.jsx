import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
        </div>
        <ol className="timeline">
          {experience.map((role) => (
            <li className="timeline-item" key={`${role.role}-${role.dates}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>{role.role}</h3>
                  <span className="timeline-dates">{role.dates}</span>
                </div>
                <p className="timeline-company">{role.company}</p>
                <p className="timeline-project">{role.project}</p>
                <ul className="timeline-bullets">
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <p className="timeline-stack">{role.stack}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
