import React from 'react'
import ItemsFilter from './itemsFilter/itemsFilter'

const ProductsNavbar = () => {
  return (
    <header className='flex justify-evenly items-center gap-12 py-5 bg-white'>
      <h1 className='text-4xl p-2'>Logo</h1>
      <ItemsFilter />
      <button>Login</button>
    </header>
  )
}

export default ProductsNavbar
