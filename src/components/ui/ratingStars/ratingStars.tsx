import React from 'react'
import Star from './star'

const RatingStars = ({ rating }: { rating: string }) => {
  const starRating = Number(rating)
  const TOTAL_STARS = 5
  const filledStars = Math.floor(starRating / 2)
  const hasHalfStar = starRating % 2 !== 0

  return (
    <div className='flex gap-2'>
      {[...Array(TOTAL_STARS)].map((_, index) => (
        <div key={index} className='relative'>
          <Star filled={index < filledStars} />
          {index === filledStars && hasHalfStar && (
            <div className='absolute top-0 left-0 w-1/2 h-full overflow-hidden'>
              <Star filled={true} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default RatingStars
