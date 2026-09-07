import "./Button.css";

/**
 * The only button on the site. Two tones, two sizes, nothing else.
 *
 * @param {"solid"|"quiet"} tone   solid is reserved for the primary action
 * @param {"md"|"lg"} size
 * @param {boolean} download       renders a download attribute for file links
 */
export function Button({ href, children, tone = "quiet", size = "md", download = false }) {
  const className = ["btn", `btn--${tone}`, size === "lg" && "btn--lg"].filter(Boolean).join(" ");

  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      rel={download ? undefined : "noopener"}
    >
      {children}
    </a>
  );
}
