import Section from "./Section.jsx";
import { skillLines } from "../data/profile.js";

// Skills drawn as metro lines: each line is a skill area, each station a skill.
export default function Skills() {
  return (
    <Section id="skills" title="The skills network">
      <div className="metro reveal">
        {skillLines.map((l, i) => (
          <div key={l.name} className={`mline c-${l.line}`} style={{ "--i": i }}>
            <span className={`mline-name bg-${l.line}`}>{l.name}</span>
            <ol className="mline-track">
              <span className="mline-train" aria-hidden="true" />
              {l.items.map((s) => (
                <li key={s.name} className={`mstop ${s.level}`}>
                  <span className="mstop-dot" aria-hidden="true" />
                  <span className="mstop-name">{s.name}</span>
                  {s.note && <span className="mstop-note mono">{s.note}</span>}
                </li>
              ))}
            </ol>
          </div>
        ))}
        <p className="metro-legend mono">
          <span><i className="lg core" /> Confident</span>
          <span><i className="lg learning" /> Still learning</span>
        </p>
      </div>
    </Section>
  );
}
