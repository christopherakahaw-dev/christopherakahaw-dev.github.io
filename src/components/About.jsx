import { useRef } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import { useTilt } from "../hooks/useTilt.js";

// A student ID pass with a holographic sheen that follows the pointer.
function IdPass() {
  const ref = useRef(null);
  useTilt(ref, 14);
  return (
    <div className="tcard-wrap">
      <div ref={ref} className="tcard">
        <span className="tcard-sheen" aria-hidden="true" />
        <span className="tcard-rings" aria-hidden="true" />
        <div className="tcard-top">
          <span className="tcard-brand mono">STUDENT PASS</span>
          <span className="tcard-chip" aria-hidden="true" />
        </div>
        <div className="tcard-mid">
          <span className="tcard-initials">{profile.initials}</span>
          <div>
            <p className="tcard-name">{profile.name}</p>
            <p className="tcard-type mono">Computer Science · Year 1</p>
          </div>
        </div>
        <div className="tcard-bottom mono">
          <span>
            <small>Issued</small>
            NTU · 2026
          </span>
          <span>
            <small>Balance</small>
            ∞ curiosity
          </span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="From Taikkyi to Singapore">
      <div className="about">
        <div className="about-text reveal">
          {profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? "lead" : ""}>{p}</p>
          ))}
          <ul className="chips" aria-label="Interests">
            {profile.interests.map((it) => <li key={it} className="chip mono">{it}</li>)}
          </ul>
        </div>
        <div className="reveal">
          <IdPass />
        </div>
      </div>
    </Section>
  );
}
