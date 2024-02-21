"use client";

import HeroSecetion from "../component/hero/heroSection";
import HorizontalSection from "../component/horizontal/horizontalSection";
import AboutSection from "@/component/about/aboutSection";
import StatsSection from "@/component/stat/statSection";

import Navbar from "@/component/navbar/navbar";
import useSmoothScroll from "../useSmoothScroll";
import WhoSection from "@/component/who/whoSection";
import EventSection from "@/component/event/eventSection";
import Footer from "@/component/footer/footer";
import Image from "next/image";

//images
import mouseImage from "@/public/assets/images/mouse.svg";
import arrowImage from "@/public/assets/images/arrow-long.svg";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Navbar />

      <div className="min-h-[100vh]">
        <HeroSecetion />
        <div className="flex flex-col justify-center items-center mb-2">
          <Image
            src={mouseImage}
            alt="mouse"
            style={{
              height: "28px",
              width: "28px",
              marginBottom: "10px",

              animation: "FloatingMouseImage 5s ease-in-out infinite",
            }}
          />
          <Image
            src={arrowImage}
            alt="arrow-long"
            style={{
              height: "117px",
              width: "30px",
              marginBottom: "10px",

              animation: "FloatingMouseImage 5s ease-in-out infinite",
            }}
          />
        </div>

        <HorizontalSection />

        <AboutSection />
        <StatsSection />
        <WhoSection />

        <EventSection />

        <Footer />
      </div>
    </>
  );
}
