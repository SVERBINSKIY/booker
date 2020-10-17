import React from 'react'

export const PropertyType = ({ filterName, catalog, handleSetPropertyTypeChange}) => {
  const checkHotel = catalog.filterSide.propertyType
  const handleCheckChange = e => {
    handleSetPropertyTypeChange(e.target.name)
  }

  return (
    <div className='property-type filter-side__filter-element'>
      <span className='filter-name'>{ filterName }</span>
      <ul>
        <li className="checkbox">
          <input className="checkbox-spin"
                 style={{cursor: 'pointer'}}
                 type="checkbox" id="check1"
                 name='hotel'
                 value={checkHotel.hotel}
                 checked={checkHotel.hotel}
                 onChange={handleCheckChange}
          />
          <label htmlFor="check1"><span></span>Hotel</label>
        </li>
        <li className="checkbox">
          <input className="checkbox-spin"
                 type="checkbox"
                 id="check2"
                 name='apartment'
                 value={checkHotel.apartment}
                 checked={checkHotel.apartment}
                 onChange={handleCheckChange}
          />
          <label htmlFor="check2"><span></span>Apartment</label>
        </li>
      </ul>
    </div>
  )
}