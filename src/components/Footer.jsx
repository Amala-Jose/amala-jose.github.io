import "./Footer.css";

/**
 * The colophon has to stay true. If the stack changes, this changes with it.
 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer__colophon">
          Built with React and Vite, hand written CSS, no UI kit and no tracking. Two typefaces. It
          is meant to load quickly, work with a keyboard, and read cleanly in a screen reader,
          because that is the job I am asking you to consider me for.
        </p>
      </div>
    </footer>
  );
}
