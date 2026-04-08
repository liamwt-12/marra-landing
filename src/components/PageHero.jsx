/**
 * Hero block used at the top of every content page.
 *
 *  - eyebrow: small uppercase coral label above the title
 *  - title:   main h1, the period suffix is added automatically
 *  - subtitle: long-form supporting copy
 *  - children: optional CTA / ancillary content under subtitle
 */
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section style={{ padding: "150px 28px 70px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        {eyebrow && (
          <p style={{
            fontSize: 12, fontWeight: 700, color: "var(--coral)",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18,
          }}>{eyebrow}</p>
        )}
        <h1 style={{
          fontFamily: "'Satoshi',sans-serif", fontWeight: 900,
          fontSize: "clamp(34px,5.2vw,58px)", color: "var(--ink)",
          letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 22,
        }}>
          {title}<span style={{ color: "var(--coral)" }}>.</span>
        </h1>
        {subtitle && (
          <p style={{
            fontSize: 18, color: "var(--muted)", lineHeight: 1.6,
            maxWidth: 620, margin: "0 auto",
          }}>{subtitle}</p>
        )}
        {children && <div style={{ marginTop: 32 }}>{children}</div>}
      </div>
    </section>
  );
}
