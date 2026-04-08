import { Link } from "react-router-dom";

/**
 * Dark CTA section used at the bottom of every content page.
 * Always points back to the waitlist on the homepage.
 */
export default function CTASection({ eyebrow = "Early access", title = "Request early access to marra", subtitle = "47 merchants on the waitlist. £39/month flat. No commission." }) {
  return (
    <section style={{ background: "var(--ink)", padding: "90px 28px", textAlign: "center" }}>
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,92,71,0.12)", border: "1px solid rgba(255,92,71,0.28)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 22,
          fontSize: 12, fontWeight: 700, color: "var(--coral)",
          textTransform: "uppercase", letterSpacing: "0.08em",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: "var(--coral)",
            animation: "coralPulse 2s infinite", boxShadow: "0 0 0 0 rgba(255,92,71,0.4)",
          }} />
          {eyebrow}
        </div>
        <h2 style={{
          fontFamily: "'Satoshi',sans-serif", fontWeight: 900,
          fontSize: "clamp(28px,4vw,42px)", color: "#fff",
          letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16,
        }}>
          {title}<span style={{ color: "var(--coral)" }}>.</span>
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 30 }}>{subtitle}</p>
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
      </div>
    </section>
  );
}
