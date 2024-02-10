"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./horizontalSection.scss";

function HorizontalSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".wide-text", {
      x: () =>
        -(document.querySelector(".wide-text").offsetWidth - window.innerWidth), // Calculate distance to translate
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: () => "+=" + document?.querySelector(".wide-text").offsetWidth, // Dynamic end point based on text width
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div className="section-container">
      <section className="horizontal-section min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
          <h2 className="wide-text text-4xl font-bold whitespace-nowrap">
            #We Are <span className="block">SPE</span> means Technical Knowledge
          </h2>
      
      </section>
      <section className="next-section min-h-screen flex items-center justify-center bg-gray-200">
        <p>This is the next section.</p>
      </section>
    </div>
  );
}

export default HorizontalSection;
