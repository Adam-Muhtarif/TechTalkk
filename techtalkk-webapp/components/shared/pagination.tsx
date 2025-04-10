import Link from 'next/link'

type PaginationProps = {
  currentPage: number
  totalPages: number
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-3 mt-10">
      {/* Previous Page Link */}
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Prev
        </Link>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1
        return (
          <Link
            key={pageNum}
            href={`?page=${pageNum}`}
            className={`px-4 py-2 rounded ${pageNum === currentPage ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {pageNum}
          </Link>
        )
      })}

      {/* Next Page Link */}
      {currentPage < totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination
