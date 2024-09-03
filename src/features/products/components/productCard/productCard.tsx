import RatingStars from '@src/components/ui/ratingStars/ratingStars'
import { ProductProps } from '@src/types/productProps'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { name, image, description, rating } = product
  return (
    <div className='flex flex-col max-w-[288px] max-h-[400px] m-2 bg-white rounded-lg overflow-hidden shadow-md '>
      <Image
        src={image}
        alt='Product image'
        width={288}
        height={170}
        className='aspect-[288/170]'
      />
      <div className='flex flex-col justify-between flex-1 p-4 font-semibold text-sm '>
        <div>
          <h2 className='text-lg text-[#1A1B1D]'>{name}</h2>
          <span className='text-[#9194A5] line-clamp-3'>{description}</span>
        </div>
        <div className='flex flex-col gap-5'>
          <RatingStars rating={rating} />
          <button className='bg-[#4460F7] rounded py-[7px] text-white'>
            Show details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
