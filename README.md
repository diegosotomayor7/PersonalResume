# Diego Sotomayor Portfolio

A portfolio site styled as a museum exhibit. Projects are displayed as
flip cards: hover (or tap on mobile) to flip a card from its logo to
its demo video/image, with a short description and a "View Code" link
underneath.

Live at: https://diegosotomayorportfolio.vercel.app/

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) for dev server and build
- [Tailwind CSS v4](https://tailwindcss.com/) for styling

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Project structure

```
public/
  logos/            project logo/thumbnail images
  posters/          fallback poster images for the media card
  videos/           demo videos for the media card
  background.png    exhibit background
  headshot.png      profile photo shown in the page header
  linkedinlogo.webp LinkedIn badge overlaid on the headshot

src/
  data/projects.js             all project content (single source of truth)
  pages/Exhibit.jsx            home page: header + card grid
  components/ProjectCards.jsx  the flip-card grid
```

## Adding or editing a project

Everything about a project — title, year, media, description, tech
tags, and links — lives in one place: `src/data/projects.js`. Add a
new object to the `projects` array and it automatically appears in
the card grid.

```js
{
  id: 'my-project',
  title: 'My Project',
  year: 2026,
  medium: 'React, Node.js',
  image: '/logos/my-logo.png',        // card front
  poster: '/posters/my-poster.png',   // video poster frame (optional)
  media: { type: 'video', src: '/videos/my-demo.mp4' }, // or { type: 'image', src: '...' } — shown on the card back
  description: 'Longer write-up (not currently shown on the site).',
  shortDescription: 'One short sentence shown under the flipped card.',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/your-handle/my-project', // or null to hide the "View Code" link
}
```

## Deployment

This is a static Vite app — build output lands in `dist/` and can be
hosted anywhere that serves static files (Vercel, Netlify, GitHub
Pages, etc). On Vercel/Netlify, no configuration is needed: they
auto-detect the build command (`npm run build`) and output directory
(`dist`).
