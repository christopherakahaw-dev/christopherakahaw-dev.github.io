import { profile, highlights } from "../data/profile.js";
import { GitHubIcon, MailIcon, PinIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero-kicker mono">Hello, I&apos;m</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-loc"><PinIcon /> {profile.location}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
          <a className="btn" href={`mailto:${profile.email}`}><MailIcon /> Email</a>
        </div>

        <ul className="highlights" aria-label="Highlights">
          {highlights.map((h) => (
            <li key={h.label} className="stat">
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
