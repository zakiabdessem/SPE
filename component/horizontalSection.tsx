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
      start: "top 30%",
      end: () => `+=${getScrollAmount() * -1}`, //
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

        <div className="racesWrapper">
          <div className="races">
            <h2>WeAre<span style={{
              color: "var(--color-primary)",
            }}>SPE</span></h2>
            <h2>means</h2>
            <h2>Technical</h2>
            <h2>Knowledge</h2>

          </div>
        </div>

      </section>
    </div>
  );
};

export default HorizontalSection;
