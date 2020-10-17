import React from 'react'

const RepresentativeHotelPageItem = (props) => {
  return (
    <div className='hotel__wrapper'>
      <div className='hotel__wrapper__header'>
        <div className='hotel__wrapper__header__name-hotel'>
          <h2>{props.hotelData.name}</h2>
        </div>
        <div className='hotel__wrapper__header__control'>
          {props.hotelData.propertyType === 'hotel' ? (
            <button className='button'>Add rooms</button>
          ) : null}
          <button className='button'>Edit hotel</button>
        </div>
      </div>
      <div className='hotel__wrapper__booking'>booking panel</div>
    </div>
  )
}

export default RepresentativeHotelPageItem
