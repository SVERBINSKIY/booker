import React from 'react'
import { PriceRange } from './PriceRange'
import { UserRating } from './UserRating'
import { PropertyType } from './PropertyType'

export const FilterComponent = ({ catalog, loading, handlePriceRangeChange, handleSetPropertyTypeChange }) => {
const stateFilter = {
  priceRange: {
    filterName: 'Price Range'
  },
  userRating: {
    filterName: 'User Rating'
  },
  propertyType: {
    filterName: 'Property Type'
  }
}



  return (
    <div className='catalog__filter-side '>
      {
        loading ? loading : <PriceRange
                              filterName={stateFilter.priceRange.filterName}
                              price={catalog.filterSide.price}
                              handlePriceRangeChange={handlePriceRangeChange}
                            />
      }
      <UserRating
        filterName={stateFilter.userRating.filterName}
        catalog={catalog}
      />
      <PropertyType
        filterName={stateFilter.propertyType.filterName}
        catalog={catalog}
        handleSetPropertyTypeChange={handleSetPropertyTypeChange}
      />
    </div>
  )
}