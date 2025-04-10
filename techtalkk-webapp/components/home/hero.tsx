import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DcIcon, FbIcon, IgIcon, YtIcon } from '../icons'
import { SocialLinks } from '@/constants/data'

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-8 bg-[url(/images/home/image-01.png)]  bg-cover bg-no-repeat bg-center sm:p-30 mt-19 text-center">
      <h1 className="font-black mt-15 md:mt-0 p-2 text-3xl md:text-6xl lg:text-[80px]/[80px]">
        Join The TeckTalkk Community
      </h1>
      <p className="font-sans text-sm md:text-[1.6rem] text-center max-w-[600px] px-8 lg:max-w-[1440px] lg:p-0">
        TeckTalkk is a vibrant online platform designed for developers, tech enthusiasts, and
        learners to connect, collaborate, and grow. Whether you&apos;re a beginner exploring the
        world of coding or an experienced developer looking to stay ahead
      </p>
      <div className="flex space-x-5">
        {SocialLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.icon === 'YtIcon' && <YtIcon pathClassName="fill-[#4E58EF]" />}
            {link.icon === 'DcIcon' && <DcIcon pathClassName="fill-[#4E58EF]" />}
            {link.icon === 'IgIcon' && <IgIcon pathClassName="fill-[#4E58EF]" />}
            {link.icon === 'FbIcon' && <FbIcon pathClassName="fill-[#4E58EF]" />}
          </Link>
        ))}
      </div>
      <div className="mb-4">
        <Link href="/#">
          <Button variant={'btn'} className="p-[10px] w-[224px] h-[50px] font-medium text-[20px]">
            Discover More
          </Button>
        </Link>
      </div>
    </section>
  )
}
export default Hero
