import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink-2)", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "44px 28px 32px", textAlign: "center" }}>
      <span style={{ fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "-0.04em" }}>marra<span style={{ color: "var(--coral)" }}>.</span></span>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", marginTop: 8 }}>Referral programme for Shopify. Currently invitation only.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 22, marginTop: 18, flexWrap: "wrap" }}>
        {[
          { to: "/", label: "Home" },
          { to: "/blog", label: "Blog" },
          { to: "/vs/referralcandy", label: "vs ReferralCandy" },
          { to: "/shopify-plus-referral", label: "Shopify Plus" },
        ].map(l => (
          <Link key={l.to} to={l.to} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontWeight: 500 }}>{l.label}</Link>
        ))}
        {/* Privacy is a static page served by netlify.toml — use a hard nav */}
        <a href="/privacy" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontWeight: 500 }}>Privacy</a>
      </div>
    </footer>
  );
}
