import Cards from '@/components/ui/about-us/about-us-cards'
import AboutUsHhero from '@/components/ui/about-us/about-us-hero'
// import Image from 'next/image'
import Empower from '@/components/ui/about-us/empower'
import JoinUs from '@/components/ui/about-us/join-us'
import Journey from '@/components/ui/about-us/journey'
import Members from '@/components/ui/about-us/members'
import TechtalkCommunity from '@/components/ui/about-us/techtalk-community'
import React from 'react'

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden font-geist-sans">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
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
