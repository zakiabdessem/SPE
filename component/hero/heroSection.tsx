import { useRef } from "react";
import Image from "next/image";

import "./heroSection.scss";
import { useInView } from "framer-motion";
import heroImage from "@/public/assets/images/Africa.png";

export default function HeroSecetion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="hero" ref={ref}>
      <div className="container">
        <div className="hero">
          <div
            className="hero-content"
            data-sr-id="2"
            style={{
              transform: isInView ? "none" : "translateX(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
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
              transform: isInView ? "none" : "translateX(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}>
            <Image
              id="hero-img"
              src={heroImage}
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
