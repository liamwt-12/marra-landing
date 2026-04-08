/**
 * Single source of truth for the blog. Add a new post to this list and the
 * index page + sitemap-eligible loop pick it up automatically. Components are
 * imported eagerly because there are only six posts; we can switch to
 * React.lazy if the list grows.
 */
import ReferralCandyShopPay from "./ReferralCandyShopPay";
import ShopifyReferralAppComparison from "./ShopifyReferralAppComparison";
import LaunchReferralProgramme from "./LaunchReferralProgramme";
import KlaviyoReferralMarketing from "./KlaviyoReferralMarketing";
import WordOfMouthMarketingShopify from "./WordOfMouthMarketingShopify";
import ReferralVsAffiliate from "./ReferralVsAffiliate";

export const posts = [
  {
    slug: "referralcandy-shop-pay",
    title: "Does ReferralCandy Work with Shop Pay? (The Honest Answer)",
    dek: "If you use Shop Pay — and most UK Shopify stores do — ReferralCandy is silently dropping a third of your referral discounts. Here's what's happening, and the fix.",
    date: "April 2026",
    dateISO: "2026-04-02",
    readTime: "4 min read",
    component: ReferralCandyShopPay,
  },
  {
    slug: "shopify-referral-app-comparison-2026",
    title: "Shopify Referral App Comparison 2026: marra vs ReferralCandy vs Rivo vs Social Snowball",
    dek: "Four referral apps, one comparison. Pricing, checkout compatibility, features, and an honest verdict on which to pick.",
    date: "April 2026",
    dateISO: "2026-04-04",
    readTime: "6 min read",
    component: ShopifyReferralAppComparison,
  },
  {
    slug: "launch-referral-programme-shopify",
    title: "How to Launch a Referral Programme on Shopify in 2026",
    dek: "A practical playbook: the offer, the launch sequence, the first 30 days, and the mistakes that kill new referral programmes.",
    date: "April 2026",
    dateISO: "2026-04-06",
    readTime: "7 min read",
    component: LaunchReferralProgramme,
  },
  {
    slug: "klaviyo-referral-marketing",
    title: "How to Use Klaviyo for Referral Marketing (The Complete Guide)",
    dek: "Klaviyo is the fastest place to launch a Shopify referral programme. Here's the campaign URL, the segmentation, the flows, and the measurement.",
    date: "April 2026",
    dateISO: "2026-04-07",
    readTime: "8 min read",
    component: KlaviyoReferralMarketing,
  },
  {
    slug: "word-of-mouth-marketing-shopify",
    title: "Word of Mouth Marketing for Shopify Stores: The 2026 Guide",
    dek: "Why word of mouth beats paid ads on every metric that matters — and how to actually capture it instead of hoping it happens.",
    date: "April 2026",
    dateISO: "2026-04-08",
    readTime: "6 min read",
    component: WordOfMouthMarketingShopify,
  },
  {
    slug: "referral-vs-affiliate",
    title: "Referral Programme vs Affiliate Programme: What's the Difference?",
    dek: "They sound similar. They aren't. Which one fits your DTC brand, and how to tell when you need both.",
    date: "April 2026",
    dateISO: "2026-04-08",
    readTime: "5 min read",
    component: ReferralVsAffiliate,
  },
];

export const getPostBySlug = (slug) => posts.find(p => p.slug === slug);
