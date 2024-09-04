import React from 'react'
import { Props } from './navigationButton.types'

const NavigationButton = ({
  onPageChange,
  navigateToPage,
  currentPage,
  totalPages,
}: Props) => {
  return (
    totalPages > 0 && (
      <button
        className={'disabled:text-[#9194A5] disabled:cursor-not-allowed'}
        onClick={() => onPageChange(navigateToPage)}
        disabled={currentPage === navigateToPage}
      >
        {navigateToPage === 1 ? 'First' : 'Last'}
      </button>
    )
  )
}

export default NavigationButton
