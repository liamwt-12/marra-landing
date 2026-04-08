import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CompareTable from "../components/CompareTable";
import ReasonGrid from "../components/ReasonGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const rows = [
  { feature: "Pricing", marra: "£39/month flat", them: "From £59/month + commission" },
  { feature: "Commission on referral revenue", marra: "None", them: "Yes — up to 5%" },
  { feature: "Works with Shop Pay", marra: true, them: false },
  { feature: "Works with Apple Pay", marra: true, them: false },
  { feature: "Works with Buy it Now", marra: true, them: false },
  { feature: "Apple Wallet pass", marra: true, them: false },
  { feature: "Klaviyo campaign URL", marra: true, them: false },
  { feature: "Auto-enrol customers", marra: true, them: false },
  { feature: "Magic link portal (no login)", marra: true, them: false },
  { feature: "Setup time", marra: "< 10 minutes", them: "1–2 hours" },
];

const reasons = [
  {
    title: "Commission fees add up fast.",
    body: "At £100,000 in referral revenue, ReferralCandy takes around £5,000. marra takes £468 a year. The bigger your referral channel grows, the bigger the gap.",
  },
  {
    title: "ReferralCandy breaks on accelerated checkouts.",
    body: "Shop Pay, Apple Pay and Buy it Now bypass the standard cart that ReferralCandy injects discounts into. marra uses Shopify's native Discount Function — it works on every checkout type.",
  },
  {
    title: "Setup takes minutes, not days.",
    body: "marra auto-enrols every customer the moment they purchase. No opt-in forms, no per-referrer manual setup, no waiting on customers to register before they can refer.",
  },
];

const faqItems = [
  {
    q: "Does ReferralCandy work with Shop Pay?",
    a: "No. ReferralCandy's discount injection doesn't work with accelerated checkouts like Shop Pay, Apple Pay, or Buy it Now. These checkout types bypass the standard cart flow that ReferralCandy relies on. marra applies discounts via Shopify's native Discount Function which runs server-side — it works on every checkout type.",
  },
  {
    q: "How much does ReferralCandy cost vs marra?",
    a: "ReferralCandy starts at $59/month plus a commission on referral revenue (typically 3–5%). marra is £39/month with zero commission. For a store generating £50,000/month in referral revenue, ReferralCandy costs £59 + £2,500 in commission. marra costs £39.",
  },
  {
    q: "Can I switch from ReferralCandy to marra?",
    a: "Yes. marra installs in minutes and auto-enrols your existing customers as referrers through your next Klaviyo campaign. There's no manual migration needed.",
  },
];

export default function VsReferralCandy() {
  return (
    <PageShell
      title="ReferralCandy Alternative — marra | Flat £39/month, No Commission"
      description="Looking for a ReferralCandy alternative? marra is the modern Shopify referral app — flat £39/month, no commission, works on Shop Pay, Apple Pay and Buy it Now."
      canonical="https://getmarra.com/vs/referralcandy"
    >
      <PageHero
        eyebrow="ReferralCandy alternative"
        title="The ReferralCandy alternative built for modern Shopify"
        subtitle="ReferralCandy charges commission on every referral sale. marra doesn't. Flat £39/month, however much you generate."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · 47 merchants on the waitlist</p>
      </PageHero>

      {/* Compare table */}
      <section style={{ padding: "30px 28px 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <CompareTable competitor="ReferralCandy" rows={rows} />
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 18 }}>
            Pricing reflects ReferralCandy's published plans as of 2026. Commission rates vary by plan tier.
          </p>
        </div>
      </section>

      <ReasonGrid
        eyebrow="Why merchants switch"
        title="Three reasons merchants leave ReferralCandy for marra"
        reasons={reasons}
      />

      {/* Cost comparison block */}
      <section style={{ padding: "20px 28px 90px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "var(--ink)", borderRadius: 18, padding: "44px 40px", color: "#fff" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              The maths
            </p>
            <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", color: "#fff", letterSpacing: "-0.03em", marginBottom: 28, lineHeight: 1.2 }}>
              At £100,000 in annual referral revenue<span style={{ color: "var(--coral)" }}>:</span>
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="case-stats">
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "22px 24px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>ReferralCandy</p>
                <p style={{ fontSize: 36, fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 4 }}>£5,708</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>£708 in fees + £5,000 commission (5%)</p>
              </div>
              <div style={{ background: "rgba(255,92,71,0.12)", border: "1px solid rgba(255,92,71,0.28)", borderRadius: 12, padding: "22px 24px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>marra</p>
                <p style={{ fontSize: 36, fontWeight: 900, color: "var(--coral)", letterSpacing: "-0.03em", marginBottom: 4 }}>£468</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>£39/month flat. Forever.</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 24, lineHeight: 1.6 }}>
              That's <strong style={{ color: "#fff" }}>£5,240 a year</strong> back in your pocket — and the gap grows every time a customer refers a friend.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="ReferralCandy vs marra — common questions"
        items={faqItems}
      />

      <CTASection
        title="Ready to leave ReferralCandy behind"
        subtitle="Flat £39/month. No commission. Works on every checkout type Shopify supports. Currently invitation only."
      />
    </PageShell>
  );
}
