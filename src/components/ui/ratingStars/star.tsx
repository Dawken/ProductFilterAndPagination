import React from 'react'

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill={filled ? '#F9A52B' : 'transparent'}
      stroke={filled ? '#F9A52B' : '#B1B5C9'}
      strokeWidth='2'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
    </svg>
  )
}
export default Star
