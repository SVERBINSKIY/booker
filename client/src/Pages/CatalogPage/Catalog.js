import React from 'react'
import { MenuComponent } from './SearchMenu/MenuComponent'
import { FilterComponent } from './FilterSide/FilterComponent'
import { SearchResult } from './SeacrhResult/SearchResultComponent'
import { CatalogHeader } from './Header/CatalogHeader'

export const Catalog = (props) => {
  return (
    <div className='catalog'>
      <div className='catalog__container'>
        <MenuComponent />
        <CatalogHeader />
        <FilterComponent />
        <SearchResult />
      </div>
    </div>
  )
}