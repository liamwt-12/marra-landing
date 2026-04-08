import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CompareTable from "../components/CompareTable";
import ReasonGrid from "../components/ReasonGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

const rows = [
  { feature: "Pricing", marra: "£39/month flat", them: "From $49/month, scales with orders" },
  { feature: "Commission", marra: "None", them: "Charges scale with revenue" },
  { feature: "Works with Shop Pay", marra: true, them: "Partial" },
  { feature: "Apple Wallet pass", marra: true, them: false },
  { feature: "Auto-enrol customers", marra: true, them: "Manual opt-in required" },
  { feature: "Klaviyo campaign URL", marra: true, them: "Basic integration only" },
  { feature: "Setup time", marra: "< 10 minutes", them: "Complex" },
];

const reasons = [
  {
    title: "Rivo pricing scales with your success.",
    body: "As your store grows, your Rivo bill grows. marra is flat. The better marra works for you, the better the ROI — and the gap widens every month.",
  },
  {
    title: "Rivo requires customers to opt in.",
    body: "Customers have to register before they can refer. That's a leak — most never bother. marra auto-enrols every buyer the moment the order clears. No missed referrers, no opt-in friction.",
  },
  {
    title: "Rivo's loyalty features are broad but shallow.",
    body: "Rivo tries to do loyalty, rewards, VIP tiers, and referrals. marra is purpose-built for one thing: turning customers into referrers. Every feature exists to drive word-of-mouth.",
  },
];

const faqItems = [
  {
    q: "Is Rivo good for referrals?",
    a: "Rivo is primarily a loyalty and rewards platform that includes referrals as one feature among many. If referrals are your primary goal, a dedicated referral app like marra will outperform a general loyalty platform.",
  },
  {
    q: "How does Rivo pricing compare to marra?",
    a: "Rivo's pricing scales with your store's order volume. At higher volumes, costs increase significantly. marra is £39/month regardless of how many referrals or orders you generate.",
  },
  {
    q: "Can I run referrals without a full loyalty programme?",
    a: "Yes — that's exactly what marra is for. You don't need points, tiers, or VIP statuses to run a successful referral programme. marra strips referrals back to one simple loop: customer buys, customer refers, friend buys, both get rewarded.",
  },
];

export default function VsRivo() {
  return (
    <PageShell
      title="Rivo Alternative — marra | Flat £39/month, Built for Referrals"
      description="Looking for a Rivo alternative built for referrals, not loyalty? marra is a dedicated Shopify referral app — flat £39/month, auto-enrol, no opt-in friction."
      canonical="https://getmarra.com/vs/rivo"
    >
      <PageHero
        eyebrow="Rivo alternative"
        title="The Rivo alternative with no hidden costs"
        subtitle="Rivo bundles loyalty, rewards and referrals — and bills you more as you grow. marra does one thing properly, for a flat fee."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · 47 merchants on the waitlist</p>
      </PageHero>

      <section style={{ padding: "30px 28px 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <CompareTable competitor="Rivo" rows={rows} />
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 18 }}>
            Pricing reflects Rivo's published plans as of 2026. Higher tiers unlock more orders per month.
          </p>
        </div>
      </section>

      <ReasonGrid
        eyebrow="Why merchants switch"
        title="Three reasons merchants leave Rivo for marra"
        reasons={reasons}
      />

      {/* Loyalty vs referral block */}
      <section style={{ padding: "20px 28px 90px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "var(--stone)", border: "1px solid var(--line)", borderRadius: 18, padding: "44px 40px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              Loyalty vs referral
            </p>
            <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: 22, lineHeight: 1.25 }}>
              Two different jobs<span style={{ color: "var(--coral)" }}>.</span>
            </h3>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
              <strong style={{ color: "var(--ink)" }}>Loyalty programmes</strong> reward your existing customers for buying again. Points, VIP tiers, birthday discounts.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--ink)" }}>Referral programmes</strong> turn your existing customers into a new acquisition channel. Their friends become your customers.
            </p>
            <p style={{ fontSize: 14, color: "var(--muted-2)", lineHeight: 1.65, marginTop: 22 }}>
              Both are valuable. They're not the same job. If you're trying to grow new customer acquisition through word-of-mouth, you want a dedicated referral tool — not a loyalty bundle.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="Rivo vs marra — common questions"
        items={faqItems}
      />

      <CTASection
        title="Ready for a referral app that's just a referral app"
        subtitle="No points. No tiers. No commission. £39/month flat. Currently invitation only."
      />
    </PageShell>
  );
}
