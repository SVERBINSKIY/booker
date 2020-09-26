import React from 'react'

export const HotTour = ({ title, hotelCount }) => {
  return (
    <div className='hotel'>
      <div className='hotel-wrapper'>
        <span className='city-name'>{title}</span>
        <span className='count-hotels'>{hotelCount} Hotels</span>
      </div>
    </div>
  )
}