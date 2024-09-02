'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import productsData from '../../productsData'
import Link from 'next/link'

const Pagination = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page') ?? '1')

  const productsPerPage = 5

  const totalPages = productsData.length / productsPerPage

  return (
    <>
      <div className='pagination'>
        {page > 1 && (
          <Link href={`/products?page=${page - 1}`}>
            <button>Previous</button>
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/products?page=${page + 1}`}>
            <button>Next</button>
          </Link>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </>
  )
}

export default Pagination
