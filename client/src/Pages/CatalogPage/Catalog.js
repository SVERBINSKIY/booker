import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MenuComponent } from './SearchMenu/MenuComponent'
import { FilterComponent } from './FilterSide/FilterComponent'
import { SearchResult } from './SeacrhResult/SearchResultComponent'
import { CatalogHeader } from './Header/CatalogHeader'
import {
  catalogToGrid,
  catalogToList,
  handleFilterHotel,
  handleGetAllHotels,
  handlePriceRangeChange,
  handleSetPropertyTypeChange,
} from '../../redux/actions/catalogActions'

const Catalog = (props) => {
  const { catalog, handleGetAllHotels, handleFilterHotel } = props
  useEffect(() => {
    if (!catalog.filteredHotel.length) {
      handleGetAllHotels()
    }
  }, [handleGetAllHotels, catalog.filteredHotel])

  useEffect(() => {
    if (catalog.filtered) {
      handleFilterHotel(
        catalog.hotels,
        catalog.filterSearch,
        catalog.filterSide.propertyType
      )
    }
  }, [
    catalog.hotels,
    catalog.filterSearch,
    catalog.filterSide.propertyType,
    catalog.filtered,
    handleFilterHotel,
  ])

  return (
    <div className='catalog'>
      <div className='catalog__container'>
        <MenuComponent />
        <CatalogHeader
          countFindHotels={props.catalog.hotels.length}
          catalogLayout={props.catalog.catalogLayout}
          catalogToGrid={props.catalogToGrid}
          catalogToList={props.catalogToList}
        />
        <FilterComponent
          catalog={props.catalog}
          loading={props.app.loading}
          handlePriceRangeChange={props.handlePriceRangeChange}
          handleSetPropertyTypeChange={props.handleSetPropertyTypeChange}
        />
        <SearchResult
          loading={props.app.loading}
          catalogLayout={props.catalog.catalogLayout}
          hotelsData={
            props.catalog.filteredHotel.length
              ? props.catalog.filteredHotel
              : props.catalog.hotels
          }
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  catalogToGrid,
  catalogToList,
  handleGetAllHotels,
  handlePriceRangeChange,
  handleSetPropertyTypeChange,
  handleFilterHotel,
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
