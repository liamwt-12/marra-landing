import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Placeholder({ eyebrow, title, blurb }) {
  return (
    <div style={{ background: "var(--warm-white)", fontFamily: "'Satoshi',sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav />
      <main style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "180px 28px 120px", textAlign: "center" }}>
        {eyebrow && (
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
            {eyebrow}
          </p>
        )}
        <h1 style={{ fontWeight: 900, fontSize: "clamp(34px,5vw,52px)", color: "var(--ink)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 18 }}>
          {title}<span style={{ color: "var(--coral)" }}>.</span>
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 520, margin: "0 auto 30px" }}>
          {blurb}
        </p>
        <div>
          <Link to="/" className="cta-primary">Back to the home page</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
