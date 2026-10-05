import { profile, highlights } from "../data/profile.js";
import DepartureBoard from "./DepartureBoard.jsx";
import { GitHubIcon, MailIcon, PinIcon } from "./Icons.jsx";

// Decorative metro lines sweeping behind the hero, with trains running on them.
const LINES = [
  { c: "pink", d: "M -40 110 H 560 L 760 310 V 760" },
  { c: "teal", d: "M -40 470 H 330 L 520 280 H 1240" },
  { c: "sun", d: "M 880 -40 V 150 L 1030 300 V 540 L 900 670 H 520" },
  { c: "violet", d: "M 1240 90 H 1060 L 860 290 V 760" },
  { c: "sky", d: "M 1240 640 H 1080 L 960 520 H 640 L 440 720" },
];

function HeroLines() {
  return (
    <svg className="hero-lines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {LINES.map((l, i) => (
        <g key={l.c}>
          <path d={l.d} className={`hl-path s-${l.c}`} />
          <circle r="7" className={`hl-train f-${l.c}`}>
            <animateMotion dur={`${14 + i * 3}s`} repeatCount="indefinite" path={l.d} begin={`${-i * 2.5}s`} />
          </circle>
        </g>
      ))}
      {[[760, 310], [520, 280], [1030, 300], [860, 290], [960, 520], [330, 470]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="11" className="hl-interchange" />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <HeroLines />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker mono">
            <span className="code-pill bg-pink">→</span> Now arriving at platform 2026
          </p>
          <h1 className="hero-title">
            <span className="ht-line">{profile.firstName}</span>
            <span className="ht-line ht-outline">{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">Board the projects →</a>
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
