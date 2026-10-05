import Section from "./Section.jsx";
import { experience } from "../data/profile.js";

// An LED ticker of roles above a grid of role cards.
export default function Experience() {
  const ticker = experience.map((e) => `${e.role.toUpperCase()} — ${e.org}`).join("   ◆   ");

  return (
    <Section id="service" title="Leadership & community">
      <div className="ticker reveal" role="marquee" aria-label="Leadership and community roles">
        <span className="ticker-tag mono">LIVE</span>
        <div className="ticker-window">
          <p className="ticker-text mono" aria-hidden="true">
            <span>{ticker}   ◆   </span>
            <span>{ticker}   ◆   </span>
          </p>
        </div>
      </div>

      <div className="notices">
        {experience.map((e, i) => (
          <article key={e.role + e.org} className="notice reveal" style={{ "--i": i }}>
            <div className="notice-head mono">
              <span className="notice-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{e.date}</span>
            </div>
            <h3>{e.role}</h3>
            <p className="notice-org">{e.org}</p>
            {e.note && <p className="notice-note">{e.note}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
