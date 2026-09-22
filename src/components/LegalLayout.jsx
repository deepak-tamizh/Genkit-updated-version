import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import logoBrowser from "../assets/images/logo-browser.png";
import "../pages/legal.css";

// Shared layout for Privacy Policy, Terms & Conditions, Refund Policy, and
// Cookie Policy. `sections` is an array of { id, heading, paragraphs?, list? }.
export function LegalLayout({ pageTitle, heroTitle, lastUpdated, sections }) {
  return (
    <>
      <title>{pageTitle}</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/vqhlecvy.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>{pageTitle}</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>{heroTitle}</h1>
            </div>
            <p>Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="section-2-legal">
          <div className="legal-layout">
            <nav className="legal-toc" aria-label="Table of contents">
              <span className="legal-toc-title">On this page</span>
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="legal-content">
              {sections.map((section) => (
                <div className="legal-section" id={section.id} key={section.id}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="legal-disclaimer">
                <p>
                  This page is a general template provided for convenience and does not
                  constitute legal advice. We recommend having it reviewed by a qualified
                  attorney to ensure it meets the requirements applicable to your business
                  and jurisdiction.
                </p>
              </div>

              <div className="legal-contact-note">
                <p>
                  Questions about this policy? <Link to="/contact">Get in touch with us</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
