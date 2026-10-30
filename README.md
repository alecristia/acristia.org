# acristia.org

Personal portfolio of Alejandrina Cristia, built with [Astro](https://astro.build) on the MIT-licensed [Case](https://github.com/erlandv/case) theme by Erland.

## Where things live

- `src/config.ts` — name, headline, pitch, email, photo, CV, links, navigation
- `src/content/projects/*.mdx` — one file per project. Files with a `problem:` field get a full case-study page; the others appear as one-line entries.
- `src/pages/about.astro` — About page
- `public/` — images, CV PDF, `CNAME` (custom domain)

## Run locally

    npm install
    npm run dev      # preview at http://localhost:4321

## Publish

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
