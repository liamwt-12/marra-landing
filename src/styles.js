export const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }
  ::selection { background: rgba(255,92,71,0.15); }

  :root {
    --coral:       #FF5C47;
    --coral-light: rgba(255,92,71,0.07);
    --coral-mid:   rgba(255,92,71,0.16);
    --ink:         #0F0E0D;
    --ink-2:       #1C1B19;
    --ink-3:       #2A2926;
    --warm-white:  #FAF9F7;
    --stone:       #F4F2EF;
    --stone-2:     #EAE7E3;
    --muted:       #8C8882;
    --muted-2:     #B8B4AF;
    --line:        rgba(0,0,0,0.07);
    --green:       #22C55E;
  }

  .fade-up {
    opacity: 0; transform: translateY(22px);
    transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
  }
  .fade-up.in { opacity: 1; transform: none; }

  @keyframes ticker     { to { transform: translateX(-50%); } }
  @keyframes pulse      { 50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } }
  @keyframes coralPulse { 50% { box-shadow: 0 0 0 6px rgba(255,92,71,0); } }
  @keyframes slideIn    { from { opacity:0; transform:translateX(14px); } to { opacity:1; transform:none; } }
  @keyframes barGrow    { from { transform: scaleY(0); } to { transform: scaleY(1); } }
  @keyframes slideUp    { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }

  .ticker-inner { display:flex; width:max-content; animation: ticker 42s linear infinite; }

  .cta-primary {
    background: var(--coral); color: #fff;
    padding: 15px 30px; border-radius: 10px;
    font-family: 'Satoshi', sans-serif;
    font-size: 15px; font-weight: 700;
    text-decoration: none; display: inline-block;
    letter-spacing: -0.01em; cursor: pointer; border: none;
    box-shadow: 0 1px 2px rgba(255,92,71,0.2), 0 8px 24px rgba(255,92,71,0.28);
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(255,92,71,0.2), 0 18px 40px rgba(255,92,71,0.38);
  }

  .nav-link {
    font-family: 'Satoshi', sans-serif; font-size: 14px; font-weight: 500;
    color: var(--ink); text-decoration: none; opacity: 0.45; transition: opacity 0.15s;
  }
  .nav-link:hover { opacity: 1; }

  /* System horizontal scroll */
  .system-scroll {
    display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch; padding-bottom: 8px;
    scrollbar-width: none;
  }
  .system-scroll::-webkit-scrollbar { display: none; }
  .system-scroll-card {
    scroll-snap-align: start; flex-shrink: 0;
    width: calc(50% - 8px);
  }

  /* Waitlist form */
  .waitlist-input {
    flex: 1; min-width: 0;
    background: #fff; border: 1px solid var(--line); border-radius: 10px;
    padding: 14px 16px; font-family: 'Satoshi', sans-serif; font-size: 15px;
    color: var(--ink); outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .waitlist-input:focus { border-color: var(--coral); box-shadow: 0 0 0 3px rgba(255,92,71,0.12); }
  .waitlist-input::placeholder { color: var(--muted-2); }

  @media (max-width: 820px) {
    .hero-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
    .stats-grid { grid-template-columns: 1fr !important; }
    .hide-mob   { display: none !important; }
    .hero-h1    { font-size: clamp(32px,9vw,50px) !important; }
    .compare-table { font-size: 12px !important; }
    .system-scroll-card { width: 85vw !important; }
    .waitlist-form { flex-direction: column !important; }
  }
`;
