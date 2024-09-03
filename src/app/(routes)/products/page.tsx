import React from 'react'
import { Props } from './products.types'
import useProducts from './useProducts'
import ProductCard from '@src/features/products/components/productCard/productCard'

const Products = ({ searchParams }: Props) => {
  const { products } = useProducts({ searchParams })

  return (
    <section className='flex justify-center flex-1 overflow-y-auto'>
      <div className='w-full max-w-[1250px] h-fit min-h-full grid grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] justify-center justify-items-center align-items-center py-4'>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </section>
  )
}

export default Products
