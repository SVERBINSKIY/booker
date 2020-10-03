import React from 'react'

export const RepresentativeHotelItem = ({ data }) => {
  return (
    <div className='hotel-item'>
      <h1>Name: {data.name}</h1>
      <h3>Location: {data.location.country.name} / {data.location.city.name}</h3>
      <p>{data.description}</p>
      <h2>Stars: {data.stars}</h2>
      <p>Min Price: {data.minPrice} | Max Price: {data.maxPrice}</p>
    </div>
  )
}