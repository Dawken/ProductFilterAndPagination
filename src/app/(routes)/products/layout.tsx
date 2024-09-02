import React, { ReactNode } from 'react'
import Pagination from '@src/features/products/productsLayout/components/pagination/pagination'
import ProductsNavbar from '@src/features/products/productsLayout/components/productsNavbar/productsNavbar'

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
