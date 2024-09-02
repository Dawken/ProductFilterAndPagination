import Pagination from '@src/features/products/productsLayout/components/pagination'
import ProductsNavbar from '@src/features/products/productsLayout/components/productsNavbar'
import React, { ReactNode } from 'react'

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ProductsNavbar />
      {children}
      <Pagination />
    </div>
  )
}

export default ProductsLayout
