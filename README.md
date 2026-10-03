# Jhon Quiceno — Portfolio

Personal portfolio for Jhon Quiceno, a full-stack software engineer. A dark,
glassmorphism "engineering terminal" themed site with four routes — Home,
Projects, Stack, and Contact — built as a static Next.js app with one small
server-side fetch for a real GitHub contribution heatmap.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, ESLint)
- Tailwind CSS v3 (classic `tailwind.config.ts`)
- [Framer Motion](https://www.framer.com/motion/) for animation/transitions
- [lucide-react](https://lucide.dev) for icons
- `next/font/google` for Inter and JetBrains Mono

No CMS, no database, no backend framework — just static content plus one
GitHub GraphQL fetch for the contribution heatmap widget.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
```

## GitHub contribution heatmap (optional)

The home page's `CONTRIBUTION_MAP` widget shows real GitHub contribution
data for `Jhon-Quiceno`, fetched server-side via the GitHub GraphQL API.
GitHub's GraphQL API requires an authenticated request even for public
data, so this needs a token:

1. Create a classic PAT with **no special scopes** (or a fine-grained
   token with public read access) at
   https://github.com/settings/tokens.
2. Locally: copy `.env.local.example` to `.env.local` and set
   `GITHUB_TOKEN=<your token>`.
3. On a deployment platform (e.g. Vercel): add `GITHUB_TOKEN` as an
   environment variable in the project settings.

If `GITHUB_TOKEN` is missing or the API call fails, the widget falls back
to a deterministic placeholder grid — it never crashes or renders empty.

The token is only ever read from `process.env.GITHUB_TOKEN` on the server
and is never bundled into client code.
