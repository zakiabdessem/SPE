import React from "react";
import "./aboutSection.scss";

function AboutSection() {
  return (
    <section className="next-section" id="about">
      <div className="container">
        <div className="about">
          <div
            className="about-img"
            data-sr-id={6}
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
            }}>
            <i>
              <img src="assets/images/about.png" alt="" />
            </i>
          </div>
          <div className="about-content">
            <h3
              data-sr-id={4}
              style={{
                visibility: "visible",
                opacity: 1,
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transition:
                  "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
              }}>
              Get to Know Us
            </h3>
            <h2
              data-sr-id={5}
              style={{
                visibility: "visible",
                opacity: 1,
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transition:
                  "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
              }}>
              Who are we?
            </h2>
            <div
              className="d1"
              data-sr-id={7}
              style={{
                visibility: "visible",
                opacity: 1,
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transition:
                  "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.7s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.7s",
              }}>
              <p className="p1">
                Established on October 15th, 2019, the SPE-University of Batna 2
                Student Chapter proudly stands as the third chapter in Algeria,
                following OUERGLA and BOUMERDES. Since our inception, we have
                been dedicated to fostering a community of passionate
                individuals committed to the exploration, development, and
                production of oil and gas resources.
              </p>
            </div>
            <div
              className="d2"
              data-sr-id={8}
              style={{
                visibility: "visible",
                opacity: 1,
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transition:
                  "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.8s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.8s",
              }}>
              <p className="p2">
                Welcome to SPE - where innovation meets excellence in petroleum
                engineering. Join our global community of students,
                professionals, and educators advancing energy exploration,
                production, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
