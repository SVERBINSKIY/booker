import React from 'react'
import { HotelCard } from './HotelCard'

export const SearchResult = ({ catalogLayout, hotelsData }) => {

  return (
    <div className={`catalog__search-result-${catalogLayout}`}>
      {hotelsData.map(hotel => <HotelCard
                                  key={hotel.id}
                                  hotelName={hotel.hotelName}
                                  hotelLocation={hotel.hotelLocation}
                                  hotelStars={hotel.hotelStars}
                                  hotelDescription={hotel.hotelDescription}
                                  hotelPrice={hotel.hotelPrice}/>)}
    </div>
  )
}