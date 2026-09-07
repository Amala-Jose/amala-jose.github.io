/*
  PLACEHOLDER CONTENT.

  These three entries show the intended shape only. Replace them with real
  repositories, Storybooks or sandboxes before publishing, or remove the
  section entirely from App.jsx.

  An empty section is fine. Invented projects are not, and they would undo
  the credibility the rest of the site is working for.
*/

export const lab = [
  {
    id: "js-starter",
    name: "JS Fundamentals Practice: Closures & Custom Array Methods (map/filter/reduce)",
    blurb:
      "A small set of accessible primitives, documented in Storybook and versioned, built the way I build them at work.",
    stack: ["JS"],
    links: [
      { label: "CodeSandbox", href: "https://codesandbox.io/p/sandbox/counter-with-n-and-n-1-8p44d8" },
    ],
  },
  {
    id: "use-debounce",
    name: "useDebounce — Custom React Hook for Debounced Input",
    blurb:
      "A custom React hook (useDebounce) that delays updating a value until a specified pause in changes, implemented with useState and useEffect.",
    stack: ["React"],
    links: [
      { label: "CodeSandbox", href: "https://codesandbox.io/p/sandbox/debounce-w5lndx" },
    ],
  },
  {
    id: "stopwatch-laps",
    name: "Stopwatch with Lap Tracking (React Hooks)",
    blurb:
      "A stopwatch built with React hooks (useState, useEffect, useRef) that supports start/stop and lap recording. useRef holds the setInterval reference so it can be cleared without triggering re-renders, and the useEffect cleanup ensures the interval is torn down whenever isRunning changes or the component unmounts, avoiding leaked timers. Recording a lap (recordLapseTime) pushes the current formatted time to the top of a running lap list and resets the counter to zero without stopping the timer, so lap times represent splits rather than cumulative time. The UI conditionally swaps between \"Lap\" and \"Reset\" buttons based on run state.",
    stack: ["React"],
    links: [{ label: "CodeSandbox", href: "https://codesandbox.io/p/sandbox/stop-watch-lap-fd3cn2" }],
  },
];
