Next.js multi-page marketing site (Tailwind CDN)
-----------------------------------------------

This starter is a lightweight Next.js project using the pages/ router.
Tailwind is included via CDN link so the site is ready to run without extra PostCSS setup.

How to run locally:
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open http://localhost:3000

Notes:
- Contact form on /contact uses Formspree placeholder. Replace the form `action` with your Formspree endpoint.
- This project uses Tailwind via CDN (good for quick prototypes). For production-grade Tailwind, install Tailwind as a dependency and set up postcss.config.js & tailwind.config.js.