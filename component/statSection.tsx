"use client";
import React, { useEffect, useRef, useState } from "react";
import "./statSection.scss";
import "./horizontalSection.scss";
import { useInView } from "framer-motion";

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [events, setEvents] = useState(0);
  const [countries, setCountries] = useState(0);
  const [community, setCommunity] = useState(0);
  const [experience, setExperience] = useState(0);

  const finalValues = {
    events: 100,
    countries: 138,
    community: 119,
    experience: 5,
  };

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (events < finalValues.events) {
          setEvents(events + 1);
        }
        if (countries < finalValues.countries) {
          setCountries(countries + 1);
        }
        if (community < finalValues.community) {
          setCommunity(community + 1);
        }
        if (experience < finalValues.experience) {
          setExperience(experience + 1);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [events, countries, community, experience, isInView]);

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
              <h2 className="contact-title">{events}+</h2>
              <p>Events</p>
            </div>
            <div className="content">
              <h2 className="contact-title">{countries}</h2>
              <p>Countries</p>
            </div>
            <div className="content">
              <h2 className="contact-title">{community}k</h2>
              <p>Community</p>
            </div>
            <div className="content">
              <h2 className="contact-title">{experience}+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
