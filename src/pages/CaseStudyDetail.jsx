import { Link, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ProjectThumbnail } from "../components/ProjectThumbnail";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import { PROJECTS, getProjectById } from "../data/projects";
import "./case-studies.css";

export function CaseStudyDetail() {
  useSlideUp();
  const { slug } = useParams();
  const project = getProjectById(slug);

  if (!project) {
    return (
      <>
        <title>Case Study Not Found</title>
        <link rel="icon" type="image/webp" href={logoBrowser} />
        <NavBar />
        <main>
          <section className="section-1">
            <div className="space-div"></div>
            <div className="tagline-main">
              <div className="tagline">
                <h1>Case Study Not Found</h1>
              </div>
              <p>That project may have moved or been renamed.</p>
            </div>
          </section>
          <section className="not-found-cta">
            <Link to="/case-studies">
              <button className="btn-contact">Browse All Case Studies</button>
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <title>{`${project.name} Case Study`}</title>
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
              <span>Case Study</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>{project.name}</h1>
            </div>
            <p>{project.industry}</p>
          </div>
        </section>

        <section className="snapshot-bar slide-up">
          <div className="snapshot-thumb">
            <ProjectThumbnail layout={project.layout} accent={project.accent} title={project.name} />
          </div>
          <div className="snapshot-facts">
            <div className="snapshot-fact">
              <h5>Industry</h5>
              <p>{project.industry}</p>
            </div>
            <div className="snapshot-fact">
              <h5>Timeline</h5>
              <p>{project.timeline}</p>
            </div>
            <div className="snapshot-fact snapshot-fact-tech">
              <h5>Technologies</h5>
              <div className="tech-row">
                {project.tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="snapshot-fact">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo-btn">
                Live Demo ↗
              </a>
            </div>
          </div>
        </section>

        <section className="case-section slide-up">
          <h2>
            Client <span>Challenge</span>
          </h2>
          <p>{project.challenge}</p>
        </section>

        <section className="case-section slide-up">
          <h2>
            Our <span>Solution</span>
          </h2>
          <p>{project.solution}</p>
        </section>

        <section className="case-section slide-up">
          <h2>
            Development <span>Process</span>
          </h2>
          <div className="process-steps">
            {project.process.map((step, i) => (
              <div className="process-step" key={step.phase}>
                <div className="process-step-number">{i + 1}</div>
                <div>
                  <h4>{step.phase}</h4>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section slide-up">
          <h2>
            Before <span>&amp; After</span>
          </h2>
          <div className="before-after-grid">
            <div className="before-after-col before-col">
              <h5>Before</h5>
              <ul>
                {project.before.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="before-after-col after-col">
              <h5>After</h5>
              <ul>
                {project.after.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section slide-up">
          <h2>
            Results <span>Achieved</span>
          </h2>
          <div className="results-grid">
            {project.results.map((r) => (
              <div className="result-card" key={r}>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section slide-up">
          <div className="feedback-block">
            <p className="feedback-quote">&ldquo;{project.feedback.quote}&rdquo;</p>
            <p className="feedback-author">
              {project.feedback.name} <span>&mdash; {project.feedback.role}</span>
            </p>
          </div>
        </section>

        <section className="case-nav slide-up">
          <Link to={`/case-studies/${prevProject.id}`} className="case-nav-link">
            <span className="case-nav-label">&larr; Previous</span>
            <span className="case-nav-name">{prevProject.name}</span>
          </Link>
          <Link to="/case-studies" className="case-nav-all">
            All Case Studies
          </Link>
          <Link to={`/case-studies/${nextProject.id}`} className="case-nav-link case-nav-link-right">
            <span className="case-nav-label">Next &rarr;</span>
            <span className="case-nav-name">{nextProject.name}</span>
          </Link>
        </section>

        <section className="section-3-portfolio slide-up">
          <div className="cta-card">
            <h2>
              Want results like <span>this?</span>
            </h2>
            <p>Let's talk about what a project like this could look like for you.</p>
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
