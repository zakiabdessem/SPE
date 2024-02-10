"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./horizontalSection.scss";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection: React.FC = () => {
  useEffect(() => {
    const races = document.querySelector(".races") as HTMLElement;

    if (!races) {
      console.error("Races element not found");
      return;
    }
    console.log(races.offsetWidth);

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
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });

    // Cleanup function to kill animations and ScrollTriggers on component unmount
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="section-container">
      <section className="horizontal-section min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="space-50vh lightBG"></div>

        <div className="racesWrapper">
          <div className="races">
            <h2>We</h2>
            <h2>Are</h2>
            <h2>SPE</h2>
            <h2>means</h2>
            <h2>Technical</h2>
            <h2>Knowledge</h2>

          </div>
        </div>

        <div className="space-100vh lightBG"></div>
      </section>
    </div>
  );
};

export default HorizontalSection;
