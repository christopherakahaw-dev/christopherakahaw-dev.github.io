import Section from "./Section.jsx";
import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 · Skills" title="What I work with">
      <div className="skills-grid">
        {skills.map((g) => (
          <div key={g.group} className="card skill-group">
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s.name}>
                  <span>{s.name}</span>
                  <span className="level mono">{s.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
