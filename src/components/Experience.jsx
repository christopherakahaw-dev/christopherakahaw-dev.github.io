import Section from "./Section.jsx";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="05 · Experience" title="Leadership & community">
      <div className="exp-grid">
        {experience.map((e) => (
          <article key={e.role + e.org} className="card exp">
            {e.date && <p className="exp-date mono">{e.date}</p>}
            <h3>{e.role}</h3>
            <p className="exp-org">{e.org}</p>
            {e.note && <p className="exp-note">{e.note}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
