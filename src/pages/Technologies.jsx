import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import "./technologies.css";

// Each technology is rendered as a simple monogram badge in its official
// brand color rather than an imported logo file — this keeps the page fast,
// self-contained (no external logo CDN to depend on), and avoids
// reproducing any trademarked logo artwork.
const CATEGORIES = [
  {
    name: "Frontend",
    headingMain: "Front",
    headingAccent: "end",
    blurb: "The interfaces your users actually see and interact with.",
    items: [
      { name: "HTML", code: "HTML", bg: "#e44d26", color: "#fff" },
      { name: "CSS", code: "CSS", bg: "#264de4", color: "#fff" },
      { name: "JavaScript", code: "JS", bg: "#f7df1e", color: "#222" },
      { name: "React", code: "⚛", bg: "#20232a", color: "#61dafb" },
      { name: "Next.js", code: "N", bg: "#000000", color: "#fff" },
    ],
  },
  {
    name: "Backend",
    headingMain: "Back",
    headingAccent: "end",
    blurb: "The server-side logic that powers real functionality.",
    items: [
      { name: "Django", code: "Dj", bg: "#092e20", color: "#fff" },
      { name: "Flask", code: "Fl", bg: "#000000", color: "#fff" },
      { name: "Node.js", code: "⬡", bg: "#339933", color: "#fff" },
    ],
  },
  {
    name: "Database",
    headingMain: "Database",
    headingAccent: "Stack",
    blurb: "Where your data lives, structured and ready to scale.",
    items: [
      { name: "MySQL", code: "My", bg: "#4479a1", color: "#fff" },
      { name: "PostgreSQL", code: "Pg", bg: "#336791", color: "#fff" },
      { name: "MongoDB", code: "Mo", bg: "#47a248", color: "#fff" },
      { name: "Supabase", code: "Su", bg: "#3ecf8e", color: "#0b3b2e" },
    ],
  },
  {
    name: "Cloud",
    headingMain: "Cloud",
    headingAccent: "Platforms",
    blurb: "Reliable infrastructure to host and scale every project.",
    items: [
      { name: "AWS", code: "AWS", bg: "#ff9900", color: "#111" },
      { name: "Azure", code: "Az", bg: "#0078d4", color: "#fff" },
      { name: "Google Cloud", code: "GCP", bg: "#4285f4", color: "#fff" },
    ],
  },
  {
    name: "Tools",
    headingMain: "Developer",
    headingAccent: "Tools",
    blurb: "The workflow behind every clean handoff and deployment.",
    items: [
      { name: "Git", code: "Git", bg: "#f05032", color: "#fff" },
      { name: "GitHub", code: "Hub", bg: "#181717", color: "#fff" },
      { name: "Docker", code: "Dk", bg: "#2496ed", color: "#fff" },
      { name: "Figma", code: "Fig", bg: "#a259ff", color: "#fff" },
      { name: "Postman", code: "Pm", bg: "#ff6c37", color: "#fff" },
    ],
  },
];

export function Technologies() {
  useSlideUp();

  return (
    <>
      <title>Technologies</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/ggirntso.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Technologies</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                The Stack Behind
                <br />
                Every Build.
              </h1>
            </div>
            <p>Modern Tools. Proven Results.</p>
          </div>
        </section>

        <section className="section-2-tech">
          {CATEGORIES.map((category) => (
            <div className="tech-category slide-up" key={category.name}>
              <div className="tech-category-heading">
                <h2>
                  {category.headingMain} <span>{category.headingAccent}</span>
                </h2>
                <p>{category.blurb}</p>
              </div>

              <div className="tech-badge-row">
                {category.items.map((tech) => (
                  <div className="tech-badge" key={tech.name}>
                    <div
                      className="tech-badge-icon"
                      style={{ backgroundColor: tech.bg, color: tech.color }}
                    >
                      {tech.code}
                    </div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section-3-tech slide-up">
          <div className="cta-card">
            <h2>
              Need something <span>specific?</span>
            </h2>
            <p>If your project needs a particular framework or platform, we can work with it.</p>
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
