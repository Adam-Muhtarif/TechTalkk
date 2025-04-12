'use client'

import { Tag } from '@/app/courses/page'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

type FilterSectionProps = {
  slug: string
  fetchVideos: (tagId: string) => void
}

export default function FilterSection({ slug, fetchVideos }: FilterSectionProps) {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(
          slug === `videos`
            ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/video-tags`
            : slug === `blogs`
              ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog-tags`
              : '',
          {
            cache: 'no-store',
          },
        )
        const data = await res.json()

        setTags(data.docs)
      } catch (error) {
        console.error('Error fetching tags', error)
      }
    }

    fetchTags()
  }, [slug])

  return (
    <section
      aria-label="filter jobs"
      className="w-full my-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-2 lg:block lg:text-right lg:space-x-2"
    >
      <Button className="uppercase py-5 px-8 bg-[#4C0BF7]" onClick={() => fetchVideos('')}>
        all
      </Button>
      {tags.map((tag: Tag) => (
        <Button
          key={tag.id}
          className="uppercase py-5 px-8 bg-[#4C0BF7]"
          onClick={() => fetchVideos(tag.id)}
        >
          {tag.slug}s
        </Button>
      ))}
    </section>
  )
}
