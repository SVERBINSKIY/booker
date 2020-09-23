import React from 'react'
import { PriceRange } from './PriceRange'
import { UserRating } from './UserRating'
import { PropertyType } from './PropertyType'
import { AmenityType } from './AmenityType'

export const FilterComponent = () => {
const stateFilter = {
  priceRange: {
    filterName: 'Price Range'
  },
  userRating: {
    filterName: 'User Rating'
  },
  propertyType: {
    filterName: 'Property Type'
  },
  amenityName: {
    filterName: 'Amenity Type'
  }
}

  return (
    <div className='catalog__filter-side '>
      <PriceRange filterName={stateFilter.priceRange.filterName}/>
      <UserRating filterName={stateFilter.userRating.filterName} />
      <PropertyType filterName={stateFilter.propertyType.filterName} />
      <AmenityType filterName={stateFilter.amenityName.filterName} />
    </div>
  )
}