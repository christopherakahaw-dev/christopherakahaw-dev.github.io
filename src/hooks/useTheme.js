import { useEffect, useState } from "react";

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || systemTheme()
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode) — theme still applies for this visit
    }
  }

  return [theme, toggle];
}
