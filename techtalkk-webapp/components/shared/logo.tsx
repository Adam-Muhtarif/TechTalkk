import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image src="logo.svg" alt="TechTalk Community" width={130} height={30} priority />
    </Link>
  )
}
