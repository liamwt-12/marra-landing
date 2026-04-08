import BlogLayout from "../../components/BlogLayout";

export default function ReferralCandyShopPay() {
  return (
    <BlogLayout
      title="Does ReferralCandy Work with Shop Pay? (The Honest Answer)"
      dek="If you use Shop Pay — and most UK Shopify stores do — ReferralCandy is silently dropping a third of your referral discounts. Here's what's happening, and the fix."
      date="April 2026"
      readTime="4 min read"
      slug="referralcandy-shop-pay"
    >
      <p>
        If you're running a Shopify store and considering ReferralCandy, you've probably wondered whether it works with Shop Pay. The short answer: <strong>no, not properly</strong>. Here's why, and what to do instead.
      </p>

      <h2>How referral discounts work on Shopify</h2>
      <p>
        Most referral apps apply discounts by intercepting the cart — they add a discount code when a customer arrives via a referral link. This works fine on standard Shopify checkout. The customer lands, the cart picks up the code, the discount appears, the order goes through, the referrer gets credit. Simple.
      </p>
      <p>
        The problem is accelerated checkouts. They don't go through the cart at all.
      </p>

      <h2>What happens with Shop Pay, Apple Pay, and Buy it Now</h2>
      <p>
        When a customer uses Shop Pay, Apple Pay, Google Pay, or the Buy it Now button, they bypass the standard cart flow entirely. They go from the product page directly to the payment sheet. There is no cart in between for an app to inject anything into.
      </p>
      <p>
        For ReferralCandy, this means: the customer clicks a referral link, intends to buy with Shop Pay, and the discount simply doesn't apply. The referral <em>appears</em> to work — the customer bought, the order completed — but the discount is lost. The friend doesn't see the price they were promised. The referrer doesn't get credit. Everyone loses. And nobody emails you about it, because to the customer it just looks like a normal price.
      </p>

      <h2>How marra solves this</h2>
      <p>
        marra uses Shopify's native Discount Function — a server-side WebAssembly function that runs inside Shopify's infrastructure in under 5 milliseconds. Because it runs <em>inside</em> Shopify (not injected by a third-party app), it applies to every checkout type:
      </p>
      <ul>
        <li>Standard checkout</li>
        <li>Shop Pay</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>Buy it Now</li>
        <li>Accelerated checkout on product pages</li>
      </ul>
      <p>
        Additionally, marra uses Shopify's native <code>/discount/</code> URL to pre-apply the discount before checkout even begins. By the time the customer hits any checkout button, the code is already in Shopify's system. There's nothing for an app to intercept and nothing to fail.
      </p>

      <h2>What this means in practice</h2>
      <p>
        If Shop Pay represents 30% of your checkout completions — a typical number for UK Shopify stores — using ReferralCandy means roughly 30% of your referral discounts silently fail. Your referrers share their links, friends try to buy, but the discount doesn't appear. Friends leave. Referrers get frustrated. Nobody tells you why.
      </p>
      <p>
        And it's worse than just losing the discount. The friend doesn't get the price they were promised, which is the fastest way to burn the trust that made the referral happen in the first place.
      </p>

      <blockquote>
        The whole point of a referral programme is that the friend trusts the referrer. The moment you break that trust at checkout, you've broken the loop.
      </blockquote>

      <h2>The bottom line</h2>
      <p>
        ReferralCandy does not reliably work with accelerated checkouts including Shop Pay. If your store uses Shop Pay — and most UK Shopify stores do — you need a referral app built on Shopify's native infrastructure, not a third-party cart injector. <strong>marra is built exactly this way.</strong>
      </p>
    </BlogLayout>
  );
}
