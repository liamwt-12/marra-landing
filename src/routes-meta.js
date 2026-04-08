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
    title: "marra — Referral Programme for Shopify | Flat £39/month",
    description: "Turn every customer into a referrer. Auto-enrol, reward instantly, works on Shop Pay, Apple Pay and Buy it Now. Flat £39/month, no commission.",
    canonical: `${SITE_URL}/`,
  },

  // Comparison pages
  "/vs/referralcandy": {
    title: "ReferralCandy Alternative — marra | Flat £39/month, No Commission",
    description: "Looking for a ReferralCandy alternative? marra is the modern Shopify referral app — flat £39/month, no commission, works on Shop Pay, Apple Pay and Buy it Now.",
    canonical: `${SITE_URL}/vs/referralcandy`,
  },
  "/vs/rivo": {
    title: "Rivo Alternative — marra | Flat £39/month, Built for Referrals",
    description: "Looking for a Rivo alternative built for referrals, not loyalty? marra is a dedicated Shopify referral app — flat £39/month, auto-enrol, no opt-in friction.",
    canonical: `${SITE_URL}/vs/rivo`,
  },
  "/vs/social-snowball": {
    title: "Social Snowball Alternative — marra | Flat Fee, No Commission",
    description: "A Social Snowball alternative for UK Shopify brands. marra is flat £39/month — no commission on referral revenue, with Apple Wallet passes and Klaviyo sync.",
    canonical: `${SITE_URL}/vs/social-snowball`,
  },

  // Topical landing pages
  "/shopify-plus-referral": {
    title: "Shopify Plus Referral Programme — marra | Native, Flat-Fee",
    description: "The referral app built for Shopify Plus. Checkout Extensibility, Discount Functions, Theme App Extensions. Native, not bolted on. Flat £39/month, no commission.",
    canonical: `${SITE_URL}/shopify-plus-referral`,
  },
  "/klaviyo-referral-integration": {
    title: "Klaviyo Referral Programme Integration — marra",
    description: "Connect your Klaviyo list to a referral programme in minutes. One personalised campaign URL, auto-enrolment on click, two-way profile sync. Built for UK Shopify brands.",
    canonical: `${SITE_URL}/klaviyo-referral-integration`,
  },
  "/apple-wallet-referral": {
    title: "Apple Wallet Referral Programme — marra",
    description: "The only Shopify referral app with Apple Wallet passes. Every referrer gets a personal pass that updates in real time when rewards land. Built on iOS Wallet.",
    canonical: `${SITE_URL}/apple-wallet-referral`,
  },

  // Blog
  "/blog": {
    title: "The marra journal — Referral marketing for Shopify brands",
    description: "Posts on referrals, retention, and running a Shopify brand. Practical guides on Shop Pay, Klaviyo, word of mouth, and growing a referral programme that actually works.",
    canonical: `${SITE_URL}/blog`,
  },
  "/blog/referralcandy-shop-pay": {
    title: "Does ReferralCandy Work with Shop Pay? (The Honest Answer) | marra",
    description: "If you use Shop Pay — and most UK Shopify stores do — ReferralCandy is silently dropping a third of your referral discounts. Here's what's happening, and the fix.",
    canonical: `${SITE_URL}/blog/referralcandy-shop-pay`,
  },
  "/blog/shopify-referral-app-comparison-2026": {
    title: "Shopify Referral App Comparison 2026: marra vs ReferralCandy vs Rivo vs Social Snowball | marra",
    description: "Four referral apps, one comparison. Pricing, checkout compatibility, features, and an honest verdict on which to pick.",
    canonical: `${SITE_URL}/blog/shopify-referral-app-comparison-2026`,
  },
  "/blog/launch-referral-programme-shopify": {
    title: "How to Launch a Referral Programme on Shopify in 2026 | marra",
    description: "A practical playbook: the offer, the launch sequence, the first 30 days, and the mistakes that kill new referral programmes.",
    canonical: `${SITE_URL}/blog/launch-referral-programme-shopify`,
  },
  "/blog/klaviyo-referral-marketing": {
    title: "How to Use Klaviyo for Referral Marketing (The Complete Guide) | marra",
    description: "Klaviyo is the fastest place to launch a Shopify referral programme. Here's the campaign URL, the segmentation, the flows, and the measurement.",
    canonical: `${SITE_URL}/blog/klaviyo-referral-marketing`,
  },
  "/blog/word-of-mouth-marketing-shopify": {
    title: "Word of Mouth Marketing for Shopify Stores: The 2026 Guide | marra",
    description: "Why word of mouth beats paid ads on every metric that matters — and how to actually capture it instead of hoping it happens.",
    canonical: `${SITE_URL}/blog/word-of-mouth-marketing-shopify`,
  },
  "/blog/referral-vs-affiliate": {
    title: "Referral Programme vs Affiliate Programme: What's the Difference? | marra",
    description: "They sound similar. They aren't. Which one fits your DTC brand, and how to tell when you need both.",
    canonical: `${SITE_URL}/blog/referral-vs-affiliate`,
  },

  // Case study
  "/case-studies/twenty-first-century-herbs": {
    title: "Case Study: Twenty First Century Herbs — marra",
    description: "How Twenty First Century Herbs used marra to turn their existing customer base into a structured referral channel in 30 days.",
    canonical: `${SITE_URL}/case-studies/twenty-first-century-herbs`,
  },
};

/** Convenience: paths that the postbuild script should pre-render. Skips '/' because dist/index.html already exists. */
export const PRERENDER_PATHS = Object.keys(ROUTES).filter(p => p !== "/");
