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
    <div className="section-container overflow-x-hidden">
      <section>
        <div className="space-20vh"></div>
        <div className="racesWrapper">
          <div className="races">
            <h2 className="pl-4">
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
      <section className="next-section">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit
        finibus venenatis. Mauris consectetur blandit sagittis. Nam sed luctus
        diam. Morbi in magna blandit, lacinia nisl non, tincidunt mauris.
        Pellentesque vulputate quam at ligula lacinia, ut hendrerit metus
        posuere. Ut consectetur ipsum at aliquet vulputate. Donec hendrerit,
        orci in viverra ultrices, mi sem pulvinar mauris, vel mollis neque ante
        mollis odio. Suspendisse mollis molestie quam non accumsan. Praesent
        eros ante, gravida et lorem nec, vulputate congue diam. Curabitur
        elementum ante vel felis sollicitudin, non dignissim odio dapibus.
        Phasellus eros lorem, posuere ornare ipsum vel, sagittis convallis
        turpis. Cras hendrerit vestibulum sem, sed semper ipsum congue pulvinar.
        Ut congue sem pretium libero ultrices suscipit. Etiam dolor diam,
        tincidunt sit amet pretium eget, mollis sit amet felis.
      </section>
    </div>
  );
};

export default HorizontalSection;
