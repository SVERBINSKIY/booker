import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Loader } from '../Loader'

const RepresentativeHotelPageItem = (props) => {
  const history = useHistory()
  const [location, setLocation] = useState({})

  useEffect(() => {
    setLocation(props.loading ? 'loading' : props.hotelData.location)
  }, [setLocation])
  const handleToAddRoomClick = () => {
    history.push(`/representative/add-room/${props.hotelData._id}`)
  }
  
  return (
    props.loading ? <Loader/> : <div className='hotel__wrapper'>
      <div className='hotel__wrapper__header'>
        <div className='hotel__wrapper__header__name-hotel'>
          <h2>
            {props.hotelData.name} / 
            <span className='hotel__wrapper__header__name-hotel__location'>
              {location.country ? location.country.name: ''} - {location.city ? location.city.name : ''}
            </span>
          </h2>
        </div>
        <div className='hotel__wrapper__header__control'>
          {props.hotelData.propertyType === 'hotel' ? (
            <button className='button' onClick={handleToAddRoomClick}>
              Add rooms
            </button>
          ) : null}
          <button className='button'>Edit hotel</button>
        </div>
      </div>
      <div className='hotel__wrapper__booking'>booking panel</div>
    </div>
  )
}

export default RepresentativeHotelPageItem
