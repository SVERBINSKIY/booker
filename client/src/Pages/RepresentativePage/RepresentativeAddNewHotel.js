import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  handleAddHotel,
  handleInputChange,
  handleLoadCountry,
  handleSelectCountry,
  handleSelectPropertyTypeChange,
} from '../../redux/actions/representativeAction'

const RepresentativeAddNewHotel = (props) => {
  const formData = new FormData()
  const { handleLoadCountry } = props
  useEffect(() => {
    handleLoadCountry()
  }, [handleLoadCountry])

  const handleLocalInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    props.handleInputChange(name, value)
  }
  const handleSelectCountryChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    props.handleSelectCountry(name, value)
  }
  const handleSelectPropertyTypeChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    props.handleSelectPropertyTypeChange(name, value)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    formData.append('file', file)
  }
  const handleAddHotelClick = (e) => {
    e.preventDefault()
    const form = props.representative.addHotel
    formData.append('name', form.name)
    formData.append('country', form.country)
    formData.append('city', form.city)
    formData.append('propertyType', form.propertyType)
    formData.append('stars', form.stars)
    formData.append('description', form.description)
    formData.append('minPrice', form.minPrice)
    formData.append('maxPrice', form.maxPrice)
    props.handleAddHotel(formData)
  }

  return (
    <div className='add-hotel'>
      <div className='add-hotel__header'>
        <h2>Add New Hotel</h2>
      </div>
      <form className='add-hotel__content'>
        <div>
          <h3>Title</h3>
          <input
            type='text'
            name='name'
            onChange={handleLocalInputChange}
            value={props.representative.addHotel.name}
          />
        </div>
        <div>
          <h3>Enter Country</h3>
          <select
            onChange={handleSelectCountryChange}
            value={props.representative.addHotel.country}
            name='country'
          >
            {props.representative.loadCountry.map((c) => (
              <option value={c._id} key={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          <h3>Enter City</h3>
          <select
            onChange={handleLocalInputChange}
            value={props.representative.addHotel.city}
            name='city'
          >
            {props.representative.loadCity.map((c) => (
              <option value={c._id} key={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Property Type</h3>
          <select name='propertyType' onChange={handleSelectPropertyTypeChange}>
            <option value='0'></option>
            <option value='hotel'>Отель</option>
            <option value='apartments'>Аппартаменты</option>
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
            value={props.representative.addHotel.stars}
          />
        </div>
        <div>
          <h3>description</h3>
          <textarea
            name='description'
            onChange={handleLocalInputChange}
            value={props.representative.addHotel.description}
          ></textarea>
        </div>
        <div>
          <h3>Min Price</h3>
          <input
            type='text'
            name='minPrice'
            onChange={handleLocalInputChange}
            value={props.representative.addHotel.minPrice}
          />
        </div>
        <div>
          <h3>Max Price</h3>
          <input
            type='text'
            name='maxPrice'
            onChange={handleLocalInputChange}
            value={props.representative.addHotel.maxPrice}
          />
        </div>
        <div>
          <h3>Load Photo</h3>
          <input type='file' name='file' onChange={handleFileChange} />
        </div>
      </form>
      <button onClick={handleAddHotelClick}>ADD</button>
    </div>
  )
}

const mapStateToProp = (state) => state
const mapDispatchToProps = {
  handleInputChange,
  handleLoadCountry,
  handleSelectCountry,
  handleAddHotel,
  handleSelectPropertyTypeChange,
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(RepresentativeAddNewHotel)
