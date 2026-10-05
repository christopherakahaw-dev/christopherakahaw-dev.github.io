import { useRef } from "react";
import Section from "./Section.jsx";
import { projects, earlierWork } from "../data/profile.js";
import { useTilt } from "../hooks/useTilt.js";
import { GitHubIcon, ExternalIcon } from "./Icons.jsx";

function Links({ p }) {
  return (
    <div className="p-links">
      {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ExternalIcon /> Live demo</a>}
      {p.code && <a href={p.code} target="_blank" rel="noreferrer"><GitHubIcon /> Code</a>}
      {p.extra && <a href={p.extra.url} target="_blank" rel="noreferrer"><ExternalIcon /> {p.extra.label}</a>}
    </div>
  );
}

function Tags({ tags }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {tags.map((t) => <li key={t} className="tag mono">{t}</li>)}
    </ul>
  );
}

// Mini route map for the featured project: a home-to-office commute,
// drawn as an animated route.
function RouteMap() {
  const route = "M 40 60 H 170 L 230 120 H 330 L 380 170 H 470";
  return (
    <svg className="route-map" viewBox="0 0 510 230" role="img" aria-label="Illustration of a planned commute from home to the office">
      <path d="M 20 200 L 120 120 L 250 40 H 500" className="rm-ghost" />
      <path d="M 60 10 V 90 L 150 180 H 300" className="rm-ghost" />
      <path d={route} className="rm-base" />
      <path d={route} className="rm-live" />
      <circle r="8" className="rm-train">
        <animateMotion dur="5s" repeatCount="indefinite" path={route} />
      </circle>
      {[[40, 60, "Home"], [230, 120, "Transfer"], [470, 170, "Office"]].map(([x, y, n], i) => (
        <g key={n}>
          <circle cx={x} cy={y} r={i === 1 ? 10 : 8} className={i === 1 ? "rm-interchange" : "rm-stop"} />
          <text x={x} y={y + (i === 2 ? 34 : -20)} textAnchor="middle" className="rm-label">{n}</text>
        </g>
      ))}
      <g className="rm-chip" transform="translate(48 150)">
        <rect width="118" height="30" rx="15" />
        <text x="59" y="20" textAnchor="middle">Leave 07:40</text>
      </g>
      <g className="rm-chip rm-chip-alt" transform="translate(330 66)">
        <rect width="136" height="30" rx="15" />
        <text x="68" y="20" textAnchor="middle">Desk by 08:45</text>
      </g>
    </svg>
  );
}

function Featured({ p }) {
  return (
    <article className="poster reveal">
      <div className="poster-copy">
        <p className="poster-kicker mono"><span className="code-pill bg-teal">★</span> Featured · {p.kicker}</p>
        <h3 className="poster-title">{p.title}</h3>
        <p className="poster-summary">{p.summary}</p>
        <ul className="poster-points">
          {p.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
        <Tags tags={p.tags} />
        <Links p={p} />
      </div>
      <div className="poster-visual">
        <RouteMap />
      </div>
    </article>
  );
}

function Ticket({ p, index }) {
  const ref = useRef(null);
  useTilt(ref, 6);
  return (
    <article ref={ref} className={`ticket reveal c-${p.line}`} style={{ "--i": index }}>
      <div className="ticket-main">
        <p className="ticket-kicker mono">
          <span className={`dot bg-${p.line}`} aria-hidden="true" /> {p.kicker}
          {p.status && <span className="badge">{p.status}</span>}
        </p>
        <h3 className="ticket-title">{p.title}</h3>
        <p className="ticket-summary">{p.summary}</p>
        <Tags tags={p.tags} />
      </div>
      <div className="ticket-stub">
        <span className="stub-label mono">Admit one</span>
        <span className="stub-no mono">No. {String(index + 2).padStart(3, "0")}</span>
        {(p.live || p.code) ? <Links p={p} /> : <span className="stub-soon mono">Coming soon</span>}
        <span className="barcode" aria-hidden="true" />
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <Section id="projects" title="Things I've built">
      <Featured p={featured} />
      <div className="tickets">
        {rest.map((p, i) => <Ticket key={p.title} p={p} index={i} />)}
      </div>

      <div className="retired reveal">
        <p className="retired-title mono">Earlier lines · no longer in service</p>
        <ul>
          {earlierWork.map((w) => (
            <li key={w.title}>
              <a href={w.url} target="_blank" rel="noreferrer" className="mono">{w.title}</a>
              <span>{w.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
