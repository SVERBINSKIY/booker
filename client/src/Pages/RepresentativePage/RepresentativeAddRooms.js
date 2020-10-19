import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddRoomInputChange, handleCheckboxInputChange, handleAddRoomSubmit } from '../../redux/actions/representativeAction'

const RepresentativeAddRoms = (props) => {
  const { id } = useParams()
  const handleCheckboxChange = e => {
    e.persist()
    props.handleCheckboxInputChange(e.target.name)
  }
  const handleSelectChange = e => {
    e.persist()
    const name = e.target.name
    const value = e.target.value
    props.handleAddRoomInputChange(name, value)
  }
  const handleAddRoomsClick = e => {
    e.preventDefault()
    const form = props.representative.addRooms
    const hotelId = {hotelId: id}
    const totalForm = Object.assign(form, hotelId)
    props.handleAddRoomSubmit(totalForm)
  }

  return (
    <div className='add-room__wrapper'>
      <h2>Add rooms to hotel</h2>
      <div className='form'>
        <fieldset>
          <legend><h5>Configuration Room</h5></legend>

          <input 
            type='checkbox' 
            name='children' 
            id='children' 
            className="check"
            checked={props.representative.addRooms.children}
            value={props.representative.addRooms.children}
            onChange={handleCheckboxChange}
            disabled={props.representative.addRooms.sharing ? true : false}
          /><label htmlFor='children'>Children</label><br />

          <input 
            type='checkbox' 
            name='sharing' 
            id='sharing' 
            className="check" 
            checked={props.representative.addRooms.sharing}
            value={props.representative.addRooms.sharing}
            onChange={handleCheckboxChange}
            disabled={props.representative.addRooms.children ? true : false}
          /><label htmlFor='sharing'>Sharing</label><br />

          <label htmlFor='roomType'>Type</label>
          <br />
          <select name='roomType' id='roomType' className="select" onChange={handleSelectChange}>
            <optgroup label='All'>
              <option value="null">Select Room Type</option>
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

          <label htmlFor='accommodation'>Accommodation</label>
          <br />
          <select name='accommodationType' id='accommodation' className="select" onChange={handleSelectChange}>
            <optgroup label='Without Sharing'>
              <option value="null">Select Accommodation Type</option>
              <option value='sgl'>Single</option>
              <option value='dbl'>Double</option>
              <option value='trpl'>Triple</option>
            </optgroup>
            <optgroup label='With Sharing'>
              <option value='dblShr'>Double</option>
              <option value='trpShr'>Triple</option>
            </optgroup>
            <optgroup label='With Children'>
              <option value='sglChld'>Single + Children</option>
              <option value='dblChld'>Double + Children</option>
              <option value='dblExpChld'>Double + Bad + Children</option>
              <option value='sgl2Chld'>Single + 2 Children</option>
              <option value='dbl2Chld'>Double + 2 Children</option>
              <option value='trp2Chld'>Triple + 2 Children</option>
            </optgroup>
          </select>
          <br />
        </fieldset>
        <fieldset>
          <legend><h5>Description Room</h5></legend>
          <label htmlFor='descriptionRoom'>Description Room</label>
          <textarea
            name='description'
            id='descriptionRoom'
            cols='30'
            rows='3'
            value={props.representative.addRooms.description}
            onChange={handleSelectChange}
          ></textarea>
          <label htmlFor="priceRoom">Price Adults</label>
          <input 
            type="number" 
            name="price" 
            id="priceRoom" 
            className="price"
            value={props.representative.addRooms.price}
            onChange={handleSelectChange}
          />
          {props.representative.addRooms.children ? <label htmlFor="priceRoomChildren">Price Children</label> : ''}
          <input 
            type={props.representative.addRooms.children ? "number" : "hidden"} 
            name="priceChildren" 
            id="priceChildren" 
            className="price"
            value={props.representative.addRooms.priceChildren} 
            onChange={handleSelectChange}  
          />
        </fieldset>
        <fieldset>
          <legend>Count Genegare Room</legend>
          <label htmlFor="count">Count Room</label>
          <input 
            type="text" 
            name="countRoom" 
            id="count" 
            className="input" 
            value={props.representative.addRooms.countRoom}
            onChange={handleSelectChange}
          />
        </fieldset>
        <button className="button" onClick={handleAddRoomsClick}>Add Rooms</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  handleAddRoomInputChange,
  handleCheckboxInputChange,
  handleAddRoomSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeAddRoms)
