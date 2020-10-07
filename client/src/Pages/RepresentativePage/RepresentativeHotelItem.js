import React from 'react'
import { useHistory } from 'react-router-dom'

export const RepresentativeHotelItem = ({ data }) => {
  const history = useHistory()
  return (
    <div className='hotel-item' onClick={() => {history.push(`/representative/hotel/${data._id}`)}}>
      <div className='info'>
        <img src={`/img/${data.mainImg}`} alt=''/>
        <div className='cont'>
          <span className='name'>{data.name}</span>
          <span className='location'>{data.location.country.name} / {data.location.city.name}</span>
          <p className='desc'>{data.description}</p>
          <span className='price'>Min.Price: ${data.minPrice}<small>Per/Night</small></span>
          <span className='price'>Max.Price: ${data.maxPrice}<small>Per/Night</small></span>
        </div>
      </div>
      <div className='panel'>
        <button className='btn' onClick={() => {history.push(`/representative/hotel/${data._id}`)}}>Open</button>
        <button className='btn'>Booking</button>
        <button className='btn'>Edit</button>
        <button className='btn delete'>Delete</button>
      </div>

    </div>
  )
}