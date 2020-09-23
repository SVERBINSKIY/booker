import React from 'react'
import Hotel from '../../../resourses/catalog/hotel_example.jpeg'

export const HotelCard = ({ hotelName, hotelLocation, hotelStars, hotelDescription, hotelPrice }) => {
  return (
    <div className='search-result__hotel-card'>
      <img src={Hotel} alt='img'/>
      <div className='desc'>
        <span className='hotel-name'>{hotelName}</span>
        <span className='hotel-location'>{hotelLocation}</span>
        <div className='hotel-stars'>{hotelStars}</div>
        <p className='hotel-description'>{hotelDescription}</p>
      </div>
      <div className='price-btn'>
        <p className='hotel-price'><span className='price'>${hotelPrice}</span>/Per Night</p>
        <button className='hotel-see-more'>See Details >></button>
      </div>
    </div>
  )
}