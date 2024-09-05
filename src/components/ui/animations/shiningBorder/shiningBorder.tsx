import React from 'react'
import SvgRect from './svgRect'
import arrayFrom from '@src/utils/arrayFrom'
import './shiningBorder.css'

const ShiningBorder = ({
  borderRadius,
  autoPlay,
}: {
  borderRadius: number
  autoPlay: boolean
}) => {
  return (
    <div
      className={`${
        autoPlay ? 'autoPlay' : 'singlePlay'
      } absolute borderContainer pointer-events-none`}
    >
      <div className='borderLines'>
        <div>{arrayFrom(4, <SvgRect borderRadius={borderRadius} />)}</div>
        <div>{arrayFrom(4, <SvgRect borderRadius={borderRadius} />)}</div>
      </div>
    </div>
  )
}

export default ShiningBorder
