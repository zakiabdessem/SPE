import React from "react";
import "./techSection.scss";

function techSection() {
  return (
    <section id="vouches">
      <div className="feedbacks">
        <div
          className="feedbacks-title"
          data-sr-id={14}
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition:
              "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
          }}>
          <h2>Our Vouches</h2>
          <h3>We are the most vouched service provider.</h3>
        </div>
        <div
          className="slider"
          data-sr-id={15}
          style={{
            visibility: "visible",
            opacity: 1,
            transition: "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.5s",
          }}>
          <div className="slide-track">
            <div className="slide">
              <div className="slide-card">
                <div className="top">
                  <div className="left">
                    <div className="avatar">
                      <i>
                        <img
                          className="vouchesavatar-icon"
                          src="assets/images/vouches/vexingly.webp"
                          alt=""
                        />
                      </i>
                    </div>
                    <div className="information">
                      <div className="name">
                        <a
                          href="https://cracked.io/vexingly"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#AAAAAA" }}>
                          {" "}
                          vexingly
                        </a>
                      </div>
                      <div className="forum">
                        <p>Cracked.io</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="stars">
                      <i className="fa-solid fa-star reviewstar-icon" />
                      <i className="fa-solid fa-star reviewstar-icon" />
                      <i className="fa-solid fa-star reviewstar-icon" />
                      <i className="fa-solid fa-star reviewstar-icon" />
                      <i className="fa-solid fa-star reviewstar-icon" />
                    </div>
                    <div className="verify">
                      <a
                        href="https://cracked.io/vouches.php?action=view&vid=40986"
                        target="_blank"
                        rel="noopener noreferrer">
                        Verify Vouch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <p>Designed by website, very professional.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default techSection;
