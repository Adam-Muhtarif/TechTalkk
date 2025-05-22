import React from 'react'

interface Props {
  sectionName: string
  title: string
  description: string
  secDiscription?: string
  icon: React.ReactNode
}

export default function SectionInfo({
  title,
  description,
  secDiscription,
  icon,
  sectionName,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full z-1 py-12">
      {/* section title */}
      <div className="flex gap-1.5 rounded-lg bg-[#F8FAFC] px-2 py-1.5 border-[#DEE5ED] border items-center">
        <div className="font-inter text-[12px] text-center">{icon}</div>
        <div className="font-inter text-sm sm:text-xl text-center px-3">{sectionName}</div>
      </div>
      {/* Title Description */}
      <h1 className="text-[#7E45F0] text-center text-2xl sm:text-4xl font-semibold">{title}</h1>

      <p className="flex flex-col text-[#5B5966] text-sm sm:text-xl text-center max-w-3xl">
        {description}
      </p>
      <p className="hidden sm:flex flex-col text-[#5B5966] text-sm sm:text-xl text-center">
        {secDiscription}
      </p>
    </div>
  )
}
