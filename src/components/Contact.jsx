import { Actions } from "./Actions.jsx";
import { profile } from "../data/index.js";
import "./Contact.css";

export function Contact() {
  return (
    <section aria-labelledby="contact-heading">
      <div className="wrap section-pad">
        <h2 id="contact-heading">Get in touch</h2>

        <div className="contact__actions">
          <Actions size="lg" target="_blank"/>
        </div>

        <div className="contact__lines">
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </p>
        </div>

        <p className="contact__fine">{profile.education}</p>
      </div>
    </section>
  );
}
