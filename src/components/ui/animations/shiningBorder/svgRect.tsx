import React from 'react'

const SvgRect = ({ borderRadius }: { borderRadius: number }) => {
    return (
        <svg width='100%' height='100%'>
            <rect
                x='0'
                y='0'
                width='100%'
                height='100%'
                rx={borderRadius}
                ry={borderRadius}
                pathLength='10'
            ></rect>
        </svg>
    )
}

export default SvgRect
