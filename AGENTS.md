# AGENTS.md — Personal Portfolio Website

## Stack

- **Next.js 16** (App Router, no `src/` dir), **React 19**, **TypeScript 5**
- **Tailwind CSS v4** — CSS-first config via `@theme` in `app/globals.css`, **no `tailwind.config.js`**
- **pnpm** package manager
- shadcn/ui (New York style, `@/*` → root `./*`)

## Commands

| Command | What it does |
|---------|-------------|
| `pnpm dev` | Dev server |
| `pnpm build` | `next build` — **does NOT catch TS errors** (`typescript.ignoreBuildErrors: true`) |
| `pnpm start` | Production server |
| `pnpm lint` | ESLint (Next.js built-in, no custom config) |

No test framework, no CI, no typecheck script.

## Key gotchas

- **TS errors are invisible to `pnpm build`** — run `npx tsc --noEmit` separately to typecheck
- **Tailwind v4**: all theme tokens (colors, fonts, radii) defined via `@theme inline` in `globals.css`. Do not create `tailwind.config.js`.
- Custom utility CSS classes in `globals.css`: `.gradient-text`, `.float-animation`, `.glow-primary`, `.glow-secondary`, `.glow-accent`, `.grid-overlay`, `.card-hover`
- All components are `'use client'` with named exports (`export function`)
- `@/` path alias maps to project root (`./*`) — `@/components/x` → `components/x`, `@/lib/utils` → `lib/utils`

## Architecture

- Single-page portfolio — sections: home/hero, about, languages (video), work (projects), contact
- Entrypoint: `app/page.tsx` imports sections from `components/`
- API: `app/api/send-contact/route.ts` (POST, nodemailer + Google Forms webhook)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Contact form API

Requires these env vars (in `.env.local`):
```
GMAIL_USER=...
GMAIL_APP_PASSWORD=...
GOOGLE_SHEET_WEBHOOK_URL=...
```

## Dead / unreferenced code

- `components/theme-provider.tsx` — never imported in layout
- `components/ui-designs.tsx` — never imported anywhere

The `agent-skills/` directory is a separate concern (AI agent skill management), unrelated to the portfolio.
