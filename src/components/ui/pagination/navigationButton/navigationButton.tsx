import React from 'react'
import { Props } from './navigationButton.types'

const NavigationButton = ({
  onPageChange,
  navigateToPage,
  currentPage,
  totalPages,
}: Props) => {
  if (totalPages < 1) {
    return null
  }
  return (
    <button
      className={'disabled:text-[#9194A5] disabled:cursor-not-allowed'}
      onClick={() => onPageChange(navigateToPage)}
      disabled={currentPage === navigateToPage}
    >
      {navigateToPage === 1 ? 'First' : 'Last'}
    </button>
  )
}

export default NavigationButton
