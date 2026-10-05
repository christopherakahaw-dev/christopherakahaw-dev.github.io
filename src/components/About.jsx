import { useRef } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import { useTilt } from "../hooks/useTilt.js";

// A stored-value transit card with a holographic sheen that follows the pointer.
function TransitCard() {
  const ref = useRef(null);
  useTilt(ref, 14);
  return (
    <div className="tcard-wrap">
      <div ref={ref} className="tcard">
        <span className="tcard-sheen" aria-hidden="true" />
        <div className="tcard-top">
          <span className="tcard-brand">HA·LINK</span>
          <span className="tcard-chip" aria-hidden="true" />
        </div>
        <div className="tcard-mid">
          <span className="tcard-initials">{profile.initials}</span>
          <div>
            <p className="tcard-name">{profile.name}</p>
            <p className="tcard-type mono">Student · Computer Science</p>
          </div>
        </div>
        <div className="tcard-bottom mono">
          <span>
            <small>Card no.</small>
            CS01 · NTU · 2026
          </span>
          <span>
            <small>Balance</small>
            ∞ curiosity
          </span>
        </div>
        <div className="tcard-stripes" aria-hidden="true">
          <i className="bg-ns" /><i className="bg-ew" /><i className="bg-cc" /><i className="bg-ne" /><i className="bg-dt" />
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
          <TransitCard />
        </div>
      </div>
    </Section>
  );
}
