import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

import Image from 'next/image'
import Link from 'next/link'

type JobCardProps = {
  companyName: string
  companyLink: string
  companyLogo: string
  title: string
  postedAt: string
  expiresAt: string
  location: string
  jobType: string
  salary: number
  applyLink: string
}

export default function JobCard(props: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="w-[4rem] overflow-hidden">
          <Image
            src={props.companyLogo}
            alt={props.companyName}
            className="rounded-lg w-full h-full object-cover"
            width={50}
            height={100}
          />
          {/* make company name a link if not "" */}
          <CardTitle className="uppercase mt-2 text-xs">{props.companyName}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="uppercase text-lg">{props.title}</CardTitle>
        <div className="mt-1 text-xs text-gray-600 flex gap-2">
          <p>posted {props.postedAt}</p>
          <p>expires {props.expiresAt}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <p className="uppercase text-sm border rounded-2xl w-fit mt-4 py-1 px-4">
            {props.location}
          </p>
          <p className="uppercase text-sm border rounded-2xl w-fit mt-4 py-1 px-4">
            {props.jobType}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t">
        <p className="border rounded-2xl w-fit py-1 px-4">${props.salary} /month</p>
        <Link href={props.applyLink}>
          <Button className="uppercase bg-[#4C0BF7]">apply</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
