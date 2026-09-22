import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Service } from "./pages/Service";
import { Portfolio } from "./pages/Portfolio";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { Pricing } from "./pages/Pricing";
import { Industries } from "./pages/Industries";
import { Technologies } from "./pages/Technologies";
import { Process } from "./pages/Process";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { RequestQuote } from "./pages/RequestQuote";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { RefundPolicy } from "./pages/RefundPolicy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Contact } from "./pages/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://cdn.lordicon.com/lordicon.js"]'
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
