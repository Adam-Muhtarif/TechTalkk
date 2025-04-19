'use client'

import { Button } from '../ui/button'
import { Video, Tag } from '@/types/videos'
import { DataLoading } from './loadings'
import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import FilterSection from '../videos/filterSection'
import VideoCard from '../videos/videoCard'

type PaginationProps = {
  slug: 'videos' | 'blogs'
  page: number
  where: string
  tags?: Tag[]
  data: Video[]
  hasNextPage: boolean
  hasPrevPage: boolean
}

const Pagination = ({
  slug,
  page,
  where,
  data,
  tags,
  hasNextPage,
  hasPrevPage,
}: PaginationProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (newPage: number = page, selectedTagId: string = where) => {
      const params = new URLSearchParams(searchParams)

      params.set('page', newPage.toString())

      if (selectedTagId) {
        params.set('where[tags][in]', selectedTagId)
      } else {
        params.delete('where[tags][in]')
      }

      router.push(`${pathname}?${params.toString()}`)
    },
    [page, where, searchParams, router, pathname],
  )

  const goToNextPage = () => {
    if (hasNextPage) {
      createQueryString(page + 1)
    }
  }

  const goToPrevPage = () => {
    if (hasPrevPage && page > 1) {
      createQueryString(page - 1)
    }
  }

  return (
    <div>
      {/* Filter */}
      {/* Todo needs to be dynamic */}
      {slug === 'videos' || slug === 'blogs' ? (
        <FilterSection tags={tags || []} currentPage={page} createQueryString={createQueryString} />
      ) : null}

      {/* List data | cards */}
      {!data.length ? (
        <DataLoading />
      ) : (
        <section
          aria-live="polite"
          aria-label={`${slug} items`}
          className="w-full mb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
        >
          {slug === 'videos' &&
            data.map((vidoeVideo: Video) => (
              <VideoCard
                key={vidoeVideo.id}
                youtubeLink={vidoeVideo.youtube_link}
                tags={vidoeVideo.tags}
                instructorName={vidoeVideo.instructor.name}
                instructorImage={
                  vidoeVideo.instructor?.image_remote ||
                  vidoeVideo.instructor?.image ||
                  '/images/member-test.png' // Needs a proper default image
                }
                instructorSocials={vidoeVideo.instructor.instructor_socials}
              />
            ))}
        </section>
      )}

      <div className="flex justify-center items-center gap-4 mb-10">
        <Button
          disabled={!hasPrevPage}
          className="text-lg px-6 py-3 bg-[#4C0BF7]"
          onClick={goToPrevPage}
        >
          ← Prev
        </Button>
        <span className="text-xl font-semibold">page {page}</span>
        <Button
          disabled={!hasNextPage}
          className="text-lg px-6 py-3 bg-[#4C0BF7]"
          onClick={goToNextPage}
        >
          Next →
        </Button>
      </div>
    </div>
  )
}

export default Pagination
