import React from 'react'

export const UserRating = ({ filterName }) => {
  return (
    <div className='stars filter-side__filter-element'>
      <span className='filter-name'>{filterName}</span>
    </div>
  )
}