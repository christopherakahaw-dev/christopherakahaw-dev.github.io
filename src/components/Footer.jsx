import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          Built with React + Vite ·{" "}
          <a href="https://github.com/christopherakahaw-dev/portfoliio" target="_blank" rel="noreferrer">Source</a>
        </p>
      </div>
    </footer>
  );
}
