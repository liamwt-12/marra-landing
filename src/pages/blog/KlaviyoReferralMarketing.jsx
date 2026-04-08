import BlogLayout from "../../components/BlogLayout";

export default function KlaviyoReferralMarketing() {
  return (
    <BlogLayout
      title="How to Use Klaviyo for Referral Marketing (The Complete Guide)"
      dek="Klaviyo is the fastest place to launch a Shopify referral programme. Here's the campaign URL, the segmentation, the flows, and the measurement."
      date="April 2026"
      readTime="8 min read"
      slug="klaviyo-referral-marketing"
    >
      <p>
        If you're running a Shopify store on Klaviyo, you've already got everything you need to launch a referral programme — except the referral programme itself. Klaviyo handles the targeting, the personalisation, the flows, and the measurement. All you need is a way to turn an email click into an enrolled referrer.
      </p>
      <p>
        This is the complete guide to running referral marketing through Klaviyo in 2026.
      </p>

      <h2>Why Klaviyo is the perfect referral launch platform</h2>
      <p>
        Three things make Klaviyo the right place to start.
      </p>
      <p>
        <strong>It already knows who your customers are.</strong> Klaviyo has every customer's email, purchase history, and engagement signal. You don't need to upload a list, sync a CRM, or build a separate audience.
      </p>
      <p>
        <strong>It can personalise per recipient at send time.</strong> A single Klaviyo campaign can include dynamic content per recipient — the most powerful version of which is a personalised URL.
      </p>
      <p>
        <strong>It has deliverability you actually pay for.</strong> Cold-emailing your own customers with a "we're starting a referral programme" message is the fastest way to send your warm list to spam. Klaviyo deliverability handles this for you.
      </p>

      <h2>The personalised campaign URL explained</h2>
      <p>
        Here's the trick that makes the whole thing work:
      </p>
      <ul>
        <li>marra exposes a single URL: <code>https://your-store.myshopify.com/apps/marra/refer?email={`{{ person.email | url_encode }}`}</code></li>
        <li>You paste it into your Klaviyo campaign CTA button — once, in a template.</li>
        <li>Klaviyo replaces <code>{`{{ person.email }}`}</code> with each recipient's actual email at send time.</li>
        <li>When the customer clicks, marra reads the email parameter, looks up (or creates) their referral profile, and drops them into their personal portal.</li>
      </ul>
      <p>
        One URL. Every recipient gets their own. No CSV upload, no per-customer setup, no pre-registration.
      </p>

      <h2>Setting up the referral campaign in Klaviyo</h2>
      <p>
        The launch campaign itself is straightforward. Here's the structure that works.
      </p>

      <h3>Subject line</h3>
      <p>
        Don't be cute. The subject line should clearly say what's happening: <em>"We're starting a referral programme — and you're getting £10."</em>
      </p>

      <h3>Body</h3>
      <p>
        Three sections. <strong>Why</strong> ("our best customers are already telling their friends — we want to thank you"). <strong>What</strong> ("£10 off for them, £10 store credit for you, every time"). <strong>How</strong> ("click below to grab your personal link").
      </p>

      <h3>CTA button</h3>
      <p>
        One button. The personalised marra URL goes here. The button text is "Get my referral link" — direct, action-led, no ambiguity.
      </p>

      <h3>Audience</h3>
      <p>
        Send to your full active customer list (anyone who has bought in the last 12 months and is opted-in). Resist the urge to over-segment on the launch — you're trying to maximise reach.
      </p>

      <h2>Segmenting by referral activity</h2>
      <p>
        After the launch, marra syncs each customer's referral activity back to their Klaviyo profile as custom properties. This lets you build segments and trigger flows based on real behaviour.
      </p>
      <ul>
        <li><strong>Top referrers (3+ friends).</strong> Send a VIP thank-you flow with extra credit or early access to new products.</li>
        <li><strong>Has shared but no conversions.</strong> Their friends clicked but didn't buy. Send a "your friends are nearly there" nudge with a slightly bigger offer.</li>
        <li><strong>Has clicked the link but never shared.</strong> Re-engage with a "did you know?" email reminding them of the reward.</li>
        <li><strong>Top referrer this month.</strong> One-off recognition flow — surprise and delight.</li>
      </ul>

      <h2>Follow-up flows for active referrers</h2>
      <p>
        The biggest mistake brands make with Klaviyo + referrals is launching with one campaign and never following up. The launch email creates referrers; the flows compound them.
      </p>
      <p>
        A good follow-up sequence has three triggers:
      </p>
      <ul>
        <li><strong>Customer placed first order:</strong> 7 days later, send the referral invite. They're at peak excitement.</li>
        <li><strong>Customer became a referrer:</strong> immediate confirmation + their personal link + suggested share copy.</li>
        <li><strong>Friend converted via referral:</strong> "You earned £10" notification — the dopamine hit that makes them refer again.</li>
      </ul>

      <h2>Measuring referral revenue in Klaviyo</h2>
      <p>
        Klaviyo's revenue attribution can show you the value of the referral campaign and the referral flows. Combined with marra's dashboard, you get two views:
      </p>
      <ul>
        <li><strong>Klaviyo:</strong> revenue attributed to the launch campaign and follow-up flows.</li>
        <li><strong>marra:</strong> revenue attributed to actual referred orders (every order that came from a personalised referral link).</li>
      </ul>
      <p>
        Together they tell you whether your referral marketing is working. The key metric is <strong>referred revenue per email subscriber</strong>. Anything north of £0.50 is good. Anything north of £2 means you have a real engine running.
      </p>

      <h2>The honest summary</h2>
      <p>
        Klaviyo plus marra is the fastest path from "we should run a referral programme" to "we have a referral programme that's making us money." Personalised URL, auto-enrolment on click, two-way profile sync, real revenue attribution. None of it requires CSVs, opt-in forms, or manual setup. Click, send, measure.
      </p>
    </BlogLayout>
  );
}
