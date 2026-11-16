import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";
import PageShell from "../components/PageShell";

/* ─── HOOK ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ═══════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════ */
function LiveCounter() {
  const [val, setVal] = useState(84720);
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setVal(v => v + Math.floor(Math.random() * 80 + 15));
      setFlash(true); setTimeout(() => setFlash(false), 500);
    }, 3400);
    return () => clearInterval(t);
  }, []);
  return <span style={{ color: flash ? "var(--coral)" : "inherit", transition: "color 0.4s" }}>£{val.toLocaleString()}</span>;
}

function Dashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(p => p + 1), 4200); return () => clearInterval(t); }, []);

  const feed = [
    { avatar: "AB", result: "Friend One placed an order", via: "Sharer A", value: "£67", time: "example" },
    { avatar: "CD", result: "Friend Two placed an order", via: "Sharer B", value: "£124", time: "example" },
  ];
  const bars = [38, 52, 46, 68, 58, 80, 72, 88, 82, 94, 86, 108];
  const max = Math.max(...bars);

  return (
    <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 28px 70px rgba(0,0,0,0.11)" }}>
      <div style={{ background: "var(--stone)", borderBottom: "1px solid var(--line)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 6 }}>
        {["#F87171", "#FBBF24", "#4ADE80"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        <div style={{ marginLeft: 8, background: "#fff", border: "1px solid var(--line)", borderRadius: 5, padding: "3px 10px", fontSize: 11, color: "var(--muted)", fontFamily: "monospace", flex: 1, maxWidth: 200 }}>example-store.myshopify.com</div>
        <span style={{ marginLeft: "auto", background: "var(--coral)", color: "#fff", borderRadius: 100, padding: "3px 10px", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Satoshi',sans-serif" }}>Example</span>
      </div>
      <div style={{ padding: "18px 18px 16px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          {[
            { label: "Example revenue", value: <LiveCounter />, accent: true, sub: "made-up figure" },
            { label: "Example sharers", value: "312", accent: false, sub: "made-up figure" },
            { label: "Example orders", value: "64", accent: false, sub: "made-up figure" },
          ].map((k, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 10, padding: "11px 12px", background: k.accent ? "var(--coral-light)" : "var(--stone)", border: `1px solid ${k.accent ? "rgba(255,92,71,0.12)" : "var(--line)"}` }}>
              <p style={{ fontSize: 9, fontFamily: "'Satoshi',sans-serif", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3 }}>{k.label}</p>
              <p style={{ fontSize: 17, fontFamily: "'Satoshi',sans-serif", fontWeight: 900, color: k.accent ? "var(--coral)" : "var(--ink)", letterSpacing: "-0.03em", marginBottom: 2 }}>{k.value}</p>
              <p style={{ fontSize: 9, color: "var(--green)", fontWeight: 700 }}>{k.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--stone)", borderRadius: 10, padding: "12px 12px 8px", marginBottom: 12 }}>
          <p style={{ fontSize: 9, fontFamily: "'Satoshi',sans-serif", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>Example chart · made-up data</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${(h / max) * 100}%`, borderRadius: "3px 3px 0 0", background: i === bars.length - 1 ? "var(--coral)" : "var(--stone-2)", transformOrigin: "bottom", animation: `barGrow 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both` }} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <p style={{ fontSize: 9, fontFamily: "'Satoshi',sans-serif", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Example activity</p>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "var(--green)", fontWeight: 700 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite", boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" }} />Demo
          </span>
        </div>
        {feed.map((e, i) => (
          <div key={`${tick}-${i}`} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 0", borderBottom: i === 0 ? "1px solid var(--line)" : "none", animation: i === 0 && tick > 0 ? "slideIn 0.4s ease" : "none" }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--coral-light)", border: "1px solid var(--coral-mid)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 900, color: "var(--coral)", fontFamily: "'Satoshi',sans-serif", flexShrink: 0 }}>{e.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 11, color: "var(--ink)", fontWeight: 700, fontFamily: "'Satoshi',sans-serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.result}</p>
              <p style={{ fontSize: 9, color: "var(--muted)" }}>via {e.via} · {e.time}</p>
            </div>
            <span style={{ fontSize: 12, fontWeight: 800, color: "var(--green)", fontFamily: "'Satoshi',sans-serif", flexShrink: 0 }}>{e.value}</span>
          </div>
        ))}
        <p style={{ fontSize: 10, color: "var(--muted)", marginTop: 10, textAlign: "center", fontWeight: 600 }}>Illustrative example. Made-up names and figures, not real merchants or revenue.</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   TICKER
═══════════════════════════════════════ */
function ProofTicker() {
  const items = [
    { stat: "Banner", copy: "on your store" },
    { stat: "Thank-you page", copy: "a block with a link to share" },
    { stat: "Sign-up page", copy: "enter an email, get a link" },
    { stat: "Unique link", copy: "and discount for every sharer" },
    { stat: "Store credit", copy: "or a one-time code" },
    { stat: "New customers", copy: "only" },
    { stat: "$49 a month", copy: "14-day free trial" },
  ];
  const doubled = [...items, ...items];
  return (
    <div style={{ background: "var(--ink)", padding: "15px 0", overflow: "hidden" }}>
      <div className="ticker-inner">
        {doubled.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "0 44px", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 900, fontSize: 18, color: "var(--coral)", letterSpacing: "-0.03em" }}>{p.stat}</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", fontWeight: 500, whiteSpace: "nowrap" }}>{p.copy}</span>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 14, marginLeft: 24 }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   STAT CARDS
═══════════════════════════════════════ */
function StatCards({ vis }) {
  const stats = [
    { number: "Give £5", label: "A discount for the friend", context: "Every sharer has their own link and their own discount code. A friend who arrives through it gets money off their order.", bg: "var(--ink)", numColor: "var(--coral)", textColor: "rgba(255,255,255,0.45)", labelColor: "#fff" },
    { number: "Get £5", label: "A reward for the sharer", context: "Store credit if the sharer has a customer account with your store. A one-time code if they do not.", bg: "var(--stone)", numColor: "var(--coral)", textColor: "var(--muted)", labelColor: "var(--ink)", border: true },
    { number: "New", label: "Rewards for new customers only", context: "A reward is given only when the friend is a new customer of your store.", bg: "var(--coral)", numColor: "#fff", textColor: "rgba(255,255,255,0.6)", labelColor: "#fff" },
    { number: "Yours", label: "Your store's name, theme and brand", context: "Your customers see your store's name, your theme and your brand, not our app.", bg: "var(--warm-white)", numColor: "var(--ink)", textColor: "var(--muted)", labelColor: "var(--ink)", border: true },
  ];
  return (
    <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
      {stats.map((s, i) => (
        <div key={i} style={{ background: s.bg, borderRadius: 16, padding: "34px 30px", border: s.border ? "1px solid var(--line)" : "none", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px) scale(0.97)", transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s` }}>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(48px,6vw,72px)", fontWeight: 900, color: s.numColor, letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 10 }}>{s.number}</p>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 16, fontWeight: 800, color: s.labelColor, letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.3 }}>{s.label}</p>
          <p style={{ fontSize: 13, color: s.textColor, lineHeight: 1.6 }}>{s.context}</p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   FIVE THINGS
═══════════════════════════════════════ */
const systemItems = [
  { icon: "smartphone", title: "Banner", desc: "When a friend arrives through a referral link, a banner on your store shows them their discount." },
  { icon: "bolt", title: "Thank-you page", desc: "After an order, a block on the thank-you page shows your customer their own link to share." },
  { icon: "share", title: "Sign-up page", desc: "A page on your store where someone can enter their email and get a link to share." },
  { icon: "link", title: "Unique link", desc: "Every sharer gets their own link and their own discount code for friends." },
  { icon: "gift", title: "Reward", desc: "Store credit if the sharer has a customer account with your store. A one-time code if they do not. New customers only." },
];

function SystemScroll() {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 1;
    const idx = Math.round(el.scrollLeft / (cardWidth + 16));
    setActiveIdx(Math.min(idx, systemItems.length - 1));
  }, []);

  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 300;
    el.scrollTo({ left: i * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div ref={scrollRef} className="system-scroll" onScroll={handleScroll}>
        {systemItems.map((item, i) => (
          <div key={i} className="system-scroll-card" style={{
            background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
            padding: "32px 28px",
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--coral-light)", border: "1px solid var(--coral-mid)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <Icon type={item.icon} size={24} />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--coral)", letterSpacing: "0.04em" }}>0{i + 1}</span>
              <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 20, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                {item.title}<span style={{ color: "var(--coral)" }}>.</span>
              </h3>
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 16 }}>
        {systemItems.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} style={{
            width: i === activeIdx ? 24 : 8, height: 8, borderRadius: 4,
            background: i === activeIdx ? "var(--coral)" : "var(--stone-2)",
            border: "none", cursor: "pointer", padding: 0,
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   CHANNELS
═══════════════════════════════════════ */
const channels = [
  { icon: "smartphone", label: "Store banner", desc: "Shows the discount" },
  { icon: "bolt", label: "Thank-you page", desc: "After an order" },
  { icon: "share", label: "Sign-up page", desc: "Enter an email" },
  { icon: "link", label: "Unique link", desc: "One per sharer" },
  { icon: "message", label: "WhatsApp", desc: "Share button" },
];

function ChannelRow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % channels.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid var(--line)", borderRadius: 100, padding: "10px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite", boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" }} />
        <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Customer orders → gets a link to share</span>
      </div>

      <svg width="2" height="20"><line x1="1" y1="0" x2="1" y2="20" stroke="var(--stone-2)" strokeWidth="1.5" strokeDasharray="4 3" /></svg>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {channels.map((ch, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            background: i === idx ? "var(--coral-light)" : "#fff",
            border: `1.5px solid ${i === idx ? "rgba(255,92,71,0.3)" : "var(--line)"}`,
            borderRadius: 12, padding: "14px 16px", textAlign: "center", cursor: "pointer",
            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
            transform: i === idx ? "scale(1.05)" : "scale(1)",
            boxShadow: i === idx ? "0 6px 24px rgba(255,92,71,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
            minWidth: 90,
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, margin: "0 auto 6px", background: i === idx ? "var(--coral)" : "var(--stone)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
              <Icon type={ch.icon} size={18} color={i === idx ? "#fff" : "#8C8882"} strokeW={1.8} />
            </div>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 12, fontWeight: i === idx ? 800 : 600, color: i === idx ? "var(--ink)" : "var(--muted)", marginBottom: 1, transition: "all 0.3s" }}>{ch.label}</p>
            <p style={{ fontSize: 10, color: i === idx ? "var(--coral)" : "var(--muted-2)", transition: "all 0.3s", fontWeight: 500 }}>{ch.desc}</p>
          </div>
        ))}
      </div>

      <svg width="2" height="20"><line x1="1" y1="0" x2="1" y2="20" stroke="var(--stone-2)" strokeWidth="1.5" strokeDasharray="4 3" /></svg>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--coral-light)", border: "1.5px solid rgba(255,92,71,0.2)", borderRadius: 100, padding: "10px 20px", boxShadow: "0 4px 18px rgba(255,92,71,0.08)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--coral)", display: "inline-block", animation: "coralPulse 2s infinite", boxShadow: "0 0 0 0 rgba(255,92,71,0.4)" }} />
        <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: "var(--coral)" }}>New customer → sharer rewarded</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   COMPARISON
═══════════════════════════════════════ */
function Comparison() {
  const rows = [
    ["Banner on your store", true],
    ["Block on the thank-you page", true],
    ["Sign-up page", true],
    ["Unique link for every sharer", true],
    ["Unique discount code for every sharer", true],
    ["Store credit or a one-time code as the reward", true],
    ["Rewards for new customers only", true],
    ["Your store's name and theme", true],
  ];
  return (
    <div className="compare-table" style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Satoshi',sans-serif" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "13px 16px", fontSize: 11, color: "var(--muted)", fontWeight: 700, borderBottom: "1px solid var(--line)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feature</th>
            {["marra"].map((h, i) => (
              <th key={h} style={{ padding: "13px 16px", fontSize: 13, fontWeight: i === 0 ? 900 : 600, color: i === 0 ? "var(--coral)" : "var(--muted)", borderBottom: "1px solid var(--line)", textAlign: "center" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([feat, ...vals], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "var(--stone)" }}>
              <td style={{ padding: "11px 16px", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>{feat}</td>
              {vals.map((v, j) => (
                <td key={j} style={{ padding: "11px 16px", textAlign: "center", fontSize: 15, color: v ? (j === 0 ? "var(--coral)" : "var(--green)") : "var(--stone-2)" }}>{v ? "✓" : "✕"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════
   MANIFESTO
═══════════════════════════════════════ */
function Manifesto() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const lines = [
    { t: "Referrals, done quietly.", s: 28, w: 900, c: "#fff", mb: 28, serif: false },
    { t: "A referral programme should not need looking after, and it should not look like someone else's app.", s: 15, w: 400, c: "rgba(255,255,255,0.42)", mb: 28, serif: false },
    { t: "marra keeps it small.", s: 20, w: 700, c: "#fff", mb: 28, serif: false },
    { t: "One simple idea:", s: 15, w: 400, c: "rgba(255,255,255,0.42)", mb: 8, serif: false },
    { t: "Give £5, get £5.", s: 24, w: 900, c: "var(--coral)", mb: 32, serif: true },
    { t: "A link to share.", s: 15, w: 600, c: "rgba(255,255,255,0.6)", mb: 6, serif: false },
    { t: "A discount for the friend.", s: 15, w: 600, c: "rgba(255,255,255,0.6)", mb: 6, serif: false },
    { t: "A reward for the sharer.", s: 15, w: 600, c: "rgba(255,255,255,0.6)", mb: 28, serif: false },
    { t: "Rewards are for new customers only, paid as store credit or a one-time code.", s: 16, w: 400, c: "rgba(255,255,255,0.75)", mb: 36, serif: false },
    { t: "Your store's name.", s: 22, w: 900, c: "#fff", mb: 6, serif: false },
    { t: "Your theme.", s: 22, w: 900, c: "#fff", mb: 6, serif: false },
    { t: "Your brand, not our app.", s: 22, w: 900, c: "var(--coral)", mb: 0, serif: true },
  ];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { obs.disconnect(); lines.forEach((_, i) => setTimeout(() => setCount(i + 1), i * 130)); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: line.serif ? "'Instrument Serif',serif" : "'Satoshi',sans-serif",
          fontStyle: line.serif ? "italic" : "normal",
          fontSize: line.s, fontWeight: line.w, color: line.c,
          marginBottom: line.mb, lineHeight: 1.38,
          letterSpacing: line.s > 18 ? "-0.03em" : "0",
          opacity: i < count ? 1 : 0,
          transform: i < count ? "none" : "translateY(10px)",
          transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>{line.t}</p>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   WAITLIST
═══════════════════════════════════════ */
function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const encode = (data) =>
    Object.keys(data)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", email }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" style={{ background: "var(--ink)", padding: "100px 28px", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,92,71,0.12)", border: "1px solid rgba(255,92,71,0.28)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 22,
          fontSize: 12, fontWeight: 700, color: "var(--coral)",
          textTransform: "uppercase", letterSpacing: "0.08em",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--coral)", animation: "coralPulse 2s infinite", boxShadow: "0 0 0 0 rgba(255,92,71,0.4)" }} />
          Waitlist
        </div>

        <h2 style={{
          fontFamily: "'Satoshi',sans-serif", fontWeight: 900,
          fontSize: "clamp(32px,4.5vw,48px)", color: "#fff",
          letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16,
        }}>
          Join the waitlist<span style={{ color: "var(--coral)" }}>.</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 36, maxWidth: 460, margin: "0 auto 36px" }}>
          marra is not open to install yet. Leave your email and we will tell you when it is.
        </p>

        {!submitted ? (
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="waitlist-form"
            style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto" }}
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <p hidden>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="you@yourstore.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="waitlist-input"
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#fff" }}
            />
            <button
              type="submit"
              className="cta-primary"
              disabled={submitting}
              style={{ flexShrink: 0, opacity: submitting ? 0.7 : 1 }}
            >
              {submitting ? "Sending…" : "Join the waitlist"}
            </button>
          </form>
        ) : (
          <div style={{
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 14, padding: "22px 26px", maxWidth: 460, margin: "0 auto",
          }}>
            <p style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 4 }}>You're on the list.</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>We'll be in touch.</p>
          </div>
        )}

        {error && (
          <p style={{ color: "var(--coral)", fontSize: 13, marginTop: 14 }}>{error}</p>
        )}

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 22 }}>
          We use your email only to contact you about marra.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MAIN
═══════════════════════════════════════ */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Scroll to a section (#waitlist, #features, #pricing) if the URL has a hash
  useEffect(() => {
    if (["#waitlist", "#features", "#pricing"].includes(location.hash)) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [location]);

  const fade = (d = 0) => ({
    opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(22px)",
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${d}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${d}s`,
  });

  const [statsRef, statsVis] = useReveal(0.1);
  const [systemRef, systemVis] = useReveal(0.08);
  const [channelRef, channelVis] = useReveal(0.1);
  const [compareRef, compareVis] = useReveal(0.1);
  const [founderRef, founderVis] = useReveal(0.15);
  const [pricingRef, pricingVis] = useReveal(0.1);

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell path="/">
      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "130px 28px 80px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ ...fade(0.04), marginBottom: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "var(--coral)", color: "#fff",
                borderRadius: 100, padding: "5px 12px", fontSize: 11, fontWeight: 800,
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />
                Pre-launch
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--coral-light)", border: "1px solid rgba(255,92,71,0.18)", borderRadius: 100, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "var(--coral)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--coral)", animation: "coralPulse 2s infinite", boxShadow: "0 0 0 0 rgba(255,92,71,0.4)", display: "inline-block" }} />
                Referrals for Shopify stores
              </span>
            </div>

            <h1 className="hero-h1" style={{ ...fade(0.1), fontSize: "clamp(36px,4.2vw,56px)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.04, letterSpacing: "-0.04em", marginBottom: 22 }}>
              Referrals for<br />
              <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: 400, color: "var(--coral)" }}>your store,</span>
              <br />done quietly<span style={{ color: "var(--coral)" }}>.</span>
            </h1>

            <p style={{ ...fade(0.18), fontSize: 17, color: "var(--muted)", lineHeight: 1.65, maxWidth: 420, marginBottom: 32 }}>
              Give £5, get £5. Your customers share a link, their friends get money off, and the sharer gets a reward. Your customers see your store's name, your theme and your brand, not our app.
            </p>

            <div style={fade(0.26)}>
              <a href="#waitlist" onClick={scrollToWaitlist} className="cta-primary">Join the waitlist</a>
              <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 14 }}>$49 a month, 14-day free trial</p>
            </div>

            <div style={{ ...fade(0.34), marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { icon: "smartphone", l: "Store banner" },
                { icon: "bolt", l: "Thank-you page block" },
                { icon: "share", l: "Sign-up page" },
              ].map(({ icon, l }) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>
                  <Icon type={icon} size={16} color="var(--coral)" strokeW={2} />{l}
                </div>
              ))}
            </div>
          </div>
          <div style={fade(0.16)}><Dashboard /></div>
        </div>
      </section>

      {/* TICKER */}
      <ProofTicker />

      {/* STATS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <div ref={statsRef}>
          <div className={`fade-up${statsVis ? " in" : ""}`} style={{ marginBottom: 44, maxWidth: 520 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>How it works</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px,3.5vw,38px)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Give £5, get £5<span style={{ color: "var(--coral)" }}>.</span><br />
              <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.88em" }}>You choose the amounts.</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
              £5 is an example. You set the friend's discount and the sharer's reward, and marra does the rest in your store's name.
            </p>
          </div>
          <StatCards vis={statsVis} />
        </div>
      </section>

      {/* SYSTEM */}
      <section id="features" ref={systemRef} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px 80px" }}>
        <div className={`fade-up${systemVis ? " in" : ""}`} style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>The system</p>
          <h2 style={{ fontWeight: 900, fontSize: 32, color: "var(--ink)", letterSpacing: "-0.03em" }}>
            Five things. Done properly<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
        </div>
        <SystemScroll />
      </section>

      {/* CHANNELS */}
      <section ref={channelRef} style={{ background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "80px 28px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div className={`fade-up${channelVis ? " in" : ""}`} style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>In your store</p>
            <h2 style={{ fontWeight: 900, fontSize: 30, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: 10 }}>
              Where your customers find it<span style={{ color: "var(--coral)" }}>.</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)" }}>On your store, after an order, and on a page of its own.</p>
          </div>
          <ChannelRow />
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ background: "var(--warm-white)" }}>
        <div ref={compareRef} className={`fade-up${compareVis ? " in" : ""}`} style={{ maxWidth: 820, margin: "0 auto", padding: "80px 28px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, textAlign: "center" }}>Included</p>
          <h2 style={{ fontWeight: 900, fontSize: 30, color: "var(--ink)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: 36 }}>
            What you get<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--line)", overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.03)" }}>
            <Comparison />
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 16 }}>
            £5 is an example. You set both amounts.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section ref={founderRef} style={{ background: "var(--stone)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className={`fade-up${founderVis ? " in" : ""}`} style={{ maxWidth: 600, margin: "0 auto", padding: "80px 28px", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--coral-light)", border: "1.5px solid var(--coral-mid)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 14, fontWeight: 900, color: "var(--coral)" }}>LW</div>
          <p style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: 22, color: "var(--ink)", lineHeight: 1.5, maxWidth: 480, margin: "0 auto 24px" }}>
            "I built Marra because I needed it. Running multiple brands on Shopify, our best customers were already telling their friends. I just had no way to track it, reward it, or scale it."
          </p>
          <p style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>Liam</p>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>Marra · Shopify merchant since 2016</p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ background: "var(--ink-2)", padding: "100px 28px" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}><Manifesto /></div>
      </section>

      {/* PRICING */}
      <section id="pricing" ref={pricingRef} style={{ padding: "100px 28px", background: "var(--warm-white)" }}>
        <div className={`fade-up${pricingVis ? " in" : ""}`} style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--coral)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Pricing</p>
          <h2 style={{ fontWeight: 900, fontSize: 32, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: 10 }}>
            Simple pricing<span style={{ color: "var(--coral)" }}>.</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 360, margin: "0 auto" }}>$49 a month, 14-day free trial.</p>
        </div>
        <div className={`fade-up${pricingVis ? " in" : ""}`} style={{ transitionDelay: "0.1s", maxWidth: 420, margin: "0 auto" }}>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.08)" }}>
            <div style={{ background: "var(--ink)", padding: "32px 36px 28px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 4 }}>
                <span style={{ fontWeight: 900, fontSize: 54, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>$49</span>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.3)", fontWeight: 500, paddingBottom: 8 }}>/month</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>14-day free trial</p>
            </div>
            <div style={{ padding: "28px 36px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {["Store banner", "Thank-you page block", "Sign-up page", "Unique links", "Unique discount codes", "Store credit rewards", "One-time reward codes", "New customers only", "Your store's name", "Your theme"].map(f => (
                  <span key={f} style={{ background: "var(--stone)", border: "1px solid var(--line)", borderRadius: 100, padding: "5px 12px", fontSize: 12, color: "var(--ink)", fontWeight: 600 }}>{f}</span>
                ))}
              </div>
              <a href="#waitlist" onClick={scrollToWaitlist} className="cta-primary" style={{ width: "100%", textAlign: "center", display: "block", padding: "15px" }}>Join the waitlist</a>
              <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", marginTop: 12 }}>Not open to install yet</p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST (replaces previous closing CTA) */}
      <Waitlist />
    </PageShell>
  );
}
