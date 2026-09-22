import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import "./pricing.css";

const PACKAGES = [
  {
    id: "basic",
    name: "Basic Website",
    tagline: "A clean, professional online presence.",
    price: "$499",
    priceNote: "starting at",
    timeline: "1–2 weeks",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic on-page SEO",
      "1 round of revisions",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "business",
    name: "Business Website",
    tagline: "For growing businesses that need more depth.",
    price: "$1,299",
    priceNote: "starting at",
    timeline: "2–4 weeks",
    features: [
      "Up to 10 pages",
      "Custom UI design",
      "Blog / news section",
      "Advanced SEO setup",
      "Google Analytics integration",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Website",
    tagline: "Our most complete package for established brands.",
    price: "$2,499",
    priceNote: "starting at",
    timeline: "4–6 weeks",
    features: [
      "Up to 20 pages",
      "Custom animations & interactions",
      "CMS integration",
      "Multi-language ready",
      "Performance optimization",
      "Priority support",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    tagline: "A full online store built to convert.",
    price: "$3,499",
    priceNote: "starting at",
    timeline: "6–8 weeks",
    features: [
      "Product catalog & filtering",
      "Secure checkout integration",
      "Inventory management",
      "Order & customer dashboard",
      "Payment gateway integration",
      "Abandoned-cart recovery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "custom",
    name: "Custom Website",
    tagline: "Tailored architecture for unique requirements.",
    price: "Custom Quote",
    priceNote: "scoped to your project",
    timeline: "Varies by scope",
    features: [
      "Tailored architecture & tech stack",
      "Custom integrations & APIs",
      "Dedicated project manager",
      "Scalable infrastructure planning",
      "Ongoing SLA-based support",
    ],
    cta: "Request a Quote",
    popular: false,
  },
];

const ADDONS = [
  { name: "Extra Page", price: "$99 / page" },
  { name: "Logo Design", price: "$199" },
  { name: "Content Writing", price: "$49 / page" },
  { name: "SEO Growth Package", price: "$299 / mo" },
  { name: "Google Ads Setup", price: "$249" },
  { name: "Website Maintenance", price: "$99 / mo" },
  { name: "Speed Optimization Audit", price: "$199" },
  { name: "Business Email Setup", price: "$49" },
];

export function Pricing() {
  useSlideUp();

  return (
    <>
      <title>Pricing</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/fjvfsqea.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Pricing</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Simple Pricing,
                <br />
                Serious Value.
              </h1>
            </div>
            <p>Transparent Packages. No Hidden Costs.</p>
          </div>
        </section>

        <section className="section-2-pricing">
          <div className="pricing-grid">
            {PACKAGES.map((pkg) => (
              <div
                className={`pricing-card slide-up ${pkg.popular ? "popular" : ""}`}
                key={pkg.id}
              >
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{pkg.name}</h3>
                <p className="pricing-tagline">{pkg.tagline}</p>

                <div className="price-block">
                  <span className="price">{pkg.price}</span>
                  <span className="price-note">{pkg.priceNote}</span>
                </div>

                <div className="timeline-row">
                  <span className="timeline-label">Timeline</span>
                  <span className="timeline-value">{pkg.timeline}</span>
                </div>

                <ul className="feature-list">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <Link to="/request-quote" className="pricing-cta">
                  <button className={pkg.popular ? "btn-contact" : "btn-service"}>
                    {pkg.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section-3-pricing slide-up">
          <div className="tagline">
            <h2>
              Optional <span>Add-ons</span>
            </h2>
          </div>
          <p className="addons-subtitle">Extend any package with these à la carte upgrades.</p>

          <div className="addons-grid">
            {ADDONS.map((addon) => (
              <div className="addon-card" key={addon.name}>
                <span className="addon-name">{addon.name}</span>
                <span className="addon-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-4-pricing slide-up">
          <div className="cta-card">
            <h2>
              Not sure which package <span>fits?</span>
            </h2>
            <p>Tell us about your project and we'll recommend the right starting point.</p>
            <Link to="/contact">
              <button className="btn-contact">Talk to Us</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
