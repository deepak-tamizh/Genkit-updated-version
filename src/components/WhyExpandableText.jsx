import { useState, useRef, useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";

export function WhyExpandableText() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("200px");
  const isMobile = useIsMobile();

  const text = `
    We're not just a service provider we're your growth partner.
    Our young and dynamic team thrives on fresh ideas, creativity, and fearless innovation.
    We believe in building honest, transparent relationships with our clients.
    With us, what you see is indeed what you get — no hidden costs, no fluff.
    We guarantee providing the best results without blowing your budget.
    Whether it's tech development, design, or marketing—we bring precision and passion to every project.
    We adapt quickly, scale efficiently, and always stay ahead of trends to give you a competitive advantage.
    Our solutions are tailored, impactful, and always driven by real results.
    Partner with us, and let's create something amazing together.
  `;

  useEffect(() => {
    if (expanded) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("195px");
    }
  }, [expanded]);

  return (
    <div className="why-text-wrapper slide-up">
      <div
        className="expandable-text"
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        <p>{text}</p>
      </div>


      {
        isMobile ?
     
          <div className="link-div">
            <span onClick={() => setExpanded(!expanded)} >
              {expanded ? "Show less" : "Learn more"}{" "}
              <span className={`arrow ${expanded ? "rotate" : ""}`}>&rarr;</span>
            </span>
          </div>
        : ""
       }

    </div>
  );
}
