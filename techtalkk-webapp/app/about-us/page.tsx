import AboutUsHhero from "@/components/ui/about-us/about-us-hero";
import Empower from "@/components/ui/about-us/empower";
import TechtalkCommunity from "@/components/ui/about-us/techtalk-community";
import React from "react";

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
      <TechtalkCommunity />
      <Empower />
      {/* #E5E8FA  core values*/}
      <section className="bg-[#E5E8FA] mt-24 py-16">{/* content */}</section>
    </div>
  )
}
