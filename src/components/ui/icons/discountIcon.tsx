import { IconSizeProps } from '@src/types/iconSizeProps'
import React from 'react'

const DiscountIcon = ({ width, height }: IconSizeProps) => {
  return (
    <svg
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='currentColor'
      height={height ?? 20}
      width={width ?? 20}
    >
      <path d='M12.79 21 3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z'></path>
      <path d='M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM7.25 3c.69 0 1.25.56 1.25 1.25S7.94 5.5 7.25 5.5 6 4.94 6 4.25 6.56 3 7.25 3'></path>
    </svg>
  )
}

export default DiscountIcon
