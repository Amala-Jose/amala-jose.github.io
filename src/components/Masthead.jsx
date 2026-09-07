import { Button } from "./Button.jsx";
import { profile } from "../data/index.js";
import "./Masthead.css";

/**
 * Sticky header. Keeps the résumé within reach at every scroll position,
 * which is the whole point of it being sticky.
 */
export function Masthead({ isStuck }) {
  return (
    <header className={`masthead${isStuck ? " is-stuck" : ""}`}>
      <div className="wrap masthead__inner">
        <img
          className="masthead__portrait"
          src={profile.portraitUrl}
          alt={profile.name}
          width="40"
          height="40"
          decoding="async"
        />

        <span className="masthead__id">
          <span className="masthead__name">{profile.name}</span>
          <span className="masthead__meta">
            {profile.role}, {profile.location}
          </span>
        </span>

        <span className="masthead__actions">
          <Button href={`mailto:${profile.email}`}>Email</Button>
          <Button href={profile.resumeUrl} tone="solid" download>
            Résumé
          </Button>
        </span>
      </div>
    </header>
  );
}
