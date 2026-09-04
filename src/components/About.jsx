import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <h2>About</h2>
        </div>
        <div className="about-body">
          {profile.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
