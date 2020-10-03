import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  handleAddHotel,
  handleInputChange,
  handleLoadCountry,
  handleSelectCountry
} from '../../redux/actions/representativeAction'

const RepresentativeAddNewHotel = ({ representative,
                                     handleInputChange,
                                     handleLoadCountry,
                                     handleSelectCountry,
                                     handleAddHotel }) => {

  useEffect(() => {
    handleLoadCountry()
  }, [handleLoadCountry])
  const handleLocalInputChange = e => {
    const name = e.target.name
    const value = e.target.value
    handleInputChange(name, value)
  }
  const handleSelectCountryChange = e => {
    const name = e.target.name
    const value = e.target.value
    handleSelectCountry(name, value)
  }
  const handleAddHotelClick = e => {
    e.preventDefault()
    const form = representative.addHotel
    handleAddHotel(form)
  }

  return (
    <div className='add-hotel'>
      <div className='add-hotel__header'>
        <h2>Add New Hotel</h2>
      </div>
      <div className='add-hotel__content'>
        <div>
          <h3>Title</h3>
          <input
            type='text'
            name='name'
            onChange={handleLocalInputChange}
            value={representative.addHotel.name} />
        </div>
        <div>
          <h3>Enter Country</h3>
          <select onChange={handleSelectCountryChange} value={representative.addHotel.country} name='country'>
            {representative.loadCountry.map(c => <option value={c._id} key={c._id}>{c.name}</option>)}
          </select>
          <h3>Enter City</h3>
          <select onChange={handleLocalInputChange} value={representative.addHotel.city} name='city'>
            {representative.loadCity.map(c => <option value={c._id} key={c._id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <h3>Stars</h3>
          <input
            type='number'
            name='stars'
            max='5'
            min='0'
            onChange={handleLocalInputChange}
            value={representative.addHotel.stars}
          />
        </div>
        <div>
          <h3>description</h3>
          <textarea
            name='description'
            onChange={handleLocalInputChange}
            value={representative.addHotel.description}
          >
          </textarea>
        </div>
        <div>
          <h3>Min Price</h3>
          <input
            type='text'
            name='minPrice'
            onChange={handleLocalInputChange}
            value={representative.addHotel.minPrice}
          />
        </div>
        <div>
          <h3>Max Price</h3>
          <input
            type='text'
            name='maxPrice'
            onChange={handleLocalInputChange}
            value={representative.addHotel.maxPrice}
          />
        </div>
        <div>
          <h3>Load Photo</h3>
          <input type='file' name='files' />
        </div>
      </div>
      <button onClick={handleAddHotelClick}>ADD</button>
    </div>
  )
}

const mapStateToProp = state => state
const mapDispatchToProps = {
  handleInputChange,
  handleLoadCountry,
  handleSelectCountry,
  handleAddHotel
}

export default connect(mapStateToProp, mapDispatchToProps)(RepresentativeAddNewHotel)