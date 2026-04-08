import { useState } from "react";

/**
 * FAQ section with expandable items + JSON-LD FAQPage schema for SEO.
 *
 * items: [{ q, a }]
 */
export default function FAQ({ eyebrow = "FAQ", title = "Frequently asked questions", items }) {
  const [open, setOpen] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.a === "string" ? item.a : item.aText || "",
      },
    })),
  };

  return (
    <section style={{ padding: "80px 28px", background: "var(--warm-white)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{eyebrow}</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.5vw,36px)", color: "var(--ink)", letterSpacing: "-0.03em" }}>
            {title}<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
                overflow: "hidden",
                boxShadow: isOpen ? "0 6px 24px rgba(0,0,0,0.05)" : "0 1px 2px rgba(0,0,0,0.03)",
                transition: "box-shadow 0.2s",
              }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    padding: "22px 26px", cursor: "pointer", fontFamily: "'Satoshi',sans-serif",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18,
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em" }}>{item.q}</span>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                    background: isOpen ? "var(--coral)" : "var(--stone)",
                    color: isOpen ? "#fff" : "var(--ink)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 900, lineHeight: 1,
                    transition: "all 0.2s",
                  }}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 26px 24px", fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
                    {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
