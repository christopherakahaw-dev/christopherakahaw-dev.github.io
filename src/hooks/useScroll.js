import { useEffect, useState } from "react";

// Which section is currently in view, plus overall page scroll progress (0–1).
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      // Active = last section whose top has passed 40% of the viewport
      const line = window.innerHeight * 0.4;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
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

  return { active, progress };
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
