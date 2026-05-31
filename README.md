# Punsatva Blog — Next.js Migration

A premium medical-grade blog migration of the WordPress article
[Disease Is Not the Enemy](https://punsatva.com/disease-is-not-the-enemy/)
rebuilt in Next.js 14 (App Router) + Tailwind CSS, matching the
[Punsatva reference design](https://punsatva-phimosis-and-paraphimosis.netlify.app/phimosis-and-paraphimosis).

## Tech Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4** with custom design tokens
- **next/font** — Playfair Display (serif) + Inter (sans), zero CLS
- **next/image** — automatic AVIF/WebP, lazy loading

## Design System

| Token       | Value     | Usage                  |
| ----------- | --------- | ---------------------- |
| Cream BG    | `#F9F8F3` | Page background        |
| Sand Fill   | `#F4F3ED` | Container surfaces     |
| Forest      | `#3D6234` | Brand primary, CTAs    |
| Forest Dark | `#2F4D28` | Hover states           |
| Line        | `#E5E3D8` | Hairline borders       |


## Project Structure

```
app/
  layout.tsx         # Root layout, fonts, metadata, Navbar
  page.tsx           # Article page with all 6 sections + SEO metadata
  globals.css        # Tailwind directives + font variables
components/
  Navbar.tsx         # Sticky navbar + mobile hamburger drawer
  LeftSidebar.tsx    # TOC + CTA + Immediate-Concern alert
  FaqAccordion.tsx   # Accessible useState accordion
```

## Responsive Breakpoints

- **Mobile (< 1024px):** single-column stacked
- **Desktop (≥ 1024px):** asymmetric 12-col grid (4 sidebar / 8 article)

## Notes

- Hero image expected at `/public/article-hero.jpg`. A placeholder SVG is included.
- All section anchors (`#section-1` … `#section-6`) are wired to the sidebar TOC.
- Accessibility: semantic HTML, `aria-*` attributes, focus rings, color contrast verified.
