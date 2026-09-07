/*
  Case studies are shaped as problem, decision, cost, outcome.
  The "cost" entries are the ones that make these read as real work,
  so keep them honest and specific.
*/

export const cases = [
  {
    id: "component-library",
    title: "One component library instead of seven opinions",
    context: "Emids Technologies, healthcare SaaS platforms, 2021 to now",
    parts: [
      {
        term: "The problem",
        body: "Several product teams were building the same interface pieces separately. The same table, the same date field, the same modal, each written a slightly different way, each carrying its own bugs and its own accessibility gaps. Every new platform made the gap wider.",
      },
      {
        term: "The decision",
        body: "Build one component library and own it properly, rather than publishing guidelines and hoping teams would follow them. Documented in Storybook, versioned, and adopted across the enterprise applications rather than offered as an option.",
      },
      {
        term: "What it cost",
        body: "Central ownership makes you a bottleneck. Teams that could previously ship a one off component in an afternoon now had to come through a review. That friction is real and I had to spend time defending it, which is the honest tradeoff of consolidating anything.",
      },
      {
        term: "Where it landed",
        outcome: "Duplicate UI development effort dropped by around 60%",
        body: ", and interface consistency stopped being something we corrected at the end of a release.",
      },
    ],
  },
  {
    id: "state-architecture",
    title: "Moving comparison state out of the components",
    context: "Plan Compare, a public Medicare plan comparison portal, 2019 to 2021",
    parts: [
      {
        term: "The problem",
        body: "A public portal where people compare insurance plans without logging in. Filters, selections and side by side views all touched the same underlying state, and that state was being derived inside components. The bugs were not in any one place, which is the worst kind of bug to be handed.",
      },
      {
        term: "The decision",
        body: "Move to NgRx and RxJS with a single source of truth and everything downstream derived through selectors. Components read, they no longer decide.",
      },
      {
        term: "What it cost",
        body: "NgRx is heavy. It added boilerplate to work that used to be three lines, and the team needed real time to get comfortable with it. On a smaller surface I would not have reached for it, and I have said no to it on projects since.",
      },
      {
        term: "Where it landed",
        outcome: "Data flow became predictable and UI bugs across the comparison flows dropped",
        body: ", which mattered more than usual given who was using it and what they were choosing.",
      },
    ],
  },
];
