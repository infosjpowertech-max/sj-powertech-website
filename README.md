# SJ Powertech Pvt. Ltd. website

Static Astro 5 website using Tailwind CSS and GSAP motion, ready for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

Connect the repository in Cloudflare Pages and use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20+

`wrangler.toml`, `robots.txt`, and sitemap generation are included. Before launch, update the `site` value in `astro.config.mjs`, company contact details, image assets, and the contact form action.
