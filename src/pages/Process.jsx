import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import "./process.css";

const STEPS = [
  {
    title: "Requirement Discussion",
    description:
      "We start by listening. A working session with your team to understand your goals, audience, must-have features, and what success actually looks like for this project.",
    deliverable: "Project brief & scope document",
  },
  {
    title: "Research",
    description:
      "We look at your competitors, your industry, and the technical options available, so decisions later in the project are informed rather than guessed at.",
    deliverable: "Competitive & technical research summary",
  },
  {
    title: "Wireframing",
    description:
      "Before a single color is chosen, we lay out the structure: what goes where, how a visitor moves through the site, and where every key action lives.",
    deliverable: "Low-fidelity wireframes",
  },
  {
    title: "UI Design",
    description:
      "Wireframes become real, on-brand visual designs — typography, color, imagery, and layout — refined with your feedback before a line of production code is written.",
    deliverable: "High-fidelity design mockups",
  },
  {
    title: "Development",
    description:
      "Our engineers build the approved design using the right stack for the job, writing clean, maintainable code from the first commit.",
    deliverable: "Working, feature-complete build",
  },
  {
    title: "Testing",
    description:
      "Every page is checked across browsers and devices for functionality, responsiveness, performance, and accessibility before it ever reaches you.",
    deliverable: "QA report & bug fixes",
  },
  {
    title: "Client Review",
    description:
      "We walk you through the finished build together, gather feedback, and make refinements — this is your chance to catch anything before launch.",
    deliverable: "Revision rounds & sign-off",
  },
  {
    title: "Deployment",
    description:
      "Once approved, we handle hosting, domain configuration, and a smooth production launch, with checks in place to make sure nothing breaks on the way live.",
    deliverable: "Live, production-ready site",
  },
  {
    title: "Maintenance",
    description:
      "Launch isn't the finish line. We offer ongoing monitoring, updates, and support so your site keeps working as well on day 300 as it did on day one.",
    deliverable: "Ongoing support plan",
  },
];

export function Process() {
  useSlideUp();

  return (
    <>
      <title>Development Process</title>
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
              <span>Our Process</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                A Clear Path,
                <br />
                Start To Finish.
              </h1>
            </div>
            <p>No Guesswork. No Surprises.</p>
          </div>
        </section>

        <section className="section-2-process">
          <div className="process-timeline">
            {STEPS.map((step, i) => (
              <div className="process-step-full slide-up" key={step.title}>
                <div className="process-step-marker">
                  <div className="process-step-number">{i + 1}</div>
                  {i < STEPS.length - 1 && <div className="process-step-line"></div>}
                </div>
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="process-deliverable">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-3-process slide-up">
          <div className="cta-card">
            <h2>
              Ready to start <span>step one?</span>
            </h2>
            <p>Let's talk through your project and see where it fits in this process.</p>
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
