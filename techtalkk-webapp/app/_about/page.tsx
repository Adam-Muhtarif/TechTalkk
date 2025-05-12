import Cards from '@/components/about/about-us-cards'
import AboutUsHhero from '@/components/about/hero-page'
// import Image from 'next/image'
import Empower from '@/components/about/empower'
import JoinUs from '@/components/about/join-us'
import Journey from '@/components/about/journey'
import Members from '@/components/about/members'
import TechtalkCommunity from '@/components/about/techtalk-community'
import React from 'react'

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden font-geist-sans">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero
        header="Knowledge Shared, Knowledge Gained"
        paragraph="At TechTalk, we believe in the power of shared learning. Join our community to explore
            industry trends, exchange insights, and expand your tech expertise"
        className="h-[468px] sm:h-[460px] bg-[url(/images/about-us/about-page-image.jpeg)] bg-cover bg-center bg-no-repeat"
      />
      <TechtalkCommunity />
      <Empower />
      <Cards />
      <Journey />
      <Members />
      <JoinUs
        header="Join the TechTalk Community"
        paragraph="Ready to connect, collaborate, and innovate with fellow tech enthusiasts? Join us today!"
        buttonText="Join"
      />
    </div>
  )
}
