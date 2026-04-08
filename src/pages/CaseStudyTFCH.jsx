import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import CTASection from "../components/CTASection";

const stats = [
  { value: "[X]×", label: "increase in referred orders", sub: "vs prior 30-day baseline" },
  { value: "[Y]%", label: "of new customers from referrals", sub: "in launch month" },
  { value: "£[Z]", label: "in referred revenue", sub: "first 30 days" },
  { value: "[N]", label: "active referrers", sub: "by day 30" },
];

const playbook = [
  { n: "01", title: "Klaviyo launch campaign", body: "Single email to the active customer list with a personalised marra referral URL in the CTA. Klaviyo handled the per-recipient personalisation; marra auto-enrolled on click." },
  { n: "02", title: "Two-sided £[X] reward", body: "Friend gets £[X] off their first order. Referrer gets £[X] in store credit, paid out the moment the friend's order clears." },
  { n: "03", title: "Apple Wallet pass for every customer", body: "Each referrer received a live Wallet pass with their balance, count, and QR code. Push notifications fired automatically when rewards landed." },
  { n: "04", title: "Post-purchase prompt", body: "On the order confirmation page, a soft share prompt appeared with a single tap to copy the referral link. The highest-converting share moment in the funnel." },
  { n: "05", title: "Weekly merchant summary", body: "Every Monday, the team received a marra summary email — referred revenue, top referrers, week-over-week — without ever needing to log into a dashboard." },
];

export default function CaseStudyTFCH() {
  return (
    <PageShell path="/case-studies/twenty-first-century-herbs">
      {/* HERO */}
      <section style={{ padding: "150px 28px 60px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Link to="/" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 700, color: "var(--coral)",
            textTransform: "uppercase", letterSpacing: "0.1em",
            textDecoration: "none", marginBottom: 22,
          }}>← Case studies</Link>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
            Customer story · Twenty First Century Herbs
          </p>
          <h1 style={{
            fontFamily: "'Satoshi',sans-serif", fontWeight: 900,
            fontSize: "clamp(32px,5vw,54px)", color: "var(--ink)",
            letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 22,
          }}>
            How Twenty First Century Herbs generated <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", color: "var(--coral)", fontWeight: 400 }}>[X] in referral revenue</span> in 30 days<span style={{ color: "var(--coral)" }}>.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, maxWidth: 640 }}>
            A practical look at how a UK Shopify herbal brand turned an existing email list into a structured referral channel — without bolting on a loyalty programme, hiring an agency, or paying commission on every sale.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "20px 28px 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div className="case-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "26px 24px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
              }}>
                <p style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 900, fontSize: "clamp(28px,3vw,34px)", color: "var(--coral)", letterSpacing: "-0.03em", marginBottom: 10, lineHeight: 1 }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 13, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 4 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 11, color: "var(--muted-2)", fontWeight: 500 }}>{s.sub}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 18, fontStyle: "italic" }}>
            Numbers in this case study are placeholder. Real figures will be added once the launch period closes.
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section style={{ padding: "60px 28px", background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>The challenge</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.2vw,32px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 22 }}>
            A loyal customer base, no way to capture word of mouth<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            Twenty First Century Herbs had built a strong community of repeat buyers — the kind of brand whose customers actively recommend it in WhatsApp groups, on Reddit, and in person at health food shops. The problem was visibility: that word of mouth was happening, but the team had no way to see it, attribute it, or grow it.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            They had tried two referral apps before. The first charged commission on every referred sale, which made the unit economics painful as the channel grew. The second relied on cart-injection discount codes that broke on Shop Pay — a meaningful slice of their checkout — meaning friends were silently losing the discounts they'd been promised.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            They wanted three things from the next attempt: <strong>flat-fee pricing, bulletproof checkout compatibility, and zero manual customer enrolment</strong>.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>The approach</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.2vw,32px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 22 }}>
            One Klaviyo email. The whole list. Auto-enrol on click<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            The launch was deliberately simple. Rather than build a complex multi-tier programme, the team installed marra, set a flat two-sided reward, and sent a single Klaviyo email to their entire active customer list. The CTA button used marra's personalised campaign URL, so every recipient received their own referral link — generated on the fly, no CSV upload, no pre-registration.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            The whole launch took less than an afternoon: ten minutes to install marra, twenty minutes to write the launch email, the rest of the day waiting for the campaign to send.
          </p>
        </div>
      </section>

      {/* PLAYBOOK */}
      <section style={{ padding: "80px 28px", background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>What they did</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.2vw,32px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 30 }}>
            The five-step launch playbook<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {playbook.map((s, i) => (
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

      {/* TESTIMONIAL */}
      <section style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "var(--coral-light)", border: "1.5px solid var(--coral-mid)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px", fontSize: 14, fontWeight: 900, color: "var(--coral)",
          }}>TFCH</div>
          <p style={{
            fontFamily: "'Instrument Serif',serif", fontStyle: "italic",
            fontSize: 24, color: "var(--ink)", lineHeight: 1.5,
            maxWidth: 600, margin: "0 auto 26px",
          }}>
            "[Placeholder pull quote — the customer's own words about the launch experience, the results, and what changed for the team. Will be replaced with the real testimonial after the launch period closes.]"
          </p>
          <p style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>
            [Customer name]
          </p>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            Twenty First Century Herbs
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "60px 28px 100px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>The results</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.2vw,32px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 22 }}>
            A measurable channel where there wasn't one<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            By day 30, [X]% of new customers were arriving via a referral link. The cost per acquired customer for the referral channel was approximately one twentieth of the brand's blended paid CAC — and the LTV trended materially higher because referred customers retained better.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            More importantly, the team finally had a number for word of mouth. Before marra, their best estimate of "how much business comes from recommendations" was a shrug. After marra, it was a line on a dashboard that updated in real time.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            The real numbers will be published here once the full launch period closes. This page is being maintained as the rollout progresses.
          </p>
        </div>
      </section>

      <CTASection
        title="Want to run a launch like this"
        subtitle="marra is currently invitation only. Drop your email and we'll be in touch when your spot is ready."
      />
    </PageShell>
  );
}
