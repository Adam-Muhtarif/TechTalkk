import Code from './icons/code.svg'
import Link from 'next/link'
import Meet from './meet'
import Image from 'next/image'
import Arrow from './icons/arrow.svg'
import Vector from './icons/vector.svg'
import Innovate from './icons/innovate.svg'
import Collaborate from './icons/collaborate .svg'
import DiscordIcon from './icons/discordIcon.svg'

export default function Hero() {
  return (
    <section className="overflow-hidden mt-32 mb-16 font-archivo ">
      <div className="w-full max-w-7xl mx-auto">
        <Meet />

        {/* background pattern */}
        <Vector className="absolute left-0 top-20 transform -z-50 " />
        <Vector className="absolute right-0 top-20 transform -z-50 scale-x-[-1]" />

        <div className="flex flex-col justify-center mt-8 px-4">
          {/* header */}
          <h1 className="text-center text-2xl sm:text-4xl lg:text-7xl font-bold">
            <span className="text-black relative">
              Code.
              <span className="absolute hidden lg:block top-3 right-0">
                <Code />
              </span>
            </span>
            <span className="text-[#FECC33] relative">
              Collaborate.
              <span className="absolute hidden lg:block top-3 right-0">
                <Collaborate />
              </span>
            </span>
            <span className="text-[#5E16EC] relative">
              Innovate.
              <span className="absolute hidden lg:block top-3 right-0">
                <Innovate />
              </span>
            </span>
          </h1>

          {/* Sub header */}
          <h2 className="text-center text-[#353F48] text-sm sm:text-xl max-w-3xl mx-auto mt-3">
            Join Somalia&apos;s leading tech community — where developers, designers,
            <br />
            AI innovators, and cybersecurity minds come together to learn, build, and grow.
            <br />
            Connect. Collaborate. Create impact. 🚀
          </h2>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-center gap-2.5 mt-8 px-4">
          <DiscordButton />
          <WhiteButton />
        </div>

        {/* Discord Image */}
        <div className="w-fit relative mt-32">
          <Image
            alt="hero"
            src="/images/home/discord.png"
            className="bg-blue-400"
            width={1211}
            height={758}
          />
          <Image
            src="/images/home/dots.png"
            alt="dots"
            className="absolute  bottom-0 right-0 left-0 -z-50 scale-y-135 scale-x-150"
            width={1423}
            height={757}
          />
          <Image
            className="absolute -top-60 right-0 left-0 -z-50 "
            src="/images/home/glows.png"
            alt="dots"
            width={1886.13}
            height={1168.51}
          />
        </div>

        <Vector className="absolute left-30 top-300 transform -z-50 scale-y-70" />
        <Vector className="absolute right-30 top-300 transform -z-50 scale-y-70 scale-x-[-1]" />
      </div>
    </section>
  )
}

function DiscordButton({ href = 'https://discord.gg/your-invite-link' }) {
  return (
    <div className="flex justify-center items-center">
      <Link
        href={href}
        className="group relative flex items-center justify-center gap-4 bg-[#7C3AED] border-2 border-[#6D28D9] text-white font-bold text-sm sm:text-xl px-4 py-3 lg:p-4 rounded-2xl hover:bg-[#6D28D9] transition-colors duration-300 w-full overflow-hidden"
      >
        {/* Inner border animation */}
        <span className="absolute inset-0.5 sm:inset-[1px] lg:inset-0.5 rounded-2xl border-t-2 border-l-2 border-white/30 animate-pulse-opacity pointer-events-none"></span>

        <DiscordIcon />
        <span className="relative z-10">Join Us</span>
      </Link>
    </div>
  )
}

function WhiteButton() {
  return (
    <div className="flex justify-center items-center">
      <div className="group relative flex items-center justify-center gap-4 bg-transparent text-[#6D28D9] font-bold text-sm sm:text-xl px-4 py-3 lg:p-4 rounded-2xl transition-colors duration-300 w-full max-w-xl overflow-hidden border-2 border-[#6D28D9]">
        {/* Inner border animation */}
        <span className="absolute inset-0.5 sm:inset-[3px] rounded-2xl border-t-2 border-l-2 border-[#6D28D9]/30 animate-pulse-opacity pointer-events-none"></span>

        <span className="relative z-10">Events</span>
        <Arrow />
      </div>
    </div>
  )
}
