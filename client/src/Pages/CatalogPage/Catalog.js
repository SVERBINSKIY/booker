import React from 'react'
import { MenuComponent } from './SearchMenu/MenuComponent'
import { FilterComponent } from './FilterSide/FilterComponent'
import { SearchResult } from './SeacrhResult/SearchResultComponent'
import { CatalogHeader } from './Header/CatalogHeader'

export const Catalog = () => {
  const catalogState = {
    catalogLayout: 'grid',
    countFindHotels: 5
  }
  const hotelsData = [
    {
      id: 0,
      hotelName: 'Hilton Hotel',
      hotelLocation: 'Brest, Belarus',
      hotelStars: 'stars',
      hotelDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      hotelPrice: 120
    },
    {
      id: 1,
      hotelName: 'Hilton Hotel',
      hotelLocation: 'Brest, Belarus',
      hotelStars: 'stars',
      hotelDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      hotelPrice: 120
    },
    {
      id: 2,
      hotelName: 'Hilton Hotel',
      hotelLocation: 'Brest, Belarus',
      hotelStars: 'stars',
      hotelDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      hotelPrice: 120
    },
  ]

  return (
    <div className='catalog'>
      <div className='catalog__container'>
        <MenuComponent />
        <CatalogHeader
          countFindHotels={catalogState.countFindHotels}
          catalogLayout={catalogState.catalogLayout}
        />
        <FilterComponent />
        <SearchResult
          catalogLayout={catalogState.catalogLayout}
          hotelsData={hotelsData}
        />
      </div>
    </div>
  )
}