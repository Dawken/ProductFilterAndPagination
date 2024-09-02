'use client'
import React from 'react'
import SearchIcon from 'public/icons/searchIcon'
import useItemsFilter from './useItemsFilter'

const ItemsFilter = () => {
  const { searchTerm, setSearchTerm } = useItemsFilter()

  return (
    <div className='flex items-center w-[380px] h-[45px] outline outline-[1px] outline-lightGrey rounded-md text-black'>
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
  )
}

export default ItemsFilter
