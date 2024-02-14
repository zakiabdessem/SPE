"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./horizontalSection.scss";
import { useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection: React.FC = () => {
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
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      endTrigger: ".next-section",
      start: `top ${window.innerWidth > 1200 ? "20%" : "60%"}`,
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

  return (
    <div className="section-container overflow-x-hidden">
      <div className="flex flex-col justify-center items-center mb-2">
        <img
          src="assets/images/mouse.svg"
          alt="mouse"
          style={{
            height: "28px",
            width: "28px",
            marginBottom: "10px",
            transform: isInView ? "none" : "translateY(-20px)",
            opacity: isInView ? 1 : 0.1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            animation: "FloatingMouseImage 5s ease-in-out infinite",
          }}
        />
        <img
          src="assets/images/arrow-long.svg"
          alt="arrow-long"
          style={{
            height: "117px",
            width: "30px",
            marginBottom: "10px",

            transform: isInView ? "none" : "translateY(-30px)",
            opacity: isInView ? 1 : 0.2,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            animation: "FloatingMouseImage 5s ease-in-out infinite",
          }}
        />
      </div>
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
