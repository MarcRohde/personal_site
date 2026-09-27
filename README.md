# personal_site

Source for <https://marc.rohde-net.us>, built with Astro and deployed to GitHub Pages.

## Edit

- Home content: `src/data/profile.json`
- Toolbox: `src/data/toolbox.json`
- Long-form writing: add a Markdown file to `src/content/writing/` with `title`, `date`, `summary`, optional `slug` and `tags`, and `draft: true` until it is ready. Drafts show only in `npm run dev`.
- Shared layout and styles: `src/layouts/Base.astro`

Writing here is long-form only; short posts stay on LinkedIn.

## Run locally

```powershell
npm install
npm run dev
```

## Publish

Push or merge to `main`. The `.github/workflows/deploy.yml` workflow builds and deploys automatically.
