import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'

export const PriceRange = ({ filterName, price, handlePriceRangeChange }) => {
  const [value, setValue] = useState([price.min, price.max])
  const handleChange = (event, newValue) => {
    setValue(newValue)
    handlePriceRangeChange(value[0], value[1])
  }
  return (
    <div className='price-range filter-side__filter-element'>
      <span className='filter-name'>{filterName}</span>
      <span className='left-value'>{value[0]}$</span>
      <span className='right-value'>{value[1]}$</span>
      <Slider
        value={value}
        style={{color: '#72BE2E'}}
        min={price.min}
        max={price.max}
        onChange={handleChange}
        valueLabelDisplay='off'
        aria-labelledby='range-slider'
      />
    </div>
  )
}