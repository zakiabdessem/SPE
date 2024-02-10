import Image from "next/image";
import HeroSecetion from "./../component/heroSection";
import HorizontalSection from "./../component/horizontalSection";

import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        {/* flex min-h-screen flex-col items-center justify-between p-24 */}
        <HeroSecetion />
        <HorizontalSection />
      </main>
    </>
  );
}
