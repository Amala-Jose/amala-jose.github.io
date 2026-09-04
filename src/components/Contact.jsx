import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="section-head">
          <h2>Get in touch</h2>
          <span className="section-index">06</span>
        </div>
        <p className="contact-line">
          Open to Frontend Architect and Technical Lead roles. The fastest
          way to reach me is email or LinkedIn.
        </p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/amala-jose
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
