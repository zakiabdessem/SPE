import React from "react";
import "./footer.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer fixed bottom-0">
      <div className="container">
        <div className="footer-navigation">
          <div className="item-1 footer-row">
            <p className="item-title">Explore</p>
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#community">Community</a>
            </div>
            <div>
              <a href="#events">Events</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="item-2 footer-row">
            <p className="item-title">Social</p>

            <div>
              <a
                href="https://www.linkedin.com/company/society-of-petroleum-engineers-spe-university-of-batna-2-student-chapter"
                target="_blank"
                rel="noopener noreferrer">
                Linkedin
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/spe_ubatna2"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/SPEUB2"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
          <div className="item-3 footer-row">
            <p className="item-title">Legal</p>
            <div>
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="item-4 footer-row">
            <a href="#home">
              <i>
                <Image
                  className="logo"
                  src="/assets/images/spe-logo-white.png"
                  alt="Logo"
                  height={80}
                  width={100}
                  style={{ width: "100px", height: "80px" }}
                />
              </i>
            </a>
            <p>
              Society of Petroleum Engineers - University of Batna 2 Student
              Chapter Everything about Oil&Gas and technology is here
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="copyright-text">
            <p>Copyright © 2019 - 2024 SPE UB2. All Rights Reserved.</p>
            <p>
              Made by{" "}
              <a
                href="https://linktr.ee/zakabd"
                target="_blank"
                rel="noopener noreferrer">
                Zak
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
