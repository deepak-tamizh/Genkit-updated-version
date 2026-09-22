import { useEffect } from "react";

export default function useScrollClone() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wraps = document.querySelectorAll(".scroll-wrap");

    wraps.forEach((wrap) => {
      const track = wrap.querySelector(".scroll-track");
      if (!track) return;

      // Prevent double cloning
      if (track.dataset.cloned === "true") return;

      const items = [...track.children];

      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });

      track.dataset.cloned = "true";
    });
  }, []);
}
