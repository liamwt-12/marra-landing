import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CompareTable from "../components/CompareTable";
import ReasonGrid from "../components/ReasonGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

const rows = [
  { feature: "Pricing", marra: "£39/month flat", them: "Commission-based" },
  { feature: "Commission on referral revenue", marra: "None", them: "Yes" },
  { feature: "Apple Wallet pass", marra: true, them: false },
  { feature: "Auto-enrol customers", marra: true, them: true },
  { feature: "UK-focused", marra: true, them: "US-focused" },
  { feature: "Klaviyo campaign URL", marra: true, them: "Basic" },
];

const reasons = [
  {
    title: "Social Snowball takes a percentage forever.",
    body: "Every referral sale Social Snowball touches, they take a cut of. marra's flat fee means your costs never grow as referrals scale — the better the channel works, the better your margin.",
  },
  {
    title: "marra is built for UK merchants.",
    body: "Social Snowball is built primarily for the US market. marra was built by a UK Shopify merchant: GBP pricing, UK store credit conventions, UK-focused support, and copy that doesn't sound translated.",
  },
  {
    title: "Apple Wallet keeps referrers in the loop.",
    body: "marra's Apple Wallet pass gives every customer a physical reminder of their referral link — updated in real time when rewards land. Social Snowball has no Apple Wallet equivalent.",
  },
];

const faqItems = [
  {
    q: "Is Social Snowball UK-friendly?",
    a: "Social Snowball is built primarily for the US market. It works in the UK but uses USD-first pricing and US-style payout flows. marra is built UK-first — GBP, UK VAT, UK store credit conventions and UK customer support.",
  },
  {
    q: "How does the commission model compare?",
    a: "Social Snowball charges a percentage on every referral sale, indefinitely. marra is £39/month flat — no commission, no percentage, no rev share. At any meaningful volume, the flat model is dramatically cheaper and your unit economics stay predictable.",
  },
  {
    q: "Can I run referrals and an affiliate programme separately?",
    a: "Yes — and you should. Social Snowball blurs the line between referrals and affiliates. marra is a pure customer referral programme. If you also want a separate creator affiliate programme, run them side by side rather than mixing the audiences.",
  },
];

export default function VsSocialSnowball() {
  return (
    <PageShell path="/vs/social-snowball">
      <PageHero
        eyebrow="Social Snowball alternative"
        title="All the referral power. None of the commission"
        subtitle="Social Snowball takes a cut of every referral sale. marra is a flat £39/month — no matter how many friends your customers send."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · 47 merchants on the waitlist</p>
      </PageHero>

      <section style={{ padding: "30px 28px 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <CompareTable competitor="Social Snowball" rows={rows} />
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 18 }}>
            Pricing reflects Social Snowball's published commission tiers as of 2026.
          </p>
        </div>
      </section>

      <ReasonGrid
        eyebrow="Why merchants switch"
        title="Three reasons UK merchants pick marra over Social Snowball"
        reasons={reasons}
      />

      <FAQ
        title="Social Snowball vs marra — common questions"
        items={faqItems}
      />

      <CTASection
        title="Ready for flat-fee referrals"
        subtitle="£39/month. No commission. Built UK-first. Currently invitation only."
      />
    </PageShell>
  );
}
