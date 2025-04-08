import { BookIcon, StarIcon, TimerIcon } from 'lucide-react'
import Image from 'next/image'

type CourseCardProps = {
  image: string
  title: string
  description: string
  rating: number
  period: number
  lessons: number
  instructorName: string
  instructorImage: string
}

export default function CourseCard(props: CourseCardProps) {
  return (
    <div className="w-[400px] bg-gray-100 py-5 rounded-2xl flex flex-col items-center justify-center">
      <Image src={props.image} alt="" width={400} height={100} className="rounded" />

      <div className="px-5 my-4">
        <h3 className="font-bold text-black uppercase w-fit">ux design beginner</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{props.description}</p>
      </div>

      <div className="flex items-center justify-center gap-8 text-sm font-bold">
        <span className="flex items-center justify-center gap-1">
          <StarIcon size={15} /> {props.rating}
        </span>
        <span className="flex items-center justify-center gap-1">
          <TimerIcon size={15} /> 10 {props.period}
        </span>
        <span className="flex items-center justify-center gap-1">
          <BookIcon size={15} /> 14 {props.lessons}
        </span>
      </div>

      <div className="w-full border-1 border-gray-300 my-4"></div>

      <div className="flex gap-3 items-center self-start mx-5">
        <Image
          src={props.instructorImage}
          alt=""
          className=" rounded-full bg-amber-950"
          width={60}
          height={100}
        />
        <span className="font-bold">{props.instructorName}</span>
      </div>
    </div>
  )
}
