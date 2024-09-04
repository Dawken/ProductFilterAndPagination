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
    <section className='w-full flex gap-4 max-md:justify-start md:justify-center max-md:flex-wrap-reverse items-center text-sm font-semibold'>
      {/* Active checkbox */}
      <div className='w-fit flex gap-6 justify-end'>
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
      </div>
      {/* Input */}
      <div className='flex w-full items-center md:max-w-[392px] max-md:flex-1 h-[48px] min-w-[288px] outline outline-[1px] outline-lightGrey rounded-lg text-black'>
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
