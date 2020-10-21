import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  handleInputText,
  handleInputNumber,
  handleInputBedCount,
  handleButtonAddRooms,
} from '../../redux/actions/representativeAction'
import { defenitionOfAccommodation } from '../../utils/defenitionOfAccommodation.utils'

const RepresentativeAddRoms = (props) => {
  const { id } = useParams()
  const addRoomsForm = props.representative.addRooms

  const handleInputTextChange = (e) => {
    e.persist()
    props.handleInputText(e.target.name, e.target.value)
  }
  const handleInputNumberChange = (e) => {
    e.persist()
    const value = +e.target.value
    props.handleInputNumber(e.target.name, value)
  }
  const handleInputBedCountChange = (e) => {
    e.persist()
    const value = +e.target.value
    const candidateAccommodationTypes = defenitionOfAccommodation(value)
    props.handleInputBedCount(e.target.name, value, candidateAccommodationTypes)
  }
  const handleButtonAddRoomsClick = (e) => {
    e.preventDefault()
    const fetchForm = addRoomsForm
    const hotelId = { hotelId: id }
    const totalForm = Object.assign(fetchForm, hotelId)
    props.handleButtonAddRooms(totalForm)
  }

  return (
    <div className='add-room__wrapper'>
      <h2>Add rooms to hotel</h2>
      <div className='form'>
        <fieldset>
          <legend>
            <h5>Configuration Room</h5>
          </legend>
          <label htmlFor='roomType'>Type</label>
          <br />
          <select
            name='roomType'
            id='roomType'
            className='select'
            onChange={handleInputTextChange}
          >
            <optgroup label='All'>
              <option value='null'>Select Room Type</option>
              <option value='apartment'>Apartment</option>
              <option value='balcony'>Balcony</option>
              <option value='delux'>Delux</option>
              <option value='duplex'>Duplex</option>
              <option value='familyRoom'>Family Room</option>
              <option value='president'>President</option>
              <option value='std'>Standart</option>
              <option value='studio'>Studio</option>
              <option value='superior'>Superior</option>
            </optgroup>
            <optgroup label='For family with children'>
              <option value='std'>Standart</option>
              <option value='familyRoom'>Family Room</option>
              <option value='apartment'>Apartment</option>
            </optgroup>
          </select>
          <br />
          <label htmlFor='bedCount'>Bed Count</label>
          <br />
          <input
            type='number'
            name='bedCount'
            id='bedCount'
            min='1'
            max='5'
            className='price'
            value={addRoomsForm.bedCount}
            onChange={handleInputBedCountChange}
          />
          <br />
          <div
            style={
              addRoomsForm.accommodationTypes.length === 0
                ? { display: 'none' }
                : { display: 'flex' }
            }
            className='generate-accommodation'
          >
            {addRoomsForm.accommodationTypes.length !== 0
              ? addRoomsForm.accommodationTypes.map((type) => (
                  <div key={type.type} className='generate-accommodation__type'>
                    <span>{type.type}</span> <br />
                    Adult: {type.adult} <br />
                    Children: {type.child} <br />
                    Total: {type.totalBedCount}
                  </div>
                ))
              : ''}
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h5>Description Room</h5>
          </legend>
          <label htmlFor='descriptionRoom'>Description Room</label>
          <br />
          <textarea
            name='description'
            id='descriptionRoom'
            cols='30'
            rows='3'
            value={addRoomsForm.description}
            onChange={handleInputTextChange}
          ></textarea>
          <br />
          <label htmlFor='priceRoom'>Price Adults</label>
          <br />
          <input
            type='number'
            name='priceAdults'
            id='priceRoom'
            className='price'
            value={addRoomsForm.priceAdults}
            onChange={handleInputNumberChange}
          />
          <br />
          <label htmlFor='priceRoomChildren'>Price Children</label>
          <br />
          <input
            type='number'
            name='priceChildren'
            id='priceChildren'
            className='price'
            value={addRoomsForm.priceChildren}
            onChange={handleInputNumberChange}
          />
        </fieldset>
        <fieldset>
          <legend>Count Genegare Room</legend>
          <label htmlFor='count'>Count Room</label>
          <input
            type='number'
            name='countRoom'
            id='count'
            className='price'
            value={addRoomsForm.countRoom}
            onChange={handleInputNumberChange}
          />
        </fieldset>
        <button className='button' onClick={handleButtonAddRoomsClick}>
          Add Rooms
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  handleInputText,
  handleInputNumber,
  handleInputBedCount,
  handleButtonAddRooms,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepresentativeAddRoms)
