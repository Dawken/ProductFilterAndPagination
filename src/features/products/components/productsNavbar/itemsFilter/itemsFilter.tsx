'use client'
import React from 'react'
import SearchIcon from 'public/icons/searchIcon'
import useItemsFilter from './useItemsFilter'
import CheckBox from '@src/components/ui/checkBox/checkBox'

const ItemsFilter = () => {
  const {
    searchTerm,
    setSearchTerm,
    isPromoCheckBoxChecked,
    setIsPromoCheckBoxChecked,
    isActiveCheckBoxChecked,
    setIsActiveCheckBoxChecked,
  } = useItemsFilter()

  return (
    <section className='flex gap-7 items-center text-sm font-semibold'>
      {/* Active checkbox */}
      <div className='flex items-center gap-2'>
        <CheckBox
          isCheckBoxChecked={isActiveCheckBoxChecked}
          setisCheckBoxChecked={setIsActiveCheckBoxChecked}
        />
        Active
      </div>
      {/* Promo checkbox */}
      <div className='flex items-center gap-2'>
        <CheckBox
          isCheckBoxChecked={isPromoCheckBoxChecked}
          setisCheckBoxChecked={setIsPromoCheckBoxChecked}
        />
        Promo
      </div>
      {/* Input */}
      <div className='flex items-center w-[380px] h-[45px] outline outline-[1px] outline-lightGrey rounded-lg text-black'>
        <input
          className='size-full outline-none pl-2'
          placeholder='Search'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className='pr-4'>
          <SearchIcon width={26} height={26} />
        </button>
      </div>
    </section>
  )
}

export default ItemsFilter
