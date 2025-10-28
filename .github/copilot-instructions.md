## Copilot instructions — small static Tic Tac Toe site

Quick summary
- This repository is a tiny, static vanilla JavaScript web app (Tic Tac Toe). Primary files:
  - `index.html` — markup and the 3x3 button grid, links `style.css` and `javascript.js`.
  - `javascript.js` — app logic: DOM queries, click handlers, win detection.
  - `style.css` — visual layout, uses `vmin` units.

How to run / debug (no build step)
- There is no package.json or build system. Open `index.html` directly in a browser to run.
- For a local HTTP server (recommended for consistent resource loading):
  - From project root (PowerShell):
    `python -m http.server 8000`
  - Then open `http://localhost:8000`.
- Use browser DevTools Console to observe logs (the app uses `console.log` on clicks and when a winner is found).

Project conventions & patterns (concrete)
- Vanilla DOM-first code: `javascript.js` uses `querySelectorAll` and `addEventListener` directly. Expect global state and small helper functions.
- Script is included at the end of `body` in `index.html` (so DOM elements are available at script run-time).
- No modules, bundlers, or tests detected — modify files directly and verify in the browser.

Key files to inspect when making changes
- `index.html` — source of truth for element IDs/classes and the grid structure.
- `javascript.js` — event wiring, `winpattern` array, `checkwinner()` and `showwinner()` functions.
- `style.css` — visual sizing and selector rules; keep CSS selectors consistent with HTML IDs/classes.

Common, discoverable pitfalls (call these out explicitly)
- Selector / case-sensitivity mismatches (very important):
  - In `index.html` the reset button is declared as `<button id="Reset">Reset game</button>` (capital "R").
  - In `javascript.js` the code queries `document.querySelector("#reset")` (lowercase). IDs are case-sensitive in selectors — update both sides or normalize to one form.
- `msg-container` mismatch:
  - HTML uses `<div class="msg-container hide">` (class), but `javascript.js` does `document.querySelector("#msg-container")` (ID). Use the same selector type in both HTML and JS.
- CSS typo: `style.css` contains a `reset { ... }` rule (no `.` or `#`). That selector does not match the reset button — likely intended `#Reset` or `#reset`.

Small recommended editing rules for agents
- Before changing selectors: search for that identifier across all three files and update all occurrences (HTML, JS, CSS).
- Prefer lowercase, hyphenated IDs/classes (e.g., `#reset-game`, `.msg-container`) to avoid case mistakes.
- Keep changes minimal and run the page after each change to verify behavior in DevTools.
- When adding/removing DOM elements, update `javascript.js` to avoid out-of-bounds access (the code assumes exactly 9 `.box` elements and references them by index in `winpattern`).

Concrete examples from this repo
- Query mismatch example (fix both sides):
  - `index.html`: `<button id="Reset">Reset game</button>`
  - `javascript.js`: `let reset = document.querySelector("#reset");`  <-- case mismatch
- msg container example:
  - `index.html`: `<div class="msg-container hide">` and `<p id="msg">Winner</p>`
  - `javascript.js`: `let msgcontainer = document.querySelector("#msg-container");`  <-- selects ID but HTML uses class

If you need more context
- Tell me whether you prefer to standardize on lowercase IDs or hyphenated names. I can update HTML, JS, and CSS consistently and run a quick sanity check in the browser.

What I will not assume
- There is no test harness or CI config in the repo. Do not attempt to add CI or node-based tooling without confirming you want it.

End of file — please review and tell me what naming/convention you prefer (lowercase IDs, hyphenated names, or keep current style) so I can update the code consistently.
