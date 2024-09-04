import React from 'react'
import { Props } from './pagination.types'
import usePagination from './usePagination'
import NavigationButton from './navigationButton/navigationButton'

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const { paginationRange } = usePagination({
    totalPages,
    currentPage,
  })
  return (
    <div className='flex items-center gap-6 font-semibold text-sm pb-3'>
      <NavigationButton
        onPageChange={onPageChange}
        navigateToPage={1}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <ul className={'flex gap-4 '}>
        {paginationRange?.map((pageNumber, index) => {
          return (
            <li
              key={index}
              className={`${
                pageNumber === currentPage ? 'text-blue-500' : 'text-black'
              } cursor-pointer`}
              onClick={(event) => {
                if (typeof pageNumber === 'number') {
                  onPageChange(pageNumber)
                } else {
                  event.preventDefault()
                }
              }}
            >
              {pageNumber}
            </li>
          )
        })}
      </ul>
      <NavigationButton
        onPageChange={onPageChange}
        navigateToPage={totalPages}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Pagination
