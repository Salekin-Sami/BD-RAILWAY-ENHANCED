import { useState } from "react";
import "./App.css";

// --- Coach seat layouts ---
const COACH_LAYOUTS = {
  KA: {
    seats: 51,
    // 6 columns, variable rows, as per screenshot
    columns: 6,
    // Map seat index to grid position (row, col), based on screenshot
    // We'll use a flat array and skip empty spots for now
    // -1 indicates a gap (no seat)
    seatOrderinwebsite: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1, // Row 1: 1 seat
      2,
      3,
      4,
      -1,
      5,
      6, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      12,
      13,
      14,
      -1,
      15,
      16, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      22,
      23,
      24,
      -1,
      25,
      26, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      32,
      33,
      34,
      -1,
      35,
      36, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      42,
      43,
      44,
      -1,
      45,
      46, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 3 seats
    ],
    seatOrderorz: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1, // Row 1: 1 seat
      6,
      5,
      4,
      -1,
      3,
      2, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      16,
      15,
      14,
      -1,
      13,
      12, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      26,
      25,
      24,
      -1,
      23,
      22, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      36,
      35,
      34,
      -1,
      33,
      32, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      46,
      45,
      44,
      -1,
      43,
      42, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 3 seats
    ],
    seatLabels: Array.from({ length: 51 }, (_, i) => `KA-${i + 1}`),
  },
  GHA: {
    seatOrderorz: [
      -1,
      4,
      3,
      2,
      1, // Row 1: 4 seats
      -1,
      8,
      7,
      6,
      5, // Row 2: 4 seats
      -1,
      12,
      11,
      10,
      9, // Row 3: 4 seats
      -1,
      16,
      15,
      14,
      13, // Row 4: 4 seats
    ],
    seatOrderinwebsite: [
      -1,
      1,
      2,
      3,
      4, // Row 1: 4 seats
      -1,
      5,
      6,
      7,
      8, // Row 2: 4 seats
      -1,
      9,
      10,
      11,
      12, // Row 3: 4 seats
      -1,
      13,
      14,
      15,
      16, // Row 4: 4 seats
    ],
    seatOrder: Array.from({ length: 16 }, (_, i) => i),
    seatLabels: Array.from({ length: 16 }, (_, i) => `GHA-${i + 1}`),
  },
  UMA: {
    seatOrderinwebsite: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1, // Row 1: 1 seat
      2,
      3,
      4,
      -1,
      5,
      6, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      12,
      13,
      14,
      -1,
      15,
      16, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      22,
      23,
      24,
      -1,
      25,
      26, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      32,
      33,
      34,
      -1,
      35,
      36, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      42,
      43,
      44,
      -1,
      45,
      46, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 5 seats
      52,
      53,
      54,
      -1,
      55,
      56, // Row 12: 5 seats
      57,
      58,
      59,
      -1,
      60,
      61, // Row 13: 5 seats
      62,
      63,
      64,
      -1,
      65,
      66, // Row 14: 5 seats
      67,
      68,
      69,
      -1,
      70,
      71, // Row 15: 5 seats
      72,
      73,
      74,
      -1,
      75,
      76, // Row 16: 5 seats
      77,
      78,
      79,
      -1,
      80,
      81, // Row 17: 5 seats
      82,
      83,
      84,
      -1,
      85,
      86, // Row 18: 5 seats
      87,
      88,
      89,
      -1,
      90,
      91, // Row 19: 5 seats
      -1,
      -1,
      -1,
      -1,
      -1,
      92, // Row 1: 1 seat
    ],
    seatOrderorz: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1, // Row 1: 1 seat
      6,
      5,
      4,
      -1,
      3,
      2, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      16,
      15,
      14,
      -1,
      13,
      12, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      26,
      25,
      24,
      -1,
      23,
      22, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      36,
      35,
      34,
      -1,
      33,
      32, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      46,
      45,
      44,
      -1,
      43,
      42, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 3 seats
      56,
      55,
      54,
      -1,
      53,
      52, // Row 12: 5 seats
      57,
      58,
      59,
      -1,
      60,
      61, // Row 13: 5 seats
      66,
      65,
      64,
      -1,
      63,
      62, // Row 14: 5 seats
      67,
      68,
      69,
      -1,
      70,
      71, // Row 15: 5 seats
      76,
      75,
      74,
      -1,
      73,
      72, // Row 16: 5 seats
      77,
      78,
      79,
      -1,
      80,
      81, // Row 17: 5 seats
      86,
      85,
      84,
      -1,
      83,
      82, // Row 18: 5 seats
      87,
      88,
      89,
      -1,
      90,
      91, // Row 19: 5 seats
      -1,
      -1,
      -1,
      -1,
      -1,
      92, // Row 20: 1 seat
    ],
    seatOrder: Array.from({ length: 92 }, (_, i) => i),
    seatLabels: Array.from({ length: 92 }, (_, i) => `UMA-${i + 1}`),
  },
  THA: {
    seats: 51,
    columns: 6,
    seatOrderinwebsite: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      2,
      3,
      4,
      -1,
      5,
      6, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      12,
      13,
      14,
      -1,
      15,
      16, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      22,
      23,
      24,
      -1,
      25,
      26, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      32,
      33,
      34,
      -1,
      35,
      36, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      42,
      43,
      44,
      -1,
      45,
      46, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 5 seats
    ],
    seatOrderorz: [
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      6,
      5,
      4,
      -1,
      3,
      2, // Row 2: 5 seats
      7,
      8,
      9,
      -1,
      10,
      11, // Row 3: 5 seats
      16,
      15,
      14,
      -1,
      13,
      12, // Row 4: 5 seats
      17,
      18,
      19,
      -1,
      20,
      21, // Row 5: 5 seats
      26,
      25,
      24,
      -1,
      23,
      22, // Row 6: 5 seats
      27,
      28,
      29,
      -1,
      30,
      31, // Row 7: 5 seats
      36,
      35,
      34,
      -1,
      33,
      32, // Row 8: 5 seats
      37,
      38,
      39,
      -1,
      40,
      41, // Row 9: 5 seats
      46,
      45,
      44,
      -1,
      43,
      42, // Row 10: 5 seats
      47,
      48,
      49,
      -1,
      50,
      51, // Row 11: 5 seats
    ],
    seatLabels: Array.from({ length: 51 }, (_, i) => `THA-${i + 1}`),
  },
  CHA: {},
  SCHA: {},
  JA: {},
  JHA: {},
  NEO: {},
  TA: {}, // will alias UMA
};

// Alias UMA layout for similar coaches
["CHA", "SCHA", "JA", "JHA", "NEO", "TA"].forEach((alias) => {
  COACH_LAYOUTS[alias] = { ...COACH_LAYOUTS.UMA };
  COACH_LAYOUTS[alias].seatLabels = Array.from(
    { length: 92 },
    (_, i) => `${alias}-${i + 1}`
  );
});

const TOGGLABLE_COACHES = [
  "KA",
  "UMA",
  "CHA",
  "SCHA",
  "JA",
  "JHA",
  "NEO",
  "TA",
  "GHA",
  "THA",
];

export default function App() {
  const [coach, setCoach] = useState("KA");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [layoutMode, setLayoutMode] = useState("physical"); // 'booking' or 'physical'
  const layout = COACH_LAYOUTS[coach];

  // Pick correct seat order for togglable coaches
  let seatOrder = layout.seatOrder;
  if (TOGGLABLE_COACHES.includes(coach)) {
    seatOrder =
      layoutMode === "booking"
        ? layout.seatOrderinwebsite
        : layout.seatOrderorz;
  }
  // Set columns: GHA uses 5 columns, others use layout.columns or default 6
  const columns = coach === "GHA" ? 5 : layout.columns || 6;

  // Build seat rows for rendering
  const rows = [];
  for (let i = 0; i < seatOrder.length; i += columns) {
    rows.push(seatOrder.slice(i, i + columns));
  }

  // --- Seat logic helpers ---
  function isWindowSeat(seatIdx, rowIdx, colIdx) {
    const row = rows[rowIdx];
    if (!TOGGLABLE_COACHES.includes(coach)) return false;

    const seatNumber = row[colIdx];
    if (seatNumber === -1) return false;

    if (coach === "GHA") {
      // GHA has 5-column, 4-row layout with window seats at positions 1, 5, 9, and 13
      return (
        seatNumber === 1 ||
        seatNumber === 5 ||
        seatNumber === 9 ||
        seatNumber === 13
      );
    }

    // First and last single seats are always window seats
    if (rowIdx === 0 && seatNumber !== -1) {
      return true;
    }
    return colIdx % columns === 0 || colIdx % columns === columns - 1;
  }
  function getSeatColor(seatIdx, rowIdx, colIdx) {
    return isWindowSeat(seatIdx, rowIdx, colIdx) ? "green" : "yellow";
  }

  function getSeatInfo(seatIdx, rowIdx, colIdx) {
    const label = layout.seatLabels[seatIdx];
    if (!TOGGLABLE_COACHES.includes(coach)) return `${label} — Seat`;
    return `${label} — ${
      isWindowSeat(seatIdx, rowIdx, colIdx)
        ? "Window seat"
        : "Aisle seat, not window"
    }`;
  }

  // --- Render ---
  return (
    <div className="app-container">
      <h2>Train Seat Layout ({coach} Coach)</h2>
      <div className="coach-select-row">
        <label htmlFor="coach-select">Select Coach: </label>
        <select
          id="coach-select"
          value={coach}
          onChange={(e) => setCoach(e.target.value)}
        >
          {Object.keys(COACH_LAYOUTS).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {TOGGLABLE_COACHES.includes(coach) && (
        <>
          <button
            className="toggle-btn"
            onClick={() =>
              setLayoutMode(layoutMode === "booking" ? "physical" : "booking")
            }
          >
            Toggle to{" "}
            {layoutMode === "booking" ? "Real-life Coach" : "eTicketrailway Site"}{" "}
            Layout
          </button>
          <p className="current-mode">
            Current Mode:{" "}
            {layoutMode === "booking" ? "eTicketrailway Site" : "Real-life Coach"}
          </p>
        </>
      )}
      <div
        className={`seat-layout ${coach.toLowerCase()}-layout ${layoutMode}`}
      >
        {rows.map((row, rowIdx) => (
          <div
            className="seat-row"
            key={row
              .map((seatIdx) =>
                seatIdx === -1
                  ? "gap"
                  : layout.seatLabels[seatIdx - 1] || seatIdx
              )
              .join("-")}
          >
            {row.map((seatIdx, colIdx) =>
              seatIdx === -1 ? (
                <span
                  className="seat-gap"
                  key={`gap-${rowIdx}-${colIdx}`}
                ></span>
              ) : (
                <button
                  key={layout.seatLabels[seatIdx - 1] || seatIdx}
                  className={`seat seat-${getSeatColor(
                    seatIdx - 1,
                    rowIdx,
                    colIdx
                  )}`}
                  onClick={() =>
                    setSelectedSeat({ idx: seatIdx - 1, rowIdx, colIdx })
                  }
                  aria-label={layout.seatLabels[seatIdx - 1] || seatIdx}
                >
                  {layout.seatLabels[seatIdx - 1] || seatIdx}
                </button>
              )
            )}
          </div>
        ))}
      </div>
      {selectedSeat && (
        <dialog
          className="seat-info-popup"
          open
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="seat-info-content"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedSeat(null);
            }}
            onKeyDown={(e) => {
              if (["Escape", "Enter", " "].includes(e.key))
                setSelectedSeat(null);
            }}
          >
            {getSeatInfo(
              selectedSeat.idx,
              selectedSeat.rowIdx,
              selectedSeat.colIdx
            )}
            <br />
            <button
              className="toggle-btn"
              style={{
                marginTop: "1rem",
                fontSize: "0.95em",
                padding: "0.3rem 1.2rem",
              }}
              onClick={() => setSelectedSeat(null)}
              autoFocus
            >
              Close
            </button>
            <br />
            <small>(Tap outside, press Esc/Enter/Space, or use Close)</small>
          </div>
        </dialog>
      )}
      <div className="legend">
        <span className="legend-item green"></span> Window seat{" "}
        <span className="legend-item yellow"></span>Aisle/middle seat
      </div>
      {TOGGLABLE_COACHES.includes(coach) && (
        <div
          style={{ marginTop: "0.75rem", fontSize: "0.95em", color: "#888" }}
        >
          <b>Note:</b> In "Booking Site" layout, window seats appear at one
          edge; in "Physical Coach" layout, window seats are at the opposite
          edge (real-life).
        </div>
      )}
    </div>
  );
}
