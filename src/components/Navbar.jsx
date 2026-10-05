import { useEffect, useRef, useState } from "react";
import { profile, sections } from "../data/profile.js";
import { useTheme } from "../hooks/useTheme.js";
import { useActiveSection } from "../hooks/useScroll.js";
import { SunIcon, MoonIcon } from "./Icons.jsx";

const ids = sections.map((s) => s.id);

// Navigation as a progress track: each section is a stop, and a marker
// travels along the track as you scroll.
export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const { active, fraction, progress } = useActiveSection(ids);
  const activeIndex = ids.indexOf(active);
  const close = () => setOpen(false);
  const trackRef = useRef(null);
  const [dots, setDots] = useState([]);

  // Stop labels have different widths, so the dots aren't evenly spaced —
  // measure where each one actually sits on the track.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function measure() {
      const left = track.getBoundingClientRect().left;
      setDots([...track.querySelectorAll(".stop-dot")].map((d) => {
        const r = d.getBoundingClientRect();
        return r.left + r.width / 2 - left;
      }));
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  // The marker sits on the current section's stop and slides toward the next
  // one as you read through the section. Before the first section it waits
  // at the start of the track.
  let markerX = 7;
  if (dots.length && activeIndex >= 0) {
    const from = dots[activeIndex];
    const to = dots[Math.min(activeIndex + 1, dots.length - 1)];
    markerX = from + (to - from) * fraction;
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close} aria-label={`${profile.name} — back to top`}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub mono">Portfolio · 2026</span>
          </span>
        </a>

        <nav aria-label="Sections" className="line-nav">
          <ol ref={trackRef} className="line-track" style={{ "--pos": `${markerX}px` }}>
            <span className="line-fill" aria-hidden="true" />
            <span className="line-marker" aria-hidden="true" />
            {sections.map((s, i) => (
              <li key={s.id} className={`stop ${i <= activeIndex ? "passed" : ""} ${i === activeIndex ? "current" : ""}`}>
                <a href={`#${s.id}`} aria-current={i === activeIndex ? "location" : undefined}>
                  <span className="stop-dot" aria-hidden="true" />
                  <span className="stop-label">
                    <span className="stop-num mono">{String(i + 1).padStart(2, "0")}</span>
                    {s.name}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mobile-sections"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="burger" data-open={open} />
          </button>
        </div>
      </div>

      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <ol id="mobile-sections" className={`mobile-sections ${open ? "open" : ""}`}>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} onClick={close} className={i === activeIndex ? "current" : ""}>
              <span className="mobile-num mono">{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </a>
          </li>
        ))}
      </ol>
    </header>
  );
}
