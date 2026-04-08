import { Routes, Route } from "react-router-dom";
import { CSS } from "./styles";
import Home from "./pages/Home";
import VsReferralCandy from "./pages/VsReferralCandy";
import VsRivo from "./pages/VsRivo";
import VsSocialSnowball from "./pages/VsSocialSnowball";
import ShopifyPlusReferral from "./pages/ShopifyPlusReferral";
import KlaviyoReferralIntegration from "./pages/KlaviyoReferralIntegration";
import AppleWalletReferral from "./pages/AppleWalletReferral";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudyTwentyFirstCenturyHerbs from "./pages/CaseStudyTwentyFirstCenturyHerbs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /privacy is served as a static file (public/privacy.html) via netlify.toml */}
        <Route path="/vs/referralcandy" element={<VsReferralCandy />} />
        <Route path="/vs/rivo" element={<VsRivo />} />
        <Route path="/vs/social-snowball" element={<VsSocialSnowball />} />
        <Route path="/shopify-plus-referral" element={<ShopifyPlusReferral />} />
        <Route path="/klaviyo-referral-integration" element={<KlaviyoReferralIntegration />} />
        <Route path="/apple-wallet-referral" element={<AppleWalletReferral />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies/twenty-first-century-herbs" element={<CaseStudyTwentyFirstCenturyHerbs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
