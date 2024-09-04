'use client'
import React from 'react'
import useProductsPagination from './useProductsPagination'
import Pagination from '@src/components/ui/pagination/pagination'

const ProductsPagination = () => {
  const { totalPages, handlePageClick, page } = useProductsPagination()

  return (
    <div className='flex justify-center py-3'>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => handlePageClick(page)}
      />
    </div>
  )
}

export default ProductsPagination
