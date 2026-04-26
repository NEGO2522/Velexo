# Veloxo — Business Automation Website

A full B2B marketing website for Veloxo, a business automation company targeting Indian SMBs.

## Tech Stack
- React 19 + Vite 8
- Plain CSS (no Tailwind) with CSS variables for dark/light theming
- Fonts: Orbitron, Sora, DM Sans (Google Fonts)

## Sections
1. Navbar — sticky, scroll-aware, theme toggle, mobile drawer
2. Hero — CRM dashboard visual + floating notifications
3. Services — 6 service cards
4. Why Us — stats + feature cards
5. Process — 4-step flow
6. Demo Showcase — tabbed CRM / WhatsApp / Invoice demos
7. Results — metrics with dashboard mockup
8. Testimonials — client cards
9. Contact — interactive booking calendar (3-step flow)
10. Footer — links, social, legal

## Setup & Run
```bash
cd Business
npm install
npm run dev
```

## Build for Production
```bash
npm run build
# Output goes to /dist — upload this folder to your host
```

## Deployment Options
- **Vercel** (recommended): `vercel --prod`
- **Netlify**: drag-drop the `/dist` folder
- **cPanel hosting**: upload `/dist` contents to `public_html`

## Replace Before Launch
- [ ] `hello@veloxo.in` — your real email
- [ ] `+91 98765 43210` — your real phone
- [ ] Social links in Footer.jsx
- [ ] `https://veloxo.in` in index.html, sitemap.xml — your real domain
- [ ] `/public/og-image.png` — 1200×630px screenshot for social sharing

## Environment Variables
No env vars needed for the static site.
For future backend integration (contact form, booking backend), create `.env`:
```
VITE_API_URL=https://your-api.com
```
