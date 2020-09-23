import React from 'react'

export const PropertyType = ({ filterName }) => {
  return (
    <div className='property-type filter-side__filter-element'>
      <span className='filter-name'>{ filterName }</span>
    </div>
  )
}