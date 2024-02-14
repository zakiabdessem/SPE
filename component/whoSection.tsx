import React, { useRef, useState, useEffect } from "react";
import "./whoSection.scss";
import { useInView } from "framer-motion";

interface Offer {
  title: string;
  description: string;
  color: string;
}
const offers: Offer[] = [
  {
    title: "Professional Development",
    description:
      "Access workshops and training sessions to enhance your technical skills and industry knowledge.",
    color: "rgb(80, 164, 138)",
  },
  {
    title: "Mentorship Programs",
    description:
      "Connect with experienced professionals for guidance and advice on your career path.",
    color: "rgb(80, 107, 138)",
  },
  {
    title: "Networking Events",
    description:
      "Build relationships with peers, alumni, and industry leaders through networking events and social gatherings.",
    color: "rgb(80, 85, 138)",
  },
  {
    title: "Career Resources",
    description:
      "Explore job opportunities, internships, and career development resources tailored to the oil and gas sector.",
    color: "rgb(80, 48, 138)",
  },
];

function WhoSection() {
  /* const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); was using this so i asked gps how to have multiple refs so i end up learning Intersection Observer lol  */

  const refElements = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    new Array(offers.length).fill(false),
  );
  const refHeader = useRef(null);
  const inViewHeader = useInView(refHeader, { once: true });

  const refImage = useRef(null);
  const inViewImage = useInView(refHeader, { once: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refElements.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            setInViewStates((prevState) => {
              const newState = [...prevState];
              if (!newState[index]) newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    refElements.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refElements.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="who">
      <div className="container">
        <div className="about">
          <div className="about-content">
            <h3
              data-sr-id={4}
              style={{
                transform: inViewHeader ? "none" : "translateX(100px)",
                opacity: inViewHeader ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              Our Services
            </h3>
            <div>
              <h2
                data-sr-id={5}
                ref={refHeader}
                style={{
                  transform: inViewHeader ? "none" : "translateX(100px)",
                  opacity: inViewHeader ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}>
                What we offer?
              </h2>
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="d11"
                  data-sr-id={7 + index}
                  ref={(el) => (refElements.current[index] = el)}
                  style={{
                    transform: inViewStates[index]
                      ? "none"
                      : "translateX(175px)",
                    opacity: inViewStates[index] ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    borderRight: `4px solid ${offer.color}`,
                  }}>
                  <p className="p1">
                    <span>{offer.title} </span>
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="about-img"
            data-sr-id={6}
            ref={refImage}
            style={{
              transform: inViewImage ? "none" : "translateX(200px)",
              opacity: inViewImage ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>
            <i>
              <img src="assets/images/oil-rig.png" alt="" />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoSection;
