
# CC Club – Compliant Next.js Storefront (Dark/Yellow)

This template is **only** for lawful products (e.g., memberships, templates, courses, consulting). It **must not** be used for selling payment cards, financial instruments, or anything illegal.

## Stack
- Next.js (App Router, JavaScript)
- TailwindCSS
- Framer Motion

## Quick Start
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Notes
- Replace images in `/public/images/*` with your branded assets.
- Wire a compliant payment flow (Stripe Checkout or Coinbase Commerce). See `app/page.jsx` -> `handleCheckout`.
