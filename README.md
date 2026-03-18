# CortexIntel — AI Automation & Academy Website

Multi-page React website for CortexIntel, built with Vite + React Router.

## Pages
- `/` — Home (hero, services preview, testimonials, CTA)
- `/services` — Services (4 detailed service cards)
- `/projects` — Case Studies (5 projects with before/after)
- `/academy` — AI Academy (3 tracks, curriculum, pricing)
- `/tools` — Tools & Tech (categorised AI tool stack)
- `/about` — About (vision, mission, story, values)
- `/blog` — Blog / Insights (6 article cards)
- `/faq` — FAQ (categorised with expand/collapse)
- `/contact` — Contact (form + office locations)

## Tech Stack
- React 19, React Router 7, Vite 8
- Lucide React icons
- Satoshi + Instrument Serif typography
- Dark mode, glassmorphism, scroll-reveal animations

## Deploy to Vercel

### Option 1: Claude Code
```bash
cd cortexintel-website
npm install
claude
# Then: "Deploy this to Vercel production"
```

### Option 2: Vercel CLI
```bash
cd cortexintel-website
npm install
npx vercel --prod
```

### Option 3: GitHub → Vercel
1. Push to GitHub
2. Import in vercel.com
3. Framework: Vite, Output: dist

## Domain Setup (Cloudflare)
Add CNAME records pointing to `cname.vercel-dns.com` (DNS only / grey cloud)

## Company
CortexIntel — a trading name of Infosec Solution Limited, UK
- London: Kemp House, 152-160 City Road, EC1V 2NX
- India: Globesta, Vyttila, Kochi, Kerala 682019
