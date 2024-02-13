import React from "react";
import "./eventSection.scss";

function eventSection() {
  return (
    <section id="events">
      <div className="container">
        <div className="events">
          <div
            className="events-title"
            data-sr-id={12}
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
            }}>
            <h2>Our Events</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
          </div>

          <div
            className="events-content"
            data-sr-id={13}
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.5s",
            }}>
            <div className="events-box">
              <i className=" title-icon" />
              <h3>02R</h3>
              <img
                id="heroImg"
                src="assets/images/o2r.jfif"
                alt=""
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  padding: "20px 0px",
                }}
              />
              <p>
                Build decentralized applications for your specific business
                needs.
              </p>
            </div>

            <div className="events-box">
              <i className=" title-icon" />
              <h3>ADIPEC</h3>
              <img
                id="heroImg"
                src="assets/images/Adipec.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  padding: "20px 0px",
                }}
              />
              <p>
                Build decentralized applications for your specific business
                needs.
              </p>
            </div>

            <div className="events-box">
              <i className=" title-icon" />
              <h3>Energy4me</h3>
              <img
                id="heroImg"
                src="assets/images/energy4me.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  padding: "20px 0px",
                }}
              />
              <p>
                Build decentralized applications for your specific business
                needs.
              </p>
            </div>

            <div className="events-box">
              <i className=" title-icon" />
              <h3>ALP Program</h3>
              <img
                id="heroImg"
                src="assets/images/alp.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  padding: "20px 0px",
                }}
              />
              <p>
                Build decentralized applications for your specific business
                needs.
              </p>
            </div>

            <div className="events-box">
              <i className=" title-icon" />
              <h3>Diversity & Inclusion</h3>
              <img
                id="heroImg"
                src="assets/images/diversity.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: "10%",
                  padding: "20px 0px",
                }}
              />
              <p>
                Build decentralized applications for your specific business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default eventSection;
