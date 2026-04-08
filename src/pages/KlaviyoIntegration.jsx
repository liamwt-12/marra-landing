import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const steps = [
  { n: "01", title: "Install marra", body: "From the Shopify App Store. Less than ten minutes from click to live." },
  { n: "02", title: "Copy your campaign URL", body: "One Klaviyo-ready URL, copyable from the marra dashboard." },
  { n: "03", title: "Paste into Klaviyo", body: "Drop the URL into your campaign CTA button — that's the entire integration." },
  { n: "04", title: "Send to your list", body: "Klaviyo personalises the link per recipient. Each customer gets their own." },
  { n: "05", title: "Every click becomes a referrer", body: "marra auto-enrols on click. No CSV upload, no pre-registration, no opt-in." },
];

const segments = [
  { label: "Has referred 3+ friends", desc: "Your top advocates. Send them VIP rewards." },
  { label: "Has shared but no conversions", desc: "Almost-there. Send them a nudge with a better offer." },
  { label: "Has never opened share link", desc: "Activate them with a 'did you know?' campaign." },
  { label: "Top referrer this month", desc: "One-off thank-you flow with extra credit." },
];

export default function KlaviyoIntegration() {
  return (
    <PageShell path="/klaviyo-referral-integration">
      <PageHero
        eyebrow="Klaviyo integration"
        title="Connect your Klaviyo list to a referral programme in minutes"
        subtitle="One personalised campaign URL. Auto-enrolment on click. Two-way profile sync. The fastest way to turn an email list into a referral channel."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · 47 merchants on the waitlist</p>
      </PageHero>

      {/* How it works */}
      <section style={{ padding: "60px 28px 80px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ marginBottom: 38 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>How it works</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16 }}>
              How marra works with Klaviyo<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, maxWidth: 620 }}>
              marra generates a personalised referral link for every customer using their email address. One campaign URL, infinite personalised links.
            </p>
          </div>

          {/* Code-style URL block */}
          <div style={{ background: "var(--ink)", borderRadius: 14, padding: "26px 28px", marginBottom: 28 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Your Klaviyo campaign URL</p>
            <code style={{
              display: "block", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 13, color: "#fff", lineHeight: 1.6, wordBreak: "break-all",
            }}>
              https://your-store.myshopify.com/apps/marra/refer?email=
              <span style={{ color: "var(--coral)" }}>{`{{ person.email | url_encode }}`}</span>
            </code>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 14, lineHeight: 1.6 }}>
              Klaviyo replaces <code style={{ color: "var(--coral)", background: "rgba(255,92,71,0.1)", padding: "1px 6px", borderRadius: 4 }}>{`{{ person.email }}`}</code> with each subscriber's address at send time. marra reads the email on click, looks up (or creates) the customer's referral profile, and drops them in their personal portal.
            </p>
          </div>

          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Personalised link for every customer — generated on the fly.",
              "Click-through auto-enrols the customer as a referrer. No CSV upload.",
              "No pre-registration step. The first click is the signup.",
              "Works with any Klaviyo segment — campaigns, flows, abandoned cart.",
            ].map((line, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--ink-3)", lineHeight: 1.6 }}>
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                  background: "var(--coral-light)", border: "1px solid var(--coral-mid)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, color: "var(--coral)", fontWeight: 900, marginTop: 1,
                }}>✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Launch sequence */}
      <section style={{ padding: "80px 28px", background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ marginBottom: 38 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Launch sequence</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              From zero to live in five steps<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
                padding: "22px 26px", display: "flex", alignItems: "flex-start", gap: 22,
              }}>
                <div style={{
                  flexShrink: 0, fontFamily: "'Satoshi',sans-serif",
                  fontSize: 22, fontWeight: 900, color: "var(--coral)", letterSpacing: "-0.02em",
                  width: 44,
                }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 17, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sync back */}
      <section style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ marginBottom: 38 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Two-way sync</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16 }}>
              Sync referral data back to Klaviyo<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, maxWidth: 620 }}>
              marra syncs each customer's referral activity back to their Klaviyo profile as custom properties — so you can segment, personalise, and trigger flows based on real referral behaviour.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {segments.map((s, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
                padding: "22px 24px",
              }}>
                <p style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, color: "var(--coral)", fontWeight: 700, marginBottom: 8 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to launch a Klaviyo referral campaign"
        subtitle="One URL, every subscriber gets their own link, auto-enrol on click. £39/month flat. Currently invitation only."
      />
    </PageShell>
  );
}
