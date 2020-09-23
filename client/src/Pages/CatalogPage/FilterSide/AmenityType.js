import React from 'react'

export const AmenityType = ({ filterName }) => {
  return (
    <div className='amenity-type filter-side__filter-element'>
      <span className='filter-name'>{filterName}</span>
    </div>
  )
}