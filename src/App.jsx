import { Routes, Route } from "react-router-dom";
import { CSS } from "./styles";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /privacy is served as a static file (public/privacy.html) via netlify.toml */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
