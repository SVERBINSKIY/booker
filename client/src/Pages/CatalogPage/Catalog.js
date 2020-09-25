import React from 'react'
import { connect } from 'react-redux'
import { MenuComponent } from './SearchMenu/MenuComponent'
import { FilterComponent } from './FilterSide/FilterComponent'
import { SearchResult } from './SeacrhResult/SearchResultComponent'
import { CatalogHeader } from './Header/CatalogHeader'
import { catalogToGrid, catalogToList } from '../../redux/actions/catalogActions'

const Catalog = ({ catalogLayout, countFindHotels, catalogToGrid, catalogToList }) => {
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
          countFindHotels={countFindHotels}
          catalogLayout={catalogLayout}
          catalogToGrid={catalogToGrid}
          catalogToList={catalogToList}
        />
        <FilterComponent />
        <SearchResult
          catalogLayout={catalogLayout}
          hotelsData={hotelsData}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state.catalog
}
const mapDispatchToProps = {
  catalogToGrid,
  catalogToList
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)