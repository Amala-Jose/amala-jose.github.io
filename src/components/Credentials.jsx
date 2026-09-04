import { credentials } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <div className="section-head">
          <h2>Credentials</h2>
          <span className="section-index">05</span>
        </div>
        <div className="credentials-grid">
          <div>
            <h3>Education</h3>
            <ul className="credentials-list">
              {credentials.education.map((entry) => (
                <li key={entry.degree}>
                  <span className="credentials-title">{entry.degree}</span>
                  <span className="credentials-sub">
                    {entry.school} · {entry.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="credentials-list">
              {credentials.certifications.map((entry) => (
                <li key={entry}>
                  <span className="credentials-title">{entry}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Awards</h3>
            <ul className="credentials-list">
              {credentials.awards.map((entry) => (
                <li key={entry}>
                  <span className="credentials-title">{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
