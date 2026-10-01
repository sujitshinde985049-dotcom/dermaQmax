# DermaQ Max

Premium, responsive D2C skincare and scalp-care storefront for the Indian market. Built with Next.js App Router, TypeScript, React, Tailwind CSS, Lucide icons and `next/image`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production verification:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

- `src/app` — pages, metadata, sitemap, robots and route states
- `src/components` — reusable commerce and layout components
- `src/data/products.ts` — single source of truth for all product content
- `src/config/site.ts` — support details, shipping, coupons, claim flags and BOGO configuration
- `public/images/products` — product image folders and neutral placeholders

## Products, prices and images

Edit `src/data/products.ts` to add products or change descriptions, prices, stock, claims and SEO content. Keep claims disabled unless supporting documentation exists.

Replace each `placeholder.svg` in `public/images/products/<product-folder>/` with approved product photography, then update only the matching `images` entry in `src/data/products.ts`. Images are never scattered across page components.

## Offers and BOGO

Coupons and BOGO rules live in `src/config/site.ts`. `DERMAQ10` is the active 10% demo coupon. The sunscreen BOGO rule charges for one unit in each pair; cart contents still correctly show two physical units.

## Environment

Copy `.env.example` to `.env.local` and provide only verified values. Never commit `.env.local` or real secrets. WhatsApp and social links stay hidden until configured.

## Payments, authentication and orders

Checkout is an explicitly marked local demo and never processes payment. For Razorpay, implement a server-side order endpoint, store credentials only server-side, load the public key from `NEXT_PUBLIC_RAZORPAY_KEY_ID`, verify payment signatures on the server and create orders only after verification. Account pages are UI scaffolding until a secure auth provider and database are connected.

## Analytics

The environment template includes Google Analytics, Meta Pixel and Google Ads IDs. Add consent-aware loading components only after final IDs and the production privacy policy are approved.

## Deployment

Set environment variables in the chosen platform, run `npm run build`, and deploy the Next.js application. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin so sitemap, robots and structured data use the correct URL.

## Launch checklist

- Replace placeholder packshots with approved DermaQ Max images.
- Verify all SPF, PA, broad-spectrum, dermatological and free-from claims.
- Add legal entity, customer care, business address, fulfilment and policy details.
- Connect payment, order, inventory, review, newsletter and authentication backends.
- Configure analytics only with appropriate consent and policy disclosure.
