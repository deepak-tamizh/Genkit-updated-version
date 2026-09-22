import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { RequestQuoteForm } from "../components/RequestQuoteForm";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import "./quote.css";

const WHY_ITEMS = [
  {
    title: "A response within 1 business day",
    description: "We review every request personally — no auto-replies, no waiting a week.",
  },
  {
    title: "A quote scoped to your actual project",
    description: "Not a generic price list. We factor in your budget, timeline, and requirements.",
  },
  {
    title: "No pressure, no obligation",
    description: "You'll get honest scoping and pricing, even if now isn't the right time to start.",
  },
];

export function RequestQuote() {
  useSlideUp();

  return (
    <>
      <title>Request a Quote</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/kxnplube.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Request a Quote</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Let's Scope Your
                <br />
                Project Properly.
              </h1>
            </div>
            <p>Tell Us What You Need. We'll Tell You What It Takes.</p>
          </div>
        </section>

        <section className="section-2-quote">
          <div className="quote-layout">
            <div className="quote-info-col slide-up">
              <h2>
                Why request a <span>quote?</span>
              </h2>
              <div className="why-list">
                {WHY_ITEMS.map((item) => (
                  <div className="why-item" key={item.title}>
                    <div className="why-check">&#10003;</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="quote-links">
                <p>Not sure where to start?</p>
                <Link to="/pricing">See our package pricing &rarr;</Link>
                <Link to="/process">See how we work &rarr;</Link>
              </div>
            </div>

            <div className="quote-form-col slide-up">
              <RequestQuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
