import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="hero-tagline">{profile.tagline}</p>
        <h1 className="hero-name">
          {profile.name}
          <span className="hero-underline" aria-hidden="true" />
        </h1>
        <p className="hero-line">{profile.heroLine}</p>
        <div className="hero-meta">
          <span>{profile.title}</span>
          <span className="hero-dot" aria-hidden="true" />
          <span>{profile.location}</span>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View experience
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
