# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server (Turbopack is the default in Next 16) at http://localhost:3000
npm run build    # Production build (Turbopack) — also runs full TypeScript type-checking
npm run start    # Serve the production build
npm run lint     # ESLint (flat config, eslint.config.mjs)
```

There is no test setup in this project. To type-check without building: `npx tsc --noEmit` (note: `*.jpg`/`*.png` import errors there are expected until `next dev`/`next build` regenerates `next-env.d.ts`).

## What this is

A static personal portfolio for Elijah Monjardin. **Stack:** Next.js 16 (App Router) · React 19 · TypeScript 6 · **Tailwind CSS v4** · `motion` 12 (the renamed framer-motion) · `next-themes`. Deployed to Vercel at `https://elijahmonjardin.vercel.app`. No database/CMS/backend — every page is statically prerendered.

## Architecture

- **App Router lives at the repo root in `app/`** (no `src/`). Routes: `/`, `/projects`, `/about`, `/projects/capstone`. Import alias `@/*` → project root.
- **Content is data-in-code.** Shared content lives in `app/lib/`: `site.ts` (name, URL, email, nav links, social links, `SAME_AS` for schema) and `content.ts` (`EXPERIENCES`). Page-specific data (skills, project cards, capstone copy) is hardcoded in the page/component files. **To change content, edit these files** — there is no data layer. Experience `bullets` (and `note`) support tiny inline markup parsed by `ExperienceCard`: `**term**` emphasizes a technology, `==metric==` renders a headline number in the brand gradient. Optional experience flags: `featured: true` spans both columns of the experience grid, `confidential: true` adds an NDA pill by the company name, and `note` renders a closing line with an "Ask me" mailto link.
- **Server vs client components:** pages are Server Components. Anything using `motion`, hooks, or `next-themes` is a Client Component (`"use client"`). Keep the boundary thin — wrap only the animated/interactive leaf, not the page.

## Theming (dark-first, Tailwind v4)

- **No `tailwind.config.ts`.** v4 is CSS-first: all config is in `app/globals.css` via `@theme` / `@theme inline` / `@custom-variant` / `@utility`. PostCSS uses `@tailwindcss/postcss` (`postcss.config.mjs`).
- **Semantic color tokens switch with the theme.** `--background`, `--surface`, `--foreground`, `--muted`, `--border`, `--card` are defined in `:root` (light) and `.dark` (dark) and bound to utilities via `@theme inline` → use `bg-background`, `text-foreground`, `text-muted`, `border-border`, etc. **Dark is the default.**
- **Fixed accent palette (cyan→blue→violet):** `accent-cyan #22D3EE`, `accent-blue #3B82F6`, `accent-violet #8B5CF6`. The brand gradient recurs everywhere — reuse the `text-gradient` and `glass` custom utilities and the `from-accent-cyan via-accent-blue to-accent-violet` gradient.
- **Dark mode = class strategy.** `next-themes` (`app/providers.tsx`, `attribute="class"`, `defaultTheme="dark"`) toggles `.dark` on `<html>` via a pre-paint script (so the SSR HTML has no `.dark` class — that's correct, not a bug). `<html>` has `suppressHydrationWarning`. Don't reintroduce a `darkMode` config or hand-rolled toggle.

## Motion

- Import from **`motion/react`** (never `framer-motion`). Reusable wrappers live in `app/Components/motion/`: `Reveal`/`RevealGroup`/`RevealItem` (scroll-into-view entrances — use these instead of CSS entrance classes), `AuroraBackground` (ambient gradient, mounted once in layout), `ScrollProgress`, `BackToTop`.
- **Motion is intentionally restrained** (professional, not flashy). Respect this. `prefers-reduced-motion` is honored two ways: `<MotionConfig reducedMotion="user">` in `providers.tsx` and a CSS media query in `globals.css`.

## Images

- `next/image` with static imports from `public/images/...`. `next.config.mjs` whitelists remote images only from `media.licdn.com` (LinkedIn photos on the capstone page) and sets `images.qualities: [75, 100]` (Next 16 defaults to `[75]` and would otherwise downgrade `quality={100}`). New remote hosts must be added to `remotePatterns`.

## SEO (treat as load-bearing)

- Per-route `metadata` exports with `alternates.canonical`; root template `'%s | Elijah Monjardin'` and `metadataBase` in `app/layout.tsx`. Do **not** add manual `<link rel="canonical">` or verification `<meta>` in `<head>` — use the `metadata` fields (duplicates were removed).
- File-convention metadata routes: `app/opengraph-image.tsx` (dynamic OG via `next/og`), `app/icon.tsx` + `app/apple-icon.tsx` (EM monogram), `app/manifest.ts`, `app/sitemap.ts`, `app/robots.ts`. **There is no `next-sitemap`** and no committed `public/sitemap*.xml`/`robots.txt` — those route files generate them; don't re-add static copies (they'd shadow the routes).
- JSON-LD via `app/Components/JsonLd.tsx`: Person + WebSite in `layout.tsx`, BreadcrumbList on the capstone page.

## Conventions / gotchas

- ESLint is **flat config** (`eslint.config.mjs`) composing `eslint-config-next/core-web-vitals`. ESLint is pinned to **9** (the Next 16 lint plugins don't yet support 10). The `react-hooks/set-state-in-effect` rule is intentionally disabled for idiomatic mounted-guard / library-init effects.
- Logo is an inline SVG monogram (`app/Components/logo.tsx`) stroked with the brand gradient. Mobile nav is `app/Components/MobileMenu.tsx` (accessible motion slide-over — replaced the old CSS-checkbox drawer).
