import { profile, highlights } from "../data/profile.js";
import DepartureBoard from "./DepartureBoard.jsx";
import { GitHubIcon, MailIcon, PinIcon } from "./Icons.jsx";

// Decorative flowing paths behind the hero, with small sparks travelling along them.
const PATHS = [
  "M -60 520 C 200 420, 320 640, 560 520 S 900 260, 1260 340",
  "M -60 160 C 260 60, 420 300, 700 220 S 1040 40, 1260 120",
  "M 300 760 C 420 520, 700 600, 820 420 S 1000 120, 1260 -40",
];

function HeroPaths() {
  return (
    <svg className="hero-lines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {PATHS.map((d, i) => (
        <g key={i}>
          <path d={d} className={`hl-path hl-${i}`} />
          <circle r="5" className={`hl-spark hl-${i}`}>
            <animateMotion dur={`${16 + i * 4}s`} repeatCount="indefinite" path={d} begin={`${-i * 3}s`} />
          </circle>
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <HeroPaths />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker mono">
            <span className="status-dot" aria-hidden="true" /> Open to internships · 2026
          </p>
          <h1 className="hero-title">
            <span className="ht-line">{profile.firstName}</span>
            <span className="ht-line ht-accent">{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">See my projects →</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a className="btn" href={`mailto:${profile.email}`}><MailIcon /> Email</a>
          </div>
          <p className="hero-loc mono"><PinIcon /> {profile.location}</p>
        </div>
        <DepartureBoard />
      </div>

      <div className="container">
        <ul className="highlights" aria-label="Highlights">
          {highlights.map((h, i) => (
            <li key={h.label} className="stat" style={{ "--i": i }}>
              <span className="stat-value">{h.value}</span>
              <span className="stat-label">{h.label}</span>
              <span className="stat-detail mono">{h.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
