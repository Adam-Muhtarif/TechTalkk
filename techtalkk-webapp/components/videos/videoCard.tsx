'use client'

import { useState, useEffect } from 'react'
import { InstructorSocials, Tag } from '@/types/videos'
import { AvatarLoading, CardLoading } from '../shared/loadings'
import {
  extractYouTubeVideoID,
  formatVideoDuration,
  formatVideoLikes,
  formatVideoViews,
} from '@/lib/utils'
import {
  EyeIcon,
  BookIcon,
  GlobeIcon,
  TimerIcon,
  ThumbsUpIcon,
  FacebookIcon, // Brand icons are deprecated in lucide-react use another package
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

type CourseCardProps = {
  tags: Tag[]
  youtubeLink: string
  instructorName: string
  instructorImage: string
  instructorSocials: InstructorSocials[]
}

type VideoData = {
  items: {
    snippet: {
      thumbnails: {
        medium: {
          url: string
        }
      }
      title: string
      description: string
    }
    contentDetails: {
      duration: string
      itemCount: string
    }
    statistics: {
      likeCount: string
      viewCount: string
    }
  }[]
}

function getPlatformIcon(platform: string) {
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

export default function CourseCard({
  tags,
  youtubeLink,
  instructorName,
  instructorImage,
  instructorSocials,
}: CourseCardProps) {
  const [data, setData] = useState<VideoData | null>(null)

  useEffect(() => {
    try {
      const fetchVideoFromYoutube = async () => {
        const videoId = extractYouTubeVideoID(youtubeLink)
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
          {
            cache: 'no-store',
          },
        )
        setData(await res.json())
      }

      fetchVideoFromYoutube()
    } catch (error) {
      console.error('Error fetching video data from youtube:', error)
    }
  }, [youtubeLink])

  return (
    <div className="w-full bg-gray-100 py-5 px-3 rounded-2xl flex flex-col items-center justify-center">
      {/* Thumbnail */}
      <Link href={youtubeLink} target="_blank" className="w-full">
        {!data ? (
          <CardLoading />
        ) : (
          <Image
            src={data.items[0].snippet.thumbnails.medium.url}
            alt={data.items[0].snippet.title}
            width={400}
            height={100}
            priority
            className="rounded"
          />
        )}
      </Link>

      {/* Tags */}
      <div className="self-start mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.id} className="uppercase text-xs font-bold text-[#4C0BF7]">
            #{tag.slug}
          </p>
        ))}
      </div>

      {/* Title & Desc */}
      <div className="w-full my-5">
        <Link href={youtubeLink} target="_blank">
          <h3
            className="font-bold text-black uppercase w-fit h-12 hover:underline line-clamp-2"
            title={data?.items[0].snippet.title}
          >
            {data?.items[0].snippet.title}
          </h3>
        </Link>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">
          {data?.items[0].snippet.description}
        </p>
      </div>

      {/* Ratings */}
      <div className="flex items-center justify-center gap-8 text-sm font-bold">
        <span className="flex items-center justify-center gap-1">
          <ThumbsUpIcon size={15} /> {formatVideoLikes(data?.items[0].statistics.likeCount || 0)}
        </span>
        <span className="flex items-center justify-center gap-1">
          <TimerIcon size={15} />{' '}
          {formatVideoDuration(data?.items[0].contentDetails.duration || '')}
        </span>
        <span className="flex items-center justify-center gap-1">
          <EyeIcon size={15} /> {formatVideoViews(data?.items[0].statistics.viewCount || 0)}
        </span>
        {youtubeLink.includes('playlist') ?? (
          <span className="flex items-center justify-center gap-1">
            <BookIcon size={15} /> {data?.items[0].contentDetails.itemCount}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="w-full border-1 border-gray-300 my-4"></div>

      {/* Instructor */}
      <div className="flex gap-3 items-center self-start mx-5">
        {instructorImage ? (
          <Image
            src={instructorImage}
            alt={instructorName}
            width={60}
            height={100}
            loading="lazy"
            className="w-15 h-15 rounded-full"
          />
        ) : (
          <AvatarLoading />
        )}
        <div>
          <h4 className="font-bold">{instructorName}</h4>
          <div className="flex items-center gap-2">
            {instructorSocials.map((social) => (
              <Link key={social.id} href={social.url} target="_blank" title={social.platform}>
                <span className="text-sm text-gray-500">{getPlatformIcon(social.platform)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
