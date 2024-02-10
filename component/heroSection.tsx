import React from "react";
import "./heroSection.scss";
export default function HeroSecetion() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div
            className="hero-content"
            data-sr-id="2"
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
            }}>
            <h1>SPE UB2 Student Chapter</h1>
            <h2>
              #We Are <span className="block">SPE</span>
            </h2>
            <p>
              Where innovation meets excellence in petroleum engineering. Join
              our global community of students, professionals, and educators
              advancing energy exploration, production, and sustainability.
            </p>

            <div className="hero-buttons">
              <a
                href="https://www.spe.org/en/chapter/6313"
                className="btn btn-platform"
                target="_blank"
                rel="noopener noreferrer">
                Our Platform
                <i className="fa-solid fa-arrow-right rightarrow-icon"></i>
              </a>
            </div>
          </div>

          <div
            className="hero-img"
            data-sr-id="3"
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
              borderRadius: "0",
              overflow: "hidden",
            }}>
            <img
              id="hero-img"
              src="assets/images/Africa.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
