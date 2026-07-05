import { useEffect, useRef } from "react";

/**
 * Adds a `visible` class to the element once it scrolls into view.
 * Pair with the global `.reveal` class for a fade/slide-in effect.
 */
export const useReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
