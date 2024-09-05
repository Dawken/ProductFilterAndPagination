import React from 'react'
import ItemsFilter from './itemsFilter/itemsFilter'

const ProductsNavbar = () => {
  return (
    <header className='flex justify-center p-5 bg-white'>
      <div className='flex justify-between max-md:flex-wrap-reverse items-center gap-4 w-full max-w-[1230px]'>
        <h1 className='text-4xl max-md:order-1'>Logo</h1>
        <ItemsFilter />
        <button className='min-w-[100px] h-[38px] rounded border border-[#4460F7] text-[#4460F7] max-md:order-2'>
          Login
        </button>
      </div>
    </header>
  )
}

export default ProductsNavbar
