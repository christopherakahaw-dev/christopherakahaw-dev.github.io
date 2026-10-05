import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import { GitHubIcon, MailIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 · Contact" title="Let's talk">
      <div className="card contact">
        <p>
          I&apos;m open to internships, student projects and hackathon teams.
          The fastest way to reach me is email.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
        </div>
      </div>
    </Section>
  );
}
