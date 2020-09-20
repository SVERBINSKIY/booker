import React from 'react'
import { FilterElement } from './FilterElement'

export const FilterComponent = () => {
  return (
    <div className='catalog__filter-side'>
      <FilterElement />
      <FilterElement />
      <FilterElement />
      <FilterElement />
    </div>
  )
}