import { Tag } from '@/types/videos'
import { Button } from '../ui/button'

type FilterSectionProps = {
  tags: Tag[]
  currentPage: number
  createQueryString: (currentPage: number, tagId: string) => void
}

export default function FilterSection({ tags, createQueryString }: FilterSectionProps) {
  return (
    <section
      aria-label="filter jobs"
      className="w-full my-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-2 lg:block lg:text-right lg:space-x-2"
    >
      <Button className="uppercase py-5 px-8 bg-[#4C0BF7]" onClick={() => createQueryString(1, '')}>
        all
      </Button>
      {tags.map((tag: Tag) => (
        <Button
          key={tag.id}
          className="uppercase py-5 px-8 bg-[#4C0BF7]"
          onClick={() => createQueryString(1, tag.id)}
        >
          {tag.slug}s
        </Button>
      ))}
    </section>
  )
}
