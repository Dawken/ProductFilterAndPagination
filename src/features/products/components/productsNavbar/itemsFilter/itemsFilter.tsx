'use client'
import React from 'react'
import SearchIcon from '@src/components/ui/icons/searchIcon'
import useItemsFilter from './useItemsFilter'
import CheckBox from '@src/components/ui/checkBox/checkBox'
import './itemsFilter.css'
import ShiningBorder from '@src/components/ui/animations/shiningBorder/shiningBorder'

const ItemsFilter = () => {
  const {
    searchTerm,
    setSearchTerm,
    isPromoCheckBoxChecked,
    setIsPromoCheckBoxChecked,
    isActiveCheckBoxChecked,
    setIsActiveCheckBoxChecked,
    isInputFocused,
    checkIsInputFocused,
    inputRef,
  } = useItemsFilter()

  return (
    <section className='w-full flex gap-4 max-md:justify-start md:justify-center max-md:flex-wrap-reverse items-center text-sm font-semibold'>
      <div className='w-fit flex gap-6 justify-end'>
        <div className='flex items-center gap-2'>
          <CheckBox
            isCheckBoxChecked={isActiveCheckBoxChecked}
            setIsCheckBoxChecked={setIsActiveCheckBoxChecked}
            id={'active'}
          />
          <label htmlFor='active'>Active</label>
        </div>
        <div className='flex items-center gap-2'>
          <CheckBox
            isCheckBoxChecked={isPromoCheckBoxChecked}
            setIsCheckBoxChecked={setIsPromoCheckBoxChecked}
            id={'promo'}
          />
          <label htmlFor='promo'>Promo</label>
        </div>
      </div>
      <div className='w-full md:max-w-[392px] max-md:flex-1 h-[48px] min-w-[288px] text-black relative'>
        <div className='flex justify-center expandSearchBarAnimation h-full w-0  outline outline-[1px] outline-lightGrey rounded-lg '>
          <input
            ref={inputRef}
            className='size-full outline-none pl-2'
            placeholder='Search'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onClick={checkIsInputFocused}
            onBlur={checkIsInputFocused}
          />
          <div className='flex items-center aspect-square'>
            <SearchIcon width={26} height={26} />
          </div>
          <ShiningBorder borderRadius={4} autoPlay={isInputFocused} />
        </div>
      </div>
    </section>
  )
}

export default ItemsFilter
