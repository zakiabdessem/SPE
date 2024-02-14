"use client";

import Image from "next/image";
import HeroSecetion from "./../component/heroSection";
import HorizontalSection from "./../component/horizontalSection";
import AboutSection from "@/component/aboutSection";
import StatsSection from "@/component/statSection";

import Navbar from "@/component/navbar";
import useSmoothScroll from "../useSmoothScroll";
import WhoSection from "@/component/whoSection";
import { useEffect } from "react";
import EventSection from "@/component/eventSection";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const hash = usePathname();

  useSmoothScroll();

  {
    useEffect(() => {
      const handleHash = () => {
        //hash using usePathname  router next js
        if (
          hash === "/about" ||
          hash === "/stats" ||
          hash === "/who" ||
          hash === "/events"
        ) {
          const element = document.getElementById(hash.replace("/", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      handleHash();
    }, []);
  }

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
      </main>
    </>
  );
}
