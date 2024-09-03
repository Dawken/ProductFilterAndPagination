'use client'
import React from 'react'
import Link from 'next/link'
import usePagination from './usePagination'
import handleSearchParams from '@src/utils/handleSearchParams'

const Pagination = () => {
  const { page, totalPages, searchTerm } = usePagination()
  return (
    <div className='flex justify-center'>
      {page > 1 && (
        <Link href={handleSearchParams({ page: page - 1, searchTerm })}>
          <button>Previous</button>
        </Link>
      )}
      {page < totalPages && (
        <Link href={handleSearchParams({ page: page + 1, searchTerm })}>
          <button>Next</button>
        </Link>
      )}
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination
