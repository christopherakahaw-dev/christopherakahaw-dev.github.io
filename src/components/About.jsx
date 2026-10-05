import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A bit about me">
      <div className="about">
        <div className="about-text">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <aside className="card about-card">
          <div className="avatar" aria-hidden="true">{profile.initials}</div>
          <dl>
            <dt>Studying</dt>
            <dd>Computer Science, NTU</dd>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
            <dt>Interests</dt>
            <dd>{profile.interests.join(" · ")}</dd>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
