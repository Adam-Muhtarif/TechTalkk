import Cards from '@/components/ui/about-us/about-us-cards'
import AboutUsHhero from '@/components/ui/about-us/about-us-hero'
// import Image from 'next/image'
import Empower from '@/components/ui/about-us/empower'
import Journey from '@/components/ui/about-us/journey'
import TechtalkCommunity from '@/components/ui/about-us/techtalk-community'
import React from 'react'

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden">
      {/* About */}
      {/*About-us hero */}
      <AboutUsHhero />
      <TechtalkCommunity />
      <Empower />
      <Cards />
      <Journey />
    </div>
  )
}
