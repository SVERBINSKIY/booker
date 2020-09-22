import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'

export const PriceRange = ({ filterName }) => {
  const [value, setValue] = useState([0, 500])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='price-range filter-side__filter-element'>
      <span className='filter-name'>{filterName}</span>
      <span className='left-value'>{value[0]}$</span>
      <span className='right-value'>{value[1]}$</span>
      <Slider
        value={value}
        style={{color: '#72BE2E'}}
        min={0}
        max={500}
        onChange={handleChange}
        valueLabelDisplay='off'
        aria-labelledby='range-slider'
      />
    </div>
  )
}