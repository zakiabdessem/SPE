"use client";

import Image from "next/image";
import HeroSecetion from "./../component/heroSection";
import HorizontalSection from "./../component/horizontalSection";
import AboutSection from "@/component/aboutSection";

import Navbar from "@/component/navbar";
import { Import } from "lucide-react";
import useSmoothScroll from "../useSmoothScroll";

export default function Home() {
  useSmoothScroll();
  return (
    <>
      <Navbar />

      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      <HeroSecetion />
      <HorizontalSection />
      <main className="">
        <HeroSecetion /> {/* remove this w rani desactivit relative from body css */}
        <AboutSection />
      </main>
    </>
  );
}
