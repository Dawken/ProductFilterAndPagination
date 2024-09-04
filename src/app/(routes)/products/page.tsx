import React from 'react'
import { Props } from './products.types'
import useProducts from './useProducts'
import ProductCard from '@src/features/products/components/productCard/productCard'
import ProductsNavbar from '@src/features/products/components/productsNavbar/productsNavbar'
import ProductsPagination from '@src/features/products/components/productsPagination/productsPagination'

const Products = ({ searchParams }: Props) => {
  const { products } = useProducts({ searchParams })

  return (
    <main className='size-full flex flex-col justify-between'>
      <ProductsNavbar />
      <section className='flex justify-center flex-1 overflow-y-auto pt-3 px-3'>
        {products.length > 0 ? (
          <div className='w-full max-w-[1220px] gap-y-4 gap-x-1 h-fit min-h-full items-center grid grid-cols-[repeat(auto-fill,_minmax(288px,1fr))] grid-rows-2 justify-center justify-items-center align-items-center'>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        ) : (
          <div className='text-4xl text-black'>No results :(</div>
        )}
      </section>
      <ProductsPagination />
    </main>
  )
}

export default Products
