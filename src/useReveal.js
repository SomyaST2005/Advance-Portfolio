import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe existing elements
    const observe = () => {
      document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe when new elements are added (handles dynamic content)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
