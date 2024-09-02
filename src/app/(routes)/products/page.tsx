import React from 'react'
import { Props } from './products.types'
import useProducts from './useProducts'

const Products = ({ searchParams }: Props) => {
  const { entries } = useProducts({ searchParams })

  return (
    <section className='flex-1 bg-lightGrey/30'>
      {entries.map((entry) => {
        return <div key={entry.id}>{entry.name}</div>
      })}
    </section>
  )
}

export default Products
