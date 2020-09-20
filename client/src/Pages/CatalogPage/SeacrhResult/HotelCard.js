import React from 'react'
import Hotel from '../../../resourses/catalog/hotel_example.jpeg'

export const HotelCard = () => {
  return (
    <div className='search-result__hotel-card'>
      <img src={Hotel} alt='img'/>
      <span className='hotel-name'>Hilton Hotel</span>
      <span className='hotel-location'>Brest, Belarus</span>
      <div className='hotel-stars'>stars</div>
      <p className='hotel-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
      <p className='hotel-price'><span>$120</span>/Per Night</p>
      <button className='hotel-see-more'>See Details >></button>
    </div>
  )
}