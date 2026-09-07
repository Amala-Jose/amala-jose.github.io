import { Button } from "./Button.jsx";
import { profile } from "../data/index.js";
import "./Actions.css";

/**
 * The résumé is the primary action everywhere it appears. Contact routes
 * follow it. This set is reused in the hero and the contact section so the
 * priority never drifts between them.
 */
export function Actions({ size = "lg", target = "_self" }) {
  return (
    <div className="actions">
      <Button href={profile.resumeUrl} tone="solid" size={size} download>
        Download résumé, PDF
      </Button>
      <Button href={`mailto:${profile.email}`} size={size}>
        Email me
      </Button>
      <Button href={profile.linkedinUrl} size={size} target={target}>
        LinkedIn
      </Button>
    </div>
  );
}
