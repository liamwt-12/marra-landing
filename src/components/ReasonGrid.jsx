/**
 * "Why merchants switch" — three numbered reason cards.
 *
 * reasons: [{ title, body }]
 */
export default function ReasonGrid({ eyebrow, title, reasons }) {
  return (
    <section style={{ padding: "90px 28px", background: "var(--warm-white)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
          {eyebrow && (
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{eyebrow}</p>
          )}
          <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.6vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            {title}<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
        </div>
        <div className="reason-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {reasons.map((r, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
              padding: "32px 28px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, marginBottom: 18,
                background: "var(--coral-light)", border: "1px solid var(--coral-mid)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 900, color: "var(--coral)",
              }}>0{i + 1}</div>
              <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 18, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.3 }}>
                {r.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
