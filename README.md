# amala-jose.github.io

Amala Jose's personal portfolio site. Built with React and Vite, deployed
automatically to GitHub Pages on every push to `main`.

Live at: https://amala-jose.github.io/ (once deployed, see below)

## What's here

- `src/data/content.js`, all real content (bio, skills, experience,
  projects, credentials, contact info) lives in this one file. Edit this
  when you want to change what the site says.
- `src/components/`, one component per section (Hero, Skills, Experience,
  Projects, etc). You shouldn't need to touch these to update content.
- `src/index.css` and `src/styles/sections.css`, the design system and
  section styles.
- `.github/workflows/deploy.yml`, builds and deploys the site automatically
  whenever you push to `main`.

## First-time setup

1. Create the repository on GitHub named exactly `amala-jose.github.io`
   (this exact name is what makes GitHub serve it at the root domain).
2. Push this project to that repository's `main` branch.
3. In the repo on GitHub, go to **Settings → Pages**, and under "Build and
   deployment", set **Source** to **GitHub Actions**. You only need to do
   this once.
4. Push again (or re-run the workflow from the **Actions** tab). Within a
   minute or two the site will be live at `https://amala-jose.github.io/`.

From then on, every push to `main` redeploys the site automatically.

## Local development

Requires [Node.js](https://nodejs.org) 20 or later.

```bash
npm install
npm run dev
```

This opens a local dev server (usually at `http://localhost:5173`) that
live-reloads as you edit files.

## Adding your CodeSandbox projects

Open `src/data/content.js` and find the `projects` array near the bottom.
It's empty right now, so the Projects section shows a "coming soon"
placeholder. Add entries like this:

```js
export const projects = [
  {
    title: "Design System Playground",
    description: "A themeable component library built in Storybook.",
    href: "https://codesandbox.io/s/your-sandbox-id",
    tags: ["React", "Storybook", "TypeScript"],
  },
];
```

Each entry automatically renders as a card. No other changes needed.

## Building manually (optional)

You don't need to do this for normal updates, GitHub Actions handles it.
It's only useful if you want to check the production build locally:

```bash
npm run build
npm run preview
```

## Updating content

Everything text-based (bio, stats, skills, job history, certifications,
contact details) lives in `src/data/content.js`. Change the values there,
commit, and push, the site rebuilds and redeploys on its own.
