/**
 * Single source of truth for per-route SEO metadata.
 *
 * Used in two places:
 *  - PageShell.jsx looks routes up by `path` so client-side navigation
 *    keeps document.title / <meta name="description"> / <link rel="canonical">
 *    in sync.
 *  - scripts/postbuild.mjs imports the same object after `vite build` and
 *    writes a static dist/<route>/index.html for every entry, so social
 *    previews and crawlers see the right tags before any JS runs.
 *
 * To add a new route: register it here, point a <PageShell path="/..."> at
 * it, and the next build will pre-render the head for it automatically.
 */
export const SITE_URL = "https://getmarra.com";

export const ROUTES = {
  "/": {
    title: "marra. Quiet referrals for Shopify stores",
    description: "Give £5, get £5. marra adds a referral programme to your Shopify store, in your store's name. $49 a month, 14-day free trial.",
    canonical: `${SITE_URL}/`,
  },
};

/** Convenience: paths that the postbuild script should pre-render. Skips '/' because dist/index.html already exists. */
export const PRERENDER_PATHS = Object.keys(ROUTES).filter(p => p !== "/");
