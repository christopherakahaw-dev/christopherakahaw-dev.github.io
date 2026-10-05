import Section from "./Section.jsx";
import { projects, earlierWork } from "../data/profile.js";
import { GitHubIcon, ExternalIcon } from "./Icons.jsx";

function ProjectCard({ p }) {
  return (
    <article className={`card project ${p.featured ? "featured" : ""}`}>
      <header className="project-head">
        <h3>{p.title}</h3>
        {p.featured && <span className="badge">Featured</span>}
        {p.status && <span className="badge badge-muted">{p.status}</span>}
      </header>
      <p className="project-summary">{p.summary}</p>
      {p.points.length > 0 && (
        <ul className="project-points">
          {p.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
      )}
      <ul className="tags" aria-label="Technologies">
        {p.tags.map((t) => <li key={t} className="tag mono">{t}</li>)}
      </ul>
      {(p.live || p.code || p.extra) && (
        <div className="project-links">
          {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ExternalIcon /> Live demo</a>}
          {p.code && <a href={p.code} target="_blank" rel="noreferrer"><GitHubIcon /> Code</a>}
          {p.extra && <a href={p.extra.url} target="_blank" rel="noreferrer"><ExternalIcon /> {p.extra.label}</a>}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02 · Projects" title="Things I've built">
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
      <h3 className="sub-title">Earlier experiments</h3>
      <ul className="earlier">
        {earlierWork.map((w) => (
          <li key={w.title}>
            <a href={w.url} target="_blank" rel="noreferrer" className="mono">{w.title}</a>
            <span>{w.note}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
