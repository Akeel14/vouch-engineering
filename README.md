# Vouch Engineering

Public architecture documentation, Architecture Decision Records (`ADRs`), UI design decisions, and standalone system benchmarks for **Vouch**.

- **Live Documentation Site (`$0` Cloudflare Pages):** https://vouch-engineering.pages.dev
- **Stack:** Next.js static export (`output: 'export'`), Fumadocs (`Orama` static search), Node.js 24 LTS, `pnpm`, and Biome.

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Static Build & Deployment

```bash
pnpm build
pnpm deploy
```
