"use client";
import React from "react";
import "./navbar.scss";
import Image from "next/image";
import menuImage from "@/public/assets/images/menu.svg";

//images
import logoImage from "@/public/assets/images/spe-logo-white.png";

function Navbar() {
  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  return (
    <header className="header" id="home">
      <div className="navigation">
        <div id="logo">
          <a href="#">
            <i>
              <Image className="logo" src={logoImage} alt="Logo" />
            </i>
          </a>
        </div>

        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>

        <div id="black-bar">
          <div id="nav-blackbar">
            <a className="nav-blackbar-item" href="#home">
              Home
            </a>
            <a className="nav-blackbar-item" href="#about">
              About
            </a>
            <a className="nav-blackbar-item" href="#services">
              Services
            </a>
            <a className="nav-blackbar-item" href="/portfolio">
              Portfolio
            </a>
            <a className="nav-blackbar-item" href="#vouches">
              Vouches
            </a>
            <a className="nav-blackbar-item" href="/faq">
              FAQ
            </a>
            <a className="nav-blackbar-item" href="/terms-of-service">
              Terms of Service
            </a>
            <a className="nav-blackbar-item" href="/privacy-policy">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="nav-right w-full">
          <div>
            <a
              href="https://www.spe.org/en/chapter/6313"
              className="btn btn-platform"
              target="_blank"
              rel="noopener noreferrer">
              Our Platform
              <i className="fa-solid fa-arrow-right rightarrow-icon"></i>
            </a>
          </div>
          <div
            id="btn-blackbar"
            className="ml-4"
            style={{
              marginLeft: "16px",
            }}
            onClick={handleMenuClick}>
            <Image className="m-5" src={menuImage} alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
