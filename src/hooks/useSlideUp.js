import { useEffect } from "react";

export default function useSlideUp() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const elements = document.querySelectorAll(".slide-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
