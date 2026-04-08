import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { posts } from "./blog/posts";

export default function Blog() {
  return (
    <PageShell
      title="The marra journal — Referral marketing for Shopify brands"
      description="Posts on referrals, retention, and running a Shopify brand. Practical guides on Shop Pay, Klaviyo, word of mouth, and growing a referral programme that actually works."
      canonical="https://getmarra.com/blog"
    >
      <PageHero
        eyebrow="The marra journal"
        title="Notes on referrals, retention, and running a Shopify brand"
        subtitle="Practical posts on the things that actually move the needle — Shop Pay compatibility, Klaviyo launches, the maths behind word of mouth, and the mistakes worth avoiding."
      />

      <section style={{ padding: "30px 28px 100px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "32px 32px 28px",
                  textDecoration: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 6px 8px rgba(0,0,0,0.04), 0 18px 50px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,92,71,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.03)";
                  e.currentTarget.style.borderColor = "var(--line)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span>{post.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--muted-2)" }} />
                  <span style={{ color: "var(--muted-2)" }}>{post.readTime}</span>
                </div>
                <h2 style={{
                  fontFamily: "'Satoshi',sans-serif",
                  fontSize: "clamp(20px,2.4vw,24px)",
                  fontWeight: 900,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: 14,
                }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, marginBottom: 22 }}>
                  {post.dek}
                </p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 800, color: "var(--coral)",
                }}>
                  Read post <span style={{ fontSize: 16 }}>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see marra in action"
        subtitle="Currently invitation only. Drop your email and we'll be in touch when your spot is ready."
      />
    </PageShell>
  );
}
