import { sections } from "../data/profile.js";

// A numbered chapter heading with a hint of what comes next.
export default function Section({ id, title, children, className = "" }) {
  const index = sections.findIndex((s) => s.id === id);
  const section = sections[index];
  const next = sections[index + 1];
  const num = String(index + 1).padStart(2, "0");

  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="sign reveal">
          <span className="sign-num" aria-hidden="true">{num}</span>
          <div className="sign-text">
            <p className="sign-kicker mono">{num} / {section.name}</p>
            <h2 id={`${id}-title`} className="sign-title">{title}</h2>
          </div>
          {next && (
            <a className="sign-next mono" href={`#${next.id}`}>
              Next: {next.name} →
            </a>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
