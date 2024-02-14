import React, { useRef } from "react";
import "./statSection.scss";
import "./horizontalSection.scss";
import { useInView } from "framer-motion";

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="lg:mb-20 sm:mb-5" id="stats" ref={ref}>
      <div className="container">
        <div
          className="statistics"
          data-sr-id={11}
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}>
          <div className="card">
            <div className="content">
              <h2 className="contact-title">100+</h2>
              <p>Events</p>
            </div>
            <div className="content">
              <h2 className="contact-title">138+</h2>
              <p>Countries</p>
            </div>
            <div className="content">
              <h2 className="contact-title">119k+</h2>
              <p>Community</p>
            </div>
            <div className="content">
              <h2 className="contact-title">5+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
