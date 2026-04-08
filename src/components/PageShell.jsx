import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

/**
 * Wraps every content page with Nav + Footer and sets per-page
 * <title> + <meta name="description"> + <link rel="canonical"> on
 * mount. Also resets scroll to top so route changes feel like real
 * page loads.
 */
export default function PageShell({ title, description, canonical, children }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
    }
    if (canonical) {
      let l = document.querySelector('link[rel="canonical"]');
      if (!l) {
        l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        document.head.appendChild(l);
      }
      l.setAttribute("href", canonical);
    }
    window.scrollTo(0, 0);
  }, [title, description, canonical]);

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
