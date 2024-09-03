import RatingStars from '@src/components/ui/ratingStars/ratingStars'
import { ProductProps } from '@src/types/productProps'
import Image from 'next/image'
import DiscountIcon from 'public/icons/discountIcon'
import React from 'react'

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { name, image, description, rating, promotion, active } = product
  return (
    <div className='flex flex-col size-full max-w-[288px] max-h-[400px] m-2 bg-white rounded-lg overflow-hidden shadow-md relative'>
      {promotion && (
        <span
          className={`flex items-center gap-1 ${
            active ? 'bg-black text-lightGreen' : 'bg-white/30 text-black/50'
          } absolute top-6 px-2.5 py-1 rounded-r-full font-semibold text-sm z-10`}
        >
          Promo
          <DiscountIcon height={18} width={18} />
        </span>
      )}
      <Image
        src={image}
        alt='Product image'
        width={288}
        height={170}
        className={`aspect-[288/170] ${active ? 'grayscale-0' : 'grayscale'}`}
      />
      <div className='flex flex-col justify-between flex-1 p-4 font-semibold text-sm '>
        <div>
          <h2 className='text-lg text-[#1A1B1D]'>{name}</h2>
          <span className='text-[#9194A5] line-clamp-3'>{description}</span>
        </div>
        <div className='flex flex-col gap-5'>
          <RatingStars rating={rating} />
          <button
            className={` rounded py-[9px] text-white ${
              active ? 'bg-[#4460F7]' : 'bg-[#9194A5]'
            }`}
          >
            {active ? 'Show details' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
