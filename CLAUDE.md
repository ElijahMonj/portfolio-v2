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

- **App Router lives at the repo root in `app/`** (no `src/`). **The site is one page — `/` is the only route.** `/projects`, `/about` and `/projects/capstone` are permanent redirects to `/#projects`, `/#about` and `/#case-study` (`next.config.mjs`). Import alias `@/*` → project root.
- **The home page is a composition, not a page.** `app/page.tsx` renders five section components from `app/Components/sections/` in order: `Hero` (`#top`), `Work` (`#work`), `Projects` (`#projects`), `About` (`#about`), `Contact` (`#contact`). Each is wrapped in `sections/Section.tsx`, which supplies the `id` and the `scroll-mt-24` that clears the 64px sticky header. **Every top-level section is a nav stop** — keep it that way; a section without an `id` is invisible to `SECTION_IDS`, the nav and the dot rail (that's why the old `Flow` section was folded into `About` as its "How I Work" sub-block). **Add a section by adding a component here**, plus an entry in both `NAV_LINKS` and `SECTION_IDS` in `app/lib/site.ts`.
- **Section headings go through `Components/SectionHeading.tsx`, which owns the gradient.** Pass `title` as a plain string plus `highlight` — the substring to paint with `text-gradient` — never a hand-written `<span className="text-gradient">`. Sections used to write their own, and `Work Experience` silently lost its accent word as a result. Top-level sections are `h2` and pass eyebrow + highlight + lead; the `#about` sub-blocks are `as="h3"` with a leading `Icon`.
- **Nav is hash-based with scroll-spy.** `NAV_LINKS` hrefs are root-relative (`/#work`, never `#work`) because the nav renders in the root layout and a bare hash would resolve against whatever route a visitor landed on via a redirect. `app/Components/useActiveSection.ts` is the shared spy (an `IntersectionObserver` over a mid-viewport band, plus a bottom-of-document guard so the short `#contact` can win); `DesktopNav`, `MobileMenu`, and `motion/SectionRail.tsx` (the fixed right-hand dot rail, home-only) all read from it. `usePathname` has no access to the hash — don't reach for it for active state. **Every in-page `/#section` link goes through `Components/HashLink.tsx`, not `next/link` directly** — the header nav, the mobile drawer, the footer nav, the dot rail and the two hero CTAs. A plain `<Link>`/`<a>` whose href already equals the current URL is a no-op, so once the hash was `#work` the "Work" link went dead: scrolling away by hand doesn't clear the hash, so the second click had nowhere to navigate and the browser never re-ran its scroll-to-fragment step. `HashLink` scrolls the target itself and writes the hash (`push` when it changes so Back still walks the sections, `replace` when it doesn't so a repeat click can't stack a dead entry), while letting modified clicks and any href whose target isn't on the page fall through to the router. `MobileMenu` links need their explicit `onClick={() => setOpen(false)}`: a hash-only change never updates `pathname`, so the drawer's route-change effect won't fire.
- **Content is data-in-code.** Shared content lives in `app/lib/`: `site.ts` (name, URL, email, nav links, social links, `SAME_AS` for schema) and `content.ts` (`EXPERIENCES`). Section-specific data (skills, project cards, capstone copy) is hardcoded in the section/component files under `app/Components/sections/`. **To change content, edit these files** — there is no data layer. Experience `bullets` (and `note`) support tiny inline markup parsed by `Components/emphasis.tsx`: `**term**` emphasizes a technology, `==metric==` renders a headline number in the brand gradient. `note` renders a closing line with an "Ask me" mailto link.
- **One experience carries a `showcase` block, and that is what makes it the headline.** `Work.tsx` pulls the entry with `showcase` out of the grid and renders it through `sections/AchievementShowcase.tsx` — a gradient-hairline panel whose `stats` count up via `Components/CountUp.tsx` and whose `pillars` summarise the role; the same entry's `bullets` still render underneath as secondary detail, so nothing is lost. **The figures in `stats` are real — never invent or round them up.** Downloads and the store rating are checkable against the public store listing; monthly active users is not, so it has to match what analytics actually says. A crash-free-sessions figure was deliberately dropped: at 98.83% it sat the wrong side of Google Play's 1.09% bad-behavior crash-rate threshold, so to an Android-literate reader it read as a liability rather than a credential — don't reinstate it. Monetization figures are deliberately qualitative: absolute revenue, MRR and conversion rate stay private.
- **Server vs client components:** pages are Server Components. Anything using `motion`, hooks, or `next-themes` is a Client Component (`"use client"`). Keep the boundary thin — wrap only the animated/interactive leaf, not the page.

## Theming (dark-first, Tailwind v4)

- **No `tailwind.config.ts`.** v4 is CSS-first: all config is in `app/globals.css` via `@theme` / `@theme inline` / `@custom-variant` / `@utility`. PostCSS uses `@tailwindcss/postcss` (`postcss.config.mjs`).
- **Semantic color tokens switch with the theme.** `--background`, `--surface`, `--foreground`, `--muted`, `--border`, `--card` are defined in `:root` (light) and `.dark` (dark) and bound to utilities via `@theme inline` → use `bg-background`, `text-foreground`, `text-muted`, `border-border`, etc. **Dark is the default.**
- **Fixed accent palette (cyan→blue→violet):** `accent-cyan #22D3EE`, `accent-blue #3B82F6`, `accent-violet #8B5CF6`. The brand gradient recurs everywhere — reuse the `text-gradient` and `glass` custom utilities and the `from-accent-cyan via-accent-blue to-accent-violet` gradient.
- **Dark mode = class strategy.** `next-themes` (`app/providers.tsx`, `attribute="class"`, `defaultTheme="dark"`) toggles `.dark` on `<html>` via a pre-paint script (so the SSR HTML has no `.dark` class — that's correct, not a bug). `<html>` has `suppressHydrationWarning`. Don't reintroduce a `darkMode` config or hand-rolled toggle.

## Motion

- Import from **`motion/react`** (never `framer-motion`). Reusable wrappers live in `app/Components/motion/`: `Reveal`/`RevealGroup`/`RevealItem` (scroll-into-view entrances — use these instead of CSS entrance classes), `AuroraBackground` (ambient gradient, mounted once in layout), `ScrollProgress`, `BackToTop`.
- **Motion is intentionally restrained** (professional, not flashy). Respect this. `prefers-reduced-motion` is honored two ways: `<MotionConfig reducedMotion="user">` in `providers.tsx` and a CSS media query in `globals.css`. **Neither covers a raw `animate()` driving text**, so `CountUp.tsx` checks `useReducedMotion()` itself — do the same for any future non-component animation.

## Images

- `next/image` with static imports from `public/images/...`. All images are local — `next.config.mjs` declares no `remotePatterns`, so any new remote host must be added there first. It sets `images.qualities: [75, 100]` (Next 16 defaults to `[75]` and would otherwise downgrade `quality={100}`). New remote hosts must be added to `remotePatterns`.

## SEO (treat as load-bearing)

- Per-route `metadata` exports with `alternates.canonical`; root template `'%s | Elijah Monjardin'` and `metadataBase` in `app/layout.tsx`. Do **not** add manual `<link rel="canonical">` or verification `<meta>` in `<head>` — use the `metadata` fields (duplicates were removed).
- File-convention metadata routes: `app/opengraph-image.tsx` (dynamic OG via `next/og`), `app/icon.tsx` + `app/apple-icon.tsx` (EM monogram), `app/manifest.ts`, `app/sitemap.ts`, `app/robots.ts`. **There is no `next-sitemap`** and no committed `public/sitemap*.xml`/`robots.txt` — those route files generate them; don't re-add static copies (they'd shadow the routes).
- **JSON-LD is one `@graph` per file, via `app/Components/JsonLd.tsx`.** `layout.tsx` holds `ProfilePage` + `Person` + `WebSite`; `sections/Projects.tsx` holds the `CreativeWork` (TricyCall) and `WebApplication` (NeoPal) entities. They cross-reference by the stable `PERSON_ID` / `WEBSITE_ID` exported from `lib/site.ts` — never redescribe the Person inline. There is no `BreadcrumbList`: one page, no hierarchy.
- **Schema fields are derived, not retyped.** `knowsAbout` maps over `TECH_STACK`; `worksFor` / `hasOccupation` come from whichever `EXPERIENCES` entry has `Present` in its `duration`; the project entities and the share card read `lib/projects.ts` and `EXPERIENCES` respectively. All of these previously drifted or would have. **When adding schema, derive it.**
- **Do not add `AggregateRating` for the 4.6 store rating.** Rating markup must describe the item the page is about; the app is unnamed and unlinkable here, so marking it up would be structured-data spam and a manual-action risk. The figure is fine as visible copy and inside the OG image, which carry no such constraint.
- **The TricyCall case study is reader content, not an SEO surface — this is deliberate.** It lives in a closed `<dialog>` (`display:none`, about a third of the page's text) and search engines discount hidden text. That is a known, accepted trade: it's there for visitors who are already on the site. Its `CreativeWork` entity simply describes the project; don't reintroduce a `/projects/capstone` route or restructure the modal to chase rankings for it.
- **Keep the retired-route redirects in `next.config.mjs`.** They are the only place the old paths still appear, and that's their job — a 308 lands old inbound links and still-indexed URLs on the live page and passes their equity to `/`. Deleting them as "cleanup" would turn those into 404s.
- `app/opengraph-image.tsx` runs under satori, whose built-in font has **no glyph for symbols like `★` (U+2605)** — they render as tofu. Stick to ASCII plus common Latin-1 punctuation there.

## Conventions / gotchas

- ESLint is **flat config** (`eslint.config.mjs`) composing `eslint-config-next/core-web-vitals`. ESLint is pinned to **9** (the Next 16 lint plugins don't yet support 10). The `react-hooks/set-state-in-effect` rule is intentionally disabled for idiomatic mounted-guard / library-init effects.
- Logo is an inline SVG monogram (`app/Components/logo.tsx`) stroked with the brand gradient. Mobile nav is `app/Components/MobileMenu.tsx` (accessible motion slide-over — replaced the old CSS-checkbox drawer).
