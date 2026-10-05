import { useEffect } from "react";

const canTilt = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 3D tilt that follows the pointer. Sets --rx / --ry (degrees) and
// --mx / --my (pointer position, %) on the element for CSS to use.
export function useTilt(ref, strength = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !canTilt()) return;

    function move(e) {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${((x - 0.5) * strength).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * strength).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    }
    function leave() {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    }
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [ref, strength]);
}
