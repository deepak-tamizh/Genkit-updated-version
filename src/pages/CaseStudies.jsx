import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ProjectThumbnail } from "../components/ProjectThumbnail";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import { PROJECTS } from "../data/projects";
import "./case-studies.css";

export function CaseStudies() {
  useSlideUp();

  return (
    <>
      <title>Case Studies</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/eaegfqtv.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Case Studies</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                The Story Behind
                <br />
                Every Result.
              </h1>
            </div>
            <p>Challenge. Solution. Impact.</p>
          </div>
        </section>

        <section className="section-2-case-list">
          <div className="case-list-grid">
            {PROJECTS.map((project) => (
              <Link
                to={`/case-studies/${project.id}`}
                className="case-preview-card slide-up"
                key={project.id}
              >
                <div className="case-preview-thumb">
                  <ProjectThumbnail
                    layout={project.layout}
                    accent={project.accent}
                    title={project.name}
                  />
                  <span
                    className="case-preview-pill"
                    style={{ color: project.accent, borderColor: project.accent }}
                  >
                    {project.industry}
                  </span>
                </div>
                <div className="case-preview-body">
                  <h4>{project.name}</h4>
                  <p>{project.challenge.slice(0, 120)}&hellip;</p>
                  <div className="case-preview-footer">
                    <span className="case-preview-result">{project.headlineResult}</span>
                    <span className="case-preview-cta">
                      Read Case Study <span className="arrow">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
