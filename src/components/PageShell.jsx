import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ROUTES } from "../routes-meta";

/**
 * Wraps every page with Nav + Footer and keeps document.title /
 * <meta name="description"> / <link rel="canonical"> / OG / Twitter
 * tags in sync on client-side navigation.
 *
 * Preferred usage: pass `path` and PageShell looks the metadata up
 * from src/routes-meta.js. The same file is read by scripts/postbuild.mjs
 * at build time so static HTML and runtime stay in lockstep.
 *
 *   <PageShell path="/vs/referralcandy">...</PageShell>
 *
 * Legacy usage with explicit props is still supported as a fallback.
 */
export default function PageShell({ path, title, description, canonical, children }) {
  const lookup = path ? ROUTES[path] : null;
  const meta = {
    title: lookup?.title ?? title,
    description: lookup?.description ?? description,
    canonical: lookup?.canonical ?? canonical,
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (meta.title) document.title = meta.title;

    if (meta.description) {
      setMeta('meta[name="description"]', "name", "description", meta.description);
      setMeta('meta[property="og:description"]', "property", "og:description", meta.description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    }
    if (meta.title) {
      setMeta('meta[property="og:title"]', "property", "og:title", meta.title);
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    }
    if (meta.canonical) {
      setLink('link[rel="canonical"]', meta.canonical);
      setMeta('meta[property="og:url"]', "property", "og:url", meta.canonical);
    }

    window.scrollTo(0, 0);
  }, [meta.title, meta.description, meta.canonical]);

  return (
    <div style={{
      background: "var(--warm-white)",
      fontFamily: "'Satoshi',sans-serif",
      overflowX: "hidden",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

/* Find or create a <meta> tag and set its content attribute. */
function setMeta(selector, keyAttr, keyValue, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/* Find or create a <link rel="canonical"> tag and set its href. */
function setLink(selector, href) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
