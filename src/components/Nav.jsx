import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", inset: "0 0 auto 0", zIndex: 200,
      background: scrolled ? "rgba(250,249,247,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "15px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <span style={{ fontWeight: 900, fontSize: 20, color: "var(--ink)", letterSpacing: "-0.05em" }}>marra<span style={{ color: "var(--coral)" }}>.</span></span>
            <span style={{
              display: "inline-flex", alignItems: "center",
              background: "var(--coral)", color: "#fff",
              fontSize: 10, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase",
              padding: "3px 9px", borderRadius: 100,
            }}>Early access</span>
          </Link>
          <div className="hide-mob" style={{ display: "flex", gap: 24, marginLeft: 22 }}>
            <Link to="/shopify-plus-referral" className="nav-link">Shopify Plus</Link>
            <Link to="/klaviyo-referral-integration" className="nav-link">Klaviyo</Link>
            <Link to="/vs/referralcandy" className="nav-link">Compare</Link>
            <Link to="/blog" className="nav-link">Journal</Link>
          </div>
        </div>
        <Link to="/#waitlist" className="cta-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Request early access</Link>
      </div>
    </nav>
  );
}
