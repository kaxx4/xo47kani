# Deploying XO47 to Vercel

This app is a standard Next.js 16 (App Router) site and is configured to deploy on Vercel with **zero extra setup** — every route is statically prerendered, there are no databases, API keys, or server env vars required.

## Quick deploy (Git integration — recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel → **Add New… → Project** → import the repo.
3. Framework preset auto-detects as **Next.js**. Leave Build & Output settings at their defaults:
   - Build command: `next build` (default)
   - Output directory: `.next` (default)
   - Install command: `npm install` (default)
4. Click **Deploy**.

That's it. Vercel builds with the native Next.js pipeline (see the `output` note below) and serves all 66 pages + `/sitemap.xml` + `/robots.txt`.

## Quick deploy (Vercel CLI)

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## What was configured for Vercel

| Item | Detail |
| --- | --- |
| **Node version** | `.nvmrc` = `22` and `engines.node` = `>=20.9.0`. Vercel's runtimes top out at Node 22, so the repo no longer pins Node 24 (which would fail the Vercel build). |
| **`output` mode** | `next.config.ts` sets `output: "standalone"` **only** when not on Vercel (`process.env.VERCEL`). On Vercel it stays undefined so Vercel's own build/trace pipeline handles it; the standalone output is reserved for the Docker path. |
| **Caching** | `/images/*` is served with `Cache-Control: public, max-age=31536000, immutable` (via `next.config.ts` `headers()`), plus baseline security headers on all routes. |
| **Images** | The photographic assets in `public/images` were compressed (≈714 MB → ≈1 MB) via `scripts/optimize-images.mjs`. Re-run that script after dropping new images in `public/images`. |
| **SEO** | `src/app/robots.ts` and `src/app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml` from the live route + product list. |
| **Lean uploads** | `.vercelignore` excludes `.claude/`, `docs/`, `scripts/`, and the Docker files from the deployment. |

## Optional environment variables

Everything works without env vars. For correct canonical / Open Graph URLs once a real domain is attached, set:

```
NEXT_PUBLIC_SITE_URL = https://weknowtailoring.com
```

If unset, the site falls back to the Vercel production URL (`VERCEL_PROJECT_PRODUCTION_URL`) and finally to `https://weknowtailoring.com`.

## Custom domain

Vercel → Project → **Settings → Domains** → add `weknowtailoring.com` (and `www`), then point your DNS at Vercel per the on-screen instructions. After the domain is live, set `NEXT_PUBLIC_SITE_URL` to it and redeploy so metadata/sitemap use the canonical host.

## Verifying locally before pushing

```bash
npm run check      # lint + typecheck + build
VERCEL=1 npm run build   # build exactly as Vercel does (no standalone output)
```
