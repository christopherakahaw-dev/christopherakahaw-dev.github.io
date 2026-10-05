import Section from "./Section.jsx";
import { skillGroups } from "../data/profile.js";

// Skills as keyboard keys: solid keys for confident skills, outlined keys
// for ones still being learned. Keys press down on hover.
export default function Skills() {
  return (
    <Section id="skills" title="What I work with">
      <div className="keyboard">
        {skillGroups.map((g, i) => (
          <div key={g.name} className="key-group reveal" style={{ "--i": i }}>
            <p className="key-group-name mono">
              <span className="key-group-num">{String(i + 1).padStart(2, "0")}</span> {g.name}
            </p>
            <ul className="keys">
              {g.items.map((s) => (
                <li key={s.name} className={`key ${s.level}`}>
                  <span className="key-cap">
                    <span className="key-name">{s.name}</span>
                    {s.note && <span className="key-note mono">{s.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="key-legend mono reveal">
        <span><i className="lg core" /> Confident</span>
        <span><i className="lg learning" /> Still learning</span>
      </p>
    </Section>
  );
}
