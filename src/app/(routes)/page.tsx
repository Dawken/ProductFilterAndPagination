import Link from 'next/link'
import ShoppingCartIcon from '@src/components/ui/icons/shoppingCartIcon'
import React from 'react'

const Home = () => {
  return (
    <main className='size-full flex items-center justify-center'>
      <Link
        href={'/products'}
        className='font-medium flex items-center justify-center gap-1 bg-blue-600/20 text-blue-500 px-3 py-1 rounded-full hover:bg-blue-600/30 transition-all duration-300'
      >
        Show products
        <ShoppingCartIcon />
      </Link>
    </main>
  )
}
export default Home
