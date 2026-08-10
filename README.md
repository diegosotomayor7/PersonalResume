# Diego Sotomayor Portfolio

A portfolio site styled as a museum exhibit. Projects are displayed as
pieces in a gallery, complete with a velvet-rope barrier, picture-frame
carousel, and a couple of mascot "tourists" that wander in for each
exhibit.

Live at: _add your deployed URL here_

## Tech stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
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
  tourists_<name>/  mascot images shown while a project is active
  background.png    exhibit background
  museum_barriers.png  velvet-rope overlay

src/
  data/projects.js         all project content (single source of truth)
  pages/Exhibit.jsx         home page: carousel + tourists + barrier
  pages/ProjectDetail.jsx   per-project detail page
  components/ProjectCarousel.jsx  the sliding picture-frame carousel
```

## Adding or editing a project

Everything about a project — title, year, media, description, tech
tags, links, and its two "tourist" mascots — lives in one place:
`src/data/projects.js`. Add a new object to the `projects` array and
it automatically appears in the carousel and gets its own detail page
at `/project/<id>`.

```js
{
  id: 'my-project',
  title: 'My Project',
  year: 2026,
  medium: 'React, Node.js',
  image: '/logos/my-logo.png',        // shown in the carousel + detail page
  poster: '/posters/my-poster.png',   // video poster frame (optional)
  media: { type: 'video', src: '/videos/my-demo.mp4' }, // or { type: 'image', src: '...' }
  tourists: {
    left: {
      src: '/tourists_my-project/mascot-a.png',
      pixelArt: false,               // true = crisp pixel-art rendering
      className: 'bottom-6 left-4 w-16 sm:top-130 sm:left-30 sm:w-32',
    },
    right: {
      src: '/tourists_my-project/mascot-b.png',
      pixelArt: false,
      className: 'right-4 bottom-4 w-20 sm:top-122 sm:right-35 sm:w-32',
    },
  },
  description: 'What it is, who it is for, why it exists.',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/your-handle/my-project', // or null to hide the button
}
```

Each tourist's `className` controls its own size and position, so you
can tune them individually without affecting other projects.

## Deployment

This is a static Vite app — build output lands in `dist/` and can be
hosted anywhere that serves static files (Vercel, Netlify, GitHub
Pages, etc). On Vercel/Netlify, no configuration is needed: they
auto-detect the build command (`npm run build`) and output directory
(`dist`).
