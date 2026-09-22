import { useEffect, useRef, useState } from "react";

export function CounterSection() {

  const sectionRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  const startCounting = () => {
    const counters = sectionRef.current.querySelectorAll(".count");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      let duration = 1500;
      if (target <= 10) duration = 7000;
      else if (target <= 100) duration = 2000;
      else if (target <= 500) duration = 1800;

      const increment = Math.max(1, Math.ceil(target / (duration / 20)));

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count + "+";
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);
  }, [hasCounted]);

  return (
    <div className="exp-div" ref={sectionRef}>
      <div>
        <div>
            <h1 className="count" data-target="7">0</h1>
            <span>Months</span>
        </div>
        <p>Trusted Results</p>
      </div>

      <div>
        <h1 className="count" data-target="10">0</h1>
        <p>Creative & Tech Talents</p>
      </div>

      <div>
        <div>
            <h1 className="count" data-target="5">0</h1>
            <span>Projects</span>
        </div>
        <p>Completed With Precision</p>
      </div>

      <div>
        <h1 className="count" data-target="2000">0</h1>
        <p>Hours of Expertise</p>
      </div>
    </div>
  );
}
