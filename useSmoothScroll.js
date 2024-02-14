"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useSmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector("main");

    if (container) {
      gsap.set(container, { overflow: "hidden" });

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
          markers: false,
        },
      });
    }

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
