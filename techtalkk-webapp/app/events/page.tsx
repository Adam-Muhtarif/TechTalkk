import HeroPage from '@/components/ui/about-us/hero-page'
import JoinUs from '@/components/ui/about-us/join-us'
import { Button } from '@/components/ui/button'
import EventCard from '@/components/ui/events/event-card'
import PaginationComponent from '@/components/ui/events/pagination'
import React from 'react'

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden font-geist-sans">
      <HeroPage
        header="Tech talk’s events"
        paragraph="Home/events"
        className="h-[468px] sm:h-[460px] bg-[url(/images/about-us/about-page-image.jpeg)] bg-cover bg-center bg-no-repeat"
      />

      <section className="max-w-7xl mx-auto py-24 relative px-4 sm:px-6 lg:px-8">
        {/* filter buttons */}
        {/* conatiner */}
        <div className="flex gap-3 items-center justify-start">
          {/* button upcoming*/}
          <Button variant="upcoming">Upcoming</Button>

          {/* button Nearby*/}
          <Button variant="ghost" className="text-[#686868] bg-[#F2EEFF]">
            Nearby
          </Button>
        </div>
        {/* events */}
        <EventCard />
        <PaginationComponent />
      </section>

      <JoinUs
        header="Don’t Miss Out!"
        paragraph="Join the TeckTalkk community and take your skills to the next level. Whether you're here to learn, share, or connect, there's something for everyone. Let’s build the future of tech together!"
        buttonText="Join"
      />
    </div>
  )
}
