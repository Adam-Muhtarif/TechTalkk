import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StarIcon from './icons/starIcon.svg'
import StarIconHalf from './icons/starIconHalf.svg'

export default function Meet() {
  const MEMBERS = Array.from({ length: 6 })
  const STARS = Array.from({ length: 5 })
  const GITHUB_URL = 'https://github.com/Adam-Muhtarif'

  const MemberAvatar = ({ index }: { index: number }) => (
    <Link
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block cursor-pointer relative ${index > 0 ? '-ml-3' : ''}`}
      style={{ zIndex: 6 - index }}
    >
      <Image
        src={`/images/home/member${index + 1}.jpeg`}
        alt={`Member ${index + 1}`}
        className="rounded-full border-2 border-white"
        width={32}
        height={32}
        loading="lazy"
      />
    </Link>
  )

  const Rating = () => (
    <div className="flex justify-center items-center">
      {STARS.map((_, index) => (
        <Fragment key={index}>{index < 4 ? <StarIcon /> : <StarIconHalf />}</Fragment>
      ))}
      <p className="text-sm text-[#353F48] font-bold font-archivo ml-2">4.8+</p>
    </div>
  )

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <div className="flex items-center">
        {MEMBERS.map((_, index) => (
          <MemberAvatar key={index} index={index} />
        ))}
      </div>

      <div className="flex flex-col justify-start sm:items-start ml-2">
        <Rating />
        <p className="text-sm text-[#353F48] font-medium">
          Meet <span className="font-semibold font-bricolage text-[#5E16EC]">700+</span> Somali
          Dev&apos;s
        </p>
      </div>
    </div>
  )
}
