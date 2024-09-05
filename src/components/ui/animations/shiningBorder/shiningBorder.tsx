import React from 'react'
import SvgRect from './svgRect'
import arrayFrom from '@src/utils/arrayFrom'
import './shiningBorder.css'

interface CustomCSSProperties extends React.CSSProperties {
  '--animation-delay'?: string
}
const ShiningBorder = ({
  borderRadius,
  delay,
  autoPlay,
}: {
  borderRadius: number
  delay: number
  autoPlay: boolean
}) => {
  const style: CustomCSSProperties = {
    '--animation-delay': `${delay}s`,
  }
  return (
    <div
      className={`${
        autoPlay ? 'autoPlay' : 'singlePlay'
      } absolute borderContainer pointer-events-none`}
      style={style}
    >
      <div className='borderLines'>
        <div>{arrayFrom(4, <SvgRect borderRadius={borderRadius} />)}</div>
        <div>{arrayFrom(4, <SvgRect borderRadius={borderRadius} />)}</div>
      </div>
    </div>
  )
}

export default ShiningBorder
