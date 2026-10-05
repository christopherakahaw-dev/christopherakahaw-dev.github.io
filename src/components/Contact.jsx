import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import { GitHubIcon, MailIcon } from "./Icons.jsx";

// "Plan your journey" — the contact section as a ticket from you to me.
export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <Section id="contact" title="Plan your journey">
      <div className="journey reveal">
        <div className="journey-main">
          <div className="journey-legs">
            <div className="leg">
              <span className="leg-label mono">From</span>
              <span className="leg-value">You</span>
              <span className="leg-sub">Recruiter, teammate, curious reader</span>
            </div>
            <div className="leg-line" aria-hidden="true">
              <span className="leg-train" />
            </div>
            <div className="leg">
              <span className="leg-label mono">To</span>
              <span className="leg-value">{profile.firstName}</span>
              <span className="leg-sub">Open to internships, projects & hackathons</span>
            </div>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}><MailIcon /> Email me</a>
            <button className="btn" onClick={copyEmail} aria-live="polite">
              {copied ? "✓ Copied!" : "Copy email"}
            </button>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
          </div>
        </div>
        <div className="journey-stub mono">
          <span>Direct line</span>
          <strong>
            {profile.email.split("@")[0]}<wbr />@{profile.email.split("@")[1]}
          </strong>
          <span>Always happy to chat</span>
          <span className="barcode" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}
