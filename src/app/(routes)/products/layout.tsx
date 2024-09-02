import React, { ReactNode } from 'react'
import Pagination from '@src/features/products/components/productsLayout/pagination/pagination'
import ProductsNavbar from '@src/features/products/components/productsLayout/productsNavbar/productsNavbar'

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='size-full flex flex-col justify-between'>
      <ProductsNavbar />
      {children}
      <Pagination />
    </main>
  )
}

export default ProductsLayout
