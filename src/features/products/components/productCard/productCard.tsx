import { ProductProps } from '@src/types/productProps'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { name, image } = product
  return (
    <div className='max-w-[288px] max-h-[400px] m-2 bg-white rounded-xl overflow-hidden'>
      <Image src={image} alt='Product image' width={288} height={170} />
      {name}
    </div>
  )
}

export default ProductCard
