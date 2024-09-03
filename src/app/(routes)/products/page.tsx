import React from 'react'
import { Props } from './products.types'
import useProducts from './useProducts'
import ProductCard from '@src/features/products/components/productCard/productCard'
import ProductsNavbar from '@src/features/products/components/productsNavbar/productsNavbar'
import Pagination from '@src/features/products/components/pagination/pagination'

const Products = ({ searchParams }: Props) => {
  const { products } = useProducts({ searchParams })

  return (
    <main className='size-full flex flex-col justify-between'>
      <ProductsNavbar />
      <section className='flex justify-center flex-1 overflow-y-auto py-4'>
        <div className='w-full max-w-[1220px] gap-4 items-center h-fit min-h-full grid grid-cols-[repeat(auto-fill,_minmax(288px,1fr))] grid-rows-2 justify-center justify-items-center align-items-center'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </section>
      <Pagination />
    </main>
  )
}

export default Products
