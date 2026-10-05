import { useState } from "react";
import { profile, stations } from "../data/profile.js";
import { useTheme } from "../hooks/useTheme.js";
import { useActiveSection } from "../hooks/useScroll.js";
import { SunIcon, MoonIcon } from "./Icons.jsx";

const ids = stations.map((s) => s.id);

// The navigation is a metro line: each section is a station, and a train
// marker rides along the track as you scroll.
export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const { active, progress } = useActiveSection(ids);
  const activeIndex = ids.indexOf(active);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close} aria-label={`${profile.name} — back to top`}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub mono">HA Line · Portfolio</span>
          </span>
        </a>

        <nav aria-label="Sections" className="line-nav">
          <ol className="line-track" style={{ "--progress": progress }}>
            <span className="line-fill" aria-hidden="true" />
            <span className="line-train" aria-hidden="true" />
            {stations.map((s, i) => (
              <li key={s.id} className={`stop ${i <= activeIndex ? "passed" : ""} ${i === activeIndex ? "current" : ""}`}>
                <a href={`#${s.id}`} aria-current={i === activeIndex ? "location" : undefined}>
                  <span className={`stop-dot c-${s.line}`} aria-hidden="true" />
                  <span className="stop-label">
                    <span className="stop-code mono">{s.code}</span>
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
            aria-controls="mobile-stations"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="burger" data-open={open} />
          </button>
        </div>
      </div>

      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <ol id="mobile-stations" className={`mobile-stations ${open ? "open" : ""}`}>
        {stations.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} onClick={close} className={i === activeIndex ? "current" : ""}>
              <span className={`code-pill bg-${s.line} mono`}>{s.code}</span>
              {s.name}
            </a>
          </li>
        ))}
      </ol>
    </header>
  );
}
