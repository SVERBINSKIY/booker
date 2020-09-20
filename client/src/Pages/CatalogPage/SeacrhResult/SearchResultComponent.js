import React from 'react'
import { HotelCard } from './HotelCard'

export const SearchResult = () => {
  return (
    <div className='catalog__search-result'>
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  )
}