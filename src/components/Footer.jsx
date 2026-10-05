import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bar" aria-hidden="true" />
      <div className="container footer-inner">
        <p className="footer-end">
          Thanks for coming along.
          <span>That&apos;s the journey so far — more stops coming soon.</span>
        </p>
        <p className="footer-meta mono">
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite ·{" "}
          <a href="https://github.com/christopherakahaw-dev/portfoliio" target="_blank" rel="noreferrer">Source</a>
        </p>
      </div>
    </footer>
  );
}
