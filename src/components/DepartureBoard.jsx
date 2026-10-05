import { useEffect, useState } from "react";
import { departures } from "../data/profile.js";

const COLS = [
  { key: "time", label: "Time", width: 4 },
  { key: "dest", label: "Destination", width: 17 },
  { key: "plat", label: "Plat", width: 4, hideOnMobile: true },
  { key: "status", label: "Status", width: 8 },
];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-·";
const TICK_MS = 45;

// When each character stops flipping, in ticks. Rows settle one after another.
function settleTick(row, col, char) {
  return 6 + row * 9 + col * 0.9 + ((row * 31 + col * 17 + char * 7) % 5);
}
const LAST_TICK = Math.ceil(settleTick(departures.length, 40, 40)) + 2;

function pad(text, width) {
  return text.toUpperCase().padEnd(width).slice(0, width);
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useSingaporeClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
}

// A split-flap departure board. Characters flip through random glyphs and
// settle row by row — the board lists the journey so far.
export default function DepartureBoard() {
  const [tick, setTick] = useState(() => (reducedMotion() ? LAST_TICK : 0));
  const [run, setRun] = useState(0);
  const clock = useSingaporeClock();

  useEffect(() => {
    if (reducedMotion()) {
      setTick(LAST_TICK);
      return;
    }
    setTick(0);
    const id = setInterval(() => {
      setTick((t) => {
        if (t >= LAST_TICK) {
          clearInterval(id);
          return t;
        }
        return t + 1;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [run]);

  return (
    <figure className="board" aria-label="Departure board: my journey so far">
      <div className="board-head">
        <span className="board-title mono">
          <span className="board-led" aria-hidden="true" /> DEPARTURES
        </span>
        <span className="board-clock mono" aria-label={`Singapore time ${clock}`}>
          SGT {clock}
        </span>
      </div>

      <table className="board-table">
        <thead>
          <tr>
            {COLS.map((c) => (
              <th key={c.key} scope="col" className={c.hideOnMobile ? "hide-sm" : ""}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {departures.map((row, r) => (
            <tr key={r} data-status={row.status.replace(/\s/g, "").toLowerCase()}>
              {COLS.map((c, ci) => {
                const text = pad(row[c.key], c.width);
                const colOffset = COLS.slice(0, ci).reduce((n, x) => n + x.width, 0);
                return (
                  <td key={c.key} className={`col-${c.key} ${c.hideOnMobile ? "hide-sm" : ""}`}>
                    <span className="sr-only">{row[c.key]}</span>
                    <span className="flaps" aria-hidden="true">
                      {[...text].map((ch, i) => {
                        const settled = tick >= settleTick(r, colOffset + i, i);
                        const shown = settled || ch === " "
                          ? ch
                          : GLYPHS[(tick * 7 + i * 13 + r * 5) % GLYPHS.length];
                        return (
                          <span key={i} className={`flap ${settled ? "" : "flipping"}`}>
                            {shown}
                          </span>
                        );
                      })}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <figcaption className="board-foot mono">
        <span>Taikkyi → Hmawbi → Singapore</span>
        <button className="board-replay" onClick={() => setRun((n) => n + 1)}>
          ↻ Refresh board
        </button>
      </figcaption>
    </figure>
  );
}
