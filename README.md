# Amala Jose, portfolio

Personal site for Amala Jose, Frontend Technical Lead.

React 18, Vite 6, hand written CSS. No UI kit, no CSS framework, no analytics.

---

## Why it is built this way

The site is part of the argument. It is a portfolio for a frontend technical
lead, so the claims on it about performance, accessibility and component
structure should be verifiable by opening dev tools or reading this repository,
not just taken on trust.

That leads to a few deliberate constraints:

- **No UI library.** The components here are the argument for component design.
  Importing someone else's would undercut it.
- **Plain CSS with tokens.** One file of custom properties, co located
  component styles, no preprocessor and no runtime CSS.
- **Semantic HTML.** Real landmarks, real heading order, a skip link,
  visible focus states.
- **Content as data.** Everything readable lives in `src/data`, so copy can be
  edited without touching markup.
- **One colour rule.** `--measure` is reserved for values that were actually
  measured. It never appears as decoration.

---

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

---

## Project structure

```
.
├── index.html               # Vite entry, meta tags, font links
├── vite.config.js
├── public/
│   ├── Amala_Jose_Resume.pdf
│   ├── portrait.jpg
│   └── favicon.svg
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # page composition and section order
    ├── data/                # all copy, one file per section
    │   ├── profile.js       # name, contact, résumé path, headline
    │   ├── eras.js
    │   ├── figures.js
    │   ├── cases.js
    │   ├── lab.js
    │   ├── arc.js
    │   ├── skills.js
    │   └── index.js         # barrel
    ├── hooks/
    │   ├── usePointerGrid.js
    │   └── useStuck.js
    ├── components/          # one component per section, CSS co located
    └── styles/
        ├── tokens.css       # design tokens
        └── global.css       # reset, layout primitives, shared classes
```

---

## Editing content

Almost everything is in `src/data`. Nothing there requires touching JSX.

| Change | File |
| --- | --- |
| Name, contact, résumé path, LinkedIn, headline | `src/data/profile.js` |
| Three stack eras in the hero | `src/data/eras.js` |
| The proof strip numbers | `src/data/figures.js` |
| Case studies | `src/data/cases.js` |
| Open source and practice work | `src/data/lab.js` |
| Employment history | `src/data/arc.js` |
| Skill groups | `src/data/skills.js` |

The AI practice section is prose rather than data, and lives in
`src/components/AiPractice.jsx`.

To replace the résumé, drop the new PDF in `public/` and update
`profile.resumeUrl`.

---

## Before publishing

These are open on purpose. The site's credibility rests on everything on it
being true, so none of them should ship as they are.

- [ ] **Portrait.** `public/portrait.jpg` is currently an AI generated image.
      Replace it with a real photograph.
- [ ] **LinkedIn URL.** `profile.linkedinUrl` is `#`.
- [ ] **Practice work.** The three entries in `src/data/lab.js` are
      placeholders that describe the intended shape. Replace them with real
      repositories, or delete the file's contents and remove `<Lab />` from
      `App.jsx`. An empty section is fine. Invented projects are not.
- [ ] **AI practice section.** Rewrite `AiPractice.jsx` in Amala's own words
      with a real example.
- [ ] **Case study "What it cost" paragraphs.** These are reasonable
      inferences from the résumé, not statements Amala has made. Confirm or
      rewrite both.
- [ ] **Colophon.** `Footer.jsx` describes how the site is built. If the stack
      changes, change that sentence with it.

---

## Accessibility and performance

Worth keeping true, since the site claims it:

- Landmarks (`header`, `main`, `footer`), labelled sections, ordered headings
- Skip link to main content
- Visible focus rings on every interactive element
- `prefers-reduced-motion` honoured; the entrance animation and the pointer
  grid both switch off
- The pointer grid does not run at all on touch devices, and pointer writes are
  throttled to one animation frame
- Sticky header state uses `IntersectionObserver` rather than a scroll listener
- Fonts load with `display=swap` behind preconnects

Run Lighthouse against `npm run preview`, not the dev server.

---

## Deploying

The build is fully static.

**Netlify or Vercel.** Build command `npm run build`, publish directory `dist`.

**GitHub Pages.** Set `base` in `vite.config.js` to `"/<repo-name>/"` first,
then publish `dist`.

---

## Licence

Content and images are Amala Jose's. The code is hers to reuse.
