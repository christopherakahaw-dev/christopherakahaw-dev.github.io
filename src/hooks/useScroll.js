import { useEffect, useState } from "react";

// Which section is currently in view, how far through it you are (0–1),
// and overall page scroll progress (0–1).
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const [fraction, setFraction] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      // Active = last section whose top has passed 40% of the viewport
      const line = window.innerHeight * 0.4;
      const tops = ids.map((id) => document.getElementById(id)?.getBoundingClientRect().top ?? Infinity);
      let index = -1;
      tops.forEach((top, i) => {
        if (top <= line) index = i;
      });

      // Fraction through the active section, measured to the next section's top
      let frac = 0;
      if (index >= 0 && index < ids.length - 1) {
        const span = tops[index + 1] - tops[index];
        frac = span > 0 ? Math.max(0, Math.min(1, (line - tops[index]) / span)) : 0;
      }
      setActive(index >= 0 ? ids[index] : null);
      setFraction(frac);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return { active, fraction, progress };
}

// How far an element has been scrolled through the viewport (0–1),
// written to the element as the CSS variable --p.
export function useElementProgress(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    function update() {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.75 - r.top) / r.height;
      el.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(4));
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref]);
}
