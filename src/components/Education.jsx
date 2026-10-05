import { useEffect, useRef } from "react";
import Section from "./Section.jsx";
import { education } from "../data/profile.js";
import { useElementProgress } from "../hooks/useScroll.js";

const REGION_LABEL = { mm: "Myanmar", online: "Online & certificates", sg: "Singapore" };
const REGION_COLOR = { mm: "--accent-3", online: "--accent", sg: "--accent-2" };

// Colour the timeline by region, switching between each region's stops.
// Stop positions depend on layout, so this is measured, not hard-coded.
function useRouteColours(ref, fillRef) {
  useEffect(() => {
    const ol = ref.current;
    const fill = fillRef.current;
    if (!ol || !fill) return;

    function paint() {
      const top = fill.getBoundingClientRect().top;
      const stops = [...ol.querySelectorAll(".rstop")].map((li, i) => {
        const dot = li.querySelector(".rstop-dot").getBoundingClientRect();
        return { y: dot.top + dot.height / 2 - top, color: `var(${REGION_COLOR[education[i].region]})` };
      });
      const parts = [`${stops[0].color} 0px`];
      for (let i = 1; i < stops.length; i++) {
        if (stops[i].color !== stops[i - 1].color) {
          const y = Math.round(stops[i - 1].y + (stops[i].y - stops[i - 1].y) * 0.5);
          parts.push(`${stops[i - 1].color} ${y}px`, `${stops[i].color} ${y + 24}px`);
        }
      }
      fill.style.background = `linear-gradient(180deg, ${parts.join(", ")})`;
    }

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(ol);
    return () => ro.disconnect();
  }, [ref, fillRef]);
}

// Education as a timeline that draws itself as you scroll down it.
export default function Education() {
  const ref = useRef(null);
  const fillRef = useRef(null);
  useElementProgress(ref);
  useRouteColours(ref, fillRef);

  return (
    <Section id="route" title="The journey so far">
      <ol ref={ref} className="route">
        <span className="route-track" aria-hidden="true" />
        <span ref={fillRef} className="route-fill" aria-hidden="true" />
        {education.map((e, i) => {
          const regionStart = i === 0 || education[i - 1].region !== e.region;
          return (
            <li key={e.title} className={`rstop r-${e.region} ${e.major ? "major" : ""} reveal`}>
              {e.interchange && (
                <p className="transfer mono">⇄ {e.interchange}</p>
              )}
              {regionStart && !e.interchange && (
                <p className="region mono">{REGION_LABEL[e.region]}</p>
              )}
              <span className="rstop-year mono">{e.year}</span>
              <span className="rstop-dot" aria-hidden="true" />
              <div className="rstop-card">
                <h3>{e.title}</h3>
                <p className="rstop-place">{e.place}</p>
                {e.points.length > 0 && (
                  <ul>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
