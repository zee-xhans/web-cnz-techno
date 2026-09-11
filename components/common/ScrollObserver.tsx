"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Check elements immediately and attach IntersectionObserver
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "50px 0px 50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const observeAll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or above viewport, activate immediately
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("active");
        }
        observer.observe(el);
      });
    };

    // Run on mount & path change
    observeAll();

    // Small delay to catch lazy-rendered components
    const timer = setTimeout(observeAll, 100);

    // Mutation observer to handle client-side filtered lists / tab changes
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

