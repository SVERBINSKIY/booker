import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MenuComponent } from './SearchMenu/MenuComponent'
import { FilterComponent } from './FilterSide/FilterComponent'
import { SearchResult } from './SeacrhResult/SearchResultComponent'
import { CatalogHeader } from './Header/CatalogHeader'
import { catalogToGrid, catalogToList, handleGetAllHotels } from '../../redux/actions/catalogActions'

const Catalog = ({ app, catalog, catalogToGrid, catalogToList, handleGetAllHotels }) => {

  useEffect(() => {
    handleGetAllHotels()
  }, [handleGetAllHotels])

  return (
    <div className='catalog'>
      <div className='catalog__container'>
        <MenuComponent />
        <CatalogHeader
          countFindHotels={catalog.hotels.length}
          catalogLayout={catalog.catalogLayout}
          catalogToGrid={catalogToGrid}
          catalogToList={catalogToList}
        />
        <FilterComponent />
         <SearchResult
           loading={app.loading}
           catalogLayout={catalog.catalogLayout}
           hotelsData={catalog.hotels}
         />

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = {
  catalogToGrid,
  catalogToList,
  handleGetAllHotels
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)