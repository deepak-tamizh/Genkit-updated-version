import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectThumbnail } from "./ProjectThumbnail";

export function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="project-card slide-up">
      <div className="thumb-wrap">
        <ProjectThumbnail layout={project.layout} accent={project.accent} title={project.name} />
        <span className="industry-pill" style={{ color: project.accent, borderColor: project.accent }}>
          {project.industry}
        </span>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <h4>{project.name}</h4>
          <span className="category-label" style={{ backgroundColor: project.accent }}>
            {project.category}
          </span>
        </div>

        <p className="problem-line">{project.problem}</p>

        <div className="tech-row">
          {project.tech.map((t) => (
            <span className="tech-chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="headline-result">
          <strong>{project.headlineResult}</strong>
        </div>

        <div className="card-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            Live Demo ↗
          </a>
          <span
            className={`details-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "Hide details" : "View details"}
            <span className={`arrow ${open ? "rotate" : ""}`}>&#x276F;</span>
          </span>
        </div>

        <div className="project-details" ref={contentRef} style={{ maxHeight: height }}>
          <div className="project-details-inner">
            <div>
              <h5>Problem Solved</h5>
              <p>{project.problem}</p>
            </div>

            <div>
              <h5>Key Features</h5>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5>Results Achieved</h5>
              <ul className="results-list">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <Link to={`/case-studies/${project.id}`} className="case-study-link">
              Read the full case study &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
