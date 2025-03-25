import AboutUsHhero from "@/components/ui/about-us/about-us-hero";
import TechtalkCommunity from "@/components/ui/about-us/techtalk-community";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
      <TechtalkCommunity />
    </section>
  );
}
