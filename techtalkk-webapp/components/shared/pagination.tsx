'use client'

import { useState, useEffect, useCallback } from 'react'
import { Course } from '@/app/courses/page'
import { Button } from '../ui/button'
import CourseCard from '../courses/courseCard'
import FilterSection from '../courses/filterSection'

type PaginationProps = {
  slug: string
  limit: number
}

const Pagination = ({ slug, limit }: PaginationProps) => {
  const [items, setItems] = useState<Course[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [hasPrevPage, setHasPrevPage] = useState<boolean>(false)
  const [tagId, setTagId] = useState<string>('')

  const fetchVideos = useCallback(
    async (overridePage = currentPage, newTagId = tagId) => {
      try {
        const url = newTagId
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${slug}?page=${overridePage}&limit=${limit}&where[tags][in]=${newTagId}`
          : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${slug}?page=${overridePage}&limit=${limit}`

        const res = await fetch(url, { cache: 'no-store' })
        const data = await res.json()

        setItems(data.docs)
        setHasNextPage(data.hasNextPage)
        setHasPrevPage(data.hasPrevPage)
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    },
    [slug, currentPage, limit, tagId],
  )

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  const goToNextPage = () => {
    if (hasNextPage) {
      const next = currentPage + 1
      setCurrentPage(next)
      fetchVideos(next)
    }
  }

  const goToPrevPage = () => {
    if (hasPrevPage && currentPage > 1) {
      const prev = currentPage - 1
      setCurrentPage(prev)
      fetchVideos(prev)
    }
  }

  return (
    <div>
      <FilterSection
        slug={slug}
        fetchVideos={(selectedTagId: string) => {
          setTagId(selectedTagId)
          setCurrentPage(1)
          fetchVideos(1, selectedTagId)
        }}
      />

      <section
        aria-label={`${slug} items`}
        className="w-full mb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        {slug === 'videos' &&
          items.map((course: Course, i: number) => (
            <CourseCard
              key={i}
              youtubeLink={course.youtube_link}
              tags={course.tags}
              instructorName={course.instructor.name}
              instructorImage={
                course.instructor?.image_remote ||
                course.instructor?.image ||
                '/images/member-test.png'
              }
              instructorSocials={course.instructor.instructor_socials}
            />
          ))}
      </section>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <Button
          disabled={!hasPrevPage}
          className="text-lg px-6 py-3 bg-[#4C0BF7]"
          onClick={goToPrevPage}
        >
          ← Prev
        </Button>
        <span className="text-xl font-semibold">page {currentPage}</span>
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
