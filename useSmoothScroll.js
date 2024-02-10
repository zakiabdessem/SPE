"use client"
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useSmoothScroll = () => {
  useEffect(() => {
    // Ensure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector("main");

    if (container) {
      // Set the container to a fixed position to hijack the native scroll
      gsap.set(container, { overflow: "hidden" });

      // Create a smooth scrolling effect using GSAP
      gsap.to(container, {
        y: () =>
          -(container.scrollHeight - document.documentElement.clientHeight),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
      });
    }

    // Cleanup function to reset styles
    return () => {
      gsap.killTweensOf(container);
      if (container) {
        gsap.set(container, { clearProps: "overflow" });
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};

export default useSmoothScroll;
