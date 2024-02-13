"use client";

import Image from "next/image";
import HeroSecetion from "./../component/heroSection";
import HorizontalSection from "./../component/horizontalSection";
import AboutSection from "@/component/aboutSection";
import StatsSection from "@/component/statSection";

import Navbar from "@/component/navbar";
import { Import } from "lucide-react";
import useSmoothScroll from "../useSmoothScroll";
import WhoSection from "@/component/whoSection";
import { useEffect } from "react";
import EventSection from "@/component/eventSection";
import TechSection from "@/component/techSection";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Navbar />

      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      <HeroSecetion />
      <HorizontalSection />
      <main>
        <AboutSection />
        <StatsSection />
        <WhoSection />
        <EventSection />
        <TechSection />
      </main>
    </>
  );
}
