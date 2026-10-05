import { stations } from "../data/profile.js";

// A section styled as a station: an MRT-style sign with the station code,
// and a hint of the next stop.
export default function Section({ id, title, children, className = "" }) {
  const index = stations.findIndex((s) => s.id === id);
  const station = stations[index];
  const next = stations[index + 1];

  return (
    <section id={id} className={`section c-${station.line} ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="sign reveal">
          <span className={`sign-code bg-${station.line}`}>
            <span className="mono">{station.code.slice(0, 2)}</span>
            <strong>{station.code.slice(2)}</strong>
          </span>
          <div className="sign-text">
            <p className="sign-kicker mono">Station {String(index + 1).padStart(2, "0")} · {station.name}</p>
            <h2 id={`${id}-title`} className="sign-title">{title}</h2>
          </div>
          {next && (
            <a className="sign-next mono" href={`#${next.id}`}>
              Next: <span className={`dot bg-${next.line}`} aria-hidden="true" /> {next.name} →
            </a>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
