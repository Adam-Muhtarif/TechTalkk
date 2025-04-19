import { Video, Tag } from '@/types/videos'

import LandingSection from '@/components/shared/landingSection'
import Pagination from '@/components/shared/pagination'

export default async function Videos({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams
  const page = Number(resolvedParams.page) || 1
  const limit = Number(resolvedParams.limit) || 8
  const where = resolvedParams['where[tags][in]']?.toString() || ''

  const tagsResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/video-tags`)
  const videosResponse = await fetch(
    where
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos?page=${page}&limit=${limit}&where[tags][in]=${where}`
      : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos?page=${page}&limit=${limit}`,
  )

  const [tagsData, videosData] = await Promise.all([
    tagsResponse.ok ? tagsResponse.json() : { docs: [] },
    videosResponse.ok
      ? videosResponse.json()
      : { docs: [], hasNextPage: false, hasPrevPage: false },
  ])

  const tags: Tag[] = tagsData.docs
  const videos: Video[] = videosData.docs

  const hasNextPage = videosData.hasNextPage
  const hasPrevPage = videosData.hasPrevPage

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-32 overflow-x-hidden">
      {/* Dynamic Landing */}
      <LandingSection
        title="find your suitable"
        info="Video"
        className="h-2 md:h-3 w-[10rem] md:w-[15rem] top-[52%] left-[50%] transform -translate-x-1/2"
      />

      {/* Videos Cards */}
      <Pagination
        slug="videos"
        page={page}
        where={where}
        tags={tags}
        data={videos}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </main>
  )
}
