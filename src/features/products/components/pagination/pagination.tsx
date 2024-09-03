'use client'
import React from 'react'
import Link from 'next/link'
import usePagination from './usePagination'
import handleSearchParams from '@src/utils/handleSearchParams'

const Pagination = () => {
  const { page, totalPages, searchParams } = usePagination()
  return (
    <div className='flex justify-center'>
      {page > 1 && (
        <Link href={handleSearchParams(searchParams, { page: page - 1 })}>
          <button>Previous</button>
        </Link>
      )}
      <p>
        Page {page} of {totalPages}
      </p>
      {page < totalPages && (
        <Link href={handleSearchParams(searchParams, { page: page + 1 })}>
          <button>Next</button>
        </Link>
      )}
    </div>
  )
}

export default Pagination
