# acristia.org

Personal portfolio of Alejandrina Cristia, built with [Astro](https://astro.build) on the MIT-licensed [Case](https://github.com/erlandv/case) theme by Erland.

## Where things live

- `src/config.ts` — name, headline, pitch, email, photo, CV, links, navigation
- `src/content/projects/*.mdx` — one file per project. Files with a `problem:` field get a full case-study page; the others appear as one-line entries.
- `src/pages/about.astro` — About page
- `public/` — images, CV PDF, `.nojekyll` (tells GitHub to serve files as-is)

## Run locally

    npm install
    npm run dev      # preview at http://localhost:4321

## Publish

The finished site lives in `docs/` and GitHub Pages serves that folder directly
(Settings → Pages → Deploy from a branch → `main` / `/docs`).
After editing, run `npm run build` to refresh `docs/`, then commit and push.
