import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import CTASection from "./CTASection";

/**
 * Wraps a blog post with header (title, date, read time), article body,
 * Article JSON-LD schema, related-post footer, and the standard CTA.
 *
 *  - title, dek (subtitle), date, readTime, slug
 *  - children: article body (use .prose markup)
 */
export default function BlogLayout({ title, dek, date, readTime, slug, children }) {
  const canonical = `https://getmarra.com/blog/${slug}`;
  const description = dek || `${title} — read on the marra journal.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: dateToISO(date),
    author: { "@type": "Organization", name: "marra" },
    publisher: {
      "@type": "Organization",
      name: "marra",
      url: "https://getmarra.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <PageShell title={`${title} | marra`} description={description} canonical={canonical}>
      <article>
        {/* Header */}
        <header style={{ padding: "150px 28px 50px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <Link to="/blog" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, fontWeight: 700, color: "var(--coral)",
              textTransform: "uppercase", letterSpacing: "0.1em",
              textDecoration: "none", marginBottom: 22,
            }}>← The marra journal</Link>
            <h1 style={{
              fontFamily: "'Satoshi',sans-serif", fontWeight: 900,
              fontSize: "clamp(30px,4.6vw,48px)", color: "var(--ink)",
              letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 18,
            }}>
              {title}<span style={{ color: "var(--coral)" }}>.</span>
            </h1>
            {dek && (
              <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>{dek}</p>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: "var(--muted-2)", fontWeight: 600 }}>
              <span>{date}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--muted-2)" }} />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div style={{ padding: "0 28px 80px" }}>
          <div className="prose" style={{ maxWidth: 720, margin: "0 auto" }}>
            {children}
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Early access"
        title="Want a referral programme that just works"
        subtitle="marra is built on Shopify's native infrastructure. Flat £39/month. No commission. Currently invitation only."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </PageShell>
  );
}

/* Best-effort date string → ISO. Falls back to today if input can't be parsed. */
function dateToISO(d) {
  if (!d) return new Date().toISOString();
  const parsed = new Date(d);
  if (!isNaN(parsed.getTime())) return parsed.toISOString();
  return new Date().toISOString();
}
