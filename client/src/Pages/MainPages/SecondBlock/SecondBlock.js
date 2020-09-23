import React from 'react'
import { HotTour } from './HotTour'

export const SecondBlock = () => {
  return (
    <section className='second'>
      <div className='second-wrapper'>
        <span className='second-text'>Hot Right Now</span>
        <span className='second-text-main'>Popular Destinations</span>
        <div className='hot-tour'>
          <HotTour />
          <HotTour />
          <HotTour />
          <HotTour />
        </div>
        <button className='btn'>View All Destinations >></button>
      </div>
    </section>
  )
}