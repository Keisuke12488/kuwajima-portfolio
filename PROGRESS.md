# Progress

Single source of truth for project status and handoff.

Do not create or update separate log files such as `HANDOFF.md`, `WORKLOG-*.md`, `CLAUDE.md`, or tool-specific notes.
If another tool resumes work, it should read and update this file only.

Last updated: 2026-04-01

## Project

Next.js portfolio site for Kuwajima / welza.

Main objective:
- make the site usable as a sales portfolio for business AI consulting
- position AI work as the main offer
- keep SNS as proof of design and system-building ability

## Current State

Build:
- `npm run build` succeeded on 2026-04-01

Current modified files:
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/layout.tsx`
- `src/app/portfolio/page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

No commit has been created yet.

## Preview

Use the static export preview for phone checks:
- `http://192.168.0.59:4011/index.html`
- `http://192.168.0.59:4011/portfolio.html`
- `http://192.168.0.59:4011/about.html`
- `http://192.168.0.59:4011/contact.html`

Notes:
- phone preview through `3789` can load HTML without CSS/JS
- if the static server stops, restart with:
  - `python3 -m http.server 4011 --directory out`

## What Was Done

### Site-wide

- unified company wording to `welza`
- unified navigation labels to Japanese
- added a `相談する` CTA to the header
- shifted the contact page to AI-first consultation wording

### Home

File:
- `src/app/page.tsx`

Changes:
- changed copy from abstract AI language to concrete business-risk language
- emphasized leaving decision criteria and workflow inside the company
- reframed SNS as proof that repeatable winning patterns can be designed
- strengthened case study cards with a bold takeaway line before explanation

### About

File:
- `src/app/about/page.tsx`

Changes:
- rewrote the page to focus on where work stops, what remains only in someone's head, and how that becomes workflow
- added real fieldwork context:
  - visiting a welfare facility in Osaka
  - aligning direction together with people on site

### Portfolio

File:
- `src/app/portfolio/page.tsx`

This page received the largest rewrite.

Current structure:
1. Hero
2. Stats bar
3. AI / SNS tabs
4. AI case studies
5. Other AI work
6. Maker section
7. Process section
8. Final CTA

Important hero decisions:
- pain-first, not theory-first
- headline is intentionally:
  - `「あの人が抜けたら、終わる」`
  - `その不安、仕組みで消せます`
- removed the dash before `その不安`
- removed the final punctuation after `消せます`
- reduced headline size for better balance
- top section now flows as:
  - worries
  - one strong asset-building statement
  - CTA

Important content decisions:
- `Weluru` was removed from the AI work list
- `welza`, ad report automation, real estate AI, and tax OCR were rewritten in a more scannable sales tone
- AI case studies now use:
  - a bold key point in black
  - a short supporting explanation in lighter text

Important trust / warmth decisions:
- the Osaka welfare facility fieldwork story was restored
- copy intentionally keeps some human presence instead of over-sanitizing everything
- this matters because the user wants the portfolio to feel like a real operator did the work, not just a polished consultant deck

### SNS Positioning

- SNS remains in the site
- SNS is positioned as proof of design and repeatability, not as the main service offer

## Source Material Used

Portfolio restructure source:
- `/Users/kei/Downloads/AIポートフォリオ再設計.md`

Later user-directed refinements:
- split hero headline into 2 lines
- remove the dash and period
- reduce the hero headline size
- bring back the Osaka fieldwork story
- keep some human warmth and operator presence in the writing

## Messaging Rules

Use these rules for future edits:
- use less abstract wording
- start from pain, then show the value
- use black text for the key idea
- use lighter text for support
- explain in plain business language
- keep human fieldwork texture where it increases trust
- do not polish the writing so much that the "real person did this" feeling disappears

## Known Issues

- Next.js still warns about multiple lockfiles and workspace root inference
- this warning does not currently block builds
- building while `next dev` is running can sometimes produce temporary `.next` file errors
- if that happens, stop `dev` and rerun `npm run build`

## Next Recommended Steps

1. Review the portfolio on a real phone and make final spacing tweaks only
2. Decide whether to add a little more fieldwork / human context to the non-welfare case studies
3. Optionally clean up the Next.js lockfile / workspace-root warning
4. Create a commit once wording is approved

## Resume Instructions

If another tool resumes work:
1. Read this file first
2. Inspect these files:
   - `src/app/portfolio/page.tsx`
   - `src/app/page.tsx`
   - `src/app/about/page.tsx`
   - `src/app/contact/page.tsx`
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `src/app/layout.tsx`
3. Run `npm run build`
4. Use `4011` preview URLs for phone review
