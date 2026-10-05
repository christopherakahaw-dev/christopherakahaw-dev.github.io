# Htoo Aung Win — Portfolio

Personal portfolio site built with **React + Vite**, deployed to **GitHub Pages**.

Live: https://christopherakahaw-dev.github.io/portfoliio/

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/portfoliio/

## Update the content

All text — projects, skills, education, experience — lives in
[`src/data/profile.js`](src/data/profile.js). Edit that file; the components
only read from it.

## Structure

```
src/
  data/profile.js     all site content
  components/         one component per section (Hero, About, Projects, ...)
  hooks/              useTheme (light/dark toggle), useReveal (scroll fade-in)
  styles.css          theme tokens and all styles
.github/workflows/    builds and deploys to GitHub Pages on every push to main
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow, which builds the site
and publishes `dist/` to GitHub Pages. In the repo settings, **Pages → Source**
must be set to **GitHub Actions**.
