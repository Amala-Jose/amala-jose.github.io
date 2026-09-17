import "./Button.css";

/**
 * The only button on the site. Two tones, two sizes, and an explicit
 * external flag.
 *
 * Third-party destinations (LinkedIn, and previously nothing else here)
 * were opening in the same tab with an incomplete rel attribute. external
 * fixes both: it adds target="_blank" with rel="noopener noreferrer" (the
 * noopener stops the new page reaching back via window.opener, noreferrer
 * withholds the referring URL), and shows a small outbound arrow so the
 * visitor knows before clicking.
 *
 * @param {"solid"|"quiet"} tone   solid is reserved for the primary action
 * @param {"md"|"lg"} size
 * @param {boolean} download       renders a download attribute for file links
 * @param {boolean} external       true for links that leave this site for a
 *                                 third party (not mailto, tel, or download)
 */
export function Button({
  href,
  children,
  tone = "quiet",
  size = "md",
  download = false,
  external = false,
}) {
  const className = ["btn", `btn--${tone}`, size === "lg" && "btn--lg"].filter(Boolean).join(" ");

  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      {external && (
        <span className="external-icon" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}