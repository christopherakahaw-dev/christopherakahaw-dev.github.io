import { useState } from "react";
import { profile } from "../data/profile.js";
import { useTheme } from "../hooks/useTheme.js";
import { SunIcon, MoonIcon } from "./Icons.jsx";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav aria-label="Primary" className="nav-menu">
          <ul id="nav-links" className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
          </ul>
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
            aria-controls="nav-links"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="burger" data-open={open} />
          </button>
        </div>
      </div>
    </header>
  );
}
