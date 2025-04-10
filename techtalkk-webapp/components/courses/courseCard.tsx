import { InstructorSocials, Tag } from '@/app/courses/page'
import { extractYouTubeVideoID, formatDuration } from '@/lib/utils'
import {
  EyeIcon,
  BookIcon,
  GlobeIcon,
  TimerIcon,
  ThumbsUpIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type CourseCardProps = {
  youtubeLink: string
  tags: Tag[]
  instructorName: string
  instructorImage: string
  instructorSocials: InstructorSocials[]
}

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'facebook':
      return <FacebookIcon size={16} />
    case 'twitter':
      return <TwitterIcon size={16} />
    case 'linkedin':
      return <LinkedinIcon size={16} />
    case 'github':
      return <GithubIcon size={16} />
    case 'website':
      return <GlobeIcon size={16} />
    case 'youtube':
      return <YoutubeIcon size={16} />
    default:
      return <GlobeIcon size={16} /> // fallback icon
  }
}

export default async function CourseCard(props: CourseCardProps) {
  const videoId = extractYouTubeVideoID(props.youtubeLink)

  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`,
    {
      cache: 'no-store',
    },
  )

  const data = await res.json()

  return (
    <div className="w-full bg-gray-100 py-5 px-3 rounded-2xl flex flex-col items-center justify-center">
      {/* Image */}
      <Link href={props.youtubeLink} target="_blank">
        <Image
          src={data.items[0].snippet.thumbnails.medium.url}
          alt={data.items[0].snippet.title}
          width={400}
          height={100}
          className="rounded"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDEwMDAgNjAwMCIgY2xhc3M9ImZpbGwtbW9yZmluZyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTEwMDAgMCAwIDEwMDAgNjAwMCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgLz48L3N2Zz4=" // Optional base64-encoded blur image
          priority
        />
      </Link>

      {/* Tags */}
      <div className="self-start mt-4 flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <p key={tag.id} className="uppercase text-xs font-bold text-[#4C0BF7]">
            #{tag.slug}
          </p>
        ))}
      </div>

      {/* Title Desc */}
      <div className="w-full my-5">
        <Link href={props.youtubeLink} target="_blank">
          <h3
            className="font-bold text-black uppercase w-fit hover:underline line-clamp-2"
            title={data.items[0].snippet.title}
          >
            {data.items[0].snippet.title}
          </h3>
        </Link>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">
          {data.items[0].snippet.description}
        </p>
      </div>

      {/* Ratings */}
      <div className="flex items-center justify-center gap-8 text-sm font-bold">
        <span className="flex items-center justify-center gap-1">
          <ThumbsUpIcon size={15} /> {data.items[0].statistics?.likeCount}
        </span>
        <span className="flex items-center justify-center gap-1">
          <TimerIcon size={15} /> {formatDuration(data.items[0].contentDetails.duration)}
        </span>
        <span className="flex items-center justify-center gap-1">
          <EyeIcon size={15} /> {data.items[0].statistics.viewCount}
        </span>
        {props.youtubeLink.includes('playlist') ?? (
          <span className="flex items-center justify-center gap-1">
            <BookIcon size={15} /> {data.items[0].contentDetails.itemCount}
          </span>
        )}
      </div>

      <div className="w-full border-1 border-gray-300 my-4"></div>

      {/* Instructor */}
      <div className="flex gap-3 items-center self-start mx-5">
        <Image
          src={props.instructorImage}
          alt=""
          width={60}
          height={100}
          loading="lazy"
          placeholder="blur"
          className="w-15 h-15 rounded-full"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDEwMDAgNjAwMCIgY2xhc3M9ImZpbGwtbW9yZmluZyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTEwMDAgMCAwIDEwMDAgNjAwMCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgLz48L3N2Zz4=" // Optional base64-encoded blur image
        />
        <div>
          <h4 className="font-bold">{props.instructorName}</h4>
          <div className="flex items-center gap-2">
            {props.instructorSocials.map((social) => (
              <Link key={social.id} href={social.url} target="_blank" title={social.url}>
                <span className="text-sm text-gray-500">{getPlatformIcon(social.platform)}</span>
              </Link>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}
