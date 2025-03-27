import AboutUsHhero from "@/components/ui/about-us/about-us-hero";
import TechtalkCommunity from "@/components/ui/about-us/techtalk-community";
// import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
      <TechtalkCommunity />
      <Empower />
      <Cards />
    </div>
  )
}
