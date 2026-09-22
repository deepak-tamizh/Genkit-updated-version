import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import { PROJECTS, CATEGORIES } from "../data/projects";
import "./portfolio.css";

export function Portfolio() {
  useSlideUp();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <title>Portfolio</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/fwkrbvja.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Portfolio</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Work That Speaks
                <br />
                For Itself.
              </h1>
            </div>
            <p>Real Projects. Real Industries. Real Results.</p>
          </div>
        </section>

        <section className="section-2-portfolio">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="no-results">No projects in this category yet — check back soon.</p>
          )}
        </section>

        <section className="section-3-portfolio slide-up">
          <div className="cta-card">
            <h2>
              Have a project in <span>mind?</span>
            </h2>
            <p>Tell us about it and we'll show you how we'd approach it.</p>
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
