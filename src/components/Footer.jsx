import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-stripes" aria-hidden="true">
        <i className="bg-pink" /><i className="bg-teal" /><i className="bg-sun" /><i className="bg-violet" /><i className="bg-sky" /><i className="bg-lime" />
      </div>
      <div className="container footer-inner">
        <p className="footer-end">
          This train terminates here.
          <span>Thank you for riding with {profile.firstName}.</span>
        </p>
        <p className="footer-meta mono">
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite ·{" "}
          <a href="https://github.com/christopherakahaw-dev/portfoliio" target="_blank" rel="noreferrer">Source</a>
        </p>
      </div>
    </footer>
  );
}
