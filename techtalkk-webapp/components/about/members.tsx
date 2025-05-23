import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// 1) i wanna make this section some improvements such us the icons
// 2) when we get the data we will loop the cards instead of hard coding them
// 3) also the members cards will be two rows and we gonna animate it
//    each of them will come from different directions (right and left)

export default function Members() {
  return (
    <section className="max-w-7xl mx-auto py-24 relative px-4 sm:px-6 lg:px-8 overflow-clip">
      {/* container */}
      <div className="flex flex-col items-center justify-center">
        {/* header */}
        <div className="self-center">
          <h2 className="text-center text-3xl lg:text-5xl font-bold text-[var(--primary-color)]">
            Meet the Team
          </h2>
          <p className="text-center uppercase text-lg font-bold mt-2 font-poppins">
            Meet the passionate individuals behind TechTalk.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-row gap-8 mt-16 justify-center items-stretch">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-row gap-8 mt-16 justify-center items-stretch">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

function Card() {
  return (
    <div className="flex flex-col items-center  rounded-2xl p-4 sm:w-[calc(33.33%-32px)] flex-1 min-w-[277px] max-w-[277px] shadow-card">
      <Image
        src="/images/member-test.png"
        alt="team member"
        width={121}
        height={121}
        className="rounded-full"
      />

      <h1 className="mt-2 text-2xl font-bold text-[var(--primary-color)]">kadar bache</h1>
      <p className="text-xl text-center font-normal font-poppins">developer</p>
      <div className="flex gap-2 items-center mt-8">
        <Link href="#">
          <Image
            src={'/images/about-us/facebook.svg'}
            width={48}
            height={48}
            className="hover:opacity-80 duration-300 ease-in-out"
            alt="facebook"
          />
        </Link>

        <Link href="#">
          <Image
            src={'/images/about-us/twitter.svg'}
            width={48}
            height={48}
            className="hover:opacity-80 duration-300 ease-in-out"
            alt="facebook"
          />
        </Link>

        <Link href="#">
          <Image
            src={'/images/about-us/linkedIn.svg'}
            width={48}
            height={48}
            className="hover:opacity-80 duration-300 ease-in-out"
            alt="facebook"
          />
        </Link>
      </div>
    </div>
  )
}