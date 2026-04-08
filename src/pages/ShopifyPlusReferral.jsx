import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Icon } from "../components/Icon";

const plusFeatures = [
  {
    title: "Checkout Extensibility",
    body: "Access to Shopify's checkout UI extensions means the referral confirmation banner shows inside checkout — not just on the storefront. Customers see they're using a friend's link before they pay.",
  },
  {
    title: "Discount Functions",
    body: "Shopify Plus discount functions are server-side WebAssembly that runs inside Shopify's infrastructure in under 5ms. Works on accelerated checkouts at any volume — Shop Pay, Apple Pay, Buy it Now.",
  },
  {
    title: "Theme App Extensions",
    body: "marra installs as a Theme App Extension. Your theme stays clean — no code injection, no liquid edits, no performance hit. Toggle on or off from the customizer.",
  },
];

const marraAdditions = [
  { icon: "bolt", title: "Auto-enrol every customer", body: "The moment an order clears, the customer becomes a referrer. No opt-in form, no confirmation email, no leak." },
  { icon: "smartphone", title: "Checkout UI extension", body: "Referral confirmation appears inside checkout. Friends see exactly what discount they're getting and who sent them." },
  { icon: "share", title: "Thank-you page share prompt", body: "Capture the highest-intent moment of the customer journey — right after the order is placed, while they're already excited." },
  { icon: "link", title: "Magic link customer portal", body: "No login required. Customers click a link in their email, see their referrals, balance, and personal share link. That's it." },
  { icon: "wallet", title: "Apple Wallet dynamic pass", body: "Every referrer gets a personal pass in their Wallet. Updates in real time when rewards land. Push notifications for free." },
  { icon: "message", title: "Klaviyo personalised URL", body: "One Klaviyo campaign URL works for your entire list. Each recipient gets a personal referral link automatically." },
  { icon: "chart", title: "Weekly merchant summaries", body: "Every Monday: revenue referred, top referrers, conversion rate, week-over-week. One email, no dashboard fishing." },
];

export default function ShopifyPlusReferral() {
  return (
    <PageShell path="/shopify-plus-referral">
      <PageHero
        eyebrow="Shopify Plus"
        title="The referral app built for Shopify Plus"
        subtitle="Built on Shopify's latest infrastructure — Discount Functions, Checkout Extensibility, Theme App Extensions. Not bolted on. Native."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · £39/month flat · no commission</p>
      </PageHero>

      {/* Why Plus referrals are different */}
      <section style={{ padding: "60px 28px 80px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>The difference</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 14 }}>
              Why Shopify Plus referrals are different<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65 }}>
              Plus unlocks parts of Shopify that the standard plan can't touch. A Plus-native referral app uses every one of them.
            </p>
          </div>
          <div className="reason-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {plusFeatures.map((f, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
                padding: "32px 28px", boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, marginBottom: 18,
                  background: "var(--coral-light)", border: "1px solid var(--coral-mid)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 900, color: "var(--coral)",
                }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 18, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.3 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What marra adds */}
      <section style={{ padding: "80px 28px", background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>What marra adds</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Seven things, on top of Plus<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
            {marraAdditions.map((f, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
                padding: "26px 24px",
                display: "flex", alignItems: "flex-start", gap: 16,
              }}>
                <div style={{
                  flexShrink: 0, width: 42, height: 42, borderRadius: 10,
                  background: "var(--coral-light)", border: "1px solid var(--coral-mid)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon type={f.icon} size={20} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 16, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.01em", marginBottom: 6 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Pricing</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,36px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 28 }}>
            One plan. Plus-tier features<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.08)" }}>
            <div style={{ background: "var(--ink)", padding: "32px 36px 28px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 4, justifyContent: "center" }}>
                <span style={{ fontWeight: 900, fontSize: 54, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>£39</span>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.3)", fontWeight: 500, paddingBottom: 8 }}>/month</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Flat fee · no commission · invitation only</p>
            </div>
            <div style={{ padding: "30px 36px 32px" }}>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: 22 }}>
                Same price for a £10k/month store and a £10m/month store. The bigger your Plus operation, the better the deal.
              </p>
              <Link to="/#waitlist" className="cta-primary" style={{ width: "100%", textAlign: "center", display: "block", padding: "15px" }}>Request early access</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to run referrals on Plus properly"
        subtitle="Built native to Shopify Plus. Flat £39/month. Currently invitation only."
      />
    </PageShell>
  );
}
