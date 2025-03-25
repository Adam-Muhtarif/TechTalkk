import AboutUsHhero from "@/components/ui/about-us/about-us-hero";
import Empower from "@/components/ui/about-us/empower";
import TechtalkCommunity from "@/components/ui/about-us/techtalk-community";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
      <TechtalkCommunity />
      <Empower />
    </div>
  );
}
