import React from 'react'
import { HotelCard } from './HotelCard'
import { Loader } from '../../Loader'

export const SearchResult = ({ catalogLayout, hotelsData, loading }) => {

  return (
    <div className={`catalog__search-result-${catalogLayout}`}>
      {loading ? <Loader /> : hotelsData.map(hotel => <HotelCard
                                  key={hotel._id}
                                  mainImg={hotel.mainImg}
                                  hotelName={hotel.name}
                                  hotelLocation={hotel.location}
                                  hotelStars={hotel.stars}
                                  hotelDescription={hotel.description}
                                  hotelPrice={hotel.minPrice}/>)}
    </div>
  )
}