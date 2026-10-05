import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-stripes" aria-hidden="true">
        <i className="bg-ns" /><i className="bg-ew" /><i className="bg-cc" /><i className="bg-ne" /><i className="bg-dt" /><i className="bg-te" />
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
