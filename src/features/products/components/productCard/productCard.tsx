import RatingStars from '@src/components/ui/ratingStars/ratingStars'
import { ProductProps } from '@src/types/productProps'
import Image from 'next/image'
import DiscountIcon from '@src/components/ui/icons/discountIcon'
import React from 'react'

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { name, image, description, rating, promotion, active } = product
  return (
    <div className='group flex flex-col size-full max-w-[288px] max-h-[400px] min-h-[350px] m-2 bg-white rounded-lg overflow-hidden shadow-md relative'>
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
        className={`aspect-[288/170] ${
          active ? 'grayscale-0' : 'grayscale'
        } group-hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out`}
      />
      <div className='flex flex-col justify-between flex-1 font-semibold text-sm'>
        <div className='group-hover:-translate-y-11 -translate-y-2 rounded-t-xl transition-all duration-300 ease-in-out bg-white px-4 pt-3'>
          <h2 className='text-lg text-[#1A1B1D]'>{name}</h2>
          <div className='text-[#9194A5] overflow-hidden text-ellipsis max-h-[50px] group-hover:max-h-[70px] group-hover:mt-4 leading-4 transition-all duration-300 ease-in-out'>
            {description}
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 px-4 absolute bottom-4'>
          <RatingStars rating={rating} />
          <button
            className={`rounded py-[9px] text-white ${
              active ? 'bg-[#4460F7]' : 'bg-[#9194A5] cursor-not-allowed'
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
