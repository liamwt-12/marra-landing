import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

/* Mock Apple Wallet pass — pure SVG/CSS, no asset dependency */
function WalletPass() {
  return (
    <div style={{
      width: "100%", maxWidth: 320, margin: "0 auto",
      background: "#0F0E0D",
      borderRadius: 22,
      padding: "26px 26px 22px",
      color: "#fff",
      boxShadow: "0 30px 80px rgba(0,0,0,0.35), 0 8px 22px rgba(0,0,0,0.18)",
      border: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'Satoshi',sans-serif",
    }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: "var(--coral)", letterSpacing: "-0.01em" }}>
          THE NORTH & SON
        </span>
        <span style={{
          fontSize: 9, color: "rgba(255,255,255,0.45)", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.08em",
        }}>marra</span>
      </div>

      {/* fields */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 28 }}>
        <div>
          <p style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Your reward</p>
          <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>£24 credit</p>
        </div>
        <div>
          <p style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Referrals</p>
          <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>3 friends</p>
        </div>
      </div>

      {/* QR + caption */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 14, marginBottom: 12, display: "flex", justifyContent: "center" }}>
        {/* Stylised QR */}
        <svg width="120" height="120" viewBox="0 0 25 25" shapeRendering="crispEdges">
          {[
            [0,0,7,7],[18,0,7,7],[0,18,7,7],
            [2,2,3,3],[20,2,3,3],[2,20,3,3],
            [9,0,1,1],[11,0,1,1],[13,0,1,1],
            [9,2,1,1],[12,2,2,1],[15,2,1,1],
            [9,4,2,1],[13,4,2,1],
            [10,6,1,1],[14,6,2,1],
            [0,9,1,1],[2,9,1,1],[4,9,2,1],[8,9,2,1],[12,9,1,1],[15,9,2,1],[19,9,1,1],[22,9,2,1],
            [1,11,1,1],[3,11,2,1],[6,11,1,1],[9,11,1,1],[11,11,2,1],[14,11,1,1],[17,11,2,1],[20,11,1,1],[22,11,1,1],
            [0,13,2,1],[3,13,1,1],[5,13,2,1],[9,13,1,1],[12,13,1,1],[14,13,2,1],[18,13,1,1],[20,13,1,1],[23,13,1,1],
            [1,15,1,1],[3,15,2,1],[6,15,1,1],[9,15,2,1],[13,15,1,1],[15,15,1,1],[18,15,2,1],[22,15,1,1],
            [9,18,1,1],[11,18,2,1],[14,18,1,1],[16,18,1,1],
            [10,20,1,1],[13,20,1,1],[15,20,2,1],
            [9,22,2,1],[13,22,1,1],[16,22,1,1],
          ].map((r, i) => <rect key={i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} fill="#0F0E0D" />)}
        </svg>
      </div>
      <p style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Scan to refer — friends save 15%
      </p>
    </div>
  );
}

export default function AppleWallet() {
  return (
    <PageShell path="/apple-wallet-referral">
      <PageHero
        eyebrow="Apple Wallet"
        title="The only Shopify referral app with Apple Wallet passes"
        subtitle="Every referrer gets a personal pass in Apple Wallet. It updates in real time when they earn rewards."
      >
        <Link to="/#waitlist" className="cta-primary">Request early access</Link>
        <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>Currently invitation only · 47 merchants on the waitlist</p>
      </PageHero>

      {/* Pass mockup */}
      <section style={{ padding: "10px 28px 100px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>What the pass looks like</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.4vw,36px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 22 }}>
              A live referral card in every customer's pocket<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["Store name in coral", "Branded to your shop, sits naturally next to boarding passes and loyalty cards."],
                ["YOUR REWARD — live balance", "Updates in real time as friends place orders. Customers actually see the money."],
                ["REFERRALS — count", "How many friends have used their link. Social-proof built right into the pass."],
                ["QR code", "Encodes the customer's personal referral link. Friends scan, marra opens with the discount pre-applied."],
                ["Push notifications", "Apple sends a push when the pass updates. Free re-engagement, no marketing spend."],
              ].map(([t, b], i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                    background: "var(--coral-light)", border: "1px solid var(--coral-mid)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, color: "var(--coral)", fontWeight: 900, marginTop: 2,
                  }}>✓</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", marginBottom: 3 }}>{t}</p>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <WalletPass />
          </div>
        </div>
      </section>

      {/* How it updates */}
      <section style={{ padding: "80px 28px", background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>How it updates</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.4vw,36px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 22 }}>
            Push notifications, for free<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            When a friend places an order, marra updates the pass via Apple's PassKit web service. Apple then sends a silent push to every device the pass lives on — and shows a notification on the lock screen.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            The referrer doesn't need to open your store, your email, or your app. They just see the notification: <em style={{ fontFamily: "'Instrument Serif',serif", color: "var(--ink)" }}>"You earned £8 — Lucy used your link."</em>
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            That's a re-engagement channel you don't pay for, don't need an app for, and don't need email open rates for. Works on every iPhone with iOS Wallet (basically all of them).
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Why it matters</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.4vw,36px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 22 }}>
            Referral links get forgotten<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            The biggest leak in any referral programme isn't the referrer's intention — it's their memory. They get the link, mean to share it, and then it disappears under fifty other emails.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
            A Wallet pass lives next to their boarding passes, loyalty cards, and concert tickets. Every time they open Wallet, they see their referral balance — and the QR code is one tap away.
          </p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            The QR code matters more than you'd think. It makes in-person sharing instant: show your phone at the gym, your friend scans, done. No "let me text you the link, what's your number again?" friction.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to put your referral programme in every customer's pocket"
        subtitle="The only Shopify referral app with native Apple Wallet support. £39/month flat. Currently invitation only."
      />
    </PageShell>
  );
}
