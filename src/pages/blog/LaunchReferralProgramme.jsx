import BlogLayout from "../../components/BlogLayout";

export default function LaunchReferralProgramme() {
  return (
    <BlogLayout
      title="How to Launch a Referral Programme on Shopify in 2026"
      dek="A practical playbook: the offer, the launch sequence, the first 30 days, and the mistakes that kill new referral programmes."
      date="April 2026"
      readTime="7 min read"
      slug="launch-referral-programme-shopify"
    >
      <p>
        Most referral programmes don't fail because the idea is bad. They fail because the launch is bad. The app gets installed, a banner goes on the homepage, and three months later the dashboard shows a handful of referrals from the founder's friends.
      </p>
      <p>
        This is the playbook we use when launching a referral programme on Shopify in 2026. It's the same sequence we recommend to every merchant onboarding to marra.
      </p>

      <h2>Why referral programmes work (the psychology)</h2>
      <p>
        Roughly <strong>92% of consumers trust a recommendation from a friend over any other form of advertising</strong>. That number has barely moved in a decade and it's the entire reason referrals work. You're not buying impressions, you're borrowing trust.
      </p>
      <p>
        The other thing referrals get right is timing. A customer who has just received their order is at peak excitement — they liked the product enough to buy it, the experience is fresh, and they're psychologically primed to talk about it. That window closes fast. A good referral programme catches it.
      </p>

      <h2>What makes a good referral offer</h2>
      <p>
        The single most-debated question in referrals is "what should the offer be?" Here's the practical version.
      </p>

      <h3>Flat amount vs percentage</h3>
      <p>
        <strong>Flat amounts almost always outperform percentages.</strong> "£10 off" is concrete, instantly understood, and feels like real money. "10% off" is abstract — the customer has to calculate it against a basket they haven't built yet.
      </p>
      <p>
        Use percentages only when your average order value is high enough that a flat discount would feel insulting (above £150 or so).
      </p>

      <h3>Two-sided rewards</h3>
      <p>
        Both the referrer and the friend should get something. A one-sided programme — only the friend gets a discount — generates referrals but no advocacy. A one-sided programme that only rewards the referrer feels grubby. Two-sided is the default for a reason.
      </p>

      <h3>Tiered or flat?</h3>
      <p>
        Don't tier it on day one. Tiered programmes ("refer 5 friends and unlock VIP") are powerful but they introduce complexity that confuses customers. Launch flat. Once you have 100+ referrers, add a top-tier reward as a bonus.
      </p>

      <h2>The Klaviyo launch sequence</h2>
      <p>
        Don't launch with a homepage banner. Launch with a dedicated email to your existing customers — the people who already love you and are most likely to refer.
      </p>
      <ul>
        <li><strong>Email 1:</strong> "We're starting a referral programme. Here's why, here's the reward." Send to your full list.</li>
        <li><strong>Email 2 (3 days later):</strong> Reminder + your personal referral link, only to people who didn't click email 1.</li>
        <li><strong>Email 3 (1 week later):</strong> Social proof — "X friends have already joined" — to people who clicked but didn't share.</li>
      </ul>
      <p>
        With marra, the campaign URL is personalised automatically. One link in Klaviyo, every recipient gets their own.
      </p>

      <h2>What to expect in the first 30 days</h2>
      <p>
        Realistic numbers for a first-time launch on a Shopify store doing 1,000 orders/month:
      </p>
      <ul>
        <li>Days 1–7: launch email goes out, ~5% of recipients click their link, ~30% of those share it.</li>
        <li>Days 7–14: first referred orders arrive. Conversion rate on referred traffic is typically 3–5× normal.</li>
        <li>Days 14–30: word of mouth compounds. Referred customers become referrers themselves.</li>
        <li>Day 30: aim for 5–10% of new orders coming from referrals. That's a healthy starting baseline.</li>
      </ul>
      <p>
        The biggest variable is your existing customer love. A brand with strong NPS will see 3× these numbers. A brand whose customers are lukewarm will see less.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Hiding the programme.</strong> A footer link nobody clicks. Put it in checkout, post-purchase, and the order confirmation email.</li>
        <li><strong>Asking customers to register.</strong> Friction kills programmes. Auto-enrol every customer the moment they buy.</li>
        <li><strong>Making the reward too small.</strong> £2 off feels insulting. Make the offer big enough that the customer would actually want it.</li>
        <li><strong>Forgetting accelerated checkout.</strong> If your discount injection breaks on Shop Pay, the friend never sees the price they were promised. Use a referral app built on Shopify's Discount Function.</li>
        <li><strong>Measuring vanity metrics.</strong> Number of links shared doesn't matter. Revenue from referred orders is the only metric that does.</li>
      </ul>

      <h2>Step-by-step with marra</h2>
      <ol style={{ listStyle: "decimal", paddingLeft: 22, margin: "0 0 24px 0" }}>
        <li style={{ marginBottom: 8 }}>Install marra from the Shopify App Store (under 10 minutes).</li>
        <li style={{ marginBottom: 8 }}>Set your reward — £10 off for the friend, £10 store credit for the referrer is a good default.</li>
        <li style={{ marginBottom: 8 }}>Copy your Klaviyo campaign URL from the marra dashboard.</li>
        <li style={{ marginBottom: 8 }}>Build the launch email in Klaviyo. Drop the URL into the CTA button.</li>
        <li style={{ marginBottom: 8 }}>Send to your existing customer list.</li>
        <li style={{ marginBottom: 8 }}>Watch the dashboard. Send the follow-up emails. Iterate the offer if needed.</li>
      </ol>

      <p>
        That's the whole launch. The complexity people add to referral programmes is almost always self-inflicted. Keep it simple, ship it, watch what happens, then improve.
      </p>
    </BlogLayout>
  );
}
