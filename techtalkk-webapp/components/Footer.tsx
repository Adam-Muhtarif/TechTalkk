import Link from "next/link";
import { LogoWhite, socialMediaLinks } from "@/components/ui/icons/index";
import { FooterLinks } from "@/constants/data";

export default function FooterSection() {
  return (
    <>
      <footer className='py-10 md:py-10 bg-[#170142] text-white'>
        <div className='mx-auto max-w-5xl px-6'>
          <Link href='/' aria-label='go home' className='mx-auto block size-fit'>
            <LogoWhite className='w-[150px] h-[40px] sm:w-full sm:h-full' />
          </Link>
          <div className='my-5 flex flex-wrap justify-center gap-6 text-lg font-medium'>
            {FooterLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-white hover:text-white/70 block duration-150'>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>

          <p className='text-center font-sans font-medium text-xl/loose my-5 text-gray-300'>
            TeckTalkk is a vibrant online platform designed for developers, tech enthusiasts, and
            learners to connect, collaborate, and grow.
          </p>

          <div className=' flex flex-wrap justify-center gap-6 text-sm'>
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.ariaLabel}
                className='text-white hover:text-white/70 block'>
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <div className='text-white block text-center text-lg font-medium bg-[#5d16ec] w-full'>
        {" "}
        © {new Date().getFullYear()} TechTalk, All rights reserved
      </div>
    </>
  );
}
