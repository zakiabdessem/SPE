import React, { useRef } from "react";
import "./eventSection.scss";
import { useInView } from "framer-motion";

function eventSection() {
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });

  const refEvent1 = useRef(null);
  const isInViewEvent1 = useInView(refEvent1, { once: true });

  const refEvent2 = useRef(null);
  const isInViewEvent2 = useInView(refEvent2, { once: true });

  const refEvent3 = useRef(null);
  const isInViewEvent3 = useInView(refEvent3, { once: true });

  const refEvent4 = useRef(null);
  const isInViewEvent4 = useInView(refEvent4, { once: true });

  const refEvent5 = useRef(null);
  const isInViewEvent5 = useInView(refEvent5, { once: true });

  return (
    <section id="events">
      <div className="container">
        <div className="events">
          <div
            className="events-title"
            data-sr-id={12}
            ref={refText}
            style={{
              transform: isInViewText ? "none" : "translateX(100px)",
              opacity: isInViewText ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>
            <h2>Our Events</h2>
          </div>

          <div className="events-content" data-sr-id={13}>
            <div
              ref={refEvent1}
              className="events-box"
              style={{
                transform: isInViewEvent1 ? "none" : "translateX(-200px)",
                opacity: isInViewEvent1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              <i className=" title-icon" />
              <h3>02R</h3>
              <img id="heroImg" src="assets/images/o2r.jfif" alt="" />
              <p>
                Hosted by SPE-UB2, focuses on sustainable solutions for
                Algeria's future, emphasizing CCUS initiatives.
              </p>
            </div>

            <div
              ref={refEvent2}
              className="events-box"
              style={{
                transform: isInViewEvent2 ? "none" : "translateX(200px)",
                opacity: isInViewEvent2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              <i className=" title-icon" />
              <h3>ADIPEC</h3>
              <img id="heroImg" src="assets/images/Adipec.jpg" alt="" />
              <p>
                A global event for the oil and gas industry, gathering
                professionals to discuss innovations and trends.
              </p>
            </div>

            <div
              ref={refEvent3}
              className="events-box"
              style={{
                transform: isInViewEvent3 ? "none" : "translateX(-200px)",
                opacity: isInViewEvent3 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              <i className=" title-icon" />
              <h3>Energy4me</h3>
              <img id="heroImg" src="assets/images/energy4me.png" alt="" />
              <p>
                Raises energy awareness globally, educating the public about the
                industry.
              </p>
            </div>

            <div
              ref={refEvent4}
              className="events-box"
              style={{
                transform: isInViewEvent4 ? "none" : "translateX(200px)",
                opacity: isInViewEvent4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              <i className=" title-icon" />
              <h3>ALP Program</h3>
              <img id="heroImg" src="assets/images/alp.jpg" alt="" />
              <p>
                Educates high school students about the oil industry, fostering
                skill development.
              </p>
            </div>

            <div
              ref={refEvent5}
              className="events-box"
              style={{
                transform: isInViewEvent5 ? "none" : `translateX(-200px)`,
                opacity: isInViewEvent5 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              <i className=" title-icon" />
              <h3>Diversity & Inclusion</h3>
              <img id="heroImg" src="assets/images/diversity.jpg" alt="" />
              <p>
                Promotes women in energy, assists local chapters, and advocates
                for diversity in STEM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default eventSection;
