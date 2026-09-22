import { useEffect } from "react";

export default function useTypingEffect() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains("typing-effect")) {
          entry.target.classList.add("animate");
        }
      });
    });

    const elements = document.querySelectorAll(".typing-effect");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
