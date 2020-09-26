import React from 'react'
import { HotTour } from './HotTour'

export const SecondBlock = (props) => {
  return (
    <section className='second'>
      <div className='second-wrapper'>
        <span className='second-text'>Hot Right Now</span>
        <span className='second-text-main'>Popular Destinations</span>
        <div className='hot-tour'>
          {props.second.map(hotel => <HotTour
                                        key={hotel.id}
                                        title={hotel.title}
                                        hotelCount={hotel.hotelCount}
                                     />)}
        </div>
        <button className='btn'>View All Destinations >></button>
      </div>
    </section>
  )
}