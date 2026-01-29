# Agents Guide

## Project overview
Sean's Place is a retro BBS-themed personal site built with Astro 4 and a Markdown-based blog. The design leans on a DOS-era palette, ASCII art, and a terminal-like vibe.

## Tech stack
- Astro (ESM project)
- TypeScript
- Content Collections for blog posts

## Key paths
- `src/pages/`: Route-level pages (`index.astro`, `blog/[slug].astro`).
- `src/layouts/`: Page layout(s) (`BaseLayout.astro`).
- `src/components/`: Shared UI components (`Header.astro`, `Footer.astro`).
- `src/content/blog/`: Markdown posts with frontmatter.
- `src/content/config.ts`: Content Collections schema.
- `src/styles/global.css`: Global styles and palette.
- `public/`: Static assets (favicon, etc.).

## Local dev commands
- `npm install`
- `npm run dev` (http://localhost:4321)
- `npm run build`
- `npm run preview`

## Conventions
- Preserve the retro BBS aesthetic (DOS palette, ASCII flourishes, high-contrast typography).
- Prefer Astro components and layouts over duplicating markup in pages.
- Keep styles in `src/styles/global.css` unless component-scoped styles are required.
- Blog content lives in `src/content/blog/` and should include clear frontmatter (title, date, description/tags if used).
- Avoid introducing new dependencies unless necessary; keep the site lightweight.

## When making changes
- If adding UI, reuse existing components or extend them first.
- Keep markup semantic and accessible (headings, nav, lists).
- If altering layout, update `BaseLayout.astro` and verify the header/footer still render correctly.
- For new pages, follow the existing structure in `src/pages/`.
