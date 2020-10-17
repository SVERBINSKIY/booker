import React from 'react'

export const HotelCard = ({ hotelName, hotelLocation, hotelStars, hotelDescription, hotelPrice, mainImg }) => {
  return (
    <div className='search-result__hotel-card'>
      <img src={`/img/${mainImg}`} alt='img'/>
      <div className='desc'>
        <span className='hotel-name'>{hotelName}</span>
        <span className='hotel-location'>{hotelLocation.country.name} / {hotelLocation.city.name}</span>
        <div className='hotel-stars'>{hotelStars}</div>
        <p className='hotel-description'>{hotelDescription.substr(0, 100)}...</p>
      </div>
      <div className='price-btn'>
        <p className='hotel-price'><span className='price'>${hotelPrice}</span>/Per Night</p>
        <button className='hotel-see-more'>See Details >></button>
      </div>
    </div>
  )
}