# Munawar Hossain — Portfolio

Astro 7 site built on the [Sumi](https://github.com/kpab/astro-sumi) theme (MIT, see `LICENSE-sumi-theme`).

- `npm run dev` — local dev server
- `npm run build` — static build to `dist/`
- Content lives in `src/data/*.json`; site settings in `src/config.ts`.
- Deployed by Cloudflare Workers Builds (git-connected). Build command `npm run build`, deploy command `npx wrangler deploy` (serves `dist/` per `wrangler.jsonc`), Node 22 (`.nvmrc`).
- `public/_headers` sets security and cache headers.
