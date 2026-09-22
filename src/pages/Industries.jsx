import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import "./industries.css";

// Icon IDs below are the same lordicon assets already verified working
// elsewhere in this codebase (Home, About, Service, Contact) — reused here
// rather than guessing new, unverified icon IDs.
const VERIFIED_ICONS = [
  "https://cdn.lordicon.com/jeuxydnh.json",
  "https://cdn.lordicon.com/eaegfqtv.json",
  "https://cdn.lordicon.com/fjvfsqea.json",
  "https://cdn.lordicon.com/jdgfsfzr.json",
  "https://cdn.lordicon.com/fwkrbvja.json",
  "https://cdn.lordicon.com/vqhlecvy.json",
  "https://cdn.lordicon.com/kxnplube.json",
  "https://cdn.lordicon.com/ggirntso.json",
];

const INDUSTRIES = [
  {
    name: "Construction",
    icon: VERIFIED_ICONS[0],
    description:
      "Project galleries, service-area maps, and instant quote requests that turn site visitors into estimates.",
  },
  {
    name: "Healthcare",
    icon: VERIFIED_ICONS[1],
    description:
      "Appointment requests, provider bios, and privacy-conscious forms patients actually trust.",
  },
  {
    name: "Education",
    icon: VERIFIED_ICONS[2],
    description:
      "Admissions flows, program comparisons, and event calendars built for prospective families.",
  },
  {
    name: "Hotels",
    icon: VERIFIED_ICONS[3],
    description:
      "Room showcases, booking widgets, and location guides that convert browsers into reservations.",
  },
  {
    name: "Restaurants",
    icon: VERIFIED_ICONS[4],
    description:
      "Live menus, table reservations, and delivery links front and center on every device.",
  },
  {
    name: "Real Estate",
    icon: VERIFIED_ICONS[5],
    description:
      "Searchable listings, mortgage calculators, and agent profiles that keep buyers on your brand.",
  },
  {
    name: "Manufacturing",
    icon: VERIFIED_ICONS[6],
    description:
      "Product catalogs, spec sheets, and B2B inquiry forms built for long sales cycles.",
  },
  {
    name: "Retail",
    icon: VERIFIED_ICONS[7],
    description:
      "Fast, filterable storefronts with checkout flows designed to reduce cart abandonment.",
  },
  {
    name: "Finance",
    icon: VERIFIED_ICONS[0],
    description:
      "Secure, compliance-aware layouts that build trust before a single form is filled out.",
  },
  {
    name: "Agriculture",
    icon: VERIFIED_ICONS[2],
    description:
      "Straightforward sites that showcase produce, equipment, or services to buyers and partners.",
  },
  {
    name: "Logistics",
    icon: VERIFIED_ICONS[5],
    description:
      "Shipment tracking pages, service-area coverage, and quote requests built for dispatch teams.",
  },
  {
    name: "Startups",
    icon: VERIFIED_ICONS[7],
    description:
      "Fast-turnaround launch sites that scale as fundraising, hiring, and product evolve.",
  },
];

export function Industries() {
  useSlideUp();

  return (
    <>
      <title>Industries We Serve</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Industries</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Built For Your
                <br />
                Industry, Not Generic.
              </h1>
            </div>
            <p>12 Industries. One Development Standard.</p>
          </div>
        </section>

        <section className="section-2-industries">
          <div className="industries-grid">
            {INDUSTRIES.map((industry) => (
              <div className="industry-card slide-up" key={industry.name}>
                <div className="industry-icon">
                  <lord-icon
                    src={industry.icon}
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#0000cc,secondary:#0000cc"
                    style={{ width: "3.4rem", height: "3.4rem" }}
                  ></lord-icon>
                </div>
                <h4>{industry.name}</h4>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-3-industries slide-up">
          <div className="cta-card">
            <h2>
              Don't see your <span>industry?</span>
            </h2>
            <p>We build for businesses of every kind — tell us what you're working with.</p>
            <Link to="/contact">
              <button className="btn-contact">Start a Conversation</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
