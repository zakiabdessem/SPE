"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./horizontalSection.scss";
import { useInView } from "framer-motion";
import useScrollToTop from "../useScrollToTop";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection: React.FC = () => {
  useScrollToTop();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const races = document.querySelector(".races") as HTMLElement;

    if (!races) {
      console.error("Races element not found");
      return;
    }

    const getScrollAmount = (): number => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "slow",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      endTrigger: ".next-section",
      start: `top ${window.innerWidth > 1200 ? "20%" : "40%"}`,
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      markers: false,
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  //refresh page when end of resizing to fix gspa scroll trigger
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="section-container overflow-x-auto">
      <section ref={ref}>
        <div className="space-20vh"></div>
        <div className="racesWrapper">
          <div className="races">
            <h2
              className="pl-4"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              #WEARE
              <span
                style={{
                  color: "var(--color-primary)",
                }}>
                SPE
              </span>
            </h2>
            <h2>Means</h2>
            <h2>Technical</h2>
            <h2>Knowledge</h2>
            {/*<h2 className="flex justify-center items-center">
              <AboutSection />
              </h2>*/}
          </div>
        </div>
        {/*<div className="space-50vh"></div>*/}
      </section>
    </div>
  );
};

export default HorizontalSection;
