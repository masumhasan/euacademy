# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

EUVisaAdvice Academy: a Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4 LMS / course-selling frontend, an extension of the main site `euvisaadvice.com`. **It is frontend-only today**: there is no API, database, auth, or payment integration. All data comes from typed mock files in `src/constants/mock/*` (typed by `src/types/*`). Do not add backend/API/DB work unless asked.

## Commands

```bash
npm run dev         # next dev
npm run build       # next build
npm run typecheck   # tsc --noEmit
npm run lint        # eslint (flat config, eslint.config.mjs)
```

There is no test runner. Verification is `typecheck` + `lint` + `build`. Path alias: `@/*` → `./src/*`.

On Windows, edit files with the Edit/Write tools, never with PowerShell `Get-Content`/`Set-Content` (it re-encodes UTF-8 and corrupts characters like `→`).

## Architecture

- **Three route groups under `src/app/`**, each with its own layout/shell: `(academy)` public catalog, course sales page, `/my-learning`, `/payment/success`; `(learn)` lesson player and course overview (`/learn/[slug]`, `/learn/[slug]/[lessonId]`); `(studio)` admin (`/studio/...`: dashboard, courses, curriculum builder, upload, students, settings). Pages stay thin and compose feature components.
- **`src/components/<feature>/`** holds feature components (books, course-detail, courses, dashboard, layout, learn, lesson, payment, quiz, studio, video); `components/ui` holds primitives (Button, Icon, HighlightedText); shells live in `components/layout` (`AcademyShell`, `LearnShell`).
- **All URLs go through `src/constants/routes.ts` (`ROUTES`)**; links to pages that live on the main site go through `MAIN_SITE_LINKS` (base URL from `NEXT_PUBLIC_MAIN_SITE_URL`, default `https://euvisaadvice.com`). Don't hard-code paths.
- **Mock data → types → components**: add or change fields in `src/types/*` and the matching `src/constants/mock/*` file together. Pure helpers (e.g. `lib/lessons.ts` for next-lesson navigation) take typed data, not fetched data.
- **Design tokens** are generated from `.stitch/theme.json` into `src/styles/theme.css` (`@theme` block) by `node .stitch/gen-theme.mjs`; `src/styles/globals.css` imports it. Change tokens in the generator input, not by hand-editing `theme.css`. Icons are Material Symbols (loaded in the root layout); fonts are Plus Jakarta Sans + JetBrains Mono via `next/font`.
- **`.stitch/`** is gitignored local material: exported HTML + screenshots of every Google Stitch screen (the visual source of truth) plus the scripts that condense them / generate theme. Stitch project: `projects/14608643000741593592` ("Legal Course Platform UI"). Use the Stitch MCP (`list_screens`, `get_screen`; configured in the gitignored `.cursor/mcp.json`) and match screens pixel-for-pixel; flag missing assets instead of guessing.
- `next.config.ts` sets `experimental.agentUpgrade: "security"` and allows `lh3.googleusercontent.com` images.

## Conventions (from `.cursor/rules/frontend.mdc`, always applied)

- No `any`; no `@ts-ignore` without a why-comment. Server Components by default; `"use client"` only on the smallest leaf that needs state/effects/browser APIs.
- Components/types `PascalCase`, component files `PascalCase.tsx`, hooks `useThing`, constants `UPPER_SNAKE_CASE`, non-component files and route folders `kebab-case`.
- Components must not fetch data or hold business logic (hooks / server code do). One component per file, each file under 300 lines.
- Search `src/components` before creating a component; fix shared components in place, never fork per page (prefer a `variant`/`size` prop). When a shared component changes, check all its usages.
- Styling: token classes (`bg-surface-level-2`, `text-text-secondary`), never raw hex; no inline `style` except truly dynamic values; no `!important`; merge classes with `cn()` from `lib/cn.ts`.
- Use `next/image`, `next/link`, `next/font`. Handle loading/empty/error states for data-driven views.
- No new dependencies without a clear need; say so when you add one.

The rules file is partly stale: it says the repo has no app code and suggests `(marketing)`/`(student)` groups and a `services/` folder. The real groups are `(academy)`/`(learn)`/`(studio)` and mock data lives in `constants/mock`.

## Sibling repos (separate git repos in the parent folder)

`../euvisaadvice` (Next.js 16 main site, PM2 on EC2, port 3000) talks to `../mathias_b` (Express + MongoDB + OpenAI + Stripe + IMAP, PM2 on EC2, port 5000) via `NEXT_PUBLIC_BACKEND_URL`. `../euacademy-upgrade-worktree` is a git worktree of this repo on branch `upgrade-next-16-4-3`. Planned (not started): Supabase schema/RLS, Payoneer checkout + webhook fulfillment, S3 + CloudFront signed URLs for video/PDF delivery, shared session with the main site.

## Gotchas

- `eidas.cnf`, `eidas.crt`, `eidas.key` in the repo root are **tracked by git** (certificate material). Don't read, print, or copy them, and don't add more key material.
- If `npm run dev` says `'next' is not recognized`, run `npm install` (`node_modules` missing).
