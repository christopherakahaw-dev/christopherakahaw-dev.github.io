import Section from "./Section.jsx";
import { education } from "../data/profile.js";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 · Education" title="Education & certifications">
      <ol className="timeline">
        {education.map((it) => (
          <li key={it.title + it.date} className="tl-item">
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-head">
              <h3>{it.title}</h3>
              <span className="tl-date mono">{it.date}</span>
            </div>
            {it.place && <p className="tl-place">{it.place}</p>}
            {it.points.length > 0 && (
              <ul className="tl-points">
                {it.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
