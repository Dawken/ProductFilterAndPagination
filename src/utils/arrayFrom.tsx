import React, { Fragment, ReactNode } from 'react'

const arrayFrom = (length: number, node: ReactNode) => {
  return Array.from({ length }, (_, i) => <Fragment key={i}>{node}</Fragment>)
}

export default arrayFrom
