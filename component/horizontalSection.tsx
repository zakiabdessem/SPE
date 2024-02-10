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
      endTrigger: ".next-section",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
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
      <section>
        <div className="space-20vh"></div>
        <div className="racesWrapper">
          <div className="races">
            <h2>
              WeAre
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
          </div>
        </div>
        <div className="space-50vh"></div>
      </section>
      <section className="next-section">next section</section>
    </div>
  );
};

export default HorizontalSection;
